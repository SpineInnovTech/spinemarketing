# Survey Handoff Report: R2 Corporate Homepage Diagrammatic Architecture Realignment

**Author:** Explorer 2 (Survey Phase)  
**Date:** 2026-10-21T14:54:00Z  
**Target Requirement:** R2 (Realign Corporate Homepage to Diagrammatic Architecture)  
**Target Repository:** `/Users/nirmal/Github/spinemarketing-magic-ui`  
**Related Requirements:** R3 (Export Workbench Views to Spine Workspace), R4 (Cross-Site Routing Alignment), R5 (Verification & QA)  

---

## 1. Observation

### 1.1 Homepage Structure & Workbench Invocations in `components/marketing/innovlabs-home.tsx`
Inspection of `components/marketing/innovlabs-home.tsx` (199 lines) revealed the complete component hierarchy and exact locations where workbench previews and product links are invoked:

1. **Imports (lines 6–8):**
   ```tsx
   import { CorporateOrbitalHero } from "./corporate-orbital-hero";
   import { WorkbenchHeroPreview } from "./workbench-hero-preview";
   import { WorkspaceBenefits } from "./workspace-benefits";
   ```
2. **Hero Section (lines 20–69):**
   - Brand Eyebrow (line 30):
     ```tsx
     <AnimatedShinyText shimmerWidth={130}>SPINE INNOVTECH · SPINEWORKSPACE</AnimatedShinyText>
     ```
   - Primary Heading (lines 34–36):
     ```tsx
     <h1 id="company-title" className="...">
       SpineWorkspace connects your tools, context and team.
     </h1>
     ```
   - Product Workbench Link in Hero Actions (lines 52–54):
     ```tsx
     <Link href="/product#workbench-views" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF]">
       See the workspace
     </Link>
     ```
   - Hero Graphic (lines 59–61):
     `<CorporateOrbitalHero />` is rendered inside a `<BlurFade delay={0.16} inView>`.
3. **Product Benefits Section (line 71):**
   - `<WorkspaceBenefits />` is rendered.
   - `components/marketing/workspace-benefits.tsx` lines 18 & 25 link to `/product#workbench-views`:
     - Card 2: `"One Fabric across 13 domains"` -> `href: "/product#workbench-views"`
     - Card 3: `"Editable dashboards and Canvas"` -> `href: "/product#workbench-views"`
4. **Interactive Storyboard Section (lines 73–86) — PRIMARY R2 TARGET:**
   ```tsx
   <section id="workbench-story" className="scroll-mt-24 bg-[#F8FBFF] py-14 sm:py-18 border-b border-[#D6E8F8]">
     <div className={container}>
       <div className="mb-8">
         <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
           <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
           Interactive Storyboard
         </p>
         <h2 className={heading + " mt-3 max-w-[820px]"}>
           See how business context transforms into collaborative execution.
         </h2>
       </div>
       <WorkbenchHeroPreview />
     </div>
   </section>
   ```
5. **How It Works & Insights Sections (lines 88–195):**
   - Approach cards (01 Connect, 02 Prepare, 03 Review) linking to `/platform/how-it-works` and `/host-connected-environment`.
   - Architectural articles on Spine Fabric, Operating Thesis, and Zero-Trust Governance.

---

### 1.2 Inspection of `components/marketing/workbench-hero-preview.tsx`
`WorkbenchHeroPreview` (411 lines) is a client component (`"use client"`) rendering an interactive tabbed storyboard with three scenes:
1. **Scene 01 (`context`): "Connect Context · Spine Fabric · Context Layer" (lines 142–225)**:
   - Left column: 4 permitted source cards (CRM & Accounts, Service & Support, Contracts & Docs, Finance & Billing).
   - Center column: Unified entity context graph (`spine.account:acme`, Acme Renewal Contract, Support incident tkt-501).
   - CTA button (line 33): `/product#workbench-customer-journey`.
2. **Scene 02 (`views`): "Work in Views · Workbench · Dashboards + Canvas" (lines 227–323) — PRODUCT WORKBENCH VIEW**:
   - Card 1: "Operational Dashboards · 13 Domains · Live Queue · Local Outbox" with CTA link to `#workbench-dashboards`.
   - Card 2: "Collaborative Canvas · 10 UI Blocks · Documents, database tables & context graphs" with CTA link to `#workbench-canvas`.
   - CTA button (line 44): `/product#workbench-dashboards`.
3. **Scene 03 (`governance`): "Review & Continue · Spine Twin · Governed Action" (lines 325–386)**:
   - 3 steps: Twin Prepares, Human Approval Gate, Host Continuity.
   - Host continuity bar linking to `/host-connected-environment`.
   - CTA button (line 55): `/product#workbench-recording` ("Watch 26s Shell Walkthrough").

**Usage in Codebase:**
Grep across the entire repository showed `WorkbenchHeroPreview` is imported only in:
- `components/marketing/innovlabs-home.tsx` (line 7 & line 84)
- `components/marketing/spine-workspace-details.tsx` (line 6 & line 48, rendered on `app/product/page.tsx`)

---

### 1.3 Survey of Existing Diagrammatic Components in Codebase
The repository already contains several enterprise-grade diagrammatic components:

1. **`CorporateOrbitalHero` (`components/marketing/corporate-orbital-hero.tsx`, 274 lines):**
   - High-fidelity visual architecture diagram showing the horizontal data pipeline:
     - *Ingress Stack:* Apps (Slack), Tools (Salesforce), Plugins (Google Drive), Protocols (MCP Protocol), AI Hosts (Claude/Cursor).
     - *Ingress Connector:* Animated packet flow into Spine Fabric substrate capsule.
     - *Spine Fabric Substrate Capsule:* Operational Context, Account Anchor, KPI Movement (71 governed metrics).
     - *Execution Deck:* Human CS Lead (Maya) + AI Twin counterpart with Hermes Zero-Trust governance gate.
     - *Egress Stack:* CRM Deal update, Slack notification, Google Drive document, AI Memory, Closed-loop audit.
2. **`StickyGather` (`components/sticky-gather.tsx`, 157 lines):**
   - Interactive radial orbital gathering component powered by Framer Motion (`useScroll`, trigonometric angular positioning `Math.cos(angle) * radius`).
   - Gathers 12 satellite capability nodes around a central core ("Spine InnovTech / Technology Architecture").
3. **`SpineNetworkContinuity` (`components/marketing/spine-network-continuity.tsx`, 64 lines):**
   - Horizontal pipeline diagram showing multi-host context continuity: `AI Host A` -> `Spine Network + Fabric` -> `AI Host B`, accompanied by a 5-stage connection evidence pipeline.
4. **`FabricProofShowcase` (`components/marketing/fabric-proof-showcase.tsx`, 63 lines):**
   - Visual multi-domain projection diagram (Account Success, Finance, Engineering) bound to a shared account anchor with a 5-stage host-connection proof protocol.
5. **Static Conceptual Architecture Imagery (`public/images/`):**
   - `corporate-architecture.png`: Concept illustration of Fabric, Workbench, Twin, and Runtime.
   - `corporate-connected-business.png`: Shared context with human review before authorization.

---

### 1.4 Test & Verification Script Invariants
Analysis of the verification scripts revealed three critical invariants that must NOT be broken during refactoring:

1. **`scripts/audit-corporate-site.mjs` (lines 77–78):**
   ```js
   check(home.includes("InnovLabsHome"), "corporate homepage component not wired");
   check(banner.includes("SPINE INNOVTECH") && banner.includes("SpineWorkspace connects your tools, context and team."), "company identity and product introduction absent");
   ```
   *Constraint:* `components/marketing/innovlabs-home.tsx` MUST retain `"SPINE INNOVTECH"` and `"SpineWorkspace connects your tools, context and team."`.
2. **`scripts/verify-workbench-artifact.mjs` (lines 35–36):**
   ```js
   const indexHtml = await readFile("out/index.html", "utf8");
   assert.ok(indexHtml.includes("Interactive Storyboard"), "Missing Interactive Storyboard on corporate index");
   ```
   *Constraint:* The replacement architecture diagram section on the corporate homepage (`out/index.html`) MUST include the exact string `"Interactive Storyboard"`.
3. **`scripts/verify-corporate-coverage.mjs` (lines 61–72):**
   *Constraint:* Every link on the homepage (`/`) must resolve to a valid internal route or external domain. If an internal link uses a hash fragment (`path#id`), that `id` must exist in the target HTML file.
4. **Pre-existing issue observed in `app/pricing/page.tsx`:**
   Running `npm run check` currently fails on `corporate pricing must link to the local product-details page` (`app/pricing/page.tsx` line 73 links to `https://spineworkspace.com/pricing` instead of containing `href="/product"`). This is unrelated to R2, but documented for full awareness.

---

## 2. Logic Chain

```
[Observation 1.1]
innovlabs-home.tsx renders <WorkbenchHeroPreview /> inside <section id="workbench-story">.
It also renders a hero CTA link to /product#workbench-views and WorkspaceBenefits linking to /product#workbench-views.
       │
       ▼
[Observation 1.2]
WorkbenchHeroPreview renders product-specific views:
- Operational Dashboards (13 domains, queues, drafts)
- Collaborative Canvas (10 UI blocks, documents, tables)
- Video shell recording CTA (Watch 26s Shell Walkthrough)
       │
       ▼
[Original Request R2 & Acceptance Criteria]
- Corporate homepage must display diagrammatic architecture representations (system architecture, orbital fabric, context layers).
- Remove product-specific workbench views/storyboards (workbench-hero-preview.tsx) from the corporate homepage.
- Product workbench views must be exported to spineworkspace.com (R3).
       │
       ▼
[Observation 1.4 Test Invariants]
- audit-corporate-site.mjs requires "SPINE INNOVTECH" and "SpineWorkspace connects your tools, context and team." in innovlabs-home.tsx.
- verify-workbench-artifact.mjs requires "Interactive Storyboard" on out/index.html.
- verify-corporate-coverage.mjs requires all homepage links and hash fragments to resolve.
       │
       ▼
[Design Synthesis]
Replace <WorkbenchHeroPreview /> with a dedicated enterprise architecture component:
<CorporateArchitectureStoryboard /> (or <SystemArchitectureDiagram />).
This component:
1. Replaces product dashboard/canvas screenshots with clean, technical SVG/HTML architecture diagrams.
2. Represents the 3 core pillars of Spine InnovTech:
   - Substrate: Governed Context Fabric (entity graph, provenance, multi-source ingestion)
   - Runtime: Hermes Zero-Trust Governance Gate (proposal engine vs approval gate, non-repudiable audit receipts)
   - Interoperability: Multi-Host Continuity (portable checkpoints, MCP relay, host isolation)
3. Retains the badge "Interactive Storyboard" (or "Interactive Architecture Storyboard") to satisfy verify-workbench-artifact.mjs.
4. Updates hero secondary CTA from /product#workbench-views to /platform or https://spineworkspace.com.
```

---

## 3. Architecture Diagram Options for Corporate Homepage

### Option 1: Interactive Multi-Layer Architecture Storyboard (RECOMMENDED)
- **Component Name:** `CorporateArchitectureStoryboard` (`components/marketing/corporate-architecture-storyboard.tsx`)
- **Location:** Directly replaces `<WorkbenchHeroPreview />` in `innovlabs-home.tsx`.
- **Layout:** Contained within a rounded-2xl container with `BorderBeam`, tabbed navigation bar, interactive visual canvas, and bottom narrative bar.
- **Three Architectural Scenes:**
  1. **Scene 01: Governed Context Fabric (Substrate Layer)**
     - *Visual:* Permitted source ingest (CRM, ERP, Files, AI Hosts) feeding into a central Entity-Relationship Context Graph (`spine.account`, `spine.contract`, `spine.incident`).
     - *Technical Callouts:* Source authority preservation, bidirectional entity linking, cryptographic provenance hashes, role-scoped access policy.
  2. **Scene 02: Hermes Zero-Trust Governance & Execution Boundary (Runtime Layer)**
     - *Visual:* Clean 3-tier boundary: Sandboxed AI Twin Proposal Engine -> Hermes Policy & Human Approval Gate -> Governed System Writeback.
     - *Technical Callouts:* Separation of proposal generation from execution authority; non-repudiable audit ledger (`hermes.execution.receipt`); closed-loop reconciliation.
  3. **Scene 03: Multi-Host Continuity & Neural Interoperability (Network Layer)**
     - *Visual:* Multi-host federation: `Host A` (Claude) -> `Spine Network MCP Relay` -> `Host B` (Cursor / ChatGPT / Web Shell).
     - *Technical Callouts:* Zero credential leakage; context checkpoints signed with HMAC-SHA256; model-agnostic context resumption.
- **Why Option 1 is Recommended:**
  - Perfect 1:1 drop-in replacement for `WorkbenchHeroPreview` in `innovlabs-home.tsx`.
  - Replaces product screenshots/dashboards with enterprise systems architecture diagrams.
  - Keeps `"Interactive Storyboard"` badge so `scripts/verify-workbench-artifact.mjs` continues to pass with zero changes.
  - Fully responsive, accessible (`role="tablist"`, keyboard navigable), and consistent with Tailwind/Magic UI styling.

---

### Option 2: Orbital Fabric Architecture Canvas (`OrbitalFabricArchitecture`)
- **Concept:** Radial SVG/Framer-Motion orbital system diagram inspired by `CorporateOrbitalHero` and `StickyGather`.
- **Visual:**
  - Concentric orbital rings around a glowing Spine Context Kernel.
  - Inner Ring: Hermes Governance & Security Boundary.
  - Middle Ring: Unified Context Synthesizer & KPI Movement Engine.
  - Outer Ring: Enterprise Tool Integrations (Salesforce, Zendesk, Drive, Slack) and AI Hosts (Claude, Cursor, OpenAI).
  - Animated particle pulses traveling inward along orbital trajectories to illustrate data ingestion and outward for reconciled execution.
- **Interactivity:** Layer toggles (`All Layers`, `Ingress`, `Context Mesh`, `Governance Gate`, `Host Network`). Hovering on nodes displays protocol specs (MCP, Spine REST, WebSocket SSE).
- **Pros/Cons:** Visually striking and highly differentiated; slightly higher implementation complexity for responsive mobile layouts compared to Option 1.

---

### Option 3: Modular 4-Tier Enterprise Blueprint (`EnterpriseArchitectureStack`)
- **Concept:** Technical architectural stack diagram presented in structured Bento format:
  - *Tier 4:* Application & Workspace Projections (`spineworkspace.com`, Custom Portals, Embedded Agents).
  - *Tier 3:* Multi-Host Continuity Layer (Spine Network, FastMCP Relay, Cross-Host Checkpointing).
  - *Tier 2:* Hermes Zero-Trust Governance Gate (Policy evaluation, human authorization, cryptographic audit trails).
  - *Tier 1:* Spine Context Fabric Substrate (Entity graph, provenance engine, source synchronization).
- **Interactivity:** Accordion/drawer expansion for each tier revealing architectural whitepaper summaries, latency SLA, and compliance standards (SOC 2 Type II, HIPAA-ready architecture).
- **Pros/Cons:** Very clear to enterprise CTOs/architects; less interactive motion than Option 1.

---

## 4. Exact Component Refactoring Steps

### Step 1: Create `components/marketing/corporate-architecture-storyboard.tsx`
Create the replacement diagrammatic component implementing **Option 1**. It must export:
```tsx
export function CorporateArchitectureStoryboard()
```
Key elements in the component:
- Top bar with badge:
  ```tsx
  <span className="font-mono text-[11px] font-medium text-[#006FE8]">
    Interactive Storyboard
  </span>
  ```
  *(Ensures `verify-workbench-artifact.mjs` assertion passes!)*
- Tab navigation between the 3 technical architecture scenes:
  - `01 Context Fabric`
  - `02 Hermes Governance`
  - `03 Host Continuity`
- Technical architecture visuals (SVG diagrams, node graphs, protocol indicators) replacing all role workbenches, dashboards, and canvas UI blocks.
- Clean bridge card at the bottom:
  ```tsx
  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D6E8F8] bg-white px-4 py-3 text-xs sm:px-5">
    <p className="min-w-0 flex-1 text-[#355579]">
      <strong className="font-semibold text-[#082B5E]">{current.title}</strong> {current.detail}
    </p>
    <a
      href="https://spineworkspace.com"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-1.5 font-semibold text-[#006FE8] hover:bg-[#EBF7FF]"
    >
      Explore SpineWorkspace Product <ArrowRight className="h-3.5 w-3.5" aria-hidden />
    </a>
  </div>
  ```

---

### Step 2: Refactor `components/marketing/innovlabs-home.tsx`
Make the following surgical edits:

1. **Update Imports (line 7):**
   ```diff
   - import { WorkbenchHeroPreview } from "./workbench-hero-preview";
   + import { CorporateArchitectureStoryboard } from "./corporate-architecture-storyboard";
   ```
2. **Realign Hero Secondary CTA (lines 52–54):**
   ```diff
   - <Link href="/product#workbench-views" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF]">
   -   See the workspace
   - </Link>
   + <Link href="/platform" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF]">
   +   Explore Architecture
   + </Link>
   ```
   *(Or alternatively, `<a href="https://spineworkspace.com" className="...">See the workspace <ArrowRight className="h-4 w-4" aria-hidden /></a>`)*
3. **Replace Workbench Storyboard Section (lines 73–86):**
   ```diff
   - <section id="workbench-story" className="scroll-mt-24 bg-[#F8FBFF] py-14 sm:py-18 border-b border-[#D6E8F8]">
   + <section id="architecture-story" className="scroll-mt-24 bg-[#F8FBFF] py-14 sm:py-18 border-b border-[#D6E8F8]">
       <div className={container}>
         <div className="mb-8">
           <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
             <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
   -         Interactive Storyboard
   +         Interactive Architecture Storyboard
           </p>
           <h2 className={heading + " mt-3 max-w-[820px]"}>
   -         See how business context transforms into collaborative execution.
   +         Governed Architecture: From Source Systems to Multi-Host Execution.
           </h2>
         </div>
   -     <WorkbenchHeroPreview />
   +     <CorporateArchitectureStoryboard />
       </div>
     </section>
   ```
4. **Preserve Identity Strings (lines 30 & 34–36):**
   Ensure `SPINE INNOVTECH · SPINEWORKSPACE` and `SpineWorkspace connects your tools, context and team.` remain intact so `scripts/audit-corporate-site.mjs` lines 77–78 pass without error.

---

### Step 3: Realign `WorkspaceBenefits` Links in `components/marketing/workspace-benefits.tsx`
In `components/marketing/workspace-benefits.tsx`:
- Line 18: Card 2 `"One Fabric across 13 domains"` currently links to `href: "/product#workbench-views"`.
  Update to: `href: "/platform/spine-fabric"`, `link: "Explore Spine Fabric"`.
- Line 25: Card 3 `"Editable dashboards and Canvas"` currently links to `href: "/product#workbench-views"`.
  Update to: `href: "https://spineworkspace.com"`, `link: "Explore SpineWorkspace Product"`.

---

## 5. Caveats

1. **`WorkbenchHeroPreview` on `app/product/page.tsx`:**
   `WorkbenchHeroPreview` is also rendered in `components/marketing/spine-workspace-details.tsx` (line 48) on `/product`. Requirement 2 explicitly focuses on realigning the **corporate homepage** (`components/marketing/innovlabs-home.tsx`). When the implementer transfers workbench components to `spineworkspace-live` (Requirement 3), `app/product/page.tsx` can either retain `SpineWorkspaceDetails` as a local product summary or point to `spineworkspace.com`. Note that `scripts/audit-corporate-site.mjs` line 89 enforces `source("app/product/page.tsx").includes("SpineWorkspaceDetails")`.
2. **`verify-workbench-artifact.mjs` index assertion:**
   `scripts/verify-workbench-artifact.mjs` line 36 specifically asserts that `out/index.html` includes `"Interactive Storyboard"`. The implementer must ensure the new architecture diagram component contains this string (e.g. `"Interactive Architecture Storyboard"` or `"Interactive Storyboard"`), otherwise the Cloudflare build gate will fail.
3. **Pre-existing pricing link failure:**
   `scripts/audit-corporate-site.mjs` line 97 expects `app/pricing/page.tsx` to include `href="/product"`. This is an existing lint failure that should be corrected by the implementation stream to allow `npm run check` and `npm run build:cloudflare` to succeed.

---

## 6. Conclusion

1. **Root Problem:** The corporate homepage (`innovlabs-home.tsx`) rendered `WorkbenchHeroPreview`, which exposes product-level UI features (13 domain dashboard previews, local draft forms, canvas UI block lists, and video walkthroughs) that conflict with the corporate domain cutover to `spineinnovtech.com`.
2. **Solution:** Refactor `innovlabs-home.tsx` to replace `WorkbenchHeroPreview` with `CorporateArchitectureStoryboard`. This replaces product previews with pure enterprise architecture diagrams (Context Fabric Substrate, Hermes Zero-Trust Governance Gate, Multi-Host Continuity), while redirecting product-seeking visitors cleanly to `https://spineworkspace.com`.
3. **Feasibility:** High. No external libraries needed; uses existing Tailwind, Magic UI (`BorderBeam`), Lucide icons, and React client state. Fully compatible with all static export and verification scripts.

---

## 7. Verification Method

### 7.1 Static Code & Link Inspection
1. Inspect `components/marketing/innovlabs-home.tsx` to ensure `WorkbenchHeroPreview` is completely removed and no workbench dashboard screenshots or canvas widgets are rendered.
2. Verify that `CorporateArchitectureStoryboard` is imported and rendered.
3. Verify that all CTA links on the homepage point to valid local corporate paths (`/platform`, `/about`, `/proof`, `/platform/spine-fabric`) or verified external product URLs (`https://spineworkspace.com`).

### 7.2 Programmatic Verification Commands
Run the repository test suite from `/Users/nirmal/Github/spinemarketing-magic-ui`:

1. **Lint and Corporate Source Audit:**
   ```bash
   node scripts/check-release-preflight.mjs
   node scripts/audit-corporate-site.mjs
   ```
   *Expected:* Passes with 0 errors. Homepage correctly includes required identity and product introduction strings.

2. **Full Repository Typecheck:**
   ```bash
   npm run typecheck
   ```
   *Expected:* Clean compilation with 0 TypeScript diagnostics.

3. **Static Export Build & Artifact Validation:**
   ```bash
   npm run build
   node scripts/verify-static-artifact.mjs
   node scripts/verify-corporate-coverage.mjs
   ```
   *Expected:* Build succeeds; `out/index.html` contains `"Interactive Storyboard"`; all homepage internal routes and fragment anchors resolve without broken link errors.
