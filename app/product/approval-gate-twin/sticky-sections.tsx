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
    title: "Who approved what, when — immutable",
    description: "Every approval, rejection, and edit logged with timestamp, user, and outcome. Append-only. Export-ready for compliance.",
    icon: Clock,
    color: "#3b82f6",
    features: [
      "Immutable append-only audit log",
      "Timestamp, user ID, and action outcome recorded",
      "Full decision chain from signal to execution",
      "Export-ready audit trails for compliance review",
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
  { icon: Eye, label: "Evidence Panel", description: "Source data and confidence on every suggestion.", color: "#8b5cf6" },
  { icon: GitBranch, label: "Routing Engine", description: "Impact-based escalation and multi-approver flows.", color: "#3b82f6" },
  { icon: Activity, label: "Twin Scoring", description: "0-100 confidence with historical accuracy tracking.", color: "#fbbf24" },
  { icon: Clock, label: "Audit Log", description: "Immutable record of every decision and outcome.", color: "#f97316" },
  { icon: RotateCcw, label: "Reconciliation", description: "Observed effects and supported corrective work.", color: "#ef4444" },
  { icon: AlertTriangle, label: "Risk Flagging", description: "Low-confidence suggestions auto-flagged for review.", color: "#ec4899" },
  { icon: CheckCircle2, label: "Bulk Review", description: "Portfolio-wide action review in one queue.", color: "#14b8a6" },
  { icon: Lock, label: "Access Control", description: "Role-based approval permissions per action type.", color: "#a855f7" },
  { icon: Fingerprint, label: "Identity Verification", description: "Multi-factor approval for high-impact actions.", color: "#06b6d4" },
];

export function ApprovalStickyScroll() {
  return (
    <StickyScroll
      tag="Approval Deep Dive"
      heading={<>Five gates between <span className="text-primary">AI and action.</span></>}
      subheading="Scroll to explore how every AI suggestion passes through governed human review."
      items={scrollItems}
    />
  );
}

export function ApprovalGather() {
  return (
    <StickyGather
      tag="Governance Architecture"
      heading={<>Ten safeguards. <span className="text-primary">One approval surface.</span></>}
      subheading="Every governance capability converges into the Review — your control layer."
      centerLabel="Review"
      centerDescription="Human control"
      items={gatherItems}
    />
  );
}
