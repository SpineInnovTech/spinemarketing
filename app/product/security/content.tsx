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
  { title: "Your Data, Your Rules", desc: "Your original tools stay in charge; any copies and access must follow set rules." },
  { title: "Where data lives", desc: "Where it is stored and whether it crosses borders depends on the provider and your contract." },
  { title: "How long data is kept", desc: "How long data is kept, and the controls around it, need setup and a legal review." },
];

const auditFeatures = [
  { icon: FileText, title: "Decision evidence", desc: "A trail anyone can review should link each decision to who made it, their right to, and the result." },
  { icon: Eye, title: "Rebuild the picture", desc: "Rebuilding what happened depends on the source evidence you are allowed to see and what was recorded." },
  { icon: RotateCcw, title: "Result tracking", desc: "Record what was tried, what it changed, and whether the result matched, where supported." },
];

const rbacItems = [
  { title: "Access by role, at a glance", desc: "What each person can do should match their real role and what each provider allows." },
  { title: "Boundaries by team", desc: "Lines around teams and data areas need rules that are enforced." },
  { title: "Connection keys", desc: "How connection keys are set, changed, and recorded should be checked per tool." },
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
          headline="Controlled execution and audit design."
          subhead="Example views of how SpineWorkspace keeps control. These screens do not, on their own, prove what is switched on in your setup."
          primaryCta={{ label: "Contact security team", href: "/contact?intent=security" }}
        />

        <Section variant="muted">
          <SectionHeader label="Trust & Governance Dashboard" headline="Looking into something vs. acting on it" />
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
          <SectionHeader label="Approval Audit Center" headline="A clear record of decisions and checks" />
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
          <SectionHeader label="Access Control Matrix" headline="What each person can do, set by role" />
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
