## 2026-10-21T14:44:07Z
You are the Project Orchestrator.
Your working directory is: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/orchestrator_1
The project root is: /Users/nirmal/Github/spinemarketing-magic-ui
The target export workspace is: /Users/nirmal/Github/spineworkspace-live/apps/marketing

The authoritative user request is recorded in:
/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md

User Request Summary:
Requested team: Full multi-agent team with separate research, implementation, and QA streams.
Execute the corporate site domain cutover to spineinnovtech.com on Cloudflare, realign the corporate homepage to display diagrammatic architecture representations instead of product workbench views, export the workbench views to the Spine Workspace product marketing site, and establish clean cross-domain routing to spineworkspace.com, auth.spineworkspace.com, and app.spineworkspace.com.

Requirements & Acceptance Criteria:
R1. Corporate Domain Cutover & Cloudflare Worker Configuration
- wrangler.jsonc specifies spineinnovtech.com and www.spineinnovtech.com under env.prod.routes.
- config.yaml and Cloudflare build settings configured for spineinnovtech.com and www.spineinnovtech.com.
- worker/index.ts redirects legacy hosts (spineinnovlabs.*, spineinnovtech.spineworkspace.com) to https://spineinnovtech.com with 301 preserving path and query strings.
- Document exact DNS records (CNAME/apex flattening) required in Cloudflare dashboard for spineinnovtech.com.

R2. Realign Corporate Homepage to Diagrammatic Architecture
- Refactor corporate homepage (components/marketing/innovlabs-home.tsx and related) to display clean diagrammatic representations (e.g. system architecture, orbital fabric, context layers) instead of product workbench views.
- Remove product-specific workbench views/storyboards (workbench-hero-preview.tsx or similar interactive role workbenches) from corporate homepage.

R3. Export Workbench Views to Spine Workspace Product Marketing
- Package and transfer interactive workbench views and storyboards into ../spineworkspace-live/apps/marketing so they are displayed on the product marketing site (spineworkspace.com).
- Adapt imports and ensure ../spineworkspace-live/apps/marketing builds cleanly.

R4. Cross-Site Routing and Entry Link Alignment
- Audit and standardize all corporate header, footer, CTA, and contextual navigation links across spinemarketing-magic-ui:
  - Product marketing links -> https://spineworkspace.com
  - Auth / sign-in / sign-up -> https://auth.spineworkspace.com
  - Live workbench / application -> https://app.spineworkspace.com
- Verify lib/workspace-entry.ts, lib/site-urls.ts, lib/navigation.ts, lib/solution-taxonomy.ts correctly resolve these cross-domain destinations without dead ends or internal path leakage.

R5. Verification and Quality Assurance
- Run static analysis, type checking, and artifact validation scripts (npm run check and npm run build:cloudflare) on spinemarketing-magic-ui.
- Programmatically verify external links to spineworkspace.com, auth.spineworkspace.com, app.spineworkspace.com use valid HTTPS URLs and expected paths.
- Verify ../spineworkspace-live/apps/marketing builds cleanly with newly integrated workbench views.
