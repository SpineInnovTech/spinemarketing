import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/marketing/section";

const arrivals = [
  {
    title: "The record",
    body: "Customers, tickets, billing, contracts, and approvals stay in the tools that already own them. SpineWorkspace reads them. It does not become a second record.",
  },
  {
    title: "The evidence",
    body: "Email, notes, files, and conversations are gathered for this person and this task. They explain the work. They do not replace the record.",
  },
  {
    title: "The draft",
    body: "What Twin suggests stays a draft until a person accepts, edits, or rejects it. A draft is not the record.",
  },
  {
    title: "The person",
    body: "Role, workspace, and permission decide what someone may see and what they may approve. Availability is not permission.",
  },
];

const loop = [
  {
    n: "01",
    title: "Connect the tools you already run.",
    body: "One connection reaches the systems, files, and conversations the business already uses. People do not move their work into a new home for the record.",
  },
  {
    n: "02",
    title: "Keep each kind of information in its place.",
    body: "The confirmed record, the evidence for this task, the draft, and the person’s permission stay distinct. Nothing is blended into one pile.",
  },
  {
    n: "03",
    title: "Show the view this role needs.",
    body: "The same work opens differently for sales, operations, and leadership. Each person sees the record, the evidence, and the decision that is waiting.",
  },
  {
    n: "04",
    title: "Prepare the next step with Twin.",
    body: "Twin investigates the situation and prepares options from permitted records, evidence, and earlier decisions. Coworker can gather authorized context proactively. Preparation does not grant authority to execute a change.",
  },
  {
    n: "05",
    title: "A person allows it, changes it, or stops it.",
    body: "Consequential work waits. An authorized person accepts, edits, or rejects the proposal.",
  },
  {
    n: "06",
    title: "The original tool is updated, then the workspace catches up.",
    body: "An accepted change is written back through the tool that owns the record. The workspace shows that result, so the next person does not rebuild the story.",
  },
];

export function PlatformHowItWorksContent() {
  return (
    <>
      <PageHero
        badge="How it works"
        tone="ice"
        headline={"The tools keep the record.\nThe workspace shows the work."}
        subhead="People and Twin work from permitted business context. Twin helps investigate and prepare; consequential actions need the appropriate authority. Source systems retain their authoritative roles."
        principle="SpineWorkspace does not replace truth. Source systems stay authoritative."
        primaryCta={{ label: "See a workflow", href: "/product#how-it-works" }}
        secondaryCta={{ label: "Book a tailored demo", href: "/contact?intent=demo" }}
      />
      <Section>
        <SectionHeader
          align="left"
          label="What comes in"
          headline="Four things arrive. They are not the same thing."
          body="A customer status, a last email, a suggested follow-up, and a person’s permission answer different questions. SpineWorkspace keeps them apart."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {arrivals.map((item) => (
            <li key={item.title} className="rounded-2xl border border-[#D9E4EF] bg-[#F3F6F9] p-6">
              <h3 className="text-[length:min(20px,var(--marketing-card-size))] font-semibold leading-[1.3] tracking-[-0.02em] text-[#032D60]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#33465B]">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section variant="muted">
        <SectionHeader
          align="left"
          label="The loop"
          headline="From the tools you have to a decision you can stand behind."
          body="The workspace is where people review the work. The tools they already run remain the record."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {loop.map((step) => (
            <li key={step.n} className="rounded-2xl border border-[#D9E4EF] bg-white p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">{step.n}</p>
              <h3 className="mt-3 text-[length:min(20px,var(--marketing-card-size))] font-semibold leading-[1.3] tracking-[-0.02em] text-[#032D60]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#33465B]">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[15px] leading-[1.6] text-[#33465B]">
          <Link href="/governance" className="font-semibold text-[#0176D3] hover:underline">
            Governance
          </Link>{" "}
          is who may decide.{" "}
          <Link href="/twin" className="font-semibold text-[#0176D3] hover:underline">
            Twin
          </Link>{" "}
          is who prepares the proposal.
        </p>
      </Section>
    </>
  );
}
