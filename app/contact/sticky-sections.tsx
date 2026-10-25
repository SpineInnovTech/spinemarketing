"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  Plug,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";

const onboardingNodes = [
  { label: "Connect apps", icon: Plug, color: "#1BA784", description: "Link the tools you already use, with your sign-in" },
  { label: "Map your accounts", icon: Users, color: "#3b82f6", description: "Set out your accounts and how they relate" },
  { label: "Set approval rules", icon: ShieldCheck, color: "#f59e0b", description: "Choose who approves what, and who can see what" },
  { label: "Go Live", icon: Zap, color: "#8b5cf6", description: "Open the workspace on the context you connected" },
  { label: "See Insights", icon: BarChart3, color: "#06b6d4", description: "AI surfaces patterns and risks" },
  { label: "First review", icon: Clock, color: "#ef4444", description: "Walk the first assembled context with your team" },
];

export function ContactOnboardingGather() {
  return (
    <StickyGather
      tag="What Happens Next"
      heading="From first call to live workspace."
      centerLabel="Your Team"
      items={onboardingNodes}
    />
  );
}
