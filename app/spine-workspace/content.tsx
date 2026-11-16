import Link from "next/link"
import { ArrowRight, ArrowUpRight, Boxes, LayoutGrid, Sparkles, ShieldCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/page-hero"

const foundationPillars = [
  {
    icon: Boxes,
    title: "Fabric",
    body: "Spine Fabric is the shared view of records from the tools you already use. It brings together the records, evidence, goals, decisions and results you are allowed to see. Your CRM, support, finance, contract and document systems keep their records.",
  },
  {
    icon: LayoutGrid,
    title: "Workbench",
    body: "The Workbench is the screen where a person does the work. Each person sees the view that fits their job.",
  },
  {
    icon: Sparkles,
    title: "Twin",
    body: "Spine Twin is the AI that prepares the next step from those facts, then waits for a person.",
  },
  {
    icon: ShieldCheck,
    title: "Approved action",
    body: "Humans decide and approve. The product carries out the approved action and checks the result.",
  },
]

const initialFocus = [
  {
    title: "Account Success",
    body: "Our initial focus includes the people responsible for account goals, stakeholder relationships, customer commitments and continuity across teams.",
  },
  {
    title: "Technical Account Success",
    body: "We also focus on work that connects incidents, integrations, dependencies and engineering follow-through to customer objectives.",
  },
]

export function SpineWorkspaceOverviewContent() {
  return (
    <>
      <PageHero
        tone="ice"
        badge="A product by Spine InnovTech"
        headline="SpineWorkspace"
        subhead="Connected context. Human control. AI-ready. SpineWorkspace is the workspace where people and AI share one view of the business, while your existing tools keep the record."
        principle="Your tools. Your context. Your decisions."
        primaryCta={{ label: "Explore SpineWorkspace", href: "https://spineworkspace.com" }}
        secondaryCta={{ label: "Understand our technology approach", href: "/platform" }}
      />

      <section className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">The foundation in daily work</p>
        <h2 className="mt-5 max-w-[780px] text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#0C274E]">
          Shared facts. Human decisions. Controlled execution.
        </h2>
        <div className="mt-8 grid max-w-[900px] gap-5">
          <p className="text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            Spine Fabric is the shared view of records from the tools you already use. It brings together the records, evidence, goals, decisions and results you are allowed to see. Your CRM, support, finance, contract and document systems keep their records.
          </p>
          <p className="text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            The Workbench is the screen where a person does the work. Each person sees the view that fits their job. Spine Twin looks into the facts and prepares the next step. People decide and approve. The product carries out the approved action and checks the result.
          </p>
          <p className="text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            Context and decisions carry forward so the story does not have to be rebuilt on every handoff or tool switch.
          </p>
          <p className="text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.9] text-[#17375F]">
            One shared view means the same facts, limited to each person&rsquo;s job and what they are allowed to see.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {foundationPillars.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-[24px] border border-[#D7E4F3] bg-white p-7 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
              <Icon className="h-6 w-6 text-[#006FE8]" aria-hidden />
              <h3 className="mt-5 text-[length:min(22px,var(--marketing-card-size))] font-semibold tracking-[-.04em] text-[#13365F]">{title}</h3>
              <p className="mt-3 text-[15px] leading-[1.9] text-[#576C86]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#ECF3FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Where we begin</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {initialFocus.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-[#D7E4F3] bg-white p-8 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
                <h3 className="text-[length:min(24px,var(--marketing-card-size))] font-semibold tracking-[-.04em] text-[#13365F]">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-[#576C86]">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-[780px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            The product team can discuss the current scope and how to evaluate these workflows in your environment.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Continuity beyond a single session</p>
          <div className="mt-7 h-px w-20 bg-[#2461BC]" aria-hidden />
        </div>
        <div>
          <h2 className="text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#102747]">Keep the history with the work.</h2>
          <p className="mt-8 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            An account review, technical investigation or handoff should retain its evidence, decisions and open questions.
          </p>
          <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            Our approach to continuity extends that principle to other compatible places through permitted context and supported connections. Each place must still set up the access and permission the work needs.
          </p>
        </div>
      </section>

      <section className="border-t border-[#D6E8F8] bg-white">
        <div className="mx-auto max-w-[1220px] px-5 py-24 sm:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Continue on the product website</p>
          <h2 className="mt-5 max-w-[760px] text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#0C274E]">
            See how SpineWorkspace fits your work.
          </h2>
          <p className="mt-7 max-w-[760px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.9] text-[#536883]">
            Visit the product website for workflow examples, platform details, supported connections and product evaluation. Current availability and commercial discussions also belong there.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://spineworkspace.com/how-it-works" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
              See how SpineWorkspace works <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="https://spineworkspace.com/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
              Discuss a product evaluation <ArrowUpRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
            </a>
          </div>
          <Link href="/platform" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2461BC] transition hover:text-[#0C274E]">
            Understand our technology approach <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
