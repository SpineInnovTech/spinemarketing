# Spine InnovTech — Corporate Website Audit

**Date:** 8 October 2026  
**Repository:** `SpineInnovTech/spinemarketing`  
**Branch of review:** `audit/corporate-site-all-pages-20261008` (merge before next release)  
**Deployment target:** https://spineinnovtech.spineworkspace.com/  
**Scope:** 71 Next.js route entrypoint files, shared layout/navigation/CTAs, lead capture, security copy, canonical/SEO, product-boundary messaging, and the CircleCI release contract.

## Sign-off boundary

This is a **source/architecture/content audit**, not a claim of a full rendered browser or production audit. The domain still serves an older page until CircleCI credits are restored and the new build deploys. No screenshots, accessibility-tree testing, responsive visual regression, Lighthouse measurements, authenticated form delivery or full Next.js production build have been certified here. Sanity production content also requires build-time/API verification.

## Findings and disposition

| Priority | Finding | Action |
| --- | --- | --- |
| P0 | Corporate hostname still showed the former product homepage | New Spine InnovTech homepage is wired in source; CircleCI + Cloudflare production verification required after credits return |
| P0 | Unverifiable security, legal and operational claims | Removed specific unproven encryption, residency, compliance, retention and delivery guarantees from primary security/Contact/Services copy; **legal review remains open** |
| P1 | Corporate site presented company architecture as independent products | Corrected shared copy: Spine Workspace is the flagship; Fabric, Workbench, Twin, Marketplace and Runtime are capabilities/layers |
| P1 | About page included an unsupported $8M customer rescue | Replaced with a grounded company origin and principles page; removed legacy journey/testimonial appendices |
| P1 | Services hero and security CTA had insufficient text/background contrast | Replaced Services layout and corrected Security CTA contrast; visual test still required |
| P1 | Pricing and shared CTAs promoted a narrow renewal package and unverified commercial terms | Replaced pricing with product/company handoff and CTAs with corporate messaging |
| P1 | Contact could show success after opening an unsent mailto draft | Explicitly marks email as prepared, not submitted |
| P1 | Metadata repeated company/product suffixes and root canonical could leak to subpages | Standardized page titles, fixed site-wide template, added root canonical only to homepage |
| P1 | Product-site redirect appeared eligible for the corporate sitemap | Excluded `/spineworkspace` from sitemap through the route policy |
| P1 | Marketing sign-in/workspace demo routes resembled real account surfaces | Retained `noindex`; added visible demo notice linking to the actual workspace host |
| P2 | Product-oriented secondary pages have extensive older copy | Preserved public routes to avoid accidental link/SEO destruction; copy/layout editorial review and screenshot QA remain open |

## Route inventory — all 71 entrypoints

Dynamic route entrypoints such as `/blog/[slug]` and `/solutions/[slug]` may generate multiple URLs; this inventory counts **source route files**, not every generated URL.

| Route | Classification | Source disposition |
| --- | --- | --- |
| `/login` | Non-indexed preview | Noindex, visibly marked demo |
| `/onboarding` | Non-indexed preview | Noindex, visibly marked demo |
| `/request-access` | Non-indexed preview | Noindex, visibly marked demo |
| `/workspace` | Non-indexed preview | Noindex, visibly marked demo |
| `/about` | Corporate core | Source/metadata audited; visual QA pending |
| `/account-success` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/adaptive-workspace` | Technology / trust | Source/metadata audited; visual QA pending |
| `/ai` | Redirect / external handoff | Redirect, out of sitemap |
| `/blog/[slug]` | Editorial / resources | Source/metadata audited; visual QA pending |
| `/blog/authors/[slug]` | Editorial / resources | Source/metadata audited; visual QA pending |
| `/blog` | Editorial / resources | Source/metadata audited; visual QA pending |
| `/business-context` | Technology / trust | Source/metadata audited; visual QA pending |
| `/business-ops` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/changelog` | Editorial / resources | Source/metadata audited; visual QA pending |
| `/company` | Corporate core | Source/metadata audited; visual QA pending |
| `/contact` | Corporate core | Source/metadata audited; visual QA pending |
| `/continuity` | Technology / trust | Source/metadata audited; visual QA pending |
| `/developers` | Technology / trust | Source/metadata audited; visual QA pending |
| `/docs` | Redirect / external handoff | Redirect, out of sitemap |
| `/folder-monitor` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/governance` | Technology / trust | Source/metadata audited; visual QA pending |
| `/host-connected-environment` | Technology / trust | Source/metadata audited; visual QA pending |
| `/integrations` | Technology / trust | Source/metadata audited; visual QA pending |
| `/` | Corporate core | Source/metadata audited; visual QA pending |
| `/personal-ops` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/platform/how-it-works` | Technology / trust | Source/metadata audited; visual QA pending |
| `/platform/infrastructure` | Technology / trust | Source/metadata audited; visual QA pending |
| `/platform/integrations` | Technology / trust | Source/metadata audited; visual QA pending |
| `/platform` | Technology / trust | Source/metadata audited; visual QA pending |
| `/platform/security` | Technology / trust | Source/metadata audited; visual QA pending |
| `/platform/spine-fabric` | Technology / trust | Source/metadata audited; visual QA pending |
| `/portfolio` | Corporate core | Source/metadata audited; visual QA pending |
| `/pricing` | Corporate core | Source/metadata audited; visual QA pending |
| `/privacy` | Legal / policy | Retained; counsel review required |
| `/product/approval-gate-twin` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/product/how-it-works` | Redirect / external handoff | Redirect, out of sitemap |
| `/product` | Redirect / external handoff | Redirect, out of sitemap |
| `/product/security` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/product/the-adaptive-workspace` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/proof` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/resources/campaign` | Editorial / resources | Source/metadata audited; visual QA pending |
| `/resources` | Editorial / resources | Source/metadata audited; visual QA pending |
| `/security` | Technology / trust | Source/metadata audited; visual QA pending |
| `/services` | Corporate core | Source/metadata audited; visual QA pending |
| `/solutions/[slug]` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/customer-success` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/finance-leaders` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/finance` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/founders` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/individual` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/manufacturing` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/operations` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/professional-services` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/retail` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/revops` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/saas` | Solutions | Source/metadata audited; visual QA pending |
| `/solutions/services` | Solutions | Source/metadata audited; visual QA pending |
| `/spine` | Technology / trust | Source/metadata audited; visual QA pending |
| `/spineworkspace` | Redirect / external handoff | Redirect, out of sitemap |
| `/terms` | Legal / policy | Retained; counsel review required |
| `/triage-bot` | Legacy / deep product narrative | Retained; editorial / visual review required |
| `/twin` | Technology / trust | Source/metadata audited; visual QA pending |
| `/updates` | Corporate core | Source/metadata audited; visual QA pending |
| `/use-cases/customer-success` | Use cases | Source/metadata audited; visual QA pending |
| `/use-cases/founders-and-leaders` | Use cases | Source/metadata audited; visual QA pending |
| `/use-cases/operations` | Use cases | Source/metadata audited; visual QA pending |
| `/use-cases` | Use cases | Source/metadata audited; visual QA pending |
| `/use-cases/sales` | Use cases | Source/metadata audited; visual QA pending |
| `/use-cases/teams` | Use cases | Source/metadata audited; visual QA pending |
| `/why` | Redirect / external handoff | Redirect, out of sitemap |

## Automated regression checks

- `npm run lint` — npm lock, deployment setup, required assets, corporate banner and internal links.
- `npm run audit:site` — complete source route inventory, primary navigation links, branding, critical trust and company/product boundaries.
- `npm run check:ci` — CircleCI YAML, production deploy gating, stale-commit guards.
- `npm run typecheck` and `npm run build` — compile and static export, **not executed in this audit**.
- CircleCI `deploy-production` — Cloudflare deployment and live-host new-hero smoke check after credits and secret availability.

## Required final release acceptance

1. Confirm CircleCI credits restored and current `main` build starts; cancel old queued pipelines.
2. Verify `CLOUDFLARE_API_TOKEN`, Sanity settings, `npm ci`, `audit:site`, typecheck and `next build`.
3. Deploy the production Worker; confirm custom hostname resolves and HTML contains the new corporate hero.
4. Use actual browser viewport screenshots (desktop/tablet/mobile) to review typography, contrast, mobile menus, anchors and scroll effects on representative pages in **every classification above**.
5. Crawl the **generated** sitemap and rendered links, check canonicals/robots/social images, and review published Sanity articles.
6. Legally review `/privacy` and `/terms`, including actual operator/controller identity, data retention, subprocessors, breach reporting, billing/refund text and governing law. Do not sign off on these from source edits alone.
7. Verify the contact form's actual submission endpoint or outbound email fallback; no claim of delivery before receipt.
8. Review product-specific detail pages and security controls against implemented evidence; do not advertise certifications, guaranteed data residency or production features without proof.

**Release status:** repository remediation staged/merged separately; **production site and full browser QA not yet certified**.
