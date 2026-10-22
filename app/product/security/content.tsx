"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Users, FileText, AlertTriangle, RotateCcw } from "lucide-react";
import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";
import { FinalCTA } from "@/components/final-cta";

const trustDashboard = [
  { zone: "Green Zone", tone: "text-[#0176D3]", border: "border-[#0176D3]/20", bg: "bg-[#F3F6F9]", desc: "Illustrative read-and-propose activities. Actual data access remains subject to policy." },
  { zone: "Red Zone", tone: "text-red-600", border: "border-red-200", bg: "bg-red-50/50", desc: "Illustrative consequential operations requiring the correct authority and applicable approval." },
];

const sovereigntyControls = [
  { title: "Your Data, Your Rules", desc: "Source systems retain their authoritative roles; data copies and access must be governed." },
  { title: "Data residency review", desc: "Locations and cross-border processing depend on provider deployment and contract." },
  { title: "Retention boundaries", desc: "Applicable retention periods and controls require configuration and legal review." },
];

const auditFeatures = [
  { icon: FileText, title: "Decision evidence", desc: "A reviewable trail should connect decisions with identity, authority and outcomes." },
  { icon: Eye, title: "Context reconstruction", desc: "Reconstruction depends on available, authorized source evidence and supported logging." },
  { icon: RotateCcw, title: "Reconciliation tracking", desc: "Record attempts, effects and reconciliation status where supported." },
];

const rbacItems = [
  { title: "RBAC Visualization", desc: "Permissions should reflect actual roles, attributes and provider scopes." },
  { title: "Contextual Firewalling UI", desc: "Department and data-domain boundaries require policy enforcement." },
  { title: "API Key Management", desc: "Scope, rotation and audit requirements should be verified per integration." },
];

const emergencyItems = [
  { icon: AlertTriangle, title: "Kill Switch", desc: "Emergency-stop mechanisms require deployment-specific proof and operational runbooks." },
  { icon: Eye, title: "Breach Response", desc: "Investigation depends on retained logs, provider access and configured evidence collection." },
  { icon: RotateCcw, title: "Recovery Interface", desc: "Recovery objectives and restore capabilities must be verified in the target environment." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function ProductSecurityContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <PageHero
          badge="Product Security"
          headline="Governed execution and audit design."
          subhead="Illustrative governance concepts for Spine Workspace. These screens do not independently prove deployed controls."
          primaryCta={{ label: "Contact security team", href: "/contact?intent=security" }}
        />

        <Section variant="muted">
          <SectionHeader label="Trust & Governance Dashboard" headline="Conceptual distinction between investigation and consequential action" />
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {trustDashboard.map((t) => (
              <div key={t.zone} className={`rounded-md border ${t.border} ${t.bg} p-6`}>
                <div className={`font-semibold text-sm mb-2 ${t.tone}`}>{t.zone}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sovereigntyControls.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.05)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
                <div className="font-semibold text-[#032D60] mb-2 text-sm">{s.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Approval Audit Center" headline="Decision and verification evidence" />
          <div className="grid gap-4 md:grid-cols-3">
            {auditFeatures.map((a, i) => (
              <motion.div key={a.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <a.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <div className="font-semibold text-[#032D60] mb-2">{a.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section variant="muted">
          <SectionHeader label="Access Control Matrix" headline="Permissions scoped to role and context" />
          <div className="grid gap-4 md:grid-cols-3">
            {rbacItems.map((r, i) => (
              <motion.div key={r.title} {...fade(i * 0.05)} className="rounded-md border border-[#E5E5E5] bg-white p-5">
                <div className="font-semibold text-[#032D60] mb-2 text-sm">{r.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader label="Emergency Protocols" headline="Controls when you need them most" />
          <div className="grid gap-4 md:grid-cols-3">
            {emergencyItems.map((e, i) => (
              <motion.div key={e.title} {...fade(i * 0.06)} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <e.icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <div className="font-semibold text-[#032D60] mb-2">{e.title}</div>
                <p className="text-[14px] leading-relaxed text-[#444]">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
