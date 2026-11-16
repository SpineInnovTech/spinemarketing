import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"

const commitments = [
  {
    number: "01",
    eyebrow: "Who can see what",
    title: "Show each person only what their job allows.",
    body: [
      "A person's role, their team, and the tools they connect decide which facts can be brought together and shown.",
      "The view for each job, and the facts the AI prepares, should follow those limits. Sharing one picture of the work does not mean everyone sees everything.",
    ],
  },
  {
    number: "02",
    eyebrow: "Who can act",
    title: "Every action needs permission.",
    body: [
      "What a tool can do is not the same as permission to use it. A person or AI may use it only for the job they are allowed to do.",
      "Preparing, reviewing, approving, and making the change are separate steps. Approval stays tied to that change. It cannot override the limits of the tool that keeps the record.",
    ],
  },
  {
    number: "03",
    eyebrow: "Evidence and where it came from",
    title: "Show why a decision was made.",
    body: [
      "People should be able to see which sources support a conclusion, where someone added an interpretation, and what is still unclear.",
      "Conflicting records, old facts, and changes in the source tools should stay visible enough to review and correct.",
    ],
  },
  {
    number: "04",
    eyebrow: "Outcome accountability",
    title: "Preserve what happened after the decision.",
    body: [
      "Work can be requested, authorized, attempted, completed or left unresolved. Those states have different meanings.",
      "The product should keep the link between the approved intent, the action tried and the evidence about its result.",
    ],
  },
]

export function TrustContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="Our design commitments"
        headline={"Trust depends on clear boundaries\nand visible evidence."}
        subhead="The facts about the work can include sensitive information, big decisions, and actions that change other tools. Our design keeps who can see what, who can act, where the facts came from, and what happened, inside the work itself."
        primaryCta={{ label: "Talk about trust", href: "/contact?topic=trust" }}
        secondaryCta={{ label: "Read our responsible AI approach", href: "/responsible-ai" }}
      />

      <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-4 md:grid-cols-2">
          {commitments.map((point) => (
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
      </section>

      <section className="bg-[#ECF3FC] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-5 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Product evaluation</p>
            <div className="mt-7 h-px w-20 bg-[#2461BC]" aria-hidden />
          </div>
          <div>
            <h2 className="text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#102747]">Assess the controls that apply to your environment.</h2>
            <p className="mt-8 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
              These principles describe our engineering approach. A product evaluation also needs evidence about the release, deployment, connected providers and applicable agreements.
            </p>
            <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
              For SpineWorkspace evaluation, discuss current controls, data handling and available documentation with the product team.
            </p>
            <a href="https://spineworkspace.com/contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
              Talk about product security <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Reporting a concern</p>
        <h2 className="mt-5 max-w-[760px] text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#0C274E]">
          Help us understand the issue.
        </h2>
        <p className="mt-7 max-w-[760px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
          For a potential security concern, use the contact form and select <strong className="font-semibold text-[#17375F]">Security report</strong>. Include a brief description and a way to reach you so we can arrange an appropriate follow-up.
        </p>
        <p className="mt-5 max-w-[760px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
          Please keep passwords, access tokens, personal records and exploit payloads out of the initial message.
        </p>
        <Link href="/contact?topic=security" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
          Report a concern <ArrowRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
        </Link>
      </section>
    </>
  )
}
