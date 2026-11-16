# spinemarketing — Locked Copy & Content Canon

**Status:** Locked. This is the source of truth for the Spine InnovTech corporate
site copy. If code or content conflicts with this canon, favor this canon unless
the owner explicitly revises it. The copy guard (`scripts/verify-copy-guard.mjs`)
enforces the homepage pins and the banned-copy list.

---

## Locked copy (exact words)

- **Home H1:** four lines, in order: Your Business Tools / Your Business Context / Your Decisions / AI Acts With Your Approval.
- **Hero explanation band:** one bento row of six short cards — Data, Context, Next step, Your tools, Full picture, Your approval (same sentences as below).
- **Data card:** Data shows what is happening.
- **Context card:** Context helps explain why.
- **Next step card:** Together, they help you decide what to do next.
- **Your tools card:** Your tools, with the conversations and history behind them.
- **Full picture card:** People and AI see the full picture and the next step.
- **Your approval card:** Changes to your tools happen only with your approval.
- **Positioning line:** Your data and the story behind it, in one place.
- **Eyebrow pill:** Spine InnovTech
- **CTAs:** "See the workflow" (#workflow, primary); "Explore SpineWorkspace" (https://spineworkspace.com, secondary)
- **SpineWorkspace block:** label "SpineWorkspace"; H2 "Connected context. Human control. AI-ready."; line "Your tools. Your context. Your decisions."
- **Diagram:** "Controlled execution", caption "Approved and traceable", badge "Human-approved"
- **02 tab:** People approve the AI
- **"Governed execution" became "Controlled execution".** Keep the `#governed-execution` anchor id and all URLs.
- **Footer tagline:** Your Business Tools. Your Business Context. Your Decisions. AI Acts With Your Approval.
- **Footer closing line (gate-pinned):** Your tools keep the record. Your people keep the authority. Context continues with the work.
- **Principle titles:** Your tools keep the record. / Your people keep the authority. / Context continues with the work.
- **Tab title:** Your Business Tools. Your Business Context. Your Decisions. AI Acts With Your Approval.
- **Home share title (og/twitter):** Your Business Tools. Your Business Context. Your Decisions. AI Acts With Your Approval.
- **Header:** 3 dropdowns with 13 sub-links (Company 5, Technology 5, Our philosophy 3); Insights and Contact as direct links; CTA "Explore SpineWorkspace →"

## Founder revision — 2026-11-16 (homepage)

The owner revised the homepage as part of the Spine InnovTech production launch: the company site
presents the company, its products and its services, and the full product demonstration lives on
spineworkspace.com.

- **Renewal example → teaser.** The `#workflow` section keeps its anchor, so "See the workflow" still
  lands there. It now carries the "Illustrative example" badge, H2 "One renewal, from question to
  approved change", three steps (Connect, Prepare, Review) and the link "See the full walkthrough on
  SpineWorkspace" (https://spineworkspace.com/how-it-works). The old heading "See how it works: a
  customer renewal" and the Acme narrative are retired.
- **Products and services.** A `#offerings` section follows the SpineWorkspace block. H2 "Products
  and services from Spine InnovTech". Product cards: "SpineWorkspace" (Our product) and "Spine
  Intelligence Platform" (Use it on its own). Services: "Enterprise integration and technology",
  "Platform engineering and implementation", "AI and automation", "Consulting, migration,
  modernization and support". CTA "Talk to us about a project" (/contact).
- The copy guard pins these lines and forbids the retired heading.

## Founder sign-off — 2026-11-16 (production release)

The owner reviewed the production candidate (the October rollout and the 2026-11-16 revision) and
decided:

- **Canon approved.** The locked copy above ships to production.
- **Share picture.** `public/og-share-2026-11.png` (copied to `public/og.png`) shows the wordmark
  and the four H1 lines, so the picture matches the home share title. Site-wide og:image and
  twitter:image point to it. The default share title in `app/layout.tsx`, used by pages without
  their own, is the home share title, so no share card pairs the previous headline with the new
  picture. `og-share-2026-10.png` stays in `public/` for links that already cached it.
- **Founder note approved as written.** Homepage quote, attributed to "Nirmal Prince J", "Founder
  and CEO, Spine InnovTech": "Before Spine InnovTech, I spent years connecting business systems.
  The tools were linked, but people making decisions still could not see the whole story. That gap
  is why we build SpineWorkspace."
- **Legal summaries held back.** The plain-language summary boxes stay off `/privacy` and `/terms`
  until counsel reviews them. The draft wording stays in `lib/plain-language/legal.ts`; the legal
  text is unchanged.
- **Security claim keeps its hedge.** The role-based access line on `/security` reads "Each
  person's role is designed to decide which information they can see and what they can do."

## Brand

- **"Spine InnovTech"** and one-word **"SpineWorkspace"**.

## Content rules

- Plain language for a business reader. Remove or label unproven numbers and claims. Product names stay, explained in plain words.
- `/docs` and `/developers` keep their reference content. `/privacy` and `/terms` legal text stays untouched.

## Banned copy (copy guard FAILS on these, anywhere)

- "Hermes"
- "Governed execution"
- "We build governed business context for humans and AI."
- "What is shown here, and what to check."
- Jargon: MCP, OAuth, PKCE, webhook, ABAC, RBAC, SHA-256, cryptographic, provenance, lineage, entity graph, substrate, kernel, projection(s), ingestion, ingress, runtime, zero-trust, orchestration, schema, embeddings, LLM, "12 tabs", "4+ tools", "in seconds", multi-region, "45 minutes".

### Allowed exceptions

- "Meeting with GlobalTech in 45 minutes" on `/solutions/customer-success`.
- The `/docs` and `/developers` reference pages (jargon list does not apply).
- `/privacy` and `/terms` (legal text).
