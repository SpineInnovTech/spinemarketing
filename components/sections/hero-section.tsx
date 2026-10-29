import type { ReactNode } from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionLink, type SectionAction } from "./section-link";

type HeroSectionProps = {
  id?: string;
  chip?: string;
  title: ReactNode;
  lead: ReactNode;
  primary?: SectionAction;
  secondary?: SectionAction;
  note?: string;
  children?: ReactNode;
};

export function HeroSection({ id = "hero-title", chip, title, lead, primary, secondary, note, children }: HeroSectionProps) {
  return (
    <section aria-labelledby={id} className="sx-surface relative overflow-hidden pb-16 pt-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,111,232,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {chip && (
            <BlurFade delay={0.02} inView>
              <p className="sx-card sx-accent inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" aria-hidden />
                <AnimatedShinyText shimmerWidth={120}>{chip}</AnimatedShinyText>
              </p>
            </BlurFade>
          )}
          <BlurFade delay={0.08} inView>
            <h1
              id={id}
              className="font-display sx-title mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            >
              {title}
            </h1>
          </BlurFade>
          <BlurFade delay={0.16} inView>
            <p className="sx-body mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-lg">{lead}</p>
          </BlurFade>
          {(primary || secondary) && (
            <BlurFade delay={0.24} inView>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                {primary && <SectionLink action={primary} />}
                {secondary && <SectionLink action={secondary} variant="outline" />}
              </div>
            </BlurFade>
          )}
          {note && <p className="sx-body mt-4 text-sm">{note}</p>}
        </div>
        {children && (
          <BlurFade delay={0.32} inView className="mt-14">
            {children}
          </BlurFade>
        )}
      </div>
    </section>
  );
}
