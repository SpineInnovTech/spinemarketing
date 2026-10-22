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

// Non-production environments: dev and test bind exactly one custom domain each
// (dev.spineinnovtech.com / test.spineinnovtech.com) and are marked non-prod via
// SITE_ENV so the worker keeps them out of search indexes.
assert(wrangler.env?.dev?.name === "spineinnovtech-marketing-dev", "dev environment must target the dev worker");
assert(wrangler.env?.test?.name === "spineinnovtech-marketing-test", "test environment must target the test worker");
assert(
  wrangler.env?.dev?.routes?.length === 1 &&
    wrangler.env.dev.routes[0].pattern === "dev.spineinnovtech.com" &&
    wrangler.env.dev.routes[0].custom_domain === true,
  "dev environment must bind exactly the custom domain dev.spineinnovtech.com",
);
assert(
  wrangler.env?.test?.routes?.length === 1 &&
    wrangler.env.test.routes[0].pattern === "test.spineinnovtech.com" &&
    wrangler.env.test.routes[0].custom_domain === true,
  "test environment must bind exactly the custom domain test.spineinnovtech.com",
);
assert(wrangler.env.dev.vars?.SITE_ENV === "dev", "dev environment must set SITE_ENV=dev");
assert(wrangler.env.test.vars?.SITE_ENV === "test", "test environment must set SITE_ENV=test");
assert(wrangler.env.prod.vars?.SITE_ENV === "prod", "prod environment must set SITE_ENV=prod");
assert(wrangler.env.dev.vars?.CANONICAL_REDIRECTS_ENABLED === "false", "dev environment must disable canonical redirects");
assert(wrangler.env.test.vars?.CANONICAL_REDIRECTS_ENABLED === "false", "test environment must disable canonical redirects");

// No environment may bind a spineworkspace.com host as a route. Legacy hosts are
// handled only by the passive LEGACY_REDIRECT_HOSTS var + worker redirect source.
for (const [envName, envCfg] of Object.entries(wrangler.env ?? {})) {
  for (const route of envCfg?.routes ?? []) {
    assert(
      !String(route.pattern).includes("spineworkspace.com"),
      `env.${envName} must not bind a spineworkspace.com host as a route: ${route.pattern}`,
    );
  }
}

// The worker source must honour SITE_ENV: a non-prod environment gets noindex and
// a blanket-disallow robots.txt, proven by scripts/test-worker-env.mjs.
assert(worker.includes("X-Robots-Tag") && worker.includes("SITE_ENV"), "worker must apply noindex handling keyed on SITE_ENV");
assert(/output:\s*['"]export['"]/.test(next), "Next.js must remain static export");
assert(worker.includes("env.ASSETS.fetch(request)"), "Worker must serve static asset binding");
assert(build.repository === "SpineInnovTech/spinemarketing" && build.productionBranch === "main", "build repo/branch mismatch");
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
