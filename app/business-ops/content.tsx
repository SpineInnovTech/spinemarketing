"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  StickyScrollReveal,
  StickyScrollFallback,
  type StickyScrollStep,
} from "@/components/ui/sticky-scroll-reveal";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  ArrowRight,
  Check,
  User,
  Building2,
  Settings,
  Monitor,
  Activity,
} from "lucide-react";
import { integrationLogoSrc } from "@/lib/integration-logos";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const opsLogos = [
  "Salesforce",
  "HubSpot",
  "Stripe",
  "QuickBooks",
  "Jira",
  "Notion",
  "Slack",
  "Asana",
  "Gmail",
  "Google Drive",
].map((name) => ({ name, src: integrationLogoSrc(name) }));

const comparisons = [
  {
    before: "Revenue numbers differ in every tool",
    after: "One unified revenue view — automatic",
  },
  {
    before: "Board deck assembled manually",
    after: "Reports build from live data in minutes",
  },
  {
    before: "Forecasts from last month's spreadsheet",
    after: "Real-time projections from actual data",
  },
  {
    before: "Problems found after they hit revenue",
    after: "Risks flagged early with evidence",
  },
  {
    before: "Each team sees its own slice",
    after: "Same truth — role-specific lenses",
  },
];

const fourViews = [
  {
    icon: User,
    role: "For Founders",
    desc: "ARR, cash, and risk — one screen, real time.",
  },
  {
    icon: Building2,
    role: "For CEOs",
    desc: "Revenue, pipeline, retention — board prep in minutes.",
  },
  {
    icon: Settings,
    role: "For COOs",
    desc: "Blockers, risks, broken handoffs — with evidence.",
  },
  {
    icon: Monitor,
    role: "For CTO/CIOs",
    desc: "Integration health, data quality, sync status.",
  },
];

const dayOneOutcomes = [
  "Cross-system operating view — assembled automatically",
  "Role-specific dashboards — same data, different lenses",
  "Board decks that build from live data",
  "Risk signals surfaced early with cross-system evidence",
  "AI reasons across your business — waits for approval",
  "Day-one value — no months of implementation",
];

/* ═══════════════════════════════════════════════════════════
   HERO VISUAL — Cross-System Workflow Cards (dark bg)
   ═══════════════════════════════════════════════════════════ */

function HeroBusinessOpsVisual() {
  const flows = [
    {
      from: { name: "Salesforce", src: integrationLogoSrc("Salesforce") },
      to: { name: "QuickBooks", src: integrationLogoSrc("QuickBooks") },
      label: "Revenue reconciled",
      status: "Live",
      statusColor: "text-emerald-400",
    },
    {
      from: { name: "Zendesk", src: integrationLogoSrc("Zendesk") },
      to: { name: "Slack", src: integrationLogoSrc("Slack") },
      label: "Escalation routed",
      status: "2m ago",
      statusColor: "text-white/40",
    },
    {
      from: { name: "Stripe", src: integrationLogoSrc("Stripe") },
      to: { name: "HubSpot", src: integrationLogoSrc("HubSpot") },
      label: "Pipeline updated",
      status: "Live",
      statusColor: "text-emerald-400",
    },
    {
      from: { name: "Jira", src: integrationLogoSrc("Jira") },
      to: { name: "Notion", src: integrationLogoSrc("Notion") },
      label: "Sprint synced",
      status: "5m ago",
      statusColor: "text-white/40",
    },
  ];

  return (
    <div className="w-full max-w-[380px] space-y-3">
      {flows.map((flow, i) => (
        <motion.div
          key={flow.label}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.8 + i * 0.15,
            duration: 0.6,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <img src={flow.from.src} alt={flow.from.name} width={20} height={20} className="h-5 w-5 object-contain" />
            </div>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <img src={flow.to.src} alt={flow.to.name} width={20} height={20} className="h-5 w-5 object-contain" />
            </div>
            <div className="ml-1 flex-1 min-w-0">
              <div className="text-[13px] font-semibold tracking-[-0.02em] text-white truncate">
                {flow.label}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {flow.status === "Live" && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              )}
              <span className={`text-[11px] font-semibold ${flow.statusColor}`}>
                {flow.status}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Operating summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="flex items-center justify-between rounded-2xl px-5 py-3"
        style={{ background: "var(--gradient-primary)" }}
      >
        <span className="text-[13px] font-semibold text-white">
          Operating Pulse
        </span>
        <div className="flex items-center gap-4">
          {[
            { val: "12", label: "Tools" },
            { val: "4", label: "Views" },
            { val: "Real-time", label: "Sync" },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="h-6 w-px bg-white/20" />}
              <div className="text-center">
                <div className="text-[16px] font-bold text-white">
                  {stat.val}
                </div>
                <div className="text-[9px] font-medium text-white/70">
                  {stat.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STICKY SCROLL VISUALS
   ═══════════════════════════════════════════════════════════ */

function OpsConnectVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rightRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const left = ["Salesforce", "Stripe", "Jira", "QuickBooks"].map((alt) => ({
    src: integrationLogoSrc(alt),
    alt,
  }));
  const right = ["HubSpot", "Slack", "Asana", "Gmail"].map((alt) => ({
    src: integrationLogoSrc(alt),
    alt,
  }));

  return (
    <div
      ref={containerRef}
      className="relative flex h-[340px] w-full max-w-[440px] items-center justify-between px-4"
    >
      <div className="flex flex-col gap-6">
        {left.map((t, i) => (
          <div
            key={t.alt}
            ref={leftRefs[i]}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white shadow-sm"
          >
            <img src={t.src} alt={t.alt} width={22} height={22} className="h-5 w-5 object-contain" />
          </div>
        ))}
      </div>
      <div ref={centerRef} className="flex flex-col items-center gap-1.5">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Image
            src="/icon.svg"
            alt="SpineWorkspace"
            width={28}
            height={28}
            className="brightness-0 invert"
          />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">
          SpineWorkspace
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {right.map((t, i) => (
          <div
            key={t.alt}
            ref={rightRefs[i]}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-white shadow-sm"
          >
            <img src={t.src} alt={t.alt} width={22} height={22} className="h-5 w-5 object-contain" />
          </div>
        ))}
      </div>
      {leftRefs.map((ref, i) => (
        <AnimatedBeam
          key={`l-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={20 * (i % 2 === 0 ? 1 : -1)}
        />
      ))}
      {rightRefs.map((ref, i) => (
        <AnimatedBeam
          key={`r-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={20 * (i % 2 === 0 ? -1 : 1)}
          reverse
        />
      ))}
    </div>
  );
}

function OpsNormalizeVisual() {
  const icons = ["Salesforce", "Stripe", "HubSpot", "QuickBooks", "Jira", "Slack", "Asana", "Gmail"].map((alt) => ({
    src: integrationLogoSrc(alt),
    alt,
  }));

  return (
    <div className="relative flex h-[340px] w-full max-w-[380px] items-center justify-center">
      <div className="z-10 flex flex-col items-center gap-1.5">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Image
            src="/icon.svg"
            alt="SpineWorkspace"
            width={32}
            height={32}
            className="brightness-0 invert"
          />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground">
          Unifying data
        </span>
      </div>
      <OrbitingCircles radius={130} duration={25} iconSize={36} path>
        {icons.map((icon) => (
          <div
            key={icon.alt}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-border/50 bg-white shadow-sm"
          >
            <img src={icon.src} alt={icon.alt} width={20} height={20} className="h-5 w-5 object-contain" />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

function OpsViewVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <div
        className="rounded-[20px] border border-border/50 bg-white p-6"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[15px] font-semibold tracking-[-0.02em]">
              Operating Dashboard
            </div>
            <div className="text-[12px] font-medium text-muted-foreground">
              All systems &middot; Real-time
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-700">
              Live
            </span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            { label: "MRR", value: "$184K", color: "text-emerald-600" },
            { label: "Pipeline", value: "$2.1M", color: "text-primary" },
            { label: "Churn Risk", value: "3.2%", color: "text-amber-600" },
            { label: "NPS", value: "71", color: "text-primary" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-muted p-3 text-center">
              <div
                className={`text-[20px] font-semibold tracking-[-0.03em] ${s.color}`}
              >
                {s.value}
              </div>
              <div className="text-[11px] font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            {
              system: "Stripe",
              event: "MRR grew 8% this month",
              time: "1h ago",
            },
            {
              system: "Salesforce",
              event: "3 deals closing this week",
              time: "3h ago",
            },
            {
              system: "Jira",
              event: "Sprint velocity up 12%",
              time: "1d ago",
            },
            {
              system: "Zendesk",
              event: "Support CSAT dropped to 4.1",
              time: "2d ago",
            },
          ].map((e) => (
            <div
              key={e.event}
              className="flex items-center gap-2 rounded-lg border border-border/30 px-3 py-2"
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <div className="flex-1">
                <span className="text-[12px] font-semibold">{e.system}</span>
                <span className="text-[12px] text-muted-foreground">
                  {" "}
                  &mdash; {e.event}
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                {e.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Governance — Animated approval queue */

const opsApprovalItems = [
  {
    title: "Generate board deck from live data",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Revenue reconciliation: Stripe vs Salesforce",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Pipeline forecast updated for Q3",
    status: "Auto-approved",
    type: "update",
  },
  {
    title: "Support costs exceeded threshold ($18K)",
    status: "Flagged",
    type: "alert",
  },
  {
    title: "Weekly ops summary for leadership",
    status: "Awaiting approval",
    type: "action",
  },
  {
    title: "Cash flow risk: 2 invoices overdue >30d",
    status: "Flagged",
    type: "alert",
  },
];

function ApprovalItem({
  title,
  status,
  type,
}: {
  title: string;
  status: string;
  type: string;
}) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-border/50 bg-white px-4 py-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
        style={{
          background:
            type === "alert"
              ? "linear-gradient(135deg, #f59e0b, #ef4444)"
              : type === "signal"
                ? "linear-gradient(135deg, #8b5cf6, #6366f1)"
                : "var(--gradient-primary-icon)",
        }}
      >
        {type === "action"
          ? "AI"
          : type === "alert"
            ? "!!"
            : type === "signal"
              ? "S"
              : "U"}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] font-semibold tracking-[-0.02em]">
          {title}
        </div>
        <div className="text-[11px] font-medium text-muted-foreground">
          {status}
        </div>
      </div>
    </div>
  );
}

function OpsGovernVisual() {
  return (
    <div className="w-full max-w-[380px]">
      <AnimatedList delay={1800} className="max-h-[340px]">
        {opsApprovalItems.map((item, i) => (
          <ApprovalItem key={i} {...item} />
        ))}
      </AnimatedList>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STICKY SCROLL STEPS
   ═══════════════════════════════════════════════════════════ */

const howItWorksSteps: StickyScrollStep[] = [
  {
    label: "Step 01 \u2014 Connect",
    title: "Plug in the apps your business runs on",
    description:
      "Connect via OAuth in minutes. No engineering required.",
    visual: <OpsConnectVisual />,
  },
  {
    label: "Step 02 \u2014 Build SpineWorkspace",
    title: "Three data flows. One complete picture.",
    description:
      "Revenue, pipeline, and costs sync as Truth. Context and sessions converge in your Workspace.",
    visual: <OpsNormalizeVisual />,
  },
  {
    label: "Step 03 \u2014 Daily Workspace",
    title: "Your operating view — always current.",
    description:
      "MRR, pipeline, support, and cash in one live workspace. Same truth, four role-specific lenses.",
    visual: <OpsViewVisual />,
  },
  {
    label: "Step 04 \u2014 Twin",
    title: "AI proposes. You decide.",
    description:
      "AI surfaces anomalies, drafts board decks, and flags risks. Nothing executes without your approval.",
    visual: <OpsGovernVisual />,
  },
];

/* ═══════════════════════════════════════════════════════════
   MAIN CONTENT
   ═══════════════════════════════════════════════════════════ */

export function BusinessOpsContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const reduce = hasMounted && prefersReducedMotion;

  useEffect(() => {
    setHasMounted(true);
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const stickyHeading = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={reduce ? { duration: 0 } : { type: "spring", bounce: 0.2, duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="section-heading">
        How it <span className="text-primary">works</span>
      </h2>
      <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
        Four steps. Your entire business, fully connected.
      </p>
    </motion.div>
  );

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="marketing-surface relative overflow-hidden bg-white"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 50%, rgba(27,167,132,0.06) 0%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
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
                  Business Ops
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
                className="text-[length:min(40px,var(--marketing-title-size))] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[length:min(52px,var(--marketing-title-size))] lg:text-[length:min(60px,var(--marketing-title-size))]"
              >
                One workspace.{" "}
                <span className="text-primary">Your entire business, connected.</span>
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
                className="mx-auto mt-8 max-w-2xl text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-white/55 lg:mx-0"
              >
                Live picture across CRM, finance, support, and ops — with AI that reasons and waits for approval.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 16,
                  mass: 1,
                  stiffness: 52,
                  delay: 0.8,
                }}
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="mt-6 text-[14px] font-medium text-white/30"
              >
                For founders, CEOs, COOs, operators, and leadership teams.
              </motion.p>
            </div>

            {/* Right: Hero Visual (desktop) */}
            <div className="hidden lg:flex justify-end">
              <HeroBusinessOpsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <p className="text-center text-[16px] font-semibold tracking-[-0.03em] text-muted-foreground">
            Connect the apps your business already runs on
          </p>
        </div>
        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
            {opsLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-white px-5 py-3 shadow-sm"
              >
                <img src={logo.src} alt={logo.name} width={24} height={24} className="h-6 w-6 object-contain" />
                <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-foreground/70">
                  {logo.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────── */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">
                Your business runs on Slack, Sheets, and WhatsApp.{" "}
                <span className="text-primary">Nothing talks to anything.</span>
              </h2>
              <div className="mt-8 space-y-4 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                Revenue, invoices, tickets, projects — all in different tools. You&apos;re the one connecting them.
                </p>
                <p className="text-foreground font-semibold">
                  That&apos;s not running a business. That&apos;s disconnected data integration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WORKBENCH/INTELLIGENCE SOLUTION FRAMING ────────────────────────── */}
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
              One workspace. Two layers.{" "}
              <span className="text-primary">Full business intelligence.</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0 }}
              className="arvio-card p-6"
            >
              <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-primary mb-3">Workspace — Your daily surface for the business</h3>
              <p className="text-[14px] font-medium leading-[1.7] text-muted-foreground">
                Live operating picture: pipeline, spend, utilization, blockers. Annotate, assign, and act daily.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.1 }}
              className="arvio-card p-6"
            >
              <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-primary mb-3">Twin — AI reasoning for the business</h3>
              <p className="text-[14px] font-medium leading-[1.7] text-muted-foreground">
                AI detects cross-system anomalies and drafts actions with evidence. You approve before execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE SHIFT — Before vs After ──────────────────── */}
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
              Every other dashboard shows you{" "}
              <span className="text-white/40">a department.</span>
            </h2>
            <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-semibold leading-[1.5] text-primary">
              SpineWorkspace shows you the business.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
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

      {/* ── FOUR VIEWS — Role-specific Lenses ────────────── */}
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
              Same workspace.{" "}
              <span className="text-primary">Different lenses.</span>
            </h2>
            <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              Same truth, different lens for each role.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {fourViews.map(({ icon: Icon, role, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="arvio-card p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {role}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — StickyScrollReveal ─────────────── */}
      {isMobile ? (
        <StickyScrollFallback
          id="how-it-works"
          steps={howItWorksSteps}
          heading={stickyHeading}
        />
      ) : (
        <StickyScrollReveal
          id="how-it-works"
          steps={howItWorksSteps}
          heading={stickyHeading}
        />
      )}

      {/* ── WHAT YOU GET — Day One + Stats ────────────────── */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  <h2 className="section-heading-sm">
                    What changes{" "}
                    <span className="text-primary">on day one</span>
                  </h2>
                  <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                    A first connected workflow. Not a months-long replacement project.
                  </p>
                </motion.div>
                <ul className="mt-8 space-y-3">
                  {dayOneOutcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                        delay: i * 0.08,
                      }}
                      className="flex items-start gap-3"
                    >
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
                  { value: 12, suffix: "+", label: "Tools unified" },
                  { value: 4, suffix: "", label: "Role-specific lenses" },
                  { value: 100, suffix: "%", label: "Governed AI actions" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                      delay: i * 0.12,
                    }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-[length:min(48px,var(--marketing-heading-size))] font-bold tracking-[-0.04em]">
                      <NumberTicker
                        value={stat.value}
                        delay={0.2 + i * 0.15}
                        className="text-[48px] font-bold tracking-[-0.04em] text-foreground"
                      />
                      {stat.suffix && (
                        <span className="text-primary">{stat.suffix}</span>
                      )}
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

      {/* ── 4 USE CASES ───────────────────────────────────── */}
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
              What Business Ops leaders{" "}
              <span className="text-primary">do inside SpineWorkspace</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "Monday operating brief for leadership",
                quote: "Weekly brief: MRR, pipeline, churn, cash — what changed and why.",
                desc: "AI generates a Monday brief across every function. One screen, not twelve tabs.",
              },
              {
                num: "02",
                title: "Revenue movement analysis",
                quote: "Explain net revenue change — accounts and events behind each shift.",
                desc: "AI traces revenue shifts to specific accounts and deals with evidence.",
              },
              {
                num: "03",
                title: "Cross-system risk radar",
                quote: "Surface where multiple systems point to trouble for the same account.",
                desc: "AI correlates cross-app signals no single tool can see. You approve interventions.",
              },
              {
                num: "04",
                title: "Board pack generation",
                quote: "Generate a board-ready summary from live data for my approval.",
                desc: "AI drafts the narrative. You review, approve, and export in minutes.",
              },
            ].map(({ num, title, quote, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", bounce: 0.2, duration: 0.6 }}
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
                <p className="text-[13px] font-medium italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-3">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-[13px] font-medium leading-[1.6] text-foreground/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="arvio-section marketing-surface">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Your business deserves{" "}
              <span className="text-primary">the record the tools already keep.</span>
            </h2>
            <p className="mt-6 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              One workspace. Full business picture. AI that waits for your approval.
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
