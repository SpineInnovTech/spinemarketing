import Link from "next/link"
import { ArrowRight, Network, Waypoints } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"
import { Section, SectionHeader } from "@/components/marketing/section"

const responsibilities = [
  {
    title: "Business context",
    body: "Relate authorized records, evidence, goals, decisions and outcomes while preserving their sources and meaning.",
  },
  {
    title: "Human and AI collaboration",
    body: "Give people and AI context relevant to their responsibilities, so they can investigate and prepare work from a consistent understanding.",
  },
  {
    title: "Explicit authority",
    body: "Separate what a connected system can do from what a particular person or AI is permitted to do. Keep consequential actions tied to human decisions.",
  },
  {
    title: "Work continuity",
    body: "Carry evidence, decisions, ownership and progress forward across handoffs and compatible environments, within the receiving environment's permissions.",
  },
]

const paths = [
  {
    icon: Network,
    eyebrow: "The technical detail",
    title: "Spine Fabric",
    body: "How the foundation relates authorized records, evidence and decisions across the systems a business already uses, while source systems stay authoritative.",
    href: "/platform/spine-fabric",
    cta: "Explore Spine Fabric",
  },
  {
    icon: Waypoints,
    eyebrow: "The AI counterpart",
    title: "Spine Twin",
    body: "A context-aware AI counterpart that investigates, prepares work and proposes next steps, while consequential actions wait for a person's approval.",
    href: "/twin",
    cta: "Meet Spine Twin",
  },
]

export function SpineContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="Our technology foundation"
        headline={"A foundation for shared\nbusiness understanding."}
        subhead="Spine is the foundation Spine InnovTech builds so humans and AI can share one governed view of the business, while existing tools keep the record. This page is a short introduction; the detail lives on the pages it links to."
        primaryCta={{ label: "See the technical detail", href: "/platform/spine-fabric" }}
        secondaryCta={{ label: "Meet the AI counterpart", href: "/twin" }}
      />

      <Section variant="muted">
        <SectionHeader
          align="left"
          label="What the foundation keeps connected"
          headline="Four responsibilities business work needs to keep together."
          body="Our engineering brings these together so understanding, judgment and continuity stay connected around the systems an organization already uses."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {responsibilities.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-[#D7E4F3] bg-white p-8 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
              <h2 className="text-[length:min(22px,var(--marketing-card-size))] font-semibold leading-[1.25] tracking-[-.03em] text-[#13365F]">{item.title}</h2>
              <p className="mt-4 text-[15px] leading-[1.9] text-[#576C86]">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          align="left"
          label="One clear path"
          headline="Where to go for the detail."
          body="Spine is one foundation, not three products. These two pages explain how it works and the AI counterpart that works within it."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {paths.map(({ icon: Icon, eyebrow, title, body, href, cta }) => (
            <article key={title} className="flex flex-col rounded-[26px] border border-[#D8E4F3] bg-white p-8 transition-colors hover:border-[#A0BDEA] sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F2FF] text-[#235EAE]"><Icon className="h-6 w-6" aria-hidden /></span>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[.2em] text-[#386DA9]">{eyebrow}</p>
              <h2 className="mt-4 text-[length:min(28px,var(--marketing-heading-size))] font-semibold tracking-[-.04em] text-[#112F59]">{title}</h2>
              <p className="mt-5 flex-1 text-[16px] leading-[1.85] text-[#536A85]">{body}</p>
              <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5EA8] hover:underline">{cta} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          align="left"
          label="Keep exploring"
          headline="See the foundation across our work."
          body="The technology overview sets the whole architecture in context; the portfolio shows how the pieces fit around SpineWorkspace."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/platform" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
            Technology overview <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/portfolio" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
            See the portfolio <ArrowRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  )
}
