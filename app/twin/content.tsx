import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"
import { Section, SectionHeader } from "@/components/marketing/section"

const capabilities = [
  { title: "Investigate", body: "Relate a signal to its sources, dependencies, earlier decisions and business impact." },
  { title: "Prepare", body: "Assemble summaries, options, plans and proposed next steps around the current goal." },
  { title: "Coordinate", body: "Help people move work between responsibilities and approved capabilities with its context intact." },
]

const functions = [
  { title: "Operations", body: "Prepare a handoff or escalation with its dependencies, owners and decision history." },
  { title: "Finance", body: "Compare an exception with the invoice, contractual commitments and supporting evidence." },
  { title: "Product & engineering", body: "Investigate a release blocker and prepare options around its customer impact and delivery goal." },
  { title: "Customer-facing teams", body: "Prepare onboarding, account reviews, expansion conversations or renewal decisions from the customer story." },
  { title: "Leadership", body: "Bring goals, signals, responsibilities and unresolved decisions into an executive brief." },
  { title: "People & knowledge", body: "Find permitted knowledge and prepare a context-rich answer for an employee or team." },
]

const boundaries = [
  {
    number: "01",
    eyebrow: "A proposal stays a proposal",
    title: "Preparation is distinct from action.",
    body: [
      "The Twin uses the context it is permitted to access to explain a situation, compare evidence and identify what is missing.",
      "Gathering context and drafting a next step is distinct from independently sending messages, changing business records or committing the organization.",
    ],
  },
  {
    number: "02",
    eyebrow: "Human approval",
    title: "A person or approved policy authorizes consequential actions.",
    body: [
      "A proposal remains a proposal until authorized. For consequential proposals, the responsible person can inspect the intended action, affected records, supporting evidence and material uncertainty.",
      "Execution uses governed capabilities; completion depends on observed and reconciled results.",
    ],
  },
  {
    number: "03",
    eyebrow: "Defined scope",
    title: "The Twin works within delegated authority.",
    body: [
      "A person's permissions and organizational policy determine what authority they can delegate. The Twin stays within that scope as it investigates, prepares or uses a capability.",
      "Changing tools, models or hosts requires the applicable access and authority checks in the receiving environment.",
    ],
  },
  {
    number: "04",
    eyebrow: "Continuity",
    title: "Business context continues as models and tools evolve.",
    body: [
      "The relevant history, evidence and responsibility belong to the work.",
      "Durable business understanding should carry across providers and sessions rather than depend on a single chat history.",
    ],
  },
]

export function TwinContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="Spine Twin · Context-aware AI"
        headline={"AI that works with your\nbusiness context."}
        subhead="Spine Twin brings objectives, responsibilities, records, signals, decisions and evidence into the work. It helps people investigate situations, prepare options and coordinate the next step within the authority they have."
        primaryCta={{ label: "Read our responsible AI approach", href: "/responsible-ai" }}
        secondaryCta={{ label: "See trust & governance", href: "/trust" }}
      />

      <Section variant="muted">
        <SectionHeader
          align="left"
          label="Understand before responding"
          headline="Start with the situation, its evidence and the goal."
          body="The Twin uses the context it is permitted to access to explain a situation, compare evidence and identify what is missing. The work can involve an operational handoff, a financial exception, a delivery decision or a customer review."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#D6E8F8] bg-white p-7">
              <h2 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{item.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="coworker">
        <SectionHeader
          align="left"
          label="Spine Coworker"
          headline="Relevant context can be ready before the conversation starts."
          body="Spine Coworker represents the context-gathering aspect of the experience: watching authorized signals, assembling relevant evidence and preparing useful context. Gathering context is distinct from independently sending messages, changing business records or committing the organization."
        />
        <SectionHeader
          align="left"
          label="Across business functions"
          headline="Support the work across business functions."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {functions.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#D6E8F8] bg-[#F0F8FF] p-7">
              <h2 className="text-[length:min(1.1rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{item.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          align="left"
          label="Human and policy boundaries"
          headline="Keep authority explicit at every step."
          body="The Twin prepares work; people decide. These boundaries hold as the work moves between responsibilities and environments."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {boundaries.map((point) => (
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
      </Section>

      <Section variant="muted">
        <SectionHeader
          align="left"
          label="Keep exploring"
          headline="See the Twin within the whole foundation."
          body="Spine Twin works within the Spine foundation and its controlled execution. Step back to the architecture or see how the pieces fit together."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/spine" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
            The Spine foundation <ArrowRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </Link>
          <Link href="/platform/spine-fabric" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
            Spine Fabric <ArrowRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
          </Link>
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
