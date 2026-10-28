"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  Gauge,
  Coins,
  ScanSearch,
  Fingerprint,
  BarChart3,
  Mail,
  Clock,
  Bell,
  CheckCircle2,
} from "lucide-react";

const scrollItems = [
  {
    tag: "Account Command Center",
    title: "Unified timeline for every account",
    description: "One view with every touchpoint — CRM, billing, support, product usage. AI-drafted follow-ups ready to approve.",
    icon: LayoutDashboard,
    color: "#2dd4bf",
    features: [
      "Live entity 360 with cross-system timeline",
      "AI-drafted emails and follow-ups ready to review",
      "Health score with 90-day renewal lookahead",
      "Linked tickets, invoices, and meeting notes",
    ],
  },
  {
    tag: "Morning Brief",
    title: "What changed overnight, ranked by impact",
    description: "Start every day with a prioritized action list. New risks, open opportunities, and follow-ups — all evidence-linked.",
    icon: Bell,
    color: "#8b5cf6",
    features: [
      "Priority-ranked overnight changes across portfolio",
      "Health score shifts with root cause attribution",
      "Renewal risk alerts with days-to-action countdown",
      "One-click drill-down into any flagged account",
    ],
  },
  {
    tag: "Approval Queue",
    title: "Nothing happens without you",
    description: "Every AI-proposed action sits in your approval queue. Review the evidence, approve or reject, and the system learns from your decisions.",
    icon: ShieldCheck,
    color: "#fbbf24",
    features: [
      "Confidence scores and source evidence on every suggestion",
      "Bulk approve or individual review workflows",
      "Rejection feedback improves future AI accuracy",
      "Full audit trail of every approved and rejected action",
    ],
  },
  {
    tag: "Portfolio Health",
    title: "See risk and opportunity across all accounts",
    description: "Portfolio-wide health dashboard with expansion signals, churn risk, and renewal forecasts — all computed from live data.",
    icon: BarChart3,
    color: "#3b82f6",
    features: [
      "Color-coded health across entire portfolio",
      "Expansion readiness scores based on usage patterns",
      "Churn probability with contributing factor breakdown",
      "Renewal forecast accuracy above 90%",
    ],
  },
  {
    tag: "Knowledge Memory",
    title: "Approved insights compound over time",
    description: "Every approval, rejection, and conversation enriches the knowledge base. No retraining. The workspace gets smarter automatically.",
    icon: Sparkles,
    color: "#ef4444",
    features: [
      "Append-only knowledge — nothing deleted, everything versioned",
      "Teams share what they are allowed to see",
      "Session continuity — ask anything, AI answers from real data",
      "Pattern recognition improves with each decision cycle",
    ],
  },
];

const gatherItems = [
  { icon: LayoutDashboard, label: "Command Center", description: "Unified account timeline with AI-drafted actions.", color: "#2dd4bf" },
  { icon: Bell, label: "Morning Brief", description: "Overnight changes ranked by business impact.", color: "#8b5cf6" },
  { icon: ShieldCheck, label: "Approval Queue", description: "Evidence-backed suggestions. You decide.", color: "#fbbf24" },
  { icon: Gauge, label: "Health Scoring", description: "90-day lookahead with renewal probability.", color: "#3b82f6" },
  { icon: Coins, label: "Revenue Signals", description: "Expansion, collections, billing anomaly alerts.", color: "#10b981" },
  { icon: ScanSearch, label: "Risk Detection", description: "Product risk and churn signals before escalation.", color: "#ef4444" },
  { icon: Mail, label: "Unified Inbox", description: "Email, Slack, calendar — one communication surface.", color: "#06b6d4" },
  { icon: Fingerprint, label: "Executive Console", description: "Board-ready briefs from live operational data.", color: "#a855f7" },
  { icon: Clock, label: "Activity Timeline", description: "Every touchpoint across every system, threaded.", color: "#f59e0b" },
  { icon: BarChart3, label: "Portfolio Views", description: "Health, renewals, expansion — at a glance.", color: "#ec4899" },
  { icon: Sparkles, label: "Knowledge Memory", description: "Compounding intelligence from every decision.", color: "#14b8a6" },
  { icon: CheckCircle2, label: "Review", description: "A person decides before anything is written back.", color: "#f97316" },
];

export function ProductStickySections() {
  return (
    <>
      <StickyScroll
        tag="The Workspace"
        heading={<>Every surface. <span className="text-primary">One workspace.</span></>}
        subheading="Scroll to explore the five core surfaces that make up your daily operating view."
        items={scrollItems}
      />

      <div className="section-divider" />

      <StickyGather
        tag="Connected Intelligence"
        heading={<>Twelve modules. <span className="text-primary">One operating surface.</span></>}
        subheading="The work you can do sits in one workspace. You do not have to switch tabs or rebuild the story."
        centerLabel="Workspace"
        centerDescription="Your daily surface"
        items={gatherItems}
      />
    </>
  );
}
