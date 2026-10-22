/**
 * Full corporate-site source audit. No network access or CI credits required.
 * Run after checkout: node scripts/audit-corporate-site.mjs
 * Complements (does not replace) a real production build and browser checks.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const errors = [];
const warnings = [];
const source = (file) => readFileSync(file, "utf8");
const check = (condition, message) => { if (!condition) errors.push(message); };
const routePaths = new Set();
const routeFiles = [];

function visitPages(directory, segments = []) {
  if (!existsSync(directory)) return;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
      const next = /^\(.+\)$/.test(entry.name) ? segments : [...segments, entry.name];
      visitPages(full, next);
    } else if (/^page\.(?:tsx|ts)$/.test(entry.name)) {
      routePaths.add("/" + segments.join("/"));
      routeFiles.push(full);
    }
  }
}
visitPages("app");
check(routeFiles.length >= 71, "expected at least 71 corporate and legacy route entrypoints");
function existsRoute(route) {
  if (routePaths.has(route) || existsSync("public" + route)) return true;
  return [...routePaths].some((pattern) => {
    if (!pattern.includes("[")) return false;
    const a = pattern.split("/");
    const b = route.split("/");
    return a.length === b.length && a.every((part, i) =>
      part === b[i] || (part.startsWith("[") && part.endsWith("]") && b[i]?.length > 0)
    );
  });
}

const publicSurface = [
  "lib/navigation.ts",
  "components/final-cta.tsx",
  "app/page.tsx",
  "app/company/page.tsx",
  "app/about/content.tsx",
  "app/services/content.tsx",
  "app/contact/content.tsx",
  "app/portfolio/page.tsx",
  "app/pricing/page.tsx",
  "app/updates/page.tsx",
];
for (const file of publicSurface) {
  check(existsSync(file), `missing core surface: ${file}`);
  if (!existsSync(file)) continue;
  const content = source(file);
  for (const item of content.matchAll(/\bhref\s*[:=]\s*["'](\/(?!\/)[^"'\s]+)["']/g)) {
    const target = item[1].split(/[?#]/)[0].replace(/\/$/, "") || "/";
    check(existsRoute(target), `broken corporate link in ${file}: ${item[1]}`);
  }
}
const home = source("app/page.tsx");
const banner = source("components/marketing/innovlabs-home.tsx");
const footer = source("components/footer.tsx");
const meta = source("app/layout.tsx");
const policy = source("lib/route-policy.ts");
const privacy = source("app/privacy/page.tsx");
const terms = source("app/terms/page.tsx");
const about = source("app/about/content.tsx");
const services = source("app/services/content.tsx");
const contact = source("app/contact/content.tsx");
const form = source("components/lead-form.tsx");

check(home.includes("InnovLabsHome"), "corporate homepage component not wired");
check(banner.includes("SPINE INNOVTECH") && banner.includes("We build the foundation for connected business work."), "company identity and product introduction absent");
check(source("components/header.tsx").includes("headerNavigation"), "header must render the full corporate navigation");
for (const label of ["Company", "Technology", "Insights"]) {
  check(source("lib/navigation.ts").includes(`label: "${label}"`), `missing corporate navigation category: ${label}`);
}
check(source("lib/solution-nav.ts").includes("marketingPathForSolution") && !source("lib/solution-nav.ts").includes("workspaceUrl"), "solution navigation must point to local marketing detail pages");
check(footer.includes('href="/site-map"'), "footer must expose the complete website directory");
check(footer.includes("Spine InnovTech"), "corporate footer absent");
check(!meta.includes('canonical: "/"'), "site-wide root canonical incorrectly points all routes to /");
check(meta.includes('template: "%s"'), "metadata template can duplicate corporate suffixes");
check(/path: "\/product",\s*action: "keep"/.test(policy), "product-details page must be included in the corporate sitemap");
check(source("app/product/page.tsx").includes("SpineWorkspaceDetails"), "product overview must render product details instead of redirecting");
check(!source("lib/navigation.ts").includes("SPINE_WORKSPACE_APEX"), "marketing product navigation must remain on this site");
check(existsSync("app/(enter)/layout.tsx") && source("app/(enter)/layout.tsx").includes("index: false"), "marketing account previews must be noindex");
check(about.includes("Spine InnovTech") && !about.includes("$8M"), "unsupported founder case must not be presented");
check(!services.includes("14 days") && services.includes("text-white"), "services must avoid invented delivery guarantees");
check(!contact.includes("SOC 2 aligned") && !contact.includes("24 hours") && !contact.includes("1–2 weeks"), "contact has unsupported guarantees");
check(form.includes('setStatus("prepared")') && form.includes("has not submitted it"), "mailto fallback must never claim a received enquiry");
check(privacy.includes("Privacy Policy") && terms.includes("Terms"), "legal pages must exist");
const pricing = source("app/pricing/page.tsx");
const workerSource = source("worker/index.ts");
check(pricing.includes("https://spineworkspace.com/pricing"), "corporate /pricing must redirect to the product pricing page");
check(/status:\s*308/.test(workerSource) && workerSource.includes("maybePricingRedirect"), "worker must issue a permanent 308 redirect for /pricing to the product site");
check(!/\$\d+\s*\/\s*(seat|user|tool|stream|month)/i.test(pricing) && !/checkout|Register Free Account|signup/i.test(pricing), "corporate pricing page must not expose plans, checkout or product signup");
check(source("app/portfolio/page.tsx").includes("not a list of separately purchasable products"), "portfolio must clarify capability architecture");
check(existsSync("public/og.png") && existsSync("public/icon.svg"), "social and brand assets missing");

// Origin story: the $8M renewal is PRIOR FOUNDER EXPERIENCE, not a product result.
const aboutPage = source("app/about/page.tsx");
const aboutProof = source("app/about/sticky-sections.tsx");
check(aboutPage.includes("AboutJourneyScroll"), "About/Our story must render the founder origin story");
check(aboutProof.includes("$8M") && aboutProof.includes("MuleSoft") && aboutProof.includes("Salesforce"), "About origin must tell the $8M renewal with authorized Slack/email/MuleSoft/Salesforce context");
check(/Before founding Spine InnovTech/.test(aboutProof) && /not a SpineWorkspace customer result/i.test(aboutProof), "About $8M must be framed as prior founder experience, not a SpineWorkspace customer result/testimonial/ROI");
check(banner.includes("Explore SpineWorkspace") && banner.includes('href="/proof"'), "homepage must offer the action CTA (Explore SpineWorkspace, one word) and a path to the proof");

// Product brand is ONE WORD in visitor copy everywhere. Company is 'Spine InnovTech'.
const brandSources = [
  ["homepage", banner],
  ["footer", footer],
  ["about-content", about],
  ["about-origin", aboutProof],
  ["company", source("app/company/page.tsx")],
  ["header", source("components/header.tsx")],
  ["navigation", source("lib/navigation.ts")],
  ["contact", contact],
];
for (const [label, text] of brandSources) {
  check(!/\bSpine Workspace\b/.test(text), `visitor copy must use one-word 'SpineWorkspace' on ${label}`);
}
// Branding must be consistent across EVERY public corporate route source,
// including solution, use-case and campaign pages. URLs and code identifiers
// never contain the two-word form (no space), so a match is always visitor copy.
for (const file of routeFiles) {
  const content = source(file);
  if (/\bSpine Workspace\b/.test(content)) {
    errors.push(`outdated two-word product brand in route source: ${file}`);
  }
}
warnings.push("Privacy/terms: require legal review of controller identity, commitments, retention and jurisdiction.");
warnings.push("Product-specific secondary pages retain detailed workflow copy; editorial approval remains necessary.");
warnings.push("Sanity articles, actual browser screenshots, live links and deployed HTML require a real build/browser pass.");

console.log(`Audited ${routeFiles.length} route sources and ${publicSurface.length} primary corporate surfaces.`);
for (const warning of warnings) console.warn("REVIEW: " + warning);
if (errors.length) {
  for (const error of errors) console.error("FAIL: " + error);
  process.exitCode = 1;
} else {
  console.log("Corporate source audit passed (runtime/deployment not implied).");
}
