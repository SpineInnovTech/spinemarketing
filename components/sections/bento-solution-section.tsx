"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/marketing/section";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";

type Tile = {
  title: string;
  description: string;
  href: string;
  large?: boolean;
};

type BentoSolutionSectionProps = {
  eyebrow: string;
  headline: string;
  lead?: string;
  tiles: readonly Tile[];
  cta?: { label: string; href: string };
};

export function BentoSolutionSection({ eyebrow, headline, lead, tiles, cta }: BentoSolutionSectionProps) {
  return (
    <Section id="solution">
      <SectionHeader label={eyebrow} headline={headline} body={lead} />
      <BentoGrid className="lg:grid-cols-2">
        {tiles.map((tile, index) => (
          <BlurFade
            key={tile.title}
            delay={index * 0.08}
            inView
            className={tile.large ? "lg:min-h-[16rem]" : ""}
          >
            <BentoCard
              name={tile.title}
              description={tile.description}
              href={tile.href}
              cta="Learn more"
              className="h-full"
              Icon={ArrowRight}
            />
          </BlurFade>
        ))}
      </BentoGrid>
      {cta && (
        <div className="mt-10 flex justify-center">
          <a
            href={cta.href}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
          >
            {cta.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </Section>
  );
}
