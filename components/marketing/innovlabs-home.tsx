import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { CorporateOrbitalHero } from "./corporate-orbital-hero";
import { CorporateArchitectureStoryboard } from "./corporate-architecture-storyboard";
import { WorkspaceBenefits } from "./workspace-benefits";

const approach = [
  ["Connect", "Bring together the records your team is authorized to use."],
  ["Prepare", "Review the context. Ask your AI Twin to summarize the situation and prepare a next step."],
  ["Review", "Check the evidence, authorize consequential actions and retain the outcome."],
] as const;
const container = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12";
const heading = "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const button = "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] transition-all hover:bg-[#0055B8] hover:shadow-[0_10px_24px_rgba(0,111,232,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,111,232,0.12),transparent_70%)]" aria-hidden />
        <div className={container + " relative z-10 py-10 sm:py-14"}>
          <div className="mx-auto max-w-[820px] text-center mb-10">
            <BlurFade delay={0.02} inView>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8] shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                <AnimatedShinyText shimmerWidth={130}>SPINE INNOVTECH · CONNECTED BUSINESS WORK</AnimatedShinyText>
              </p>
            </BlurFade>
            <BlurFade delay={0.06} inView>
              <h1 id="company-title" className="font-display mt-4 text-[length:min(clamp(2.5rem,4.8vw,4.2rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-.015em] text-[#032D60]">
                We build governed business context for humans and AI.
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className={body + " mt-4 max-w-[680px] mx-auto"}>
                Your tools keep the record. Your people keep the authority.
                Context continues with the work. Our flagship product,
                SpineWorkspace, brings that foundation into daily work.
              </p>
            </BlurFade>
            <BlurFade delay={0.14} inView>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="https://spineworkspace.com"
                  className={button}
                >
                  Explore SpineWorkspace <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link href="/company" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF]">
                  Discover our approach
                </Link>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.16} inView className="w-full">
            <CorporateOrbitalHero />
          </BlurFade>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 border-t border-[#D6E8F8] pt-6 text-sm font-semibold text-[#006FE8]">
            <Link href="/proof" className="inline-flex min-h-11 items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Inspect the product evidence <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <Link href="/developers#integration-paths" className="inline-flex min-h-11 items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Evaluate integrations and access <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <a href="https://spineworkspace.com" className="inline-flex min-h-11 items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Go to Product Site (spineworkspace.com) <ArrowRight className="h-4 w-4" aria-hidden /></a>
          </div>
        </div>
      </section>

      <WorkspaceBenefits />

      <section id="architecture-story" className="scroll-mt-24 bg-[#F8FBFF] py-14 sm:py-18 border-b border-[#D6E8F8]">
        <div className={container}>
          <div className="mb-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              Interactive Storyboard
            </p>
            <h2 className={heading + " mt-3 max-w-[820px]"}>
              Governed Architecture: From Source Systems to Multi-Host Execution.
            </h2>
          </div>
          <CorporateArchitectureStoryboard />
        </div>
      </section>

      <section id="how-it-works" aria-labelledby="home-workflow-title" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className={container}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            How it works
          </p>
          <h2 id="home-workflow-title" className={heading + " mt-5 max-w-[820px]"}>From scattered records to a reviewed next step.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {approach.map(([title, description], index) => (
              <BlurFade key={title} delay={index * 0.06} inView className="h-full">
                <MagicCard className="h-full" innerClassName="p-6 sm:p-7">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#CCE3F5] bg-[#EAF5FC] font-mono text-xs font-bold text-[#006FE8]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-[length:var(--marketing-card-size)] font-semibold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E607A]">{description}</p>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
          <p className="mt-6 max-w-[860px] text-sm leading-7 text-[#4E607A]">
            Spine Network is designed to continue context and work checkpoints across compatible AI hosts.
            Each host independently verifies identity, tool access and authority.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-7 gap-y-1">
            <Link href="/platform/how-it-works" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">See the workflow <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <Link href="/host-connected-environment" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Explore host connections and continuity <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <section id="insights" aria-labelledby="home-insights-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-16 sm:py-20">
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                Insights &amp; Research
              </p>
              <h2 id="home-insights-title" className={heading + " mt-4 max-w-[720px]"}>
                Architectural thinking for governed operational intelligence.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline"
            >
              View all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/blog/spine-fabric-contextual-continuity-layer"
              className="group rounded-2xl border border-[#D6E8F8] bg-white p-6 shadow-2xs hover:border-[#006FE8] hover:shadow-md transition-all"
            >
              <span className="rounded-full bg-[#EAF7FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#0070DC]">
                Architecture
              </span>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug text-[#002B64] group-hover:text-[#0070DC] transition-colors">
                Spine Fabric: The Contextual Continuity Layer for Enterprise AI
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5E728B]">
                Why business context must live in a governed data fabric rather than prompt engineering or ad-hoc vector memory.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070DC]">
                Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/blog/stop-being-the-human-api"
              className="group rounded-2xl border border-[#D6E8F8] bg-white p-6 shadow-2xs hover:border-[#006FE8] hover:shadow-md transition-all"
            >
              <span className="rounded-full bg-[#EAF7FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#0070DC]">
                Operating Thesis
              </span>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug text-[#002B64] group-hover:text-[#0070DC] transition-colors">
                Stop Being the Human API: Why Tool Proliferation Fails Operators
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5E728B]">
                How much of the workday operators lose copying state between tools, and how unified context ends the coordination tax.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070DC]">
                Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/blog/why-ai-needs-your-approval"
              className="group rounded-2xl border border-[#D6E8F8] bg-white p-6 shadow-2xs hover:border-[#006FE8] hover:shadow-md transition-all"
            >
              <span className="rounded-full bg-[#E8F9F0] px-2.5 py-0.5 text-[11px] font-semibold text-[#12B76A]">
                Governance
              </span>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug text-[#002B64] group-hover:text-[#0070DC] transition-colors">
                Why Autonomous AI Still Requires Governed Human Authority
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5E728B]">
                Separating proposal preparation from consequential execution: the zero-trust governance boundary behind Hermes.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070DC]">
                Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
