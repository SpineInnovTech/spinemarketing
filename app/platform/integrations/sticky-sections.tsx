"use client";

import { StickyScroll } from "@/components/sticky-scroll";
import {
  Cloud,
  GitBranch,
  Webhook,
  FileInput,
  Shield,
} from "lucide-react";

const items = [
  {
    tag: "SaaS Connectors",
    title: "Connect supported tools with explicit permissions",
    description: "CRM, support, finance, projects, and knowledge sources contribute different context. Authentication, availability, and supported operations vary by provider.",
    icon: Cloud,
    color: "#3b82f6",
    features: [
      "Sign-in and consent set by each provider",
      "Connection records kept per company",
      "Stated read and action abilities",
      "Granted access checked before use",
    ],
  },
  {
    tag: "Connected tools",
    title: "Read context. Prepare actions for approval.",
    description: "Connected tools say what they can read and do. Access stays limited, and anything that matters needs the right person's yes.",
    icon: GitBranch,
    color: "#8b5cf6",
    features: [
      "Finding a tool is separate from being allowed to use it",
      "What it can do depends on the connection and its limits",
      "Actions that matter need the right person's yes",
      "Results checked against the source",
    ],
  },
  {
    tag: "Event alerts",
    title: "Bring changes from your tools into shared context",
    description: "Get a signal when something changes in a connected tool, set up per provider. Agree which changes, how they are read, and which company they belong to during setup.",
    icon: Webhook,
    color: "#2dd4bf",
    features: [
      "Supported change types per provider",
      "Read in the way each provider needs",
      "Matched to the right company and workspace",
      "Delivery and retry agreed during setup",
    ],
  },
  {
    tag: "File Drops",
    title: "Review imports with your source data",
    description: "Use supported exports and documents as evidence. Confirm formats, matching and record handling for your environment.",
    icon: FileInput,
    color: "#fbbf24",
    features: [
      "Supported formats agreed for the source data",
      "Fields matched to the right item",
      "Source evidence kept apart from records",
      "Review changes before approved updates",
    ],
  },
  {
    tag: "Limits",
    title: "Connections carry limits and a purpose",
    description: "Finding a tool grants no access on its own. A connection needs a valid sign-in, permission and a supported ability before use.",
    icon: Shield,
    color: "#ef4444",
    features: [
      "Connection limited to the right company",
      "Stated ability and provider checks",
      "Consent and granted access",
      "Results checked against the source",
    ],
  },
];

export function IntegrationsStickyScroll() {
  return (
    <div id="integration-methods" className="scroll-mt-24">
      <StickyScroll
        tag="Connector Deep Dive"
        heading={<>Four paths in. <span className="text-primary">One connected context.</span></>}
        subheading="Review each integration method, then confirm the supported operations and setup for your environment."
        items={items}
      />
    </div>
  );
}
