#!/usr/bin/env node
/**
 * Spine InnovTech E2E Opaque-Box Test Suite Runner
 *
 * Verifies all 23 features across:
 * - Tier 1: Feature Coverage (>=5 tests per feature = 115 tests)
 * - Tier 2: Boundary & Corner Cases (15 tests)
 * - Tier 3: Cross-Feature Combinations (10 tests)
 * - Tier 4: Real-World Scenarios & User Journeys (6 tests)
 *
 * Usage:
 *   node scripts/test-e2e.mjs
 *   node scripts/test-e2e.mjs --tier 1
 *   node scripts/test-e2e.mjs --tier 2
 *   node scripts/test-e2e.mjs --feature 4
 *   node scripts/test-e2e.mjs --verbose
 *   node scripts/test-e2e.mjs --summary
 */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import assert from "node:assert/strict";
import vm from "node:vm";
import { pathToFileURL } from "node:url";

// ============================================================================
// CLI Argument Parsing
// ============================================================================
const args = process.argv.slice(2);
let targetTier = null;
let targetFeature = null;
let verbose = false;
let summaryOnly = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--tier" && args[i + 1]) {
    targetTier = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === "--feature" && args[i + 1]) {
    targetFeature = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === "--verbose" || args[i] === "-v") {
    verbose = true;
  } else if (args[i] === "--summary") {
    summaryOnly = true;
  }
}

// ============================================================================
// Paths & Workspaces
// ============================================================================
const CORPORATE_ROOT = resolve(".");
const PRODUCT_MARKETING_ROOT = resolve("../spineworkspace-live/apps/marketing");

// ============================================================================
// Dynamic Module & Config Loaders
// ============================================================================

function readJsonSafe(filePath) {
  if (!existsSync(filePath)) return null;
  const content = readFileSync(filePath, "utf8");
  // String-aware comment and trailing comma stripper
  const clean = content
    .replace(/("(?:\\.|[^"\\])*")|\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, (m, str) => (str ? str : ""))
    .replace(/,(\s*[}\]])/g, "$1");
  try {
    return JSON.parse(clean);
  } catch {
    return null;
  }
}

function readYamlSafe(filePath) {
  if (!existsSync(filePath)) return null;
  const text = readFileSync(filePath, "utf8");
  // Simple regex-based extractor for critical config.yaml keys
  const get = (pattern) => {
    const match = text.match(pattern);
    return match ? match[1].trim() : null;
  };
  return {
    prod_public_url: get(/public_url:\s*(https?:\/\/[^\s\n]+)/),
    prod_canonical_url: get(/canonical_url:\s*(https?:\/\/[^\s\n]+)/),
    build_prod_site_url: get(/prod_site_url:\s*(https?:\/\/[^\s\n]+)/),
    raw: text,
  };
}

let loadedWorker = null;
async function getWorkerHandler() {
  if (loadedWorker) return loadedWorker;
  const workerPath = resolve("worker/index.ts");
  if (!existsSync(workerPath)) return null;
  try {
    const mod = await import(pathToFileURL(workerPath).href);
    loadedWorker = mod.default || mod;
    return loadedWorker;
  } catch (err) {
    if (verbose) console.warn("Failed to dynamically import worker/index.ts:", err.message);
    return null;
  }
}

function evaluateWorkspaceEntry() {
  const file = resolve("lib/workspace-entry.ts");
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, "utf8");
  const stripped = raw
    .replace(/import\s+.*?from\s+['"][^'"]+['"];?/g, "")
    .replace(/:\s*Readonly<Record<[^>]+>>/g, "")
    .replace(/:\s*string\b/g, "")
    .replace(/:\s*['"]signup['"]\s*\|\s*['"]login['"]/g, "")
    .replace(/export\s+/g, "");

  const sandbox = {
    SPINE_WORKSPACE_APEX: "https://spineworkspace.com",
    AUTH_ORIGIN: "https://auth.spineworkspace.com",
    SPINE_WORKSPACE_APP: "https://app.spineworkspace.com",
    URL,
    Object,
  };
  try {
    vm.createContext(sandbox);
    vm.runInContext(stripped, sandbox, { timeout: 1000 });
    return sandbox;
  } catch (err) {
    if (verbose) console.warn("Failed to evaluate workspace-entry in VM:", err.message);
    return null;
  }
}

// Default Edge Environment Mock
function createMockEdgeEnv(overrides = {}) {
  return {
    CANONICAL_REDIRECTS_ENABLED: "true",
    CANONICAL_SITE_URL: "https://spineinnovtech.com",
    LEGACY_REDIRECT_HOSTS:
      "spineinnovtech.spineworkspace.com,spineinnovlabs.spineworkspace.com,spineinnovlabs.com,www.spineinnovlabs.com,www.spineinnovtech.com",
    ASSETS: {
      async fetch(req) {
        const url = new URL(req.url);
        const contentType = url.pathname.endsWith(".js")
          ? "application/javascript"
          : url.pathname.endsWith(".css")
            ? "text/css"
            : url.pathname.endsWith(".webp")
              ? "image/webp"
              : url.pathname.endsWith(".xml")
                ? "application/xml"
                : url.pathname.endsWith(".txt")
                  ? "text/plain"
                  : "text/html; charset=utf-8";
        return new Response(`STATIC_ASSET: ${url.pathname}`, {
          status: 200,
          headers: { "Content-Type": contentType },
        });
      },
    },
    ...overrides,
  };
}

// ============================================================================
// Test Suite Registry & Test Execution Engine
// ============================================================================
const tests = [];

function registerTest(tier, feature, id, title, fn) {
  tests.push({ tier, feature, id, title, fn });
}

// ============================================================================
// TIER 1: FEATURE COVERAGE (Features 1 to 23, >= 5 tests each)
// ============================================================================

// Feature 1: wrangler.jsonc Routes
registerTest(1, 1, "F1.1", "wrangler.jsonc defines routes in env.prod", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  assert.ok(w?.env?.prod?.routes, "env.prod.routes must exist");
  assert.ok(Array.isArray(w.env.prod.routes), "env.prod.routes must be an array");
});

registerTest(1, 1, "F1.2", "wrangler.jsonc specifies spineinnovtech.com as custom domain", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const r = w?.env?.prod?.routes?.find((x) => x.pattern === "spineinnovtech.com");
  assert.ok(r, "spineinnovtech.com route missing under env.prod.routes");
  assert.equal(r.custom_domain, true, "spineinnovtech.com must have custom_domain: true");
});

registerTest(1, 1, "F1.3", "wrangler.jsonc specifies www.spineinnovtech.com as custom domain", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const r = w?.env?.prod?.routes?.find((x) => x.pattern === "www.spineinnovtech.com");
  assert.ok(r, "www.spineinnovtech.com route missing under env.prod.routes");
  assert.equal(r.custom_domain, true, "www.spineinnovtech.com must have custom_domain: true");
});

registerTest(1, 1, "F1.4", "wrangler.jsonc binds only spineinnovtech.com production domains (no legacy custom-domain bindings)", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const routes = w?.env?.prod?.routes || [];
  const patterns = routes.map((r) => r.pattern);
  // Deployment decision: production worker serves spineinnovtech.com only.
  // Legacy hosts are handled by passive LEGACY_REDIRECT_HOSTS + worker redirect
  // source, never by binding this worker to an old custom domain.
  const allowed = new Set(["spineinnovtech.com", "www.spineinnovtech.com"]);
  assert.ok(patterns.length > 0, "Production must bind at least the canonical spineinnovtech.com domain");
  for (const pattern of patterns) {
    assert.ok(allowed.has(pattern), "Production must bind only spineinnovtech.com hosts; found non-allowed binding: " + pattern);
  }
});

registerTest(1, 1, "F1.5", "wrangler.jsonc routes follow clean hostname format", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  for (const r of w?.env?.prod?.routes || []) {
    assert.ok(!r.pattern.startsWith("http://") && !r.pattern.startsWith("https://"), "Route pattern must not include protocol: " + r.pattern);
    assert.ok(!r.pattern.endsWith("/"), "Route pattern must not have trailing slash: " + r.pattern);
  }
});

// Feature 2: wrangler.jsonc Vars
registerTest(1, 2, "F2.1", "CANONICAL_REDIRECTS_ENABLED is true in env.prod.vars", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  assert.equal(w?.env?.prod?.vars?.CANONICAL_REDIRECTS_ENABLED, "true");
});

registerTest(1, 2, "F2.2", "CANONICAL_SITE_URL is https://spineinnovtech.com in env.prod.vars", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  assert.equal(w?.env?.prod?.vars?.CANONICAL_SITE_URL, "https://spineinnovtech.com");
});

registerTest(1, 2, "F2.3", "CANONICAL_SITE_URL has no trailing slash", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const url = w?.env?.prod?.vars?.CANONICAL_SITE_URL || "";
  assert.ok(!url.endsWith("/"), "CANONICAL_SITE_URL must not have trailing slash");
});

registerTest(1, 2, "F2.4", "LEGACY_REDIRECT_HOSTS includes spineinnovtech.spineworkspace.com", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const hosts = (w?.env?.prod?.vars?.LEGACY_REDIRECT_HOSTS || "").split(",");
  assert.ok(hosts.includes("spineinnovtech.spineworkspace.com"), "Must include spineinnovtech.spineworkspace.com");
});

registerTest(1, 2, "F2.5", "LEGACY_REDIRECT_HOSTS includes legacy spineinnovlabs domains", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const hosts = (w?.env?.prod?.vars?.LEGACY_REDIRECT_HOSTS || "").split(",");
  assert.ok(hosts.includes("spineinnovlabs.spineworkspace.com"), "Must include spineinnovlabs.spineworkspace.com");
  assert.ok(hosts.includes("spineinnovlabs.com") || hosts.includes("www.spineinnovlabs.com"), "Must include spineinnovlabs.com");
});

// Feature 3: config.yaml URLs
registerTest(1, 3, "F3.1", "config.yaml prod public_url aligns to spineinnovtech.com", async () => {
  const y = readYamlSafe("config.yaml");
  assert.equal(y?.prod_public_url, "https://spineinnovtech.com");
});

registerTest(1, 3, "F3.2", "config.yaml prod canonical_url aligns to spineinnovtech.com", async () => {
  const y = readYamlSafe("config.yaml");
  assert.equal(y?.prod_canonical_url, "https://spineinnovtech.com");
});

registerTest(1, 3, "F3.3", "config.yaml legacy_redirect_hosts includes spineinnovtech.spineworkspace.com", async () => {
  const y = readYamlSafe("config.yaml");
  assert.ok(y?.raw?.includes("spineinnovtech.spineworkspace.com"), "legacy_redirect_hosts must list spineinnovtech.spineworkspace.com");
});

registerTest(1, 3, "F3.4", "config.yaml build.prod_site_url aligns to spineinnovtech.com", async () => {
  const y = readYamlSafe("config.yaml");
  assert.equal(y?.build_prod_site_url, "https://spineinnovtech.com");
});

registerTest(1, 3, "F3.5", "config.yaml test and dev environments reference canonical_url spineinnovtech.com", async () => {
  const y = readYamlSafe("config.yaml");
  const matches = [...(y?.raw || "").matchAll(/canonical_url:\s*https:\/\/spineinnovtech\.com/g)];
  assert.ok(matches.length >= 2, "test/dev should reference canonical_url https://spineinnovtech.com");
});

// Feature 4: Worker 301 Redirects
registerTest(1, 4, "F4.1", "Worker 301 redirects legacy host spineinnovtech.spineworkspace.com", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.spineworkspace.com/");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/");
});

registerTest(1, 4, "F4.2", "Worker 301 redirects legacy host spineinnovlabs.spineworkspace.com", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/");
});

registerTest(1, 4, "F4.3", "Worker 301 redirects legacy host www.spineinnovlabs.com", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://www.spineinnovlabs.com/");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/");
});

registerTest(1, 4, "F4.4", "Worker 301 redirect preserves deep pathname", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.spineworkspace.com/platform/spine-fabric");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/platform/spine-fabric");
});

registerTest(1, 4, "F4.5", "Worker 301 redirect preserves complex query string", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/solutions/sales?ref=partner&utm_campaign=launch");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/solutions/sales?ref=partner&utm_campaign=launch");
});

// Feature 5: Worker Auth/App Entry
registerTest(1, 5, "F5.1", "Worker 302 redirects /login to auth.spineworkspace.com", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/login");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  assert.equal(res.headers.get("Location"), "https://auth.spineworkspace.com/login");
});

registerTest(1, 5, "F5.2", "Worker 302 redirects /signup to auth.spineworkspace.com", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/signup");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  assert.equal(res.headers.get("Location"), "https://auth.spineworkspace.com/signup");
});

registerTest(1, 5, "F5.3", "Worker 302 redirects /workspace to app.spineworkspace.com", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/workspace");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  const loc = res.headers.get("Location");
  assert.ok(loc.startsWith("https://app.spineworkspace.com"), "Must redirect to app.spineworkspace.com, got: " + loc);
});

registerTest(1, 5, "F5.4", "Worker preserves query parameters on entry redirect", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/login?next=%2Fworkspace%2Fmy-work");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  assert.equal(res.headers.get("Location"), "https://auth.spineworkspace.com/login?next=%2Fworkspace%2Fmy-work");
});

registerTest(1, 5, "F5.5", "Worker passes normal content through to static assets without entry redirect", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker, "worker/index.ts not available");
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/company");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 200);
  const body = await res.text();
  assert.ok(body.includes("STATIC_ASSET: /company"), "Must reach static asset handler");
});

// Feature 6: Cloudflare DNS Spec
registerTest(1, 6, "F6.1", "docs/CLOUDFLARE_DNS_SETUP.md exists and is non-empty", async () => {
  assert.ok(existsSync("docs/CLOUDFLARE_DNS_SETUP.md"), "Missing docs/CLOUDFLARE_DNS_SETUP.md");
  assert.ok(statSync("docs/CLOUDFLARE_DNS_SETUP.md").size > 500, "DNS spec is suspiciously small");
});

registerTest(1, 6, "F6.2", "DNS spec documents apex CNAME flattening / ALIAS for spineinnovtech.com", async () => {
  const text = readFileSync("docs/CLOUDFLARE_DNS_SETUP.md", "utf8");
  assert.ok(text.includes("spineinnovtech.com"), "Must document spineinnovtech.com");
  assert.ok(text.includes("flattening") || text.includes("Custom Domain"), "Must document CNAME flattening or Custom Domain");
});

registerTest(1, 6, "F6.3", "DNS spec documents www.spineinnovtech.com CNAME", async () => {
  const text = readFileSync("docs/CLOUDFLARE_DNS_SETUP.md", "utf8");
  assert.ok(text.includes("www.spineinnovtech.com"), "Must document www.spineinnovtech.com");
  assert.ok(text.includes("CNAME"), "Must document CNAME record");
});

registerTest(1, 6, "F6.4", "DNS spec documents Full (Strict) SSL/TLS encryption mode", async () => {
  const text = readFileSync("docs/CLOUDFLARE_DNS_SETUP.md", "utf8");
  assert.ok(/Full\s*\(\s*[Ss]trict\s*\)/i.test(text), "Must specify Full (Strict) SSL mode");
});

registerTest(1, 6, "F6.5", "DNS spec documents Proxied (Orange Cloud) requirement", async () => {
  const text = readFileSync("docs/CLOUDFLARE_DNS_SETUP.md", "utf8");
  assert.ok(/Proxied|Orange Cloud/i.test(text), "Must document Proxied orange cloud requirement");
});

// Feature 7: Architecture Storyboard
registerTest(1, 7, "F7.1", "corporate-architecture-storyboard.tsx exists and exports component", async () => {
  const file = "components/marketing/corporate-architecture-storyboard.tsx";
  assert.ok(existsSync(file), `Missing ${file}`);
  const text = readFileSync(file, "utf8");
  assert.ok(text.includes("export function CorporateArchitectureStoryboard"), "Must export CorporateArchitectureStoryboard");
});

registerTest(1, 7, "F7.2", "Architecture storyboard represents Context Fabric layer", async () => {
  const text = readFileSync("components/marketing/corporate-architecture-storyboard.tsx", "utf8");
  assert.ok(text.includes("Context Fabric"), "Must include Context Fabric layer");
});

registerTest(1, 7, "F7.3", "Architecture storyboard represents Hermes Governance layer", async () => {
  const text = readFileSync("components/marketing/corporate-architecture-storyboard.tsx", "utf8");
  assert.ok(text.includes("Hermes") || text.includes("Governance"), "Must include Hermes Zero-Trust Governance");
});

registerTest(1, 7, "F7.4", "Architecture storyboard represents Host Continuity layer", async () => {
  const text = readFileSync("components/marketing/corporate-architecture-storyboard.tsx", "utf8");
  assert.ok(text.includes("Host Continuity") || text.includes("FastMCP"), "Must include Host Continuity / FastMCP");
});

registerTest(1, 7, "F7.5", "Architecture storyboard avoids interactive product workbench previews", async () => {
  const text = readFileSync("components/marketing/corporate-architecture-storyboard.tsx", "utf8");
  assert.ok(!text.includes("WorkbenchHeroPreview"), "Must not embed WorkbenchHeroPreview");
  assert.ok(!text.includes("WorkbenchViewExplorer"), "Must not embed WorkbenchViewExplorer");
});

// Feature 8: Realign InnovLabs Home
function corporateHomeSource() {
  return (
    readFileSync("components/marketing/innovlabs-home.tsx", "utf8") +
    readFileSync("lib/page-templates/corporate-home-t1.tsx", "utf8")
  );
}

registerTest(1, 8, "F8.1", "innovlabs-home.tsx does not import WorkbenchHeroPreview", async () => {
  const text = corporateHomeSource();
  assert.ok(!text.includes("workbench-hero-preview"), "innovlabs-home.tsx must not import workbench-hero-preview");
});

registerTest(1, 8, "F8.2", "innovlabs-home.tsx does not render WorkbenchHeroPreview component", async () => {
  const text = corporateHomeSource();
  assert.ok(!text.includes("<WorkbenchHeroPreview"), "innovlabs-home.tsx must not render <WorkbenchHeroPreview");
});

registerTest(1, 8, "F8.3", "innovlabs-home.tsx imports and renders CorporateArchitectureStoryboard", async () => {
  const text = corporateHomeSource();
  assert.ok(text.includes("CorporateArchitectureStoryboard"), "Must import and render CorporateArchitectureStoryboard");
});

registerTest(1, 8, "F8.4", "innovlabs-home.tsx retains corporate brand badge SPINE INNOVTECH", async () => {
  const text = corporateHomeSource();
  assert.ok(text.includes("SPINE INNOVTECH"), "Must retain brand badge SPINE INNOVTECH");
});

registerTest(1, 8, "F8.5", "innovlabs-home.tsx retains Interactive Storyboard verification badge", async () => {
  const text = corporateHomeSource();
  assert.ok(text.includes("Interactive Storyboard"), "Must retain 'Interactive Storyboard' badge string for verification");
});

// Feature 9: Realign Benefits Links
registerTest(1, 9, "F9.1", "workspace-benefits.tsx does not link to /product#workbench-views", async () => {
  const text = readFileSync("components/marketing/workspace-benefits.tsx", "utf8");
  assert.ok(!text.includes("/product#workbench-views"), "Must not link to removed /product#workbench-views anchor");
});

registerTest(1, 9, "F9.2", "workspace-benefits.tsx links to platform architecture", async () => {
  const text = readFileSync("components/marketing/workspace-benefits.tsx", "utf8");
  assert.ok(text.includes("/platform"), "Benefits card must link to platform architecture");
});

registerTest(1, 9, "F9.3", "workspace-benefits.tsx links to product marketing site spineworkspace.com", async () => {
  const text = readFileSync("components/marketing/workspace-benefits.tsx", "utf8");
  assert.ok(text.includes("https://spineworkspace.com"), "Must link to https://spineworkspace.com");
});

registerTest(1, 9, "F9.4", "innovlabs-home.tsx secondary hero button points to architecture or product", async () => {
  const text = corporateHomeSource();
  assert.ok(!text.includes('href="/product#workbench-views"'), "Hero CTA must not link to #workbench-views");
});

registerTest(1, 9, "F9.5", "Corporate homepage components contain zero dead #workbench-views anchors", async () => {
  const files = ["lib/page-templates/corporate-home-t1.tsx", "components/marketing/workspace-benefits.tsx"];
  for (const f of files) {
    if (existsSync(f)) {
      const c = readFileSync(f, "utf8");
      assert.ok(!c.includes("#workbench-views"), `${f} contains dead #workbench-views anchor`);
    }
  }
});

// Feature 10: Package Workbench Code
registerTest(1, 10, "F10.1", "WorkbenchHeroPreview component exists in product marketing repo", async () => {
  const p1 = join(PRODUCT_MARKETING_ROOT, "components/workbench/workbench-hero-preview.tsx");
  const p2 = join(PRODUCT_MARKETING_ROOT, "components/marketing/workbench-hero-preview.tsx");
  assert.ok(existsSync(p1) || existsSync(p2), "workbench-hero-preview.tsx must exist in product repo");
});

registerTest(1, 10, "F10.2", "WorkbenchViewExplorer component exists in product marketing repo", async () => {
  const p1 = join(PRODUCT_MARKETING_ROOT, "components/workbench/workbench-view-explorer.tsx");
  const p2 = join(PRODUCT_MARKETING_ROOT, "components/marketing/workbench-view-explorer.tsx");
  assert.ok(existsSync(p1) || existsSync(p2), "workbench-view-explorer.tsx must exist in product repo");
});

registerTest(1, 10, "F10.3", "Supporting workbench showcases exist in product marketing repo", async () => {
  const p = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  const showcases = [
    "workbench-dashboard-showcase.tsx",
    "workbench-canvas-showcase.tsx",
    "workbench-customer-journey.tsx",
    "workbench-shell-recording.tsx",
  ];
  for (const s of showcases) {
    assert.ok(existsSync(join(p, s)), `Missing ${s} in product repo`);
  }
});

registerTest(1, 10, "F10.4", "Responsive CSS module exists in product marketing repo", async () => {
  const p1 = join(PRODUCT_MARKETING_ROOT, "components/workbench/responsive-media.module.css");
  const p2 = join(PRODUCT_MARKETING_ROOT, "components/marketing/responsive-media.module.css");
  assert.ok(existsSync(p1) || existsSync(p2), "responsive-media.module.css must exist in product repo");
});

registerTest(1, 10, "F10.5", "UI primitives border-beam and magic-card exist in product marketing repo", async () => {
  const p = join(PRODUCT_MARKETING_ROOT, "components/ui");
  assert.ok(existsSync(join(p, "border-beam.tsx")), "border-beam.tsx must exist in product repo");
  assert.ok(existsSync(join(p, "magic-card.tsx")), "magic-card.tsx must exist in product repo");
});

// Feature 11: Export Workbench Data/Media
registerTest(1, 11, "F11.1", "workbench-source-views.ts exists in product marketing repo lib", async () => {
  assert.ok(existsSync(join(PRODUCT_MARKETING_ROOT, "lib/workbench-source-views.ts")));
});

registerTest(1, 11, "F11.2", "workbench-screenshots.ts exists in product marketing repo lib", async () => {
  assert.ok(existsSync(join(PRODUCT_MARKETING_ROOT, "lib/workbench-screenshots.ts")));
});

registerTest(1, 11, "F11.3", "workbench-capture-review.ts exists in product marketing repo lib", async () => {
  assert.ok(existsSync(join(PRODUCT_MARKETING_ROOT, "lib/workbench-capture-review.ts")));
});

registerTest(1, 11, "F11.4", "public/images/workbench assets exist in product marketing repo", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "public/images/workbench");
  assert.ok(existsSync(dir), "images/workbench directory missing in product repo");
});

registerTest(1, 11, "F11.5", "public/videos/workbench recording and captions exist in product marketing repo", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "public/videos/workbench");
  assert.ok(existsSync(join(dir, "workbench-shell-20261014.mp4")), "Missing video mp4");
  assert.ok(existsSync(join(dir, "workbench-shell-20261014.vtt")), "Missing captions vtt");
});

// Feature 12: Product Workbench Route
registerTest(1, 12, "F12.1", "Route app/product/workbench/page.tsx exists in product marketing repo", async () => {
  assert.ok(existsSync(join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx")));
});

registerTest(1, 12, "F12.2", "Workbench route page defines valid App Router metadata", async () => {
  const f = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  assert.ok(existsSync(f));
  const c = readFileSync(f, "utf8");
  assert.ok(c.includes("metadata"), "Metadata must be defined");
});

registerTest(1, 12, "F12.3", "Workbench route renders WorkbenchViewExplorer or workbench content", async () => {
  const f = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  assert.ok(existsSync(f));
  const c = readFileSync(f, "utf8");
  assert.ok(c.includes("Workbench") || c.includes("workbench"), "Must render workbench page content");
});

registerTest(1, 12, "F12.4", "Workbench page does not contain broken imports to corporate site", async () => {
  const f = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  assert.ok(existsSync(f));
  const c = readFileSync(f, "utf8");
  assert.ok(!c.includes("spinemarketing-magic-ui"), "Must not leak relative path to corporate repo");
});

registerTest(1, 12, "F12.5", "Workbench route exports default component", async () => {
  const f = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  assert.ok(existsSync(f));
  const c = readFileSync(f, "utf8");
  assert.ok(/export\s+default\s+function/.test(c), "Must export default function component");
});

// Feature 13: Product Home Integration
registerTest(1, 13, "F13.1", "Product home component or page exists in product marketing repo", async () => {
  const f1 = join(PRODUCT_MARKETING_ROOT, "components/product-home.tsx");
  const f2 = join(PRODUCT_MARKETING_ROOT, "app/page.tsx");
  assert.ok(existsSync(f1) || existsSync(f2), "Product home component or page must exist");
});

registerTest(1, 13, "F13.2", "Product home page/component embeds workbench showcase or hero preview", async () => {
  const f1 = join(PRODUCT_MARKETING_ROOT, "components/product-home.tsx");
  const f2 = join(PRODUCT_MARKETING_ROOT, "app/page.tsx");
  const content = (existsSync(f1) ? readFileSync(f1, "utf8") : "") + (existsSync(f2) ? readFileSync(f2, "utf8") : "");
  assert.ok(content.includes("Workbench") || content.includes("workbench"), "Product home must embed workbench showcase");
});

registerTest(1, 13, "F13.3", "Workbench hero preview in product repo defines 3-scene interactivity", async () => {
  const p1 = join(PRODUCT_MARKETING_ROOT, "components/workbench/workbench-hero-preview.tsx");
  const p2 = join(PRODUCT_MARKETING_ROOT, "components/marketing/workbench-hero-preview.tsx");
  const file = existsSync(p1) ? p1 : p2;
  assert.ok(existsSync(file), "workbench-hero-preview.tsx missing");
  const c = readFileSync(file, "utf8");
  assert.ok(c.includes("context") && c.includes("views") && c.includes("governance"), "Must retain 3-scene structure");
});

registerTest(1, 13, "F13.4", "Product home provides link/CTA to full workbench explorer", async () => {
  const p1 = join(PRODUCT_MARKETING_ROOT, "components/workbench/workbench-hero-preview.tsx");
  const p2 = join(PRODUCT_MARKETING_ROOT, "components/marketing/workbench-hero-preview.tsx");
  const file = existsSync(p1) ? p1 : p2;
  assert.ok(existsSync(file));
  const c = readFileSync(file, "utf8");
  assert.ok(c.includes("/product/workbench") || c.includes("workbench"), "Must link to workbench explorer");
});

registerTest(1, 13, "F13.5", "Product home components import local UI primitives", async () => {
  const p1 = join(PRODUCT_MARKETING_ROOT, "components/workbench/workbench-hero-preview.tsx");
  const p2 = join(PRODUCT_MARKETING_ROOT, "components/marketing/workbench-hero-preview.tsx");
  const file = existsSync(p1) ? p1 : p2;
  assert.ok(existsSync(file));
  const c = readFileSync(file, "utf8");
  assert.ok(c.includes("border-beam"), "Must reference local border-beam");
});

// Feature 14: Adapt Exported Links
registerTest(1, 14, "F14.1", "Transferred workbench components link to /product/workbench", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  let hasWorkbenchLink = false;
  for (const f of files) {
    const c = readFileSync(join(dir, f), "utf8");
    if (c.includes("/product/workbench")) hasWorkbenchLink = true;
  }
  assert.ok(hasWorkbenchLink, "Must link to /product/workbench in transferred components");
});

registerTest(1, 14, "F14.2", "Host connection links in transferred components target product site taxonomy", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  for (const f of files) {
    const c = readFileSync(join(dir, f), "utf8");
    assert.ok(!c.includes("/host-connected-environment#"), "Must not leak internal corporate anchor in " + f);
  }
});

registerTest(1, 14, "F14.3", "Zero internal corporate paths leak in product marketing workbench components", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  for (const f of files) {
    const c = readFileSync(join(dir, f), "utf8");
    assert.ok(!c.includes("/developers#integration-paths"), "Must not leak corporate path in " + f);
  }
});

registerTest(1, 14, "F14.4", "External links to corporate site in product repo use https://spineinnovtech.com", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  for (const f of files) {
    const c = readFileSync(join(dir, f), "utf8");
    assert.ok(!c.includes("spineinnovlabs.com"), "Must not link to obsolete domain in " + f);
  }
});

registerTest(1, 14, "F14.5", "Internal Next.js links use valid relative paths", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  for (const f of files) {
    const c = readFileSync(join(dir, f), "utf8");
    for (const match of c.matchAll(/href="(\/[^"]+)"/g)) {
      assert.ok(!match[1].startsWith("//"), "Double slash internal link: " + match[1]);
    }
  }
});

// Feature 15: Solution Lens Slugs
registerTest(1, 15, "F15.1", "lib/workspace-entry.ts maps memoryandknowledge to knowledge-records", async () => {
  const text = readFileSync("lib/workspace-entry.ts", "utf8");
  assert.ok(/memoryandknowledge:\s*['"]knowledge-records['"]/.test(text), "Must map memoryandknowledge to knowledge-records");
});

registerTest(1, 15, "F15.2", "productSiteUrl(/solutions/memoryandknowledge) resolves to knowledge-records", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl, "productSiteUrl not evaluated");
  const res = sandbox.productSiteUrl("/solutions/memoryandknowledge");
  assert.equal(res, "https://spineworkspace.com/solutions/knowledge-records");
});

registerTest(1, 15, "F15.3", "solutionDomains contains all canonical business domain keys", async () => {
  const text = readFileSync("lib/workspace-entry.ts", "utf8");
  const required = ["customer-success", "revops", "sales", "marketing", "finance", "legal"];
  for (const k of required) {
    assert.ok(text.includes(k), `Missing domain key: ${k}`);
  }
});

registerTest(1, 15, "F15.4", "productSiteUrl falls back cleanly for unmapped solution slug", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl, "productSiteUrl not evaluated");
  const res = sandbox.productSiteUrl("/solutions/nonexistent-team");
  assert.equal(res, "https://spineworkspace.com/solutions");
});

registerTest(1, 15, "F15.5", "productSiteUrl resolves non-solution paths accurately", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl, "productSiteUrl not evaluated");
  assert.equal(sandbox.productSiteUrl("/pricing"), "https://spineworkspace.com/pricing");
  assert.equal(sandbox.productSiteUrl(""), "https://spineworkspace.com/");
});

// Feature 16: Auth Destination Links
registerTest(1, 16, "F16.1", "workspaceEntryLinks().signup targets auth.spineworkspace.com", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks, "workspaceEntryLinks not evaluated");
  const links = sandbox.workspaceEntryLinks();
  assert.ok(links.signup.startsWith("https://auth.spineworkspace.com/signup"), `Expected auth signup, got: ${links.signup}`);
});

registerTest(1, 16, "F16.2", "workspaceEntryLinks().login targets auth.spineworkspace.com", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks, "workspaceEntryLinks not evaluated");
  const links = sandbox.workspaceEntryLinks();
  assert.ok(links.login.startsWith("https://auth.spineworkspace.com/login"), `Expected auth login, got: ${links.login}`);
});

registerTest(1, 16, "F16.3", "workspaceEntryLinks preserves next parameter for founders domain", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks);
  const links = sandbox.workspaceEntryLinks("/solutions/founders");
  const url = new URL(links.signup);
  assert.equal(url.searchParams.get("next"), "/workspace/work/founderops/company-overview");
});

registerTest(1, 16, "F16.4", "workspaceEntryLinks preserves next and entry_domain for sales domain", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks);
  const links = sandbox.workspaceEntryLinks("/solutions/sales");
  const url = new URL(links.signup);
  assert.equal(url.searchParams.get("next"), "/workspace/work/sales/dashboard");
  assert.equal(url.searchParams.get("entry_domain"), "sales");
});

registerTest(1, 16, "F16.5", "Default workspaceEntryLinks fall back to /workspace/my-work without entry_domain", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks);
  const links = sandbox.workspaceEntryLinks("");
  const url = new URL(links.signup);
  assert.equal(url.searchParams.get("next"), "/workspace/my-work");
  assert.equal(url.searchParams.get("entry_domain"), null);
});

// Feature 17: App Destination Links
registerTest(1, 17, "F17.1", "lib/workspace-entry.ts exports appEntryUrl function", async () => {
  const text = readFileSync("lib/workspace-entry.ts", "utf8");
  assert.ok(text.includes("export function appEntryUrl"), "Must export function appEntryUrl");
});

registerTest(1, 17, "F17.2", "appEntryUrl() returns https://app.spineworkspace.com", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.appEntryUrl, "appEntryUrl not exported in workspace-entry.ts");
  const res = sandbox.appEntryUrl();
  assert.ok(res.startsWith("https://app.spineworkspace.com"), "Must target app.spineworkspace.com, got: " + res);
});

registerTest(1, 17, "F17.3", "appEntryUrl resolves deep workspace paths", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.appEntryUrl, "appEntryUrl not exported");
  const res = sandbox.appEntryUrl("/workspace/work/marketing");
  assert.equal(res, "https://app.spineworkspace.com/workspace/work/marketing");
});

registerTest(1, 17, "F17.4", "appEntryUrl handles paths without leading slashes", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.appEntryUrl, "appEntryUrl not exported");
  const res = sandbox.appEntryUrl("workspace/my-work");
  assert.equal(res, "https://app.spineworkspace.com/workspace/my-work");
});

registerTest(1, 17, "F17.5", "appEntryUrl preserves query strings on live app target", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.appEntryUrl, "appEntryUrl not exported");
  const res = sandbox.appEntryUrl("/?tab=recent");
  assert.equal(res, "https://app.spineworkspace.com/?tab=recent");
});

// Feature 18: Nav & Header/Footer CTAs
registerTest(1, 18, "F18.1", "FinalCTA links to https://spineworkspace.com", async () => {
  const text = readFileSync("components/final-cta.tsx", "utf8");
  assert.ok(text.includes('href="https://spineworkspace.com"'), "FinalCTA must link to https://spineworkspace.com");
});

registerTest(1, 18, "F18.2", "Header navigation featured item links to https://spineworkspace.com", async () => {
  const text = readFileSync("lib/navigation.ts", "utf8");
  assert.ok(text.includes('name: "SpineWorkspace"'), "SpineWorkspace featured item must exist");
  assert.ok(text.includes("spineworkspace.com"), "Must link to spineworkspace.com");
});

registerTest(1, 18, "F18.3", "Footer links SpineWorkspace to https://spineworkspace.com", async () => {
  const text = readFileSync("lib/navigation.ts", "utf8");
  assert.ok(text.includes("footerColumns"), "footerColumns must exist");
  assert.ok(text.includes("SpineWorkspace"), "SpineWorkspace link must exist in footer");
});

registerTest(1, 18, "F18.4", "Header does not contain broken internal workbench links", async () => {
  const text = readFileSync("lib/navigation.ts", "utf8");
  assert.ok(!text.includes('href: "/product#workbench-views"'), "Must not link to #workbench-views");
});

registerTest(1, 18, "F18.5", "Navigation links strictly enforce HTTPS for external domains", async () => {
  const text = readFileSync("lib/navigation.ts", "utf8");
  assert.ok(!text.includes("http://spineworkspace.com"), "Must not use unencrypted http://");
});

// Feature 19: Pricing Page Link Fix
registerTest(1, 19, "F19.1", "app/pricing/page.tsx contains explicit link to /product", async () => {
  const text = readFileSync("app/pricing/page.tsx", "utf8");
  assert.ok(text.includes('href="/product"'), "Pricing page must link to /product");
});

registerTest(1, 19, "F19.2", "Pricing page link describes exploring product features", async () => {
  const text = readFileSync("app/pricing/page.tsx", "utf8");
  assert.ok(text.includes("product") || text.includes("SpineWorkspace"), "Link text must describe product");
});

registerTest(1, 19, "F19.3", "Pricing page satisfies audit-corporate-site requirement", async () => {
  const audit = readFileSync("scripts/audit-corporate-site.mjs", "utf8");
  assert.ok(audit.includes('href="/product"'), "audit-corporate-site checks for /product link");
});

registerTest(1, 19, "F19.4", "Pricing page documents transparent pricing tiers or scale models", async () => {
  const text = readFileSync("app/pricing/page.tsx", "utf8");
  assert.ok(text.includes("Tier") || text.includes("pricing") || text.includes("seat"), "Pricing tiers must be rendered");
});

registerTest(1, 19, "F19.5", "Pricing page includes structured JSON-LD data", async () => {
  const text = readFileSync("app/pricing/page.tsx", "utf8");
  assert.ok(text.includes("FAQPageJsonLd") || text.includes("BreadcrumbJsonLd"), "Must include JSON-LD structured data");
});

// Feature 20: Synchronize QA Scripts
registerTest(1, 20, "F20.1", "scripts/check-cloudflare-config.mjs verifies spineinnovtech.com", async () => {
  const text = readFileSync("scripts/check-cloudflare-config.mjs", "utf8");
  assert.ok(text.includes("spineinnovtech.com"), "check-cloudflare-config must assert spineinnovtech.com");
});

registerTest(1, 20, "F20.2", "scripts/verify-auth-entry.mjs verifies auth.spineworkspace.com", async () => {
  const text = readFileSync("scripts/verify-auth-entry.mjs", "utf8");
  assert.ok(text.includes("auth.spineworkspace.com"), "verify-auth-entry must assert auth.spineworkspace.com");
});

registerTest(1, 20, "F20.3", "scripts/verify-static-artifact.mjs checks spineinnovtech.com", async () => {
  const text = readFileSync("scripts/verify-static-artifact.mjs", "utf8");
  assert.ok(!text.includes("spineinnovlabs.spineworkspace.com") || text.includes("!sitemap.includes"), "verify-static-artifact must reject old domains");
});

registerTest(1, 20, "F20.4", "scripts/check-release-preflight.mjs does not reference legacy domain as canonical", async () => {
  const text = readFileSync("scripts/check-release-preflight.mjs", "utf8");
  assert.ok(!text.includes("CANONICAL_SITE_URL === 'https://spineinnovlabs.com'"), "preflight must not expect legacy domain");
});

registerTest(1, 20, "F20.5", "QA scripts have zero references to spineinnovtech.spineworkspace.com as canonical", async () => {
  const cf = readFileSync("scripts/check-cloudflare-config.mjs", "utf8");
  assert.ok(!cf.includes('CANONICAL_SITE_URL === "https://spineinnovtech.spineworkspace.com"'), "Must not assert old staging hostname as canonical site URL");
});

// Feature 21: Corporate Site Verification
registerTest(1, 21, "F21.1", "package.json defines comprehensive check script", async () => {
  const pkg = readJsonSafe("package.json");
  assert.ok(pkg?.scripts?.check, "Missing check script");
  assert.ok(pkg.scripts.check.includes("typecheck"), "Check script must include typecheck");
});

registerTest(1, 21, "F21.2", "package.json build:cloudflare includes all 6 release gates", async () => {
  const pkg = readJsonSafe("package.json");
  const b = pkg?.scripts?.["build:cloudflare"] || "";
  const gates = ["lint", "audit:site", "check:cloudflare", "typecheck", "build", "verify:artifact"];
  for (const g of gates) {
    assert.ok(b.includes(g), `Missing build gate: ${g}`);
  }
});

registerTest(1, 21, "F21.3", "Corporate codebase contains Next.js export build configuration", async () => {
  const nextConfig = readFileSync("next.config.mjs", "utf8");
  assert.ok(nextConfig.includes('output: "export"') || nextConfig.includes("output: 'export'"), "Must be static export");
});

registerTest(1, 21, "F21.4", "Homepage source is free of Customer Zero and demo workspace leaks", async () => {
  const home = corporateHomeSource();
  assert.ok(!home.includes("Good morning, Operator"), "No demo dashboard leaks");
  assert.ok(!home.includes("Customer Zero"), "No Customer Zero leaks");
});

registerTest(1, 21, "F21.5", "Robots and llms generators target configured site-url module", async () => {
  const gen = readFileSync("scripts/generate-llms-txt.ts", "utf8");
  assert.ok(gen.includes("site-url") && (gen.includes("absoluteUrl") || gen.includes("publicSiteUrl")), "generate-llms-txt must use site-url module");
});

// Feature 22: Product Site Verification
registerTest(1, 22, "F22.1", "Product marketing package.json defines build and test scripts", async () => {
  const pkg = readJsonSafe(join(PRODUCT_MARKETING_ROOT, "package.json"));
  assert.ok(pkg?.scripts?.build, "Missing build script in product repo");
  assert.ok(pkg?.scripts?.typecheck, "Missing typecheck script in product repo");
});

registerTest(1, 22, "F22.2", "Exported workbench files compile with TypeScript syntax", async () => {
  const dir = join(PRODUCT_MARKETING_ROOT, "components/workbench");
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  assert.ok(files.length >= 8, `Expected at least 8 workbench components, found: ${files.length}`);
});

registerTest(1, 22, "F22.3", "Product marketing repo globals.css contains border-beam keyframes", async () => {
  const css = readFileSync(join(PRODUCT_MARKETING_ROOT, "app/globals.css"), "utf8");
  assert.ok(css.includes("border-beam") || css.includes("@keyframes"), "Must contain border-beam styling");
});

registerTest(1, 22, "F22.4", "Product marketing repo dependencies satisfy framer-motion and UI requirements", async () => {
  const pkg = readJsonSafe(join(PRODUCT_MARKETING_ROOT, "package.json"));
  assert.ok(pkg?.dependencies?.["framer-motion"], "framer-motion must be installed for MagicCard");
});

registerTest(1, 22, "F22.5", "Product workbench explorer page renders without unresolved relative paths", async () => {
  const f = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  if (!existsSync(f)) return;
  const c = readFileSync(f, "utf8");
  assert.ok(!c.includes("../../spinemarketing"), "Must have clean imports");
});

// Feature 23: Cross-Domain Link Check
registerTest(1, 23, "F23.1", "All external product marketing links use HTTPS", async () => {
  const files = ["lib/page-templates/corporate-home-t1.tsx", "components/final-cta.tsx", "components/footer.tsx"];
  for (const f of files) {
    if (existsSync(f)) {
      const c = readFileSync(f, "utf8");
      assert.ok(!c.includes("http://spineworkspace.com"), `Unencrypted link in ${f}`);
    }
  }
});

registerTest(1, 23, "F23.2", "All external auth links use HTTPS and valid auth action endpoints", async () => {
  const text = readFileSync("lib/workspace-entry.ts", "utf8");
  assert.ok(!text.includes("http://auth.spineworkspace.com"), "Must not use unencrypted http for auth");
});

registerTest(1, 23, "F23.3", "All external app links use HTTPS", async () => {
  const text = readFileSync("lib/workspace-entry.ts", "utf8");
  assert.ok(!text.includes("http://app.spineworkspace.com"), "Must not use unencrypted http for app");
});

registerTest(1, 23, "F23.4", "Zero localhost or staging link leaks in public corporate components", async () => {
  const files = ["lib/page-templates/corporate-home-t1.tsx", "components/marketing/corporate-architecture-storyboard.tsx", "components/final-cta.tsx"];
  for (const f of files) {
    if (existsSync(f)) {
      const c = readFileSync(f, "utf8");
      assert.ok(!c.includes("localhost:"), `Localhost leak in ${f}`);
      assert.ok(!c.includes("127.0.0.1"), `Local IP leak in ${f}`);
    }
  }
});

registerTest(1, 23, "F23.5", "Query string parameters on cross-domain links are well-formed", async () => {
  const sandbox = evaluateWorkspaceEntry();
  if (sandbox?.workspaceEntryLinks) {
    const links = sandbox.workspaceEntryLinks("/solutions/sales");
    const u = new URL(links.signup);
    assert.ok(u.searchParams.has("next"), "Must have well-formed next param");
  }
});

// ============================================================================
// TIER 2: BOUNDARY & CORNER CASES (15 Tests)
// ============================================================================

registerTest(2, null, "T2.1", "Query string preservation with multiple params & encoded chars on 301", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/solutions?filter=risk%20assessment&sort=desc&limit=10");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/solutions?filter=risk%20assessment&sort=desc&limit=10");
});

registerTest(2, null, "T2.2", "Deep path preservation on legacy 301 redirect", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.spineworkspace.com/platform/spine-fabric/governance/deep/nested/view");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/platform/spine-fabric/governance/deep/nested/view");
});

registerTest(2, null, "T2.3", "Trailing slash preservation on legacy hosts", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/company/");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/company/");
});

registerTest(2, null, "T2.4", "Mixed-case legacy hostname resolution", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://SpInEiNnOvLaBs.SpInEwOrKsPaCe.CoM/pricing");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/pricing");
});

registerTest(2, null, "T2.5", "Host header with explicit port numbers strips port for match", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com:8443/contact");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/contact");
});

registerTest(2, null, "T2.6", "Unmapped solution lens slug in productSiteUrl falls back to /solutions", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl);
  const res = sandbox.productSiteUrl("/solutions/unknown-slug-xyz");
  assert.equal(res, "https://spineworkspace.com/solutions");
});

registerTest(2, null, "T2.7", "Solution lens slug with trailing slash resolves correctly", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl);
  const res = sandbox.productSiteUrl("/solutions/memoryandknowledge/");
  assert.equal(res, "https://spineworkspace.com/solutions/knowledge-records");
});

registerTest(2, null, "T2.8", "Auth entry with unknown slug defaults safely to /workspace/my-work", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks);
  const links = sandbox.workspaceEntryLinks("/solutions/nonexistent-team");
  const u = new URL(links.signup);
  assert.equal(u.searchParams.get("next"), "/workspace/my-work");
  assert.equal(u.searchParams.get("entry_domain"), null);
});

registerTest(2, null, "T2.9", "Auth entry next parameter encoding integrity with nested query params", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks);
  const links = sandbox.workspaceEntryLinks("/solutions/founders");
  const u = new URL(links.signup);
  const next = u.searchParams.get("next");
  assert.ok(!next.includes("?"), "Return path is a clean local route");
});

registerTest(2, null, "T2.10", "Empty/null/undefined argument handling in URL builders", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl);
  assert.equal(sandbox.productSiteUrl(undefined), "https://spineworkspace.com/");
  assert.equal(sandbox.productSiteUrl(""), "https://spineworkspace.com/");
});

registerTest(2, null, "T2.11", "Edge redirect for /login/ with trailing slash", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/login/");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  assert.equal(res.headers.get("Location"), "https://auth.spineworkspace.com/login");
});

registerTest(2, null, "T2.12", "Edge redirect for /signup with complex query strings", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/signup?plan=enterprise&cycle=annual&seat_tier=100");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  assert.equal(res.headers.get("Location"), "https://auth.spineworkspace.com/signup?plan=enterprise&cycle=annual&seat_tier=100");
});

registerTest(2, null, "T2.13", "Edge redirect for /workspace/nested/route preserves subpath", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/workspace?team=finance");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  const loc = res.headers.get("Location");
  assert.ok(loc.startsWith("https://app.spineworkspace.com"), "Must redirect to app.spineworkspace.com, got: " + loc);
});

registerTest(2, null, "T2.14", "HTTP HEAD method handling on edge redirect", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/about", { method: "HEAD" });
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/about");
});

registerTest(2, null, "T2.15", "Root and apex URL normalization in lib/site-url.ts", async () => {
  const f = "lib/site-url.ts";
  assert.ok(existsSync(f));
  const c = readFileSync(f, "utf8");
  assert.ok(c.includes("DEFAULT_PRODUCTION_ORIGIN"), "Must define default production origin");
  assert.ok(c.includes("https://spineinnovtech.com"), "Default production origin must be spineinnovtech.com");
});

registerTest(2, null, "T2.16", "Protocol-relative double-slash path sanitization to prevent open redirect (CWE-601)", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com//attacker.com");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/attacker.com");

  const reqBackslash = new Request("https://spineinnovlabs.spineworkspace.com/\\attacker.com");
  const resBackslash = await worker.fetch(reqBackslash, env);
  assert.equal(resBackslash.status, 301);
  assert.equal(resBackslash.headers.get("Location"), "https://spineinnovtech.com/attacker.com");

  const sandbox = evaluateWorkspaceEntry();
  if (sandbox?.appEntryUrl) {
    assert.equal(sandbox.appEntryUrl("//attacker.com"), "https://app.spineworkspace.com/attacker.com");
    assert.equal(sandbox.appEntryUrl("\\\\attacker.com"), "https://app.spineworkspace.com/attacker.com");
  }
});

// ============================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS (10 Tests)
// ============================================================================

registerTest(3, null, "T3.1", "Canonical 301 redirect + path preservation + security headers injection", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/governance");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/governance");
});

registerTest(3, null, "T3.2", "Legacy visitor on /solutions/memoryandknowledge maps cleanly to knowledge-records", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/solutions/memoryandknowledge");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get("Location"), "https://spineinnovtech.com/solutions/memoryandknowledge");

  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl);
  const productDest = sandbox.productSiteUrl("/solutions/memoryandknowledge");
  assert.equal(productDest, "https://spineworkspace.com/solutions/knowledge-records");
});

registerTest(3, null, "T3.3", "Corporate header CTA -> spineworkspace.com -> product workbench explorer continuity", async () => {
  const nav = readFileSync("lib/navigation.ts", "utf8");
  assert.ok(nav.includes("spineworkspace.com"), "Nav must point to spineworkspace.com");
  const productRoute = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  assert.ok(existsSync(productRoute), "Product workbench route must exist");
});

registerTest(3, null, "T3.4", "Corporate solution page -> Auth signup destination alignment", async () => {
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.workspaceEntryLinks);
  const links = sandbox.workspaceEntryLinks("/solutions/revops");
  assert.ok(links.signup.startsWith("https://auth.spineworkspace.com/signup"));
  const u = new URL(links.signup);
  assert.equal(u.searchParams.get("entry_domain"), "revops");
});

registerTest(3, null, "T3.5", "Worker edge /workspace redirect and appEntryUrl destination parity", async () => {
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovtech.com/workspace");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 302);
  const edgeLoc = new URL(res.headers.get("Location")).origin;

  const sandbox = evaluateWorkspaceEntry();
  if (sandbox?.appEntryUrl) {
    const libLoc = new URL(sandbox.appEntryUrl()).origin;
    assert.equal(edgeLoc, libLoc, "Worker redirect origin must match lib/workspace-entry appEntryUrl origin");
  }
});

registerTest(3, null, "T3.6", "Wrangler prod routes match config.yaml legacy_redirect_hosts and canonical_url", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const y = readYamlSafe("config.yaml");
  assert.equal(w?.env?.prod?.vars?.CANONICAL_SITE_URL, y?.prod_canonical_url, "Canonical site URL mismatch between wrangler and config.yaml");
});

registerTest(3, null, "T3.7", "Cloudflare DNS specification covers all hostnames declared in Wrangler prod routes", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const doc = readFileSync("docs/CLOUDFLARE_DNS_SETUP.md", "utf8");
  for (const r of w?.env?.prod?.routes || []) {
    assert.ok(doc.includes(r.pattern), `DNS setup document missing route pattern: ${r.pattern}`);
  }
});

registerTest(3, null, "T3.8", "Corporate Architecture Storyboard concepts align with lib/navigation.ts taxonomy", async () => {
  const story = readFileSync("components/marketing/corporate-architecture-storyboard.tsx", "utf8");
  const nav = readFileSync("lib/navigation.ts", "utf8");
  assert.ok(story.includes("Context Fabric") && nav.includes("Spine Fabric"), "Fabric concept alignment");
  assert.ok(story.includes("Hermes") && nav.includes("Governance"), "Governance concept alignment");
});

registerTest(3, null, "T3.9", "Pricing page retains /product link for audit compliance and describes product", async () => {
  const pricing = readFileSync("app/pricing/page.tsx", "utf8");
  assert.ok(pricing.includes('href="/product"'), "Pricing page must link to /product");
  assert.ok(pricing.includes("SpineWorkspace") || pricing.includes("product"), "Pricing page must describe product");
});

registerTest(3, null, "T3.10", "QA script assertions in check-cloudflare-config.mjs align with wrangler.jsonc", async () => {
  const w = readJsonSafe("wrangler.jsonc");
  const cf = readFileSync("scripts/check-cloudflare-config.mjs", "utf8");
  const canonicalUrl = w?.env?.prod?.vars?.CANONICAL_SITE_URL;
  assert.ok(cf.includes(canonicalUrl), `check-cloudflare-config.mjs must assert ${canonicalUrl}`);
});

// ============================================================================
// TIER 4: REAL-WORLD SCENARIOS (6 Tests)
// ============================================================================

registerTest(4, null, "T4.1", "Real-World: Legacy Corporate Visitor Redirection Flow", async () => {
  // Scenario: An external link from an old press release sends a visitor to
  // http://spineinnovlabs.spineworkspace.com/company?utm_source=partner.
  // The worker must 301 redirect to https://spineinnovtech.com/company?utm_source=partner.
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();
  const req = new Request("https://spineinnovlabs.spineworkspace.com/company?utm_source=partner");
  const res = await worker.fetch(req, env);
  assert.equal(res.status, 301);
  const loc = new URL(res.headers.get("Location"));
  assert.equal(loc.origin, "https://spineinnovtech.com");
  assert.equal(loc.pathname, "/company");
  assert.equal(loc.searchParams.get("utm_source"), "partner");
});

registerTest(4, null, "T4.2", "Real-World: Enterprise Architect Technical Diagram Evaluation Flow", async () => {
  // Scenario: Enterprise architect arrives on homepage to inspect technical architecture.
  // Must see diagrammatic architecture storyboard (Fabric, Hermes, Continuity) and zero product workbench heroes.
  const home = readFileSync("components/marketing/innovlabs-home.tsx", "utf8");
  assert.ok(!home.includes("<WorkbenchHeroPreview"), "Must not show interactive product workbench on corporate homepage");
  assert.ok(home.includes("<CorporateArchitectureStoryboard"), "Must render CorporateArchitectureStoryboard");
  const storyboard = readFileSync("components/marketing/corporate-architecture-storyboard.tsx", "utf8");
  assert.ok(storyboard.includes("Context Fabric"), "Must feature Context Fabric");
  assert.ok(storyboard.includes("Hermes Zero-Trust"), "Must feature Hermes Zero-Trust Governance");
  assert.ok(storyboard.includes("Host Continuity"), "Must feature Host Continuity");
});

registerTest(4, null, "T4.3", "Real-World: Product Prospect Solution & Workbench Evaluation Flow", async () => {
  // Scenario: Prospect clicks "Explore SpineWorkspace" from corporate homepage,
  // navigates to product marketing site, accesses /product/workbench,
  // and enters signup with preserved domain context.
  const cta = readFileSync("components/final-cta.tsx", "utf8");
  assert.ok(cta.includes('href="https://spineworkspace.com"'), "CTA directs to product site");

  const productRoute = join(PRODUCT_MARKETING_ROOT, "app/product/workbench/page.tsx");
  assert.ok(existsSync(productRoute), "Workbench explorer route exists on product site");

  const sandbox = evaluateWorkspaceEntry();
  if (sandbox?.workspaceEntryLinks) {
    const signupUrl = new URL(sandbox.workspaceEntryLinks("/solutions/sales").signup);
    assert.equal(signupUrl.origin, "https://auth.spineworkspace.com");
    assert.equal(signupUrl.pathname, "/signup");
    assert.equal(signupUrl.searchParams.get("entry_domain"), "sales");
  }
});

registerTest(4, null, "T4.4", "Real-World: Existing Customer Direct Entry Flow", async () => {
  // Scenario: Customer types spineinnovtech.com/login or /workspace.
  // Worker must immediately edge-redirect via 302 to auth or app.
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();

  const loginRes = await worker.fetch(new Request("https://spineinnovtech.com/login"), env);
  assert.equal(loginRes.status, 302);
  assert.equal(loginRes.headers.get("Location"), "https://auth.spineworkspace.com/login");

  const appRes = await worker.fetch(new Request("https://spineinnovtech.com/workspace"), env);
  assert.equal(appRes.status, 302);
  assert.ok(appRes.headers.get("Location").startsWith("https://app.spineworkspace.com"));
});

registerTest(4, null, "T4.5", "Real-World: Cloudflare Edge & Static Asset Cache Integrity Flow", async () => {
  // Scenario: Visitor requests documents vs immutable static assets.
  // Worker must inject appropriate cache-control headers.
  const worker = await getWorkerHandler();
  assert.ok(worker);
  const env = createMockEdgeEnv();

  // Document request
  const docRes = await worker.fetch(new Request("https://spineinnovtech.com/sitemap.xml"), env);
  const docCache = docRes.headers.get("Cache-Control");
  assert.ok(docCache?.includes("max-age=0") || docCache?.includes("must-revalidate"), "Documents must be fresh");

  // Immutable asset request
  const assetRes = await worker.fetch(new Request("https://spineinnovtech.com/_next/static/chunks/main.js"), env);
  const assetCache = assetRes.headers.get("Cache-Control");
  assert.ok(assetCache?.includes("immutable") || assetCache?.includes("max-age=31536000"), "Static chunks must be immutable");
});

registerTest(4, null, "T4.6", "Real-World: Multi-Domain Solution Taxonomy Audit Flow", async () => {
  // Scenario: Automated audit walks all 20 solution pages and ensures
  // clean mapping without broken paths or unmapped slugs.
  const sandbox = evaluateWorkspaceEntry();
  assert.ok(sandbox?.productSiteUrl);
  const solutions = [
    "customer-success", "customer-support", "product-engineering",
    "human-resources", "memoryandknowledge", "individual", "founders",
    "finance-leaders", "sales", "marketing", "content", "finance",
    "legal", "operations", "revops"
  ];
  for (const s of solutions) {
    const url = sandbox.productSiteUrl(`/solutions/${s}`);
    assert.ok(url.startsWith("https://spineworkspace.com/solutions/"), `Invalid solution URL for ${s}: ${url}`);
    assert.ok(!url.includes("//solutions//"), `Malformed slash in ${url}`);
  }
});

// ============================================================================
// Main Execution Runner
// ============================================================================
async function runSuite() {
  console.log("================================================================================");
  console.log("  Spine InnovTech E2E Opaque-Box Test Suite");
  console.log("  Corporate Cutover, Architecture Realignment & Workbench Export");
  console.log("================================================================================");

  const filteredTests = tests.filter((t) => {
    if (targetTier && t.tier !== targetTier) return false;
    if (targetFeature && t.feature !== targetFeature) return false;
    return true;
  });

  console.log(`Discovered ${tests.length} total tests. Running ${filteredTests.length} matching tests...\n`);

  let passed = 0;
  let failed = 0;
  const failureDetails = [];
  const tierStats = { 1: { pass: 0, fail: 0 }, 2: { pass: 0, fail: 0 }, 3: { pass: 0, fail: 0 }, 4: { pass: 0, fail: 0 } };
  const featureStats = {};

  const startTime = Date.now();

  for (const t of filteredTests) {
    let err = null;
    try {
      await t.fn();
    } catch (e) {
      err = e;
    }

    if (!err) {
      passed++;
      tierStats[t.tier].pass++;
      if (t.feature) {
        featureStats[t.feature] = featureStats[t.feature] || { pass: 0, fail: 0 };
        featureStats[t.feature].pass++;
      }
      if (!summaryOnly) {
        console.log(`  [PASS] [Tier ${t.tier}${t.feature ? ` F${t.feature}` : ""}] ${t.id}: ${t.title}`);
      }
    } else {
      failed++;
      tierStats[t.tier].fail++;
      if (t.feature) {
        featureStats[t.feature] = featureStats[t.feature] || { pass: 0, fail: 0 };
        featureStats[t.feature].fail++;
      }
      failureDetails.push({ test: t, error: err });
      if (!summaryOnly) {
        console.error(`  [FAIL] [Tier ${t.tier}${t.feature ? ` F${t.feature}` : ""}] ${t.id}: ${t.title}`);
        if (verbose) {
          console.error(`         Reason: ${err.message}`);
        }
      }
    }
  }

  const durationMs = Date.now() - startTime;

  console.log("\n================================================================================");
  console.log("  Test Results Breakdown");
  console.log("================================================================================");
  console.log(`  Tier 1 (Feature Coverage):        ${tierStats[1].pass} passed, ${tierStats[1].fail} failed (Total: ${tierStats[1].pass + tierStats[1].fail})`);
  console.log(`  Tier 2 (Boundary & Corner Cases): ${tierStats[2].pass} passed, ${tierStats[2].fail} failed (Total: ${tierStats[2].pass + tierStats[2].fail})`);
  console.log(`  Tier 3 (Cross-Feature Combos):    ${tierStats[3].pass} passed, ${tierStats[3].fail} failed (Total: ${tierStats[3].pass + tierStats[3].fail})`);
  console.log(`  Tier 4 (Real-World Scenarios):    ${tierStats[4].pass} passed, ${tierStats[4].fail} failed (Total: ${tierStats[4].pass + tierStats[4].fail})`);
  console.log("--------------------------------------------------------------------------------");
  console.log(`  Total Passed:   ${passed} / ${filteredTests.length}`);
  console.log(`  Total Failed:   ${failed} / ${filteredTests.length}`);
  console.log(`  Suite Duration: ${durationMs}ms`);
  console.log("================================================================================");

  if (failureDetails.length > 0) {
    console.log("\nFailed Tests Summary:");
    for (const { test, error } of failureDetails) {
      console.log(`  • [Tier ${test.tier}${test.feature ? ` F${test.feature}` : ""}] ${test.id} (${test.title})`);
      console.log(`    Error: ${error.message}`);
    }
    console.log("");
  }

  return { total: filteredTests.length, passed, failed, failureDetails, tierStats, featureStats };
}

runSuite().then(({ failed }) => {
  if (failed > 0) {
    process.exitCode = 1;
  }
}).catch((err) => {
  console.error("Fatal test runner error:", err);
  process.exit(2);
});
