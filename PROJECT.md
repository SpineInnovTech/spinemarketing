# Project: Spine InnovTech Corporate Domain Cutover, Architecture Homepage & Workbench Export

## Architecture
- **Corporate Site (`spinemarketing-magic-ui`)**:
  - Primary Domain: `https://spineinnovtech.com` (and `www.spineinnovtech.com`)
  - Cloudflare Worker edge routing (`worker/index.ts`):
    - 301 canonical redirects for legacy hosts (`spineinnovtech.*`, `spineinnovtech.spineworkspace.com`).
    - 302 entry redirects for auth (`/login`, `/signup` -> `https://auth.spineworkspace.com`) and workspace (`/workspace` -> `https://app.spineworkspace.com`).
  - Homepage: Pure enterprise architecture representation (`CorporateArchitectureStoryboard` + `CorporateOrbitalHero`), removing product workbench dashboards and canvas storyboards.
  - Cross-site links: Product marketing (`https://spineworkspace.com`), Authentication (`https://auth.spineworkspace.com`), Live App (`https://app.spineworkspace.com`).
- **Product Marketing Site (`spineworkspace-live/apps/marketing`)**:
  - Primary Domain: `https://spineworkspace.com`
  - Hosts interactive workbench views: `WorkbenchViewExplorer` on `/product/workbench` and `WorkbenchHeroPreview` on homepage.
  - Self-contained components, UI primitives (`border-beam`, `magic-card`), data files, and media assets.

## Code Layout
### `spinemarketing-magic-ui`
- `wrangler.jsonc`: Cloudflare Worker prod routes and environment variables.
- `config.yaml`: Canonical site URLs and legacy redirect hosts.
- `config/cloudflare-builds.json`: Build environment variables.
- `worker/index.ts`: Edge handler for canonical 301 and auth/app entry redirects.
- `lib/site-url.ts`, `lib/site-urls.ts`: Origin definitions.
- `lib/workspace-entry.ts`: Solution slug mappings and auth/app link generators.
- `lib/navigation.ts`: Header navigation, footer columns, external product marketing links.
- `components/marketing/innovlabs-home.tsx`: Corporate homepage.
- `components/marketing/corporate-architecture-storyboard.tsx`: Architecture diagram component (Option 1).
- `components/marketing/workspace-benefits.tsx`: Corporate platform benefit links.
- `components/final-cta.tsx`: Cross-domain CTA to `spineworkspace.com`.
- `docs/CLOUDFLARE_DNS_SETUP.md`: Cloudflare DNS and SSL/TLS configuration specification.
- `scripts/*.mjs`: Verification and audit scripts.

### `spineworkspace-live/apps/marketing`
- `components/marketing/workbench/*.tsx`: Transferred workbench components.
- `components/ui/border-beam.tsx`, `components/ui/magic-card.tsx`: UI primitives.
- `lib/workbench-*.ts`: Transferred workbench data libraries.
- `public/images/workbench/`, `public/videos/workbench/`: Media assets.
- `app/product/workbench/page.tsx`: Full interactive workbench explorer route.
- `components/product-home.tsx`: Product homepage embedding workbench hero preview.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | `wrangler.jsonc` Routes | Specify `spineinnovtech.com` and `www.spineinnovtech.com` under `env.prod.routes` | M1 | ORIGINAL_REQUEST §R1 |
| 2 | `wrangler.jsonc` Vars | Update `CANONICAL_SITE_URL` and `LEGACY_REDIRECT_HOSTS` in `env.prod.vars` | M1 | ORIGINAL_REQUEST §R1 |
| 3 | `config.yaml` URLs | Align `public_url`, `canonical_url`, `legacy_redirect_hosts`, and `prod_site_url` to `spineinnovtech.com` | M1 | ORIGINAL_REQUEST §R1 |
| 4 | Worker 301 Redirects | 301 canonical redirects in `worker/index.ts` from legacy hosts preserving path and query strings | M1 | ORIGINAL_REQUEST §R1 |
| 5 | Worker Auth/App Entry | Edge redirects in `worker/index.ts` for `/login`, `/signup` -> `auth.spineworkspace.com` and `/workspace` -> `app.spineworkspace.com` | M1 | ORIGINAL_REQUEST §R1 & §R4 |
| 6 | Cloudflare DNS Spec | Document exact Cloudflare DNS records (apex flattening, CNAME, SSL/TLS settings) in `docs/CLOUDFLARE_DNS_SETUP.md` | M1 | ORIGINAL_REQUEST §R1 |
| 7 | Architecture Storyboard | Create `components/marketing/corporate-architecture-storyboard.tsx` showcasing Context Fabric, Hermes Governance, and Host Continuity | M2 | ORIGINAL_REQUEST §R2 |
| 8 | Realign InnovLabs Home | Remove `WorkbenchHeroPreview` from `innovlabs-home.tsx` and wire `CorporateArchitectureStoryboard`, retaining test badge strings | M2 | ORIGINAL_REQUEST §R2 |
| 9 | Realign Benefits Links | Update `workspace-benefits.tsx` and homepage secondary hero CTA to point to corporate architecture / product | M2 | ORIGINAL_REQUEST §R2 |
| 10 | Package Workbench Code | Export 8 workbench components, 1 CSS module, and 2 UI primitives to `spineworkspace-live/apps/marketing` | M3 | ORIGINAL_REQUEST §R3 |
| 11 | Export Workbench Data/Media | Transfer `lib/workbench-*` data files and `public/images/workbench/`, `public/videos/workbench/` assets | M3 | ORIGINAL_REQUEST §R3 |
| 12 | Product Workbench Route | Wire `WorkbenchViewExplorer` into `apps/marketing/app/product/workbench/page.tsx` | M3 | ORIGINAL_REQUEST §R3 |
| 13 | Product Home Integration | Wire `WorkbenchHeroPreview` into `apps/marketing/components/product-home.tsx` | M3 | ORIGINAL_REQUEST §R3 |
| 14 | Adapt Exported Links | Adapt internal links in transferred workbench components to match product site taxonomy (`/product/workbench`, `/connect/hosts`) | M3 | ORIGINAL_REQUEST §R3 |
| 15 | Solution Lens Slugs | Add `memoryandknowledge: "knowledge-records"` and missing solution domains in `lib/workspace-entry.ts` | M4 | ORIGINAL_REQUEST §R4 |
| 16 | Auth Destination Links | Update `workspaceEntryLinks` in `lib/workspace-entry.ts` to target `https://auth.spineworkspace.com` | M4 | ORIGINAL_REQUEST §R4 |
| 17 | App Destination Links | Add `appEntryUrl` in `lib/workspace-entry.ts` targeting `https://app.spineworkspace.com` | M4 | ORIGINAL_REQUEST §R4 |
| 18 | Nav & Header/Footer CTAs | Standardize header, footer, and `final-cta.tsx` links to `https://spineworkspace.com` | M4 | ORIGINAL_REQUEST §R4 |
| 19 | Pricing Page Link Fix | Retain explicit link to `/product` in `app/pricing/page.tsx` for audit compliance | M4 | ORIGINAL_REQUEST §R4 & §R5 |
| 20 | Synchronize QA Scripts | Update `check-cloudflare-config.mjs`, `check-release-preflight.mjs`, `verify-auth-entry.mjs`, `verify-static-artifact.mjs`, etc., for new domains | M5 | ORIGINAL_REQUEST §R5 |
| 21 | Corporate Site Verification | Run `npm install`, `npm run check`, `npm run build:cloudflare`, and static export validation | M5 | ORIGINAL_REQUEST §R5 |
| 22 | Product Site Verification | Run `tsc --noEmit`, `vitest`, and `next build` / `turbo build` in `spineworkspace-live/apps/marketing` | M5 | ORIGINAL_REQUEST §R5 |
| 23 | Cross-Domain Link Check | Programmatically verify all external links to `spineworkspace.com`, `auth.spineworkspace.com`, `app.spineworkspace.com` | M5 | ORIGINAL_REQUEST §R5 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Domain Cutover & Cloudflare Worker (R1) | Features 1–6: `wrangler.jsonc`, `config.yaml`, `worker/index.ts`, `lib/site-url.ts`, `docs/CLOUDFLARE_DNS_SETUP.md` | none | DONE |
| 2 | Corporate Homepage Architecture (R2) | Features 7–9: `corporate-architecture-storyboard.tsx`, `innovlabs-home.tsx`, `workspace-benefits.tsx` | none | DONE |
| 3 | Workbench Export to Product Site (R3) | Features 10–14: Export components, styles, data, media to `spineworkspace-live/apps/marketing`, integrate into pages, adapt routes | none | DONE |
| 4 | Cross-Site Routing & Solution Entry (R4) | Features 15–19: `lib/workspace-entry.ts`, `lib/navigation.ts`, `components/final-cta.tsx`, `components/header.tsx`, `app/pricing/page.tsx` | M1 | DONE |
| 5 | Verification & Quality Assurance (R5) | Features 20–23: Synchronize QA scripts, build & test verification on both codebases, programmatic link verification | M1, M2, M3, M4 | DONE |

## Interface Contracts
### Corporate Site (`spinemarketing-magic-ui`) ↔ Product Sites (`spineworkspace.com`, `auth.spineworkspace.com`, `app.spineworkspace.com`)
1. **Product Marketing Entry**:
   - Destination: `https://spineworkspace.com`
   - Specific solution destinations: `https://spineworkspace.com/solutions/<lens-slug>` where `lens-slug` maps from `lib/workspace-entry.ts` (`memoryandknowledge` -> `knowledge-records`).
2. **Authentication Entry**:
   - Destination: `https://auth.spineworkspace.com/signup` and `https://auth.spineworkspace.com/login`
   - Query Parameters: `next=/workspace/work/<domain>/<view>` (or `next=/workspace/my-work`) and `entry_domain=<domain>`.
3. **Application Live Workspace**:
   - Destination: `https://app.spineworkspace.com`
4. **Cloudflare Canonical Redirection**:
   - Status: HTTP 301 Moved Permanently
   - Preserves: exact incoming request `pathname` + `search`
   - Canonical Base: `https://spineinnovtech.com`
