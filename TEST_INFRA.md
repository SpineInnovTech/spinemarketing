# E2E Test Suite Infrastructure & Architecture Specification (`TEST_INFRA.md`)

**Target Workspace**: `/Users/nirmal/Github/spinemarketing-magic-ui`  
**Cross-Repo Workspace**: `/Users/nirmal/Github/spineworkspace-live/apps/marketing`  
**Test Runner**: `node scripts/test-e2e.mjs`  
**Integrity Mode**: Opaque-box / Production Contract Validation  
**Last Updated**: 2026-10-21  

---

## 1. Overview & Testing Philosophy

This test infrastructure implements a comprehensive, opaque-box End-to-End (E2E) verification system for the Spine InnovTech corporate marketing domain cutover, Cloudflare Worker edge routing, homepage diagrammatic architecture realignment, workbench export to the Spine Workspace product marketing application, and cross-domain solution entry alignment.

### Core Principles
1. **Opaque-Box Verification**: Tests inspect only observable external contracts — HTTP status codes, redirection locations, response headers, DNS record specifications, exported static artifacts, component exports, DOM structures, and link URLs. Internal implementation details are never asserted without functional relevance.
2. **Authoritative Expected Output Derivation**: Every test case derives its expected value strictly from the authoritative specifications in `PROJECT.md § Feature Inventory`, `PROJECT.md § Interface Contracts`, and `ORIGINAL_REQUEST.md § Requirements (R1–R5)`. No expected values are guessed or tailored to pass broken implementations.
3. **Progressive Testability & Zero-Dependency Execution**: The test runner is written in native Node.js ESM (`node:assert`, `node:fs`, `node:path`, `node:url`, `node:vm`, `node:child_process`) and requires zero external npm packages to execute. It can run in pre-install environments as well as CI/CD pipelines.
4. **Test Integrity**: Zero facade tests. Every test executes real assertion logic. If a feature is incomplete or defective, the test fails with unambiguous diagnostics and expected vs. actual values.

---

## 2. Test Architecture & Directory Layout

```
spinemarketing-magic-ui/
├── scripts/
│   ├── test-e2e.mjs                    # Main E2E test runner (Tiers 1–4)
│   ├── check-cloudflare-config.mjs     # Cloudflare build & repo contract check
│   ├── audit-corporate-site.mjs        # Static route and link integrity check
│   ├── verify-auth-entry.mjs           # Funnel and authentication link validator
│   └── verify-static-artifact.mjs      # Production static export validator
├── worker/
│   └── index.ts                        # Cloudflare Worker edge handler
├── config.yaml                         # Site URLs and redirect environments
├── wrangler.jsonc                      # Cloudflare Worker configuration & routes
├── docs/
│   └── CLOUDFLARE_DNS_SETUP.md         # DNS and SSL/TLS configuration specification
├── TEST_INFRA.md                       # This document (Test Infrastructure Spec)
└── TEST_READY.md                       # Test readiness report & coverage breakdown
```

### Edge Worker In-Memory Simulation
For edge routing tests (Features 4 & 5, and Tiers 2–4), `scripts/test-e2e.mjs` utilizes standard Web APIs (`Request`, `Response`, `Headers`, `URL`) natively available in modern Node.js runtimes. Edge requests are dispatched directly into the Cloudflare Worker request handler (`worker.fetch(request, env)`) using custom mock asset fetchers, accurately evaluating 301 canonical redirects, 302 entry redirects, and security header injection.

---

## 3. Four-Tier Test Pyramid

The E2E suite is organized into four rigorous testing tiers:

```
                      ▲
                     / \
                    /   \
                   / T4  \     Tier 4: Real-World Scenarios (6 user journeys)
                  /-------\
                 /  T3     \   Tier 3: Cross-Feature Combinations (10 multi-feature tests)
                /-----------\
               /    T2       \ Tier 2: Boundary & Corner Cases (15 boundary tests)
              /---------------\
             /      T1         \ Tier 1: Feature Coverage (23 features x >=5 tests = 115 tests)
            /-------------------\
```

### Tier 1: Feature Coverage (>=5 Tests per Feature, All 23 Features)
Every feature listed in `PROJECT.md § Feature Inventory` is covered by at least 5 dedicated, isolated test cases:

| Feature # | Feature Name | Test Scope | Minimum Tests |
|---|---|---|:---:|
| 1 | `wrangler.jsonc` Routes | Apex route, www route, prod env placement, legacy routes, pattern formatting | 5 |
| 2 | `wrangler.jsonc` Vars | Canonical redirects enabled, canonical URL, legacy redirect hosts list, trailing slash hygiene | 5 |
| 3 | `config.yaml` URLs | Prod public URL, prod canonical URL, legacy redirect hosts, build prod URL, env consistency | 5 |
| 4 | Worker 301 Redirects | Legacy host 301, www 301, path preservation, query preservation, non-legacy bypass | 5 |
| 5 | Worker Auth/App Entry | `/login` 302 to auth, `/signup` 302 to auth, `/workspace` 302 to app, query preservation, passthrough | 5 |
| 6 | Cloudflare DNS Spec | File existence, apex flattening/ALIAS record, www CNAME, Full (strict) SSL, orange cloud proxy | 5 |
| 7 | Architecture Storyboard | Component export, Context Fabric scene, Hermes Governance scene, Host Continuity scene, diagrammatic purity | 5 |
| 8 | Realign InnovLabs Home | Removal of workbench hero, wiring of architecture storyboard, brand identity retained, storyboard badge retained, no dead anchors | 5 |
| 9 | Realign Benefits Links | Removal of workbench hash links, architecture links, product links, secondary hero action alignment, no stale anchors | 5 |
| 10 | Package Workbench Code | Export of 8 workbench components, responsive CSS module, UI primitives (`border-beam`, `magic-card`) | 5 |
| 11 | Export Workbench Data/Media | Source views data, screenshots catalog, capture review data, WebP image directory, video recordings (`.mp4`, `.vtt`) | 5 |
| 12 | Product Workbench Route | Route `app/product/workbench/page.tsx` exists, imports explorer, metadata defined, client/server safety, 23-domain view coverage | 5 |
| 13 | Product Home Integration | Product home component exists, embeds `WorkbenchHeroPreview`, 3-scene interactivity, CTA to workbench explorer, styling integrity | 5 |
| 14 | Adapt Exported Links | Links target `/product/workbench`, host links target `/connect/hosts`, zero corporate internal leakages, HTTPS external corporate links, valid relative paths | 5 |
| 15 | Solution Lens Slugs | `memoryandknowledge: "knowledge-records"` mapping, `solutionDomains` completeness, `productSiteUrl` resolution, unmapped slug fallback, root/pricing resolution | 5 |
| 16 | Auth Destination Links | Signup targets `auth.spineworkspace.com`, login targets `auth.spineworkspace.com`, `next` parameter preserved, `entry_domain` preserved, default fallback `/workspace/my-work` | 5 |
| 17 | App Destination Links | `appEntryUrl` export, defaults to `app.spineworkspace.com`, deep path resolution, leading slash normalization, query string preservation | 5 |
| 18 | Nav & Header/Footer CTAs | Final CTA targets `spineworkspace.com`, header featured item targets `spineworkspace.com`, footer links target `spineworkspace.com`, external flags set, HTTPS protocol enforced | 5 |
| 19 | Pricing Page Link Fix | Explicit link to `/product` exists, descriptive link text, audit compliance, starting price US$49 rendered, JSON-LD structured data matches | 5 |
| 20 | Synchronize QA Scripts | `check-cloudflare-config.mjs` checks `spineinnovtech.com`, `verify-auth-entry.mjs` checks `auth.spineworkspace.com`, `verify-static-artifact.mjs` checks new domain, preflight pass, zero stale domain references | 5 |
| 21 | Corporate Site Verification | Check pipeline scripts present, Cloudflare build script has all 6 gates, static export `out/` validation, homepage architecture validation, sitemap/llms.txt domain validation | 5 |
| 22 | Product Site Verification | `package.json` scripts exist, TypeScript compilation compatibility, Next.js config compatibility, UI primitive dependency satisfaction, zero missing imports | 5 |
| 23 | Cross-Domain Link Check | All `spineworkspace.com` links HTTPS, all `auth.spineworkspace.com` links HTTPS, all `app.spineworkspace.com` links HTTPS, zero localhost/staging links, well-formed URL query encoding | 5 |
| **Total** | **Tier 1 Total** | **All 23 Features Covered** | **115 Tests** |

### Tier 2: Boundary & Corner Cases (15 Tests)
- **T2.1**: Query string preservation with multi-param and URL-encoded characters on 301 legacy redirects.
- **T2.2**: Deeply nested paths on legacy hostnames (`/platform/spine-fabric/governance/deep/nested`).
- **T2.3**: Trailing slash preservation and normalization on legacy hostnames.
- **T2.4**: Mixed-case legacy hostname resolution (`SpInEiNnOvLaBs.SpInEwOrKsPaCe.CoM`).
- **T2.5**: Hostname with explicit port numbers (`spineinnovlabs.spineworkspace.com:8443`).
- **T2.6**: Unmapped solution lens slug in `productSiteUrl` (`/solutions/unknown-slug-xyz`).
- **T2.7**: Solution lens slug with trailing slash (`/solutions/memoryandknowledge/`).
- **T2.8**: Auth entry link generation with unknown domain slug (graceful default to `/workspace/my-work`).
- **T2.9**: Auth entry `next` URL parameter encoding integrity with nested special characters.
- **T2.10**: Null/empty/undefined argument handling in URL builders (`productSiteUrl`, `workspaceEntryLinks`, `appEntryUrl`).
- **T2.11**: Trailing slash handling on entry redirect (`/login/` -> `https://auth.spineworkspace.com/login`).
- **T2.12**: Complex query strings on `/signup` entry redirect (`?plan=enterprise&billing=annual`).
- **T2.13**: Deep subpath on `/workspace` entry redirect (`/workspace/work/marketing`).
- **T2.14**: HTTP HEAD method handling on edge redirects (returns 301/302 status and `Location` header).
- **T2.15**: Root and apex URL normalization in `lib/site-url.ts` (double slashes, trailing slashes).

### Tier 3: Cross-Feature Combinations (10 Tests)
- **T3.1**: Canonical redirect + deep path + query string + security headers injection (HSTS, nosniff, DENY).
- **T3.2**: Legacy visitor to `/solutions/memoryandknowledge` -> 301 canonical redirect -> solution lens resolves to `spineworkspace.com/solutions/knowledge-records`.
- **T3.3**: Corporate header CTA -> `spineworkspace.com` -> `/product/workbench` route -> 23-domain interactive view explorer.
- **T3.4**: Solution page -> Auth signup link -> `https://auth.spineworkspace.com/signup?next=...&entry_domain=...`.
- **T3.5**: Worker edge `/workspace` redirect -> `https://app.spineworkspace.com` + `lib/workspace-entry.ts` `appEntryUrl` destination parity.
- **T3.6**: Wrangler production routes match `config.yaml` `legacy_redirect_hosts` and `canonical_url` exactly.
- **T3.7**: Cloudflare DNS specification documentation covers all hostnames declared in `wrangler.jsonc`.
- **T3.8**: Corporate Architecture Storyboard concepts align with `lib/navigation.ts` platform taxonomy.
- **T3.9**: Pricing page retains `/product` link, which points to local product details with starting price US$49 and monthly terms.
- **T3.10**: QA script assertions in `check-cloudflare-config.mjs` align with `wrangler.jsonc` and `config.yaml`.

### Tier 4: Real-World Scenarios (6 User Journeys)
- **T4.1**: **Legacy Corporate Visitor Redirection Flow**: Inbound visitor requesting `http://spineinnovlabs.spineworkspace.com/company?utm_source=partner` is seamlessly redirected via 301 to `https://spineinnovtech.com/company?utm_source=partner` with full path, query, and HSTS security headers.
- **T4.2**: **Enterprise Architect Technical Diagram Evaluation Flow**: Enterprise architect arrives on `spineinnovtech.com`, inspects the diagrammatic architecture storyboard (Context Fabric, Hermes Governance, Host Continuity), clicks platform navigation to inspect governed runtime, and validates pure corporate enterprise architecture without product workbenches.
- **T4.3**: **Product Prospect Solution & Workbench Evaluation Flow**: Prospective customer clicks "SpineWorkspace" from corporate header, lands on `spineworkspace.com`, navigates to `/product/workbench`, interacts with 23-domain workbench views (dashboard, canvas, recording, journey), and clicks "Sign up" leading to `https://auth.spineworkspace.com/signup` with preserved entry context.
- **T4.4**: **Existing Customer Direct Entry Flow**: Existing customer visits `spineinnovtech.com/workspace` or `spineinnovtech.com/login` and is instantly edge-redirected via 302 to `https://app.spineworkspace.com` or `https://auth.spineworkspace.com/login` without hitting static origin.
- **T4.5**: **Cloudflare Edge & Static Asset Cache Integrity Flow**: Document requests (`index.html`, `llms.txt`, `sitemap.xml`) receive `max-age=0, must-revalidate` while immutable assets (`/_next/static/*`, `/images/*`) receive `max-age=31536000, immutable`.
- **T4.6**: **Multi-Domain Solution Taxonomy Audit Flow**: Automated crawler audits all 20 solution pages, verifying that every solution maps to a valid workspace entry link with exact destination, domain lens, and valid auth funnel targets.

---

## 4. Running the Tests

### Complete Suite Execution
```bash
node scripts/test-e2e.mjs
```

### Filtering by Tier
```bash
# Run only Tier 1 (Feature Coverage)
node scripts/test-e2e.mjs --tier 1

# Run only Tier 2 (Boundary & Corner Cases)
node scripts/test-e2e.mjs --tier 2

# Run only Tier 3 (Cross-Feature Combinations)
node scripts/test-e2e.mjs --tier 3

# Run only Tier 4 (Real-World Scenarios)
node scripts/test-e2e.mjs --tier 4
```

### Filtering by Feature
```bash
# Run tests for Feature 4 (Worker 301 Redirects)
node scripts/test-e2e.mjs --feature 4

# Run tests for Feature 15 (Solution Lens Slugs)
node scripts/test-e2e.mjs --feature 15
```

### Verbose Diagnostics
```bash
# Detailed per-test logging and failure stack traces
node scripts/test-e2e.mjs --verbose
```

---

## 5. Authoritative Expected Output Derivation Matrix

| Test Category | Input Condition | Authoritative Source | Expected Output Contract |
|---|---|---|---|
| Feature 1–2: Wrangler Config | `wrangler.jsonc` content | `ORIGINAL_REQUEST.md §R1`, `PROJECT.md §Feature Inventory (1, 2)` | `routes`: `spineinnovtech.com`, `www.spineinnovtech.com`<br>`vars.CANONICAL_SITE_URL`: `https://spineinnovtech.com`<br>`vars.LEGACY_REDIRECT_HOSTS` includes legacy and www |
| Feature 3: Config YAML | `config.yaml` content | `PROJECT.md §Feature Inventory (3)` | `public_url`: `https://spineinnovtech.com`<br>`canonical_url`: `https://spineinnovtech.com`<br>`build.prod_site_url`: `https://spineinnovtech.com` |
| Feature 4: Edge 301 Redirects | Request with legacy host (`spineinnovlabs.*`, `spineinnovtech.spineworkspace.com`) | `ORIGINAL_REQUEST.md §R1`, `PROJECT.md §Interface Contracts (4)` | Status: `301`<br>`Location`: `https://spineinnovtech.com${pathname}${search}` |
| Feature 5: Edge 302 Entry Redirects | Request to `/login`, `/signup`, `/workspace` | `PROJECT.md §Architecture`, `PROJECT.md §Feature Inventory (5)` | `/login` -> `302 https://auth.spineworkspace.com/login`<br>`/signup` -> `302 https://auth.spineworkspace.com/signup`<br>`/workspace` -> `302 https://app.spineworkspace.com/` |
| Feature 6: Cloudflare DNS | `docs/CLOUDFLARE_DNS_SETUP.md` content | `ORIGINAL_REQUEST.md §R1`, `PROJECT.md §Feature Inventory (6)` | Apex flattening, www CNAME, Full (strict) SSL, Proxied status documented |
| Feature 7–8: Architecture Homepage | `innovlabs-home.tsx`, `corporate-architecture-storyboard.tsx` | `ORIGINAL_REQUEST.md §R2`, `PROJECT.md §Feature Inventory (7, 8)` | `WorkbenchHeroPreview` removed; `CorporateArchitectureStoryboard` rendered; Context Fabric, Hermes Governance, Host Continuity present |
| Feature 10–14: Workbench Export | Files in `spineworkspace-live/apps/marketing` | `ORIGINAL_REQUEST.md §R3`, `PROJECT.md §Feature Inventory (10-14)` | 8 components, CSS module, 2 UI primitives, 3 data files, media assets, `/product/workbench` page, `product-home.tsx` integration |
| Feature 15–17: Solution & Auth Links | `lib/workspace-entry.ts` functions | `ORIGINAL_REQUEST.md §R4`, `PROJECT.md §Interface Contracts (1, 2, 3)` | `memoryandknowledge` -> `knowledge-records`<br>`signup`/`login` -> `https://auth.spineworkspace.com`<br>`appEntryUrl` -> `https://app.spineworkspace.com` |
| Feature 18–19: CTAs & Pricing | `final-cta.tsx`, `navigation.ts`, `app/pricing/page.tsx` | `ORIGINAL_REQUEST.md §R4`, `PROJECT.md §Feature Inventory (18, 19)` | CTAs point to `https://spineworkspace.com`; pricing page links to `/product`; US$49 starting price |
| Feature 20–23: QA & Verification | QA scripts, static export, cross-domain links | `ORIGINAL_REQUEST.md §R5`, `PROJECT.md §Feature Inventory (20-23)` | QA scripts check `spineinnovtech.com` & `auth.spineworkspace.com`; all external links HTTPS |

---

## 6. Defect Escalation Protocol

When an E2E test fails:
1. **Analyze Failure Classification**:
   - **Test Defect**: The test expectation diverges from `PROJECT.md` or `ORIGINAL_REQUEST.md`. (Action: Test Writer corrects the test).
   - **Implementation Defect**: The test accurately asserts the specification, but the codebase returns incorrect or incomplete behavior. (Action: Test Writer logs exact failure and escalates to the implementing Worker / Orchestrator).
2. **Diagnostic Capture**: Log test name, feature ID, input request/argument, expected output, actual output, and file path.
3. **Escalation Artifact**: Escalate implementation bugs in `handoff.md` with file and line references.
