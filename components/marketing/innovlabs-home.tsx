import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  Handshake,
  History,
  Mail,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UserRound,
  Workflow,
} from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { CorporateOrbitalHero } from "./corporate-orbital-hero";
import { CorporateArchitectureStoryboard } from "./corporate-architecture-storyboard";
import { WorkspaceBenefits } from "./workspace-benefits";
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
    body: "The AI Twin prepares a renewal-risk summary and a proposed next action.",
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

const whyItMatters = [
  {
    icon: History,
    title: "Work keeps its history.",
    body: "Decisions, evidence and next steps stay with the work, so a new colleague or a new AI session continues from where things left off.",
  },
  {
    icon: Sparkles,
    title: "AI works from the real picture.",
    body: "AI prepares work from the business information it is allowed to use, with the sources visible—not from a blank prompt.",
  },
  {
    icon: BadgeCheck,
    title: "People keep the final say.",
    body: "A person reviews and approves every important action before it happens. Responsibility stays with people.",
  },
] as const;

const companyLinks = [
  {
    icon: Building2,
    name: "Company",
    href: "/company",
    desc: "Who we are and how we work.",
  },
  {
    icon: Compass,
    name: "Our philosophy",
    href: "/about",
    desc: "The principles behind our engineering.",
  },
  {
    icon: Briefcase,
    name: "Careers",
    href: "/careers",
    desc: "Help business work retain its meaning.",
  },
  {
    icon: Handshake,
    name: "Partnerships",
    href: "/partners",
    desc: "Connect your expertise to a shared foundation for work.",
  },
  {
    icon: Mail,
    name: "Contact",
    href: "/contact",
    desc: "Start a conversation with us.",
  },
] as const;

const container = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12";
const heading = "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const primaryButton = "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] transition-all hover:bg-[#0055B8] hover:shadow-[0_10px_24px_rgba(0,111,232,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const secondaryButton = "inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-5 text-[14px] font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const eyebrow = "inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]";
const phaseTint: Record<string, string> = {
  Connect: "bg-[#EAF5FC] text-[#006FE8] border-[#CCE3F5]",
  Prepare: "bg-[#F3E8FF] text-[#7C3AED] border-[#E9D5FF]",
  Review: "bg-[#E8F9F0] text-[#059669] border-[#BBF0D2]",
};

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      {/* WHO WE ARE — company-first hero */}
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,111,232,0.12),transparent_70%)]" aria-hidden />
        <div className={container + " relative z-10 py-16 sm:py-24"}>
          <div className="mx-auto max-w-[860px] text-center">
            <BlurFade delay={0.02} inView>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3.5 py-1.5 text-[12px] font-semibold leading-snug text-[#006FE8] shadow-2xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#006FE8]" />
                <AnimatedShinyText shimmerWidth={130}>Spine InnovTech</AnimatedShinyText>
              </p>
            </BlurFade>
            <BlurFade delay={0.06} inView>
              <h1 id="company-title" className="font-display mt-4 text-[length:min(clamp(2.5rem,4.8vw,4.2rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-.015em] text-[#032D60]">
                Helping people and AI work better together.
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className={body + " mt-4 max-w-[720px] mx-auto"}>
                We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.
              </p>
            </BlurFade>
            <BlurFade delay={0.14} inView>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="https://spineworkspace.com" className={primaryButton}>
                  Explore SpineWorkspace <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <a href="#workflow" className={secondaryButton}>
                  See the workflow <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* THE PROBLEM WE ARE SOLVING */}
      <section id="problem" aria-labelledby="home-problem-title" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className={container}>
          <div className="mx-auto max-w-[860px] text-center">
            <p className={eyebrow}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              The problem we are solving
            </p>
            <h2 id="home-problem-title" className={heading + " mt-5"}>Work is spread across too many tools.</h2>
            <p className={body + " mt-4"}>
              Teams run on email, chat, documents, CRM and support systems. Each tool holds a piece of the picture. No one holds the whole.
            </p>
          </div>
          <div className="mx-auto mt-9 grid max-w-[960px] gap-4 md:grid-cols-3">
            {problems.map((text, index) => (
              <BlurFade key={text} delay={index * 0.06} inView className="h-full">
                <p className="h-full rounded-2xl border border-[#D6E8F8] bg-[#F8FBFF] p-5 text-sm leading-7 text-[#4E607A]">{text}</p>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD — SpineWorkspace, our product */}
      <section id="spineworkspace" aria-labelledby="home-spineworkspace-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-14 sm:py-16">
        <div className={container}>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              SpineWorkspace
            </p>
            <h2 id="home-spineworkspace-title" className={heading + " mt-4"}>Connected context. Human control. AI-ready.</h2>
            <p className={body + " mt-4"}>Your tools. Your context. Your decisions.</p>
            <p className={body + " mt-4"}>
              SpineWorkspace is our product. It brings the information behind your work into one shared view, so people and AI can prepare, review and complete work with the full picture—while your existing tools stay the systems of record.
            </p>
            <div className="mt-6 flex justify-center">
              <a href="https://spineworkspace.com" className={primaryButton}>
                Explore SpineWorkspace <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
          <BlurFade delay={0.08} inView className="mt-9 w-full">
            <CorporateOrbitalHero />
          </BlurFade>
        </div>
      </section>

      <WorkspaceBenefits />

      {/* WHY IT MATTERS */}
      <section id="why-it-matters" aria-labelledby="home-why-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-16 sm:py-20">
        <div className={container}>
          <p className={eyebrow + " bg-white"}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            Why it matters
          </p>
          <h2 id="home-why-title" className={heading + " mt-5 max-w-[820px]"}>Less time starting over. More time moving forward.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {whyItMatters.map(({ icon: Icon, title, body: copy }, index) => (
              <BlurFade key={title} delay={index * 0.06} inView className="h-full">
                <MagicCard className="h-full" innerClassName="p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8] shadow-2xs">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-[length:var(--marketing-card-size)] font-semibold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E607A]">{copy}</p>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH — three operating principles */}
      <section id="approach" aria-labelledby="home-approach-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-16 sm:py-20">
        <div className={container}>
          <p className={eyebrow}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            Our approach
          </p>
          <h2 id="home-approach-title" className={heading + " mt-5 max-w-[820px]"}>Three principles guide what we build.</h2>
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

      {/* ONE WORKFLOW, SHOWN END TO END */}
      <section id="workflow" aria-labelledby="home-workflow-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-16 sm:py-20">
        <div className={container}>
          <div className="flex flex-wrap items-center gap-3">
            <p className={eyebrow + " bg-white"}>
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

      {/* HOW IT IS BUILT (3-scene storyboard, plain copy) */}
      <section id="architecture-story" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-14 sm:py-18">
        <div className={container}>
          <div className="mb-8 max-w-[820px]">
            <p className={eyebrow}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              How it is built
            </p>
            <h2 className={heading + " mt-3"}>From your tools to work that keeps going.</h2>
            <p className={body + " mt-4"}>
              Three parts: your information brought together, Agentic Governance (AI prepares the work and a person approves it), and work that carries on from one AI tool to the next. More detail is on the platform pages.
            </p>
          </div>
          <CorporateArchitectureStoryboard />
        </div>
      </section>

      {/* OUR FOUNDER */}
      <section id="founder" aria-labelledby="home-founder-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-[#F8FBFF] py-16 sm:py-20">
        <div className={container}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <p className={eyebrow + " bg-white"}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                Our founder
              </p>
              <h2 id="home-founder-title" className={heading + " mt-5"}>Built from experience.</h2>
              <p className={body + " mt-4"}>
                Before founding Spine InnovTech, Nirmal worked on a major customer renewal where the information existed across many systems—but no one could see the whole picture. Connecting the pieces by hand saved the account. The experience became the company&apos;s starting point.
              </p>
              <p className={body + " mt-4"}>
                His background spans enterprise integration architecture and customer-facing work, including experience with MuleSoft and Salesforce ecosystems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/company#our-story" className={primaryButton}>
                  Read our story <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/company" className={secondaryButton}>
                  Meet the company
                </Link>
              </div>
            </div>
            <BlurFade delay={0.08} inView>
              <div className="rounded-[26px] border border-[#D6E8F8] bg-white p-8 shadow-2xs sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8]">
                  <UserRound className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-[length:min(28px,var(--marketing-card-size))] font-semibold tracking-[-.03em] text-[#052858]">Nirmal Prince J</h3>
                <p className="mt-2 text-sm font-semibold text-[#2463C2]">Founder &amp; Chief Executive Officer</p>
                <p className="mt-4 text-sm leading-7 text-[#4E607A]">
                  Nirmal leads Spine InnovTech&apos;s work on shared business context, explicit authority and work continuity—the foundation behind SpineWorkspace.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* COMPANY INFORMATION */}
      <section id="company-info" aria-labelledby="home-company-title" className="scroll-mt-24 border-t border-[#D6E8F8] bg-white py-16 sm:py-20">
        <div className={container}>
          <div className="max-w-[820px]">
            <p className={eyebrow}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              The company
            </p>
            <h2 id="home-company-title" className={heading + " mt-5"}>The company behind SpineWorkspace.</h2>
            <p className={body + " mt-4"}>
              Spine InnovTech develops technology for shared business understanding, human and AI collaboration, explicit authority and work continuity. The company develops the foundation and its engineering principles; SpineWorkspace makes that foundation usable in everyday work.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {companyLinks.map(({ icon: Icon, name, href, desc }, index) => (
              <BlurFade key={name} delay={index * 0.05} inView className="h-full">
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-[#D6E8F8] bg-white p-5 shadow-2xs transition-all hover:border-[#006FE8] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-[#082B5E] group-hover:text-[#006FE8] transition-colors">{name}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#4E607A]">{desc}</p>
                  <ArrowRight className="mt-auto pt-4 h-4 w-4 text-[#006FE8] transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </BlurFade>
            ))}
          </div>

          {/* Insights teaser — points at the 3 /insights articles */}
          <div className="mt-14">
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

      {/* CLOSING CTA */}
      <section aria-labelledby="home-cta-title" className="border-t border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] to-white py-16 sm:py-20">
        <div className={container + " text-center"}>
          <h2 id="home-cta-title" className={heading}>See what connected work looks like.</h2>
          <p className={body + " mx-auto mt-4 max-w-[640px]"}>
            SpineWorkspace is where our technology becomes everyday work. The product website has the full picture.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://spineworkspace.com" className={primaryButton}>
              Explore SpineWorkspace <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <Link href="/contact" className={secondaryButton}>
              Talk to us
            </Link>
          </div>
          <p className="mt-8 text-[13px] leading-6 text-[#596F89]">
            <BookOpen className="mr-1.5 inline h-3.5 w-3.5 align-[-2px] text-[#006FE8]" aria-hidden />
            New here? Start with <Link href="/company" className="font-semibold text-[#006FE8] hover:underline">who we are</Link> or <Link href="/platform" className="font-semibold text-[#006FE8] hover:underline">how the technology works</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
