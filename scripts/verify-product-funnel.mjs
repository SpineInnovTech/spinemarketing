import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

// Corporate → product funnel contract, checked on the exported HTML:
//   spineinnovtech.com  →  spineworkspace.com  →  auth.spineworkspace.com  →  app.spineworkspace.com
// The corporate site has no sign-in, sign-up or app entry. Its only product action is
// "Explore SpineWorkspace", which opens the public product site. Only the product site
// hands off to the auth and app hosts.
const PRODUCT_ORIGIN = "https://spineworkspace.com";
const EXPLORE_LABEL = "Explore SpineWorkspace";
const AUTH_HOSTS = new Set(["auth.spineworkspace.com", "app.spineworkspace.com"]);
const AUTH_PATH = /^\/(login|log-in|signin|sign-in|signup|sign-up|register|get-started|onboarding|workspace|request-access)(\/|$)/i;
const AUTH_LABEL = /^(sign ?in|sign ?up|log ?in|register|create (an )?account)\b/i;
const anchors = (markup) =>
  [...markup.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(([, href, inner]) => ({
    href: href.replaceAll("&amp;", "&"),
    text: inner.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim(),
  }));

for (const route of ["login", "signup", "onboarding", "workspace", "request-access"]) {
  assert.ok(
    !existsSync(`out/${route}.html`) && !existsSync(`out/${route}/index.html`),
    `/${route}: corporate site must not ship an auth landing page`,
  );
}
const solutions = readdirSync("out/solutions").filter((f) => f.endsWith(".html"));
assert.equal(solutions.length, 20, "Preserve all twenty solution pages");

const files = [];
(function discover(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) discover(file);
    else if (entry.name.endsWith(".html")) files.push(file);
  }
})("out");

let productLinks = 0;
let exploreLinks = 0;
let headers = 0;
for (const file of files) {
  const route = "/" + relative("out", file).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  const markup = readFileSync(file, "utf8").replace(/<script\b[\s\S]*?<\/script>/g, "");
  assert.ok(!/<input\b[^>]*type="password"/i.test(markup), `${route}: corporate pages must not collect passwords`);

  for (const { href, text } of anchors(markup)) {
    assert.ok(!AUTH_LABEL.test(text), `${route}: "${text}" is an auth entry; the corporate site only offers ${EXPLORE_LABEL}`);
    let url;
    try {
      url = new URL(href, `https://spineinnovtech.com${route}`);
    } catch {
      continue;
    }
    if (url.protocol !== "https:" && url.protocol !== "http:") continue; // mailto:, tel:
    assert.ok(!AUTH_HOSTS.has(url.hostname), `${route}: links to ${url.hostname}; auth and app are reached only through ${PRODUCT_ORIGIN}`);
    const productSite = url.hostname === "spineworkspace.com" || url.hostname === "www.spineworkspace.com";
    const ownSite = productSite || url.hostname === "spineinnovtech.com";
    assert.ok(!ownSite || !AUTH_PATH.test(url.pathname), `${route}: ${href} lands on an auth path`);
    if (productSite) {
      productLinks++;
      assert.ok(!url.searchParams.has("next") && !url.searchParams.has("entry_domain"), `${route}: ${href} carries auth hand-off parameters`);
      if (text === EXPLORE_LABEL) exploreLinks++;
    }
    if (text === EXPLORE_LABEL) {
      assert.equal(url.origin, PRODUCT_ORIGIN, `${route}: "${EXPLORE_LABEL}" must open ${PRODUCT_ORIGIN}, not ${href}`);
    }
  }

  const header = markup.match(/<header\b[\s\S]*?<\/header>/)?.[0];
  if (header) {
    headers++;
    const explore = anchors(header).filter(({ text }) => text === EXPLORE_LABEL);
    assert.ok(explore.length >= 1, `${route}: header must offer ${EXPLORE_LABEL}`);
  }
}
assert.ok(headers > 0 && exploreLinks >= headers, "every corporate header must carry the Explore SpineWorkspace action");
console.log(
  `Product-site funnel verified: ${files.length} pages, ${exploreLinks} "${EXPLORE_LABEL}" links to ${PRODUCT_ORIGIN}, ` +
    `${productLinks} product-site links, zero sign-in/sign-up, auth-host or app-host links.`,
);
