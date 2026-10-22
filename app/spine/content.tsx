"use client";

import { motion } from "framer-motion";
import {
  Database,
  MessageSquare,
  FileText,
  GitMerge,
  Lock,
  Eye,
  Brain,
  CheckSquare,
  History,
  Zap,
} from "lucide-react";

const spineCapabilities = [
  {
    icon: Database,
    title: "Structured data flows",
    desc: "CRM, billing, support, and usage data flowing into SpineWorkspace.",
  },
  {
    icon: MessageSquare,
    title: "Unstructured context",
    desc: "Emails, transcripts, and conversations indexed alongside records.",
  },
  {
    icon: FileText,
    title: "Session Summaries",
    desc: "Auditable AI outputs stored as first-class data.",
  },
  {
    icon: GitMerge,
    title: "Entity-level unification",
    desc: "Every data point linked to the right entity across apps.",
  },
];

const hitlSteps = [
  {
    label: "Signal detected",
    desc: "Cross-system pattern surfaces from SpineWorkspace.",
  },
  {
    label: "AI reasons with evidence",
    desc: "The record, the evidence, and the other options.",
  },
  {
    label: "Surfaced in the Twin",
    desc: "Recommendation appears with complete evidence trail.",
  },
  {
    label: "You approve",
    desc: "Nothing executes until you approve. Review is structural.",
  },
  {
    label: "Action executes in the Workspace",
    desc: "Approved actions execute and Session Summary is logged.",
  },
];

const differentiators = [
  {
    icon: Lock,
    title: "Vendor-neutral",
    desc: "Sits above your apps — reasons across all of them.",
  },
  {
    icon: Eye,
    title: "Adaptive",
    desc: "Adapts as your stack changes. Context keeps accumulating.",
  },
  {
    icon: Brain,
    title: "Evidence-first",
    desc: "Every AI output tied to its source data.",
  },
  {
    icon: CheckSquare,
    title: "A person decides",
    desc: "Review cannot be bypassed by any workflow or API.",
  },
  {
    icon: History,
    title: "Permanent audit",
    desc: "Every action and approval logged immutably.",
  },
  {
    icon: Zap,
    title: "The view for this role",
    desc: "Sales, operations, and leadership see the same work in the view they need.",
  },
];

export function SpineContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="marketing-surface relative overflow-hidden pb-24 pt-40 bg-white"
      >
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Spine &amp; Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[length:min(48px,var(--marketing-title-size))] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[length:min(64px,var(--marketing-title-size))]"
          >
            The intelligence layer{" "}
            <span className="text-primary">above your apps.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-8 max-w-2xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          >
            A vendor-neutral layer unifying records, conversations, and AI outputs — every action waits for human approval.
          </motion.p>
        </div>
      </section>

      {/* What SpineWorkspace does */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Three flows.{" "}
              <span className="text-primary">One unified truth.</span>
            </h2>
            <p className="section-subheading mt-4">
              Truth, Context, and Session Summaries unified into one intelligence layer.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spineCapabilities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                className="arvio-card p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* a person flow */}
      <section
        className="arvio-section marketing-surface bg-white"
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-[length:min(40px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[length:min(48px,var(--marketing-heading-size))]">
              Human-in-the-loop is{" "}
              <span className="text-primary">not a setting.</span>
            </h2>
            <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] text-white/55">
              The Review is built into the execution path. Nothing bypasses it.
            </p>
          </motion.div>
          <div className="relative mx-auto mt-16 max-w-3xl">
            {hitlSteps.map(({ label, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="relative mb-8 flex gap-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                    {i + 1}
                  </div>
                  {i < hitlSteps.length - 1 && (
                    <div className="mt-2 h-full w-px bg-white/10" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-white">
                    {label}
                  </h3>
                  <p className="mt-1.5 text-[14px] font-medium leading-[1.6] text-white/45">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What makes SpineWorkspace{" "}
              <span className="text-primary">different</span>
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.07 }}
                className="arvio-card p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
