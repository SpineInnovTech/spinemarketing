import Link from "next/link"
import { ArrowRight, Boxes, Network, Waypoints } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/section"

const details = [
  {
    icon: Boxes,
    eyebrow: "The foundation",
    title: "Spine",
    body: "A short introduction to the foundation Spine InnovTech builds for shared business understanding.",
    href: "/spine",
    cta: "Read the introduction",
  },
  {
    icon: Network,
    eyebrow: "The technical detail",
    title: "Spine Fabric",
    body: "How the foundation connects the records, evidence and decisions you are allowed to use, while your existing tools keep the record.",
    href: "/platform/spine-fabric",
    cta: "Explore Spine Fabric",
  },
  {
    icon: Waypoints,
    eyebrow: "The AI assistant",
    title: "Spine Twin",
    body: "The AI assistant that reads the facts from your tools, prepares work and suggests next steps. Important actions wait for a person's approval.",
    href: "/twin",
    cta: "Meet Spine Twin",
  },
]

export function TechnologyDetailLinks() {
  return (
    <Section variant="muted">
      <SectionHeader
        align="left"
        label="Explore the technology in detail"
        headline="Three pages, one connected foundation."
        body="Start with the introduction, read the technical detail, or meet the AI assistant. Each explains a different part of the same foundation."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {details.map(({ icon: Icon, eyebrow, title, body, href, cta }) => (
          <article key={title} className="flex flex-col rounded-[26px] border border-[#D8E4F3] bg-white p-8 transition-colors hover:border-[#A0BDEA]">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F2FF] text-[#235EAE]"><Icon className="h-6 w-6" aria-hidden /></span>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[.2em] text-[#386DA9]">{eyebrow}</p>
            <h2 className="mt-4 text-[length:min(26px,var(--marketing-heading-size))] font-semibold tracking-[-.04em] text-[#112F59]">{title}</h2>
            <p className="mt-4 flex-1 text-[15px] leading-[1.85] text-[#536A85]">{body}</p>
            <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5EA8] hover:underline">{cta} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
