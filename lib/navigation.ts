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

export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { name: "Company", href: "/company" },
      { name: "Our philosophy", href: "/about" },
      { name: "Careers", href: "/contact?topic=careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { name: "Technology overview", href: "/platform" },
      { name: "Trust & governance", href: "/security" },
      { name: "Responsible AI", href: "/governance" },
      { name: "Partnerships", href: "/contact?topic=partnership" },
    ],
  },
  {
    heading: "Product",
    links: [
      { name: "About SpineWorkspace", href: "/spineworkspace" },
      { name: "Visit the product website", href: "https://spineworkspace.com", external: true },
    ],
  },
  {
    heading: "Perspectives",
    links: [
      { name: "Insights", href: "/blog" },
      { name: "Research & resources", href: "/resources" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export const COMPANY_TAGLINE = "We build the foundation for connected business work. Shared business context. Human and AI collaboration. Explicit authority. Work continuity.";
export const PRODUCT_ONELINER = "SpineWorkspace is the governed workspace where humans and AI share one view of the business, while your existing tools remain the systems of record.";
