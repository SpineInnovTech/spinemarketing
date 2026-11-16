"use client";

import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { Section, SectionHeader } from "@/components/marketing/section";
import { PUBLIC_SOLUTIONS } from "@/lib/solution-taxonomy";

export function TeamMarqueeSection() {
  const teams = PUBLIC_SOLUTIONS.slice(0, 12);

  return (
    <Section variant="muted" id="teams">
      <SectionHeader
        label="Teams"
        headline="Built for how your team works"
        body="Each team gets a view built for their job, on the same facts."
      />
      <Marquee pauseOnHover className="[--duration:50s] [--gap:1rem]">
        {teams.map((team) => (
          <Link
            key={team.slug}
            href={`/solutions/${team.slug}`}
            className="flex w-56 shrink-0 flex-col rounded-2xl border border-[#D6E8F8] bg-white p-5 shadow-2xs transition hover:border-[#006FE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#006FE8]">For teams</span>
            <span className="mt-2 text-[15px] font-semibold leading-snug text-[#082B5E]">{team.navLabel}</span>
            <span className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#4E607A]">{team.buyerSummary}</span>
          </Link>
        ))}
      </Marquee>
      <p className="mt-8 text-center">
        <Link href="/solutions" className="text-sm font-semibold text-[#006FE8] hover:underline">
          See all solutions
        </Link>
      </p>
    </Section>
  );
}
