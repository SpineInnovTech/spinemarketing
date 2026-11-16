"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

const planFeatures = [
  {
    category: "Core Platform",
    features: [
      { name: "One connection to the tools you already use", starter: true, growth: true, command: true },
      { name: "Connected apps", starter: "5", growth: "15", command: "Unlimited" },
      { name: "The view for this role", starter: true, growth: true, command: true },
      { name: "The record and the evidence stay apart", starter: true, growth: true, command: true },
      { name: "Earlier conversations stay with that sitting", starter: false, growth: true, command: true },
    ],
  },
  {
    category: "Workspace",
    features: [
      { name: "Account management", starter: true, growth: true, command: true },
      { name: "Task queue & workflows", starter: true, growth: true, command: true },
      { name: "Calendar integration", starter: true, growth: true, command: true },
      { name: "Portfolio health views", starter: "Basic", growth: true, command: true },
    ],
  },
  {
    category: "Twin",
    features: [
      { name: "Ask Twin", starter: false, growth: true, command: true },
      { name: "The view for this morning", starter: false, growth: true, command: true },
      { name: "A proposal that points back to its source", starter: false, growth: true, command: true },
      { name: "A summary of what a person accepted", starter: false, growth: true, command: true },
      { name: "Every claim points back to its source", starter: false, growth: true, command: true },
    ],
  },
  {
    category: "Approvals",
    features: [
      { name: "Basic risk alerts", starter: true, growth: true, command: true },
      { name: "Approval rules", starter: false, growth: true, command: true },
      { name: "A record of what a person decided", starter: false, growth: false, command: true },
      { name: "SSO & RBAC", starter: false, growth: false, command: true },
      { name: "Enterprise audit trail", starter: false, growth: false, command: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", starter: true, growth: true, command: true },
      { name: "Priority support", starter: false, growth: true, command: true },
      { name: "Dedicated success team", starter: false, growth: false, command: true },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0176D3]/10">
        <Check className="h-3 w-3 text-[#0176D3]" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F3F6F9]">
        <X className="h-3 w-3 text-[#C9C9C9]" />
      </div>
    );
  }
  return (
    <span className="text-[12px] font-semibold text-[#444]">{value}</span>
  );
}

export function PricingComparison() {
  return (
    <section className="relative overflow-x-clip border-t border-[#D9E4EF] bg-white py-20 md:py-24">
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            Compare Plans
          </p>
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            See how each plan stacks up.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#444]">
            Compare features side by side to find the right fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_1px_2px_rgba(3,45,96,0.04)]"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_3.25rem_3.25rem_3.25rem] items-center border-b border-[#D9E4EF] bg-[#F3F6F9] px-3 py-4 sm:grid-cols-[minmax(0,1fr)_90px_90px_90px] sm:px-5">
            <span className="text-[13px] font-bold text-[#706E6B]" />
            <span className="text-center text-[12px] font-bold text-[#444]">Starter</span>
            <span className="text-center text-[12px] font-bold text-[#0176D3]">Growth</span>
            <span className="text-center text-[12px] font-bold text-[#444]">Command</span>
          </div>

          {planFeatures.map((category) => (
            <div key={category.category}>
              <div className="border-b border-[#D9E4EF] bg-[#F3F6F9] px-3 py-3 sm:px-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#032D60]">
                  {category.category}
                </span>
              </div>
              {category.features.map((feature, fi) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-[minmax(0,1fr)_3.25rem_3.25rem_3.25rem] items-center px-3 py-3 sm:grid-cols-[minmax(0,1fr)_90px_90px_90px] sm:px-5 ${
                    fi % 2 === 0 ? "bg-white" : "bg-[#F3F6F9]"
                  } border-b border-[#D9E4EF]`}
                >
                  <span className="min-w-0 pr-2 text-[13px] font-medium text-[#33465B]">{feature.name}</span>
                  <div className="flex justify-center"><CellValue value={feature.starter} /></div>
                  <div className="flex justify-center"><CellValue value={feature.growth} /></div>
                  <div className="flex justify-center"><CellValue value={feature.command} /></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.2 }}
          className="mt-10 rounded-[20px] border border-[#D9E4EF] bg-[#F3F6F9] p-5 text-center"
        >
          <h3 className="text-[18px] font-semibold text-[#032D60]">Still deciding?</h3>
          <p className="mt-2 text-[14px] text-[#444]">
            Book a demo and we&apos;ll help you find the right tier.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#0B5CAB]"
            >
              Book a demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
