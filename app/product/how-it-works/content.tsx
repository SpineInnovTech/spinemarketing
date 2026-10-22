"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap, TrendingUp, Clock, BarChart3, GitMerge, ArrowRight, Database, Eye
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

const signalPatterns = [
  { signal: "Churn Risk", inputs: "Usage dropped 30% AND champion left AND ticket spike", score: "87", color: "text-red-400", border: "border-red-500/20" },
  { signal: "Expansion Opportunity", inputs: "Invoice paid early + Usage up + New stakeholders", score: "74", color: "text-emerald-400", border: "border-emerald-500/20" },
];

const briefComponents = [
  { title: "Portfolio Health Changes", desc: "Accounts that moved from Healthy to At-Risk overnight." },
  { title: "Pending Approvals", desc: "Actions needing attention today, ranked by impact." },
  { title: "Follow-Up Reminders", desc: "Prior session promises surfaced as reminders." },
  { title: "Competitive Mentions", desc: "Competitor names detected across communications." },
];

const exceptionItems = [
  { icon: BarChart3, color: "text-blue-400", title: "Anomaly Surfacing", desc: "Statistical outliers flagged with supporting evidence." },
  { icon: TrendingUp, color: "text-violet-400", title: "Trend Analysis", desc: "Week-over-week health trajectories with velocity indicators." },
  { icon: Clock, color: "text-amber-400", title: "Predictive Alerts", desc: "Renewal risk countdowns and deadline probability scores." },
];

const evidenceItems = [
  { icon: GitMerge, color: "text-purple-400", title: "Chain-of-Thought Tracing", desc: "Step-by-step AI reasoning traced to Spine records." },
  { icon: Database, color: "text-cyan-400", title: "Dual Context Mapping", desc: "System impact alongside business impact, side by side." },
  { icon: Zap, color: "text-emerald-400", title: "Source Attribution", desc: "Every claim points back to its source." },
];

const intelligenceFeatures = [
  {
    icon: Eye,
    title: "Cross-Stack Pattern Detection",
    desc: "Reads CRM, support, billing, email, and product — sees trends single-tool copilots miss.",
  },
  {
    icon: Zap,
    title: "Scored Signals",
    desc: "Converts normalized streams into scored signals, ranked by impact and confidence.",
  },
  {
    icon: Database,
    title: "One Detection Layer",
    desc: "Instead of AI per app, one detection layer over your entire stack.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Monitoring",
    desc: "Bound to Spine events — watches every normalized stream in real time.",
  },
];

export function ProductHowItWorksContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-40 bg-white">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product · How it Works
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[length:min(44px,var(--marketing-title-size))] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[length:min(64px,var(--marketing-title-size))]"
          >
            The Twin.{" "}
            <span className="text-primary">Signals, not searches.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            The continuous detection engine bound to Spine events. Watches normalized streams, runs pattern detection, and converts them into scored signals ranked by impact.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See the Twin →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Twin</p>
            <h2 className="section-heading">The continuous <span className="text-primary">detection engine</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {intelligenceFeatures.map(({ icon: Icon, title, desc }, i) => (
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
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Signal Patterns</p>
            <h2 className="section-heading">Cross-system <span className="text-primary">pattern detection</span></h2>
          </motion.div>
          <div className="space-y-5">
            {signalPatterns.map((s, i) => (
              <motion.div
                key={s.signal}
                {...fade(i * 0.07)}
                className={`rounded-2xl border ${s.border} bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-[18px] font-semibold tracking-[-0.03em] ${s.color}`}>{s.signal}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/30">Score</span>
                    <span className={`text-2xl font-bold ${s.color}`}>{s.score}</span>
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-[12px] font-mono text-white/50">{s.inputs}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Morning Brief</p>
            <h2 className="section-heading">Start your day <span className="text-primary">informed</span></h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {briefComponents.map((b, i) => (
              <motion.div key={b.title} {...fade(i * 0.06)} className="arvio-card p-6">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{b.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.6] text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Exception-Based Intelligence</p>
            <h2 className="section-heading">Anomalies, trends, and <span className="text-primary">predictive alerts</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {exceptionItems.map((e, i) => (
              <motion.div key={e.title} {...fade(i * 0.07)} className="arvio-card p-7 text-center">
                <e.icon className={`mx-auto mb-4 h-7 w-7 ${e.color}`} />
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{e.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Evidence & Attribution</p>
            <h2 className="section-heading">Every insight <span className="text-primary">traced to source</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {evidenceItems.map((e, i) => (
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
            <TrendingUp className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] text-white">
              Intelligence that <span className="text-primary">compounds daily.</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              The more you use SpineWorkspace, the sharper its signals become.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/approval-gate-twin" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                Governance & Twin in Action →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
