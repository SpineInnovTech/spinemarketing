import Link from "next/link";
import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Code2,
  FileCode2,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Cpu,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Documentation | Technical Reference & Architecture",
  description:
    "Comprehensive documentation for Spine InnovTech and SpineWorkspace: architecture, Spine Fabric, governed runtime, connectors, and machine-readable llms.txt index.",
  path: "/docs",
});

const DOC_SECTIONS = [
  {
    title: "Platform Architecture & Fabric",
    description: "Shared business context, source lineage and the platform architecture.",
    icon: Network,
    badge: "Architecture",
    docs: [
      {
        title: "Spine Fabric Context Engine",
        href: "/platform/spine-fabric",
        desc: "Related entities and source evidence, with existing tools retaining authority over their records.",
      },
      {
        title: "Context Ingestion & How It Works",
        href: "/platform/how-it-works",
        desc: "How source context is ingested, related and reconciled into business views.",
      },
      {
        title: "Platform Architecture Overview",
        href: "/platform",
        desc: "High-level system topology, twin runtime interaction, and decoupled data models.",
      },
      {
        title: "Cloud Infrastructure & Isolation",
        href: "/platform/infrastructure",
        desc: "Tenant isolation, edge routing, compute boundaries, and failover mechanics.",
      },
    ],
  },
  {
    title: "Governed Runtime & Security",
    description: "Access control, action authorization and outcome reconciliation.",
    icon: ShieldCheck,
    badge: "Trust & Governance",
    docs: [
      {
        title: "Governed Runtime & Reconciliation",
        href: "/governance",
        desc: "Read-and-propose operational model with strict verification before write execution.",
      },
      {
        title: "Approval Gate Twin Queues",
        href: "/product/approval-gate-twin",
        desc: "Review proposed actions and the evidence needed for an authorized decision.",
      },
      {
        title: "Security & Encryption Architecture",
        href: "/security",
        desc: "Data-in-flight and data-at-rest encryption, tenant boundaries, and audit logging.",
      },
      {
        title: "Business Context Integrity",
        href: "/business-context",
        desc: "Source evidence, relationships and decision history across connected tools.",
      },
    ],
  },
  {
    title: "Adaptive Workbenches & AI Twin",
    description: "Domain-specific projections and context-aware intelligence running inside policy bounds.",
    icon: Layers3,
    badge: "Runtime Workbenches",
    docs: [
      {
        title: "The Adaptive Workspace",
        href: "/product/the-adaptive-workspace",
        desc: "13 domain projections adapting visually and functionally to operational roles.",
      },
      {
        title: "Spine Twin Operating Principles",
        href: "/twin",
        desc: "Context-aware assistance that prepares proposals within the applicable access and action controls.",
      },
      {
        title: "Multi-Session Task Continuity",
        href: "/continuity",
        desc: "Durable cross-session state persistence for complex long-running operations.",
      },
      {
        title: "SpineWorkspace Product Details",
        href: "/product",
        desc: "Flagship unified workspace environment for cross-functional operators and AI.",
      },
    ],
  },
  {
    title: "Integrations & Technical Evaluation",
    description: "Connector coverage, event ingestion and access requirements for compatible AI hosts.",
    icon: Code2,
    badge: "Extensibility",
    docs: [
      {
        title: "Connector Catalog",
        href: "/integrations",
        desc: "Find relevant tools and confirm their supported operations and setup.",
      },
      {
        title: "Developer Evaluation",
        href: "/developers",
        desc: "Integration paths, host connection requirements and technical evaluation.",
      },
      {
        title: "Host-Connected Environments",
        href: "/host-connected-environment",
        desc: "Host identity, capability discovery, authorization and verified execution are separate requirements.",
      },
      {
        title: "Release Notes & Changelog",
        href: "/changelog",
        desc: "Detailed dated technical history of platform additions, schema updates, and fixes.",
      },
    ],
  },
];

export default function DocsPage() {
  const breadcrumbs = breadcrumb("/docs", "Documentation");

  return (
    <MarketingPageShell breadcrumbs={breadcrumbs}>
      <PageHero
        badge="Technical Documentation Hub"
        headline="Spine InnovTech Documentation"
        subhead="Explore the architecture, governance and integration paths behind SpineWorkspace. Confirm supported connections and deployment access with your team's technical evaluation."
        primaryCta={{ label: "Developer Overview", href: "/developers" }}
        secondaryCta={{ label: "Machine-Readable /llms.txt", href: "/llms.txt" }}
      />

      {/* Machine-Readable /llms.txt Banner */}
      <section className="border-b border-[#D6E8F8] bg-[#F0F8FF] py-6">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white px-5 py-4 shadow-xs sm:flex-row sm:items-center">
            <BorderBeam size={180} duration={12} colorFrom="#006FE8" colorTo="#38BDF8" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF7FF] text-[#006FE8]">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#082B5E]">
                  Autonomous Agents &amp; LLM Context Index
                </p>
                <p className="text-xs text-[#4E607A]">
                  Looking to index Spine InnovTech documentation for AI models or MCP agents? We maintain a structured{" "}
                  <code className="rounded bg-[#F0F8FF] px-1.5 py-0.5 font-mono text-[11px] text-[#006FE8] border border-[#CBE5FA]">
                    /llms.txt
                  </code>{" "}
                  index.
                </p>
              </div>
            </div>
            <a
              href="/llms.txt"
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#006FE8] hover:underline"
            >
              <span>Read /llms.txt</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Documentation Categories Grid */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {DOC_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <MagicCard
                  key={section.title}
                  className="flex flex-col rounded-2xl border border-[#CCE3F5] bg-white p-6 shadow-sm transition hover:border-[#96C7F2] hover:shadow-md sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EBF5FF] text-[#006FE8]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#CCE3F5] bg-[#F0F8FF] px-3 py-1 text-xs font-semibold text-[#006FE8]">
                      {section.badge}
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-[#082B5E]">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#556F8E]">
                    {section.description}
                  </p>

                  <div className="mt-6 divide-y divide-[#EBF2F9] border-t border-[#EBF2F9]">
                    {section.docs.map((doc) => (
                      <Link
                        key={doc.title}
                        href={doc.href}
                        className="group flex items-start justify-between gap-4 py-3.5 transition hover:text-[#006FE8]"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#082B5E] group-hover:text-[#006FE8]">
                            {doc.title}
                          </p>
                          <p className="mt-0.5 text-xs text-[#526D8B] line-clamp-1">
                            {doc.desc}
                          </p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#8CA6C3] transition group-hover:translate-x-0.5 group-hover:text-[#006FE8]" />
                      </Link>
                    ))}
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance and data-handling references */}
      <section className="border-t border-[#D6E8F8] bg-[#F4F9FD] py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#208050]" />
              <div>
                <h3 className="text-sm font-bold text-[#082B5E]">
                  Systems of Record Authoritative
                </h3>
                <p className="mt-1 text-xs text-[#526D8B]">
                  Your existing tools retain their records. Consequential changes require the applicable authorization and outcome checks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-[#006FE8]" />
              <div>
                <h3 className="text-sm font-bold text-[#082B5E]">
                  Review Data Handling
                </h3>
                <p className="mt-1 text-xs text-[#526D8B]">
                  Review the applicable provider terms, retention settings and processing boundaries for your deployment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-[#006FE8]" />
              <div>
                <h3 className="text-sm font-bold text-[#082B5E]">
                  Deterministic Action Gates
                </h3>
                <p className="mt-1 text-xs text-[#526D8B]">
                  Proposed actions remain subject to access scopes, policy checks and the required human authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
