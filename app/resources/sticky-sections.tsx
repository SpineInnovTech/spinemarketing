"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  BookOpen,
  FileText,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const resourceItems = [
  {
    tag: "Use-case library",
    title: "Real-world playbooks for every team.",
    description: "Revenue, CS, support, finance, and executive decisioning — see how SpineWorkspace transforms each workflow.",
    icon: BookOpen,
    color: "#1BA784",
    features: ["Account success patterns", "Revenue operations plays", "Executive decision briefs"],
  },
  {
    tag: "Platform guides",
    title: "Understand SpineWorkspace, Workspace, and Twin.",
    description: "Deep-dive guides on how data flows, how intelligence surfaces, and how governance works.",
    icon: FileText,
    color: "#3b82f6",
    features: ["Architecture overviews", "Integration walkthroughs", "Security documentation"],
  },
  {
    tag: "Getting started",
    title: "Connect, configure, and go live in days.",
    description: "Step-by-step onboarding guides for every team size. No engineering required.",
    icon: Lightbulb,
    color: "#f59e0b",
    features: ["One-click OAuth setup", "Entity mapping guides", "Team onboarding kits"],
  },
  {
    tag: "ROI calculator",
    title: "See the numbers before you commit.",
    description: "Transparent pricing with real projections. Model your team size, app count, and see exactly what you'll pay.",
    icon: BarChart3,
    color: "#8b5cf6",
    features: ["Cost comparison tools", "Time-savings estimates", "Integration ROI models"],
  },
];

export function ResourcesScroll() {
  return (
    <StickyScroll
      tag="Explore Resources"
      heading="Everything you need to evaluate and adopt."
      items={resourceItems}
    />
  );
}
