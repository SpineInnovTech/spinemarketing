"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Cloud, Wrench, Package, ShoppingCart, Briefcase, TrendingUp,
  Building2, Truck, Heart, GraduationCap, Landmark, Wifi,
  type LucideIcon
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

type Industry = {
  icon: LucideIcon;
  name: string;
  href: string;
  tagline: string;
  pain: string;
  result: string;
  color: string;
  bg: string;
};

const industries: Industry[] = [
  {
    icon: Cloud, name: "SaaS & Subscription", href: "/solutions/saas",
    tagline: "Renewals, expansion, adoption — connected.",
    pain: "Usage drops hide in product analytics, invisible to CRM.",
    result: "90-day churn early warning from combined usage + support + billing signals.",
    color: "#3b82f6", bg: "rgba(59,130,246,0.12)",
  },
  {
    icon: Wrench, name: "Services & Agencies", href: "/solutions/services",
    tagline: "Margin, utilization, billing risk — before clients notice.",
    pain: "Unbilled time and scope creep caught too late.",
    result: "Revenue leakage detected the week it starts, not the month it closes.",
    color: "#8b5cf6", bg: "rgba(139,92,246,0.12)",
  },
  {
    icon: Package, name: "Manufacturing & Trade", href: "/solutions/manufacturing",
    tagline: "Supply chain, orders, payment exceptions — flagged early.",
    pain: "Delayed shipments and payment exceptions surface after the damage.",
    result: "Order-to-cash anomalies caught at source before cascade.",
    color: "#f59e0b", bg: "rgba(245,158,11,0.12)",
  },
  {
    icon: ShoppingCart, name: "Retail & Ecommerce", href: "/solutions/retail",
    tagline: "Stock, returns, support — act on signals, not complaints.",
    pain: "Returns spike and inventory gaps missed across channels.",
    result: "Cross-channel health score per product line with automated alerts.",
    color: "#ef4444", bg: "rgba(239,68,68,0.12)",
  },
  {
    icon: Briefcase, name: "Professional Services", href: "/solutions/professional-services",
    tagline: "Utilization, scope, billing — governed and traceable.",
    pain: "Consultant utilization and project margins tracked in spreadsheets.",
    result: "Real-time project health with margin alerts per engagement.",
    color: "#06b6d4", bg: "rgba(6,182,212,0.12)",
  },
  {
    icon: TrendingUp, name: "Finance & Fintech", href: "/solutions/finance",
    tagline: "Collections by customer health, not just aging.",
    pain: "Collections prioritized by invoice age, not customer context.",
    result: "AI-ranked collection priority combining payment history + account health.",
    color: "#10b981", bg: "rgba(16,185,129,0.12)",
  },
  {
    icon: Building2, name: "Real Estate & Property", href: "/solutions",
    tagline: "Tenant, lease, maintenance — one operational view.",
    pain: "Tenant requests, lease renewals, and maintenance scattered across systems.",
    result: "Property health dashboard with proactive renewal and maintenance signals.",
    color: "#a855f7", bg: "rgba(168,85,247,0.12)",
  },
  {
    icon: Truck, name: "Logistics & Distribution", href: "/solutions",
    tagline: "Routes, inventory, delivery exceptions — tracked live.",
    pain: "Delivery delays and inventory mismatches discovered at destination.",
    result: "Route-level anomaly detection with automated customer notification drafts.",
    color: "#f97316", bg: "rgba(249,115,22,0.12)",
  },
  {
    icon: Heart, name: "Healthcare & Wellness", href: "/solutions",
    tagline: "Patient engagement, scheduling, follow-up — connected.",
    pain: "Patient follow-ups and appointment coordination fragmented.",
    result: "Unified patient journey view with automated follow-up scheduling.",
    color: "#ec4899", bg: "rgba(236,72,153,0.12)",
  },
  {
    icon: GraduationCap, name: "Education & EdTech", href: "/solutions",
    tagline: "Enrollment, engagement, retention — one signal.",
    pain: "Student engagement signals buried across LMS, CRM, and support.",
    result: "At-risk student detection combining attendance + engagement + support data.",
    color: "#6366f1", bg: "rgba(99,102,241,0.12)",
  },
  {
    icon: Landmark, name: "Government & Public Sector", href: "/solutions",
    tagline: "Case management, compliance, citizen services — unified.",
    pain: "Case data fragmented across departments with no shared context.",
    result: "Cross-department case view with governed data access and audit trails.",
    color: "#0ea5e9", bg: "rgba(14,165,233,0.12)",
  },
  {
    icon: Wifi, name: "Media & Telecom", href: "/solutions",
    tagline: "Subscriber health, churn, support — predictive view.",
    pain: "Subscriber churn signals scattered across billing, usage, and support.",
    result: "Subscriber health scores with 60-day churn prediction accuracy.",
    color: "#14b8a6", bg: "rgba(20,184,166,0.12)",
  },
];

export function IndustriesShowcase({
  tag = "Industries",
  heading,
}: {
  tag?: string;
  heading?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  const [expanded, setExpanded] = useState(false);
  const visibleIndustries = expanded ? industries : industries.slice(0, 6);

  return (
    <section ref={containerRef} className="relative arvio-section marketing-surface overflow-hidden">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-[200px]" style={{ background: "rgba(27,167,132,0.04)" }} />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[180px]" style={{ background: "rgba(139,92,246,0.03)" }} />
      </motion.div>

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">{tag}</p>
          <h2 className="section-heading">
            {heading || <>Every industry. <span className="text-primary">One SpineWorkspace.</span></>}
          </h2>
          <p className="mt-5 text-[16px] font-medium leading-[1.55] text-white/50 max-w-xl mx-auto">
            The same story, shaped for your industry.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleIndustries.map((ind, i) => (
            <motion.div
              key={ind.name}
              {...fade(i * 0.04)}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.01] transition-all hover:border-white/[0.15] hover:-translate-y-1"
            >
              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: ind.bg, boxShadow: `0 0 30px ${ind.bg}` }}
                  >
                    <ind.icon className="h-6 w-6" style={{ color: ind.color }} />
                  </div>
                  <Link
                    href={ind.href}
                    className="text-[11px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Explore →
                  </Link>
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-[13px] font-medium leading-[1.6] text-white/50 mb-4">
                  {ind.tagline}
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg border border-red-500/10 bg-red-500/[0.04] px-3 py-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-red-400/70 mb-0.5">Pain</p>
                    <p className="text-[11px] leading-[1.5] text-white/40">{ind.pain}</p>
                  </div>
                  <div className="rounded-lg border border-primary/10 bg-primary/[0.04] px-3 py-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary/70 mb-0.5">Result</p>
                    <p className="text-[11px] leading-[1.5] text-white/40">{ind.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!expanded && (
          <motion.div {...fade(0.2)} className="mt-10 text-center">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[13px] font-semibold text-white/60 hover:border-white/20 hover:text-white transition-all"
            >
              Show all {industries.length} industries
              <span className="text-primary">+{industries.length - 6} more</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
