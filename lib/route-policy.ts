/**
 * Sitemap and static-host alias policy.
 * Redirects here must match firebase.json (single hop, permanent).
 * Reasons are the record for every excluded or redirected route.
 */

export type RouteDecision = {
  path: string;
  action: "redirect" | "exclude" | "keep";
  destination?: string;
  reason: string;
};

export const ROUTE_DECISIONS: RouteDecision[] = [
  {
    path: "/spineworkspace",
    action: "redirect",
    destination: "/product",
    reason: "Legacy entry redirects to the local SpineWorkspace product-details page.",
  },
  {
    path: "/ai",
    action: "redirect",
    destination: "/twin",
    reason: "Page is only a client redirect. Older Twin entry; /twin is the buyer page.",
  },
  {
    path: "/product",
    action: "keep",
    reason: "SpineWorkspace product details, features, workflow, and technology live on the corporate marketing site.",
  },
  {
    path: "/why",
    action: "redirect",
    destination: "/about",
    reason: "Page is only a client redirect. No unique body beyond About.",
  },
  {
    path: "/docs",
    action: "keep",
    reason: "Spine InnovTech documentation hub, technical architecture, and machine-readable reference.",
  },
  {
    path: "/platform/the-adaptive-spine",
    action: "redirect",
    destination: "/platform/spine-fabric",
    reason: "Legacy name for the Spine Fabric technical page.",
  },
  {
    path: "/login",
    action: "exclude",
    reason: "Marketing preview of sign-in. noindex. Not a published buyer page.",
  },
  {
    path: "/onboarding",
    action: "exclude",
    reason: "Marketing preview of setup. noindex.",
  },
  {
    path: "/request-access",
    action: "exclude",
    reason: "Marketing preview of access request. noindex.",
  },
  {
    path: "/workspace",
    action: "exclude",
    reason: "Marketing preview of the workbench. noindex.",
  },
  {
    path: "/product/the-adaptive-workspace",
    action: "keep",
    reason: "Entity 360 role-view walkthrough. Distinct from the buyer /adaptive-workspace narrative.",
  },
  {
    path: "/product/how-it-works",
    action: "redirect",
    destination: "/platform/how-it-works",
    reason: "Older Twin walkthrough. One explanation now lives at /platform/how-it-works.",
  },
  {
    path: "/platform/how-it-works",
    action: "keep",
    reason: "Public explanation of truth, context, proposal, and decision.",
  },
  {
    path: "/security",
    action: "keep",
    reason: "Public security overview.",
  },
  {
    path: "/product/security",
    action: "keep",
    reason: "Approval zones and emergency controls. Distinct from the public overview.",
  },
  {
    path: "/platform/security",
    action: "keep",
    reason: "Technical encryption, residency, and access detail. Distinct from the public overview.",
  },
  {
    path: "/product/approval-gate-twin",
    action: "keep",
    reason: "Operational approval-queue walkthrough. Not the same page as /governance.",
  },
  {
    path: "/spine",
    action: "keep",
    reason: "Buyer introduction to Spine Fabric. Distinct from /business-context and /platform/spine-fabric.",
  },
  {
    path: "/business-context",
    action: "keep",
    reason: "Buyer page for governed canonical Business Context. Source systems stay authoritative.",
  },
  {
    path: "/platform/spine-fabric",
    action: "keep",
    reason: "Technical Spine Fabric page. Distinct from the buyer /spine and /business-context pages.",
  },
  {
    path: "/account-success",
    action: "keep",
    reason: "Campaign page for one customer record. Not a duplicate of /solutions/customer-success.",
  },
  {
    path: "/business-ops",
    action: "keep",
    reason: "Substantive business-ops landing. Not a duplicate of /solutions/finance.",
  },
  {
    path: "/personal-ops",
    action: "keep",
    reason: "Substantive personal-ops landing. Not a duplicate of /solutions/individual.",
  },
  {
    path: "/about",
    action: "keep",
    reason: "Origin story. Distinct from the company page.",
  },
  {
    path: "/company",
    action: "keep",
    reason: "Spine InnovTech company page. Distinct from About.",
  },
  {
    path: "/use-cases",
    action: "keep",
    reason: "Practical scenarios hub. Distinct from the solutions catalogue.",
  },
  {
    path: "/use-cases/sales",
    action: "keep",
    reason: "Sales scenario. Distinct from /solutions/sales.",
  },
  {
    path: "/use-cases/customer-success",
    action: "keep",
    reason: "Customer-success scenario. Distinct from /solutions/customer-success.",
  },
  {
    path: "/use-cases/operations",
    action: "keep",
    reason: "Operations scenario. Distinct from /solutions/finance.",
  },
  {
    path: "/use-cases/founders-and-leaders",
    action: "keep",
    reason: "Founder scenario. Distinct from /solutions/founders.",
  },
  {
    path: "/use-cases/teams",
    action: "keep",
    reason: "Team scenario. Distinct from /solutions/individual.",
  },
  {
    path: "/solutions/revops",
    action: "keep",
    reason: "RevOps landing. Distinct from /solutions/sales.",
  },
  {
    path: "/solutions/operations",
    action: "keep",
    reason: "Delivery-operations landing. Distinct from /solutions/finance.",
  },
  {
    path: "/integrations",
    action: "keep",
    reason: "Connector catalogue. Not a duplicate of /developers.",
  },
  {
    path: "/resources",
    action: "keep",
    reason: "Resources hub. Not a duplicate of the blog.",
  },
  {
    path: "/resources/campaign",
    action: "keep",
    reason: "Campaign gallery with its own architecture assets.",
  },
  {
    path: "/services",
    action: "keep",
    reason: "Implementation and onboarding services. Not a duplicate of Contact.",
  },
  {
    path: "/changelog",
    action: "keep",
    reason: "Dated product log. Distinct from /updates, which is the buyer-facing note.",
  },
  {
    path: "/updates",
    action: "keep",
    reason: "Short buyer-facing notes. The dated log stays at /changelog.",
  },
  {
    path: "/portfolio",
    action: "keep",
    reason: "Demonstrations of the product. Not customer results, and not a duplicate of /proof.",
  },
];

export const REDIRECT_SOURCES = new Set(
  ROUTE_DECISIONS.filter((d) => d.action === "redirect").map((d) => d.path),
);

export const SITEMAP_EXCLUSIONS = new Set(
  ROUTE_DECISIONS.filter((d) => d.action === "exclude" || d.action === "redirect").map((d) => d.path),
);
