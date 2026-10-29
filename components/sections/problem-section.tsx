import type { LucideIcon } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Section, SectionHeader, type SectionTone } from "./section";

export type ProblemItem = { icon: LucideIcon; title: string; body: string };

type ProblemSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: readonly ProblemItem[];
};

export function ProblemSection({ id = "problem", tone = "muted", eyebrow = "Problem", title, intro, items }: ProblemSectionProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title: itemTitle, body }, index) => (
          <BlurFade key={itemTitle} delay={index * 0.08} inView className="h-full">
            <div className="sx-card flex h-full flex-col rounded-xl border p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006FE8]/10 text-[#006FE8]">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="sx-title mt-5 text-lg font-semibold leading-snug">{itemTitle}</h3>
              <p className="sx-body mt-2 text-sm leading-relaxed">{body}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
