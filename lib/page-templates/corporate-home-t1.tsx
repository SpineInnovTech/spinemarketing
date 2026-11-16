import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cable,
  Compass,
  Eye,
  Layers,
  LayoutDashboard,
  ListChecks,
  MessagesSquare,
  Plug,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CorporateOrbitalHero } from "@/components/marketing/corporate-orbital-hero";
import { CorporateArchitectureStoryboard } from "@/components/marketing/corporate-architecture-storyboard";
import { WorkspaceBenefits } from "@/components/marketing/workspace-benefits";
import { INSIGHT_ARTICLES } from "@/lib/insights";
import {
  homeBento,
  homeFaq,
  homeFeatureTabs,
  homeFounderNote,
  homeFourSteps,
  homeProblems,
} from "@/lib/plain-language/corporate-home";
import {
  BentoSolutionSection,
  FeatureTabsSection,
  FounderNoteSection,
  FourStepStripSection,
  HomeFaqSection,
  LogoStripSection,
  ProblemSection,
  TeamMarqueeSection,
} from "@/components/sections";

// Founder revision 2026-11-16: the full renewal walkthrough lives on spineworkspace.com;
// the company homepage keeps a short teaser.
const workflowTeaser = [
  {
    phase: "Connect",
    title: "Bring the account into view",
    body: "The account record, support history and contract terms, together in one place.",
  },
  {
    phase: "Prepare",
    title: "Prepare the next step",
    body: "AI drafts a summary and a suggested action, then waits for a person.",
  },
  {
    phase: "Review",
    title: "The person approves",
    body: "The approved change is made in the tool that owns the record, and a record of it is kept.",
  },
] as const;

// Founder revision 2026-11-16: what Spine InnovTech offers.
const offerings = [
  {
    icon: LayoutDashboard,
    label: "Our product",
    name: "SpineWorkspace",
    description:
      "A shared workspace where people and AI work from the same business context, and a person approves every important change.",
    cta: { label: "Explore SpineWorkspace", href: "https://spineworkspace.com" },
  },
  {
    icon: Layers,
    label: "Use it on its own",
    name: "Spine Intelligence Platform",
    description:
      "The foundation behind SpineWorkspace: sign-in and access, business context, connections to your tools, AI and approvals. Connect your own applications and AI tools to it, with or without SpineWorkspace.",
    cta: { label: "See developer details", href: "/developers" },
  },
] as const;

const services = [
  {
    icon: Plug,
    name: "Enterprise integration and technology",
    description:
      "Connect the business applications and data you already use, so information moves with the work instead of being copied by hand.",
  },
  {
    icon: Wrench,
    name: "Platform engineering and implementation",
    description:
      "Set up the Spine Intelligence Platform for your organization, connect your systems and build the applications your teams need on it.",
  },
  {
    icon: Sparkles,
    name: "AI and automation",
    description:
      "Design AI help that prepares work for people to review, with clear limits on what it can see and what needs approval.",
  },
  {
    icon: Compass,
    name: "Consulting, migration, modernization and support",
    description:
      "Plan the move from older tools, modernize how work flows between teams, and keep everything running with ongoing support.",
  },
] as const;

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

const heroExplanationCards = [
  { name: "Data", description: "Data shows what is happening.", Icon: BarChart3 },
  { name: "Context", description: "Context helps explain why.", Icon: MessagesSquare },
  { name: "Next step", description: "Together, they help you decide what to do next.", Icon: ListChecks },
  { name: "Your tools", description: "Your tools, with the conversations and history behind them.", Icon: Cable },
  { name: "Full picture", description: "People and AI see the full picture and the next step.", Icon: Eye },
  { name: "Your approval", description: "Changes to your tools happen only with your approval.", Icon: ShieldCheck },
] as const;

const audiencePoints = [
  "Renewals bring the account record, support history and contract terms together.",
  "The team can see the risk.",
  "A person decides what to do.",
] as const;

const buildPoints = [
  "Your information brought together.",
  "People approve the AI.",
  "Work carries on from one AI tool to the next.",
] as const;

const companyPoints = [
  "Spine InnovTech builds SpineWorkspace.",
  "People and AI can see the same facts about the work.",
  "A person stays in charge.",
] as const;

const heroBento = "auto-rows-auto sm:grid-cols-2 lg:grid-cols-3";
const container = "mx-auto max-w-6xl px-5 sm:px-8 lg:px-12";
const heading =
  "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const primaryButton =
  "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] transition-all hover:bg-[#0055B8] hover:shadow-[0_10px_24px_rgba(0,111,232,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const secondaryButton =
  "inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const phaseTint: Record<string, string> = {
  Connect: "bg-[#EAF5FC] text-[#006FE8] border-[#CCE3F5]",
  Prepare: "bg-[#F3E8FF] text-[#7C3AED] border-[#E9D5FF]",
  Review: "bg-[#E8F9F0] text-[#059669] border-[#BBF0D2]",
};

/** T1 — corporate homepage (Magic UI layout, path B locked hero copy). */
export function CorporateHomeT1() {
  return (
    <div className="bg-white text-[#082B5E]">
      <section
        aria-labelledby="company-title"
        className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,111,232,0.12),transparent_70%)]"
          aria-hidden
        />
        <div className={`${container} relative z-10 pb-16 pt-28 md:pt-36`}>
          <div className="mx-auto mb-6 max-w-[860px] text-center">
            <BlurFade delay={0.02} inView>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3.5 py-1.5 text-[12px] font-semibold leading-snug text-[#006FE8] shadow-2xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#006FE8]" />
                <AnimatedShinyText shimmerWidth={130}>SPINE INNOVTECH</AnimatedShinyText>
              </p>
            </BlurFade>
            <BlurFade delay={0.06} inView>
              <h1
                id="company-title"
                className="font-display mt-4 text-[clamp(1.35rem,6.2vw,2.85rem)] font-bold leading-[1.15] tracking-[-.02em] text-[#032D60]"
              >
                <span className="block">Your Business Tools</span>
                <span className="block">Your Business Context</span>
                <span className="block">Your Decisions</span>
                <span className="block">AI Acts With Your Approval</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className="mx-auto mt-4 max-w-[720px] text-[length:min(17px,var(--marketing-body-size))] font-semibold text-[#082B5E]">
                Your data and the story behind it, in one place.
              </p>
            </BlurFade>
            <BlurFade delay={0.12} inView>
              <BentoGrid className={`${heroBento} mt-8 text-left`}>
                {heroExplanationCards.map(({ name, description, Icon }) => (
                  <BentoCard key={name} name={name} description={description} Icon={Icon} />
                ))}
              </BentoGrid>
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
          <FourStepStripSection steps={homeFourSteps} />
        </div>
      </section>

      <LogoStripSection />

      <section id="spineworkspace" aria-labelledby="home-spineworkspace-title" className="scroll-mt-24 border-b border-[#D6E8F8] bg-white py-14 sm:py-16">
        <div className={container}>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              SpineWorkspace
            </p>
            <h2 id="home-spineworkspace-title" className={`${heading} mt-4`}>
              Connected context. Human control. AI-ready.
            </h2>
            <p className={`${body} mt-4`}>Your tools. Your context. Your decisions.</p>
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

      <section
        id="offerings"
        aria-labelledby="home-offerings-title"
        className="scroll-mt-24 border-b border-[#D6E8F8] bg-[#F7FBFF] py-20 md:py-24"
      >
        <div className={container}>
          <div className="max-w-[820px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              What we offer
            </p>
            <h2 id="home-offerings-title" className={`${heading} mt-5`}>
              Products and services from Spine InnovTech
            </h2>
            <p className={`${body} mt-4`}>
              SpineWorkspace is our product for everyday work. The Spine Intelligence Platform underneath it is also
              available on its own, and our teams help you connect, build and run both.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {offerings.map(({ icon: Icon, label, name, description, cta }, index) => (
              <BlurFade key={name} delay={index * 0.06} inView className="h-full">
                <MagicCard className="h-full" innerClassName="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8] shadow-2xs">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#006FE8]">{label}</span>
                  </div>
                  <h3 className="mt-5 text-[length:var(--marketing-card-size)] font-semibold leading-snug">{name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#4E607A]">{description}</p>
                  <a
                    href={cta.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline"
                  >
                    {cta.label} <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
          <h3
            id="services"
            className="mt-14 scroll-mt-24 text-[length:var(--marketing-card-size)] font-semibold tracking-[-.02em] text-[#082B5E]"
          >
            Services
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, name, description }) => (
              <div key={name} className="flex h-full flex-col rounded-2xl border border-[#D6E8F8] bg-white p-5 shadow-2xs">
                <Icon className="h-5 w-5 text-[#006FE8]" aria-hidden />
                <h4 className="mt-4 text-[15px] font-semibold leading-snug text-[#082B5E]">{name}</h4>
                <p className="mt-2 text-sm leading-6 text-[#4E607A]">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact" className={primaryButton}>
              Talk to us about a project <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <ProblemSection
        eyebrow={homeProblems.eyebrow}
        headline={homeProblems.headline}
        items={homeProblems.items}
        variant="muted"
      />

      <BentoSolutionSection
        eyebrow={homeBento.eyebrow}
        headline={homeBento.headline}
        lead={homeBento.lead}
        tiles={homeBento.tiles}
        cta={{ label: "Explore SpineWorkspace", href: "https://spineworkspace.com" }}
      />

      <section id="workflow" aria-labelledby="home-workflow-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F0F8FF] py-20 md:py-28">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                  How it works
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] px-3 py-0.5 text-[11px] font-semibold text-[#7C3AED]">
                  Illustrative example
                </span>
              </div>
              <h2 id="home-workflow-title" className={`${heading} mt-5 max-w-[820px]`}>
                One renewal, from question to approved change
              </h2>
              <p className={`${body} mt-4 max-w-[640px]`}>
                A customer success lead sees the account, support history and contract together. AI prepares the next
                step, and a person approves the change before anything is updated.
              </p>
              <div className="mt-7">
                <a href="https://spineworkspace.com/how-it-works" className={primaryButton}>
                  See the full walkthrough on SpineWorkspace <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
            <ol aria-label="The renewal in three steps" className="grid gap-4">
              {workflowTeaser.map((step, index) => (
                <li key={step.title}>
                  <BlurFade delay={index * 0.05} inView className="h-full">
                    <MagicCard className="h-full" innerClassName="flex h-full gap-3 p-4">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#CCE3F5] bg-[#EAF5FC] font-mono text-xs font-bold text-[#006FE8]">
                        {index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${phaseTint[step.phase]}`}
                          >
                            {step.phase}
                          </span>
                          <h3 className="text-sm font-semibold text-[#082B5E]">{step.title}</h3>
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-[#4E607A]">{step.body}</p>
                      </div>
                    </MagicCard>
                  </BlurFade>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="principles" aria-labelledby="home-principles-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-20 md:py-28">
        <div className={container}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            How people stay in control
          </p>
          <h2 id="home-principles-title" className={`${heading} mt-5 max-w-[820px]`}>
            Three rules the product follows
          </h2>
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

      <section id="who-it-serves" aria-labelledby="home-audience-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-20 md:py-28">
        <div className={container}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            Who it serves first
          </p>
          <h2 id="home-audience-title" className={`${heading} mt-5 max-w-[820px]`}>
            Built first for account and customer success teams.
          </h2>
          <ul className={`mt-4 max-w-[760px] list-disc space-y-2 pl-5 ${body}`}>
            {audiencePoints.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-[#4E607A]">
            Other teams — sales, finance, operations and more —{" "}
            <a href="https://spineworkspace.com" className="font-semibold text-[#006FE8] hover:underline">
              see how SpineWorkspace fits their work
            </a>
            .
          </p>
        </div>
      </section>

      <TestimonialsSection heading="What the work looks like" />

      <WorkspaceBenefits />

      <section id="architecture-story" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F0F8FF] py-20 md:py-28">
        <div className={container}>
          <div className="mb-8 max-w-[820px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              How it is built
            </p>
            <h2 className={`${heading} mt-3`}>From your tools to work that keeps going.</h2>
            <ul className={`mt-4 list-disc space-y-2 pl-5 ${body}`}>
              {buildPoints.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-[#4E607A]">
              <Link href="/platform" className="font-semibold text-[#006FE8] hover:underline">
                More detail is on the platform pages.
              </Link>
            </p>
          </div>
          <span className="sr-only">Interactive Storyboard</span>
          <CorporateArchitectureStoryboard />
        </div>
      </section>

      <FounderNoteSection {...homeFounderNote} />

      <FeatureTabsSection {...homeFeatureTabs} />

      <TeamMarqueeSection />

      <HomeFaqSection {...homeFaq} />

      <section id="company-insights" aria-labelledby="home-company-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F0F8FF] py-20 md:py-28">
        <div className={container}>
          <div className="max-w-[820px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              Spine InnovTech
            </p>
            <h2 id="home-company-title" className={`${heading} mt-5`}>
              The company behind SpineWorkspace.
            </h2>
            <ul className={`mt-4 list-disc space-y-2 pl-5 ${body}`}>
              {companyPoints.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/company" className={primaryButton}>
                Discover our approach <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href="https://spineworkspace.com" className={secondaryButton}>
                Explore SpineWorkspace
              </a>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold tracking-[-.02em] text-[#082B5E]">
                From our Insights
              </h3>
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {INSIGHT_ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group rounded-2xl border border-[#D6E8F8] bg-white p-6 shadow-2xs transition-all hover:border-[#006FE8] hover:shadow-md"
                >
                  <span className="rounded-full bg-[#EAF7FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#0070DC]">
                    {article.category}
                  </span>
                  <h4 className="mt-4 text-[17px] font-semibold leading-snug text-[#002B64] transition-colors group-hover:text-[#0070DC]">
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
