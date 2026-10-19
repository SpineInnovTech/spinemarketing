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
check(banner.includes("SPINE INNOVTECH") && banner.includes("SpineWorkspace connects your tools, context and team."), "company identity and product introduction absent");
check(source("components/header.tsx").includes("headerNavigation"), "header must render the full corporate navigation");
for (const label of ["Company", "Platform & Products", "Insights"]) {
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
check(source("app/pricing/page.tsx").includes('href="/product"'), "corporate pricing must link to the local product-details page");
check(source("app/portfolio/page.tsx").includes("not a list of separately purchasable products"), "portfolio must clarify capability architecture");
check(existsSync("public/og.png") && existsSync("public/icon.svg"), "social and brand assets missing");

for (const file of routeFiles) {
  const content = source(file);
  if (/title:\s*["'][^"'\n]*\| SpineWorkspace/.test(content)) {
    errors.push(`outdated compact product branding in title: ${file}`);
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
