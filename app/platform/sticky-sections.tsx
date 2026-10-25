"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import { StickyGather } from "@/components/sticky-gather";
import {
  Database,
  RefreshCw,
  Brain,
  Shield,
  Plug,
  Activity,
  Lock,
  Zap,
  GitBranch,
  Server,
  Eye,
  Layers,
} from "lucide-react";

const scrollItems = [
  {
    tag: "Spine Fabric",
    title: "Relate records to the work they belong to",
    description: "Connect people, accounts, goals, events, evidence, decisions, tasks, and outcomes. Your existing tools stay the place of record.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "How records and work relate to each other",
      "Where information came from, how fresh it is, and what conflicts or is missing",
      "Who someone is, their role, the rules, and what they are allowed to do",
      "Work that continues across tools and sessions",
    ],
  },
  {
    tag: "Spine Workbench",
    title: "Bring context into a shared working surface",
    description: "People work with responsibilities, records, evidence, decisions, and next steps. Role and task decide which information belongs in view.",
    icon: Activity,
    color: "#8b5cf6",
    features: [
      "Views built around goals and responsibilities",
      "Related records and evidence close to the task",
      "Shared preparation, review, and coordination",
      "The right information for each role across teams",
    ],
  },
  {
    tag: "Spine Twin",
    title: "Investigate, prepare, and coordinate with context",
    description: "Twin helps compare evidence, spot missing information, prepare options, and coordinate work. It prepares work only within what it is allowed to do.",
    icon: Brain,
    color: "#fbbf24",
    features: [
      "Look into a situation using the evidence available",
      "Prepare summaries, options, tasks, and proposals",
      "Prepare ahead without the power to act on its own",
      "Work context that lasts across AI models and tools",
    ],
  },
  {
    tag: "Connected capabilities",
    title: "The apps, files, and conversations you already use",
    description: "Connect the tools you use, with clear permission. What is available and what it can do depends on each connection.",
    icon: Plug,
    color: "#3b82f6",
    features: [
      "CRM, finance, support, projects, and knowledge sources",
      "Each tool's own permissions and what it can do",
      "How fresh the information is and whether the connection is healthy",
      "Being connected is not the same as being allowed to act",
    ],
  },
  {
    tag: "Approved action",
    title: "Approve an action and check what happened",
    description: "Important actions need the right person or rule to approve them. Watch the effect, handle partial results, and keep a record of the decision and the result.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "A clear go-ahead for important actions",
      "A record of the decision and what was done, open to review",
      "Rules and role limits suited to the work",
      "What actually happened, and a way to put it right",
    ],
  },
];

const gatherItems = [
  { icon: Database, label: "Spine Fabric", description: "How records relate, where they came from, who can act, and what continues.", color: "#2dd4bf" },
  { icon: Activity, label: "Context", description: "Patterns and risk signals brought together for you.", color: "#8b5cf6" },
  { icon: Brain, label: "AI sessions", description: "Knowledge that builds up from every interaction.", color: "#fbbf24" },
  { icon: Plug, label: "Connectors", description: "The tools you already connect.", color: "#3b82f6" },
  { icon: Shield, label: "Review", description: "The right person to approve important decisions.", color: "#ef4444" },
  { icon: Lock, label: "Who can act", description: "Who someone is, the rules, their access, and a record of decisions.", color: "#f59e0b" },
  { icon: Eye, label: "Spine Workbench", description: "Goals, responsibilities, evidence, and next steps.", color: "#06b6d4" },
  { icon: Zap, label: "Twin", description: "AI suggests with evidence. You approve what happens.", color: "#a855f7" },
  { icon: Server, label: "Behind the scenes", description: "Delivery, storage, event handling, and recovery.", color: "#ec4899" },
  { icon: GitBranch, label: "Connected tools", description: "Each tool's own abilities and permissions.", color: "#14b8a6" },
  { icon: RefreshCw, label: "Approved action", description: "Approve, act, watch, and set right.", color: "#f97316" },
  { icon: Layers, label: "SpineWorkspace", description: "Fits your tools. Keeps working when you switch tools.", color: "#6366f1" },
];

export function PlatformStickyScroll() {
  return (
    <>
      <StickyScroll
        tag="A closer look"
        heading={<>Five parts of <span className="text-primary">SpineWorkspace.</span></>}
        subheading="Scroll to see each part that fits around your tools."
        items={scrollItems}
      />

      <div className="section-divider" />

      <StickyGather
        tag="How it fits together"
        heading={<>Scattered tools. <span className="text-primary">One joined-up picture.</span></>}
        subheading="SpineWorkspace brings your information, working surfaces, AI help, and approved action together. Your existing tools stay the place of record."
        centerLabel="The Spine"
        centerDescription="The core"
        items={gatherItems}
      />
    </>
  );
}
