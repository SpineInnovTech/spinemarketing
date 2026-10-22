import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"

const qualities = [
  {
    title: "Clear thinking",
    body: "Explain a problem, its constraints and the tradeoffs behind a decision.",
  },
  {
    title: "Ownership",
    body: "Follow work through to its outcome and make unresolved issues visible.",
  },
  {
    title: "Care for the person using the system",
    body: "Treat clarity, appropriate access and usable review as part of engineering quality.",
  },
  {
    title: "Respect for evidence",
    body: "Distinguish what has been demonstrated from what remains a hypothesis.",
  },
]

export function CareersContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="People who build"
        headline="Help business work retain its meaning."
        subhead="We are interested in people who care about difficult systems problems and the everyday responsibilities those systems support. Our work brings together integration architecture, business context, AI collaboration, governance and product engineering."
        primaryCta={{ label: "Introduce yourself", href: "/contact?topic=careers" }}
        secondaryCta={{ label: "Read how we think", href: "/about" }}
      />

      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">The questions we work on</p>
          <div className="mt-7 h-px w-20 bg-[#2461BC]" aria-hidden />
        </div>
        <div>
          <p className="text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            How do records become useful context? How does a person understand why an AI proposed an action? How does authority remain clear as work moves between environments? How can the next person continue without reconstructing every decision?
          </p>
          <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            These questions reward careful engineering, curiosity about real work and a willingness to test assumptions against evidence.
          </p>
        </div>
      </section>

      <section className="bg-[#ECF3FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">The qualities we value</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {qualities.map((quality) => (
              <article key={quality.title} className="rounded-[24px] border border-[#D7E4F3] bg-white p-7 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
                <h2 className="text-[length:min(20px,var(--marketing-card-size))] font-semibold leading-[1.3] tracking-[-.04em] text-[#13365F]">{quality.title}</h2>
                <p className="mt-4 text-[15px] leading-[1.9] text-[#576C86]">{quality.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Start a conversation</p>
        <h2 className="mt-5 max-w-[760px] text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#0C274E]">
          Show us the work you care about.
        </h2>
        <p className="mt-7 max-w-[760px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
          Tell us about a system you built, a problem you investigated or an experience that shaped how you think about business software.
        </p>
        <p className="mt-5 max-w-[760px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
          Share links to relevant work and explain the contribution you would like to make. We can then discuss whether there is an appropriate opportunity to work together.
        </p>
        <Link href="/contact?topic=careers" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
          Introduce yourself <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>
    </>
  )
}
