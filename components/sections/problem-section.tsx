"use client";

import { Section, SectionHeader } from "@/components/marketing/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

type ProblemSectionProps = {
  eyebrow: string;
  headline: string;
  items: readonly string[];
  variant?: "dark" | "muted";
};

export function ProblemSection({ eyebrow, headline, items, variant = "muted" }: ProblemSectionProps) {
  return (
    <Section variant={variant} id="problems">
      <SectionHeader label={eyebrow} headline={headline} />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((text, index) => (
          <BlurFade key={text} delay={index * 0.08} inView className="h-full">
            <MagicCard className="h-full" innerClassName="p-6">
              <p className="text-sm leading-7 text-[#4E607A]">{text}</p>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
