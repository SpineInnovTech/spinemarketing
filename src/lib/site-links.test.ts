import assert from "node:assert/strict";
import { test } from "node:test";
import { createSiteLinks, referralUrl } from "./site-links.ts";

test("company, product and app remain separate destinations", () => {
  const links = createSiteLinks();
  assert.equal(links.corporate, "https://spineinnovtech.spineworkspace.com");
  assert.equal(links.product, "https://spineworkspace.com");
  assert.equal(links.workspace, "https://app.spineworkspace.com/workspace/my-work");
  for (const [target, href] of [["signup", links.signup], ["login", links.login]]) {
    const url = new URL(href);
    assert.equal(url.origin, "https://app.spineworkspace.com");
    assert.equal(url.pathname, `/${target}`);
    assert.equal(url.searchParams.get("next"), "/workspace/my-work");
  }
});

test("configured origins control all related links without changing the entry path", () => {
  const links = createSiteLinks({ corporate: "https://company.example/", product: "https://product.example/", workspace: "https://app.example/" });
  assert.equal(links.corporate, "https://company.example");
  assert.equal(links.productSolutions, "https://product.example/solutions");
  assert.equal(links.workspace, "https://app.example/workspace/my-work");
  assert.equal(new URL(links.signup).origin, "https://app.example");
});

test("unsafe origin configuration fails without exposing credentials", () => {
  for (const product of ["javascript:alert(1)", "http://public.example", "https://user:secret@example.com", "https://example.com?next=other", "https://example.com/path"]) {
    assert.throws(() => createSiteLinks({ product }), /public .*origin/i);
  }
  assert.equal(createSiteLinks({ corporate: "http://127.0.0.1:8080" }).corporate, "http://127.0.0.1:8080");
});

test("cross-site attribution is explicit and does not become an auth return target", () => {
  const links = createSiteLinks();
  const product = new URL(referralUrl(links.product));
  assert.equal(product.searchParams.get("utm_source"), "spineinnovtech");
  assert.equal(product.searchParams.get("utm_medium"), "referral");
  assert.equal(new URL(links.signup).searchParams.get("next"), "/workspace/my-work");
});
