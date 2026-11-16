"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  ShieldCheck,
  Eye,
  Lock,
  RotateCcw,
  FileCheck,
} from "lucide-react";

const items = [
  {
    tag: "Review",
    title: "Non-bypassable human approval",
    description: "Every action the AI suggests waits for a person to approve it. There is no shortcut and no automatic approval.",
    icon: ShieldCheck,
    color: "#2dd4bf",
    features: [
      "Mandatory human review on all write actions",
      "Cannot be disabled or bypassed by any role",
      "Visual evidence panel before every approval",
      "Rejection feedback improves future accuracy",
    ],
  },
  {
    tag: "Evidence Transparency",
    title: "See why the AI recommends each action",
    description: "Source data links, confidence scores, and contributing signals displayed on every suggestion.",
    icon: Eye,
    color: "#8b5cf6",
    features: [
      "Source data attribution on every recommendation",
      "Confidence percentage with factor breakdown",
      "Historical accuracy for similar action types",
      "One-click to view full signal chain",
    ],
  },
  {
    tag: "Data Protection",
    title: "AES-256 encryption. Department isolation.",
    description: "All data encrypted at rest and in transit. Role-based access with contextual firewalling per department.",
    icon: Lock,
    color: "#fbbf24",
    features: [
      "AES-256 encryption at rest and in transit",
      "Department-level data isolation",
      "Role-based access control per entity type",
      "Session-level access logging",
    ],
  },
  {
    tag: "Reversibility",
    title: "Roll back any action within 24 hours",
    description: "State snapshots before and after every action. One-click reversal with automatic write-back to source systems.",
    icon: RotateCcw,
    color: "#ef4444",
    features: [
      "Full state snapshot before every write action",
      "One-click rollback within 24-hour window",
      "Automatic source system reversal",
      "Rollback audit entry with reason tracking",
    ],
  },
  {
    tag: "Compliance",
    title: "SOC 2 aligned. Export anytime.",
    description: "Governance-ready controls. No certification claimed. Full audit trail export for review.",
    icon: FileCheck,
    color: "#3b82f6",
    features: [
      "SOC 2 aligned practices (no certification claimed)",
      "GDPR-aligned data handling and deletion",
      "On-demand audit trail export",
      "Data residency controls per region",
    ],
  },
];

export function ProductSecurityStickyScroll() {
  return (
    <StickyScroll
      tag="Security & Governance"
      heading={<>Five layers of <span className="text-primary">trust and control.</span></>}
      subheading="Scroll to see how the product keeps your data safe and leaves decisions with people."
      items={items}
    />
  );
}
