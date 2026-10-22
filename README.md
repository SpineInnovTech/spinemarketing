# Spine InnovTech — Corporate Website

The official company website for **Spine InnovTech**, builder of **Spine Workspace**. This repository contains company, technology, solutions, resources and corporate marketing pages.

- **Corporate site:** https://spineinnovtech.spineworkspace.com/
- **Source:** `SpineInnovTech/spinemarketing`, `main`
- **Host:** Cloudflare Workers + Static Assets
- **Production Worker:** `spineinnovtech-marketing`
- **Deployment:** **Cloudflare Workers Builds (GitHub integration)** — no CircleCI dependency
- **Framework:** Next.js 16 static export, npm + `package-lock.json`
- **Content:** Sanity at build time (with a legacy-content fallback)
- **Spine Workspace product details:** `/product` — features, workflow, and underlying technology. Marketing product links stay on this site.

## Local development

Node.js 22 and npm:

```bash
npm ci
npm run dev
```

## Release checks

```bash
npm ci
npm run check              # Repository audit, Cloudflare config, typecheck
npm run build:cloudflare   # All checks + static export + artifact validation
npm run deploy:cloudflare  # Wrangler prod deploy + live corporate smoke test
```

The last command **requires Cloudflare credentials and a successful build**. Never publish by skipping failed checks. Cloudflare Workers Builds runs build and deploy automatically when the Cloudflare dashboard has been connected to GitHub.

The legacy CircleCI workflow and its repository configuration have been retired. To finish the one-time connection, follow [Cloudflare deployment instructions](docs/DEPLOYMENT.md) and the exact dashboard settings in [`config/cloudflare-builds.json`](config/cloudflare-builds.json). Cloudflare account setup, deployment completion, and the public route must still be verified separately.

## Repository layout

- `app/` — static Next.js marketing pages and metadata routes
- `components/` — corporate brand, navigation and content
- `content/`, `lib/content/` — legacy and Sanity content sources
- `config/` — cross-site marketing and Cloudflare builds reference
- `worker/`, `wrangler.jsonc` — production Cloudflare Worker and static assets
- `scripts/` — source, build, and live verification
- `docs/audit/CORPORATE-WEBSITE-2026-10-08.md` — 71-route corporate source audit

Vercel and the authenticated Workbench are **not** the deployment target for this website. `vercel.json` disables Git-based Vercel deployments.
