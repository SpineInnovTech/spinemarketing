# Authentic Workbench visual assets — capture contract

Source of truth: `SpineInnovTech/spineworkspace-live` (not the marketing repository).
The domain/view catalogue in `lib/workbench-source-views.ts` is an extracted
inventory of declared L1 views. It is **not a rendered UI screenshot**, a runtime
availability guarantee, or evidence of completed execution.

## Approved screenshot production

1. Check the current `apps/web/components/shell/ia-sidebar.tsx`,
   `packages/workbench-config/src/workbench-shell.ts`, and L1 runtime registry.
2. Launch the **actual** Workbench build on an authorized TEST tenant and select a
   role/domain through normal projection resolution. Do not hand-build a lookalike
   UI in the marketing app or with image generation.
3. Populate safe synthetic demonstration data **through the application or a
   controlled TEST fixture** without exposing users, credentials, tenants, or
   external customer records.
4. Capture the real rendered DOM at desktop (1440px), laptop (1280px), tablet
   (1024px) and mobile (390px) where useful. Keep the fixed common sidebar
   visible on desktop; mobile may use its actual navigation toggle.
5. Prioritize: Home, My Work, selected domain dashboard, one substantive domain
   L1 view, and the real Twin/approval UI if available.
6. Crop only to remove extraneous browser chrome or sensitive information.
   **Do not redesign, regenerate, rearrange, or invent the application UI.**
7. Store assets under `public/images/workbench/captures/<domain>/<view>.webp`.
   Pair each with a provenance entry containing capture date, Workbench
   commit SHA, route, projection ID, viewport, TEST/demo environment and
   evidence of the rendered component.
8. Add images to marketing only after capture provenance is reviewed and
   Next.js static-export rendering and mobile crops are verified.

## Verification requirements

- Shared sidebar groups and labels match `WORKBENCH_SHELL`.
- Captured domain view has a corresponding runtime binding/component; a
  manifest declaration alone is insufficient.
- Screens labeled `executed`, `verified`, or `reconciled` have real TEST
  evidence. HTTP 202 / queued is not a reconciliation receipt.
- Auth credentials, personal emails, and provider secrets are never captured.
- If a view is incomplete, mark it blocked and improve the **Workbench**
  implementation first, not the marketing image.

## Existing QA boundary

`docs/evidence/2026-09-15/workbench-visual-proof.md` in the Workbench repo
documents 76 Playwright checks and 60 fixture screenshots, but states those
files live under a gitignored `tests/visual/screenshots/` folder. These
assets cannot be assumed accessible through GitHub and are not equivalent to
authenticated TEST live-data proof.

## Source refresh

Re-extract projections from `packages/workbench-config/src/domain-estate.ts`,
package view lists from `packages/workbenches/src/*/views.ts`, and fallback
runtime keys from `apps/web/components/l1/domain-view-runtime-registry.tsx`.
Do not treat projection aliases as additional separately deployed workspaces.
Revalidate domain-to-marketing mappings after any projection changes.
