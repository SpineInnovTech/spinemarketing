import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

// Check exported links against the apps/web login/signup contract, independently
// of the marketing URL builder. Losing `next` on signup would lose the Work view.
const destinations = {
  "customer-success": "account-success",
  "customer-support": "support",
  "product-engineering": "productengineering",
  "human-resources": "humanresources",
  memoryandknowledge: "knowledge-management",
  individual: "personal",
  founders: "founderops",
  "finance-leaders": "finance",
  sales: "sales",
  marketing: "marketing",
  content: "content",
  finance: "finance",
  legal: "legal",
  operations: "operations",
  revops: "revops",
  saas: "saas",
  services: "services",
  "professional-services": "professional-services",
  manufacturing: "manufacturing",
  retail: "retail",
};
const solutions = readdirSync("out/solutions").filter(f => f.endsWith(".html")).map(f => f.slice(0, -5));
assert.equal(solutions.length, 20, "Preserve all twenty solution pages");
let checks = 0;
for (const route of ["product", "solutions", ...solutions.map(s => `solutions/${s}`)]) {
  const html = readFileSync(`out/${route}.html`, "utf8");
  const slug = route.startsWith("solutions/") ? route.split("/")[1] : undefined;
  const domain = destinations[slug];
  const expectedNext = slug === "founders" ? "/workspace/work/founderops/company-overview"
    : domain ? `/workspace/work/${domain}/dashboard` : "/workspace/my-work";
  const header = html.match(/<header\b[\s\S]*?<\/header>/)?.[0];
  assert.ok(header, `/${route}: missing header`);
  assert.ok(
    header.includes("https://spineworkspace.com"),
    `/${route}: header must link to product site (https://spineworkspace.com)`
  );
  const regions = [
    html.match(/<div\b[^>]*data-workspace-auth="true"[\s\S]*?<\/div>/)?.[0],
  ];
  for (const region of regions) {
    assert.ok(region, `/${route}: missing authentication action region`);
    for (const [path, label] of [["/signup", "Sign up"], ["/login", "Sign in"]]) {
      const anchors = [...region.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
      const entry = anchors.find(([, , text]) => text.replace(/<[^>]*>/g, "").trim() === label);
      assert.ok(entry, `/${route}: missing ${label}`);
      const url = new URL(entry[1].replaceAll("&amp;", "&"));
      assert.equal(url.origin, "https://auth.spineworkspace.com", `/${route}: corporate site must route auth actions to auth site (https://auth.spineworkspace.com)`);
      assert.equal(url.pathname, path);
      assert.equal(url.searchParams.get("next"), expectedNext, `/${route}: preserve destination on ${label}`);
      assert.equal(url.searchParams.get("entry_domain"), domain ?? null);
      assert.ok(!/[?#]/.test(expectedNext), "Return path is a fixed local workspace route");
      checks++;
    }
  }
  for (const match of html.matchAll(/href="(https:\/\/[^"]+)"/g)) {
    const linkUrl = new URL(match[1].replaceAll("&amp;", "&"));
    if (linkUrl.hostname === "app.spineworkspace.com") {
      assert.equal(linkUrl.protocol, "https:", `/${route}: app links must use HTTPS`);
    }
  }
}
const product = readFileSync("out/product.html", "utf8");
assert.ok(product.includes('id="features"') && product.includes("A workspace for connected business work."), "Product features remain public");
console.log(`Authentication funnel entries verified: ${checks} contextual links across product, solution hub, and 20 solutions (auth.spineworkspace.com target verified).`);
