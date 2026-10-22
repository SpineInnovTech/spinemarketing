/**
 * Cloudflare Workers Builds production contract — repository checks only.
 * Cloudflare Dashboard > Worker > Settings > Builds still owns the connection.
 */
import { existsSync, readFileSync } from "node:fs";

function assert(condition, description) {
  if (!condition) throw new Error(`Cloudflare release contract: ${description}`);
}

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const wrangler = JSON.parse(readFileSync("wrangler.jsonc", "utf8"));
const build = JSON.parse(readFileSync("config/cloudflare-builds.json", "utf8"));
const next = readFileSync("next.config.mjs", "utf8");
const worker = readFileSync("worker/index.ts", "utf8");
const manifest = JSON.parse(readFileSync("package-lock.json", "utf8"));

assert(!existsSync(".circleci/config.yml"), "old CircleCI config remains enabled");
assert(!existsSync(".circleci/info.yml"), "old CircleCI registration remains");
assert(!existsSync("scripts/check-circleci-config.mjs"), "obsolete CircleCI validator remains");
assert(wrangler.account_id === build.account, "Cloudflare account ID diverged from documented build settings");
assert(wrangler.name === build.worker, "Worker name differs from registered Cloudflare name");
assert(wrangler.env?.prod?.name === build.worker, "prod environment must target existing Worker");
assert(wrangler.main === "worker/index.ts", "static asset Worker entry must remain stable");
assert(wrangler.assets?.directory === "./out", "static assets must be served from out/");
assert(wrangler.assets?.binding === "ASSETS", "Worker must bind static assets");
assert(wrangler.env?.prod?.routes?.some(r => r.pattern === "spineinnovtech.com" && r.custom_domain === true), "production custom domain spineinnovtech.com missing");
assert(wrangler.env?.prod?.routes?.some(r => r.pattern === "www.spineinnovtech.com" && r.custom_domain === true), "production custom domain www.spineinnovtech.com missing");
assert(wrangler.env.prod.vars?.CANONICAL_REDIRECTS_ENABLED === "true", "canonical domain consolidation redirects must be enabled");
assert(wrangler.env.prod.vars?.CANONICAL_SITE_URL === "https://spineinnovtech.com", "canonical site URL must point to spineinnovtech.com");
assert(wrangler.env.prod.vars?.LEGACY_REDIRECT_HOSTS?.includes("spineinnovtech.spineworkspace.com"), "legacy redirect hosts must include spineinnovtech.spineworkspace.com");
assert(/output:\s*['"]export['"]/.test(next), "Next.js must remain static export");
assert(worker.includes("env.ASSETS.fetch(request)"), "Worker must serve static asset binding");
assert(build.repository === "SpineInnovLabs/spinemarketing" && build.productionBranch === "main", "build repo/branch mismatch");
assert(build.rootDirectory === ".", "Cloudflare Builds must use repository root");
assert(build.buildCommand === "npm run build:cloudflare", "Cloudflare Build command mismatch");
const pipeline = pkg.scripts?.["build:cloudflare"] ?? "";
for (const gate of ["npm run lint", "npm run audit:site", "npm run check:cloudflare", "npm run typecheck", "npm run build", "npm run verify:artifact"]) {
  assert(pipeline.includes(gate), `Cloudflare build is missing gate: ${gate}`);
}
assert(build.deployCommand === "npm run deploy:cloudflare", "Cloudflare Deploy command mismatch");
assert(pkg.scripts?.["deploy:cloudflare"]?.includes("wrangler deploy --env prod"), "Cloudflare deploy must target prod");
assert(pkg.scripts?.["deploy:cloudflare"]?.includes("verify:live"), "deployment must verify public hostname");
assert(pkg.scripts?.check?.includes("check:cloudflare"), "release preflight must include Cloudflare config");
assert(!pkg.scripts?.check?.includes("check:ci"), "obsolete CircleCI check still referenced");
assert(manifest.packages?.[""]?.name === pkg.name, "package lock root must match package.json");
console.log("Cloudflare Workers Builds repository contract verified.");
