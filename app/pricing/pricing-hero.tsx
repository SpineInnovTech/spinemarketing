"use client";

import { Zap, Shield, Brain, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";

function PricingTierPreviewCard() {
  const tiers = [
    {
      icon: Zap,
      tier: "Starter",
      price: "US$49 / user / mo",
      label: "See unified context",
      detail: "One workspace, shared context, and approval-first workflow entry.",
      active: false,
    },
    {
      icon: Brain,
      tier: "Growth",
      price: "Scoped expansion",
      label: "Twin prepares proposals",
      detail: "Cross-team workflows, department projections, and evidence packets.",
      active: true,
    },
    {
      icon: Shield,
      tier: "Command",
      price: "Enterprise scope",
      label: "Approvals and a full record",
      detail: "Custom connector scopes, role policies, and dedicated rollout support.",
      active: false,
    },
  ];

  return (
    <div className="rounded-xl border border-[#D9E4EF] bg-[#F8FBFF] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2 border-b border-[#D9E4EF] pb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8]">
          Evaluation &amp; Commercial Progression
        </span>
        <span className="rounded-full border border-[#CBE5FA] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#032D60]">
          Starts at US$49 / user / month
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        {tiers.map((item) => (
          <div
            key={item.tier}
            className={`rounded-xl border p-3.5 transition-colors ${
              item.active
                ? "border-[#006FE8]/40 bg-[#EAF5FC]/70 shadow-2xs"
                : "border-[#D9E4EF] bg-white"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${
                    item.active
                      ? "bg-[#006FE8] text-white"
                      : "bg-[#F0F8FF] text-[#006FE8]"
                  }`}
                >
                  <item.icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <div className="text-[14px] font-bold text-[#032D60]">{item.tier}</div>
                  <div className="text-[11.5px] font-medium text-[#526479]">{item.label}</div>
                </div>
              </div>
              <span className="rounded-md border border-[#CBE5FA] bg-white px-2.5 py-1 text-[11.5px] font-semibold text-[#032D60]">
                {item.price}
              </span>
            </div>
            <p className="mt-2 text-[12.5px] leading-snug text-[#3A506B]">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#D9E4EF] bg-white px-3 py-2 text-[12px] text-[#526479]">
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#006FE8]" aria-hidden />
        <span>Billed monthly · AI/provider usage and custom setup are scoped separately.</span>
      </div>
    </div>
  );
}

export function PricingHero() {
  return (
    <PageHero
      badge="Evaluation & pricing"
      headline={"Start with one approved workflow.\nGrow from there."}
      subhead="SpineWorkspace starts at US$49 per user / month billed monthly. Most teams begin with one scoped workflow, then add connectors and tighter approval rules as more people use it."
      primaryCta={{ label: "Book a workflow review", href: "/contact?intent=workflow-review" }}
      secondaryCta={{ label: "Explore SpineWorkspace", href: "/product#features" }}
      art={<PricingTierPreviewCard />}
    />
  );
}
