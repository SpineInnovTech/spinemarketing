"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  Wrench,
  AlertCircle,
  Search,
  CheckCircle2,
  Database,
  Brain,
  ShieldCheck,
  Eye,
  Layers,
  Users,
} from "lucide-react";

const journeyItems = [
  {
    tag: "The integration years",
    title: "Years connecting enterprise systems.",
    description: "Before founding Spine InnovTech, our founder worked for years connecting enterprise systems. The tools were connected. The people making decisions still could not see the whole story with reliable history behind it.",
    icon: Wrench,
    color: "#3b82f6",
    features: ["The tools stayed themselves", "The record stayed in those tools", "The person still had to rebuild the story"],
  },
  {
    tag: "The red account",
    title: "An $8M renewal was already at risk.",
    description: "Prior founder experience, not a SpineWorkspace customer result. Before founding Spine InnovTech, our founder worked on an $8 million renewal that was already at risk, with no reliable account history. No one could assemble what had happened across the account, so no one could see the real issue.",
    icon: AlertCircle,
    color: "#ef4444",
    features: ["$8M renewal at risk", "No reliable account history", "The real issue stayed hidden"],
  },
  {
    tag: "Authorized context exposed the issue",
    title: "Authorized Slack, email, MuleSoft and Salesforce context.",
    description: "Working within authorized access, context drawn from Slack, email, the MuleSoft connector and multiple Salesforce connectors was brought together. Seen as one governed view, the records revealed the underlying problem the dashboards had missed.",
    icon: Search,
    color: "#f59e0b",
    features: ["Slack + email + MuleSoft", "Multiple Salesforce connectors", "Allowed, governed access only"],
  },
  {
    tag: "The save, and the lasting need",
    title: "The account was saved. The lasting need was continuity.",
    description: "Prior founder experience, not a SpineWorkspace customer result, testimonial or ROI claim. With the underlying problem in view, the account was saved. The lasting need was clear: continuous, governed shared context — a way to preserve that understanding as people, systems and decisions changed. That experience shaped the company we are building.",
    icon: CheckCircle2,
    color: "#1BA784",
    features: ["Account saved", "The original tools kept the record", "Continuous governed shared context was the need"],
  },
];

const platformNodes = [
  { label: "One connection", icon: Database, color: "#0176D3", description: "The tools you already use" },
  { label: "Workspace", icon: Layers, color: "#3b82f6", description: "The view this role needs" },
  { label: "Twin", icon: Brain, color: "#8b5cf6", description: "A proposal, only when asked" },
  { label: "The evidence", icon: Eye, color: "#06b6d4", description: "For this person and this task" },
  { label: "Review", icon: ShieldCheck, color: "#f59e0b", description: "A person decides" },
  { label: "The record", icon: Users, color: "#ef4444", description: "Stays in the original tool" },
];

export function AboutJourneyScroll() {
  return (
    <StickyScroll
      tag="Our origin / Our story"
      heading="The experience behind the company: an $8M renewal, and the need it revealed."
      items={journeyItems}
    />
  );
}

export function AboutPlatformGather() {
  return (
    <StickyGather
      tag="What We Built"
      heading="Every piece born from that one save."
      centerLabel="Spine InnovTech"
      items={platformNodes}
    />
  );
}
