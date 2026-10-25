/** Preserve every exported page and verify that public pages are reachable. */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const baseline = JSON.parse(
  readFileSync("config/corporate-page-baseline.json", "utf8"),
);
const pages = new Map();
function discover(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) discover(file);
    else if (entry.name.endsWith(".html")) {
      const name = "/" + relative("out", file).replace(/\.html$/, "");
      pages.set(name === "/index" ? "/" : name, readFileSync(file, "utf8"));
    }
  }
}
discover("out");
const missing = baseline.routes.filter((route) => !pages.has(route));
if (missing.length)
  throw new Error(`Pre-recovery pages were removed: ${missing.join(", ")}`);

const redirects = new Map(
  readFileSync("out/_redirects", "utf8")
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.startsWith("#"))
    .map((line) => line.trim().split(/\s+/))
    .map(([source, target]) => [source, target]),
);
const origin = "https://spineinnovtech.com";
const excluded = new Set([
  "/404",
  "/_not-found",
  "/login",
  "/workspace",
  "/onboarding",
  "/request-access",
  "/pricing",
  "/contact/thank-you",
]);
function localPath(href, source) {
  const url = new URL(href.replaceAll("&amp;", "&"), origin + source);
  if (url.origin !== origin) return null;
  let path = decodeURIComponent(url.pathname).replace(/\/$/, "") || "/";
  const visited = new Set();
  while (redirects.has(path)) {
    if (visited.has(path)) throw new Error(`Redirect loop at ${path}`);
    visited.add(path);
    const next = new URL(redirects.get(path), origin);
    if (next.origin !== origin) return null;
    path = next.pathname.replace(/\/$/, "") || "/";
  }
  return path;
}
// Home reachability is computed from "/" alone and the gate is STRICT for every
// route: no route is exempt. /portfolio and /resources are now direct footer
// links (Technology and Perspectives groups); the footer bottom bar also links
// the site directory ("Site map" -> /site-map), so the directory-only pages are
// reachable through it, and every master route is reachable through the header
// and footer groups. If any public page is still unreachable, the gate fails
// and the unreachable route is reported (conductor decision: add the footer
// Site map link, superseding the earlier A1 per-route exemption).
const reachable = new Set(["/"]);
const pending = ["/"];
const broken = new Set();
while (pending.length) {
  const source = pending.shift();
  const html = pages.get(source);
  if (!html) continue;
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const path = localPath(match[1], source);
    if (!path) continue;
    const fragment = decodeURIComponent(
      new URL(match[1].replaceAll("&amp;", "&"), origin + source).hash.slice(1),
    );
    if (fragment && pages.has(path) && !excluded.has(source)) {
      const ids = new Set(
        [...pages.get(path).matchAll(/\bid="([^"]+)"/g)].map(match => match[1]),
      );
      if (!ids.has(fragment)) broken.add(`${source} -> ${path}#${fragment}`);
    }
    if (!pages.has(path)) {
      if (!existsSync(join("out", path))) broken.add(`${source} -> ${path}`);
    } else if (!reachable.has(path)) {
      reachable.add(path);
      pending.push(path);
    }
  }
}
const publicPages = [...pages.keys()].filter(
  (path) => !excluded.has(path) && !redirects.has(path),
);
// Strict: every public page must be reachable from "/". No route is exempt.
const unreachable = publicPages.filter((path) => !reachable.has(path));
if (broken.size)
  throw new Error(`Broken internal links: ${[...broken].join(", ")}`);
if (unreachable.length)
  throw new Error(
    `Public pages cannot be reached from the homepage: ${unreachable.join(", ")}`,
  );
if (!pages.has("/site-map")) throw new Error("Full website directory missing.");
console.log(
  `Corporate coverage verified: all ${baseline.routes.length} previous exported pages retained; ${publicPages.length} public pages reachable from the homepage.`,
);

// --- Shared corporate header proof -------------------------------------------
// Every listed corporate route must render ONE shared header: the same five
// navigation links and the same product CTA, from the Final Content Master
// (00. Shared Site Content › Header). This proves the header is shared rather
// than copied-and-drifted per page. Routes are checked only when their page is
// exported (routes still to be built are covered by a later route round).
const SKIP_LINK_TEXT = "Skip to content";

// The header is three dropdown submenus (Company, Technology, Our philosophy)
// plus two direct links (Insights, Contact) and the product CTA. Each submenu
// trigger is a <button aria-expanded>; its links are plain <a> rendered into
// the static HTML (shown/hidden with the `hidden` attribute). The gate asserts
// the full structure in ORDER: three trigger labels, thirteen sub-links with
// exact labels and destinations, two direct links, the CTA and the skip link.
const HEADER_DROPDOWN_TRIGGERS = ["Company", "Technology", "Our philosophy"];
const HEADER_SUBLINKS = [
  // Company
  { label: "Company overview", href: "/company" },
  { label: "Our story", href: "/company#our-story" },
  { label: "Founder", href: "/company#founder" },
  { label: "Partnerships", href: "/partners" },
  { label: "Careers", href: "/careers" },
  // Technology
  { label: "Technology overview", href: "/platform" },
  { label: "Shared business context", href: "/platform#business-context" },
  { label: "Authority & execution", href: "/platform#governed-execution" },
  { label: "Work continuity", href: "/platform#work-continuity" },
  { label: "SpineWorkspace overview", href: "/spine-workspace" },
  // Our philosophy
  { label: "Engineering principles", href: "/about" },
  { label: "Trust & governance", href: "/trust" },
  { label: "Responsible AI", href: "/responsible-ai" },
];
const HEADER_DIRECT_LINKS = [
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
const HEADER_CTA = { label: "Explore SpineWorkspace", href: "https://spineworkspace.com" };

// The brief's corporate surface that must carry the shared header. Only full
// (non-redirecting) corporate pages are listed — redirect stubs such as
// /spineworkspace carry no chrome. Content-master labels that differ from the
// repo's canonical routes are mapped to the real route here.
const HEADER_REQUIRED_ROUTES = [
  "/",
  "/company",
  "/platform",
  "/about",
  "/product", // content master "About SpineWorkspace" / "/spine-workspace"
  "/security", // content master "Trust & governance" / "/trust"
  "/governance", // content master "Responsible AI" / "/responsible-ai"
  "/insights",
  "/blog", // Insights article alias
  "/contact",
];

function normaliseInner(markup) {
  // Strip tags, decode the handful of entities Next emits, collapse whitespace.
  return decodeEntitiesHeader(markup.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}
function decodeEntitiesHeader(text) {
  return text.replace(/&(?:amp|#38);/g, "&");
}

// The <header>…</header> block of a page; returns null when none is present.
function extractHeader(html) {
  const m = html.match(/<header\b[\s\S]*?<\/header>/i);
  return m ? m[0] : null;
}

// Ordered list of the dropdown trigger button labels (buttons carrying
// aria-expanded + aria-haspopup). The mobile menu toggle also carries
// aria-expanded but has no label text, so blank labels are dropped.
function headerTriggerLabels(headerHtml) {
  return [...headerHtml.matchAll(/<button\b[^>]*\baria-expanded\b[^>]*>([\s\S]*?)<\/button>/g)]
    .map((m) => normaliseInner(m[1]))
    .filter(Boolean);
}

// Ordered list of every anchor in the header as { href, label }.
function headerAnchors(headerHtml) {
  return [...headerHtml.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({
    href: (m[1].replace(/\/$/, "") || m[1]).replace(/&amp;/g, "&"),
    label: normaliseInner(m[2]),
  }));
}

const headerFailures = [];
let headerChecked = 0;
for (const route of HEADER_REQUIRED_ROUTES) {
  const page = pages.get(route);
  if (!page) {
    // Route not exported in this PR; coverage for new routes is a later round.
    continue;
  }
  const headerHtml = extractHeader(page);
  if (!headerHtml) {
    headerFailures.push(`${route}: no <header> element`);
    continue;
  }
  headerChecked += 1;

  // 1) Three dropdown triggers in order.
  const triggers = headerTriggerLabels(headerHtml);
  for (let i = 0; i < HEADER_DROPDOWN_TRIGGERS.length; i++) {
    if (triggers[i] !== HEADER_DROPDOWN_TRIGGERS[i]) {
      headerFailures.push(
        `${route}: dropdown trigger #${i + 1} expected "${HEADER_DROPDOWN_TRIGGERS[i]}", got "${triggers[i] ?? "(missing)"}"`,
      );
    }
  }

  const anchors = headerAnchors(headerHtml);
  // Build a lookup of href -> ordered labels for exact-destination matching.
  const findAnchor = (href, label) =>
    anchors.find((a) => a.href === href && a.label === label);

  // 2) Thirteen sub-links with exact label + destination, in order. The
  // dropdowns now render in the Magic UI mega-menu shape: each entry's anchor
  // contains the exact sub-link TITLE followed by a one-line description, so the
  // anchor's normalised inner text is "<label> <description>". The label is
  // matched as the anchor text's leading segment on a word boundary (so
  // "Company overview" matches "Company overview We build for the work between
  // systems." but not an unrelated "Company overviewer"); the destination href
  // is still matched EXACTLY and order is still enforced by increasing index.
  // (Markup-shape change from the plain link list — noted in the PR body.)
  const labelMatchesTitle = (anchorLabel, subLabel) =>
    anchorLabel === subLabel ||
    anchorLabel === `${subLabel} ` ||
    anchorLabel.startsWith(`${subLabel} `);
  let lastIndex = -1;
  for (const sub of HEADER_SUBLINKS) {
    const idx = anchors.findIndex(
      (a, i) => i > lastIndex && a.href === sub.href && labelMatchesTitle(a.label, sub.label),
    );
    if (idx === -1) {
      headerFailures.push(`${route}: missing/out-of-order sub-link ${sub.label} -> ${sub.href}`);
    } else {
      lastIndex = idx;
    }
  }

  // 3) Two direct links.
  for (const link of HEADER_DIRECT_LINKS) {
    if (!findAnchor(link.href, link.label)) {
      headerFailures.push(`${route}: missing direct link ${link.label} -> ${link.href}`);
    }
  }

  // 4) CTA.
  if (!findAnchor(HEADER_CTA.href.replace(/\/$/, ""), HEADER_CTA.label)) {
    headerFailures.push(`${route}: missing header CTA ${HEADER_CTA.label} -> ${HEADER_CTA.href}`);
  }

  // 5) Skip link.
  if (!page.includes(SKIP_LINK_TEXT)) {
    headerFailures.push(`${route}: missing "${SKIP_LINK_TEXT}" accessibility link`);
  }
}
if (headerChecked === 0) {
  throw new Error("Shared header proof ran against zero exported routes.");
}
if (headerFailures.length) {
  throw new Error(`Shared header not consistent across routes:\n  ${headerFailures.join("\n  ")}`);
}
console.log(
  `Shared header verified on ${headerChecked} corporate routes: 3 dropdown triggers + 13 sub-links (exact order) + 2 direct links + product CTA + skip link.`,
);

// --- Shared corporate footer proof -------------------------------------------
// Every indexable corporate route must render the ONE shared footer: the exact
// four groups and fourteen links from the Final Content Master (00. Shared Site
// Content › Footer) as extended by the user's 22 Oct 2026 requests (Technology
// portfolio; and in Perspectives: Insights, Company news -> /updates, Resources),
// in order, plus the brand statement, closing line and verbatim copyright, and
// the legal links that correspond to a complete policy
// Legal links shown only when a complete published policy page exists. /cookies
// has no page on main, so "Cookie notice" is intentionally absent.
const SHARED_FOOTER_LEGAL_LINKS = [
  { label: "Privacy notice", href: "/privacy" },
  { label: "Website terms", href: "/terms" },
];
// The exact ordered group structure the Final Content Master requires: four
// groups, these headings in this order, and within each group these links in
// this order with these exact labels. Used for an ordered, exact comparison —
// presence-anywhere is not enough, because the master fixes order and grouping.
const EXPECTED_FOOTER_GROUPS = [
  { heading: "Company", links: [
    { label: "Company", href: "/company" },
    { label: "Our philosophy", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ] },
  { heading: "Technology", links: [
    { label: "Technology overview", href: "/platform" },
    { label: "Trust & governance", href: "/trust" },
    { label: "Responsible AI", href: "/responsible-ai" },
    { label: "Partnerships", href: "/partners" },
    { label: "Technology portfolio", href: "/portfolio" },
  ] },
  { heading: "Product", links: [
    { label: "About SpineWorkspace", href: "/spine-workspace" },
    { label: "Visit the product website", href: "https://spineworkspace.com" },
  ] },
  { heading: "Perspectives", links: [
    { label: "Insights", href: "/insights" },
    { label: "Company news", href: "/updates" },
    { label: "Resources", href: "/resources" },
  ] },
];
const FOOTER_BRAND_STATEMENT = "Connecting business context for humans and AI, with people in control.";
const FOOTER_CLOSING_LINE =
  "Source systems stay authoritative. Authority stays with people. Context stays with the work.";
const FOOTER_COPYRIGHT = "© 2026 Spine InnovTech. All rights reserved.";
// Bottom-bar utility links — beside the legal links, not inside the master's
// four groups. "Site map" keeps the directory reachable from the footer.
const SHARED_FOOTER_UTILITY_LINKS = [
  { label: "Site map", href: "/site-map" },
];
// Links the master forbids inside the footer: a stray one is a drift
// regression. /site-map is NOT forbidden — it is the sanctioned bottom-bar
// utility link that keeps the directory reachable. /resources is NOT forbidden
// — the user's 22 Oct request surfaces it as a direct Perspectives link.
const FOOTER_FORBIDDEN_HREFS = ["/blog", "/login", "/pricing"];

const HTML_ENTITIES = {
  "&amp;": "&",
  "&#38;": "&",
  "&copy;": "©",
  "&#169;": "©",
  "&nbsp;": " ",
  "&quot;": '"',
  "&#39;": "'",
  "&lt;": "<",
  "&gt;": ">",
};
function decodeEntities(text) {
  // Decode the handful of HTML entities Next emits in our own built markup so a
  // plain-text master label ("Trust & governance") matches rendered
  // "Trust &amp; governance". Reads our own built HTML, not user input.
  // Single pass over the input: each entity is matched once and replaced from a
  // fixed table, so a replacement's output ("&") is never re-scanned as the
  // start of another entity. This is what keeps it free of double-unescaping —
  // chained .replace() calls would feed one replacement's "&" into the next.
  return text.replace(
    /&(?:amp|#38|copy|#169|nbsp|quot|#39|lt|gt);/g,
    (entity) => HTML_ENTITIES[entity] ?? entity,
  );
}

function normaliseText(html) {
  // Strip tags, decode entities and collapse whitespace so verbatim phrases are
  // matched against rendered text, not markup. Tag-stripping inserts a space
  // between adjacent inline text nodes (e.g. "Spine InnovTech" + "." renders as
  // one word on the page but "Spine InnovTech ." after stripping), so spaces
  // introduced before closing punctuation are removed to match what a visitor
  // sees. Reads our own built HTML.
  return decodeEntities(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:])/g, "$1");
}

// Anchor-with-label match that is tolerant of entity-encoded labels (e.g.
// "Trust &amp; governance"). href and label both come from our own footer spec.
function footerLinkPresent(html, href, label) {
  const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const anchor = new RegExp(`<a\\b[^>]*\\bhref="${escaped}/?"[^>]*>([\\s\\S]*?)</a>`, "g");
  for (const match of html.matchAll(anchor)) {
    const inner = decodeEntities(match[1].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
    if (inner.includes(label)) return true;
  }
  return false;
}

// Parse a footer's ordered nav groups: [{ heading, links: [{ href, label }] }].
// Reads the <nav aria-label="Footer navigation"> block of our own built HTML.
function parseFooterGroups(footerHtml) {
  const navMatch = footerHtml.match(/<nav\b[^>]*aria-label="Footer navigation"[\s\S]*?<\/nav>/i);
  if (!navMatch) return null;
  const nav = navMatch[0];
  // Each group is a <div> wrapping one <h3> heading and its <ul> of links.
  return [...nav.matchAll(/<div\b[^>]*>([\s\S]*?)<\/div>/g)]
    .map((m) => m[1])
    .filter((block) => /<h3\b/.test(block))
    .map((block) => {
      const headingMatch = block.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/);
      const heading = headingMatch
        ? decodeEntities(headingMatch[1].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()
        : "";
      const links = [...block.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((a) => ({
        href: a[1].replace(/\/$/, "") || a[1],
        label: decodeEntities(a[2].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(),
      }));
      return { heading, links };
    });
}

// The master's ordered structure, rendered as comparable strings.
function groupsSignature(groups) {
  return groups
    .map((g) => `${g.heading}|` + g.links.map((l) => `${l.label}=>${l.href.replace(/\/$/, "") || l.href}`).join(","))
    .join(" || ");
}
const EXPECTED_GROUPS_SIGNATURE = groupsSignature(EXPECTED_FOOTER_GROUPS);

// Routes that MUST carry the shared footer are identified STRUCTURALLY — by the
// footer's distinctive <nav aria-label="Footer navigation"> landmark — NOT by
// any content string the proof also asserts. Using an asserted string (e.g. the
// brand statement) to decide whether to check a route would let a footer that
// dropped that string be silently skipped instead of failed.
const footerRequiredRoutes = publicPages.filter((route) => pages.has(route));
const footerFailures = [];
let footerChecked = 0;
let footerSkipped = 0;
for (const route of footerRequiredRoutes) {
  const page = pages.get(route);
  if (!page) continue;
  const footerMatch = page.match(/<footer\b[\s\S]*?<\/footer>/i);
  // A page with no <footer>, or a <footer> that is not the shared corporate
  // footer (no "Footer navigation" landmark), is out of scope: enter/login
  // flows render no footer; this round touches only the one shared footer.
  if (!footerMatch || !/aria-label="Footer navigation"/.test(footerMatch[0])) {
    footerSkipped += 1;
    continue;
  }
  const html = footerMatch[0];
  const text = normaliseText(html);
  footerChecked += 1;

  // Ordered, exact structural comparison: headings in order, and within each
  // group the links in order with exact labels and destinations. This rejects
  // reordered links, extra links, wrong grouping and near-miss labels.
  const groups = parseFooterGroups(html);
  if (!groups) {
    footerFailures.push(`${route}: footer nav landmark present but unparseable`);
  } else {
    const actual = groupsSignature(groups);
    if (actual !== EXPECTED_GROUPS_SIGNATURE) {
      footerFailures.push(
        `${route}: footer group structure does not match master exactly\n      expected: ${EXPECTED_GROUPS_SIGNATURE}\n      actual:   ${actual}`,
      );
    }
  }

  for (const link of SHARED_FOOTER_LEGAL_LINKS) {
    if (!footerLinkPresent(html, link.href, link.label)) {
      footerFailures.push(`${route}: missing legal link ${link.label} -> ${link.href}`);
    }
  }
  for (const link of SHARED_FOOTER_UTILITY_LINKS) {
    if (!footerLinkPresent(html, link.href, link.label)) {
      footerFailures.push(`${route}: missing utility link ${link.label} -> ${link.href}`);
    }
  }
  for (const forbidden of FOOTER_FORBIDDEN_HREFS) {
    const escaped = forbidden.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp(`\\bhref="${escaped}/?"`).test(html)) {
      footerFailures.push(`${route}: forbidden footer link present -> ${forbidden}`);
    }
  }
  if (!text.includes(FOOTER_BRAND_STATEMENT)) {
    footerFailures.push(`${route}: missing footer brand statement`);
  }
  if (!text.includes(FOOTER_CLOSING_LINE)) {
    footerFailures.push(`${route}: missing footer closing line`);
  }
  if (!text.includes(FOOTER_COPYRIGHT)) {
    footerFailures.push(`${route}: missing verbatim copyright`);
  }
}
if (footerChecked === 0) {
  throw new Error("Shared footer proof ran against zero exported routes.");
}
if (footerFailures.length) {
  throw new Error(`Shared footer not consistent across routes:\n  ${footerFailures.join("\n  ")}`);
}
console.log(
  `Shared footer verified on ${footerChecked} indexable routes (${footerSkipped} without the shared footer skipped): exact 14 links + 2 legal links + brand/closing/copyright.`,
);
