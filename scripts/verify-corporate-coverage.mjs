/** Preserve every exported page and verify that public pages are reachable. */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const baseline = JSON.parse(
  readFileSync("config/corporate-page-baseline.json", "utf8"),
);
const pages = new Map();
function discover(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) discover(file);
    else if (entry.name.endsWith(".html")) {
      const name = "/" + relative("out", file).replace(/\.html$/, "");
      pages.set(name === "/index" ? "/" : name, readFileSync(file, "utf8"));
    }
  }
}
discover("out");
const missing = baseline.routes.filter((route) => !pages.has(route));
if (missing.length)
  throw new Error(`Pre-recovery pages were removed: ${missing.join(", ")}`);

const redirects = new Map(
  readFileSync("out/_redirects", "utf8")
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.startsWith("#"))
    .map((line) => line.trim().split(/\s+/))
    .map(([source, target]) => [source, target]),
);
const origin = "https://spineinnovtech.com";
const excluded = new Set([
  "/404",
  "/_not-found",
  "/login",
  "/workspace",
  "/onboarding",
  "/request-access",
  "/pricing",
]);
function localPath(href, source) {
  const url = new URL(href.replaceAll("&amp;", "&"), origin + source);
  if (url.origin !== origin) return null;
  let path = decodeURIComponent(url.pathname).replace(/\/$/, "") || "/";
  const visited = new Set();
  while (redirects.has(path)) {
    if (visited.has(path)) throw new Error(`Redirect loop at ${path}`);
    visited.add(path);
    const next = new URL(redirects.get(path), origin);
    if (next.origin !== origin) return null;
    path = next.pathname.replace(/\/$/, "") || "/";
  }
  return path;
}
const reachable = new Set(["/"]);
const pending = ["/"];
const broken = new Set();
while (pending.length) {
  const source = pending.shift();
  const html = pages.get(source);
  if (!html) continue;
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const path = localPath(match[1], source);
    if (!path) continue;
    const fragment = decodeURIComponent(
      new URL(match[1].replaceAll("&amp;", "&"), origin + source).hash.slice(1),
    );
    if (fragment && pages.has(path) && !excluded.has(source)) {
      const ids = new Set(
        [...pages.get(path).matchAll(/\bid="([^"]+)"/g)].map(match => match[1]),
      );
      if (!ids.has(fragment)) broken.add(`${source} -> ${path}#${fragment}`);
    }
    if (!pages.has(path)) {
      if (!existsSync(join("out", path))) broken.add(`${source} -> ${path}`);
    } else if (!reachable.has(path)) {
      reachable.add(path);
      pending.push(path);
    }
  }
}
const publicPages = [...pages.keys()].filter(
  (path) => !excluded.has(path) && !redirects.has(path),
);
const unreachable = publicPages.filter((path) => !reachable.has(path));
if (broken.size)
  throw new Error(`Broken internal links: ${[...broken].join(", ")}`);
if (unreachable.length)
  throw new Error(
    `Public pages cannot be reached from the homepage: ${unreachable.join(", ")}`,
  );
if (!pages.has("/site-map")) throw new Error("Full website directory missing.");
console.log(
  `Corporate coverage verified: all ${baseline.routes.length} previous exported pages retained; ${publicPages.length} public pages reachable from the homepage.`,
);
