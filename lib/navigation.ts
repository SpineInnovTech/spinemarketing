import type { LucideIcon } from "lucide-react";
import { BookOpen, Building2, Code2, Compass, FileText, History, Layers3, Mail, Network, Newspaper, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { getSolutionNavItems } from "@/lib/solution-nav";
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

export const headerNavigation: NavItem[] = [
  {
    label: "Company",
    href: "/company",
    items: [
      { name: "About Spine InnovTech", href: "/company", icon: Building2, desc: "Our story, vision, and principles" },
      { name: "Our philosophy", href: "/about", icon: Compass, desc: "How we think and build" },
      { name: "Vision & principles", href: "/company#principles", icon: ShieldCheck, desc: "What guides our engineering" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Connect with our team" },
    ],
  },
  {
    label: "Technology",
    href: "/platform",
    featured: {
      name: "SpineWorkspace",
      href: "https://spineworkspace.com",
      icon: Layers3,
      desc: "Our flagship product for humans and AI (spineworkspace.com)",
      external: true,
    },
    items: [
      { name: "Technology overview", href: "/platform", icon: Network, desc: "The foundation for connected business work" },
      { name: "Trust & governance", href: "/security", icon: ShieldCheck, desc: "Access, authority, provenance and outcomes" },
      { name: "Responsible AI", href: "/governance", icon: Sparkles, desc: "AI within business responsibility" },
      { name: "About SpineWorkspace", href: "/spineworkspace", icon: Workflow, desc: "Our flagship product, explained" },
    ],
    menuFooter: [
      { name: "Explore the technology foundation", href: "/platform" },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    items: [
      { name: "Insights", href: "/blog", icon: BookOpen, desc: "Perspectives on context, authority and connected work" },
      { name: "Research & resources", href: "/resources", icon: FileText, desc: "Architecture, thinking, and explainers" },
      { name: "Updates", href: "/updates", icon: Newspaper, desc: "Company and product updates" },
      { name: "Changelog", href: "/changelog", icon: History, desc: "Dated technical changes" },
      { name: "Portfolio & demonstrations", href: "/portfolio", icon: Layers3, desc: "Illustrative workflows and architecture" },
    ],
  },
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
