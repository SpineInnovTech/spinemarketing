/**
 * Prevent a blank, stale or product-workbench page from being deployed as the
 * Spine InnovTech corporate site.
 */
import { readFileSync, statSync } from "node:fs";
import "./verify-domain-solutions.mjs";
import "./verify-product-funnel.mjs";
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
if (!text.includes("SpineWorkspace connects your tools, context and team.") || !text.includes("Spine InnovTech")) {
  throw new Error("Static export missing corporate hero/company identity.");
}
// Commercial plans, the calculator and checkout are hosted by the product site
// (2187e22). Corporate pricing explains access and hands off to it; it must not
// publish a separate machine-readable offer that could drift from the product site.
const pricing = readFileSync("out/pricing.html", "utf8");
const pricingSchemas = [...pricing.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
if (!pricing.includes('href="https://spineworkspace.com/pricing"')) {
  throw new Error("Corporate pricing must hand commercial plans off to https://spineworkspace.com/pricing.");
}
if (!pricing.includes('href="/product"')) {
  throw new Error("Corporate pricing must link to the local product-details page.");
}
if (pricingSchemas.some((schema) => schema.offers)) {
  throw new Error("Corporate pricing must not publish its own structured offer; plans live on spineworkspace.com/pricing.");
}
if (!product.includes('href="https://spineworkspace.com/pricing"')) {
  throw new Error("/product must link to product-site pricing and plans.");
}
const header = text.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
for (const category of ["Company", "Platform", "Insights"]) {
  if (!header.includes(category)) throw new Error(`Corporate navigation category missing: ${category}`);
}
if (text.includes("Good morning, Operator") || text.includes("Customer Zero")) {
  throw new Error("Authenticated/demo workspace content must not become public corporate homepage.");
}
if (!sitemap.includes("https://spineinnovtech.com/") || sitemap.includes("spineinnovtech.spineworkspace.com") || sitemap.includes("spineinnovlabs")) {
  throw new Error("Sitemap must use apex spineinnovtech.com and contain zero legacy-host occurrences.");
}
const llmsTxt = readFileSync("out/llms.txt", "utf8");
if (!llmsTxt.includes("https://spineinnovtech.com") || llmsTxt.includes("spineinnovtech.spineworkspace.com") || llmsTxt.includes("spineinnovlabs")) {
  throw new Error("llms.txt must exist, list apex spineinnovtech.com URLs, and contain zero legacy-host occurrences.");
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
