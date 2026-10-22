"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Database,
  Layers,
  RefreshCw,
  Shield,
  GitBranch,
} from "lucide-react";

const items = [
  {
    tag: "The record",
    title: "The tools keep the record",
    description: "Customers, tickets, billing, contracts, and approvals stay in the tools that already own them. SpineWorkspace does not create a new home for the record.",
    icon: Database,
    color: "#2dd4bf",
    features: [
      "The original tool stays in charge",
      "A copy in the workspace is not a new record",
      "You can see what was combined, and why",
      "Observed effects inform supported corrective work",
    ],
  },
  {
    tag: "The evidence",
    title: "Evidence is for this person and this task",
    description: "Email, notes, files, and conversations stay evidence. They help this person with this task. They do not become the record.",
    icon: Layers,
    color: "#8b5cf6",
    features: [
      "Only what this person may see",
      "Tied to this task, not to every task",
      "Every claim points back to its source",
      "Interpretations remain distinguishable from source evidence",
    ],
  },
  {
    tag: "The tools",
    title: "Each tool stays itself",
    description: "Use Salesforce, the desk, and the files you already have. They do not have to talk to each other directly.",
    icon: RefreshCw,
    color: "#fbbf24",
    features: [
      "No new home for the record",
      "The tools you already run stay in place",
      "Swap a tool without rebuilding the story",
      "Take your information with you when you leave",
    ],
  },
  {
    tag: "The person",
    title: "A person allows it, changes it, or stops it",
    description: "Twin can prepare a draft. Availability is not permission. A person with the right role decides.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "What was decided stays on the record of the decision",
      "The role decides what someone may see",
      "A team sees its own work",
      "No certification is claimed on this site",
    ],
  },
  {
    tag: "One connection",
    title: "The tools, files, and conversations you already use",
    description: "Supported connections bring records and evidence into related business context. Availability and scope depend on the provider and permissions.",
    icon: GitBranch,
    color: "#3b82f6",
    features: [
      "The apps your team already opens",
      "The files and conversations already in use",
      "Updates when something changes",
      "Nothing is assumed that is not connected",
    ],
  },
];

export function SpineStickyScroll() {
  return (
    <StickyScroll
      tag="How the connection works"
      heading={<>Five things that stay <span className="text-primary">in their place.</span></>}
      subheading="The record, the evidence, the tools, the person, and one connection between them."
      items={items}
    />
  );
}
