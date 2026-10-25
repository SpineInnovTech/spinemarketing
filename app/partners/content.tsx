import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"

const collaborationAreas = [
  {
    title: "Technology and AI tools",
    body: "Explore safe, governed connections between business context and the AI tools, developer apps, business software and AI models teams already use.",
  },
  {
    title: "Integration and implementation expertise",
    body: "Bring experience in the systems, operating processes and organizational boundaries that shape real deployments.",
  },
  {
    title: "Domain and workflow expertise",
    body: "Help evaluate the context and decisions needed in Account Success and Technical Account Success, our first workflow priorities.",
  },
  {
    title: "Research and engineering",
    body: "Explore questions in context quality, where information came from, continuity, delegated authority and checking outcomes.",
  },
]

export function PartnersContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="Build with Spine InnovTech"
        headline={"Connect your expertise to a shared\nfoundation for work."}
        subhead="We welcome conversations with technology companies, integration specialists, service providers and researchers exploring how business context can remain useful across systems and AI environments. Bring a concrete problem, a relevant capability or a perspective that could improve how people work."
        primaryCta={{ label: "Discuss a collaboration", href: "/contact?topic=partnership" }}
      />

      <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Areas of collaboration</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {collaborationAreas.map((area) => (
            <article key={area.title} className="rounded-[24px] border border-[#D7E4F3] bg-white p-8 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
              <h2 className="text-[length:min(24px,var(--marketing-card-size))] font-semibold tracking-[-.04em] text-[#13365F]">{area.title}</h2>
              <p className="mt-5 text-[15px] leading-[1.9] text-[#576C86]">{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#ECF3FC] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-5 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">A useful starting point</p>
            <div className="mt-7 h-px w-20 bg-[#2461BC]" aria-hidden />
          </div>
          <div>
            <h2 className="text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#102747]">Begin with the work we could improve together.</h2>
            <p className="mt-8 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
              Tell us who experiences the problem, where understanding breaks down and which systems or capabilities are involved.
            </p>
            <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
              A focused conversation gives us a basis for assessing technical fit, responsibilities and a practical next step.
            </p>
            <Link href="/contact?topic=partnership" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
              Contact Spine InnovTech <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
