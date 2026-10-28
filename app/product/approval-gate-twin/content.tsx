"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserCheck, Eye, Edit3, ShieldCheck, AlertTriangle, RotateCcw,
  Mail, Database, GitBranch, FileText, Settings2, BarChart3, Zap, Cpu, RefreshCw, Clock
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

const governanceFeatures = [
  {
    icon: Eye,
    title: "Proposed Action Queue",
    desc: "AI suggestions await approval with full Customer view context and evidence links.",
  },
  {
    icon: AlertTriangle,
    title: "Impact Preview",
    desc: "See which records and tools will change before you approve.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence Scoring",
    desc: "Tunable by team and signal type — you control the threshold.",
  },
  {
    icon: Edit3,
    title: "Edit Before Execute",
    desc: "Modify AI drafts before the Governance allows execution.",
  },
];

const approvalTiers = [
  { tier: "Tier 1", who: "CSM", what: "Routine updates, standard emails", impact: "< $1K impact" },
  { tier: "Tier 2", who: "Manager", what: "Escalations, contract changes", impact: "$1K – $10K impact" },
  { tier: "Tier 3", who: "VP / Executive", what: "Strategic actions, pricing changes", impact: "> $10K impact" },
];

const safetyMechanisms = [
  { label: "Department-Scoped Access", desc: "AI cannot access unauthorized departments. Enforced before any action surfaces." },
  { label: "Immutable Audit Trail", desc: "Append-only log of every approval decision. Timestamped and traceable." },
  { label: "Emergency Override", desc: "Traceable exception handling with mandatory governance logging." },
];

const virtualState = [
  { title: "Always-Current Context", desc: "Real-time representation of your entire work context from one screen." },
  { title: "Live Synchronization", desc: "Updates appear as they happen — no manual refresh needed." },
  { title: "Context Persistence", desc: "Survives refreshes and device switches. Never starts from scratch." },
];

const scoringLevels = [
  { score: "0 – 30", label: "Informational", desc: "Background monitoring. Changes logged, no action surfaced.", color: "text-emerald-400", border: "border-emerald-500/20" },
  { score: "31 – 70", label: "Watch", desc: "Surfaced in Morning Brief for awareness.", color: "text-amber-400", border: "border-amber-500/20" },
  { score: "71 – 100", label: "Critical / Action Required", desc: "Immediate notification with Proposed Action generated.", color: "text-red-400", border: "border-red-500/20" },
];

const actionLibrary = [
  {
    icon: Mail, color: "text-blue-400", name: "Communication Actions",
    items: ["Email drafting with tone adjustment", "Slack message composition", "Meeting agenda generation"],
  },
  {
    icon: Database, color: "text-violet-400", name: "Data Update Actions",
    items: ["CRM field updates with rollback", "Health score adjustments", "Opportunity stage progression"],
  },
  {
    icon: GitBranch, color: "text-purple-400", name: "Task Creation",
    items: ["Ticket creation with Spine context", "Auto-assignment by workload", "Due date recommendation"],
  },
  {
    icon: FileText, color: "text-amber-400", name: "Document Generation",
    items: ["QBR decks from Account 360", "Renewal proposals with analytics", "Executive briefs with KPIs"],
  },
];

const emergencyControls = [
  { icon: AlertTriangle, color: "text-red-400", title: "Pause Twin", desc: "Instant suspension of all proactive suggestions." },
  { icon: Eye, color: "text-violet-400", title: "Override with Audit", desc: "Force-execute with mandatory justification entry." },
  { icon: RotateCcw, color: "text-cyan-400", title: "Recovery Interface", desc: "Look at what happened and review fixes. Whether it can be undone depends on the tool and the action." },
];

export function ApprovalGateTwinContent() {
  return (
    <>
      <section className="marketing-surface relative overflow-hidden pb-28 pt-40 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] rounded-full blur-[220px]" style={{ background: "rgba(27,167,132,0.07)" }} />
        </div>
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product · Governance & Twin
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[length:min(44px,var(--marketing-title-size))] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[length:min(64px,var(--marketing-title-size))]"
          >
            AI proposes.{" "}
            <span className="text-primary">You approve.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Consequential actions require the right authority, reviewable evidence, and an observed outcome. Routing and recovery depend on the workflow and connected system.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See the approval flow →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Governance</p>
            <h2 className="section-heading">A person approves <span className="text-primary">by design</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {governanceFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[900px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Tiered Approvals</p>
            <h2 className="section-heading">Right person. <span className="text-primary">Right authority.</span></h2>
          </motion.div>
          <motion.div {...fade(0.1)} className="overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[15%]">Tier</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[15%]">Who</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary">What</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-primary w-[20%]">Impact</th>
                </tr>
              </thead>
              <tbody>
                {approvalTiers.map((t, i) => (
                  <tr key={t.tier} className={i < approvalTiers.length - 1 ? "border-b border-border/40" : ""}>
                    <td className="px-5 py-4 text-[13px] font-bold text-primary">{t.tier}</td>
                    <td className="px-5 py-4 text-[13px] font-semibold text-foreground">{t.who}</td>
                    <td className="px-5 py-4 text-[13px] text-muted-foreground">{t.what}</td>
                    <td className="px-5 py-4 text-[12px] font-semibold text-white/40">{t.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twin Trigger Scoring</p>
            <h2 className="section-heading">When signals <span className="text-primary">warrant action</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {scoringLevels.map((s, i) => (
              <motion.div
                key={s.label}
                {...fade(i * 0.07)}
                className={`rounded-2xl border ${s.border} bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7`}
              >
                <div className={`text-2xl font-bold mb-2 ${s.color}`}>{s.score}</div>
                <h3 className={`text-[15px] font-semibold tracking-[-0.02em] ${s.color} mb-2`}>{s.label}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-white/50">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twin in Action</p>
            <h2 className="section-heading">Your AI copilot. <span className="text-primary">Always current.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {virtualState.map((v, i) => (
              <motion.div key={v.title} {...fade(i * 0.07)} className="arvio-card p-7 text-center">
                <Cpu className="mx-auto mb-4 h-6 w-6 text-primary" />
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{v.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Action Library</p>
            <h2 className="section-heading">What the Twin <span className="text-primary">can do</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {actionLibrary.map((a, i) => (
              <motion.div key={a.name} {...fade(i * 0.07)} className="arvio-card p-7">
                <a.icon className={`mb-4 h-6 w-6 ${a.color}`} />
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground mb-3">{a.name}</h3>
                <ul className="space-y-1.5">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-muted-foreground">
                      <Zap className="w-3 h-3 mt-0.5 text-primary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[900px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Safety Mechanisms</p>
            <h2 className="section-heading">Guardrails at <span className="text-primary">every layer</span></h2>
          </motion.div>
          <div className="space-y-4">
            {safetyMechanisms.map((m, i) => (
              <motion.div key={m.label} {...fade(i * 0.06)} className="arvio-card p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{m.label}</h3>
                    <p className="mt-1 text-[13px] font-medium leading-[1.6] text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Emergency Controls</p>
            <h2 className="section-heading">Pause. Review. <span className="text-primary">Check.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {emergencyControls.map((e, i) => (
              <motion.div key={e.title} {...fade(i * 0.07)} className="arvio-card p-7 text-center">
                <e.icon className={`mx-auto mb-4 h-7 w-7 ${e.color}`} />
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{e.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface bg-white">
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <UserCheck className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] text-white">
              AI that works <span className="text-primary">with you, not for you.</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              Allowed work, decisions you can review, and a check that results match.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/security" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                Security & compliance →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
