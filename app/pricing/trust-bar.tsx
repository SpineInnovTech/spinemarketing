"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Zap } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 16 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

export function PricingTrustBar() {
  return (
    <section className="relative overflow-x-clip border-t border-[#D9E4EF] bg-[#F3F6F9] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <motion.div {...fade(0)} className="mx-auto max-w-lg text-center mb-10">
          <h2 className="text-[length:min(24px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60]">
            Every plan includes{" "}
            <span className="text-[#0176D3]">a person in control.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "SOC 2 aligned", desc: "Practices only — no certification claimed" },
            { icon: Lock, label: "AES-256 encryption", desc: "Data encrypted at rest" },
            { icon: Eye, label: "Full audit trail", desc: "Every action logged" },
            { icon: Zap, label: "Continuous sync", desc: "Near real-time data flow" },
          ].map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              {...fade(i * 0.06)}
              className="flex h-full items-center gap-3 rounded-[20px] border border-[#D9E4EF] bg-white p-5 shadow-[0_1px_2px_rgba(3,45,96,0.04)]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#F3F6F9]">
                <Icon className="h-4 w-4 text-[#0176D3]" />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#032D60]">{label}</div>
                <div className="text-[11px] text-[#706E6B]">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
