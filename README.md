# Spine InnovTech corporate website

This branch contains the company website, including the existing interactive workbench illustration. Spine Workspace product discovery, plans, documentation, and account entry remain on their dedicated sites.

## Public destinations

`src/lib/site-links.ts` owns cross-site destinations. Vite reads these optional public build settings:

| Setting | Default |
| --- | --- |
| `VITE_CORPORATE_URL` | `https://spineinnovtech.spineworkspace.com` |
| `VITE_PRODUCT_URL` | `https://spineworkspace.com` |
| `VITE_WORKSPACE_URL` | `https://app.spineworkspace.com` |
| `VITE_DOCUMENTATION_URL` | `https://docs.spineworkspace.com` |

Use HTTPS origins without credentials, paths, queries, or fragments. HTTP is allowed only for local loopback previews. These settings contain public URLs, never secrets.

“Open workspace” enters `/workspace/my-work` on the existing app. Signup and login use that app's entry routes with a fixed workspace return path. OneAuth, session resolution, tenant authorization, and onboarding belong to the app; the corporate site does not create accounts or share browser credentials. Keep the existing template authentication disabled with `VITE_AUTH_ENABLED=false` for this public marketing deployment.

Cross-site product links add explicit referral tags. Incoming URL parameters are not forwarded. Canonicals and the sitemap use the corporate origin, independently of the product site's SEO and analytics settings; no analytics provider or shared visitor identity is added here. Redirect aliases are omitted from the sitemap.

## Local checks

Use the existing package scripts so the preview environment wrapper remains active. On a host without the Grok sandbox's `/workspace` path, start the package scripts directly; the sandbox-only startup and screenshot helpers retain their original guards.

```sh
npm ci --ignore-scripts
VITE_AUTH_ENABLED=false npm run dev
npm run test:site
npm run typecheck
npm run lint
VITE_AUTH_ENABLED=false DATABASE_URL='' npm run build
VITE_AUTH_ENABLED=false DATABASE_URL='' npm run preview -- --host 127.0.0.1 --port 8081 --strictPort
```

The empty database setting skips the existing optional migration step for a local marketing-only build. Do not replace deployment database settings or introduce a second account system for this integration.

## Production: Cloudflare only

The production hostname is **https://spineinnovtech.spineworkspace.com**. The native Nitro `cloudflare_module` build runs on Worker `spineinnovtech-corporate-site`. `vite.config.ts` owns the generated Wrangler settings. Both workers.dev and preview URLs are disabled, and the only custom-domain route is the corporate hostname. The legacy company hostname retains its existing redirect.

Wrangler is pinned in the lockfile so local validation and deployment use the same Workers runtime tooling. The dedicated marketing build sets the public auth flag to false and does not run the optional database migrator.

```sh
npm ci --ignore-scripts
npm run test:site
npm run typecheck
npm run build:cloudflare
npm exec -- wrangler deploy --dry-run --config .output/server/wrangler.json
npm run deploy:cloudflare
```

`vercel.json` disables all automatic Git deployments. The corporate Vercel project has no configured domains or aliases; its automatic preview publishing is disabled. Historical deployments are retained behind project authentication. No Vercel endpoint is used as a production origin.
