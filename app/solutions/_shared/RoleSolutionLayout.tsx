"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Eye, TrendingUp, Target } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";

export interface FocusItem {
  title: string;
  desc: string;
}

export interface RoleSolutionLayoutProps {
  role: string;
  headline: string;
  subheadline: string;
  ctaLabel?: string;
  ctaHref?: string;
  focus: FocusItem[];
  governanceNote: string;
  connects?: string[];
  metrics?: string[];
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const focusIcons = [Zap, Eye, TrendingUp, Target, Shield, Zap];

export function RoleSolutionLayout({
  role,
  headline,
  subheadline,
  ctaLabel = "Book a demo",
  ctaHref = "/contact?intent=demo",
  focus,
  governanceNote,
  connects = [],
  metrics = [],
}: RoleSolutionLayoutProps) {
  return (
    <>
      <PageHero
        badge={role}
        headline={headline}
        subhead={subheadline}
        primaryCta={{ label: ctaLabel, href: ctaHref }}
      />

      <Section variant="muted">
        <SectionHeader label="Focus areas" headline="What this role needs from SpineWorkspace" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map(({ title, desc }, i) => {
            const Icon = focusIcons[i % focusIcons.length];
            return (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <Icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#032D60]">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#444]">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
              <Shield className="h-5 w-5 text-[#0176D3]" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Governance</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#444]">{governanceNote}</p>
            </div>
          </div>
        </div>

        {(connects.length > 0 || metrics.length > 0) && (
          <div className="mt-10 grid gap-12 sm:grid-cols-2">
            {connects.length > 0 && (
              <motion.div {...fade(0)}>
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Connects with</p>
                <div className="flex flex-wrap gap-2">
                  {connects.map((c) => (
                    <span key={c} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">{c}</span>
                  ))}
                </div>
              </motion.div>
            )}
            {metrics.length > 0 && (
              <motion.div {...fade(0.08)}>
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">KPIs tracked</p>
                <div className="flex flex-wrap gap-2">
                  {metrics.map((m) => (
                    <span key={m} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1.5 text-[13px] font-medium text-[#444]">{m}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </Section>

      <section className="border-t border-[#E5E5E5] bg-[#032D60] py-16">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <motion.h2 {...fade(0)} className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold leading-[1.15] text-white sm:text-[length:min(36px,var(--marketing-heading-size))]">
            See it working for your role
          </motion.h2>
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
