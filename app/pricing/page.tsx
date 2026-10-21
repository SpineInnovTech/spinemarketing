import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, HelpCircle, ShieldCheck } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-url";
import { EXPLORE_SPINEWORKSPACE_LABEL, PRODUCT_SITE_URL } from "@/lib/product-site";

const pricingDescription =
  "SpineWorkspace pricing and commercial access models are hosted on the product site at spineworkspace.com. Start free or estimate usage based on connected tools.";

export const metadata: Metadata = {
  title: { absolute: "SpineWorkspace Pricing & Access | Spine InnovTech" },
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "SpineWorkspace Pricing & Commercial Access",
    description: pricingDescription,
    url: absoluteUrl("/pricing"),
  },
};

const pricingQuestions = [
  {
    question: "Where are SpineWorkspace commercial plans and pricing hosted?",
    answer:
      "All commercial plans, the interactive connector usage calculator, free-tier registration, and checkout are hosted exclusively on the product website at spineworkspace.com/pricing.",
  },
  {
    question: "Does SpineWorkspace offer a free starting tier?",
    answer:
      "Yes. SpineWorkspace provides a permanently free tier for individual operators to connect 1 AI host (via Spine Network MCP) and up to 2 data sources with 5,000 indexed business context entities.",
  },
  {
    question: "How is team pricing calculated?",
    answer:
      "Pricing scales with your connected footprint: base seats ($29/user/month), active connected systems of record ($15/tool/month), and high-frequency sync streams ($10/stream/month).",
  },
  {
    question: "How does Spine InnovTech relate to SpineWorkspace?",
    answer:
      "Spine InnovTech Private Limited is the parent company and engineering organization building the Spine Fabric and Governed Agent Runtime powering SpineWorkspace.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Pricing", url: absoluteUrl("/pricing") },
        ]}
      />
      <FAQPageJsonLd questions={pricingQuestions} />
      <Header />
      <main id="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white px-5 pb-16 pt-32 text-[#052858] sm:px-8 lg:pb-20">
          <div className="mx-auto max-w-[1180px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              COMMERCIAL ACCESS &amp; PRICING
            </p>
            <h1 className="mt-5 max-w-[850px] mx-auto text-[length:min(clamp(2.5rem,5vw,4.5rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-.045em] text-[#032D60]">
              Transparent, usage-governed pricing for your workspace.
            </h1>
            <p className="mt-5 max-w-[700px] mx-auto text-[length:var(--marketing-body-size)] leading-7 text-[#4E607A]">
              SpineWorkspace pricing is consumption-governed and hosted on the product site. Start with our permanently free tier, or calculate your team’s exact plan based on the tools and sync streams you connect.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://spineworkspace.com/pricing"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-7 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] hover:bg-[#0055B8] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
              >
                Go to Product Pricing Calculator <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-6 text-sm font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
              >
                Talk to Enterprise Architecture <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-[#4E607A]">
              New to SpineWorkspace?{" "}
              <Link href="/product" className="font-semibold text-[#006FE8] hover:underline">
                See the product and Workbench views
              </Link>
            </p>
          </div>
        </section>

        {/* 3 Pillars of Pricing */}
        <section className="bg-white px-5 py-14 sm:px-8 sm:py-18 border-b border-[#D6E8F8]">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-[#D6E8F8] bg-[#F8FBFF] p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-[#006FE8]">TIER 01</span>
                  <h3 className="mt-3 text-xl font-bold text-[#082B5E]">Free Discovery</h3>
                  <p className="mt-2 text-sm text-[#4E607A] leading-relaxed">
                    1 AI host connection via Network MCP, 2 connected data sources, and up to 5,000 indexed entities. Permanently free.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-[#315775]">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> No credit card required</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> Governed approval gate</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> Table &amp; Canvas views</li>
                  </ul>
                </div>
                <a
                  href={PRODUCT_SITE_URL}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#006FE8] hover:underline"
                >
                  {EXPLORE_SPINEWORKSPACE_LABEL} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>

              <article className="rounded-2xl border-2 border-[#006FE8] bg-white p-6 sm:p-7 shadow-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-[#006FE8]">TIER 02</span>
                  <h3 className="mt-3 text-xl font-bold text-[#082B5E]">Team &amp; Scale</h3>
                  <p className="mt-2 text-sm text-[#4E607A] leading-relaxed">
                    Interactive connector model: $29/seat + $15/tool/mo + $10/sync-stream/mo. Real-time SSE rehydration &amp; multi-host continuity.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-[#315775]">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> 14-day free trial</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> 5-minute sync streams</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> 13 domain projections</li>
                  </ul>
                </div>
                <a
                  href="https://spineworkspace.com/pricing"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#006FE8] hover:underline"
                >
                  Configure on Interactive Calculator <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>

              <article className="rounded-2xl border border-[#D6E8F8] bg-[#F8FBFF] p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-[#006FE8]">TIER 03</span>
                  <h3 className="mt-3 text-xl font-bold text-[#082B5E]">Governed Enterprise</h3>
                  <p className="mt-2 text-sm text-[#4E607A] leading-relaxed">
                    Dedicated VPC / On-Premise storage placement (ADR-2026-09-15-01), custom MCP endpoints, SAML/SCIM SSO, and 24/7 SLA.
                  </p>
                  <ul className="mt-6 space-y-2 text-xs text-[#315775]">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> Custom policy authoring</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> Full audit log retention</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#12B76A]" /> Dedicated enterprise architect</li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#006FE8] hover:underline"
                >
                  Contact Enterprise Team <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="bg-white px-5 py-14 sm:px-8 sm:py-18">
          <div className="mx-auto max-w-[840px]">
            <h2 className="text-2xl font-bold text-[#082B5E] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {pricingQuestions.map((q) => (
                <div key={q.question} className="rounded-xl border border-[#D6E8F8] bg-[#F8FBFF] p-5">
                  <h3 className="text-base font-semibold text-[#082B5E] flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-[#006FE8] shrink-0 mt-1" />
                    <span>{q.question}</span>
                  </h3>
                  <p className="mt-2 text-sm text-[#4E607A] leading-relaxed pl-6">
                    {q.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
