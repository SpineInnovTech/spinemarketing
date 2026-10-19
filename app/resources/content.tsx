"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DOCS_URL } from "@/lib/navigation";
import { PageHero } from "@/components/marketing/page-hero";
import {
  BookOpen,
  FileText,
  Calculator,
  ArrowRight,
  Layers,
  Shield,
  Users,
  Lightbulb,
  Video,
  Download,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const featuredResources = [
  {
    icon: BookOpen,
    title: "Use-case library",
    desc: "Illustrative workflows across customer-facing teams, operations, finance, and leadership.",
    href: "/use-cases",
    cta: "Explore use cases",
  },
  {
    icon: FileText,
    title: "How it works",
    desc: "Connect your tools, see everything in one place, AI with your approval.",
    href: "/platform/how-it-works",
    cta: "See how it works",
  },
  {
    icon: Calculator,
    title: "Pricing guide",
    desc: "Discuss scope, integrations, evaluation, and commercial terms with the team.",
    href: "/pricing",
    cta: "View pricing",
  },
];

const deepDives = [
  {
    icon: Layers,
    title: "Spine Fabric",
    desc: "How relationships, provenance, authority, and continuity form business context.",
    href: "/platform/spine-fabric",
  },
  {
    icon: Shield,
    title: "Security & governance",
    desc: "Access boundaries, evidence, and human review.",
    href: "/platform/security",
  },
  {
    icon: Users,
    title: "The Adaptive Workspace",
    desc: "Nine role-based views from one record.",
    href: "/product/the-adaptive-workspace",
  },
  {
    icon: Lightbulb,
    title: "Governance & Twin",
    desc: "Governed AI that proposes with evidence. You approve.",
    href: "/product/approval-gate-twin",
  },
  {
    icon: Video,
    title: "Why SpineWorkspace",
    desc: "The problem we exist to solve. Signal, context, governance.",
    href: "/about",
  },
  {
    icon: Download,
    title: "Integrations",
    desc: "Connectors listed on this site. Source systems stay authoritative.",
    href: "/integrations",
  },
];

export function ResourcesContent() {
  return (
    <>
      <PageHero
        badge="Resources"
        headline="Learn, evaluate, adopt."
        subhead="Guides, playbooks, and architectural deep dives to help you evaluate SpineWorkspace."
        primaryCta={{ label: "Explore use cases", href: "/use-cases" }}
        secondaryCta={{ label: "Documentation", href: DOCS_URL }}
      />

      <section className="border-y border-[#D9E4EF] bg-[#F3F6F9] py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Read</p>
          <h2 className="mt-3 text-[length:min(28px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60]">Blog, updates, changelog, portfolio, docs</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Blog", "Product thinking.", "/blog"],
              ["Updates", "What changed for buyers.", "/updates"],
              ["Changelog", "The dated log.", "/changelog"],
              ["Portfolio", "Demonstrations, not customer results.", "/portfolio"],
              ["Documentation", "Setup and reference, on the docs site.", DOCS_URL],
            ].map(([title, desc, href]) => (
              <li key={title}>
                <Link
                  href={href}
                  className="block h-full rounded-[16px] border border-[#D9E4EF] bg-white p-5 hover:border-[#0176D3]"
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <p className="text-[length:min(18px,var(--marketing-body-size))] font-semibold text-[#032D60]">{title}</p>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#33465B]">{desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Start Here</p>
            <h2 className="section-heading">
              Three places to begin.
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {featuredResources.map(({ icon: Icon, title, desc, href, cta }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="arvio-card flex flex-col p-8"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.6] text-white/45">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Deep Dives</p>
            <h2 className="section-heading">
              Explore every layer of the{" "}
              <span className="text-primary">platform.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deepDives.map(({ icon: Icon, title, desc, href }, i) => (
              <motion.div key={title} {...fade(i * 0.06)}>
                <Link
                  href={href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.03em] group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[14px] font-medium leading-[1.5] text-white/40">
                      {desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
