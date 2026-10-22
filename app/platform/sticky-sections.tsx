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
    description: "Connect people, accounts, goals, events, evidence, decisions, tasks, and outcomes. Source systems retain their authoritative roles.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "Relationships across business entities and work",
      "Sources, freshness, conflicts, and missing evidence",
      "Identity, roles, policy, and authorized scope",
      "Continuity across tools and work sessions",
    ],
  },
  {
    tag: "Spine Workbench",
    title: "Bring context into a shared working surface",
    description: "People work with responsibilities, records, evidence, decisions, and next steps. Role and task determine which context belongs in view.",
    icon: Activity,
    color: "#8b5cf6",
    features: [
      "Views organized around goals and responsibilities",
      "Related records and evidence close to the task",
      "Shared preparation, review, and coordination",
      "Role-appropriate context across business functions",
    ],
  },
  {
    tag: "Spine Twin",
    title: "Investigate, prepare, and coordinate with context",
    description: "Twin helps compare evidence, identify missing information, prepare options, and coordinate work. Coworker preparation stays within authorized scope.",
    icon: Brain,
    color: "#fbbf24",
    features: [
      "Investigate situations using available evidence",
      "Prepare summaries, options, tasks, and proposals",
      "Proactive preparation without assumed execution authority",
      "Durable work context across models and tools",
    ],
  },
  {
    tag: "Connected capabilities",
    title: "The apps, files, and conversations you already use",
    description: "Connect supported systems and capabilities under explicit permissions. Availability, supported operations, and provider limits depend on each integration.",
    icon: Plug,
    color: "#3b82f6",
    features: [
      "CRM, finance, support, projects, and knowledge sources",
      "Provider-specific permissions and supported operations",
      "Source freshness and connection health",
      "Capability access remains distinct from authority to act",
    ],
  },
  {
    tag: "Spine Runtime",
    title: "Authorize execution and reconcile what happened",
    description: "Consequential actions need the appropriate human or policy authority. Observe effects, handle partial outcomes, and retain evidence of the decision and result.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Explicit authority for consequential actions",
      "Reviewable decision and execution evidence",
      "Policy and role boundaries appropriate to the work",
      "Observed outcomes and supported corrective work",
    ],
  },
];

const gatherItems = [
  { icon: Database, label: "Spine Fabric", description: "Relationships, provenance, authority, and continuity.", color: "#2dd4bf" },
  { icon: Activity, label: "Context Layer", description: "Behavioral patterns and risk signals assembled automatically.", color: "#8b5cf6" },
  { icon: Brain, label: "AI Sessions", description: "Compounding knowledge from every interaction.", color: "#fbbf24" },
  { icon: Plug, label: "Connectors", description: "The tools you already connect.", color: "#3b82f6" },
  { icon: Shield, label: "Review", description: "The right authority for consequential decisions.", color: "#ef4444" },
  { icon: Lock, label: "Authority boundary", description: "Identity, policy, access scope, and decision evidence.", color: "#f59e0b" },
  { icon: Eye, label: "Spine Workbench", description: "Goals, responsibilities, evidence, and next steps.", color: "#06b6d4" },
  { icon: Zap, label: "Twin", description: "AI suggests with evidence. You approve what executes.", color: "#a855f7" },
  { icon: Server, label: "Infrastructure", description: "Delivery, storage, event processing, and recovery.", color: "#ec4899" },
  { icon: GitBranch, label: "Connected tools", description: "Provider-specific capabilities and permissions.", color: "#14b8a6" },
  { icon: RefreshCw, label: "Spine Runtime", description: "Authorize, execute, observe, and reconcile.", color: "#f97316" },
  { icon: Layers, label: "SpineWorkspace", description: "Adaptive architecture. Survives tool migrations.", color: "#6366f1" },
];

export function PlatformStickyScroll() {
  return (
    <>
      <StickyScroll
        tag="Deep Dive"
        heading={<>Five layers of the <span className="text-primary">SpineWorkspace.</span></>}
        subheading="Scroll to explore each layer of the architecture that adapts to your tools."
        items={scrollItems}
      />

      <div className="section-divider" />

      <StickyGather
        tag="How It Assembles"
        heading={<>Scattered tools. <span className="text-primary">One unified architecture.</span></>}
        subheading="The architecture brings business context, working surfaces, intelligence, and governed execution together. Source systems retain their authoritative roles."
        centerLabel="The Spine"
        centerDescription="Adaptive core"
        items={gatherItems}
      />
    </>
  );
}
