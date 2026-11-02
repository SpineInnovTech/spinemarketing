# spinemarketing — Locked Copy & Content Canon

**Status:** Locked. This is the source of truth for the Spine InnovTech corporate
site copy. If code or content conflicts with this canon, favor this canon unless
the owner explicitly revises it. The copy guard (`scripts/verify-copy-guard.mjs`)
enforces the homepage pins and the banned-copy list.

---

## Locked copy (exact words)

Revised 2 Nov 2026 for the first-time-visitor homepage redesign (owner brief):
the hero moved to the company-first narrative below; the previous H1 stays as
the footer tagline. All other pins are unchanged.

- **Home H1:** Helping people and AI work better together.
- **Lead:** We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.
- **Eyebrow pill:** Spine InnovTech
- **CTAs:** "Explore SpineWorkspace" (https://spineworkspace.com, primary); "See the workflow" (#workflow, secondary)
- **Homepage structure (company-first):** who we are (hero) → the problem we are solving → what we build (SpineWorkspace) → why it matters → our approach (principles, workflow, how it is built) → our founder → company information.
- **SpineWorkspace block:** label "SpineWorkspace"; H2 "Connected context. Human control. AI-ready."; line "Your tools. Your context. Your decisions."
- **Diagram:** "Controlled execution", caption "Approved and traceable", badge "Human-approved"
- **02 tab:** Agentic Governance
- **"Governed execution" became "Controlled execution".** Keep the `#governed-execution` anchor id and all URLs.
- **Footer tagline:** Connecting business context for humans and AI, with people in control.
- **Footer closing line (gate-pinned):** Source systems stay authoritative. Authority stays with people. Context stays with the work.
- **Principle titles:** Your tools keep the record. / Your people keep the authority. / Context continues with the work.
- **Tab title:** Spine InnovTech — Helping People and AI Work Better Together
- **Home share title (og/twitter):** Helping people and AI work better together.
- **Header:** 3 dropdowns with 13 sub-links (Company 5, Technology 5, Our philosophy 3); Insights and Contact as direct links; CTA "Explore SpineWorkspace →"

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
