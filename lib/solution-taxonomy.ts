/**
 * Public marketing solutions vs operational workspace projections.
 *
 * - `/solutions/*` routes = public acquisition / buyer language (this site)
 * - `*.spineworkspace.com` = authenticated product-facing workbench projections
 * - `workspaceAssociations` bridges marketing pages to workspace hosts (never conflates the two)
 *
 * Internal-only and platform entry surfaces are NOT listed in PUBLIC_SOLUTIONS.
 */

export type WorkspaceHost = {
  /** Canonical hostname without protocol */
  host: string;
  label: string;
  /** Primary workbench for this solution page CTA */
  primary?: boolean;
};

export type PublicSolution = {
  id: string;
  slug: string;
  name: string;
  navLabel: string;
  headline: string;
  description: string;
  buyerSummary: string;
  workspaceAssociations: WorkspaceHost[];
};

export type PlatformSurface = {
  id: string;
  host: string;
  label: string;
  marketingPath: string;
  description: string;
};

export type InternalSurface = {
  host: string;
  label: string;
  note: string;
};

/** Known hostname typos → canonical host */
export const DOMAIN_FIXES: Record<string, string> = {
  "suppport.spineworkspace.com": "support.spineworkspace.com",
  "Ops.spineworkspace.com": "ops.spineworkspace.com",
  "blog..spineworkspace.com": "blog.spineworkspace.com",
};

export function canonicalHost(host: string): string {
  const normalized = host.toLowerCase().trim();
  return DOMAIN_FIXES[host] ?? DOMAIN_FIXES[normalized] ?? normalized;
}

export function workspaceUrl(host: string, path = ""): string {
  const h = canonicalHost(host);
  const base = `https://${h}`;
  return path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;
}

/**
 * Functional workbenches — public marketing catalogue only.
 * Do not add internal surfaces (docs, admin, orgmemory, etc.) here.
 */
export const PUBLIC_SOLUTIONS: PublicSolution[] = [
  {
    id: "customer-success",
    slug: "customer-success",
    name: "Account Success",
    navLabel: "Account Success",
    headline: "Connect the customer journey from onboarding to growth.",
    description:
      "Bring account history, adoption, support, commitments and commercial context together for onboarding, account reviews, expansion and renewal decisions.",
    buyerSummary: "Carry the customer story through onboarding, service, growth and renewal with shared context.",
    workspaceAssociations: [
      { host: "account-success.spineworkspace.com", label: "Account Success Workbench", primary: true },
      { host: "technical-account-success.spineworkspace.com", label: "Technical Account Success" },
    ],
  },
  {
    id: "finance",
    slug: "finance",
    name: "Finance & Business Ops",
    navLabel: "Finance & Business Ops",
    headline: "Revenue, risk, and operations from the same truth and context.",
    description: "Finance, business operations, and cross-functional execution connected to the record and the context for the decision.",
    buyerSummary: "Connect financial records to the context for the decision.",
    workspaceAssociations: [
      { host: "finance.spineworkspace.com", label: "Finance Workbench", primary: true },
      { host: "businessops.spineworkspace.com", label: "Business Ops" },
      { host: "ops.spineworkspace.com", label: "Operations" },
    ],
  },
  {
    id: "sales",
    slug: "sales",
    name: "Sales",
    navLabel: "Sales",
    headline: "Keep revenue work connected.",
    description: "Account commitments, deal memory, and next actions grounded in the record and the context around the deal.",
    buyerSummary: "Carry the account record and its context through the pipeline.",
    workspaceAssociations: [{ host: "sales.spineworkspace.com", label: "Sales Workbench", primary: true }],
  },
  {
    id: "marketing",
    slug: "marketing",
    name: "Marketing",
    navLabel: "Marketing",
    headline: "Campaigns connected to business outcomes.",
    description: "Programs, launches, and performance signals linked to goals, customers, and evidence.",
    buyerSummary: "Coordinate work around business goals.",
    workspaceAssociations: [{ host: "marketing.spineworkspace.com", label: "Marketing Workbench", primary: true }],
  },
  {
    id: "content",
    slug: "content",
    name: "Content",
    navLabel: "Content",
    headline: "Content work with the brief's context.",
    description: "Briefs, assets, and publishing connected to goals, audiences, and approved evidence.",
    buyerSummary: "Create with the context behind the brief.",
    workspaceAssociations: [{ host: "content.spineworkspace.com", label: "Content Workbench", primary: true }],
  },
  {
    id: "customer-support",
    slug: "customer-support",
    name: "Customer Support",
    navLabel: "Customer Support",
    headline: "Support with the full customer story.",
    description: "Tickets, history, and commitments in one workspace—not another disconnected queue.",
    buyerSummary: "Resolve issues with the customer story in view.",
    workspaceAssociations: [
      { host: "support.spineworkspace.com", label: "Support Workbench", primary: true },
      { host: "service.spineworkspace.com", label: "Service Workbench" },
    ],
  },
  {
    id: "product-engineering",
    slug: "product-engineering",
    name: "Product & Engineering",
    navLabel: "Product & Engineering",
    headline: "Ship with product truth and the context around the work.",
    description: "Roadmap, delivery, and customer signals connected for product and engineering teams.",
    buyerSummary: "Connect product decisions to business priorities.",
    workspaceAssociations: [
      { host: "productengineering.spineworkspace.com", label: "Product & Engineering Workbench", primary: true },
    ],
  },
  {
    id: "individual",
    slug: "individual",
    name: "Individual",
    navLabel: "Individual",
    headline: "Your workspace, with personal context kept separate.",
    description: "Personal operating picture with continuity across tools, hosts, and AI sessions.",
    buyerSummary: "Keep personal work and context connected.",
    workspaceAssociations: [{ host: "personal.spineworkspace.com", label: "Personal Workbench", primary: true }],
  },
  {
    id: "human-resources",
    slug: "human-resources",
    name: "Human Resources",
    navLabel: "Human Resources",
    headline: "People operations with the records and the context for the decision.",
    description: "Hiring, onboarding, and people programs connected to goals and governance boundaries.",
    buyerSummary: "Coordinate people decisions with relevant context.",
    workspaceAssociations: [{ host: "humanresources.spineworkspace.com", label: "HR Workbench", primary: true }],
  },
  {
    id: "legal",
    slug: "legal",
    name: "Legal",
    navLabel: "Legal",
    headline: "Legal work with evidence and authority.",
    description: "Contracts, reviews, and obligations linked to customers, deals, and approved decisions.",
    buyerSummary: "Review obligations with the records behind them.",
    workspaceAssociations: [{ host: "legal.spineworkspace.com", label: "Legal Workbench", primary: true }],
  },
  {
    id: "founders",
    slug: "founders",
    name: "Founders & CXOs",
    navLabel: "Founders & CXOs",
    headline: "See goals, KPIs, decisions, and execution together.",
    description: "Executive visibility, decision traceability, and organizational memory.",
    buyerSummary: "See goals, decisions, and execution in one picture.",
    workspaceAssociations: [{ host: "founderops.spineworkspace.com", label: "Founder Ops Workbench", primary: true }],
  },
  {
    id: "memoryandknowledge",
    slug: "memoryandknowledge",
    name: "Memory & Knowledge",
    navLabel: "Memory & Knowledge",
    headline: "Organizational memory that compounds.",
    description: "Knowledge, portfolio context, and durable business memory—governed and evidence-linked.",
    buyerSummary: "Keep organizational memory connected to its evidence.",
    workspaceAssociations: [
      { host: "orgmemory.spineworkspace.com", label: "Organizational Memory", primary: true },
      { host: "portfolio.spineworkspace.com", label: "Portfolio Context" },
    ],
  },
];

/**
 * Platform / entry surfaces — not buyer-facing functional solutions.
 * Linked from Product, Platform, Developers, or activation flows.
 */
export const PLATFORM_SURFACES: PlatformSurface[] = [
  {
    id: "auth",
    host: "auth.spineworkspace.com",
    label: "Authentication",
    marketingPath: "/contact?intent=demo",
    description: "Entry surface for sign-in and identity—not a solution catalogue item.",
  },
  {
    id: "onboarding",
    host: "onboarding.spineworkspace.com",
    label: "Onboarding",
    marketingPath: "/contact?intent=demo",
    description: "Activation and guided setup surface.",
  },
  {
    id: "connector",
    host: "connector.spineworkspace.com",
    label: "Connectors",
    marketingPath: "/platform/integrations",
    description: "Integration and connector management.",
  },
  {
    id: "platform",
    host: "platform.spineworkspace.com",
    label: "Platform",
    marketingPath: "/platform",
    description: "Platform hub and architecture overview.",
  },
  {
    id: "mcp",
    host: "mcp.spineworkspace.com",
    label: "Connections",
    marketingPath: "/developers",
    description: "The tools already open for a developer.",
  },
  {
    id: "marketplace",
    host: "marketplace.spineworkspace.com",
    label: "Marketplace",
    marketingPath: "/platform",
    description: "Ecosystem marketplace and capabilities.",
  },
];

/** Internal projections — link when appropriate; never public solution catalogue entries */
export const INTERNAL_SURFACES: InternalSurface[] = [
  { host: "docs.spineworkspace.com", label: "Docs", note: "Link from header/footer Docs; not a solution page." },
  { host: "brandstore.spineworkspace.com", label: "Brand Store", note: "Internal only." },
  { host: "changelog.spineworkspace.com", label: "Changelog", note: "Internal/product updates." },
  { host: "blog.spineworkspace.com", label: "Blog", note: "Marketing blog stays on spineinnovtech.com/blog." },
  { host: "admin.spineworkspace.com", label: "Admin", note: "Control surface; not buyer-facing." },
];

/**
 * Public marketing host aliases → solution slug.
 * Used when a subdomain should render or deep-link to a `/solutions/*` page before auth.
 */
export const MARKETING_LANDING_HOSTS: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const solution of PUBLIC_SOLUTIONS) {
    for (const ws of solution.workspaceAssociations) {
      const host = canonicalHost(ws.host);
      map[host] = solution.slug;
    }
  }
  return map;
})();

export function getPublicSolutionBySlug(slug: string): PublicSolution | undefined {
  return PUBLIC_SOLUTIONS.find((s) => s.slug === slug);
}

export function getPublicSolutionByHost(host: string): PublicSolution | undefined {
  const slug = MARKETING_LANDING_HOSTS[canonicalHost(host)];
  return slug ? getPublicSolutionBySlug(slug) : undefined;
}

export function getPrimaryWorkspaceHost(solution: PublicSolution): WorkspaceHost {
  return (
    solution.workspaceAssociations.find((w) => w.primary) ?? solution.workspaceAssociations[0]
  );
}

export function marketingPathForSolution(slug: string): string {
  return `/solutions/${slug}`;
}
