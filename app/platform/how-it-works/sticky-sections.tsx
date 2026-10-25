"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  Plug,
  Database,
  Brain,
  Shield,
  Activity,
  Zap,
  Eye,
  RefreshCw,
} from "lucide-react";

const items = [
  { icon: Plug, label: "Connect", description: "The tools you already use.", color: "#3b82f6" },
  { icon: Database, label: "Sort", description: "The record, the evidence, the draft, and the person stay apart.", color: "#2dd4bf" },
  { icon: Activity, label: "Spot", description: "Patterns and odd results across tools are flagged for you.", color: "#8b5cf6" },
  { icon: Brain, label: "Review", description: "Twin rates each signal and shows where it came from.", color: "#fbbf24" },
  { icon: Eye, label: "Show", description: "The workspace shows the view this role needs.", color: "#06b6d4" },
  { icon: Shield, label: "Approve", description: "Actions are sent for a person to review, by how much they matter.", color: "#ef4444" },
  { icon: Zap, label: "Do", description: "Approved actions are written back to your tools, safely and once.", color: "#f97316" },
  { icon: RefreshCw, label: "Learn", description: "Every decision adds to what the workspace knows. No retraining.", color: "#14b8a6" },
];

export function HowItWorksGather() {
  return (
    <StickyGather
      tag="The Full Loop"
      heading={<>Eight steps. <span className="text-primary">One continuous cycle.</span></>}
      subheading="From the first connection to steady, growing know-how — every step comes together in SpineWorkspace."
      centerLabel="The Spine"
      centerDescription="Shared core"
      items={items}
    />
  );
}
