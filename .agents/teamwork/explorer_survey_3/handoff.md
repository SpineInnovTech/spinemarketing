# Handoff Report: Explorer 3 — Workbench Export (R3) & Verification Pipelines (R5)

**Phase**: Survey / Research  
**Author**: Explorer 3 (Survey Stream)  
**Date**: 2026-10-21T14:57:00Z  
**Target Recipient**: Orchestrator & Implementation Stream  

---

## 1. Observation

### 1.1 Source Workbench Inventory in `spinemarketing-magic-ui`
Direct inspection of files and dependencies in `/Users/nirmal/Github/spinemarketing-magic-ui`:

1. **Interactive Workbench Components**:
   - `components/marketing/workbench-hero-preview.tsx` (411 lines): 3-scene interactive storyboard (`context`, `views`, `governance`). Imports `BorderBeam` from `@/components/ui/border-beam`, `lucide-react` icons (`ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Database, FileText, GitBranch, LayoutDashboard, Layers, Lock, Play, ShieldCheck, Sparkles, Users`), and `next/link`.
   - `components/marketing/workbench-view-explorer.tsx` (852 lines): Interactive tabbed workbench view explorer across 23 domains (with public filter for customer-facing views). Features modal dialog expansion, mobile/desktop toggle, tabs (`dashboard`, `canvas`, `journey`, `screenshot`, `recording`, `inventory`). Imports:
     - `ResponsiveWorkbenchScreenshot` from `@/components/marketing/responsive-workbench-screenshot`
     - `WorkbenchShellRecording` from `./workbench-shell-recording`
     - `WorkbenchCanvasShowcase` from `./workbench-canvas-showcase`
     - `WorkbenchDashboardShowcase` from `./workbench-dashboard-showcase`
     - `WorkbenchCustomerJourney` from `./workbench-customer-journey`
     - `mediaStyles` from `./responsive-media.module.css`
     - `SHARED_WORKBENCH_SHELL, WORKBENCH_SOURCE_DOMAINS` from `@/lib/workbench-source-views`
     - `getWorkbenchCaptureReview` from `@/lib/workbench-capture-review`
     - `getDomainScreenshotNarrative, type WorkbenchScreenshotItem` from `@/lib/workbench-screenshots`
     - `BorderBeam` from `@/components/ui/border-beam`
     - `MagicCard` from `@/components/ui/magic-card`
   - `components/marketing/workbench-dashboard-showcase.tsx` (497 lines): 13 operational domains, step-by-step interactive inspection, inline draft editor, zoom modal. Imports `WorkbenchCapturePreview`, `BorderBeam`, `MagicCard`, `mediaStyles`.
   - `components/marketing/workbench-canvas-showcase.tsx` (205 lines): 6-step collaborative canvas showcase (document, database, graph, blocks, library, sidebar structure). Imports `WorkbenchCapturePreview`, `mediaStyles`.
   - `components/marketing/workbench-customer-journey.tsx` (238 lines): 6-stage end-to-end customer journey storyboard with authentic shell captures. Imports `WorkbenchCapturePreview`, `BorderBeam`.
   - `components/marketing/workbench-shell-recording.tsx` (29 lines): HTML5 video player for `workbench-shell-20261014.mp4` with captions track `workbench-shell-20261014.vtt`, interactive transcript details, and provenance metadata. Imports `mediaStyles`.
   - `components/marketing/responsive-workbench-screenshot.tsx` (110 lines): Responsive picture component with srcset for mobile (390w, 780w) and desktop (640w, 960w, 1280w, 1440w, 2880w), interactive click-to-expand.
   - `components/marketing/workbench-capture-preview.tsx` (38 lines): Viewport and pixel-coordinate crop calculation component for zooming into authentic full-shell captures.
   - `components/marketing/workbench-guided-demo.tsx` (85 lines): 6-frame guided demo carousel.
   - `components/marketing/responsive-media.module.css` (101 lines): CSS module defining `.media`, `.frame`, `.phone`, `.fitRegion`, `.fitImage`, `.capturePresentation`, `.desktopMedia`, `.captureViewport`, `.captureImage`, `.captureHint`.

2. **UI Primitives Required by Workbench Components**:
   - `components/ui/border-beam.tsx` (49 lines): Requires `cn` and CSS animation `border-beam`.
   - `components/ui/magic-card.tsx` (94 lines): Requires `framer-motion` (`motion, useMotionTemplate, useMotionValue`) and `cn`.

3. **Data & Metadata Libraries Required**:
   - `lib/workbench-source-views.ts` (1706 lines): Source-backed inventory of 23 domains, declared views, and `SHARED_WORKBENCH_SHELL`.
   - `lib/workbench-screenshots.ts` (836 lines): Asset catalog and 4-part value narratives.
   - `lib/workbench-capture-review.ts` (70 lines): Visual review and exclusion metadata.

4. **Media Assets & Provenance**:
   - `public/images/workbench/`: 17MB of authentic WebP screenshot captures across 20+ subdirectories.
   - `public/videos/workbench/`: 540KB (`workbench-shell-20261014.mp4`, `workbench-shell-20261014.vtt`).
   - `docs/WORKBENCH-*`: 7 provenance files (`WORKBENCH-AUTHENTIC-CAPTURES.md`, `WORKBENCH-CANVAS-PROVENANCE.json`, `WORKBENCH-CUSTOMER-JOURNEY.md`, `WORKBENCH-EDITABLE-DASHBOARD-PROVENANCE.json`, `WORKBENCH-NATIVE-SHELL-PROVENANCE.json`, `WORKBENCH-RECORDING-PROVENANCE.json`, `WORKBENCH-SCREENSHOT-PROVENANCE.md`).

---

### 1.2 Target Project in `spineworkspace-live/apps/marketing`
Direct inspection of `/Users/nirmal/Github/spineworkspace-live/apps/marketing`:

1. **Package Environment & Dependencies (`package.json`)**:
   - Next.js version: `16.3.8` (App Router, webpack build).
   - React: `^19`, `react-dom`: `^19`.
   - `framer-motion`: `^13.1.0` (already installed; satisfies `MagicCard`).
   - `lucide-react`: `^1.16.0` (already installed; all needed icons match).
   - `clsx`: `^2.1.1`, `tailwind-merge`: `^3.3.1` (already installed).
   - `lib/utils.ts` already exists and exports `cn(...inputs: ClassValue[])`.
   - `components/ui/`: only contains `button.tsx`. Currently missing `border-beam.tsx` and `magic-card.tsx`.
   - `public/images/`: only contains `spine-logo-mark.png`. No `public/images/workbench` or `public/videos/workbench` exists.

2. **Tailwind & CSS Configuration**:
   - Uses Tailwind v4 with `@import "@spineworkspace/design-system/styles.css"` and `@import "shadcn/tailwind.css"` in `app/globals.css`.
   - `app/globals.css` does **not** have `--animate-border-beam` or `@keyframes border-beam`.

3. **Current Target Pages**:
   - `app/product/workbench/page.tsx`: Currently renders `<ContentPage page={PRODUCT_PAGES.workbench} />`, which embeds `<WorkspacePreview />` (a basic 4-box CSS mockup).
   - `app/page.tsx` (`components/product-home.tsx`): Section `aria-labelledby="preview-title"` (lines 122-129) currently renders `<WorkspacePreview />`.
   - `app/solutions/[hostLabel]/page.tsx`: Uses `components/domain-workbench-preview.tsx` (line 9), which renders static KPI cards for each solution.

---

### 1.3 Build and Verification Pipelines
1. **In `spineworkspace-live/apps/marketing`**:
   - Typecheck command: `./node_modules/.bin/tsc --noEmit` -> Exited code 0 (0 errors).
   - Unit tests: `./node_modules/.bin/vitest run middleware.test.ts lib/*.test.ts` -> Exited code 0 (11 test files, 62 tests passing).
   - App build: `./node_modules/.bin/next build --webpack` -> Exited code 0 (36 routes compiled).
   - Monorepo turbo build: `./node_modules/.bin/turbo --filter=@spineworkspace/marketing build` from root -> Exited code 0 (4 tasks successful).

2. **In `spinemarketing-magic-ui`**:
   - `npm run check` executes: `npm run lint && npm run audit:site && npm run check:cloudflare && npm run typecheck`.
   - Execution result:
     - `npm run lint` (`node scripts/check-release-preflight.mjs`) -> Passed.
     - `npm run audit:site` (`node scripts/audit-corporate-site.mjs`) -> **FAILED**:
       ```
       FAIL: corporate pricing must link to the local product-details page
       ```
       Caused by line 97 of `scripts/audit-corporate-site.mjs`: `check(source("app/pricing/page.tsx").includes('href="/product"'), ...)` where `app/pricing/page.tsx` was edited to link to `https://spineworkspace.com/pricing` without retaining a link to `/product`.
     - `npm run typecheck` (`tsc --noEmit`) -> Failed with `sh: tsc: command not found` because `node_modules` is not installed in `spinemarketing-magic-ui`.
   - Pre-existing QA scripts have outdated assertions conflicting with R1, R2, and R4:
     - `scripts/verify-workbench-artifact.mjs` (Line 36):
       `assert.ok(indexHtml.includes("Interactive Storyboard"), "Missing Interactive Storyboard on corporate index");`
       *Conflict with R2*: R2 mandates removing interactive workbench views/storyboards from corporate index.
     - `scripts/verify-auth-entry.mjs` (Lines 34 & 42):
       `assert.equal(url.origin, "https://spineworkspace.com")`
       `assert.ok(!html.includes("https://app.spineworkspace.com"))`
       *Conflict with R4*: R4 requires auth actions to target `https://auth.spineworkspace.com` and app actions to target `https://app.spineworkspace.com`.
     - `scripts/check-cloudflare-config.mjs` (Lines 27-30):
       Checks for routes `spineinnovtech.spineworkspace.com` and `spineinnovtech.spineworkspace.com`.
       *Conflict with R1*: R1 cutover targets `spineinnovtech.com` and `www.spineinnovtech.com`.
     - `scripts/check-release-preflight.mjs` (Line 43):
       Checks for `spineinnovtech.spineworkspace.com` in `wrangler.jsonc`.
     - `scripts/verify-corporate-coverage.mjs` (Line 31):
       Sets `const origin = "https://spineinnovtech.spineworkspace.com"`.
     - `scripts/verify-live-site.mjs` (Line 5):
       Sets `const origin = "https://spineinnovtech.spineworkspace.com"`.
     - `scripts/verify-static-artifact.mjs` (Lines 50-55):
       Asserts sitemap and llms.txt contain `spineinnovtech.spineworkspace.com`.

---

## 2. Logic Chain

1. **Workbench Export Viability (R3)**:
   - Observation: All workbench components rely on standard React 19 hooks, `framer-motion`, `lucide-react`, `BorderBeam`, `MagicCard`, CSS modules, and local data files in `lib/workbench-*`.
   - Observation: `spineworkspace-live/apps/marketing` already has `framer-motion` (v13), `lucide-react` (v1), `clsx`, `tailwind-merge`, and `cn` in `lib/utils.ts`.
   - Deduction: There are no third-party package conflicts or missing npm packages. Porting requires:
     a) Copying `components/ui/border-beam.tsx` and `components/ui/magic-card.tsx` to `apps/marketing/components/ui/`.
     b) Adding the `@keyframes border-beam` animation definition to `apps/marketing/app/globals.css`.
     c) Copying the 8 workbench components (`workbench-hero-preview.tsx`, `workbench-view-explorer.tsx`, `workbench-dashboard-showcase.tsx`, `workbench-canvas-showcase.tsx`, `workbench-customer-journey.tsx`, `workbench-shell-recording.tsx`, `responsive-workbench-screenshot.tsx`, `workbench-capture-preview.tsx`) and `responsive-media.module.css` to `apps/marketing/components/marketing/` (or `apps/marketing/components/workbench/`).
     d) Copying `lib/workbench-source-views.ts`, `lib/workbench-screenshots.ts`, and `lib/workbench-capture-review.ts` to `apps/marketing/lib/`.
     e) Copying `public/images/workbench/` and `public/videos/workbench/` to `apps/marketing/public/`.
     f) Adapting internal route links inside the copied workbench components (e.g. changing `/product#...` to `/product/workbench#...` or `/product#...`, and `/host-connected-environment` to `/connect/hosts`).

2. **Integration Placement in Product Marketing (R3)**:
   - Observation: `apps/marketing/app/product/workbench/page.tsx` currently renders `ContentPage`, which falls back to a minimal `WorkspacePreview` placeholder.
   - Observation: `apps/marketing/components/product-home.tsx` currently embeds `WorkspacePreview` under the section titled "Interactive Workbench Explorer".
   - Deduction:
     - Integration Point 1 (`app/product/workbench/page.tsx`): Replace or augment `ContentPage` / `WorkspacePreview` with the full `WorkbenchViewExplorer`, giving `spineworkspace.com/product/workbench` the authentic 23-domain interactive workbench explorer with dashboards, canvas, customer journey, and 26s shell recording.
     - Integration Point 2 (`components/product-home.tsx`): Replace `<WorkspacePreview />` with `<WorkbenchHeroPreview />` (or link to `/product/workbench`), bringing the 3-scene visual storyboard to the product homepage.

3. **QA Pipeline Alignment (R5)**:
   - Observation: `spinemarketing-magic-ui` has 6 verification scripts with hardcoded assertions that directly conflict with the changes mandated by R1, R2, and R4.
   - Deduction: If the implementation team executes R1 (cutover to `spineinnovtech.com`), R2 (remove interactive workbench from corporate home), and R4 (route CTAs to `auth.spineworkspace.com` and `app.spineworkspace.com`), `npm run check` and `npm run build:cloudflare` will fail unless the verification scripts are simultaneously aligned:
     - `verify-workbench-artifact.mjs`: Must verify diagrammatic architecture elements (e.g. `CorporateOrbitalHero` / `orbital fabric`) instead of `Interactive Storyboard` on `out/index.html`.
     - `verify-auth-entry.mjs`: Must verify `https://auth.spineworkspace.com` (for auth actions) and allow `https://app.spineworkspace.com` rather than failing when `app.spineworkspace.com` is present.
     - `check-cloudflare-config.mjs`, `check-release-preflight.mjs`, `verify-corporate-coverage.mjs`, `verify-live-site.mjs`, `verify-static-artifact.mjs`: Must update origin from `https://spineinnovtech.spineworkspace.com` to `https://spineinnovtech.com`.
     - `scripts/audit-corporate-site.mjs`: Fix pricing page check or restore `href="/product"` link on `app/pricing/page.tsx`.

---

## 3. Caveats

1. **Static Asset Volume**:
   - `public/images/workbench` is 17MB. In git, committing 17MB of WebP files into `spineworkspace-live` is within normal limits, but transferring must be done cleanly without corrupting binary assets.
2. **Next.js Route Structure Discrepancy**:
   - Corporate site (`spinemarketing-magic-ui`) uses `/product` for product details, `/host-connected-environment` for host connections.
   - Product site (`spineworkspace-live/apps/marketing`) uses `/product/workbench` for the workbench, `/connect/hosts` for hosts. Links inside transferred components must be re-pointed to match the product site taxonomy.
3. **`node_modules` in `spinemarketing-magic-ui`**:
   - `node_modules` was not pre-installed in `spinemarketing-magic-ui` at the time of survey, causing `tsc` to fail. Running `npm install` is required before `npm run typecheck` will pass.

---

## 4. Conclusion

1. **R3 Export Plan**:
   - Transfer of interactive workbench views to `/Users/nirmal/Github/spineworkspace-live/apps/marketing` is completely feasible without adding external npm dependencies.
   - The transfer comprises 8 React components, 1 CSS module, 2 UI primitives (`BorderBeam`, `MagicCard`), 3 data libraries, and static assets in `public/images/workbench/` and `public/videos/workbench/`.
   - The primary integration point is `apps/marketing/app/product/workbench/page.tsx` (replacing `WorkspacePreview` with `WorkbenchViewExplorer`), and secondarily `apps/marketing/components/product-home.tsx` (using `WorkbenchHeroPreview`).

2. **R5 QA & Verification Plan**:
   - `apps/marketing` builds cleanly (`turbo build`, `next build --webpack`, `tsc --noEmit`, and `vitest` with 62 passing tests).
   - In `spinemarketing-magic-ui`, verification scripts (`audit-corporate-site.mjs`, `check-cloudflare-config.mjs`, `check-release-preflight.mjs`, `verify-workbench-artifact.mjs`, `verify-auth-entry.mjs`, `verify-static-artifact.mjs`, `verify-corporate-coverage.mjs`, and `verify-live-site.mjs`) have legacy assertions that MUST be updated to match R1 (domain cutover), R2 (diagrammatic home), and R4 (cross-domain auth/app targets).

---

## 5. Verification Method

### 5.1 Verification Commands for `spinemarketing-magic-ui`
Run from `/Users/nirmal/Github/spinemarketing-magic-ui`:
```bash
# 1. Install dependencies if node_modules is missing
npm install

# 2. Run static preflight, corporate audit, Cloudflare check, and typecheck
npm run check

# 3. Run complete Cloudflare static build and artifact verification
npm run build:cloudflare
```
**Passing condition**:
- `npm run check` exits with code 0 (0 lint errors, 0 audit errors, 0 typecheck errors).
- `npm run build:cloudflare` produces `./out` directory and passes `verify:artifact`.

### 5.2 Verification Commands for `spineworkspace-live/apps/marketing`
Run from `/Users/nirmal/Github/spineworkspace-live/apps/marketing`:
```bash
# 1. Typecheck the target marketing application
./node_modules/.bin/tsc --noEmit

# 2. Run vitest test suite
./node_modules/.bin/vitest run middleware.test.ts lib/*.test.ts

# 3. Build the Next.js marketing application
./node_modules/.bin/next build --webpack
```
Run from repository root `/Users/nirmal/Github/spineworkspace-live`:
```bash
./node_modules/.bin/turbo --filter=@spineworkspace/marketing build
```
**Passing condition**:
- `tsc --noEmit` exits with 0 errors.
- `vitest` passes all test suites.
- `next build --webpack` completes successfully and generates all static/dynamic routes.
- Transferred workbench views render properly at `/product/workbench` and on the homepage.
