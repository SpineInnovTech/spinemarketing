"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, Shield, X, Check, ArrowDown } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { KpiBlock } from "@/components/marketing/enterprise";

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface WorkflowStep {
  title: string;
  desc: string;
}

export interface CapabilityItem {
  title: string;
  desc: string;
}

export interface WorkflowTransformProps {
  domainFeatures: ReactNode;
  category: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  beforeAfter: BeforeAfterItem[];
  workflow: WorkflowStep[];
  capabilities: CapabilityItem[];
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

export function WorkflowTransformLayout({
  domainFeatures,
  category,
  headline,
  subheadline,
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  beforeAfter,
  workflow,
  capabilities,
  governance,
  connectors,
  metrics,
  outcomes,
}: WorkflowTransformProps) {
  return (
    <>
      <PageHero
        badge={category}
        headline={headline}
        subhead={subheadline}
        primaryCta={{ label: ctaLabel, href: ctaHref }}
      />
      {domainFeatures}

      <Section variant="muted">
        <SectionHeader label="The difference" headline="What changes from day one" body="Illustrative workflow examples, not measured customer results." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div {...fade(0)} className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-50">
                <X className="h-3.5 w-3.5 text-red-500" />
              </div>
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-red-600">Without SpineWorkspace</span>
            </div>
            {beforeAfter.map((item, i) => (
              <div key={i} className="rounded-md border border-red-200 bg-red-50/50 px-5 py-4">
                <p className="text-[14px] leading-[1.6] text-[#444]">{item.before}</p>
              </div>
            ))}
          </motion.div>
          <motion.div {...fade(0.12)} className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0176D3]/10">
                <Check className="h-3.5 w-3.5 text-[#0176D3]" />
              </div>
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">With SpineWorkspace</span>
            </div>
            {beforeAfter.map((item, i) => (
              <div key={i} className="rounded-md border border-[#0176D3]/20 bg-[#F3F6F9] px-5 py-4">
                <p className="text-[14px] leading-[1.6] text-[#444]">{item.after}</p>
              </div>
            ))}
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

      <Section variant="muted">
        <SectionHeader label="Your new workflow" headline="How it works, step by step" />
        <div className="mx-auto max-w-[900px] space-y-0">
          {workflow.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                {...fade(i * 0.1)}
                className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0176D3]/20 bg-[#F3F6F9] text-[14px] font-bold text-[#0176D3]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#032D60]">{step.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.6] text-[#444]">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
              {i < workflow.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-4 w-4 text-[#C9C9C9]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label="Capabilities" headline="Built for this work" />
        <div className="space-y-3">
          {capabilities.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.08)}
              className="flex items-start gap-4 rounded-md border border-[#E5E5E5] bg-white p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#F3F6F9]">
                <Check className="h-4 w-4 text-[#0176D3]" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#032D60]">{title}</h3>
                <p className="mt-1 text-[14px] leading-[1.7] text-[#444]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="rounded-md border border-[#E5E5E5] bg-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F3F6F9]">
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
            See it working with your tools
          </motion.h2>
          <motion.p {...fade(0.08)} className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.6] text-white/70">
            Book a 20-minute walkthrough. We&apos;ll connect your systems and show you the difference live.
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
