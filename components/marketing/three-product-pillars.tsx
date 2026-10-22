import Link from "next/link";
import { ArrowRight, Database, Layers3, PanelsTopLeft } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Database,
    title: "Business context, not another AI chatbot.",
    promise: "Ingest the truth. Retrieve the context.",
    description: "Spine Fabric relates authorized records, events, goals, decisions, evidence and work across the systems you already use. Source applications remain authoritative; the Fabric gives humans and AI the governed context for the task.",
    proof: "Source lineage · Relationships · Authorized retrieval",
    href: "/business-context",
    link: "Explore the business context",
  },
  {
    number: "02",
    icon: Layers3,
    title: "One Fabric. 13 domain workspaces.",
    promise: "Different views. Shared business understanding.",
    description: "Sales, Account Success, Finance, Engineering, Operations and leadership do not need disconnected context engines. Each sees an authorized, role-relevant projection of the same governed Fabric, with cross-domain relationships preserved.",
    proof: "Shared entities · Domain-specific projections · Permissions",
    href: "/product#workbench-views",
    link: "Explore the domain views",
  },
  {
    number: "03",
    icon: PanelsTopLeft,
    title: "Ready-to-work views from day one.",
    promise: "Configure your role. Connect your tools. Start working.",
    description: "A prebuilt catalog provides common tasks, records, signals, decisions and review surfaces without commissioning a custom departmental application. Supported workflows still require appropriate identity, data access and setup.",
    proof: "Prebuilt view catalog · Role-aware work · Governed next steps",
    href: "/product#workbench-views",
    link: "See the ready-built workspace",
  },
] as const;

export function ThreeProductPillars({ compact = false }: { compact?: boolean }) {
  return (
    <section id="product-strengths" aria-labelledby="product-strengths-title" className={compact ? "bg-[#F0F8FF] py-16 lg:py-20" : "bg-[#EBF7FF] py-20 lg:py-28"}>
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">WHY SPINE WORKSPACE IS DIFFERENT</p>
        <h2 id="product-strengths-title" className="mt-4 max-w-[1050px] text-[length:min(clamp(2rem,4vw,3.5rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-[-.045em] text-[#082B5E]">
          One business context. Every domain. Ready for work.
        </h2>
        <p className="mt-5 max-w-[840px] text-[16px] leading-8 text-[#4E607A]">
          Not an AI wrapper or a new silo. SpineWorkspace is a business-context Workbench: one governed Fabric, projected into ready-built operational views for the people and AI doing the work.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pillars.map(({ number, icon: Icon, title, promise, description, proof, href, link }) => (
            <article key={number} className="flex h-full flex-col rounded-[24px] border border-[#CBE5FA] bg-white p-7 shadow-[0_12px_32px_rgba(21,84,149,.05)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F4FF] text-[#006FE8]"><Icon className="h-6 w-6" aria-hidden /></span>
                <span className="font-mono text-sm font-semibold text-[#78A7CE]">{number}</span>
              </div>
              <h3 className="mt-7 text-[length:min(1.45rem,var(--marketing-card-size))] font-semibold leading-snug tracking-tight text-[#082B5E]">{title}</h3>
              <p className="mt-3 text-sm font-semibold text-[#006FE8]">{promise}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#4E607A]">{description}</p>
              <p className="mt-6 border-t border-[#E5EFF8] pt-4 text-xs leading-6 text-[#44617C]">{proof}</p>
              <Link className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2" href={href}>{link}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-[890px] text-xs leading-6 text-[#60768C]">Day-one readiness means prebuilt views for supported workflows, not instant access to unconnected or unauthorized data. Actual content depends on connected sources, roles and permitted capabilities.</p>
      </div>
    </section>
  );
}
