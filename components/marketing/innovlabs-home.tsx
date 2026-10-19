import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STARTER_PRICING } from "@/lib/pricing";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { CorporateOrbitalHero } from "./corporate-orbital-hero";
import { WorkbenchHeroPreview } from "./workbench-hero-preview";
import { WorkspaceBenefits, WorkspaceSolutions } from "./workspace-benefits";
import { WorkspaceSubscriptionValue } from "./workspace-subscription-value";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";

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
                <AnimatedShinyText shimmerWidth={130}>SPINE INNOVTECH · SPINEWORKSPACE</AnimatedShinyText>
              </p>
            </BlurFade>
            <BlurFade delay={0.06} inView>
              <h1 id="company-title" className="mt-4 text-[length:min(clamp(2.5rem,4.8vw,4.2rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-.045em] text-[#032D60]">
                SpineWorkspace connects your tools, context and team.
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className={body + " mt-4 max-w-[680px] mx-auto"}>
                Bring records and evidence from your tools into editable dashboards and Canvas.
                Your AI Twin prepares the next step; your team stays in control.
              </p>
            </BlurFade>
            <BlurFade delay={0.14} inView>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="https://spineworkspace.com"
                  className={button}
                >
                  Explore SpineWorkspace Product <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link href="#workbench-views" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF]">
                  See the workspace
                </Link>
              </div>
              <Link href="/pricing" aria-label="See pricing" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#082B5E] underline decoration-[#A7C7E9] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">
                From {STARTER_PRICING.displayPrice}/{STARTER_PRICING.unit}/{STARTER_PRICING.interval} · {STARTER_PRICING.billing.toLowerCase()}
              </Link>
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

      <section id="workbench-story" className="scroll-mt-24 bg-[#F8FBFF] py-14 sm:py-18 border-b border-[#D6E8F8]">
        <div className={container}>
          <div className="mb-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              Interactive Storyboard
            </p>
            <h2 className={heading + " mt-3 max-w-[820px]"}>
              See how business context transforms into collaborative execution.
            </h2>
          </div>
          <WorkbenchHeroPreview />
        </div>
      </section>
      <WorkbenchViewExplorer initialDomain="founderops" compact />

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

      <WorkspaceSolutions />
      <WorkspaceSubscriptionValue />
    </div>
  );
}
