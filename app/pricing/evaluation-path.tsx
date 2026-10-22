"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EnterpriseButton } from "@/components/marketing/enterprise";

const steps = [
  {
    title: "Scope one workflow",
    body: "Pick a high-value operating workflow — renewal readiness, escalation brief, or forecast review — and the systems it depends on.",
  },
  {
    title: "Connect authorized context",
    body: "Wire the connectors your evaluation needs. Source systems stay authoritative. Permissions inherit from each system.",
  },
  {
    title: "Run governed work",
    body: "People and Twin work from the same evidence. Proposals stay proposals until someone with authority accepts them.",
  },
  {
    title: "Decide on commercial fit",
    body: "Pricing follows workflow scope, connector footprint, and governance needs — not a generic seat count alone.",
  },
];

const packages = [
  {
    name: "Evaluation",
    audience: "A focused operating team",
    outcome: "Prove one governed workflow on real business context",
    note: "Fixed scope, defined timeline, limited integrations",
  },
  {
    name: "Team Workspace",
    audience: "One functional team",
    outcome: "Run recurring workflows with governed context",
    note: "Workspace scope plus connected-context footprint",
  },
  {
    name: "Enterprise",
    audience: "Multiple teams or business units",
    outcome: "Shared operating context, governance, broader integrations",
    note: "Custom agreement and implementation plan",
  },
];

export function PricingEvaluationPath() {
  return (
    <section className="border-b border-[#D9E4EF] bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Commercial path</p>
          <h2 className="mt-3 text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60]">
            Priced to the workflow, not the buzzword
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[#33465B]">
            SpineWorkspace is priced to integration scope, governance needs, and the operating workflows you run. Start with a scoped evaluation — not a generic trial claim.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 1, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="list-none rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-5"
            >
              <span className="text-[13px] font-semibold tabular-nums text-[#0176D3]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-[16px] font-semibold text-[#032D60]">{step.title}</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#33465B]">{step.body}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-[20px] border border-[#D9E4EF] bg-white p-6 shadow-[0_8px_24px_rgba(3,45,96,0.06)]"
            >
              <p className="text-[length:min(18px,var(--marketing-body-size))] font-semibold text-[#032D60]">{pkg.name}</p>
              <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#526479]">{pkg.audience}</p>
              <p className="mt-3 text-[14px] leading-[1.55] text-[#33465B]">{pkg.outcome}</p>
              <p className="mt-2 text-[13px] text-[#706E6B]">{pkg.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EnterpriseButton href="/contact?intent=demo">Plan an evaluation</EnterpriseButton>
          <Link href="/proof" className="text-[14px] font-semibold text-[#0176D3] hover:underline">
            See the demonstration first
          </Link>
        </div>
      </div>
    </section>
  );
}
