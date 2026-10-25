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
  { icon: Lock, title: "Storage protection", desc: "Encryption, key management and rotation must be reviewed against configured providers." },
  { icon: ShieldCheck, title: "Transport security", desc: "Protected transport paths should be validated using actual deployment evidence." },
  { icon: FileText, title: "Sensitive-field boundaries", desc: "Sensitive-field treatment depends on data classification and integration policy." },
  { icon: Globe, title: "Data location", desc: "Storage regions and cross-border flows require contract and infrastructure verification." },
];

const accessControl = [
  { icon: Users, title: "RBAC", desc: "Access scopes must be checked against actual user role, tenant, provider and context." },
  { icon: Globe, title: "SSO / SAML", desc: "Supported identity-provider configuration requires implementation review." },
  { icon: ShieldCheck, title: "Contextual Firewalling", desc: "Department-scoped access must be enforced and tested at the relevant data boundaries." },
];

const truthBoundary = [
  { icon: Lock, title: "Authority boundary", desc: "Consequential actions require authorization under governing policy and verified enforcement." },
  { icon: AlertTriangle, title: "Emergency procedures", desc: "Exceptional operations need explicit authority, justification and reviewable evidence." },
  { icon: FileText, title: "Context isolation", desc: "Cross-context data access must be bounded by identity, policy and tenant scope." },
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
          subhead="An architectural view of identity, policy, data boundaries and controlled execution. Verify implementation evidence before relying on any individual control."
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
          <SectionHeader label="Access Control" headline="Access scope and identity controls" />
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
              The intended execution boundary: capability access does not by itself grant authority to act.
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
