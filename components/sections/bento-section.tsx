import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, type SectionTone } from "./section";

export type BentoItem = {
  icon: LucideIcon;
  title: string;
  body: string;
  size?: "large" | "small";
  href?: string;
  linkLabel?: string;
  visual?: ReactNode;
};

type BentoSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: readonly BentoItem[];
};

export function BentoSection({ id = "solution", tone = "default", eyebrow = "Solution", title, intro, items }: BentoSectionProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeader id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <BlurFade
            key={item.title}
            delay={index * 0.08}
            inView
            className={cn("h-full", item.size === "large" ? "md:col-span-2" : "md:col-span-1")}
          >
            <article className="sx-card group relative flex h-full flex-col overflow-hidden rounded-xl border p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(0,111,232,0.12)]">
              {item.visual && <div className="mb-6">{item.visual}</div>}
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006FE8]/10 text-[#006FE8]">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="sx-title mt-5 text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="sx-body mt-2 text-sm leading-relaxed">{item.body}</p>
              {item.href && (
                <Link
                  href={item.href}
                  className="sx-accent mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold hover:underline"
                >
                  {item.linkLabel ?? "Learn more"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              )}
            </article>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
