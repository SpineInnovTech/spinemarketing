/**
 * Worker SITE_ENV behaviour contract.
 *
 * Non-production environments (SITE_ENV set and not "prod") must:
 *   - stamp `X-Robots-Tag: noindex, nofollow` on EVERY response (assets + redirects)
 *   - answer /robots.txt with `User-agent: *` / `Disallow: /`
 *
 * Production (SITE_ENV "prod" or unset) must behave IDENTICALLY to before this
 * change: no X-Robots-Tag header is added and /robots.txt is served from the
 * static asset binding untouched.
 *
 * Run: node scripts/test-worker-env.mjs
 */
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

async function getWorkerHandler() {
  const workerPath = resolve("worker/index.ts");
  if (!existsSync(workerPath)) throw new Error("worker/index.ts not found");
  const mod = await import(pathToFileURL(workerPath).href);
  return mod.default || mod;
}

function mockAssets() {
  return {
    async fetch(req) {
      const url = new URL(req.url);
      const contentType = url.pathname.endsWith(".txt")
        ? "text/plain"
        : "text/html; charset=utf-8";
      const body =
        url.pathname === "/robots.txt"
          ? "User-agent: *\nAllow: /\nSitemap: https://spineinnovtech.com/sitemap.xml\n"
          : `STATIC_ASSET: ${url.pathname}`;
      return new Response(body, { status: 200, headers: { "Content-Type": contentType } });
    },
  };
}

function envFor(siteEnv) {
  const base = {
    CANONICAL_REDIRECTS_ENABLED: "false",
    CANONICAL_SITE_URL: "https://spineinnovtech.com",
    ASSETS: mockAssets(),
  };
  if (siteEnv !== undefined) base.SITE_ENV = siteEnv;
  return base;
}

// Production env mirrors the real prod vars (redirects on, legacy hosts present).
function prodEnv(siteEnv) {
  const env = {
    CANONICAL_REDIRECTS_ENABLED: "true",
    CANONICAL_SITE_URL: "https://spineinnovtech.com",
    LEGACY_REDIRECT_HOSTS:
      "spineinnovtech.spineworkspace.com,spineinnovlabs.spineworkspace.com,spineinnovlabs.com,www.spineinnovlabs.com,www.spineinnovtech.com",
    ASSETS: mockAssets(),
  };
  if (siteEnv !== undefined) env.SITE_ENV = siteEnv;
  return env;
}

let failures = 0;
let passes = 0;
async function test(name, fn) {
  try {
    await fn();
    passes += 1;
    console.log(`  ok   ${name}`);
  } catch (err) {
    failures += 1;
    console.error(`  FAIL ${name}\n       ${err.message}`);
  }
}

const worker = await getWorkerHandler();

console.log("Worker SITE_ENV behaviour contract");

// --- Non-production: dev + test ---
for (const siteEnv of ["dev", "test"]) {
  await test(`[${siteEnv}] homepage carries X-Robots-Tag noindex, nofollow`, async () => {
    const res = await worker.fetch(new Request("https://x.spineinnovtech.com/"), envFor(siteEnv));
    assert.equal(res.status, 200);
    assert.equal(res.headers.get("X-Robots-Tag"), "noindex, nofollow");
  });

  await test(`[${siteEnv}] /company carries X-Robots-Tag noindex, nofollow`, async () => {
    const res = await worker.fetch(new Request("https://x.spineinnovtech.com/company"), envFor(siteEnv));
    assert.equal(res.headers.get("X-Robots-Tag"), "noindex, nofollow");
  });

  await test(`[${siteEnv}] /robots.txt disallows all`, async () => {
    const res = await worker.fetch(new Request("https://x.spineinnovtech.com/robots.txt"), envFor(siteEnv));
    assert.equal(res.status, 200);
    const body = await res.text();
    assert.match(body, /^User-agent:\s*\*/m);
    assert.match(body, /^Disallow:\s*\/\s*$/m);
    assert.equal(res.headers.get("X-Robots-Tag"), "noindex, nofollow");
  });

  await test(`[${siteEnv}] /pricing 308 redirect still carries noindex`, async () => {
    const res = await worker.fetch(new Request("https://x.spineinnovtech.com/pricing"), envFor(siteEnv));
    assert.equal(res.status, 308);
    assert.equal(res.headers.get("X-Robots-Tag"), "noindex, nofollow");
  });
}

// --- Production: SITE_ENV "prod" AND unset must both be unaffected ---
for (const label of ["prod", "unset"]) {
  const siteEnv = label === "prod" ? "prod" : undefined;

  await test(`[${label}] homepage has NO X-Robots-Tag header`, async () => {
    const res = await worker.fetch(new Request("https://spineinnovtech.com/"), prodEnv(siteEnv));
    assert.equal(res.status, 200);
    assert.equal(res.headers.get("X-Robots-Tag"), null);
  });

  await test(`[${label}] /robots.txt served from static asset (Allow: /, not Disallow)`, async () => {
    const res = await worker.fetch(new Request("https://spineinnovtech.com/robots.txt"), prodEnv(siteEnv));
    assert.equal(res.status, 200);
    const body = await res.text();
    assert.match(body, /Allow:\s*\//);
    assert.doesNotMatch(body, /^Disallow:\s*\/\s*$/m);
    assert.equal(res.headers.get("X-Robots-Tag"), null);
  });

  await test(`[${label}] legacy host still 301s to canonical with no noindex`, async () => {
    const res = await worker.fetch(new Request("https://spineinnovtech.spineworkspace.com/"), prodEnv(siteEnv));
    assert.equal(res.status, 301);
    assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/");
    assert.equal(res.headers.get("X-Robots-Tag"), null);
  });

  await test(`[${label}] /pricing 308 redirect has no noindex`, async () => {
    const res = await worker.fetch(new Request("https://spineinnovtech.com/pricing"), prodEnv(siteEnv));
    assert.equal(res.status, 308);
    assert.equal(res.headers.get("X-Robots-Tag"), null);
  });
}

console.log(`\n${passes} passed, ${failures} failed`);
if (failures > 0) process.exit(1);
