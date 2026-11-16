import type { LucideIcon } from "lucide-react";
import {
  Building2,
  BookOpen,
  UserRound,
  Handshake,
  Briefcase,
  Layers,
  Boxes,
  ShieldCheck,
  Waypoints,
  LayoutGrid,
  Compass,
  Sparkles,
} from "lucide-react";
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
// A submenu entry carries a Lucide icon and a one-line description so the
// desktop/mobile dropdowns can render in the Magic UI mega-menu pattern (icon
// tile + title + description, with the first "overview" entry shown as a
// featured gradient card via `featured: true`). The icon and desc are
// presentational only; `label`, `href` and the ORDER are fixed by the Final
// Content Master and the corporate-coverage gate and must not change.
// Descriptions are taken verbatim (shortened) from each destination page's or
// section's own heading / lead text — no new claims.
export type HeaderSubLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  desc?: string;
  featured?: boolean;
};
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
      {
        label: "Company overview",
        href: "/company",
        icon: Building2,
        desc: "Why we build for the work between your apps.",
        featured: true,
      },
      {
        label: "Our story",
        href: "/company#our-story",
        icon: BookOpen,
        desc: "The experience behind the company.",
      },
      {
        label: "Founder",
        href: "/company#founder",
        icon: UserRound,
        desc: "Nirmal Prince J, Founder & Chief Executive Officer.",
      },
      {
        label: "Partnerships",
        href: "/partners",
        icon: Handshake,
        desc: "Connect your expertise to a shared foundation for work.",
      },
      {
        label: "Careers",
        href: "/careers",
        icon: Briefcase,
        desc: "Help business work retain its meaning.",
      },
    ],
  },
  {
    label: "Technology",
    href: "/platform",
    submenu: [
      {
        label: "Technology overview",
        href: "/platform",
        icon: Layers,
        desc: "How connected business work is built.",
        featured: true,
      },
      {
        label: "Shared business context",
        href: "/platform#business-context",
        icon: Boxes,
        desc: "Preserve where information came from. Explain why it matters.",
      },
      {
        label: "Authority & execution",
        href: "/platform#governed-execution",
        icon: ShieldCheck,
        desc: "Keep each responsibility explicit.",
      },
      {
        label: "Work continuity",
        href: "/platform#work-continuity",
        icon: Waypoints,
        desc: "A handoff should preserve meaning and recheck permission.",
      },
      {
        label: "SpineWorkspace overview",
        href: "/spine-workspace",
        icon: LayoutGrid,
        desc: "The workspace where people and AI share one view of the work.",
      },
    ],
  },
  {
    label: "Our philosophy",
    href: "/about",
    submenu: [
      {
        label: "Engineering principles",
        href: "/about",
        icon: Compass,
        desc: "AI needs the facts. A person approves the action.",
        featured: true,
      },
      {
        label: "Trust & governance",
        href: "/trust",
        icon: ShieldCheck,
        desc: "Trust depends on clear boundaries and visible evidence.",
      },
      {
        label: "Responsible AI",
        href: "/responsible-ai",
        icon: Sparkles,
        desc: "Give AI useful context. Keep authority explicit.",
      },
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

export const COMPANY_TAGLINE = "Your Business Tools. Your Business Context. Your Decisions. AI Acts With Your Approval.";
export const PRODUCT_ONELINER = "SpineWorkspace is the workspace where people and AI share one view of the business, while your existing tools keep the record.";
