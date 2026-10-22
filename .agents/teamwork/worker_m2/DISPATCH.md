# DISPATCH: Worker M2 (Corporate Homepage Architecture Realignment)

You are Worker M2.
Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m2
Authoritative User Request: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md
Master Project Plan: /Users/nirmal/Github/spinemarketing-magic-ui/PROJECT.md
Survey Input Report: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/explorer_survey_2/handoff.md

## Write Ownership (Exclusively Owned Files)
You exclusively own and may edit or create these files:
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/marketing/corporate-architecture-storyboard.tsx`
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/marketing/innovlabs-home.tsx`
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/marketing/workspace-benefits.tsx`
DO NOT write to any other files.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Tasks & Acceptance Criteria
1. Create `components/marketing/corporate-architecture-storyboard.tsx`:
   - Implement Option 1 from Explorer 2's report: A clean, 3-scene technical architecture diagram (Substrate: Governed Context Fabric; Runtime: Hermes Zero-Trust Governance Gate; Network: Multi-Host Continuity).
   - Must include the badge text `"Interactive Storyboard"` (or `"Interactive Architecture Storyboard"`) so `scripts/verify-workbench-artifact.mjs` line 36 passes.
   - Must provide clean, high-contrast visual architecture representations (SVG diagrams, node connections, flow indicators) rather than product screenshots or canvas editing tools.
   - At the bottom, include a bridge card with link to `https://spineworkspace.com` ("Explore SpineWorkspace Product").
2. Refactor `components/marketing/innovlabs-home.tsx`:
   - Remove import and usage of `WorkbenchHeroPreview`.
   - Import and render `<CorporateArchitectureStoryboard />` inside the section (can use id="architecture-story").
   - Realign hero secondary button (line 52) to link to `/platform` ("Explore Architecture") or `https://spineworkspace.com`.
   - CRITICAL INVARIANT: Preserve strings `"SPINE INNOVTECH"` and `"SpineWorkspace connects your tools, context and team."` so `scripts/audit-corporate-site.mjs` passes.
3. Update `components/marketing/workspace-benefits.tsx`:
   - Realign cards 2 & 3 that previously pointed to `/product#workbench-views`:
     * Card 2: link to `/platform/spine-fabric` ("Explore Spine Fabric").
     * Card 3: link to `https://spineworkspace.com` ("Explore SpineWorkspace Product").

## Output
Run verification checks and write your handoff report to `/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m2/handoff.md`. Send a completion message when done.

## 2026-10-21T15:01:01Z
You are Worker M2. Read your dispatch instructions at /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m2/DISPATCH.md, PROJECT.md, and ORIGINAL_REQUEST.md.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
Implement Milestone 2 (Corporate Homepage Architecture Realignment):
- Create components/marketing/corporate-architecture-storyboard.tsx (Option 1 architecture diagram with Context Fabric, Hermes Governance, and Host Continuity; retain "Interactive Storyboard" badge string for test compatibility)
- Refactor components/marketing/innovlabs-home.tsx (remove WorkbenchHeroPreview, wire CorporateArchitectureStoryboard, preserve required identity strings)
- Update components/marketing/workspace-benefits.tsx links
Verify your changes and write your handoff report to /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m2/handoff.md.
Send a completion message when done.

