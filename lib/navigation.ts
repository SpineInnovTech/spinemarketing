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

// Header navigation — Final Content Master (00. Shared Site Content › Header),
// extended by Nirmal's 22 Oct 2026 request to open the three primary top-level
// items (Company, Technology, Our philosophy) as dropdown submenus of plain
// links, while Insights and Contact stay direct links and the CTA is unchanged.
// A submenu entry is a top item with a `submenu` array; a direct entry has
// none. Links in each submenu are plain in-page links (not role=menu items),
// in exactly this order with these exact labels and destinations.
export type HeaderSubLink = { label: string; href: string };
export type HeaderNavItem = {
  label: string;
  href: string;
  submenu?: HeaderSubLink[];
};

export const headerNavigation: HeaderNavItem[] = [
  {
    label: "Company",
    href: "/company",
    submenu: [
      { label: "Company overview", href: "/company" },
      { label: "Our story", href: "/company#our-story" },
      { label: "Founder", href: "/company#founder" },
      { label: "Partnerships", href: "/partners" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Technology",
    href: "/platform",
    submenu: [
      { label: "Technology overview", href: "/platform" },
      { label: "Shared business context", href: "/platform#business-context" },
      { label: "Authority & execution", href: "/platform#governed-execution" },
      { label: "Work continuity", href: "/platform#work-continuity" },
      { label: "SpineWorkspace overview", href: "/spine-workspace" },
    ],
  },
  {
    label: "Our philosophy",
    href: "/about",
    submenu: [
      { label: "Engineering principles", href: "/about" },
      { label: "Trust & governance", href: "/trust" },
      { label: "Responsible AI", href: "/responsible-ai" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type FooterColumn = { heading: string; links: { name: string; href: string; external?: boolean }[] };

// Footer navigation — Final Content Master (00. Shared Site Content › Footer),
// extended by the user's 22 Oct 2026 requests to surface the existing corporate
// pages directly: "Technology portfolio" (/portfolio) as the last Technology
// link, and in Perspectives the order "Insights", "Company news" (/updates) and
// "Resources" (/resources). Four groups and fourteen links, in this order, with
// these exact labels and destinations. Do not add other links (no /blog, login,
// pricing). Legal links are handled separately (footerLegalLinks) and shown only
// when a complete published policy page exists.
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
      { name: "Technology portfolio", href: "/portfolio" },
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
    links: [
      { name: "Insights", href: "/insights" },
      { name: "Company news", href: "/updates" },
      { name: "Resources", href: "/resources" },
    ],
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

// Bottom-bar utility links — not part of the master's footer groups. The Site
// map link keeps the full website directory (/site-map) reachable from the
// footer, so the directory-only pages stay reachable through it and the
// coverage gate can stay strict for every route (conductor decision
// superseding A1). It sits beside the legal links, not inside the grouped
// master links.
export const footerUtilityLinks: { name: string; href: string }[] = [
  { name: "Site map", href: "/site-map" },
];

export const COMPANY_TAGLINE = "We build governed business context for humans and AI.";
export const PRODUCT_ONELINER = "SpineWorkspace is the governed workspace where humans and AI share one view of the business, while your existing tools remain the systems of record.";
