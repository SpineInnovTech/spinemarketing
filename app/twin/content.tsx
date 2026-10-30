import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"
import { Section, SectionHeader } from "@/components/marketing/section"

const capabilities = [
  { title: "Investigate", body: "Find out why something happened: where it came from, what it depends on, what was decided before, and what it affects." },
  { title: "Prepare", body: "Write summaries, options, plans and suggested next steps for the goal you are working on." },
  { title: "Coordinate", body: "Hand work from one person or team to the next without losing the background." },
]

const functions = [
  { title: "Operations", body: "Prepare a handoff or an escalation, with who owns what, what it is waiting on and what was already decided." },
  { title: "Finance", body: "Check an unusual charge against the invoice, the contract and the notes behind it." },
  { title: "Product & engineering", body: "Look into what is holding up a release, and suggest options based on the customers affected and the delivery date." },
  { title: "Customer-facing teams", body: "Prepare onboarding, account reviews, expansion conversations or renewal decisions from the customer story." },
  { title: "Leadership", body: "Pull goals, warning signs, owners and open decisions into a short brief for leaders." },
  { title: "People & knowledge", body: "Find the right document or answer, from what you are allowed to see, for a colleague or team." },
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
    title: "A person or approved rule allows important actions.",
    body: [
      "A proposal stays a proposal until it is approved. For important proposals, the responsible person can see the planned action, the records it affects, the evidence behind it and anything still unclear.",
      "The action uses only the tools it is allowed to use. It counts as done only once the result is seen and checked.",
    ],
  },
  {
    number: "03",
    eyebrow: "Clear limits",
    title: "The Twin works within the authority it is given.",
    body: [
      "A person's permissions and company policy decide what they can hand over. The Twin stays within those limits as it looks into things, prepares work or uses a tool.",
      "Moving to other tools or AI models needs the same access and permission checks in the place it moves to.",
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
        badge="Spine Twin · Your AI assistant"
        headline={"AI that works with your\nbusiness context."}
        subhead="Spine Twin is the AI assistant inside SpineWorkspace. It reads the goals, records, conversations and past decisions from your tools, explains what is going on, and suggests the next step. It never acts until a person approves."
        primaryCta={{ label: "Read our responsible AI approach", href: "/responsible-ai" }}
        secondaryCta={{ label: "See how trust works", href: "/trust" }}
      />

      <Section variant="muted">
        <SectionHeader
          align="left"
          label="Understand before responding"
          headline="Start with the situation, its evidence and the goal."
          body="The Twin uses the context it is permitted to access to explain a situation, compare the facts and point out what is missing. That might be a handoff between teams, an unusual invoice, a delivery decision or a customer review."
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
          body="Spine Coworker does the legwork for Twin. It watches the emails, tickets and files you have allowed it to see, and gathers the relevant facts before you need them. Coworker only gathers. It never sends messages, changes records or makes commitments on your behalf."
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
          body="Spine Twin works within the Spine foundation and its controlled execution. Step back to how it is built, or see how the pieces fit together."
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
