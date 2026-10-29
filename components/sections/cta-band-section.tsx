import { BlurFade } from "@/components/ui/blur-fade";
import { SectionLink, type SectionAction } from "./section-link";

type CtaBandSectionProps = {
  id?: string;
  title: string;
  body?: string;
  primary: SectionAction;
  secondary?: SectionAction;
};

export function CtaBandSection({ id = "cta", title, body, primary, secondary }: CtaBandSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="sx-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <BlurFade inView>
          <div className="sx-tint relative overflow-hidden rounded-2xl px-6 py-14 text-center md:px-12 md:py-20">
            <h2 id={`${id}-title`} className="font-display sx-title mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {title}
            </h2>
            {body && <p className="sx-body mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed">{body}</p>}
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <SectionLink action={primary} />
              {secondary && <SectionLink action={secondary} variant="outline" />}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
