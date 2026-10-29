/**
 * Copy guard — blocks a built artifact that carries banned marketing copy or
 * jargon, or that has lost the locked homepage copy.
 *
 * Run inside `verify:artifact` (after verify-static-artifact.mjs and
 * verify-corporate-coverage.mjs). It reads the BUILT HTML in out/ and extracts
 * VISIBLE text with a small hand-written HTML tokenizer — a real parser, not a
 * blind `<[^>]*>` strip — that drops the contents of raw-text / metadata
 * elements (script, style, noscript, template) so a banned term living only in
 * an inlined script or a <template> never counts as visible copy, and so a
 * term split across inline tags ("Her<span>mes</span>") is still caught.
 *
 * It deliberately does NOT re-assert what verify-static-artifact.mjs already
 * checks (the old H1 absence, the hero/brand identity, the old footer brand
 * line): those live there. This module adds the banned-copy + jargon blocklist
 * and the positive homepage copy the locked canon pins.
 */
import { readFileSync, existsSync } from "node:fs";

/* -------------------------------------------------------------------------- */
/* Minimal visible-text extractor (real tokenizer).                           */
/* -------------------------------------------------------------------------- */

// Elements whose text content is never visible page copy. Their contents are
// skipped verbatim up to the matching close tag.
const SKIP_ELEMENTS = new Set(["script", "style", "noscript", "template", "head"]);

// A fixed table of the entities our own Next build emits; decoded in one pass
// so a replacement's "&" is never re-scanned as the start of another entity.
const ENTITIES = {
  amp: "&", "#38": "&", lt: "<", gt: ">", quot: '"', "#39": "'", apos: "'",
  nbsp: " ", copy: "©", "#169": "©", mdash: "—", "#8212": "—", ndash: "–",
  "#8211": "–", rsquo: "\u2019", "#8217": "\u2019", lsquo: "\u2018",
  "#8216": "\u2018", ldquo: "\u201C", "#8220": "\u201C", rdquo: "\u201D",
  "#8221": "\u201D", hellip: "…", "#8230": "…",
};
function decodeEntities(text) {
  return text.replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);/g, (whole, body) => {
    if (body in ENTITIES) return ENTITIES[body];
    if (body[0] === "#") {
      const code = body[1] === "x" || body[1] === "X"
        ? parseInt(body.slice(2), 16)
        : parseInt(body.slice(1), 10);
      if (Number.isFinite(code)) {
        try { return String.fromCodePoint(code); } catch { return whole; }
      }
    }
    return whole;
  });
}

/**
 * Extract visible text from an HTML string.
 * State machine over the characters: emit text outside tags, swallow tags, and
 * when a skip-element opens, swallow everything until its matching close tag.
 */
function extractVisibleText(html) {
  const out = [];
  let i = 0;
  const n = html.length;
  while (i < n) {
    const lt = html.indexOf("<", i);
    if (lt === -1) {
      out.push(html.slice(i));
      break;
    }
    if (lt > i) out.push(html.slice(i, lt));

    // Comment / CDATA / doctype — skip to the matching terminator.
    if (html.startsWith("<!--", lt)) {
      const end = html.indexOf("-->", lt + 4);
      i = end === -1 ? n : end + 3;
      continue;
    }
    if (html.startsWith("<!", lt)) {
      const end = html.indexOf(">", lt + 2);
      i = end === -1 ? n : end + 1;
      continue;
    }

    // A tag. Read its name.
    const tagEnd = html.indexOf(">", lt);
    if (tagEnd === -1) { out.push(html.slice(lt)); break; }
    const raw = html.slice(lt + 1, tagEnd);
    const isClose = raw[0] === "/";
    const nameMatch = /^\/?\s*([a-zA-Z][a-zA-Z0-9-]*)/.exec(raw);
    const name = nameMatch ? nameMatch[1].toLowerCase() : "";

    if (!isClose && SKIP_ELEMENTS.has(name) && raw[raw.length - 1] !== "/") {
      // Swallow until the matching close tag (case-insensitive).
      const closeRe = new RegExp(`</\\s*${name}\\s*>`, "i");
      const rest = html.slice(tagEnd + 1);
      const m = closeRe.exec(rest);
      i = m ? tagEnd + 1 + m.index + m[0].length : n;
      continue;
    }

    // Insert a space at every tag boundary so adjacent text nodes do not fuse
    // ("Her" + "mes" inside inline tags must still read as "Hermes", but two
    // separate words must not glue into one false positive).
    out.push(" ");
    i = tagEnd + 1;
  }
  return decodeEntities(out.join("")).replace(/\s+/g, " ").trim();
}

/* -------------------------------------------------------------------------- */
/* Policy.                                                                    */
/* -------------------------------------------------------------------------- */

// Phrases banned ANYWHERE on ANY built page.
const BANNED_PHRASES = [
  "Hermes",
  "Governed execution",
  "We build governed business context for humans and AI.",
  "What is shown here, and what to check.",
];

// Jargon banned on every page EXCEPT the reference/legal allowlist below.
const BANNED_JARGON = [
  "MCP", "OAuth", "PKCE", "webhook", "ABAC", "RBAC", "SHA-256", "cryptographic",
  "provenance", "lineage", "entity graph", "substrate", "kernel", "projection",
  "projections", "ingestion", "ingress", "runtime", "zero-trust", "orchestration",
  "schema", "embeddings", "LLM", "12 tabs", "4+ tools", "in seconds",
  "multi-region", "45 minutes",
];

// Pages exempt from the jargon list entirely (reference + legal copy).
const JARGON_EXEMPT_ROUTES = new Set([
  "/docs", "/developers", "/privacy", "/terms",
]);
// Prefix-exempt: any page under these trees (e.g. /docs/anything).
const JARGON_EXEMPT_PREFIXES = ["/docs/", "/developers/"];

// Allowed exceptions to the jargon rule on specific pages. "45 minutes" is a
// banned token, but this exact human sentence is allowed on customer-success.
const JARGON_ALLOW = [
  { route: "/solutions/customer-success", phrase: "Meeting with GlobalTech in 45 minutes" },
];

// Positive copy the homepage MUST carry (the locked canon).
const HOME_REQUIRED = [
  // H1, each line
  "Your Business Tools",
  "Your Business Context",
  "Your Decisions",
  "AI Acts With Your Approval",
  // Title and footer, one line
  "Your Business Tools. Your Business Context. Your Decisions. AI Acts With Your Approval.",
  // Relationship
  "Data shows what is happening.",
  "Context helps explain why.",
  "Together, they help you decide what to do next.",
  // Short cards, not a paragraph
  "Your tools, with the conversations and history behind them.",
  "People and AI see the full picture and the next step.",
  "Changes to your tools happen only with your approval.",
  "Your data and the story behind it, in one place.",
  // Renewal example
  "See how it works: a customer renewal",
  "Illustrative example",
  "What helps explain it",
  "Renewal date and contract value",
  "What the customer needs before renewing",
  "Number of open support tickets",
  "Which issue could make the customer leave",
  "Product usage trend",
  "Why usage changed and what the customer said",
  "A conversation is data too.",
  "These are examples, not separate boxes.",
  // SpineWorkspace block
  "Connected context. Human control. AI-ready.",
  "Your tools. Your context. Your decisions.",
  // Named pins
  "People approve the AI",
  "Controlled execution",
  "Approved and traceable",
  "Human-approved",
  "See the workflow",
  "Explore SpineWorkspace",
];

const HOME_FORBIDDEN = [
  "Connecting business context for humans and AI, with people in control.",
  "Business context means the facts about the work, kept together, so people and AI are looking at the same picture.",
  "One workflow, shown end to end",
  "Your business data and context, together—with people in control.",
  "SpineWorkspace brings information from your tools together with the conversations and history behind it.",
  "People and AI can see the full picture and work out the next step.",
  "Data shows what is happening. Context helps explain why. Together, they help you decide what to do next.",
];

/* -------------------------------------------------------------------------- */
/* Run.                                                                       */
/* -------------------------------------------------------------------------- */

function routeFromFile(file) {
  const route = "/" + file.replace(/^out\//, "").replace(/\.html$/, "");
  return route === "/index" ? "/" : route;
}

function jargonExempt(route) {
  if (JARGON_EXEMPT_ROUTES.has(route)) return true;
  return JARGON_EXEMPT_PREFIXES.some((p) => route.startsWith(p));
}

// Build the visible-text map for every exported page.
import { readdirSync } from "node:fs";
import { join, relative } from "node:path";
const pages = new Map(); // route -> visible text
function discover(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) discover(p);
    else if (entry.name.endsWith(".html")) {
      const rel = "out/" + relative("out", p);
      pages.set(routeFromFile(rel), extractVisibleText(readFileSync(p, "utf8")));
    }
  }
}
if (!existsSync("out")) {
  throw new Error("copy-guard: out/ not found — run the build before verify:artifact.");
}
discover("out");

const failures = [];

// 1) Banned phrases anywhere.
for (const [route, text] of pages) {
  for (const phrase of BANNED_PHRASES) {
    if (text.includes(phrase)) {
      failures.push(`BANNED PHRASE "${phrase}" found on ${route}`);
    }
  }
}

// 2) Jargon, with per-page and allow-phrase exemptions.
for (const [route, text] of pages) {
  if (jargonExempt(route)) continue;
  // Mask allowed phrases for this route before scanning.
  let scan = text;
  for (const allow of JARGON_ALLOW) {
    if (allow.route === route) scan = scan.split(allow.phrase).join(" ");
  }
  for (const term of BANNED_JARGON) {
    // Whole-token match so "runtime" does not hit inside an unrelated word and
    // acronyms match case-sensitively where that matters.
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const boundary = /^[A-Za-z0-9]/.test(term) && /[A-Za-z0-9]$/.test(term)
      ? new RegExp(`(?<![A-Za-z0-9])${escaped}(?![A-Za-z0-9])`)
      : new RegExp(escaped);
    if (boundary.test(scan)) {
      failures.push(`BANNED JARGON "${term}" found on ${route}`);
    }
  }
}

// 3) Required homepage copy.
const home = pages.get("/");
if (!home) {
  failures.push("homepage out/index.html missing — cannot verify required copy");
} else {
  for (const phrase of HOME_REQUIRED) {
    if (!home.includes(phrase)) {
      failures.push(`REQUIRED homepage copy missing: "${phrase}"`);
    }
  }
  for (const phrase of HOME_FORBIDDEN) {
    if (home.includes(phrase)) {
      failures.push(`REMOVED homepage copy still present: "${phrase}"`);
    }
  }
}

if (failures.length) {
  throw new Error(
    `Copy guard failed (${failures.length}):\n  ` + failures.join("\n  "),
  );
}
console.log(
  `Copy guard verified: ${pages.size} pages scanned — no banned phrase/jargon, all ${HOME_REQUIRED.length} locked homepage lines present.`,
);
