"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  ShieldCheck,
  Database,
  MessageSquare,
  BookOpen,
  AlertTriangle,
  TrendingUp,
  Users,
  Target,
  BarChart3,
} from "lucide-react";

const threeLayers = [
  {
    icon: Database,
    label: "Truth",
    desc: "Structured data from connected systems",
    color: "rgb(27,167,132)",
  },
  {
    icon: MessageSquare,
    label: "Context",
    desc: "Emails, Slack, docs, and conversations",
    color: "rgb(52,211,153)",
  },
  {
    icon: BookOpen,
    label: "Session Summaries",
    desc: "Governed AI outputs entering knowledge",
    color: "rgb(110,231,183)",
  },
];

const insightTypes = [
  {
    icon: AlertTriangle,
    label: "Health dropping",
    example: "Acme Corp usage dropped 42%, renewal in 45 days",
  },
  {
    icon: TrendingUp,
    label: "Revenue changing",
    example: "Monthly sales down 20% from top 3 accounts",
  },
  {
    icon: Users,
    label: "Customer going quiet",
    example: "Regular customer hasn't ordered in 30 days",
  },
  {
    icon: Target,
    label: "Goal at risk",
    example: "API adoption at 23% — target was 60% by Q3",
  },
  {
    icon: BarChart3,
    label: "Multiple signals firing",
    example: "Payment failed + order cancelled + complaint — same customer",
  },
];

const approvalSteps = [
  {
    num: "01",
    title: "The Twin generates",
    desc: "Reads all layers, connects dots, produces evidence.",
  },
  {
    num: "02",
    title: "Governance scores",
    desc: "Confidence, evidence chain, source freshness — all visible.",
  },
  {
    num: "03",
    title: "You review",
    desc: "Approve, edit, or reject. Nothing happens without you.",
  },
  {
    num: "04",
    title: "Becomes knowledge",
    desc: "Approved summaries enter knowledge. Intelligence compounds.",
  },
];

export function AIContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-white"
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-1.5"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/60">
                The Twin
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.4,
              }}
              className="text-[length:min(48px,var(--marketing-title-size))] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[length:min(54px,var(--marketing-title-size))] lg:text-[length:min(64px,var(--marketing-title-size))]"
            >
              Your personal AI operator,{" "}
              <span className="text-primary">grounded in your business.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.6,
              }}
              className="mx-auto mt-8 max-w-2xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Assembles evidence, explains why a signal exists, proposes concrete actions. Operates on governed context from the SpineWorkspace, not screen-scraped guesses. Always shows its reasoning before asking for approval. And through the Twin, it coordinates specialist agents behind the scenes — you talk to one intelligence, not a menu of bots.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Three Layers */}
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
              The Twin reads <span className="text-primary">three layers</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium text-muted-foreground">
              Every entity. Every insight. All three layers combined.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {threeLayers.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className="arvio-card p-6 text-center"
              >
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {label}
                </h3>
                <p className="mt-2 text-[13px] font-medium text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            className="mx-auto mt-8 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-5"
          >
            <p className="text-center text-[14px] font-semibold text-foreground">
              Usage drop <span className="text-muted-foreground">(Truth)</span>{" "}
              + budget freeze in email{" "}
              <span className="text-muted-foreground">(Context)</span> + escalation rule{" "}
              <span className="text-muted-foreground">(Session Summaries)</span>{" "}
              ={" "}
              <span className="text-primary">
                churn risk signal with full evidence
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What The Twin catches */}
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
              10 types of insights.{" "}
              <span className="text-primary">Max 3 per entity per day.</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium text-muted-foreground">
              What happened, why it matters, what to do next.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {insightTypes.map(({ icon: Icon, label, example }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5,
                }}
                className="arvio-card flex items-start gap-4 p-5"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold tracking-[-0.02em]">
                    {label}
                  </p>
                  <p className="mt-1 text-[12px] font-medium text-muted-foreground italic">
                    &ldquo;{example}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Twin lives in the Twin */}
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
              The Twin <span className="text-primary">proposes</span>.
              The Workspace <span className="text-primary">executes</span>.
            </h2>
            <p className="mt-4 text-[15px] font-medium text-muted-foreground">
              The Twin surfaces insights. When you approve, the Workspace executes.
            </p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              {
                label: "The Twin proposes",
                desc: "Signals surface with evidence. You decide.",
              },
              {
                label: "You approve",
                desc: "Full reasoning visible. Approve, edit, or reject.",
              },
              {
                label: "Workspace — Executes",
                desc: "Approved actions update records and connected apps.",
              },
            ].map(({ label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className="arvio-card p-6 text-center"
              >
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-primary">
                  {label}
                </h3>
                <p className="mt-2 text-[13px] font-medium text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-center text-[14px] font-semibold text-foreground"
          >
            The Twin proposes. You decide. The Workspace executes.
          </motion.p>
        </div>
      </section>

      {/* What makes the Twin different */}
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
              Not just a chatbot.{" "}
              <span className="text-primary">
                An AI that understands your work.
              </span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "Proactive, not reactive",
                desc: "Surfaces what matters before you ask.",
              },
              {
                num: "02",
                title: "Reads your apps, not just prompts",
                desc: "Full context from every connected app.",
              },
              {
                num: "03",
                title: "Complete context of your work",
                desc: "Every app, conversation, and decision connected.",
              },
              {
                num: "04",
                title: "Learns without polluting",
                desc: "Session summaries go through Governance.",
              },
              {
                num: "05",
                title: "Limited by design",
                desc: "Max 3 insights per entity per day.",
              },
            ].map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className="arvio-card flex items-start gap-4 p-5"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  {num}
                </span>
                <div>
                  <p className="text-[14px] font-semibold tracking-[-0.02em]">
                    {title}
                  </p>
                  <p className="mt-1 text-[12px] font-medium text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TruthLayer — Approval Flow */}
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-[40px] border border-primary/20 bg-primary/5 px-4 py-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-primary">
                Governance
              </span>
            </div>
            <h2 className="text-[length:min(40px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[length:min(48px,var(--marketing-heading-size))]">
              AI thinks in context.{" "}
              <span className="text-primary">
                You decide what becomes knowledge.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-medium leading-[1.5] text-white/40">
              Governance can&apos;t be bypassed or turned off. It&apos;s how the product is built.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-4">
            {approvalSteps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                {i < approvalSteps.length - 1 && (
                  <div className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-white/20 sm:block">
                    →
                  </div>
                )}
                <div
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg text-[14px] font-bold text-white"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  {num}
                </div>
                <p className="mt-3 text-[13px] font-semibold text-white">
                  {title}
                </p>
                <p className="mt-1 text-[11px] font-medium leading-[1.5] text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            className="mt-10 text-center"
          >
            <Button
              size="lg"
              className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-button)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">See Governance in action</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
