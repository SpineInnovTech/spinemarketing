import Link from "next/link";
import { Quote } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Section, type SectionTone } from "./section";

type FounderNoteSectionProps = {
  id?: string;
  tone?: SectionTone;
  quote: string;
  name: string;
  role: string;
  href?: string;
  linkLabel?: string;
};

export function FounderNoteSection({ id = "founder-note", tone = "default", quote, name, role, href, linkLabel = "Read our story" }: FounderNoteSectionProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <Section id={id} tone={tone}>
      <BlurFade inView>
        <figure className="mx-auto max-w-3xl text-center">
          <Quote className="sx-accent mx-auto h-8 w-8" aria-hidden />
          <blockquote className="font-display sx-title mt-6 text-balance text-2xl font-semibold leading-snug md:text-3xl">
            {`\u201C${quote}\u201D`}
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006FE8] text-sm font-bold text-white" aria-hidden>
              {initials}
            </span>
            <span className="text-left">
              <span className="sx-title block text-sm font-semibold">{name}</span>
              <span className="sx-body block text-sm">{role}</span>
            </span>
          </figcaption>
          {href && (
            <Link href={href} className="sx-accent mt-6 inline-block text-sm font-semibold hover:underline">
              {linkLabel}
            </Link>
          )}
        </figure>
      </BlurFade>
    </Section>
  );
}
