"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { KpiBlock } from "@/components/marketing/enterprise";

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface TimelineSlot {
  time: string;
  title: string;
  desc: string;
}

export interface DayInLifeProps {
  domainFeatures: ReactNode;
  role: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  beforeAfter: BeforeAfterItem[];
  timeline: TimelineSlot[];
  capabilities: { title: string; desc: string }[];
  governance: string;
  connectors: string[];
  metrics: string[];
  outcomes?: { stat: string; label: string }[];
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function DayInLifeLayout({
  domainFeatures,
  role,
  headline,
  subheadline,
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  beforeAfter,
  timeline,
  capabilities,
  governance,
  connectors,
  metrics,
  outcomes,
}: DayInLifeProps) {
  return (
    <>
      <PageHero
        badge={role}
        headline={headline}
        subhead={subheadline}
        primaryCta={{ label: ctaLabel, href: ctaHref }}
      />
      {domainFeatures}

      <Section variant="muted">
        <SectionHeader label="Before and after" headline="A day with and without SpineWorkspace" body="Illustrative workflow examples, not measured customer results." />
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div {...fade(0)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-red-600">Without</p>
            <div className="space-y-3">
              {beforeAfter.map((item, i) => (
                <div key={i} className="rounded-md border border-red-200 bg-red-50/50 p-4">
                  <p className="text-[14px] leading-[1.6] text-[#444]">{item.before}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">With SpineWorkspace</p>
            <div className="space-y-3">
              {beforeAfter.map((item, i) => (
                <div key={i} className="rounded-md border border-[#0176D3]/20 bg-[#F3F6F9] p-4">
                  <p className="text-[14px] leading-[1.6] text-[#444]">{item.after}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {outcomes?.length ? (
        <Section>
          <SectionHeader label="Evaluation" headline="Measures to discuss for your workflow" body="Define success against your own baseline. These are evaluation areas, not measured customer results." />
          <div className="grid gap-4 sm:grid-cols-3">
            {outcomes.map((o, i) => (
              <KpiBlock key={i} label="Evaluation area" value={o.label} detail="Agree a baseline and target for your workflow." />
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <SectionHeader label="A day in the life" headline="How your day flows with SpineWorkspace" />
        <div className="mx-auto max-w-[800px] space-y-0">
          {timeline.map((slot, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.06)}
              className="relative pl-8 pb-8 last:pb-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#E5E5E5] last:before:hidden"
            >
              <div className="absolute left-0 top-1 flex h-5 w-5 -translate-x-[calc(50%-0.5px)] items-center justify-center rounded-full bg-[#F3F6F9]">
                <Clock className="h-3 w-3 text-[#0176D3]" />
              </div>
              <p className="text-[12px] font-bold text-[#0176D3]">{slot.time}</p>
              <h3 className="mt-1 text-[16px] font-semibold text-[#032D60]">{slot.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#444]">{slot.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader label="Capabilities" headline="Built for your role" />
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map(({ title, desc }, i) => (
            <motion.div key={i} {...fade(i * 0.08)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
              <h3 className="text-[16px] font-semibold text-[#032D60]">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-[#444]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
              <Shield className="h-5 w-5 text-[#0176D3]" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">AI thinks. You approve.</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#444]">{governance}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-12 sm:grid-cols-2">
          <motion.div {...fade(0)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Connects with</p>
            <div className="flex flex-wrap gap-2">
              {connectors.map((c) => (
                <span key={c} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">{c}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade(0.08)}>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">KPIs tracked</p>
            <div className="flex flex-wrap gap-2">
              {metrics.map((m) => (
                <span key={m} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">{m}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <section className="border-t border-[#E5E5E5] bg-[#032D60] py-16">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <motion.h2 {...fade(0)} className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold leading-[1.15] text-white sm:text-[length:min(36px,var(--marketing-heading-size))]">
            See your day, transformed
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.6] text-white/70">
            Book a walkthrough tailored to your role and tools.
          </motion.p>
          <motion.div {...fade(0.16)} className="mt-8">
            <Link href="/contact?intent=demo" className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9]">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
