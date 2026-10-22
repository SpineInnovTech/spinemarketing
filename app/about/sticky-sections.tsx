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
    description: "The tools were connected. The people making decisions still could not see the whole story with reliable history behind it.",
    icon: Wrench,
    color: "#3b82f6",
    features: ["The tools stayed themselves", "The record stayed in those tools", "The person still had to rebuild the story"],
  },
  {
    tag: "The red account",
    title: "An $8M renewal was red, with no reliable history.",
    description: "Illustrative founder outcome, not a published customer result. A major $8M renewal went red. No one could assemble a reliable history of what had happened across the account, so no one could see the real issue.",
    icon: AlertCircle,
    color: "#ef4444",
    features: ["$8M renewal at risk", "No reliable account history", "The real issue stayed hidden"],
  },
  {
    tag: "Authorized context exposed the issue",
    title: "Authorized Slack, email, MuleSoft and Salesforce context.",
    description: "Working within authorized access, context drawn from Slack, email, MuleSoft and multiple Salesforce connectors was related together. Seen as one governed view, the records exposed the real issue the dashboards had missed.",
    icon: Search,
    color: "#f59e0b",
    features: ["Slack + email + MuleSoft", "Multiple Salesforce connectors", "Authorized, governed access only"],
  },
  {
    tag: "The save, and the lasting need",
    title: "The account was saved. The lasting need was continuity.",
    description: "Illustrative outcome, not a published customer result. With the real issue in view, the account was saved. The lasting lesson was clear: what a business needs is continuous, governed shared context — not another one-off manual rescue.",
    icon: CheckCircle2,
    color: "#1BA784",
    features: ["Account saved", "Source systems stayed authoritative", "Continuous governed shared context was the need"],
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
      tag="The proof / Our story"
      heading="Why we build: an $8M renewal, saved by governed shared context."
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
