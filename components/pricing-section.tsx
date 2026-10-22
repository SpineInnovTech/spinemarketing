"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/mo",
    description: "Unified visibility from the apps you connect.",
    features: [
      "Connect a small set of tools and see basics clearly",
      "Manual approvals for every move keep early trust strong",
      "Great for individuals or small teams testing SpineWorkspace",
    ],
    cta: "Get started",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/user/mo",
    description: "Governed intelligence at scale.",
    features: [
      "Connect many tools and unlock richer patterns",
      "Twin suggests actions; you approve with full context",
      "Ideal for growing teams that want governed, shared insight",
    ],
    cta: "Get started",
    href: "/contact?intent=pricing",
    highlighted: true,
  },
  {
    name: "Command",
    price: "$199",
    period: "/user/mo",
    description: "Enterprise governance and control.",
    features: [
      "Connect the full body of tools without losing clarity",
      "Deep pattern detection with layered approval gates",
      "One governed workspace for the entire organization",
    ],
    cta: "Talk to us",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
];

export function PricingSection({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  return (
    <section id="pricing" className="border-t border-[#D9E4EF] bg-[#F3F6F9] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {hideHeading && (
            <p className="mb-6 text-[13px] leading-[1.55] text-[#526479]">
              Illustrative tier framework for planning conversations. Confirm current commercial terms with the team before purchase.
            </p>
          )}
          {!hideHeading && (
            <>
              <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] text-[#032D60]">
                Choose your{" "}
                <span className="text-[#0176D3]">workspace tier.</span>
              </h2>
              <p className="mt-4 text-[length:min(17px,var(--marketing-body-size))] leading-[1.5] text-[#444]">
                Start small, add more tools and intelligence as your team needs it.
                No hidden costs.
              </p>
            </>
          )}

          <p className="mt-6 text-[13px] font-semibold tracking-[0.04em] text-[#526479]">
            Prices in US dollars
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
                delay: i * 0.1,
              }}
              className={`relative flex h-full flex-col rounded-[20px] border p-5 ${
                plan.highlighted
                  ? "border-[#0176D3] bg-white shadow-[0_2px_8px_rgba(1,118,211,0.12)]"
                  : "border-[#D9E4EF] bg-white shadow-[0_1px_2px_rgba(3,45,96,0.04)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-md bg-[#0176D3] px-3 py-1 text-[12px] font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#032D60]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-[15px] text-[#706E6B]">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-[length:min(34px,var(--marketing-heading-size))] font-semibold tracking-[-0.04em] text-[#032D60]">
                    {plan.price}
                  </span>
                  <span className="text-[15px] text-[#706E6B]">
                    {plan.period}
                  </span>
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0176D3]/10">
                      <Check className="h-3 w-3 text-[#0176D3]" />
                    </div>
                    <span className="text-[15px] leading-[1.5] text-[#444]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 inline-flex h-10 w-full items-center justify-center rounded-md text-[14px] font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-[#0176D3] text-white hover:bg-[#0B5CAB]"
                    : "border border-[#C9C9C9] bg-white text-[#032D60] hover:bg-[#F3F3F3]"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="text-[length:min(17px,var(--marketing-body-size))] font-semibold tracking-[-0.03em] text-[#032D60]">
              Implementation &amp; services
            </p>
            <p className="mt-2 text-[15px] leading-[1.5] text-[#444]">
              Optional onboarding packages to get you live faster. Available for
              all tiers.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { name: "Workspace setup", price: "From $3K" },
                { name: "Connector workshop", price: "From $2K" },
                { name: "Custom add-ons", price: "Custom" },
              ].map((item, i) => (
                <div key={i} className="rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-4">
                  <div className="text-[15px] font-semibold tracking-[-0.03em] text-[#032D60]">
                    {item.name}
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-[#0176D3]">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
