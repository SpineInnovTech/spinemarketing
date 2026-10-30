import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck, Waypoints } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";

const principles = [
  {
    number: "01",
    title: "The tools you already use keep the record.",
    body: "Keep track of where each fact came from, and which tool owns the real record. A guess, a suggested change, and an accepted fact must stay easy to tell apart.",
  },
  {
    number: "02",
    title: "Keep access and action separate.",
    body: "Reading a record, interpreting it, preparing a proposal and making a change are different jobs. Each needs the right permission for that step.",
  },
  {
    number: "03",
    title: "Match context to responsibility.",
    body: "People and AI should get the context that fits the work they are allowed to do. Everyone can share the same understanding while still keeping clear limits between people, teams and companies.",
  },
];

export function AboutContent() {
  return (
    <>
      <PageHero
        badge="How we think and build / Spine InnovTech"
        headline="AI needs the facts. Action needs a person's approval."
        subhead="People still have to understand the situation, make a sound decision, and stay accountable for what follows. We build technology to help with that as information, tools, and AI spread across more places."
        primaryCta={{ label: "Explore the technology", href: "/platform" }}
        secondaryCta={{ label: "Meet the company", href: "/company" }}
      />

      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-24 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Build around the work</p>
          <div className="mt-7 h-px w-20 bg-[#2461BC]" aria-hidden />
        </div>
        <div>
          <h2 className="text-[length:min(clamp(2.3rem,4.5vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#102747]">Start with the question someone is responsible for answering.</h2>
          <p className="mt-8 text-[length:min(17px,var(--marketing-body-size))] leading-[1.95] text-[#536883]">
            An account owner needs to know which commitments are at risk. A technical account lead needs to understand how an incident affects a customer's objectives. A manager needs to know whether the agreed action actually happened.
          </p>
          <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] leading-[1.95] text-[#536883]">
            These questions give the work a purpose. They decide which records should be connected, which evidence matters and whose approval is needed. This is not a story about replacing the tools organizations already trust — it is about connecting business context so a person or an AI assistant can see what matters without losing the limits that protect the business.
          </p>
          <p className="mt-5 text-[length:min(17px,var(--marketing-body-size))] font-medium leading-[1.95] text-[#17375F]">
            Our direction is simple: a shared understanding of the business, useful teamwork between people and AI, and a clear, approved path from intention to a checked result.
          </p>
        </div>
      </section>

      <section className="bg-[#ECF3FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">Our principles</p>
          <h2 className="mt-5 max-w-[780px] text-[length:min(clamp(2.5rem,4.7vw,4.6rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.055em] text-[#0C274E]">Intelligence requires more than access to data.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((point) => (
              <article key={point.number} className="rounded-[24px] border border-[#D7E4F3] bg-white p-8 shadow-[0_20px_45px_-40px_rgba(10,38,87,.4)]">
                <span className="font-mono text-xs text-[#5082C8]">{point.number}</span>
                <h3 className="mt-12 text-[length:min(24px,var(--marketing-card-size))] font-semibold tracking-[-.04em] text-[#13365F]">{point.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-[#576C86]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.21em] text-[#2461BC]">From philosophy to product</p>
          <h2 className="mt-6 text-[length:min(clamp(2.4rem,4.4vw,4.4rem),var(--marketing-heading-size))] font-semibold leading-[1.1] tracking-[-.055em] text-[#0C274E]">SpineWorkspace puts the principle to work.</h2>
          <p className="mt-7 text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#536883]">One workspace where people and AI see the business and share the work. Spine Fabric is the shared view of records from the tools you already use. The Workbench is the screen where a person does the work. Spine Twin is the AI that prepares the next step and waits. A person approves the action.</p>
          <a href="/product" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#102F5B] px-6 text-sm font-semibold text-white transition hover:bg-[#2759A0]">
            Explore SpineWorkspace <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="grid gap-4 rounded-[26px] bg-[#09244D] p-6 text-white sm:p-9">
          {[
            { icon: GitBranch, title: "Context", body: "Relate goals, customers, signals, work and evidence." },
            { icon: Waypoints, title: "Collaboration", body: "Share the right understanding with people and AI." },
            { icon: ShieldCheck, title: "Approval", body: "Move forward only after a person approves, then check the result." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-[#A3C7FF]" aria-hidden />
              <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-[#C5D5EC]">{body}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
