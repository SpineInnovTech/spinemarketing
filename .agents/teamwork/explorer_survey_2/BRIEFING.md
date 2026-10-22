# BRIEFING — 2026-10-21T14:52:00Z

## Mission
Investigate Requirement 2 (Realign Corporate Homepage to Diagrammatic Architecture) for Spine InnovTech corporate site in spinemarketing-magic-ui.

## 🔒 My Identity
- Archetype: explorer
- Roles: investigation, synthesis
- Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/explorer_survey_2
- Original parent: 1e02cfeb-c443-486c-80e9-e7607795e889
- Milestone: Survey Phase (Explorer 2)

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- Focus on Requirement 2: Realign Corporate Homepage to Diagrammatic Architecture
- Examine components/marketing/innovlabs-home.tsx, workbench-hero-preview.tsx, role workbenches, diagrammatic architecture components
- Formulate architecture diagram options and exact component refactoring steps

## Current Parent
- Conversation ID: 1e02cfeb-c443-486c-80e9-e7607795e889
- Updated: 2026-10-21T14:52:00Z

## Investigation State
- **Explored paths**:
  - `components/marketing/innovlabs-home.tsx`: Analyzed full component structure, imports, hero section, workbench storyboard section, and child components.
  - `components/marketing/workbench-hero-preview.tsx`: Audited all 3 scenes, product screenshot/dashboard/canvas references, and external/internal CTA links.
  - `components/marketing/corporate-orbital-hero.tsx`: Analyzed existing hero visual data flow and its relationship to the corporate positioning.
  - `components/marketing/workspace-benefits.tsx`: Audited benefit cards and links to `/product#workbench-views`.
  - Architecture & diagram components: Examined `StickyGather` (`components/sticky-gather.tsx`), `SpineNetworkContinuity` (`components/marketing/spine-network-continuity.tsx`), `FabricProofShowcase` (`components/marketing/fabric-proof-showcase.tsx`), `public/images/corporate-architecture.png`.
  - Test invariants: Examined `scripts/audit-corporate-site.mjs`, `scripts/verify-workbench-artifact.mjs`, `scripts/verify-corporate-coverage.mjs`, and `scripts/check-cloudflare-config.mjs`.
  - External target repo: Inspected `../spineworkspace-live/apps/marketing`.
- **Key findings**:
  - `WorkbenchHeroPreview` is directly rendered in `innovlabs-home.tsx` (lines 73-86) and `spine-workspace-details.tsx` (line 48).
  - On the corporate homepage, `WorkbenchHeroPreview` presents product-specific operational dashboards and collaborative canvas previews that belong on the product marketing site `spineworkspace.com`.
  - `innovlabs-home.tsx` also contains button 2 linking to `/product#workbench-views` (line 52), which should be realigned to architecture (`/platform`) or the product site (`https://spineworkspace.com`).
  - Critical test assertion in `scripts/verify-workbench-artifact.mjs` line 36 requires `"Interactive Storyboard"` in `out/index.html`. The replacement architecture diagram component MUST include this text in its eyebrow/badge/heading to avoid build failure.
  - `audit-corporate-site.mjs` requires `"SPINE INNOVTECH"` and `"SpineWorkspace connects your tools, context and team."` in `innovlabs-home.tsx`.
- **Unexplored areas**: None for R2 survey scope. Ready to formulate handoff.

## Key Decisions Made
- Formulated 3 architecture diagram options (Option 1: Interactive Multi-Layer Architecture Storyboard; Option 2: Orbital Fabric Architecture; Option 3: Modular 4-Tier Enterprise Blueprint) with Option 1 recommended for maximum parity with test invariants and seamless replacement.
- Defined exact refactoring steps for `innovlabs-home.tsx` and proposed replacement component design.

## Artifact Index
- DISPATCH.md — Dispatch instructions and received messages
- BRIEFING.md — Persistent working memory and state
- progress.md — Liveness heartbeat and progress tracking
- handoff.md — Complete 5-component handoff report
