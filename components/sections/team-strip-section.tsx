import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Section, SectionHeader, type SectionTone } from "./section";

export type TeamCard = { icon: LucideIcon; name: string; line: string; href: string };

type TeamStripSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title: string;
  intro?: string;
  teams: readonly TeamCard[];
};

export function TeamStripSection({ id = "teams", tone = "default", eyebrow = "Teams", title, intro, teams }: TeamStripSectionProps) {
  const half = Math.ceil(teams.length / 2);
  const rows = [teams.slice(0, half), teams.slice(half)];
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`} containerClassName="max-w-none px-0 sm:px-0">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div className="relative mt-12 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {rows.map((row, rowIndex) => (
          <Marquee key={rowIndex} pauseOnHover reverse={rowIndex === 1} className="[--duration:50s] [--gap:1rem]">
            {row.map(({ icon: Icon, name, line, href }) => (
              <Link
                key={name}
                href={href}
                className="sx-card group flex w-72 items-start gap-3 rounded-xl border p-4 transition-colors hover:border-[#006FE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#006FE8]/10 text-[#006FE8]">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="sx-title flex items-center gap-1 text-sm font-semibold">
                    {name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </span>
                  <span className="sx-body mt-1 block text-xs leading-relaxed">{line}</span>
                </span>
              </Link>
            ))}
          </Marquee>
        ))}
      </div>
    </Section>
  );
}
