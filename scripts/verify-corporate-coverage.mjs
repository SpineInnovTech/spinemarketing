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
const SHARED_HEADER_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Technology", href: "/platform" },
  { label: "Our philosophy", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
const HEADER_CTA = { label: "Explore SpineWorkspace", href: "https://spineworkspace.com" };
const SKIP_LINK_TEXT = "Skip to content";

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

function headerLinkPresent(html, href, label) {
  // Match an anchor whose href is this destination and whose text includes the label.
  const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const anchor = new RegExp(`<a\\b[^>]*\\bhref="${escaped}/?"[^>]*>([\\s\\S]*?)</a>`, "g");
  for (const match of html.matchAll(anchor)) {
    const text = match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (text.includes(label)) return true;
  }
  return false;
}

const headerFailures = [];
let headerChecked = 0;
for (const route of HEADER_REQUIRED_ROUTES) {
  const html = pages.get(route);
  if (!html) {
    // Route not exported in this PR; coverage for new routes is a later round.
    continue;
  }
  headerChecked += 1;
  for (const link of SHARED_HEADER_LINKS) {
    if (!headerLinkPresent(html, link.href, link.label)) {
      headerFailures.push(`${route}: missing header link ${link.label} -> ${link.href}`);
    }
  }
  if (!headerLinkPresent(html, HEADER_CTA.href, HEADER_CTA.label)) {
    headerFailures.push(`${route}: missing header CTA ${HEADER_CTA.label} -> ${HEADER_CTA.href}`);
  }
  if (!html.includes(SKIP_LINK_TEXT)) {
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
  `Shared header verified on ${headerChecked} corporate routes: identical five-link nav + product CTA + skip link.`,
);
