# DISPATCH: Worker M3 (Workbench Export to Spine Workspace Product Marketing)

You are Worker M3.
Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m3
Authoritative User Request: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md
Master Project Plan: /Users/nirmal/Github/spinemarketing-magic-ui/PROJECT.md
Survey Input Report: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/explorer_survey_3/handoff.md
Source Workspace: /Users/nirmal/Github/spinemarketing-magic-ui
Target Workspace: /Users/nirmal/Github/spineworkspace-live/apps/marketing

## Write Ownership (Exclusively Owned Files)
You exclusively own and may edit or create files within the target workspace:
`/Users/nirmal/Github/spineworkspace-live/apps/marketing/**`
DO NOT write to `spinemarketing-magic-ui` source files.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Tasks & Acceptance Criteria
1. Transfer UI Primitives & Styling to `apps/marketing`:
   - Copy `components/ui/border-beam.tsx` and `components/ui/magic-card.tsx` to `apps/marketing/components/ui/`.
   - In `apps/marketing/app/globals.css`, add the `@keyframes border-beam` animation and utility classes.
2. Transfer Workbench Components & CSS Modules:
   - Copy the 8 workbench components to `apps/marketing/components/marketing/` (or `apps/marketing/components/workbench/`):
     * `workbench-hero-preview.tsx`
     * `workbench-view-explorer.tsx`
     * `workbench-dashboard-showcase.tsx`
     * `workbench-canvas-showcase.tsx`
     * `workbench-customer-journey.tsx`
     * `workbench-shell-recording.tsx`
     * `responsive-workbench-screenshot.tsx`
     * `workbench-capture-preview.tsx`
     * `workbench-guided-demo.tsx`
     * `responsive-media.module.css`
   - Copy data libraries:
     * `lib/workbench-source-views.ts`
     * `lib/workbench-screenshots.ts`
     * `lib/workbench-capture-review.ts`
   - Transfer static media assets:
     * Copy `public/images/workbench/` (all WebP screenshots)
     * Copy `public/videos/workbench/` (`workbench-shell-20261014.mp4` and `.vtt`)
3. Target Site Integration:
   - In `apps/marketing/app/product/workbench/page.tsx`:
     Replace or augment the placeholder with `<WorkbenchViewExplorer />` so visitors to `https://spineworkspace.com/product/workbench` can interactively explore the full 23-domain operational workbench.
   - In `apps/marketing/components/product-home.tsx`:
     Wire `<WorkbenchHeroPreview />` into the homepage preview section.
4. Adapt Routes & Internal Links:
   - Ensure links inside the exported workbench components match the product site taxonomy (e.g. `/product/workbench#...` and `/connect/hosts`).
5. Verification:
   - Run `./node_modules/.bin/tsc --noEmit` in `apps/marketing` (must exit 0).
   - Run `./node_modules/.bin/vitest run` in `apps/marketing` (all tests must pass).
   - Run `./node_modules/.bin/next build --webpack` in `apps/marketing` (must build cleanly with 0 errors).

## Output
Document commands run and results in your handoff report at `/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m3/handoff.md`. Send a completion message when done.

## 2026-10-21T15:01:01Z
You are Worker M3. Read your dispatch instructions at /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m3/DISPATCH.md, PROJECT.md, and ORIGINAL_REQUEST.md.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
Implement Milestone 3 (Workbench Export to spineworkspace-live/apps/marketing):
- Transfer UI primitives (border-beam, magic-card) and Tailwind animation in apps/marketing/app/globals.css
- Transfer 8 workbench components, CSS module, data files (lib/workbench-*), and media assets (public/images/workbench, public/videos/workbench)
- Wire WorkbenchViewExplorer into apps/marketing/app/product/workbench/page.tsx
- Wire WorkbenchHeroPreview into apps/marketing/components/product-home.tsx
- Adapt internal route links
- Verify target workspace builds cleanly (tsc, vitest, next build)
Write your handoff report to /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m3/handoff.md.
Send a completion message when done.
