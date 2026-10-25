"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, FileText, Globe, AlertTriangle, ArrowRight } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { FinalCTA } from "@/components/final-cta";

const dataProtection = [
  { icon: Lock, title: "Kept safe in storage", desc: "How data is locked, and how the keys are kept and changed, is reviewed against your providers." },
  { icon: ShieldCheck, title: "Kept safe in transit", desc: "Safe paths for data on the move are checked using real proof from your setup." },
  { icon: FileText, title: "Care for sensitive fields", desc: "How sensitive fields are treated depends on how the data is sorted and your rules." },
  { icon: Globe, title: "Where data lives", desc: "Where data is stored, and whether it crosses borders, is confirmed in your contract and setup." },
];

const accessControl = [
  { icon: Users, title: "Access by role", desc: "What each person can reach is checked against their real role, company, provider and task." },
  { icon: Globe, title: "Single sign-on", desc: "Using your company's own sign-in needs a setup review." },
  { icon: ShieldCheck, title: "Boundaries by team", desc: "Team-only access is set and tested at the right data lines." },
];

const truthBoundary = [
  { icon: Lock, title: "Who is allowed to act", desc: "Actions that matter need a yes under the rules in place, and the limit is checked." },
  { icon: AlertTriangle, title: "Emergency steps", desc: "Rare, out-of-the-ordinary steps need a clear yes, a reason, and a record anyone can review." },
  { icon: FileText, title: "Data kept apart", desc: "Reaching data across teams is limited by who you are, the rules, and your company." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function PlatformSecurityContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <PageHero
          badge="Platform Security"
          headline="Authority is designed into the execution path."
          subhead="A look at who you are, the rules, where data stays, and the limits on what AI can do. Check the real setup before relying on any one control."
          primaryCta={{ label: "Review the security model", href: "/contact?intent=security" }}
        />

        <Section variant="muted">
          <SectionHeader label="Data Protection" headline="Data protection and deployment boundaries" />
          <div className="grid gap-4 md:grid-cols-2">
            {dataProtection.map((d, i) => (
              <motion.div key={d.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <d.icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#032D60]">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Access Control" headline="Who can get in, and what they can reach" />
          <div className="grid gap-4 md:grid-cols-3">
            {accessControl.map((a, i) => (
              <motion.div key={a.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <a.icon className="h-6 w-6 text-[#0176D3]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#032D60]">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#444]">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section variant="muted">
          <div className="rounded-md border border-amber-200 bg-amber-50/50 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                <ShieldCheck className="h-5 w-5 text-[#0176D3]" />
              </div>
              <h2 className="text-[20px] font-semibold text-[#032D60]">Governance Enforcement</h2>
            </div>
            <p className="mb-6 text-[14px] text-[#444]">
              The line we aim for: being able to reach something does not, by itself, mean you are allowed to act on it.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {truthBoundary.map((t, i) => (
                <motion.div key={t.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                    <t.icon className="h-5 w-5 text-[#0176D3]" />
                  </div>
                  <h4 className="font-semibold text-[#032D60]">{t.title}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#444]">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <section className="border-t border-[#E5E5E5] bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold text-[#032D60]">Review security claims against evidence.</h2>
            <p className="mt-3 text-[16px] text-[#444]">Contact the team to discuss the architecture, deployment scope and control evidence.</p>
            <Link
              href="/contact?intent=demo"
              className="mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]"
            >
              Discuss security <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
