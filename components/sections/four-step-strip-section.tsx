"use client";

import Link from "next/link";
import { Database, GitMerge, UserCheck, Zap } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { useRef } from "react";

const icons = [Database, GitMerge, UserCheck, Zap];

type Step = { step: number; title: string; href?: string };

export function FourStepStripSection({ steps }: { steps: readonly Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const refs = [ref0, ref1, ref2, ref3];

  return (
    <div ref={containerRef} className="relative mx-auto mt-10 max-w-4xl">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {steps.map((item, index) => {
          const Icon = icons[index] ?? Database;
          const card = (
            <div
              ref={refs[index]}
              className="flex h-full flex-col items-center rounded-2xl border border-[#D6E8F8] bg-white/80 p-4 text-center shadow-2xs"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF5FC] text-[12px] font-bold text-[#006FE8]">
                {item.step}
              </span>
              <Icon className="mt-3 h-5 w-5 text-[#006FE8]" aria-hidden />
              <p className="mt-2 text-[13px] font-semibold leading-snug text-[#082B5E]">{item.title}</p>
            </div>
          );
          return (
            <BlurFade key={item.step} delay={index * 0.08} inView className="h-full">
              {item.href ? (
                <Link
                  href={item.href}
                  className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
                >
                  {card}
                </Link>
              ) : (
                card
              )}
            </BlurFade>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <AnimatedBeam containerRef={containerRef} fromRef={ref0} toRef={ref1} curvature={20} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={ref1} toRef={ref2} curvature={20} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={ref2} toRef={ref3} curvature={20} duration={3} />
      </div>
    </div>
  );
}
