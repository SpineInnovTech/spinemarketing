"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  AlertTriangle,
  Unplug,
  ShieldAlert,
  Eye,
  Brain,
  ShieldCheck,
  Layers,
  Zap,
} from "lucide-react";

const painItems = [
  {
    tag: "Scattered signals",
    title: "Critical signals buried across 8–15 apps.",
    description: "Usage drops in one tool, support spikes in another, billing flags in a third. No single system sees the full picture.",
    icon: AlertTriangle,
    color: "#ef4444",
    features: ["Cross-app signal detection", "Entity-level correlation", "Real-time anomaly surfacing"],
  },
  {
    tag: "Blind AI",
    title: "Copilots reason on one app at a time.",
    description: "Each AI assistant sees only its own silo. None can cross-reference billing against usage against support history.",
    icon: Eye,
    color: "#f59e0b",
    features: ["Multi-system context", "Evidence-backed reasoning", "Full entity awareness"],
  },
  {
    tag: "Zero governance",
    title: "Automations run without approval.",
    description: "Records change overnight. Nobody approved it. The audit trail shows nothing. Trust erodes silently.",
    icon: ShieldAlert,
    color: "#8b5cf6",
    features: ["Non-bypassable approval gate", "Full audit trails", "Evidence-first execution"],
  },
  {
    tag: "Disconnected teams",
    title: "Every team builds their own workaround.",
    description: "CS has one dashboard, sales has another, finance has a spreadsheet. Three versions of the same customer.",
    icon: Unplug,
    color: "#3b82f6",
    features: ["One the record", "Role-based views", "Shared context layer"],
  },
];

const answerNodes = [
  { label: "SpineWorkspace", icon: Layers, color: "#0176D3" },
  { label: "Workspace", icon: Brain, color: "#3b82f6" },
  { label: "Twin", icon: Zap, color: "#8b5cf6" },
  { label: "Review", icon: ShieldCheck, color: "#f59e0b" },
  { label: "Customer view", icon: Eye, color: "#06b6d4" },
  { label: "Audit Trail", icon: ShieldAlert, color: "#ef4444" },
];

export function WhyPainScroll() {
  return (
    <StickyScroll
      tag="The Real Problem"
      heading="Not fragmentation. Something deeper."
      items={painItems}
    />
  );
}

export function WhyAnswerGather() {
  return (
    <StickyGather
      tag="The SpineWorkspace Answer"
      heading="Six capabilities. One governed workspace."
      centerLabel="SpineWorkspace"
      items={answerNodes}
    />
  );
}
