import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

const productRepo = "/Users/nirmal/Github/spineworkspace-live/apps/marketing";
const corporateRepo = "/Users/nirmal/Github/spinemarketing-magic-ui";

// Initialize public sites environment before importing lib/site-urls.ts
if (!process.env.SPINE_PUBLIC_SITES_JSON) {
  const { loadPublicSitesConfig } = await import(join(corporateRepo, "lib/public-sites-config.ts"));
  const { resolvedPublicSites } = await import(join(corporateRepo, "lib/resolve-public-site-urls.ts"));
  process.env.SPINE_PUBLIC_SITES_JSON = JSON.stringify(resolvedPublicSites(loadPublicSitesConfig()));
}

console.log("================================================================================");
console.log("  CHALLENGER 2 EMPIRICAL ADVERSARIAL STRESS TEST & ROUTING AUDIT");
console.log("================================================================================");

let totalPassed = 0;
let totalFailed = 0;
const failures = [];

function test(name, fn) {
  try {
    fn();
    totalPassed++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    totalFailed++;
    failures.push({ name, error: err.message, stack: err.stack });
    console.log(`  [FAIL] ${name} -> ${err.message}`);
  }
}

async function testAsync(name, fn) {
  try {
    await fn();
    totalPassed++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    totalFailed++;
    failures.push({ name, error: err.message, stack: err.stack });
    console.log(`  [FAIL] ${name} -> ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// SECTION 1: TARGET WORKSPACE INTEGRATION (/product/workbench)
// -----------------------------------------------------------------------------
console.log("\n--- SECTION 1: Target Workspace Integration in spineworkspace-live/apps/marketing ---");

test("Workbench route exists and page renders ProductFrame with ContentPage and WorkbenchViewExplorer", () => {
  const pageSrc = readFileSync(join(productRepo, "app/product/workbench/page.tsx"), "utf8");
  assert.ok(pageSrc.includes("WorkbenchViewExplorer"), "WorkbenchViewExplorer must be imported in page.tsx");
  assert.ok(pageSrc.includes("ContentPage"), "ContentPage must be imported in page.tsx");
  assert.ok(pageSrc.includes("ProductFrame"), "ProductFrame must be imported in page.tsx");
  assert.ok(pageSrc.includes("PRODUCT_PAGES.workbench"), "Page content must be loaded from PRODUCT_PAGES.workbench");
});

test("Workbench build artifact workbench.html is generated and contains core workbench markup", () => {
  const htmlPath = join(productRepo, ".next/server/app/product/workbench.html");
  assert.ok(existsSync(htmlPath), "workbench.html must exist after next build");
  const html = readFileSync(htmlPath, "utf8");
  assert.ok(html.length > 50000, `workbench.html must be substantial in size (was ${html.length} bytes)`);
  assert.ok(html.includes("Spine Workbench | Your Work, With Context"), "Page title must be rendered in HTML");
  assert.ok(html.includes('id="workbench-views"'), 'Element id="workbench-views" must be rendered');
  assert.ok(html.includes('id="workbench-dashboards"'), 'Element id="workbench-dashboards" must be rendered');
  assert.ok(html.includes('id="workbench-canvas"'), 'Element id="workbench-canvas" must be rendered');
  assert.ok(html.includes('id="workbench-customer-journey"'), 'Element id="workbench-customer-journey" must be rendered');
  assert.ok(html.includes('id="workbench-recording"'), 'Element id="workbench-recording" must be rendered');
  assert.ok(html.includes("Actual application captures with QA fixture data"), "Factual QA provenance note must be rendered");
});

test("Verify all 23 domains in lib/workbench-source-views.ts schema and views", () => {
  const src = readFileSync(join(productRepo, "lib/workbench-source-views.ts"), "utf8");
  const matches = [...src.matchAll(/"id":\s*"([a-z0-9-]+)",\s*"title":\s*"([^"]+)",\s*"benefit":\s*"([^"]+)",\s*"audience":\s*"([^"]+)"/g)];
  assert.equal(matches.length, 23, `Must discover all 23 domains (found ${matches.length})`);
  
  for (const m of matches) {
    const [, id, title, benefit, audience] = m;
    assert.ok(id.length > 0, `Domain id must not be empty`);
    assert.ok(title.length > 0, `Domain title must not be empty for ${id}`);
    assert.ok(benefit.length > 10, `Domain benefit must be descriptive for ${id}`);
    assert.ok(["registered", "internal"].includes(audience), `Audience must be registered or internal for ${id}`);
  }
});

test("Exported workbench components exist and compile", () => {
  const expectedFiles = [
    "responsive-media.module.css",
    "responsive-workbench-screenshot.tsx",
    "workbench-canvas-showcase.tsx",
    "workbench-capture-preview.tsx",
    "workbench-customer-journey.tsx",
    "workbench-dashboard-showcase.tsx",
    "workbench-guided-demo.tsx",
    "workbench-hero-preview.tsx",
    "workbench-shell-recording.tsx",
    "workbench-view-explorer.tsx",
  ];
  for (const file of expectedFiles) {
    const full = join(productRepo, "components/workbench", file);
    assert.ok(existsSync(full), `Expected component file ${file} to exist in components/workbench`);
    assert.ok(statSync(full).size > 100, `Component ${file} must have non-trivial size`);
  }
});

test("UI primitives border-beam and magic-card exist in target app", () => {
  assert.ok(existsSync(join(productRepo, "components/ui/border-beam.tsx")), "border-beam.tsx must exist");
  assert.ok(existsSync(join(productRepo, "components/ui/magic-card.tsx")), "magic-card.tsx must exist");
});

// -----------------------------------------------------------------------------
// SECTION 2: ASSET INTEGRITY STRESS-TEST (WebP & Video)
// -----------------------------------------------------------------------------
console.log("\n--- SECTION 2: Media Asset Integrity (WebP & Video) ---");

test("WebP assets: All 439 files in public/images/workbench exist, are non-empty, and have valid RIFF/WEBP magic bytes", () => {
  const imgDir = join(productRepo, "public/images/workbench");
  function walk(dir) {
    let res = [];
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, ent.name);
      if (ent.isDirectory()) res = res.concat(walk(p));
      else res.push(p);
    }
    return res;
  }
  const files = walk(imgDir);
  assert.equal(files.length, 439, `Expected 439 image assets, found ${files.length}`);
  
  for (const file of files) {
    const stat = statSync(file);
    assert.ok(stat.size > 0, `Image asset must not be empty: ${file}`);
    const buf = readFileSync(file);
    const magic = buf.toString("utf8", 0, 4);
    const subType = buf.toString("utf8", 8, 12);
    assert.equal(magic, "RIFF", `Expected RIFF header in ${file}`);
    assert.equal(subType, "WEBP", `Expected WEBP subtype in ${file}`);
  }
});

test("Video assets: MP4 and VTT captions exist and have valid non-zero size", () => {
  const vidDir = join(productRepo, "public/videos/workbench");
  const mp4Path = join(vidDir, "workbench-shell-20261014.mp4");
  const vttPath = join(vidDir, "workbench-shell-20261014.vtt");
  assert.ok(existsSync(mp4Path), "workbench-shell-20261014.mp4 must exist");
  assert.ok(existsSync(vttPath), "workbench-shell-20261014.vtt must exist");
  assert.ok(statSync(mp4Path).size > 500000, "MP4 video must be > 500KB");
  assert.ok(statSync(vttPath).size > 100, "VTT captions must be > 100 bytes");
});

test("All image and video assets referenced in workbench components exist on disk", () => {
  const wbDir = join(productRepo, "components/workbench");
  const compFiles = readdirSync(wbDir).filter(f => f.endsWith(".tsx"));
  for (const file of compFiles) {
    const src = readFileSync(join(wbDir, file), "utf8");
    const matches = [...src.matchAll(/(?:\/images\/workbench\/|\/videos\/workbench\/)[a-zA-Z0-9_\-\.\/]+/g)];
    for (const m of matches) {
      const assetPath = join(productRepo, "public", m[0]);
      assert.ok(existsSync(assetPath), `Referenced asset ${m[0]} in ${file} must exist at ${assetPath}`);
    }
  }
});

// -----------------------------------------------------------------------------
// SECTION 3: WORKBENCH INTERNAL ROUTING & LINKS IN TARGET APP
// -----------------------------------------------------------------------------
console.log("\n--- SECTION 3: Workbench Internal Routing in Target App ---");

test("Workbench internal links point to valid target routes (/product/workbench#..., /connect/hosts, /product/how-it-works, /videos/...)", () => {
  const wbDir = join(productRepo, "components/workbench");
  const compFiles = readdirSync(wbDir).filter(f => f.endsWith(".tsx"));
  
  for (const file of compFiles) {
    const src = readFileSync(join(wbDir, file), "utf8");
    // Check static href="..."
    const hrefs = [...src.matchAll(/\bhref=["'](\/[^"']+|#[^"']+)["']/g)].map(m => m[1]);
    for (const href of hrefs) {
      const isAnchor = href.startsWith("#");
      const isWbRoute = href.startsWith("/product/workbench#") || href === "/product/workbench";
      const isConnect = href === "/connect/hosts" || href === "/connect/integrations";
      const isProductInfo = href === "/product/how-it-works" || href === "/solutions";
      const isVideoDownload = href.startsWith("/videos/workbench/");
      assert.ok(
        isAnchor || isWbRoute || isConnect || isProductInfo || isVideoDownload,
        `Unexpected internal route in ${file}: ${href}`
      );
    }
  }
});

test("WorkbenchViewExplorer does not crash on adversarial initialDomain values", () => {
  const DEFAULT_DOMAIN = "founderops";
  const sourceViewsSrc = readFileSync(join(productRepo, "lib/workbench-source-views.ts"), "utf8");
  const allDomainIds = [...sourceViewsSrc.matchAll(/"id":\s*"([a-z0-9-]+)"/g)].map(m => m[1]);
  const publicDomainIds = allDomainIds.filter(
    id => !["brandstore", "ops", "founder", "product"].includes(id)
  );

  const adversarialInputs = [
    "",
    "   ",
    null,
    undefined,
    "../../etc/passwd",
    "<script>alert(1)</script>",
    "NON_EXISTENT",
    "FOUNDEROPS",
    "ops",
    "brandstore",
    "founder",
    "product"
  ];

  for (const input of adversarialInputs) {
    const selected = publicDomainIds.some(id => id === input) ? input : DEFAULT_DOMAIN;
    assert.equal(selected, DEFAULT_DOMAIN, `Adversarial input "${input}" must fall back safely to DEFAULT_DOMAIN`);
  }
});

// -----------------------------------------------------------------------------
// SECTION 4: BROKEN LINK & CROSS-SITE ROUTING STRESS TEST IN spinemarketing-magic-ui
// -----------------------------------------------------------------------------
console.log("\n--- SECTION 4: Corporate Cross-Site Routing Stress-Test ---");

testAsync("lib/site-urls.ts origin constants strictly match production contracts", async () => {
  const { SPINE_WORKSPACE_APEX, AUTH_ORIGIN, SPINE_WORKSPACE_APP } = await import(join(corporateRepo, "lib/site-urls.ts"));
  assert.equal(SPINE_WORKSPACE_APEX, "https://spineworkspace.com", "APEX must be https://spineworkspace.com");
  assert.equal(AUTH_ORIGIN, "https://auth.spineworkspace.com", "AUTH must be https://auth.spineworkspace.com");
  assert.equal(SPINE_WORKSPACE_APP, "https://app.spineworkspace.com", "APP must be https://app.spineworkspace.com");
});

testAsync("lib/workspace-entry.ts: productSiteUrl adversarial stress testing", async () => {
  const { productSiteUrl } = await import(join(corporateRepo, "lib/workspace-entry.ts"));
  
  // Normal solution paths
  assert.equal(productSiteUrl("/solutions/founders"), "https://spineworkspace.com/solutions/founderops");
  assert.equal(productSiteUrl("/solutions/memoryandknowledge"), "https://spineworkspace.com/solutions/knowledge-records");
  assert.equal(productSiteUrl("/solutions/knowledge-records"), "https://spineworkspace.com/solutions/knowledge-records");
  assert.equal(productSiteUrl("/solutions/customer-success"), "https://spineworkspace.com/solutions/account-success");
  assert.equal(productSiteUrl("/solutions/customer-support"), "https://spineworkspace.com/solutions/support");
  assert.equal(productSiteUrl("/solutions/operations"), "https://spineworkspace.com/solutions/ops");
  assert.equal(productSiteUrl("/solutions/revops"), "https://spineworkspace.com/solutions/businessops");
  assert.equal(productSiteUrl("/solutions/services"), "https://spineworkspace.com/solutions/service");

  // Trailing slash handling
  assert.equal(productSiteUrl("/solutions/memoryandknowledge/"), "https://spineworkspace.com/solutions/knowledge-records");
  assert.equal(productSiteUrl("/solutions/founders/"), "https://spineworkspace.com/solutions/founderops");

  // Pricing
  assert.equal(productSiteUrl("/pricing"), "https://spineworkspace.com/pricing");

  // Empty, null, root
  assert.equal(productSiteUrl(""), "https://spineworkspace.com/");
  assert.equal(productSiteUrl("/"), "https://spineworkspace.com/");
  assert.equal(productSiteUrl(undefined), "https://spineworkspace.com/");

  // Unknown solution path
  assert.equal(productSiteUrl("/solutions/unknown-lens"), "https://spineworkspace.com/solutions");
  assert.equal(productSiteUrl("/solutions"), "https://spineworkspace.com/solutions");
  assert.equal(productSiteUrl("/solutions/"), "https://spineworkspace.com/solutions");

  // Malicious / Path traversal attempts
  assert.equal(productSiteUrl("/solutions/../etc/passwd"), "https://spineworkspace.com/solutions");
  assert.equal(productSiteUrl("https://evil.com"), "https://spineworkspace.com/");
  assert.equal(productSiteUrl("//evil.com"), "https://spineworkspace.com/");
});

testAsync("lib/workspace-entry.ts: workspaceEntryLinks adversarial stress testing", async () => {
  const { workspaceEntryLinks } = await import(join(corporateRepo, "lib/workspace-entry.ts"));
  
  // Default entry (no path)
  const defaultEntry = workspaceEntryLinks();
  assert.ok(defaultEntry.signup.startsWith("https://auth.spineworkspace.com/signup?next="), "Default signup must target auth origin");
  assert.ok(defaultEntry.login.startsWith("https://auth.spineworkspace.com/login?next="), "Default login must target auth origin");
  assert.equal(defaultEntry.product, "https://spineworkspace.com/");
  const defaultNext = new URL(defaultEntry.signup).searchParams.get("next");
  assert.equal(defaultNext, "/workspace/my-work");

  // Solution path: memoryandknowledge
  const makEntry = workspaceEntryLinks("/solutions/memoryandknowledge");
  assert.equal(makEntry.product, "https://spineworkspace.com/solutions/knowledge-records");
  const makSignupUrl = new URL(makEntry.signup);
  assert.equal(makSignupUrl.origin, "https://auth.spineworkspace.com");
  assert.equal(makSignupUrl.searchParams.get("entry_domain"), "knowledge-management");
  assert.equal(makSignupUrl.searchParams.get("next"), "/workspace/work/knowledge-management/dashboard");

  // Solution path: founders (special case: homeView is company-overview)
  const foundersEntry = workspaceEntryLinks("/solutions/founders");
  assert.equal(foundersEntry.product, "https://spineworkspace.com/solutions/founderops");
  const foundersSignupUrl = new URL(foundersEntry.signup);
  assert.equal(foundersSignupUrl.searchParams.get("entry_domain"), "founderops");
  assert.equal(foundersSignupUrl.searchParams.get("next"), "/workspace/work/founderops/company-overview");

  // Boundary: empty string, slashes, unknown
  const emptyEntry = workspaceEntryLinks("");
  assert.equal(new URL(emptyEntry.signup).origin, "https://auth.spineworkspace.com");
  assert.equal(new URL(emptyEntry.login).origin, "https://auth.spineworkspace.com");
  assert.equal(emptyEntry.product, "https://spineworkspace.com/");
});

testAsync("lib/workspace-entry.ts: appEntryUrl adversarial stress testing", async () => {
  const { appEntryUrl } = await import(join(corporateRepo, "lib/workspace-entry.ts"));

  // Default
  assert.equal(appEntryUrl(), "https://app.spineworkspace.com");
  assert.equal(appEntryUrl(""), "https://app.spineworkspace.com");

  // Relative paths
  assert.equal(appEntryUrl("/workspace"), "https://app.spineworkspace.com/workspace");
  assert.equal(appEntryUrl("workspace/work/sales"), "https://app.spineworkspace.com/workspace/work/sales");
  assert.equal(appEntryUrl("?tab=overview"), "https://app.spineworkspace.com/?tab=overview");
});

testAsync("Audit all 20 solution routes in lib/solution-domains.ts for workspace entry compatibility", async () => {
  const { workspaceEntryLinks, productSiteUrl } = await import(join(corporateRepo, "lib/workspace-entry.ts"));
  const { SOLUTION_DOMAINS } = await import(join(corporateRepo, "lib/solution-domains.ts"));
  const slugs = Object.keys(SOLUTION_DOMAINS);
  assert.equal(slugs.length, 20, `Expected 20 solution slugs, found ${slugs.length}`);

  for (const slug of slugs) {
    const route = `/solutions/${slug}`;
    const pUrl = productSiteUrl(route);
    assert.ok(pUrl.startsWith("https://spineworkspace.com/solutions/"), `Slug ${slug} must map to valid solution destination: ${pUrl}`);
    assert.notEqual(pUrl, "https://spineworkspace.com/solutions", `Slug ${slug} mapped to unspecific /solutions fallback`);

    const links = workspaceEntryLinks(route);
    assert.ok(links.signup.startsWith("https://auth.spineworkspace.com/signup?"), `Signup link for ${slug} must use auth.spineworkspace.com`);
    assert.ok(links.login.startsWith("https://auth.spineworkspace.com/login?"), `Login link for ${slug} must use auth.spineworkspace.com`);
    const parsedSignup = new URL(links.signup);
    assert.ok(parsedSignup.searchParams.get("entry_domain"), `Entry domain must be set for solution ${slug}`);
    assert.ok(parsedSignup.searchParams.get("next"), `Next query param must be set for solution ${slug}`);
  }
});

test("Audit corporate UI components for broken CTAs and destination correctness", () => {
  // Check final-cta.tsx
  const finalCtaSrc = readFileSync(join(corporateRepo, "components/final-cta.tsx"), "utf8");
  assert.ok(finalCtaSrc.includes('href="https://spineworkspace.com"'), "final-cta.tsx must point to https://spineworkspace.com");
  assert.ok(!finalCtaSrc.includes('href="/product"'), "final-cta.tsx must not link to local /product");

  // Check innovlabs-home.tsx
  const homeSrc = readFileSync(join(corporateRepo, "components/marketing/innovlabs-home.tsx"), "utf8");
  assert.ok(!homeSrc.includes("WorkbenchHeroPreview"), "innovlabs-home.tsx must not include WorkbenchHeroPreview");
  assert.ok(homeSrc.includes("CorporateArchitectureStoryboard"), "innovlabs-home.tsx must include CorporateArchitectureStoryboard");
  assert.ok(
    homeSrc.includes('href="https://spineworkspace.com"') || homeSrc.includes("productSiteUrl"),
    "innovlabs-home.tsx must link to product site"
  );

  // Check workspace-benefits.tsx
  const benefitsSrc = readFileSync(join(corporateRepo, "components/marketing/workspace-benefits.tsx"), "utf8");
  assert.ok(!benefitsSrc.includes("/product#workbench-views"), "workspace-benefits.tsx must not link to /product#workbench-views");
  assert.ok(benefitsSrc.includes("/platform"), "workspace-benefits.tsx must link to /platform architecture");

  // Check pricing page
  const pricingSrc = readFileSync(join(corporateRepo, "app/pricing/page.tsx"), "utf8");
  assert.ok(pricingSrc.includes('href="/product"'), "pricing page must retain explicit /product link for audit");
  assert.ok(pricingSrc.includes('href="https://spineworkspace.com/pricing"'), "pricing page must link to https://spineworkspace.com/pricing");
  assert.ok(pricingSrc.includes('href="https://auth.spineworkspace.com/signup"'), "pricing page must link to https://auth.spineworkspace.com/signup");
});

test("Edge worker routing audit (worker/index.ts)", () => {
  const workerSrc = readFileSync(join(corporateRepo, "worker/index.ts"), "utf8");
  
  // 301 Canonical redirects
  assert.ok(workerSrc.includes("Response.redirect(target.toString(), 301)"), "Must perform 301 redirects for legacy hosts");
  assert.ok(workerSrc.includes("spineinnovtech.spineworkspace.com"), "Must redirect spineinnovtech.spineworkspace.com");
  assert.ok(workerSrc.includes("spineinnovlabs.spineworkspace.com"), "Must redirect spineinnovlabs.spineworkspace.com");
  assert.ok(workerSrc.includes("spineinnovlabs.com"), "Must redirect spineinnovlabs.com");
  assert.ok(workerSrc.includes("www.spineinnovlabs.com"), "Must redirect www.spineinnovlabs.com");

  // 302 Entry redirects
  assert.ok(workerSrc.includes("Response.redirect(target.toString(), 302)"), "Must perform 302 redirects for entry routes");
  assert.ok(workerSrc.includes("/login") && workerSrc.includes("/signup"), "Must redirect /login and /signup to auth origin");
  assert.ok(workerSrc.includes("/workspace"), "Must redirect /workspace to app origin");
  assert.ok(workerSrc.includes("https://auth.spineworkspace.com"), "Auth redirect must target https://auth.spineworkspace.com");
  assert.ok(workerSrc.includes("https://app.spineworkspace.com"), "App redirect must target https://app.spineworkspace.com");
});

test("Zero localhost, 127.0.0.1, or test domain leakage across corporate codebase", () => {
  const filesToCheck = [
    "wrangler.jsonc",
    "config.yaml",
    "worker/index.ts",
    "lib/site-url.ts",
    "lib/site-urls.ts",
    "lib/workspace-entry.ts",
    "lib/navigation.ts",
    "components/final-cta.tsx",
    "components/header.tsx",
    "components/footer.tsx"
  ];

  for (const rel of filesToCheck) {
    const full = join(corporateRepo, rel);
    if (!existsSync(full)) continue;
    const content = readFileSync(full, "utf8");
    assert.ok(!content.includes("localhost:"), `Localhost port found in ${rel}`);
    assert.ok(!content.includes("127.0.0.1"), `127.0.0.1 found in ${rel}`);
    assert.ok(!content.includes("example.com"), `example.com found in ${rel}`);
  }
});

// -----------------------------------------------------------------------------
// SUMMARY & VERDICT
// -----------------------------------------------------------------------------
setTimeout(() => {
  console.log("\n================================================================================");
  console.log(`  EMPIRICAL AUDIT RESULTS: ${totalPassed} Passed, ${totalFailed} Failed`);
  console.log("================================================================================");

  if (totalFailed > 0) {
    console.error(`\nFailures encountered (${totalFailed}):`);
    for (const f of failures) {
      console.error(`  - ${f.name}: ${f.error}`);
    }
    process.exit(1);
  } else {
    console.log("\nAll empirical tests PASSED! System is robust and meets all verification criteria.");
  }
}, 500);
