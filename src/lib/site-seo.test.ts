import assert from "node:assert/strict";
import { test } from "node:test";
import { corporateCanonical, corporateRobots, corporateSitemapXml } from "./site-seo.ts";

test("canonical company URLs exclude attribution and cannot target another site", () => {
  assert.equal(corporateCanonical("/company?utm_source=product#team"), "https://spineinnovtech.spineworkspace.com/company");
  assert.throws(() => corporateCanonical("https://spineworkspace.com/"));
  assert.throws(() => corporateCanonical("//evil.example/"));
});

test("corporate discovery files contain company URLs rather than product or app URLs", () => {
  const xml = corporateSitemapXml();
  assert.ok(xml.includes("https://spineinnovtech.spineworkspace.com/company"));
  assert.ok(!xml.includes("https://spineworkspace.com/"));
  assert.ok(!xml.includes("app.spineworkspace.com"));
  for (const alias of ["/blog", "/twin", "/governance", "/contact"]) {
    assert.ok(!xml.includes(`<loc>https://spineinnovtech.spineworkspace.com${alias}</loc>`));
  }
  assert.ok(corporateRobots().includes("Sitemap: https://spineinnovtech.spineworkspace.com/sitemap.xml"));
});
