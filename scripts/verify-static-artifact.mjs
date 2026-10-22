/**
 * Prevent a blank, stale or product-workbench page from being deployed as the
 * Spine InnovTech corporate site.
 */
import { readFileSync, statSync } from "node:fs";
import "./verify-domain-solutions.mjs";
import "./verify-auth-entry.mjs";
import "./verify-workbench-artifact.mjs";
const text = readFileSync("out/index.html", "utf8");
const sitemap = readFileSync("out/sitemap.xml", "utf8");
const product = readFileSync("out/product.html", "utf8");
const redirects = readFileSync("out/_redirects", "utf8")
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith("#"))
  .map(line => line.split(/\s+/));
if (!product.includes("A workspace for connected business work.") || !product.includes('id="features"') || !product.includes('id="how-it-works"')) {
  throw new Error("Static export missing local Spine Workspace product features.");
}
if (redirects.some(([source]) => source.replace(/\/$/, "") === "/product")) {
  throw new Error("Cloudflare asset redirects must not override the local /product page.");
}
const productAlias = redirects.find(([source]) => source === "/spineworkspace");
if (!productAlias || productAlias[1] !== "/product" || productAlias[2] !== "301") {
  throw new Error("Legacy /spineworkspace entry must redirect internally to /product.");
}
if (!text.includes("We build the foundation for connected business work.") || !text.includes("Spine InnovTech")) {
  throw new Error("Static export missing corporate hero/company identity.");
}
const pricing = readFileSync("out/pricing.html", "utf8");
const pricingText = pricing.replace(/<script\b[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
const pricingSchemas = [...pricing.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
if (!pricingText.includes("pricing") || !pricingText.includes("Spine Workspace") || !pricing.includes("https://spineworkspace.com/pricing") || !pricing.includes('href="/product"')) {
  throw new Error("Pricing page must expose commercial terms, link to product pricing calculator, and link to product details.");
}
if (!pricingSchemas.some((schema) => schema["@type"] === "FAQPage" || schema["@type"] === "BreadcrumbList")) {
  throw new Error("Pricing page must include structured JSON-LD FAQ/Breadcrumb schema.");
}
for (const [route, html] of [["/product", product]]) {
  if (!html.includes("https://spineworkspace.com/pricing") && !html.includes('href="/pricing"')) throw new Error(`${route} must expose product pricing navigation.`);
}
const header = text.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
for (const category of ["Company", "Platform", "Insights"]) {
  if (!header.includes(category)) throw new Error(`Corporate navigation category missing: ${category}`);
}
if (text.includes("Good morning, Operator") || text.includes("Customer Zero")) {
  throw new Error("Authenticated/demo workspace content must not become public corporate homepage.");
}
if (!sitemap.includes("spineinnovtech.com") || sitemap.includes("spineinnovlabs.spineworkspace.com") || sitemap.includes("spineinnovlabs.com")) {
  throw new Error("Sitemap must use spineinnovtech.com and contain zero spineinnovlabs occurrences.");
}
const llmsTxt = readFileSync("out/llms.txt", "utf8");
if (!llmsTxt.includes("https://spineinnovtech.com") || llmsTxt.includes("spineinnovlabs")) {
  throw new Error("llms.txt must exist, list spineinnovtech.com URLs, and contain zero spineinnovlabs occurrences.");
}
if (statSync("out/index.html").size < 1024) {
  throw new Error("Suspiciously small production HTML.");
}

// General technology and company pages must keep their scope. A shared hero
// override previously turned these routes into renewal-only marketing pages.
const broadRoutes = [
  "twin", "business-context", "continuity", "governance", "adaptive-workspace",
  "host-connected-environment", "platform", "platform/spine-fabric",
  "platform/how-it-works", "integrations", "security", "developers", "use-cases",
];
for (const route of broadRoutes) {
  const html = readFileSync(`out/${route}.html`, "utf8");
  const hero = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]*>/g, "") ?? "";
  if (!hero.trim() || /\brenewals?\b/i.test(hero)) {
    throw new Error(`/${route} needs its own broad introduction, not a renewal-only hero.`);
  }
  if (html.includes("Renewal Decision Workspace") || html.includes("Expand after renewals are working")) {
    throw new Error(`/${route} still contains the forced renewal-copy layer.`);
  }
}
const twin = readFileSync("out/twin.html", "utf8");
for (const scope of ["Operations", "Finance", "Product &amp; engineering", "Leadership", "Coworker"]) {
  if (!twin.includes(scope)) throw new Error(`Twin scope missing: ${scope}`);
}
if (!twin.includes("The Twin uses the context it is permitted to access")) {
  throw new Error("Twin capability introduction was dropped by its card layout.");
}
const resources = readFileSync("out/resources.html", "utf8");
if (resources.includes("Published planning prices") || !resources.includes('href="/use-cases"')) {
  throw new Error("Resources must describe current destinations and commercial scope accurately.");
}
console.log("Corporate HTML, broad technology scope, resource destinations, product routing, and sitemap artifact verified.");
