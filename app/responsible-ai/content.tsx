import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"

const practices = [
  {
    number: "01",
    eyebrow: "Ground preparation in evidence",
    title: "Inspect the evidence behind a proposed next step.",
    body: [
      "A summary or suggestion from AI should show the facts behind it. People need the sources, the conflicts, and what is still unclear.",
      "A guess must stay easy to tell apart from a source record and from a decision people have already accepted.",
    ],
  },
  {
    number: "02",
    eyebrow: "Delegate within clear limits",
    title: "Give AI a responsibility with clear limits.",
    body: [
      "A person's permissions and company rules decide what they can hand to AI. The AI should stay within those limits as it looks into things, prepares work, or uses a tool.",
      "Moving to other tools or AI models needs the same access and permission checks in the place it moves to.",
    ],
  },
  {
    number: "03",
    eyebrow: "Make review meaningful",
    title: "Human approval needs enough context to be a decision.",
    body: [
      "For an important suggestion, the person in charge should see the planned action, the records it affects, the facts behind it, the expected effect, and anything still unclear.",
      "People need to be able to reject, change, or approve a suggestion when their job allows it. The decision should stay with the work.",
    ],
  },
  {
    number: "04",
    eyebrow: "Keep memory areas separate",
    title: "Reuse context deliberately.",
    body: [
      "Personal notes, AI working memory and shared company knowledge serve different purposes. Moving information between these areas should need clear permission and a controlled process.",
      "A kept conclusion should still trace back to its sources and stay open to correction when the evidence changes.",
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
        headline={"Give AI the facts it needs.\nA person keeps the decision."}
        subhead="AI can help people look into the facts, spot patterns, and prepare work. It also needs clear limits: which facts it may use, what it may suggest, and which decisions stay with people."
        primaryCta={{ label: "Read how we think about trust", href: "/trust" }}
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
