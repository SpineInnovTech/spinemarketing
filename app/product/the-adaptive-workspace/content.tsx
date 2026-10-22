"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu, Users, Briefcase, User, BarChart3, DollarSign, Server, Globe,
  TrendingUp, Activity, Eye, Database, GitBranch, Clock, AlertTriangle,
  CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";

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

const viewCategories = [
  {
    category: "Customer & Revenue",
    icon: Users,
    views: [
      { view: "Account Success", desc: "Customer view cards, renewal risk, QBR prep", icon: TrendingUp, accent: true },
      { view: "Customer Success", desc: "Health heatmaps, churn mitigation, sponsor tracking", icon: Users },
      { view: "RevOps", desc: "Quote-to-Cash velocity, SLA grids, forecasts", icon: BarChart3 },
    ],
  },
  {
    category: "Operations & Execution",
    icon: Briefcase,
    views: [
      { view: "Business Operations", desc: "Pipeline correlation, Flow Trace, bottlenecks", icon: Activity },
      { view: "Executive Oversight", desc: "Monday Brief, Board Pack, cross-dept metrics", icon: Eye },
      { view: "Finance", desc: "Cash flow cockpit, collection priority, revenue risk", icon: DollarSign },
    ],
  },
  {
    category: "Technical & Personal",
    icon: Server,
    views: [
      { view: "IT & DevOps", desc: "Connector status, schema health, API logs", icon: Server },
      { view: "Partner Manager", desc: "Co-sell pipeline, partner health, MDF tracking", icon: Globe },
      { view: "Personal Workspace", desc: "My accounts, tasks, priorities, morning brief", icon: User },
    ],
  },
];

const entityTypes = [
  {
    type: "Account",
    icon: "🏢",
    fields: ["Health Score", "ARR", "Renewal Date", "Open Tickets", "Last Contact", "Champion Status"],
    systems: ["Salesforce", "HubSpot", "Stripe", "Zendesk"],
  },
  {
    type: "Contact",
    icon: "👤",
    fields: ["Role", "Engagement Score", "Email History", "Last Meeting", "Decision Authority"],
    systems: ["Salesforce", "HubSpot", "Gmail", "Calendly"],
  },
  {
    type: "Deal",
    icon: "💼",
    fields: ["Stage", "Value", "Close Date", "Probability", "Blockers", "Next Step"],
    systems: ["Salesforce", "HubSpot", "Slack", "Asana"],
  },
  {
    type: "Project",
    icon: "📋",
    fields: ["Status", "Milestone", "Owner", "Dependencies", "Budget"],
    systems: ["Jira", "Asana", "Monday", "Notion"],
  },
];

export function TheAdaptiveWorkspaceContent() {
  const [activeCategory, setActiveCategory] = useState(0);

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
            Product · The Adaptive Workspace
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[length:min(44px,var(--marketing-title-size))] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[length:min(64px,var(--marketing-title-size))]"
          >
            Your daily surface{" "}
            <span className="text-primary">on top of SpineWorkspace.</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Pulls Spine entities into domain-specific views. Customer Success, RevOps, and BizOps share the same underlying reality — each team sees what they need, nothing more.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See the workspace →
            </Link>
            <Link href="/product/how-it-works" className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[14px] font-semibold tracking-[-0.02em] text-white/60 transition-colors hover:border-white/30 hover:text-white">
              How it works →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Workspace Views</p>
            <h2 className="section-heading">9 views. <span className="text-primary">One workspace.</span></h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {viewCategories.map((cat, i) => (
              <button
                key={cat.category}
                aria-pressed={activeCategory === i}
                aria-controls="workspace-view-cards"
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                  activeCategory === i
                    ? "bg-primary text-white"
                    : "border border-white/10 bg-white/5 text-white/50 hover:border-white/20"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.category}
              </button>
            ))}
          </div>
          <div id="workspace-view-cards" className="grid gap-5 sm:grid-cols-3">
            {viewCategories[activeCategory].views.map((v, i) => (
              <motion.div key={v.view} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{v.view}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Customer view</p>
            <h2 className="section-heading">Every record. <span className="text-primary">Every source.</span></h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.55] text-muted-foreground">
              Canonical objects assembled from every connected tool.
            </p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {entityTypes.map((e, i) => (
              <motion.div
                key={e.type}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{e.icon}</span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-white">{e.type}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {e.fields.map((f) => (
                    <span key={f} className="rounded-full bg-white/[0.06] border border-white/[0.08] px-2.5 py-1 text-[11px] font-medium text-white/50">{f}</span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 mb-2">Sources</p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.systems.map((s) => (
                      <span key={s} className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[900px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Workspace Features</p>
            <h2 className="section-heading">Built for <span className="text-primary">operational speed</span></h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Clock, title: "Real-Time Sync", desc: "Near real-time entity state updates to every client." },
              { icon: GitBranch, title: "Cross-Tool Context", desc: "See CRM, billing, and support data side by side." },
              { icon: AlertTriangle, title: "Exception Surfacing", desc: "Anomalies flagged automatically with evidence." },
              { icon: CheckCircle2, title: "Action-Ready", desc: "Proposed Actions attached to every entity view." },
            ].map((f, i) => (
              <motion.div key={f.title} {...fade(i * 0.06)} className="arvio-card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary-icon)" }}>
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{f.title}</h3>
                    <p className="mt-1 text-[13px] font-medium leading-[1.6] text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface bg-white">
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Cpu className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] text-white">
              Your workspace. <span className="text-primary">Your context.</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              Every role gets a purpose-built view of the same the record.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/product/approval-gate-twin" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                Governance & Twin →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
