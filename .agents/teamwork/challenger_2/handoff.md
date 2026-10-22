# Handoff Report: Challenger 2 — Target Workspace Integration & Broken Link Stress Testing

**Date**: 2026-10-21  
**Author**: Challenger 2 (Empirical Challenger)  
**Assigned Scope**: Exported Workbench Components Stress-Testing (`spineworkspace-live/apps/marketing`) & Corporate Broken Link Audit (`spinemarketing-magic-ui`)  
**Verdict**: **REQUEST_CHANGES**  

---

## 1. Observation

### 1.1 Target Workspace Integration (`spineworkspace-live/apps/marketing`)
1. **Compilation and Build**:
   - `pnpm typecheck` in `spineworkspace-live/apps/marketing` completed with exit code `0` (0 type errors).
   - `pnpm test` (Vitest v3.2.7) completed with exit code `0` across 11 test files (62 tests passed, 0 failed).
   - `pnpm build` (`next build --webpack`, Next.js 16.3.8) completed with exit code `0`, prerendering 36/36 static pages.
   - Output file `/Users/nirmal/Github/spineworkspace-live/apps/marketing/.next/server/app/product/workbench.html` was generated at 110,270 bytes and verified to contain:
     * `<title>Spine Workbench | Your Work, With Context</title>`
     * Section containers: `id="workbench-views"`, `id="workbench-dashboards"`, `id="workbench-canvas"`, `id="workbench-customer-journey"`, `id="workbench-recording"`.
     * Factual QA provenance disclaimer: `"Actual application captures with QA fixture data"`.

2. **Domain Estate Verification (`lib/workbench-source-views.ts`)**:
   - Discovered exactly 23 domains in `WORKBENCH_SOURCE_DOMAINS` (`account-success`, `technical-account-success`, `sales`, `marketing`, `content`, `service`, `finance`, `revops`, `support`, `productengineering`, `operations`, `ops`, `humanresources`, `legal`, `personal`, `founder`, `founderops`, `product`, `business-intelligence`, `campaigns`, `knowledge-management`, `book-of-records`, `brandstore`).
   - 19 domains are exposed in the customer-facing `PUBLIC_WORKBENCH_DOMAINS` selector; 4 internal or operational alias domains (`brandstore`, `ops`, `founder`, `product`) are cleanly excluded from the public explorer.
   - Adversarial input testing (`null`, `""`, `"../../etc/passwd"`, `"<script>"`, `"NON_EXISTENT"`) verified safe fallback to `DEFAULT_DOMAIN` (`founderops`).

3. **Media Asset Integrity**:
   - `spineworkspace-live/apps/marketing/public/images/workbench/`: Exactly 439 WebP files discovered. Every file has valid `RIFF....WEBP` magic bytes and non-zero size.
   - `spineworkspace-live/apps/marketing/public/videos/workbench/`:
     * `workbench-shell-20261014.mp4`: 545,600 bytes.
     * `workbench-shell-20261014.vtt`: 500 bytes.
   - Code asset reference check: All 61 distinct workbench assets referenced in code exist on disk.

4. **Internal Link Verification in Exported Components**:
   - `workbench-guided-demo.tsx`: links to `/product/workbench#workbench-views` (Valid).
   - `workbench-hero-preview.tsx`: links to `/product/workbench#workbench-customer-journey`, `/product/workbench#workbench-dashboards`, `/product/workbench#workbench-recording`, and `/connect/hosts` (Valid).
   - `workbench-customer-journey.tsx`: links to `/connect/hosts` (Valid).
   - `workbench-shell-recording.tsx`: contains fallback link to `/videos/workbench/workbench-shell-20261014.mp4` (Valid file download).
   - `workbench-view-explorer.tsx`: links to `/product/how-it-works` (Valid).

### 1.2 The Defect: Broken Solution Navigation in `WorkbenchViewExplorer`
In `/Users/nirmal/Github/spineworkspace-live/apps/marketing/components/workbench/workbench-view-explorer.tsx`:
Lines 55–76 define:
```typescript
const DOMAIN_TO_SOLUTION_PATH: Record<string, string> = {
  founderops: "/solutions/founders",
  founder: "/solutions/founders",
  sales: "/solutions/sales",
  marketing: "/solutions/marketing",
  content: "/solutions/content",
  finance: "/solutions/finance",
  "account-success": "/solutions/customer-success",
  "technical-account-success": "/solutions/customer-success",
  operations: "/solutions/operations",
  bizops: "/solutions/operations",
  revops: "/solutions/revops",
  productengineering: "/solutions/product-engineering",
  product: "/solutions/product-engineering",
  service: "/solutions/services",
  support: "/solutions/customer-support",
  humanresources: "/solutions/human-resources",
  legal: "/solutions/legal",
  "knowledge-management": "/solutions/memoryandknowledge",
  personal: "/solutions/individual",
  common: "/solutions/individual",
};
```
Lines 455 and 658 render:
```tsx
<Link href={DOMAIN_TO_SOLUTION_PATH[domain.id] ?? "/solutions"}>
  Explore {domain.title} Solution <ArrowRight className="h-3.5 w-3.5" />
</Link>
```
However, in `apps/marketing/lib/product-paths.ts`:
Line 67:
```typescript
export function isApexProductPath(pathname: string): boolean {
  const path = barePath(pathname);
  if (PRODUCT_EXACT.has(path)) return true;
  const match = /^\/solutions\/([a-z0-9-]+)$/.exec(path);
  if (!match) return false;
  const slug = match[1];
  return LENS_HOST_LABELS.has(slug) || Object.prototype.hasOwnProperty.call(SOLUTION_DOCS, slug);
}
```
And in `apps/marketing/middleware.ts`:
Line 72–74:
```typescript
if (!isApexProductPath(url.pathname)) {
  return NextResponse.redirect(new URL("/", url), 302);
}
```
Empirical execution with `npx tsx` yields:
```
GET /solutions/customer-success       -> status: 302 -> https://spineworkspace.com/
GET /solutions/operations             -> status: 302 -> https://spineworkspace.com/
GET /solutions/revops                 -> status: 302 -> https://spineworkspace.com/
GET /solutions/services               -> status: 302 -> https://spineworkspace.com/
GET /solutions/customer-support       -> status: 302 -> https://spineworkspace.com/
GET /solutions/human-resources        -> status: 302 -> https://spineworkspace.com/
GET /solutions/memoryandknowledge     -> status: 302 -> https://spineworkspace.com/
GET /solutions/individual             -> status: 302 -> https://spineworkspace.com/
```
**11 out of 20 domain mappings (55%)** redirect to the homepage (`/`) because those slugs do not exist in `SOLUTION_DOCS` or `LENS_HOST_LABELS`.

### 1.3 Corporate Cross-Site Routing Audit (`spinemarketing-magic-ui`)
1. `npm run check` completed with exit code `0` (lint, audit:site, check:cloudflare, typecheck passed).
2. `npm run build:cloudflare` completed with exit code `0`, generating all 85 static pages in `./out` with static export verification scripts passing.
3. `node scripts/test-e2e.mjs` completed with exit code `0` (146 passed / 146 passed across Tiers 1–4).
4. External link crawl across 276 corporate source files:
   - 18 links point to `https://spineworkspace.com`
   - 1 link points to `https://auth.spineworkspace.com`
   - Zero links point to `http://` (100% HTTPS).
   - Zero links contain `localhost`, `127.0.0.1`, or `spineinnovtech.spineworkspace.com`.
5. Dynamic Link Generators in `lib/workspace-entry.ts`:
   - `productSiteUrl()` maps all 20 solution slugs to valid destinations on `https://spineworkspace.com/solutions/<slug>`.
   - `workspaceEntryLinks()` generates HTTPS URLs targeting `https://auth.spineworkspace.com` with `next` and `entry_domain` query parameters.
   - `appEntryUrl()` generates HTTPS URLs targeting `https://app.spineworkspace.com`.
   - Edge Worker (`worker/index.ts`) verified to issue 301 canonical redirects for legacy hostnames (`spineinnovtech.spineworkspace.com`, `spineinnovlabs.*`) preserving path and query.

---

## 2. Logic Chain

1. **Premise 1**: Requirement 1.4 of DISPATCH.md mandates: *"Verify that all internal links in the exported workbench components point to valid target routes (`/product/workbench#...` and `/connect/hosts`)."*
2. **Premise 2**: `WorkbenchViewExplorer` was exported into `spineworkspace-live/apps/marketing/components/workbench/workbench-view-explorer.tsx` and provides deep-linking to solution landing pages via `DOMAIN_TO_SOLUTION_PATH`.
3. **Premise 3**: In `spineworkspace-live/apps/marketing`, canonical solution landing routes are dictated by `SOLUTION_DOCS` in `lib/solutions-and-resources.ts` (`account-success`, `business-operations`, `revenue`, `founders`, `teams`, `finance`, `procurement`, `marketing`, `product-engineering`, `service-support`, `it-administration`, `personal-workspace`, `technical-account-success`, `knowledge-records`, `people-legal`) and `WORKSPACE_LENS_DOORS` in `lib/workspace-lenses.ts`.
4. **Premise 4**: `DOMAIN_TO_SOLUTION_PATH` in `workbench-view-explorer.tsx` routes:
   - `account-success` to `/solutions/customer-success` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `operations` to `/solutions/operations` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `revops` to `/solutions/revops` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `service` to `/solutions/services` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `support` to `/solutions/customer-support` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `humanresources` to `/solutions/human-resources` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `knowledge-management` to `/solutions/memoryandknowledge` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
   - `personal` to `/solutions/individual` (not in `SOLUTION_DOCS` or `LENS_HOST_LABELS`)
5. **Premise 5**: Next.js `middleware.ts` intercepts requests to these paths and triggers `NextResponse.redirect(new URL("/", url), 302)` because `isApexProductPath(url.pathname)` evaluates to `false`.
6. **Premise 6**: When an operator explores any of these 11 domains on `/product/workbench` and clicks "Explore [Domain] Solution", instead of reaching the solution page, they are bounced back to the homepage (`/`).
7. **Deduction**: Because 11 internal links in the exported workbench explorer are broken / bounce to home, the exported component integration does not meet the interface contract. Therefore, the implementation requires changes before production approval.

---

## 3. Caveats

1. **Live Cloudflare Edge Deployment**: DNS apex flattening and SSL/TLS proxying cannot be tested over live public internet until nameserver delegation is completed at the registrar.
2. **Headless Browser Visual Regression**: Visual CSS layout rendering was verified via AST inspection, Next.js build compilation, and DOM snapshot checks; pixel-level rendering was not executed with a browser driver.

---

## 4. Conclusion

- **Verdict**: **REQUEST_CHANGES**
- **Root Cause**: Stale/mismatched solution slugs in `DOMAIN_TO_SOLUTION_PATH` inside `/Users/nirmal/Github/spineworkspace-live/apps/marketing/components/workbench/workbench-view-explorer.tsx`.
- **Recommended Remediation**:
  Update `DOMAIN_TO_SOLUTION_PATH` in `spineworkspace-live/apps/marketing/components/workbench/workbench-view-explorer.tsx` to align with `SOLUTION_DOCS`:
  ```typescript
  const DOMAIN_TO_SOLUTION_PATH: Record<string, string> = {
    founderops: "/solutions/founders",
    founder: "/solutions/founders",
    sales: "/solutions/sales",
    marketing: "/solutions/marketing",
    content: "/solutions/content",
    finance: "/solutions/finance",
    "account-success": "/solutions/account-success",
    "technical-account-success": "/solutions/technical-account-success",
    operations: "/solutions/business-operations",
    bizops: "/solutions/business-operations",
    revops: "/solutions/revenue",
    productengineering: "/solutions/product-engineering",
    product: "/solutions/product-engineering",
    service: "/solutions/service-support",
    support: "/solutions/service-support",
    humanresources: "/solutions/people-legal",
    legal: "/solutions/people-legal",
    "knowledge-management": "/solutions/knowledge-records",
    personal: "/solutions/personal-workspace",
    common: "/solutions/personal-workspace",
  };
  ```
  *(Alternatively, add route alias redirects in `apps/marketing/lib/product-paths.ts` or `apps/marketing/middleware.ts`)*.

---

## 5. Verification Method

To independently reproduce the broken links and verify the fix:

1. **Reproduce the 302 Redirect Bug**:
   ```bash
   cd /Users/nirmal/Github/spineworkspace-live/apps/marketing
   npx tsx -e '
   import { middleware } from "./middleware.ts";
   import { NextRequest } from "next/server";
   const req = new NextRequest("https://spineworkspace.com/solutions/customer-success", { headers: { host: "spineworkspace.com" } });
   const res = middleware(req);
   console.log("Status:", res.status, "Location:", res.headers.get("location"));
   '
   # Expected Output before fix: Status: 302 Location: https://spineworkspace.com/
   ```

2. **Verify Corporate Site Health & Build**:
   ```bash
   cd /Users/nirmal/Github/spinemarketing-magic-ui
   npm run check
   npm run build:cloudflare
   node scripts/test-e2e.mjs
   npx tsx scripts/test-challenger2-audit.mjs
   ```

3. **Verify Target Product Site Health & Build**:
   ```bash
   cd /Users/nirmal/Github/spineworkspace-live/apps/marketing
   pnpm typecheck
   pnpm test
   pnpm build
   ```

4. **Invalidation Condition**:
   This defect is resolved when `GET /solutions/<slug>` for all domains in `DOMAIN_TO_SOLUTION_PATH` return HTTP 200 and render the corresponding solution page rather than redirecting to `/`.
