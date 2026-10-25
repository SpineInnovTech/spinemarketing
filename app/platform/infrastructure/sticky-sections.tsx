"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Zap,
  Database,
  Globe,
  Activity,
  Shield,
} from "lucide-react";

const items = [
  {
    tag: "Live sync",
    title: "The workspace shows the result",
    description: "The Workspace updates as connected work changes. How fresh the source is, delivery delays, and checking the result stay things to watch.",
    icon: Zap,
    color: "#fbbf24",
    features: [
      "Changes pushed to the screen as they happen",
      "The screen updates fast, then confirms with the source",
      "Updates show across every connected view",
      "Keeps working offline and syncs when you reconnect",
    ],
  },
  {
    tag: "How data flows",
    title: "One connection",
    description: "Data comes in, is checked, de-duplicated, matched to the right item, enriched, rated, filed, and shared.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "Several steps run at the same time",
      "Anything that fails is set aside, not lost",
      "Each step is timed so slow spots show",
      "Failed steps retry, waiting longer each time",
    ],
  },
  {
    tag: "Worldwide delivery",
    title: "Fast delivery, with a clear line on where data lives",
    description: "Pages and app requests have different delivery and storage needs. Where data lives and whether it crosses borders is checked for your setup.",
    icon: Globe,
    color: "#8b5cf6",
    features: [
      "Fast delivery where your setup supports it",
      "Where data is stored is checked on its own",
      "Speed measured using the real user journey",
      "Backup and recovery checked for your setup",
    ],
  },
  {
    tag: "Keeping watch",
    title: "Watching the whole system, with alerts",
    description: "Watch how the system is doing, how much data is flowing, which tools are connected, and error rates. What is watched and how issues are handled is agreed for your setup.",
    icon: Activity,
    color: "#3b82f6",
    features: [
      "A live view of how the system is doing",
      "How much data is flowing, and how fast",
      "Watches connected tools and reconnects on its own",
      "Spots problems and raises them automatically",
    ],
  },
  {
    tag: "Reliability",
    title: "Plan, watch, and check recovery",
    description: "Plans for going live and for recovery should say how changes go in, how failures are spotted, and how service comes back. Test those plans for your setup.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Changes rolled out in careful stages, with recovery steps",
      "Moves planned with a clear look at any service impact",
      "Health checks suited to each service",
      "Issues raised, and recovery checked",
    ],
  },
];

export function InfrastructureStickyScroll() {
  return (
    <StickyScroll
      tag="Infrastructure Deep Dive"
      heading={<>Built for speed. <span className="text-primary">Built to last.</span></>}
      subheading="Scroll to see what keeps SpineWorkspace in sync and delivering reliably."
      items={items}
    />
  );
}
