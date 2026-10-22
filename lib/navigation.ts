import type { LucideIcon } from "lucide-react";
import type { ConnectorNavMark, KindNavMark } from "@/lib/integration-nav";

export type NavItemChild = { name: string; href: string; icon: LucideIcon; desc?: string; external?: boolean };
export type NavGroup = { label: string; items: NavItemChild[] };
export type NavLink = { name: string; href: string; external?: boolean };
export type NavItem = {
  label: string; href: string; items?: NavItemChild[]; groups?: NavGroup[];
  featured?: NavItemChild; supporting?: NavGroup; menuFooter?: NavLink[];
  connectorMarks?: ConnectorNavMark[]; kindMarks?: KindNavMark[]; external?: boolean;
};

export const DOCS_URL = "/docs";

// Header navigation — Final Content Master (00. Shared Site Content › Header).
// Exact labels and destinations; a flat top-level bar with no mega-menus.
export const headerNavigation: NavItem[] = [
  { label: "Company", href: "/company" },
  { label: "Technology", href: "/platform" },
  { label: "Our philosophy", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type FooterColumn = { heading: string; links: { name: string; href: string; external?: boolean }[] };

// Footer navigation — Final Content Master (00. Shared Site Content › Footer).
// Exactly four groups and eleven links, in this order, with these exact labels
// and destinations. Do not add other links (no /blog, /resources, login,
// pricing). Legal links are handled separately (footerLegalLinks) and shown
// only when a complete published policy page exists.
export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { name: "Company", href: "/company" },
      { name: "Our philosophy", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { name: "Technology overview", href: "/platform" },
      { name: "Trust & governance", href: "/trust" },
      { name: "Responsible AI", href: "/responsible-ai" },
      { name: "Partnerships", href: "/partners" },
    ],
  },
  {
    heading: "Product",
    links: [
      { name: "About SpineWorkspace", href: "/spine-workspace" },
      { name: "Visit the product website", href: "https://spineworkspace.com", external: true },
    ],
  },
  {
    heading: "Perspectives",
    links: [{ name: "Insights", href: "/insights" }],
  },
];

// Legal links — Final Content Master (Footer + H. Policy pages). The master's
// publishing note: show each legal link ONLY when its policy page is complete
// and published. /privacy and /terms are complete real pages on main; /cookies
// has no page, so "Cookie notice" is intentionally omitted here (and noted in
// the PR body) rather than linking to a non-existent or placeholder page.
export const footerLegalLinks: { name: string; href: string }[] = [
  { name: "Privacy notice", href: "/privacy" },
  { name: "Website terms", href: "/terms" },
];

// Bottom-bar utility links — not part of the master's four footer groups. The
// Site map link keeps the full website directory (/site-map) reachable from the
// footer, so /resources and the directory-only pages stay reachable through it
// and the coverage gate can stay strict for every route (conductor decision
// superseding A1). It sits beside the legal links, not inside the 11 grouped
// master links.
export const footerUtilityLinks: { name: string; href: string }[] = [
  { name: "Site map", href: "/site-map" },
];

export const COMPANY_TAGLINE = "We build the foundation for connected business work. Shared business context. Human and AI collaboration. Explicit authority. Work continuity.";
export const PRODUCT_ONELINER = "SpineWorkspace is the governed workspace where humans and AI share one view of the business, while your existing tools remain the systems of record.";
