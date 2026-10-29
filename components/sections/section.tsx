import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "default" | "muted";

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  labelledBy?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({ id, tone = "default", labelledBy, className, containerClassName, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 py-20 md:py-28", tone === "muted" ? "sx-muted" : "sx-surface", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-5 sm:px-8", containerClassName)}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  badge?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({ id, eyebrow, title, intro, badge, align = "center", className }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {(eyebrow || badge) && (
        <div className={cn("flex flex-wrap items-center gap-2", centered && "justify-center")}>
          {eyebrow && <p className="sx-accent text-sm font-semibold">{eyebrow}</p>}
          {badge && (
            <span className="sx-card rounded-full border px-2.5 py-0.5 text-xs font-medium sx-body">{badge}</span>
          )}
        </div>
      )}
      <h2
        id={id}
        className="font-display sx-title mt-3 text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      {intro && <p className="sx-body mt-4 text-pretty text-base leading-relaxed md:text-lg">{intro}</p>}
    </div>
  );
}
