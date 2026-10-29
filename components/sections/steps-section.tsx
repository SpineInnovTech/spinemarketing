"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, type SectionTone } from "./section";

export type StepItem = {
  label?: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
};

type StepsSectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  badge?: string;
  title: string;
  intro?: string;
  steps: readonly StepItem[];
  aside?: ReactNode;
};

export function StepsSection({ id = "how-it-works", tone = "muted", eyebrow = "How it works", badge, title, intro, steps, aside }: StepsSectionProps) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeader id={`${id}-title`} eyebrow={eyebrow} badge={badge} title={title} intro={intro} align="left" />
      {aside && <div className="mt-8">{aside}</div>}
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <ol className="flex flex-col gap-3">
          {steps.map((step, index) => {
            const isActive = index === active;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "sx-card flex w-full gap-4 rounded-xl border p-5 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]",
                    isActive ? "border-[#006FE8] shadow-[0_8px_24px_rgba(0,111,232,0.14)]" : "opacity-80 hover:opacity-100",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      isActive ? "bg-[#006FE8] text-white" : "bg-[#006FE8]/10 text-[#006FE8]",
                    )}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <span className="flex flex-col">
                    {step.label && <span className="sx-accent text-xs font-semibold uppercase tracking-wide">{step.label}</span>}
                    <span className="sx-title mt-0.5 text-base font-semibold">{step.title}</span>
                    <span className="sx-body mt-1.5 text-sm leading-relaxed">{step.body}</span>
                  </span>
                </button>
                <div className="mt-3 lg:hidden">
                  <StepImage image={step.image} />
                </div>
              </li>
            );
          })}
        </ol>
        <div className="sticky top-28 hidden lg:block" aria-live="polite">
          <StepImage key={current.image.src} image={current.image} />
        </div>
      </div>
    </Section>
  );
}

function StepImage({ image }: { image: StepItem["image"] }) {
  return (
    <div className="sx-card overflow-hidden rounded-xl border p-1.5 shadow-[0_20px_50px_rgba(8,43,94,0.12)] motion-safe:animate-in motion-safe:fade-in">
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        width={1440}
        height={900}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full rounded-lg"
      />
    </div>
  );
}
