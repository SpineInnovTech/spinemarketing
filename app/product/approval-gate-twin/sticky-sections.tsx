"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  ShieldCheck,
  Eye,
  GitBranch,
  Clock,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Fingerprint,
  Activity,
} from "lucide-react";

const scrollItems = [
  {
    tag: "Evidence Review",
    title: "Every suggestion shows its reasoning",
    description: "Before you approve anything, see the source data, confidence score, and contributing signals. No black-box decisions.",
    icon: Eye,
    color: "#2dd4bf",
    features: [
      "Source data links on every AI suggestion",
      "Confidence percentage with contributing factors",
      "Similar past decisions and their outcomes",
      "One-click to view the underlying signal chain",
    ],
  },
  {
    tag: "Tiered Routing",
    title: "Route approvals by impact and type",
    description: "Route work to the person or policy with the appropriate authority. Customer, finance, operations, and other workflows can have different review boundaries.",
    icon: GitBranch,
    color: "#8b5cf6",
    features: [
      "Configurable routing rules per action type",
      "Impact-based escalation — auto-route by severity",
      "Multi-approver workflows for high-value actions",
      "Delegation chains for out-of-office coverage",
    ],
  },
  {
    tag: "Twin Scoring",
    title: "AI scores every action with confidence",
    description: "The Twin assigns a 0-100 score based on data quality, pattern strength, and historical accuracy for similar actions.",
    icon: Activity,
    color: "#fbbf24",
    features: [
      "0-100 confidence score on every proposed action",
      "Score breakdown by data quality and pattern strength",
      "Historical accuracy tracking per action category",
      "Auto-flag low-confidence suggestions for extra review",
    ],
  },
  {
    tag: "Audit Trail",
    title: "Who approved what, when — and it can't be changed",
    description: "Every approval, rejection, and edit is saved with the time, the person, and the result. Nothing is overwritten. Ready to export for compliance.",
    icon: Clock,
    color: "#3b82f6",
    features: [
      "A record that is added to, never changed",
      "Time, who did it, and the result all saved",
      "The full path from signal to action",
      "Records ready to export for compliance",
    ],
  },
  {
    tag: "Checking the result",
    title: "Watch what happened and review any fixes",
    description: "An action can work, fail, or only partly work. Check what happened against what was meant to happen. Whether it can be undone depends on the tool, the action, and what recovery is possible.",
    icon: RotateCcw,
    color: "#ef4444",
    features: [
      "Track what was tried and what it changed",
      "Tell apart done, failed, and part-done",
      "Review fixes with the right person",
      "Keep the reasons and evidence on record",
    ],
  },
];

const gatherItems = [
  { icon: ShieldCheck, label: "Review", description: "A person decides before anything is written back.", color: "#2dd4bf" },
  { icon: Eye, label: "Evidence Panel", description: "Source data and a confidence rating on every suggestion.", color: "#8b5cf6" },
  { icon: GitBranch, label: "Routing", description: "Bigger decisions go to more people, by how much they matter.", color: "#3b82f6" },
  { icon: Activity, label: "Twin Scoring", description: "A 0-100 rating, with a record of how accurate it has been.", color: "#fbbf24" },
  { icon: Clock, label: "Record", description: "A record of every decision and result that can't be changed.", color: "#f97316" },
  { icon: RotateCcw, label: "Checking the result", description: "What happened, and any fixes that were made.", color: "#ef4444" },
  { icon: AlertTriangle, label: "Risk Flagging", description: "Low-confidence suggestions flagged for review.", color: "#ec4899" },
  { icon: CheckCircle2, label: "Bulk Review", description: "Review actions across the whole portfolio in one queue.", color: "#14b8a6" },
  { icon: Lock, label: "Access Control", description: "Approval rights set by role, per kind of action.", color: "#a855f7" },
  { icon: Fingerprint, label: "Identity Check", description: "An extra sign-in step for high-impact actions.", color: "#06b6d4" },
];

export function ApprovalStickyScroll() {
  return (
    <StickyScroll
      tag="Approval Deep Dive"
      heading={<>Five gates between <span className="text-primary">AI and action.</span></>}
      subheading="Scroll to see how every AI suggestion waits for a person to review it."
      items={scrollItems}
    />
  );
}

export function ApprovalGather() {
  return (
    <StickyGather
      tag="How approval is built"
      heading={<>Ten safeguards. <span className="text-primary">One approval surface.</span></>}
      subheading="The checks come together in Review, where a person stays in control."
      centerLabel="Review"
      centerDescription="Human control"
      items={gatherItems}
    />
  );
}
