# Original User Request

## 2026-10-21T14:42:51Z

Requested team: Full multi-agent team with separate research, implementation, and QA streams

Execute the corporate site domain cutover to spineinnovtech.com on Cloudflare, realign the corporate homepage to display diagrammatic architecture representations instead of product workbench views, export the workbench views to the Spine Workspace product marketing site, and establish clean cross-domain routing to spineworkspace.com, auth.spineworkspace.com, and app.spineworkspace.com.

Working directory: /Users/nirmal/Github/spinemarketing-magic-ui
Integrity mode: development

## Requirements

### R1. Corporate Domain Cutover & Cloudflare Worker Configuration
- Configure `wrangler.jsonc`, `config.yaml`, and Cloudflare build settings in `spinemarketing-magic-ui` for `spineinnovtech.com` and `www.spineinnovtech.com` as the primary production custom domains.
- Configure HTTP 301 canonical redirects in `worker/index.ts` from legacy hostnames (`spineinnovtech.spineworkspace.com`, `spineinnovlabs.spineworkspace.com`, `spineinnovlabs.com`, `www.spineinnovlabs.com`) to `https://spineinnovtech.com`.
- Document the exact DNS records (CNAME/apex flattening) required in Cloudflare dashboard for `spineinnovtech.com`.

### R2. Realign Corporate Homepage to Diagrammatic Architecture
- Refactor the corporate homepage (`components/marketing/innovlabs-home.tsx` and related components) so it displays clean diagrammatic representations (e.g., system architecture, orbital fabric, context layers) rather than interactive workbench views.
- Remove product-specific workbench views/storyboards (`workbench-hero-preview.tsx` or similar interactive role workbenches) from the corporate homepage.

### R3. Export Workbench Views to Spine Workspace Product Marketing
- Package and transfer the interactive workbench views and storyboards into `../spineworkspace-live/apps/marketing` so they are displayed on the product marketing site (`spineworkspace.com`).
- Ensure dependencies and components imported by the workbench views are properly resolved or adapted for the target Next.js app in `spineworkspace-live`.

### R4. Cross-Site Routing and Entry Link Alignment
- Audit and standardize all corporate header, footer, CTA, and contextual navigation links across `spinemarketing-magic-ui`:
  - Product marketing links target `https://spineworkspace.com`.
  - Authentication and sign-in/sign-up actions target `https://auth.spineworkspace.com`.
  - Live workbench/application access targets `https://app.spineworkspace.com`.
- Verify `lib/workspace-entry.ts`, `lib/site-urls.ts`, `lib/navigation.ts`, and `lib/solution-taxonomy.ts` correctly resolve these cross-domain destinations without dead ends or internal path leakage.

### R5. Verification and Quality Assurance
- Run static analysis, type checking, and artifact validation scripts (`npm run check` and `npm run build:cloudflare`) on `spinemarketing-magic-ui`.
- Programmatically verify that all external links to `spineworkspace.com`, `auth.spineworkspace.com`, and `app.spineworkspace.com` use valid HTTPS URLs and expected paths.
- Verify `../spineworkspace-live/apps/marketing` builds cleanly with the newly integrated workbench views.

## Acceptance Criteria

### Domain & Redirects
- [ ] `wrangler.jsonc` specifies `spineinnovtech.com` and `www.spineinnovtech.com` under `env.prod.routes`.
- [ ] `worker/index.ts` redirects legacy hosts (`spineinnovlabs.*`, `spineinnovtech.spineworkspace.com`) to `https://spineinnovtech.com` with status 301 while preserving path and query strings.

### Corporate Homepage Presentation
- [ ] Homepage showcases diagrammatic architecture representations of Spine InnovTech technology.
- [ ] Interactive workbench views are removed from the corporate homepage and no longer render in `InnovLabsHome`.

### Product Site Integration
- [ ] Workbench views are exported and functional within `../spineworkspace-live/apps/marketing`.
- [ ] All corporate CTAs point cleanly to `https://spineworkspace.com`, `https://auth.spineworkspace.com`, and `https://app.spineworkspace.com`.

### Build & Verification
- [ ] `npm run check` succeeds with 0 errors in `spinemarketing-magic-ui`.
- [ ] `npm run build:cloudflare` completes successfully and produces valid static export in `./out`.
- [ ] No broken routes or unmapped solution slugs in `lib/workspace-entry.ts`.
