import Link from "next/link";
import { ArrowRight, ShieldCheck, UserCheck, Workflow } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { CorporateOrbitalHero } from "./corporate-orbital-hero";
import { CorporateArchitectureStoryboard } from "./corporate-architecture-storyboard";
import { WorkspaceBenefits } from "./workspace-benefits";
import { TestimonialsSection } from "@/components/testimonials-section";
import { INSIGHT_ARTICLES } from "@/lib/insights";

// The Acme renewal story, grouped under the existing Connect -> Prepare -> Review
// phases, as six steps. Illustrative example, not a live record.
const workflowSteps = [
  {
    phase: "Connect",
    title: "Bring the account into view",
    body: "Bring up the account, support and contract details you are allowed to see for the renewal.",
  },
  {
    phase: "Connect",
    title: "Show the evidence",
    body: "Show the source evidence behind it and flag the gaps that are still unresolved.",
  },
  {
    phase: "Prepare",
    title: "Prepare the next step",
    body: "Spine Twin, the AI that prepares the next step, writes a renewal-risk summary and a suggested action. It waits for a person.",
  },
  {
    phase: "Review",
    title: "The person approves",
    body: "The person reviews the proposal and approves the exact change to make.",
  },
  {
    phase: "Review",
    title: "The change is executed",
    body: "The approved update is made in the tool that owns the record.",
  },
  {
    phase: "Review",
    title: "The record is kept",
    body: "Show how the tool looks now, and the record kept of what was done.",
  },
] as const;

// Three operating principles.
const principles = [
  {
    icon: ShieldCheck,
    title: "Your tools keep the record.",
    body: "Your existing tools stay the place of record. SpineWorkspace reads and writes with their permission, never instead of them.",
  },
  {
    icon: UserCheck,
    title: "Your people keep the authority.",
    body: "AI prepares the work. A person approves every important action before it happens.",
  },
  {
    icon: Workflow,
    title: "Context continues with the work.",
    body: "Context stays with the work, so the next step continues from where the last one left off.",
  },
] as const;

const problems = [
  "Answers live in many tools, so the full picture is never in one place.",
  "People copy facts between systems by hand, and detail gets lost.",
  "AI can draft work, but no one can see what it used or approve it.",
] as const;

const container = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12";
const heading = "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const primaryButton = "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] transition-all hover:bg-[#0055B8] hover:shadow-[0_10px_24px_rgba(0,111,232,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const secondaryButton = "inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const phaseTint: Record<string, string> = {
  Connect: "bg-[#EAF5FC] text-[#006FE8] border-[#CCE3F5]",
  Prepare: "bg-[#F3E8FF] text-[#7C3AED] border-[#E9D5FF]",
  Review: "bg-[#E8F9F0] text-[#059669] border-[#BBF0D2]",
};

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      {/* PART 1 — HERO + CUSTOMER PROBLEM */}
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,111,232,0.12),transparent_70%)]" aria-hidden />
        <div className={container + " relative z-10 py-10 sm:py-14"}>
          <div className="mx-auto max-w-[860px] text-center mb-10">
            <BlurFade delay={0.02} inView>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3.5 py-1.5 text-[12px] font-semibold leading-snug text-[#006FE8] shadow-2xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#006FE8]" />
                <AnimatedShinyText shimmerWidth={130}>Spine InnovTech</AnimatedShinyText>
              </p>
            </BlurFade>
            <BlurFade delay={0.06} inView>
              <h1 id="company-title" className="font-display mt-4 text-[length:min(clamp(2.5rem,4.8vw,4.2rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-.015em] text-[#032D60]">
                Connecting business context for humans and AI, with people in control.
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className={body + " mt-4 max-w-[720px] mx-auto"}>
                Spine InnovTech connects your tools, people, and AI through shared business context—so teams can move from insight to action, with people in control.
              </p>
              <p className={body + " mt-3 max-w-[720px] mx-auto"}>
                Business context means the facts about the work, kept together, so people and AI are looking at the same picture.
              </p>
            </BlurFade>
            <BlurFade delay={0.14} inView>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="#workflow" className={primaryButton}>
                  See the workflow <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a href="https://spineworkspace.com" className={secondaryButton}>
                  Explore SpineWorkspace
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Customer problem in plain words */}
          <div className="mx-auto mt-10 max-w-[960px] border-t border-[#D6E8F8] pt-8">
            <p className="text-center text-[13px] font-semibold uppercase tracking-[.18em] text-[#006FE8]">What is hard today</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {problems.map((text, index) => (
                <BlurFade key={text} delay={index * 0.06} inView className="h-full">
                  <p className="h-full rounded-2xl border border-[#D6E8F8] bg-white/70 p-5 text-sm leading-7 text-[#4E607A]">{text}</p>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPINEWORKSPACE BLOCK — right after the hero, with the workbench diagram */}
      <section id="spineworkspace" aria-labelledby="home-spineworkspace-title" className="scroll-mt-24 bg-white py-14 sm:py-16 border-b border-[#D6E8F8]">
        <div className={container}>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              SpineWorkspace
            </p>
            <h2 id="home-spineworkspace-title" className={heading + " mt-4"}>Connected context. Human control. AI-ready.</h2>
            <p className={body + " mt-4"}>Your tools. Your context. Your decisions.</p>
            <div className="mt-6 flex justify-center">
              <a href="https://spineworkspace.com" className={primaryButton}>
                Explore SpineWorkspace <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
          <BlurFade delay={0.08} inView className="mt-9 w-full">
            <CorporateOrbitalHero />
          </BlurFade>
        </div>
      </section>

      {/* PART 2 — ONE WORKFLOW, SHOWN END TO END */}
      <section id="workflow" aria-labelledby="home-workflow-title" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className={container}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              One workflow, end to end
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] px-3 py-0.5 text-[11px] font-semibold text-[#7C3AED]">
              Illustrative example
            </span>
          </div>
          <h2 id="home-workflow-title" className={heading + " mt-5 max-w-[820px]"}>One workflow, shown end to end.</h2>
          <p className={body + " mt-4 max-w-[760px]"}>
            A renewal for the Acme account. Maya, a customer success lead, works with her AI Twin across Salesforce, Zendesk and Gmail. The steps group under Connect, Prepare and Review.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <BlurFade key={step.title} delay={index * 0.05} inView className="h-full">
                <div className="flex h-full gap-3 rounded-2xl border border-[#D6E8F8] bg-white p-4 shadow-2xs">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#CCE3F5] bg-[#EAF5FC] font-mono text-xs font-bold text-[#006FE8]">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${phaseTint[step.phase]}`}>{step.phase}</span>
                      <h3 className="text-sm font-semibold text-[#082B5E]">{step.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-[#4E607A]">{step.body}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* PART 3 — THREE OPERATING PRINCIPLES */}
      <section id="principles" aria-labelledby="home-principles-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-16 sm:py-20">
        <div className={container}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            How people stay in control
          </p>
          <h2 id="home-principles-title" className={heading + " mt-5 max-w-[820px]"}>Three principles the product runs on.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, body: pbody }, index) => (
              <BlurFade key={title} delay={index * 0.06} inView className="h-full">
                <MagicCard className="h-full" innerClassName="p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8] shadow-2xs">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-[length:var(--marketing-card-size)] font-semibold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E607A]">{pbody}</p>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* PART 4 — WHO IT SERVES FIRST */}
      <section id="who-it-serves" aria-labelledby="home-audience-title" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className={container}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            Who it serves first
          </p>
          <h2 id="home-audience-title" className={heading + " mt-5 max-w-[820px]"}>Built first for account and customer success teams.</h2>
          <p className={body + " mt-4 max-w-[760px]"}>
            Renewals bring the account record, support history and contract terms into one next step. The team can see the risk. A person decides what to do.
          </p>
          <p className="mt-5 text-sm leading-7 text-[#4E607A]">
            Other teams — sales, finance, operations and more —{" "}
            <a href="https://spineworkspace.com" className="font-semibold text-[#006FE8] hover:underline">see how SpineWorkspace fits their work</a>.
          </p>
        </div>
      </section>

      <TestimonialsSection heading="What the work looks like" />

      <WorkspaceBenefits />

      {/* PART 5 — CONCISE ARCHITECTURE (3-scene storyboard, plain copy) */}
      <section id="architecture-story" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-14 sm:py-18">
        <div className={container}>
          <div className="mb-8 max-w-[820px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              How it is built
            </p>
            <h2 className={heading + " mt-3"}>From your tools to work that keeps going.</h2>
            <p className={body + " mt-4"}>
              Three parts: your information brought together, people approve the AI, and work that carries on from one AI tool to the next. More detail is on the platform pages.
            </p>
          </div>
          <CorporateArchitectureStoryboard />
        </div>
      </section>

      {/* COMPANY STORY, PRODUCT CTA, INSIGHTS TEASER */}
      <section id="company-insights" aria-labelledby="home-company-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-16 sm:py-20">
        <div className={container}>
          <div className="max-w-[820px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              Spine InnovTech
            </p>
            <h2 id="home-company-title" className={heading + " mt-5"}>The company behind SpineWorkspace.</h2>
            <p className={body + " mt-4"}>
              Spine InnovTech builds SpineWorkspace. It connects your tools so people and AI can see the same facts about the work. A person stays in charge.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/company" className={primaryButton}>
                Discover our approach <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href="https://spineworkspace.com" className={secondaryButton}>
                Explore SpineWorkspace
              </a>
            </div>
          </div>

          {/* Insights teaser — points at the 3 /insights articles */}
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold tracking-[-.02em] text-[#082B5E]">From our Insights</h3>
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {INSIGHT_ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group rounded-2xl border border-[#D6E8F8] bg-white p-6 shadow-2xs hover:border-[#006FE8] hover:shadow-md transition-all"
                >
                  <span className="rounded-full bg-[#EAF7FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#0070DC]">{article.category}</span>
                  <h4 className="mt-4 text-[17px] font-semibold leading-snug text-[#002B64] group-hover:text-[#0070DC] transition-colors">
                    {article.title}
                  </h4>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070DC]">
                    Read on Insights <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
