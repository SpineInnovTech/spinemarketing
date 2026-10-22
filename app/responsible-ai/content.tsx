import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"

const practices = [
  {
    number: "01",
    eyebrow: "Ground preparation in evidence",
    title: "Inspect the evidence behind a proposed next step.",
    body: [
      "An AI-generated summary or proposal should make its supporting context available for review. Source references, conflicting information and relevant uncertainty help people assess whether it is sound.",
      "Interpretation must remain distinguishable from source records and accepted business decisions.",
    ],
  },
  {
    number: "02",
    eyebrow: "Delegate within a defined scope",
    title: "Give AI a responsibility with clear limits.",
    body: [
      "A person's permissions and organizational policy determine what authority they can delegate. An AI counterpart should remain within that scope as it investigates, prepares or uses a capability.",
      "Changing tools, models or hosts requires the applicable access and authority checks in the receiving environment.",
    ],
  },
  {
    number: "03",
    eyebrow: "Make review meaningful",
    title: "Human approval needs enough context to be a decision.",
    body: [
      "For consequential proposals, the responsible person should be able to inspect the intended action, affected records, supporting evidence, expected effect and material uncertainty.",
      "People need to be able to reject, revise or approve a proposal within their authority. The resulting decision should remain connected to the work.",
    ],
  },
  {
    number: "04",
    eyebrow: "Preserve memory boundaries",
    title: "Reuse context deliberately.",
    body: [
      "Personal notes, AI working memory and shared organizational knowledge serve different purposes. Moving information between those scopes should depend on explicit permission and a governed process.",
      "A retained conclusion should remain traceable to its sources and open to correction when the evidence changes.",
    ],
  },
  {
    number: "05",
    eyebrow: "Recognize and respond to limits",
    title: "Models can be wrong. The work needs a way forward.",
    body: [
      "Incomplete evidence, ambiguous requests and conflicting sources can affect AI output. People need to be able to challenge a result, correct the context and decide what happens next.",
      "Our engineering focus is to make those limits visible, preserve the response and carry unresolved questions into subsequent work.",
    ],
  },
]

export function ResponsibleAiContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="AI within business responsibility"
        headline={"Give AI useful context.\nKeep authority explicit."}
        subhead="AI can help people investigate information, recognize patterns and prepare work. Its role also needs clear boundaries: which context it may use, what it may propose and which decisions remain with people. These responsibilities guide how we design AI collaboration at Spine InnovTech."
        primaryCta={{ label: "Explore our governance approach", href: "/trust" }}
        secondaryCta={{ label: "Read our philosophy", href: "/about" }}
      />

      <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-4 md:grid-cols-2">
          {practices.map((point) => (
            <article key={point.number} className="rounded-[24px] border border-[#D7E4F3] bg-white p-8 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
              <span className="font-mono text-xs text-[#5082C8]">{point.number}</span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">{point.eyebrow}</p>
              <h2 className="mt-3 text-[length:min(24px,var(--marketing-card-size))] font-semibold leading-[1.25] tracking-[-.04em] text-[#13365F]">{point.title}</h2>
              {point.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[15px] leading-[1.9] text-[#576C86]">{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-[26px] border border-[#CBE5FA] bg-[#ECF3FC] p-8 sm:p-10">
          <p className="max-w-[760px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            These responsibilities shape how we build AI collaboration, so people keep the authority and the work keeps its evidence.
          </p>
          <Link href="/contact?topic=trust" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
            Discuss our responsible AI approach <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
