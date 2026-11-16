"use client";

import Link from "next/link";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/marketing/section";
import { BlurFade } from "@/components/ui/blur-fade";

type FounderNoteSectionProps = {
  quote: string;
  attribution: string;
  role: string;
  href: string;
};

export function FounderNoteSection({ quote, attribution, role, href }: FounderNoteSectionProps) {
  return (
    <Section variant="muted" id="founder-note">
      <SectionHeader label="Founder note" headline="Why we build this way" />
      <BlurFade inView>
        <figure className="mx-auto max-w-3xl rounded-2xl border border-[#D6E8F8] bg-white p-8 shadow-2xs">
          <Quote className="h-8 w-8 text-[#006FE8]/40" aria-hidden />
          <blockquote className="mt-4 text-lg leading-relaxed text-[#082B5E]">&ldquo;{quote}&rdquo;</blockquote>
          <figcaption className="mt-6 text-sm text-[#4E607A]">
            <span className="font-semibold text-[#082B5E]">{attribution}</span>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            {role}
          </figcaption>
          <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
            Read our story
          </Link>
        </figure>
      </BlurFade>
    </Section>
  );
}
