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
      { name: "Why we build", href: "/about", icon: Compass, desc: "The enterprise integration problem behind our work" },
      { name: "Vision & principles", href: "/company#principles", icon: ShieldCheck, desc: "What guides our engineering" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Connect with our team" },
    ],
  },
  {
    label: "Platform & Products",
    href: "/platform",
    featured: {
      name: "Spine Workspace",
      href: "https://spineworkspace.com",
      icon: Layers3,
      desc: "Our core shared workspace for humans and AI (spineworkspace.com)",
      external: true,
    },
    items: [
      { name: "Spine Fabric", href: "/platform/spine-fabric", icon: Network, desc: "Governed operational business context" },
      { name: "Spine Twin", href: "/twin", icon: Sparkles, desc: "Context-aware AI counterpart" },
      { name: "Governed Runtime", href: "/governance", icon: ShieldCheck, desc: "Authorization, execution, and reconciliation" },
      { name: "Spine Capabilities", href: "/integrations", icon: Workflow, desc: "Connectors, MCP, tools, and plugins" },
    ],
    menuFooter: [
      { name: "Explore the platform architecture", href: "/platform" },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    items: [
      { name: "Blog", href: "/blog", icon: BookOpen, desc: "Ideas on business context and AI" },
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
      { name: "About", href: "/company" },
      { name: "Our story", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    heading: "Platform & Products",
    links: [
      { name: "Spine Workspace", href: "https://spineworkspace.com", external: true },
      { name: "Spine Fabric", href: "/platform/spine-fabric" },
      { name: "Spine Twin", href: "/twin" },
      { name: "Governance & Runtime", href: "/governance" },
      { name: "Spine Capabilities", href: "/integrations" },
    ],
  },
  {
    heading: "Insights",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Research & resources", href: "/resources" },
      { name: "Updates", href: "/updates" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Trust & legal",
    links: [
      { name: "Security", href: "/security" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Documentation", href: DOCS_URL },
    ],
  },
];

export const COMPANY_TAGLINE = "We build the foundation for connected business work. Shared business context. Human and AI collaboration. Governed capabilities. Work continuity.";
export const PRODUCT_ONELINER = "Spine Workspace is the business-context workspace where humans and AI work together.";
