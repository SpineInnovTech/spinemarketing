# Handoff Report: Survey Investigation for R1 & R4 (Domain Cutover & Cross-Site Routing)

**Agent**: Explorer 1 (`explorer_survey_1`)  
**Phase**: Survey / Discovery  
**Target Milestone**: R1 (Domain Cutover & Cloudflare Worker) & R4 (Cross-Site Routing & Solution Entry Alignment)  
**Date**: 2026-10-21  

---

## 1. Observation

### 1.1 `wrangler.jsonc` (Cloudflare Worker & Route Configuration)
- **Path**: `/Users/nirmal/Github/spinemarketing-magic-ui/wrangler.jsonc`
- **Lines 30–48**:
```jsonc
30:     "prod": {
31:       "name": "spineinnovtech-marketing",
32:       "routes": [
33:         {
34:           "pattern": "spineinnovtech.spineworkspace.com",
35:           "custom_domain": true
36:         },
37:         {
38:           "pattern": "spineinnovtech.spineworkspace.com",
39:           "custom_domain": true
40:         }
41:       ],
42:       "vars": {
43:         "CANONICAL_REDIRECTS_ENABLED": "true",
44:         "CANONICAL_SITE_URL": "https://spineinnovtech.spineworkspace.com",
45:         "LEGACY_REDIRECT_HOSTS": "spineinnovtech.spineworkspace.com,www.spineinnovtech.com,spineinnovtech.com"
46:       }
47:     }
```
- **Finding**:
  1. Neither `spineinnovtech.com` nor `www.spineinnovtech.com` is present under `env.prod.routes`.
  2. `CANONICAL_SITE_URL` points to `https://spineinnovtech.spineworkspace.com` instead of `https://spineinnovtech.com`.
  3. `LEGACY_REDIRECT_HOSTS` omits `spineinnovtech.spineworkspace.com` (and `www.spineinnovtech.com`).

### 1.2 `config.yaml` and `config/cloudflare-builds.json`
- **Path**: `/Users/nirmal/Github/spinemarketing-magic-ui/config.yaml`
- **Lines 13–27 & 79–81**:
```yaml
13: environments:
14:   prod:
15:     spine_innovlabs:
16:       public_url: https://spineinnovtech.spineworkspace.com
17:       canonical_url: https://spineinnovtech.spineworkspace.com
18:       legacy_redirect_hosts:
19:         - spineinnovtech.spineworkspace.com
20:         - www.spineinnovtech.com
21:         - spineinnovtech.com
22:     spine_workspace:
23:       apex: https://spineworkspace.com
24:       app: https://app.spineworkspace.com
25:       auth: https://auth.spineworkspace.com
26:       domain_root: spineworkspace.com
...
79: build:
80:   prod_site_url: https://spineinnovtech.spineworkspace.com
```
- **Path**: `/Users/nirmal/Github/spinemarketing-magic-ui/config/cloudflare-builds.json`
- **Line 12**:
```json
"buildVariables": {
  "NEXT_PUBLIC_SITE_URL": "https://spineinnovtech.spineworkspace.com",
```
- **Finding**:
  1. `config.yaml` sets `public_url`, `canonical_url`, and `build.prod_site_url` to `https://spineinnovtech.spineworkspace.com`.
  2. In contrast, the SSOT file at `../spineworkspace-live/config/public-sites.yaml` (lines 20–30) already specifies:
     `canonical_url: https://spineinnovtech.com` and lists `spineinnovtech.spineworkspace.com`, `www.spineinnovtech.com`, `spineinnovtech.spineworkspace.com`, `www.spineinnovtech.com` under `legacy_redirect_hosts`.
  3. `config/cloudflare-builds.json` sets `NEXT_PUBLIC_SITE_URL` to `https://spineinnovtech.spineworkspace.com`.

### 1.3 `worker/index.ts` (Edge Redirection & Routing)
- **Path**: `/Users/nirmal/Github/spinemarketing-magic-ui/worker/index.ts`
- **Lines 34–45** (`maybeCanonicalRedirect`):
```typescript
34: function maybeCanonicalRedirect(request: Request, env: Env): Response | null {
35:   if (env.CANONICAL_REDIRECTS_ENABLED !== "true") return null;
36:   const canonicalBase = env.CANONICAL_SITE_URL?.replace(/\/+$/, "");
37:   if (!canonicalBase) return null;
38: 
39:   const url = new URL(request.url);
40:   const legacyHosts = parseLegacyHosts(env.LEGACY_REDIRECT_HOSTS);
41:   if (!legacyHosts.has(url.hostname.toLowerCase())) return null;
42: 
43:   const target = new URL(url.pathname + url.search, canonicalBase);
44:   return Response.redirect(target.toString(), 301);
45: }
```
- **Lines 86–101** (`maybeProductEntryRedirect`):
```typescript
86: const PRODUCT_SITE_ORIGIN = "https://spineworkspace.com";
87: const CORPORATE_ENTRY_REDIRECT_PATHS = new Set([
88:   "/login",
89:   "/signup",
90:   "/onboarding",
91:   "/workspace",
92: ]);
93: 
94: function maybeProductEntryRedirect(request: Request): Response | null {
95:   const url = new URL(request.url);
96:   const normalized = url.pathname.replace(/\/+$/, "") || "/";
97:   if (!CORPORATE_ENTRY_REDIRECT_PATHS.has(normalized)) return null;
98:   const targetPath = normalized === "/login" || normalized === "/signup" ? normalized : "/get-started";
99:   const target = new URL(targetPath + url.search, PRODUCT_SITE_ORIGIN);
100:   return Response.redirect(target.toString(), 302);
101: }
```
- **Finding**:
  1. `maybeCanonicalRedirect` performs exact 301 redirection while preserving `pathname` and `search` (query parameters), conditional upon matching `legacyHosts`.
  2. `maybeProductEntryRedirect` currently sends `/login` and `/signup` to `https://spineworkspace.com/login` and `/signup` (instead of `https://auth.spineworkspace.com`), and `/workspace` to `https://spineworkspace.com/get-started` (instead of `https://app.spineworkspace.com`).

### 1.4 `lib/workspace-entry.ts` & `lib/site-urls.ts` (Entry Links & Solution Mapping)
- **Path**: `/Users/nirmal/Github/spinemarketing-magic-ui/lib/site-urls.ts`
- **Lines 23–27**:
```typescript
23: export const SPINE_WORKSPACE_APEX = resolved.resolved.spine_workspace_apex;
25: export const SPINE_WORKSPACE_APP = resolved.resolved.spine_workspace_app;
27: export const AUTH_ORIGIN = resolved.resolved.spine_workspace_auth;
```
- **Path**: `/Users/nirmal/Github/spinemarketing-magic-ui/lib/workspace-entry.ts`
- **Lines 5–34**:
```typescript
 5: const solutionDomains: Readonly<Record<string, string>> = {
 6:   "customer-success": "account-success",
 7:   "customer-support": "support",
 8:   "product-engineering": "productengineering",
 9:   "human-resources": "humanresources",
10:   memoryandknowledge: "knowledge-management",
11:   individual: "personal",
12:   founders: "founderops",
13:   "finance-leaders": "finance",
14:   sales: "sales", marketing: "marketing", content: "content",
15:   finance: "finance", legal: "legal", operations: "operations", revops: "revops",
16: };
17: 
18: const solutionLensSlugs: Readonly<Record<string, string>> = {
19:   "customer-success": "account-success",
20:   "customer-support": "support",
21:   "product-engineering": "productengineering",
22:   "human-resources": "humanresources",
23:   individual: "personal",
24:   founders: "founderops",
25:   "finance-leaders": "finance",
26:   sales: "sales",
27:   marketing: "marketing",
28:   content: "content",
29:   finance: "finance",
30:   legal: "legal",
31:   operations: "ops",
32:   revops: "businessops",
33:   services: "service",
34: };
```
- **Lines 49–62**:
```typescript
49: export function workspaceEntryLinks(pathname = "") {
50:   const slug = /^\/solutions\/([^/]+)\/?$/.exec(pathname)?.[1];
51:   const domain = slug && Object.hasOwn(solutionDomains, slug) ? solutionDomains[slug] : undefined;
52:   // Founder Operations starts at company-overview; it has no dashboard view.
53:   const homeView = domain === "founderops" ? "company-overview" : "dashboard";
54:   const next = domain ? `/workspace/work/${domain}/${homeView}` : "/workspace/my-work";
55:   function href(path: "signup" | "login") {
56:     const url = new URL(`/${path}`, SPINE_WORKSPACE_APEX);
57:     url.searchParams.set("next", next);
58:     if (domain) url.searchParams.set("entry_domain", domain);
59:     return url.toString();
60:   }
61:   return { signup: href("signup"), login: href("login"), product: productSiteUrl(pathname) };
62: }
```
- **Finding**:
  1. In `solutionLensSlugs`, `memoryandknowledge` is **completely missing**. When a user visits `/solutions/memoryandknowledge`, `productSiteUrl` fails `Object.hasOwn(solutionLensSlugs, slug)` and falls back to generic `/solutions` instead of linking to the specific product solution page on `spineworkspace.com`.
  2. In `../spineworkspace-live/apps/marketing/lib/solutions-and-resources.ts` (lines 286–299), the product solution slug is `"knowledge-records"` (with name "Knowledge and Book of Records"). In `solution-taxonomy.ts` (line 85), the slug is `"memoryandknowledge"`.
  3. Additional solutions from `SOLUTION_DOMAINS` missing from `solutionLensSlugs`: `saas`, `professional-services`, `manufacturing`, `retail`.
  4. In `workspaceEntryLinks`, `href("signup")` and `href("login")` construct URLs using `SPINE_WORKSPACE_APEX` (`https://spineworkspace.com`) rather than `AUTH_ORIGIN` (`https://auth.spineworkspace.com`).
  5. There is currently no `app` link exported from `workspaceEntryLinks` to `SPINE_WORKSPACE_APP` (`https://app.spineworkspace.com`).

### 1.5 Header, Footer, and CTAs across `spinemarketing-magic-ui`
- **Path**: `lib/navigation.ts`
  - Line 31–37: `featured` item for SpineWorkspace has `href: "/product"`, `desc: "Our core shared workspace for humans and AI (spineworkspace.com)"`, and `external: true`.
  - Line 76: `footerColumns` has `{ name: "SpineWorkspace", href: "/product" }`.
- **Path**: `components/header.tsx`
  - Lines 628–643: Renders `<Link href="/product">SpineWorkspace</Link>`, `<a href={authLinks.login}>Sign in</a>`, `<a href={authLinks.signup}>Sign up</a>`.
  - Lines 804–812: Mobile nav renders `<a href={authLinks.signup}>Sign up</a>`, `<a href={authLinks.login}>Sign in</a>`, `<Link href="/product">SpineWorkspace</Link>`.
- **Path**: `components/final-cta.tsx`
  - Lines 27–29: `<a href="/product">Explore SpineWorkspace <ArrowUpRight .../></a>` displays external icon but links to local `/product`.
- **Path**: `components/marketing/workspace-projection-cta.tsx`
  - Lines 28–30: `<a href={productSiteHref}>Open on SpineWorkspace.com <ArrowUpRight .../></a>` uses `productSiteUrl(...)` targeting `https://spineworkspace.com/solutions/...`.
- **Path**: `components/marketing/workspace-auth-actions.tsx`
  - Lines 6–9: Renders `<a href={links.signup}>Sign up</a>` and `<a href={links.login}>Sign in</a>` using `workspaceEntryLinks`.

### 1.6 Verification Scripts & CI Assertions
- **Path**: `scripts/check-cloudflare-config.mjs`
  - Lines 27–30:
    ```javascript
    assert(wrangler.env?.prod?.routes?.some(r => r.pattern === "spineinnovtech.spineworkspace.com" && r.custom_domain === true), "production custom domain missing");
    assert(wrangler.env?.prod?.routes?.some(r => r.pattern === "spineinnovtech.spineworkspace.com" && r.custom_domain === true), "spineinnovtech custom domain missing");
    assert(wrangler.env.prod.vars?.CANONICAL_REDIRECTS_ENABLED === "true", "canonical domain consolidation redirects must be enabled");
    assert(wrangler.env.prod.vars?.CANONICAL_SITE_URL === "https://spineinnovtech.spineworkspace.com", "canonical site URL must point to spineinnovtech.spineworkspace.com");
    ```
- **Path**: `scripts/check-release-preflight.mjs`
  - Line 43: Asserts `wrangler.env?.prod?.routes?.some((route) => route.pattern === "spineinnovtech.spineworkspace.com")`.
- **Path**: `scripts/verify-static-artifact.mjs`
  - Lines 50–56: Asserts `sitemap.includes("spineinnovtech.spineworkspace.com")` and `llmsTxt.includes("https://spineinnovtech.spineworkspace.com")`.
- **Path**: `scripts/verify-auth-entry.mjs`
  - Line 34: Asserts `url.origin === "https://spineworkspace.com"`.
  - Line 42: Asserts `!html.includes("https://app.spineworkspace.com")`.
- **Path**: `scripts/verify-corporate-coverage.mjs`
  - Line 31: `const origin = "https://spineinnovtech.spineworkspace.com";`
- **Path**: `scripts/verify-live-site.mjs`
  - Line 5: `const origin = "https://spineinnovtech.spineworkspace.com";`
- **Path**: `lib/site-url.ts`
  - Line 5: `const DEFAULT_PRODUCTION_ORIGIN = "https://spineinnovtech.spineworkspace.com";`
- **`npm run check` baseline execution**:
  - `npm run lint` passes (72 routes discovered).
  - `npm run audit:site` fails with `FAIL: corporate pricing must link to the local product-details page` because `app/pricing/page.tsx` was edited previously to link to `https://spineworkspace.com/pricing` without retaining a link to `/product`.
  - `npm run typecheck` (`tsc --noEmit`) exited with 127 (`tsc: command not found`) because `node_modules` is currently not installed in the workspace root.

---

## 2. Logic Chain

1. **R1 Production Custom Domain Mapping**:
   - `ORIGINAL_REQUEST.md` (R1) and acceptance criteria mandate that `wrangler.jsonc` specifies `spineinnovtech.com` and `www.spineinnovtech.com` under `env.prod.routes`.
   - By observation 1.1, `wrangler.jsonc` only binds `spineinnovtech.spineworkspace.com` and `spineinnovtech.spineworkspace.com`.
   - Therefore, `wrangler.jsonc` must add route objects with `pattern: "spineinnovtech.com"` (`custom_domain: true`) and `pattern: "www.spineinnovtech.com"` (`custom_domain: true`).
   - Legacy routes (`spineinnovtech.spineworkspace.com` and `spineinnovtech.spineworkspace.com`) must remain in `env.prod.routes` so that Cloudflare routes inbound legacy traffic into the Worker for 301 redirection.

2. **R1 Legacy Hostnames 301 Redirection**:
   - In `worker/index.ts`, `maybeCanonicalRedirect` redirects any hostname present in `env.LEGACY_REDIRECT_HOSTS` to `env.CANONICAL_SITE_URL` via HTTP 301, preserving `url.pathname + url.search`.
   - By observation 1.1, `CANONICAL_SITE_URL` is currently `"https://spineinnovtech.spineworkspace.com"` and `LEGACY_REDIRECT_HOSTS` does not include `spineinnovtech.spineworkspace.com`.
   - Therefore, `CANONICAL_SITE_URL` must be changed to `"https://spineinnovtech.com"`, and `LEGACY_REDIRECT_HOSTS` must include `spineinnovtech.spineworkspace.com,spineinnovtech.spineworkspace.com,spineinnovtech.com,www.spineinnovtech.com,www.spineinnovtech.com`.
   - Adding hardcoded fallback defaults in `worker/index.ts` ensures resilience if environment variables are unset.

3. **R1 DNS Architecture Requirements**:
   - For `spineinnovtech.com` in Cloudflare Dashboard:
     * Apex (`@` / `spineinnovtech.com`): Cloudflare CNAME flattening requires a Proxied CNAME or Cloudflare Custom Domain record. When a Worker Custom Domain is provisioned in the Cloudflare dashboard/API via `custom_domain: true`, Cloudflare automatically provisions the DNS entry and issues Edge TLS certificates.
     * `www.spineinnovtech.com`: CNAME record pointing to `spineinnovtech.com` (or Worker Custom Domain target), Proxied (`orange cloud`), TTL Auto.
     * SSL/TLS encryption mode must be Full (Strict) with Universal SSL active.
     * "Always Use HTTPS" must be enabled.
   - For legacy hostnames (`spineworkspace.com` and `spineinnovtech.com` zones):
     * `spineinnovtech.spineworkspace.com`: Proxied CNAME in `spineworkspace.com` zone pointing to the Worker custom domain.
     * `spineinnovtech.spineworkspace.com`: Proxied CNAME in `spineworkspace.com` zone pointing to the Worker custom domain.
     * `spineinnovtech.com` / `www.spineinnovtech.com`: Proxied CNAME / A records in `spineinnovtech.com` zone routed to the Worker.

4. **R4 Cross-Site Destination Separation**:
   - The user request establishes strict separation among three distinct target domains:
     1. Product marketing: `https://spineworkspace.com` (apex)
     2. Authentication: `https://auth.spineworkspace.com` (auth origin)
     3. Live application: `https://app.spineworkspace.com` (app origin)
   - By observation 1.4, `lib/workspace-entry.ts` currently sends auth actions (`signup` and `login`) to `SPINE_WORKSPACE_APEX` (`https://spineworkspace.com/signup`).
   - Therefore, `lib/workspace-entry.ts` must be updated to import `AUTH_ORIGIN` from `./site-urls` and generate `signup` and `login` URLs targeting `AUTH_ORIGIN` (`https://auth.spineworkspace.com`).
   - A dedicated helper `appEntryUrl(pathname)` must be added in `lib/workspace-entry.ts` utilizing `SPINE_WORKSPACE_APP` (`https://app.spineworkspace.com`).
   - In `worker/index.ts`, `maybeProductEntryRedirect` must be updated so that requests to `/login` and `/signup` redirect to `https://auth.spineworkspace.com/login` and `/signup`, while `/workspace` redirects to `https://app.spineworkspace.com`.

5. **R4 Solution Taxonomy & Lens Alignment**:
   - By observation 1.4, `memoryandknowledge` is defined in `PUBLIC_SOLUTIONS` (slug: `memoryandknowledge`) and `SOLUTION_DOMAINS` (slug: `memoryandknowledge`), but is missing from `solutionLensSlugs` in `lib/workspace-entry.ts`.
   - On the product site (`spineworkspace-live/apps/marketing`), `SOLUTION_DOCS` defines `"knowledge-records"`, and `solution-taxonomy.ts` defines `href: "/solutions/memoryandknowledge"`.
   - Therefore, adding `memoryandknowledge: "knowledge-records"` (or `"memoryandknowledge"`) to `solutionLensSlugs` ensures that calling `productSiteUrl("/solutions/memoryandknowledge")` resolves directly to the matching product solution page without falling back to `/solutions`.
   - Adding missing industry slugs (`saas`, `services`, `professional-services`, `manufacturing`, `retail`) prevents dead ends or internal path leakage across all 20 public solutions.

6. **R4 Header, Footer, and CTA Audit**:
   - `lib/navigation.ts`:
     * Line 31 `featured`: Update `href` from `"/product"` to `"https://spineworkspace.com"`.
     * Line 76 `footerColumns`: Update `SpineWorkspace` link to `href: "https://spineworkspace.com"`, `external: true`.
   - `components/final-cta.tsx`:
     * Line 27: Update `href` from `"/product"` to `"https://spineworkspace.com"` (with `ArrowUpRight`).
   - `components/header.tsx`:
     * Sign-in / Sign-up buttons use `authLinks.login` and `authLinks.signup`, which will resolve to `https://auth.spineworkspace.com` upon updating `lib/workspace-entry.ts`.
   - `components/marketing/workspace-auth-actions.tsx`:
     * Uses `workspaceEntryLinks`, resolving to `https://auth.spineworkspace.com`.

7. **Test & Assertion Script Co-Alignment**:
   - Updating the canonical domain and auth destination requires synchronizing the test harness:
     * `scripts/check-cloudflare-config.mjs`: Update assertions to check for `spineinnovtech.com` and `www.spineinnovtech.com` in `routes`, and `CANONICAL_SITE_URL === "https://spineinnovtech.com"`.
     * `scripts/check-release-preflight.mjs`: Update to check `spineinnovtech.com` in routes.
     * `scripts/verify-auth-entry.mjs`: Update line 34 from `assert.equal(url.origin, "https://spineworkspace.com")` to `assert.equal(url.origin, "https://auth.spineworkspace.com")`, and remove/adjust line 42 (`!html.includes("https://app.spineworkspace.com")`).
     * `scripts/verify-static-artifact.mjs`: Update lines 50–56 to verify `sitemap.includes("spineinnovtech.com")` and `llmsTxt.includes("https://spineinnovtech.com")`.
     * `scripts/verify-corporate-coverage.mjs` & `scripts/verify-live-site.mjs`: Update `origin` constant to `https://spineinnovtech.com`.
     * `scripts/audit-corporate-site.mjs`: Ensure `app/pricing/page.tsx` retains a link to `/product` (e.g. secondary navigation) so line 97 passes.

---

## 3. Caveats

1. **Read-only Investigation**: In accordance with the explorer role constraints, no changes to application code, configurations, or scripts were made during this phase.
2. **Cloudflare Dashboard & Live DNS**: Actual DNS record creation and custom domain activation occur within the Cloudflare dashboard/API. Wrangler configuration declares the desired repository state, but Cloudflare zone credentials and active nameserver delegation for `spineinnovtech.com` are external prerequisites.
3. **`node_modules` Not Installed**: `node_modules` is not currently present in `/Users/nirmal/Github/spinemarketing-magic-ui`. An `npm ci` step is required before executing `npm run typecheck`, `npm run build`, or `npm run check`.
4. **Infisical & Cache Purge Token**: `scripts/purge-cloudflare-cache.mjs` targets zone `e400477f3fc2b13a70dd3d63407ce21b` (`spineworkspace.com`). If cache purging is needed for `spineinnovtech.com`, a separate Zone ID for `spineinnovtech.com` should be documented.

---

## 4. Conclusion

### 4.1 Required Changes for R1 (Domain Cutover & Cloudflare Worker)
1. **`wrangler.jsonc`**:
   - Update `env.prod.routes` to:
     ```jsonc
     "routes": [
       { "pattern": "spineinnovtech.com", "custom_domain": true },
       { "pattern": "www.spineinnovtech.com", "custom_domain": true },
       { "pattern": "spineinnovtech.spineworkspace.com", "custom_domain": true },
       { "pattern": "spineinnovtech.spineworkspace.com", "custom_domain": true }
     ]
     ```
   - Update `env.prod.vars`:
     ```jsonc
     "vars": {
       "CANONICAL_REDIRECTS_ENABLED": "true",
       "CANONICAL_SITE_URL": "https://spineinnovtech.com",
       "LEGACY_REDIRECT_HOSTS": "spineinnovtech.spineworkspace.com,spineinnovtech.spineworkspace.com,spineinnovtech.com,www.spineinnovtech.com,www.spineinnovtech.com"
     }
     ```
2. **`config.yaml`**:
   - Update `prod.spine_innovlabs.public_url` to `https://spineinnovtech.com`.
   - Update `prod.spine_innovlabs.canonical_url` to `https://spineinnovtech.com`.
   - Update `legacy_redirect_hosts` to include `spineinnovtech.spineworkspace.com`, `www.spineinnovtech.com`, `spineinnovtech.spineworkspace.com`, `www.spineinnovtech.com`, `spineinnovtech.com`.
   - Update `build.prod_site_url` to `https://spineinnovtech.com`.
3. **`worker/index.ts`**:
   - In `maybeProductEntryRedirect`:
     * Redirect `/login` and `/signup` (with `url.search`) to `https://auth.spineworkspace.com/login` and `/signup` (HTTP 302).
     * Redirect `/workspace` to `https://app.spineworkspace.com` (HTTP 302).
     * Redirect `/onboarding` to `https://spineworkspace.com/get-started` (HTTP 302).
   - In `maybeCanonicalRedirect`:
     * Add fallback defaults for `canonicalBase` (`https://spineinnovtech.com`) and `legacyHosts` if env vars are unset.
4. **`lib/site-url.ts` & `config/cloudflare-builds.json`**:
   - Update `DEFAULT_PRODUCTION_ORIGIN` to `"https://spineinnovtech.com"`.
   - Update `NEXT_PUBLIC_SITE_URL` to `"https://spineinnovtech.com"`.
5. **DNS Specifications for Cloudflare Dashboard**:
   - Zone `spineinnovtech.com`:
     * Record 1: Type `CNAME`, Name `@`, Content `spineinnovtech.com` Worker Custom Domain target, Proxied (Orange cloud), TTL Auto.
     * Record 2: Type `CNAME`, Name `www`, Content `spineinnovtech.com`, Proxied (Orange cloud), TTL Auto.
     * SSL/TLS: Full (Strict), Universal SSL / Edge Certificate enabled. Always Use HTTPS: ON. Minimum TLS: 1.2.
   - Zone `spineworkspace.com`:
     * `spineinnovtech.spineworkspace.com`: CNAME, Proxied to Worker.
     * `spineinnovtech.spineworkspace.com`: CNAME, Proxied to Worker.
   - Zone `spineinnovtech.com`:
     * `@` and `www`: CNAME, Proxied to Worker.

### 4.2 Required Changes for R4 (Cross-Site Routing & Solution Entry Alignment)
1. **`lib/workspace-entry.ts`**:
   - Import `AUTH_ORIGIN` and `SPINE_WORKSPACE_APP` from `./site-urls`.
   - In `solutionLensSlugs`:
     * Add `memoryandknowledge: "knowledge-records"` (and `"memoryandknowledge"` alias).
     * Add `saas: "saas"`, `"professional-services": "professional-services"`, `manufacturing: "manufacturing"`, `retail: "retail"`.
   - In `workspaceEntryLinks`:
     * Construct `signup` and `login` using `AUTH_ORIGIN` (`https://auth.spineworkspace.com`) instead of `SPINE_WORKSPACE_APEX`.
     * Export `appEntryUrl(pathname)` pointing to `SPINE_WORKSPACE_APP` (`https://app.spineworkspace.com`).
2. **`lib/navigation.ts`**:
   - Update `headerNavigation` line 31 `featured.href` to `"https://spineworkspace.com"`.
   - Update `footerColumns` line 76 `SpineWorkspace` link to `href: "https://spineworkspace.com"`, `external: true`.
3. **`components/final-cta.tsx`**:
   - Update line 27 `Explore SpineWorkspace` link to `href="https://spineworkspace.com"`.
4. **`app/pricing/page.tsx`**:
   - Retain/add an explicit link to `/product` (e.g. "Review SpineWorkspace architectural capabilities on the [product details page](/product)") so `scripts/audit-corporate-site.mjs` line 97 succeeds.
5. **Verification & QA Scripts**:
   - Synchronize `check-cloudflare-config.mjs`, `check-release-preflight.mjs`, `verify-auth-entry.mjs`, `verify-static-artifact.mjs`, `verify-corporate-coverage.mjs`, and `verify-live-site.mjs` with the new canonical domain (`spineinnovtech.com`) and auth origin (`auth.spineworkspace.com`).

---

## 5. Verification Method

To independently verify these findings and subsequently validate the implementation:

1. **Static Analysis & Preflight**:
   ```bash
   cd /Users/nirmal/Github/spinemarketing-magic-ui
   npm ci --no-audit --no-fund
   npm run check
   ```
   *Expected Result*: `lint`, `audit:site`, `check:cloudflare`, and `typecheck` complete with exit code 0.

2. **Artifact & Static Export Build**:
   ```bash
   npm run build:cloudflare
   ```
   *Expected Result*: Produces static export in `./out`, passes `verify:artifact` and `verify-corporate-coverage.mjs`.

3. **Domain & Route Programmatic Inspection**:
   - Inspect `wrangler.jsonc` to confirm `spineinnovtech.com` and `www.spineinnovtech.com` are present under `env.prod.routes`.
   - Inspect generated `./out/sitemap.xml` and `./out/llms.txt` to confirm all absolute URLs use `https://spineinnovtech.com`.
   - Inspect generated HTML files in `./out/solutions/*.html` and `./out/product.html` to confirm:
     * Sign-up/Sign-in links point to `https://auth.spineworkspace.com/signup` and `/login` with valid `next` parameters.
     * Product CTAs point to `https://spineworkspace.com`.
     * No broken solution slug links or unresolved redirects exist.

4. **Worker Unit Test / Local Simulation**:
   ```bash
   npx wrangler dev --env prod
   ```
   - Request `http://localhost:<port>` with `Host: spineinnovtech.spineworkspace.com/solutions/sales?ref=123`.
   - Verify HTTP 301 response with `Location: https://spineinnovtech.com/solutions/sales?ref=123`.
   - Request `http://localhost:<port>/login`.
   - Verify HTTP 302 response with `Location: https://auth.spineworkspace.com/login`.
