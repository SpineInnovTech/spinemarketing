"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type ComparisonRow = {
  feature: string;
  us: boolean | string;
  others: boolean | string;
};

const defaultRows: ComparisonRow[] = [
  { feature: "Unified data spine across all tools", us: true, others: false },
  { feature: "Human approval on every AI action", us: true, others: false },
  { feature: "Evidence chains on every insight", us: true, others: false },
  { feature: "Three data flows (Truth, Context, Sessions)", us: true, others: false },
  { feature: "AI session summaries linked to entities", us: true, others: false },
  { feature: "Immutable audit trail", us: true, others: "Partial" },
  { feature: "Knowledge compounds over time", us: true, others: false },
  { feature: "Works with your existing stack", us: true, others: true },
  { feature: "Enterprise governance (audit trails, AES-256)", us: true, others: "Varies" },
  { feature: "No-code connector setup", us: true, others: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0176D3]/10">
        <Check className="h-3.5 w-3.5 text-[#0176D3]" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F3F6F9]">
        <X className="h-3.5 w-3.5 text-[#C9C9C9]" />
      </div>
    );
  }
  return (
    <div className="flex h-6 items-center">
      <Minus className="mr-1 h-3 w-3 text-amber-600" />
      <span className="text-[12px] font-semibold text-amber-700">{value}</span>
    </div>
  );
}

export function ComparisonSection({
  rows = defaultRows,
  heading = "The better way to work.",
  subheading = "See how SpineWorkspace compares to stitching tools together.",
}: {
  rows?: ComparisonRow[];
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 md:py-28">
      <div className="relative mx-auto max-w-[900px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            Why SpineWorkspace
          </p>
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            {heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#444]">
            {subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.1 }}
          className="overflow-hidden rounded-md border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
        >
          <div className="grid grid-cols-[1fr_auto_auto] items-center border-b border-[#E5E5E5] bg-[#F3F6F9] px-6 py-4">
            <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#706E6B]">
              Feature
            </span>
            <span className="w-[100px] text-center text-[13px] font-bold text-[#0176D3]">
              SpineWorkspace
            </span>
            <span className="w-[100px] text-center text-[13px] font-bold text-[#706E6B]">
              Others
            </span>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`grid grid-cols-[1fr_auto_auto] items-center px-6 py-3.5 ${
                i % 2 === 0 ? "bg-white" : "bg-[#FAFBFC]"
              } border-b border-[#E5E5E5] last:border-0`}
            >
              <span className="text-[14px] font-medium text-[#444] pr-4">
                {row.feature}
              </span>
              <div className="flex w-[100px] justify-center">
                <CellValue value={row.us} />
              </div>
              <div className="flex w-[100px] justify-center">
                <CellValue value={row.others} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
