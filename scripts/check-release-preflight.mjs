/**
 * Fast zero-network preflight for the marketing repository.
 * This is intentionally dependency-free. It complements (not replaces) the
 * Next.js compile/typecheck performed by npm run build.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const failures = [];
function check(condition, explanation) {
  if (!condition) failures.push(explanation);
}
function read(path) {
  return readFileSync(path, "utf8");
}

const manifest = JSON.parse(read("package.json"));
const lock = JSON.parse(read("package-lock.json"));
const lockRoot = lock.packages?.[""] ?? {};
check(lock.lockfileVersion === 3, "npm package-lock v3 required");
check(lock.name === manifest.name, "package and npm lock name differ");
for (const field of ["dependencies", "devDependencies"]) {
  const expected = manifest[field] ?? {};
  const actual = lockRoot[field] ?? {};
  for (const [name, version] of Object.entries(expected)) {
    check(actual[name] === version, `package-lock mismatch for ${field}.${name}`);
  }
  for (const name of Object.keys(actual)) {
    check(name in expected, `unused root ${field} entry in package-lock: ${name}`);
  }
}
check(!existsSync("pnpm-lock.yaml"), "remove stale pnpm-lock.yaml (npm is canonical)");
check(!existsSync(".npmrc"), "remove obsolete pnpm-only .npmrc settings");
check(manifest.scripts?.build?.includes("next build"), "missing Next.js production build");
check(!manifest.scripts?.start?.includes("next start"), "next start is incompatible with static export");

const config = read("next.config.mjs");
check(/output:\s*['"]export['"]/.test(config), "site must remain static-exported for Workers Assets");
check(existsSync("wrangler.jsonc"), "Cloudflare Wrangler config missing");
const wrangler = JSON.parse(read("wrangler.jsonc"));
check(wrangler.assets?.directory === "./out", "Wrangler must deploy the Next.js out/ directory");
check(
  wrangler.env?.prod?.routes?.some((route) => route.pattern === "spineinnovtech.com"),
  "spineinnovtech.com hostname is not bound to Cloudflare Worker",
);

const home = read("app/page.tsx");
const banner = read("components/marketing/innovlabs-home.tsx");
check(home.includes("InnovLabsHome"), "homepage no longer renders Spine InnovTech");
check(banner.includes("SPINE INNOVTECH") && banner.includes("SpineWorkspace connects your tools, context and team."), "company identity and product introduction missing");
for (const asset of ["public/og.png", "public/icon.svg"]) {
  check(existsSync(asset), `missing shared metadata asset ${asset}`);
}

const routes = new Set(["/"]);
function discover(dir, segments = []) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
      discover(join(dir, entry.name), /^\(.+\)$/.test(entry.name) ? segments : [...segments, entry.name]);
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      routes.add("/" + segments.join("/"));
    }
  }
}
discover("app");
function routeExists(route) {
  if (routes.has(route) || existsSync("public" + route)) return true;
  return [...routes].some((pattern) => {
    if (!pattern.includes("[")) return false;
    const expected = pattern.split("/");
    const actual = route.split("/");
    return expected.length === actual.length && expected.every((segment, i) =>
      segment === actual[i] ||
      (segment.startsWith("[") && segment.endsWith("]") && actual[i].length > 0)
    );
  });
}
const inspected = [
  "lib/navigation.ts",
  "components/footer.tsx",
  "components/header.tsx",
  "components/marketing/innovlabs-home.tsx",
  "app/company/page.tsx",
  "app/page.tsx",
];
for (const file of inspected) {
  const text = read(file);
  for (const match of text.matchAll(/\bhref\s*(?:=|:)\s*["'](\/(?!\/)[^"'\s]+)["']/g)) {
    const route = match[1].split(/[?#]/)[0].replace(/\/$/, "") || "/";
    check(routeExists(route), `broken internal link ${match[1]} in ${file}`);
  }
}

if (failures.length) {
  console.error("Release preflight failed:");
  for (const failure of failures) console.error(" - " + failure);
  process.exitCode = 1;
} else {
  console.log(`Release preflight passed: npm lock, static deployment, hero, assets, and ${routes.size} routes.`);
}
