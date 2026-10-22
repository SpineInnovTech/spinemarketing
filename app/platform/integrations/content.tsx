"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plug, RefreshCw, Globe, Zap, FileText, Shield, ArrowRight } from "lucide-react";

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

const inputTypes = [
  {
    icon: Plug,
    type: "The apps you already open",
    desc: "The CRM, the desk, billing, and chat stay themselves.",
    examples: ["Salesforce", "HubSpot", "Stripe", "Zendesk", "Jira", "Asana", "Slack"],
  },
  {
    icon: Zap,
    type: "What is already open",
    desc: "Files and conversations already in front of that person.",
    examples: ["Files on this computer", "The notes already open", "The tools this person may use"],
  },
  {
    icon: RefreshCw,
    type: "When something changes",
    desc: "A payment, a form, or a ticket update shows up in the workspace.",
    examples: ["Payments", "Forms", "Ticket updates"],
  },
  {
    icon: FileText,
    type: "Files",
    desc: "Spreadsheets, documents, and exports come in through the same connection.",
    examples: ["Spreadsheets", "Documents", "Exports"],
  },
];

const protocols = [
  {
    icon: Globe, accent: "#3b82f6", bg: "rgba(59,130,246,0.12)",
    name: "The apps",
    desc: "Each app stays itself. SpineWorkspace does not become a new home for the record.",
    tags: ["The record stays put", "The app stays in charge", "One connection"],
  },
  {
    icon: Zap, accent: "#8b5cf6", bg: "rgba(139,92,246,0.12)",
    name: "What is already open",
    desc: "The work uses the tools already open for that person before it reaches for anything else.",
    tags: ["This person", "This task", "Nothing assumed"],
  },
  {
    icon: RefreshCw, accent: "#a855f7", bg: "rgba(168,85,247,0.12)",
    name: "Updates",
    desc: "When a tool changes, the workspace can show the result.",
    tags: ["The workspace catches up", "The original tool stays in charge"],
  },
  {
    icon: FileText, accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    name: "Files",
    desc: "Spreadsheets and documents stay evidence until a person accepts a change.",
    tags: ["Evidence", "Not the record", "Until a person decides"],
  },
];

const services = [
  {
    icon: Plug, accent: "#06b6d4", bg: "rgba(6,182,212,0.12)",
    name: "One connection",
    desc: "The tools, files, and conversations you already use.",
  },
  {
    icon: Globe, accent: "#10b981", bg: "rgba(16,185,129,0.12)",
    name: "Each tool stays itself",
    desc: "They do not have to talk to each other directly.",
  },
  {
    icon: Shield, accent: "#f43f5e", bg: "rgba(244,63,94,0.12)",
    name: "A person decides",
    desc: "An accepted change is written back through the tool that owns the record.",
  },
];

export function PlatformIntegrationsContent() {
  return (
    <>
      <section className="marketing-surface relative overflow-hidden pb-28 pt-40 bg-white">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Platform · Integrations
          </motion.div>
          <motion.h1
            {...heroFade(0.22)}
            className="text-[length:min(44px,var(--marketing-title-size))] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[length:min(64px,var(--marketing-title-size))]"
          >
            The tools you{" "}
            <span className="text-primary">already use</span>
          </motion.h1>
          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            The apps, files, and conversations you already use, through one connection.
          </motion.p>
          <motion.div {...heroFade(0.5)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact?intent=demo" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90">
              See integrations live →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">Input Types</p>
            <h2 className="section-heading">What comes in, <span className="text-primary">kept apart</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {inputTypes.map(({ icon: Icon, type, desc, examples }, i) => (
              <motion.div key={type} {...fade(i * 0.07)} className="arvio-card p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-foreground">{type}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-muted-foreground mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {examples.map((ex) => (
                    <span key={ex} className="rounded-full border border-border/60 bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">{ex}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">One connection</p>
            <h2 className="section-heading">Four ways in. <span className="text-primary">The record stays put.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {protocols.map((p, i) => (
              <motion.div
                key={p.name}
                {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: p.bg }}>
                  <p.icon className="w-5 h-5" style={{ color: p.accent }} />
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white mb-2">{p.name}</h3>
                <p className="text-[13px] font-medium leading-[1.65] text-white/50 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[900px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">What this connection does</p>
            <h2 className="section-heading">Connect. Keep apart. <span className="text-primary">Let a person decide.</span></h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.name} {...fade(i * 0.07)} className="arvio-card p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: s.bg }}>
                  <s.icon className="w-5 h-5" style={{ color: s.accent }} />
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{s.name}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.6] text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface bg-white">
        <div className="mx-auto max-w-[680px] px-4 text-center">
          <motion.div {...fade(0)}>
            <Plug className="mx-auto mb-4 h-7 w-7 text-primary" />
            <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] text-white">
              Connect once. <span className="text-primary">The tools stay in charge.</span>
            </h2>
            <p className="mx-auto mt-4 text-[15px] font-medium leading-[1.6] text-white/40">
              An accepted change is written back through the tool that owns the record.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/platform/spine-fabric" className="inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[13px] font-semibold text-white/60 hover:border-white/30 hover:text-white transition-colors">
                How the connection works →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
