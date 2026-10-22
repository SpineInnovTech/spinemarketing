"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  Check,
  ArrowRight,
  GitMerge,
  Fingerprint,
  ScanSearch,
  ShieldCheck,
  Gauge,
  MousePointerClick,
  Layers,
  Zap,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring", bounce: 0.2, duration: 0.6, delay },
});

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", damping: 16, mass: 1, stiffness: 52, delay },
});

function HeroMatchVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rightRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const leftEntities = [
    { name: "Acme Corp", system: "Salesforce", confidence: 94 },
    { name: "Acme Inc.", system: "Stripe", confidence: 87 },
    { name: "ACME Corporation", system: "Zendesk", confidence: 72 },
  ];

  const rightResolved = [
    { name: "Acme Corp", status: "Matched", color: "text-emerald-400" },
    { name: "Globex Ltd", status: "Review", color: "text-amber-400" },
    { name: "Initech", status: "Matched", color: "text-emerald-400" },
  ];

  return (
    <div ref={containerRef} className="relative w-full max-w-[420px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          {leftEntities.map((e, i) => (
            <motion.div
              key={e.name}
              {...heroFade(0.8 + i * 0.15)}
              ref={leftRefs[i]}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
            >
              <div className="text-[13px] font-semibold text-white">{e.name}</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[11px] text-white/40">{e.system}</span>
                <span className="ml-auto text-[11px] font-bold text-primary">{e.confidence}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={centerRef} className="mt-8 flex flex-col items-center gap-1.5">
          <motion.div
            {...heroFade(1.2)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            <GitMerge className="h-6 w-6" />
          </motion.div>
          <motion.span {...heroFade(1.3)} className="text-[10px] font-semibold text-white/40">
            Resolution
          </motion.span>
        </div>

        <div className="flex flex-col gap-3">
          {rightResolved.map((e, i) => (
            <motion.div
              key={e.name}
              {...heroFade(1.0 + i * 0.15)}
              ref={rightRefs[i]}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
            >
              <div className="text-[13px] font-semibold text-white">{e.name}</div>
              <div className={`mt-1 text-[11px] font-bold ${e.color}`}>{e.status}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {leftRefs.map((ref, i) => (
        <AnimatedBeam
          key={`l-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={15 * (i % 2 === 0 ? 1 : -1)}
        />
      ))}
      {rightRefs.map((ref, i) => (
        <AnimatedBeam
          key={`r-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={15 * (i % 2 === 0 ? -1 : 1)}
          reverse
        />
      ))}
    </div>
  );
}

const matchStages = [
  {
    icon: ScanSearch,
    color: "text-cyan-400",
    title: "Multi-Signal Matching",
    desc: "Name, email, domain, and behavioral signals scored together.",
  },
  {
    icon: Gauge,
    color: "text-emerald-400",
    title: "0–100 Confidence Index",
    desc: "Every match gets a transparent confidence score.",
  },
  {
    icon: Fingerprint,
    color: "text-violet-400",
    title: "Automatic Dedup",
    desc: "High-confidence duplicates merged automatically.",
  },
  {
    icon: MousePointerClick,
    color: "text-amber-400",
    title: "Manual Resolution UI",
    desc: "Low-confidence matches queued for human review.",
  },
  {
    icon: ShieldCheck,
    color: "text-primary",
    title: "Human-Approved Merges",
    desc: "You approve every merge. No silent overwrites.",
  },
  {
    icon: Layers,
    color: "text-blue-400",
    title: "Cross-Tool Unification",
    desc: "One view of the customer, across the tools you already use.",
  },
];

const comparisons = [
  { before: "Same customer, 6 different records", after: "One view of the customer" },
  { before: "Manual spreadsheet dedup", after: "Automatic confidence-scored matching" },
  { before: "Duplicates silently corrupt reports", after: "Every merge human-approved" },
  { before: "No idea which record is truth", after: "0–100 confidence on every match" },
];

const useCases = [
  {
    num: "01",
    title: "Cross-CRM entity matching",
    desc: "Records from Salesforce, HubSpot, and Stripe matched by name, domain, and email signals.",
  },
  {
    num: "02",
    title: "Duplicate detection at ingest",
    desc: "New records scored against existing entities before entering SpineWorkspace.",
  },
  {
    num: "03",
    title: "Human review queue",
    desc: "Low-confidence matches surfaced in a resolution UI. You decide, not the algorithm.",
  },
  {
    num: "04",
    title: "Canonical entity assembly",
    desc: "Approved matches merge into one customer view across every tool.",
  },
];

export function AccountSuccessContent() {
  return (
    <>
      <section className="marketing-surface relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 50%, rgba(27,167,132,0.06) 0%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <motion.div
                {...heroFade(0.2)}
                className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] border border-white/10 bg-white/[0.04] px-4 py-1.5"
              >
                <GitMerge className="h-3.5 w-3.5 text-primary" />
                <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/70">
                  Resolution
                </span>
              </motion.div>
              <motion.h1
                {...heroFade(0.4)}
                className="text-[length:min(40px,var(--marketing-title-size))] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[length:min(52px,var(--marketing-title-size))] lg:text-[length:min(60px,var(--marketing-title-size))]"
              >
                One customer.{" "}
                <span className="text-primary">One record.</span>
              </motion.h1>
              <motion.p
                {...heroFade(0.6)}
                className="mx-auto mt-8 max-w-2xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-white/55 lg:mx-0"
              >
                Cross-tool entity matching and dedup. Automatic confidence scoring with human review.
              </motion.p>
              <motion.div
                {...heroFade(0.8)}
                className="mt-10 flex flex-col items-center gap-2.5 sm:flex-row lg:justify-start justify-center"
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
                  <Link href="/contact?intent=demo">Book a demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/platform">See how it works</Link>
                </Button>
              </motion.div>
            </div>

            <div className="hidden lg:flex justify-end">
              <HeroMatchVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fade()}>
              <h2 className="section-heading">
                Same customer, six different records{" "}
                <span className="text-primary">across six tools.</span>
              </h2>
              <div className="mt-8 space-y-4 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  CRM says &ldquo;Acme Corp.&rdquo; Billing says &ldquo;Acme Inc.&rdquo; Support has both. Reports are wrong before you start.
                </p>
                <p className="text-foreground font-semibold">
                  Resolution fixes that — automatically.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade()} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              Match. Score. Merge.{" "}
              <span className="text-primary">You approve.</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {matchStages.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.06)}
                className="arvio-card p-6"
              >
                <Icon className={`mb-3 h-5 w-5 ${color}`} />
                <h3 className="text-[15px] font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface bg-white">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade()} className="mx-auto max-w-2xl text-center">
            <h2 className="text-[length:min(40px,var(--marketing-heading-size))] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[length:min(48px,var(--marketing-heading-size))]">
              Every other tool shows you{" "}
              <span className="text-white/40">duplicates.</span>
            </h2>
            <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-semibold leading-[1.5] text-primary">
              Resolution shows you the record.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 sm:gap-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500/40" />
                  <span className="text-[14px] font-medium leading-[1.5] text-white/30">
                    {row.before}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary/60" />
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-[14px] font-semibold leading-[1.5] text-white/90">
                    {row.after}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <motion.div {...fade()}>
                  <h2 className="section-heading-sm">
                    Resolution{" "}
                    <span className="text-primary">in numbers</span>
                  </h2>
                </motion.div>
                <ul className="mt-8 space-y-3">
                  {[
                    "Entities matched across every connected tool automatically",
                    "Confidence score on every proposed match — 0 to 100",
                    "High-confidence matches are prepared for authorized review",
                    "Low-confidence matches go to your review queue",
                    "Supported changes retain decision and source evidence",
                    "View updates track source freshness and reconciliation",
                  ].map((outcome, i) => (
                    <motion.li key={i} {...fade(i * 0.06)} className="flex items-start gap-3">
                      <div
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "var(--gradient-primary-icon)" }}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-foreground">
                        {outcome}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8 lg:pt-16">
                {[
                  { value: 100, suffix: "", label: "Confidence index range" },
                  { value: 6, suffix: "+", label: "Signal types per match" },
                  { value: 0, suffix: "", label: "Silent merges", prefix: "" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} {...fade(i * 0.12)} className="text-center lg:text-left">
                    <div className="text-[length:min(48px,var(--marketing-heading-size))] font-bold tracking-[-0.04em]">
                      {stat.prefix !== undefined ? (
                        <span className="text-foreground">{stat.prefix}</span>
                      ) : null}
                      <NumberTicker
                        value={stat.value}
                        delay={0.2 + i * 0.15}
                        className="text-[48px] font-bold tracking-[-0.04em] text-foreground"
                      />
                      <span className="text-primary">{stat.suffix}</span>
                    </div>
                    <div className="mt-1 text-[15px] font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade()} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              How teams use{" "}
              <span className="text-primary">Resolution</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                {...fade(i * 0.08)}
                className="arvio-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    {num}
                  </span>
                  <h3 className="text-[15px] font-semibold tracking-[-0.03em]">{title}</h3>
                </div>
                <p className="text-[13px] font-medium leading-[1.6] text-foreground/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade()} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">
              Stop guessing which record is real.{" "}
              <span className="text-primary">Resolve it.</span>
            </h2>
            <p className="mt-6 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              Confidence-scored matching, authorized review, and traceable source records.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-white/20 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
