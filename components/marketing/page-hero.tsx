"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import type { PageHeroCopy } from "@/lib/site-copy";
import type { ReactNode } from "react";

type PageHeroProps = PageHeroCopy & {
  art?: ReactNode;
  work?: ReactNode;
  principle?: string;
  tone?: "default" | "ice";
};

/** Shared glass frame for marketing hero art. Buttons stay solid and are not included. */
export const heroGlassClass =
  "hero-glass relative overflow-hidden min-w-0 max-w-full rounded-2xl border border-[#CBE5FA] bg-white shadow-[0_20px_60px_-15px_rgba(0,111,232,0.12)]";

function HeroBackdrop({ ice }: { ice?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={`absolute inset-0 ${
          ice
            ? "bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(0,111,232,0.16),transparent_72%)]"
            : "bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,111,232,0.12),transparent_70%)]"
        }`}
      />
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1.1}
        className="fill-[#006FE8]/15 [mask-image:radial-gradient(640px_circle_at_70%_42%,white,transparent)]"
      />
    </div>
  );
}

function DefaultHeroArtCard({
  badge,
  headline,
  principle,
}: {
  badge?: string;
  headline: string;
  principle?: string;
}) {
  const surfaceLabel = badge?.trim() || "SpineWorkspace Surface";
  const headlineLine = headline.split("\n")[0]?.trim() || headline;

  return (
    <div className="rounded-xl border border-[#D9E4EF] bg-[#F8FBFF] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-[#D9E4EF] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#93C5FD]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#006FE8]" aria-hidden />
          <span className="ml-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8]">
            {surfaceLabel}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CBE5FA] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#032D60]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" aria-hidden />
          Governed workspace view
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-[#D9E4EF] bg-white p-4 shadow-2xs">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#526479]">
          Active workspace projection
        </p>
        <p className="mt-1.5 line-clamp-2 text-[16px] font-semibold leading-snug text-[#032D60]">
          {headlineLine}
        </p>
        {principle ? (
          <p className="mt-2 text-[13px] leading-relaxed text-[#3A506B]">
            {principle}
          </p>
        ) : null}
      </div>

      <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
        <div className="rounded-xl border border-[#D9E4EF] bg-white p-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#006FE8]">
            <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Context
          </div>
          <p className="mt-1 text-[12.5px] font-semibold text-[#032D60]">
            Source-linked records
          </p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-[#526479]">
            Assembled with provenance from authorized tools.
          </p>
        </div>

        <div className="rounded-xl border border-[#D9E4EF] bg-white p-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#006FE8]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Prepared Step
          </div>
          <p className="mt-1 text-[12.5px] font-semibold text-[#032D60]">
            Scoped option ready
          </p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-[#526479]">
            Evidence-backed next step prepared for inspection.
          </p>
        </div>

        <div className="rounded-xl border border-[#CBE5FA] bg-[#EAF5FC] p-3">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#006FE8]">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Authority
          </div>
          <p className="mt-1 text-[12.5px] font-semibold text-[#032D60]">
            Human review gate
          </p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-[#33465B]">
            Consequential actions wait for explicit approval.
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#D9E4EF] bg-white px-3.5 py-2 text-[12px] text-[#526479]">
        <span className="inline-flex items-center gap-1.5 font-medium text-[#032D60]">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#006FE8]" aria-hidden />
          Spine InnovTech · SpineWorkspace architecture
        </span>
        <span>Illustrative interface · source systems stay authoritative</span>
      </div>
    </div>
  );
}

export function PageHero({
  badge,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  art,
  work,
  principle,
  tone = "default",
}: PageHeroProps) {
  const ice = tone === "ice";
  const resolvedArt = art ?? (
    <DefaultHeroArtCard badge={badge} headline={headline} principle={principle} />
  );

  return (
    <section className="relative flex min-h-[560px] flex-col justify-center overflow-x-clip border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] via-[#F4FAFF] to-white pt-[104px] pb-14 sm:pb-16 lg:min-h-[600px] lg:pt-[120px] lg:pb-20">
      <HeroBackdrop ice={ice} />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center lg:gap-12">
          <div className="min-w-0 text-left">
            {badge ? (
              <BlurFade delay={0.02} inView>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8] shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
                  <AnimatedShinyText shimmerWidth={120}>{badge}</AnimatedShinyText>
                </p>
              </BlurFade>
            ) : null}

            <BlurFade delay={0.06} inView>
              <h1 className="max-w-full whitespace-pre-line text-balance text-[#032D60] text-[length:min(clamp(2.25rem,4.4vw,3.5rem),var(--marketing-title-size))] font-bold leading-[1.08] tracking-[-0.035em]">
                {headline}
              </h1>
            </BlurFade>

            {subhead && (
              <BlurFade delay={0.1} inView>
                <p className="mt-5 max-w-xl text-[16px] sm:text-[length:min(17px,var(--marketing-body-size))] leading-[1.68] text-[#3A506B]">
                  {subhead}
                </p>
              </BlurFade>
            )}

            {principle && (
              <BlurFade delay={0.14} inView>
                <p className="mt-5 flex items-center gap-3 text-[13px] leading-snug text-[#526479]">
                  <span className="h-px w-8 shrink-0 bg-[#006FE8]/40" aria-hidden />
                  <span className="font-medium">{principle}</span>
                </p>
              </BlurFade>
            )}

            {(primaryCta || secondaryCta) && (
              <BlurFade delay={0.18} inView>
                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                  {primaryCta && (
                    <Button
                      size="lg"
                      className="h-11 rounded-xl bg-gradient-to-b from-[#006FE8] to-[#0055B8] px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_-3px_rgba(0,111,232,0.35)] hover:from-[#0062CC] hover:to-[#00489E] hover:shadow-[0_10px_24px_-4px_rgba(0,111,232,0.45)] transition-all"
                      asChild
                    >
                      {primaryCta.href.startsWith("http") ? (
                        <a href={primaryCta.href}>
                          {primaryCta.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <Link href={primaryCta.href}>
                          {primaryCta.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-11 rounded-xl border border-[#C5D8EC] bg-white px-6 text-[14px] font-semibold text-[#032D60] shadow-2xs hover:border-[#006FE8] hover:bg-[#F3F8FE] transition-all"
                      asChild
                    >
                      {secondaryCta.href.startsWith("http") ? (
                        <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                          {secondaryCta.label}
                        </a>
                      ) : (
                        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                      )}
                    </Button>
                  )}
                </div>
              </BlurFade>
            )}
          </div>

          <BlurFade delay={0.12} inView className="relative min-w-0 max-w-full">
            <div className={`relative p-4 sm:p-5 ${heroGlassClass}`}>
              <BorderBeam size={240} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />
              {resolvedArt}
            </div>
          </BlurFade>
        </div>
        {work ? <div className="relative z-10 mt-8 lg:-mt-12">{work}</div> : null}
      </div>
    </section>
  );
}
