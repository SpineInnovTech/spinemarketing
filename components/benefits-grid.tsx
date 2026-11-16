"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Brain,
  LayoutDashboard,
  TrendingUp,
  Clock,
} from "lucide-react";

const defaultBenefits = [
  { icon: LayoutDashboard, title: "Unified Workspace", desc: "Every tool, every signal — one screen." },
  { icon: Brain, title: "AI-Powered Insights", desc: "The Twin surfaces what matters most." },
  { icon: Shield, title: "A person approves", desc: "Nothing happens without your approval." },
  { icon: Zap, title: "Real-Time Sync", desc: "Continuous data flow across connected systems." },
  { icon: TrendingUp, title: "Compounding Knowledge", desc: "Every approved session makes the system smarter." },
  { icon: Clock, title: "Time Reclaimed", desc: "Stop switching tabs. Start making decisions." },
];

export function BenefitsGrid({
  benefits = defaultBenefits,
  heading = "Built to keep your team in sync.",
  tag = "Benefits",
}: {
  benefits?: typeof defaultBenefits;
  heading?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            {tag}
          </p>
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            {heading}
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", damping: 18, stiffness: 70, delay: i * 0.06 }}
              className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                <Icon className="h-5 w-5 text-[#0176D3]" />
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[#032D60]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#444]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
