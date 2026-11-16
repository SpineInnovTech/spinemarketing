"use client";

import { BlurFade } from "@/components/ui/blur-fade";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "muted";
};

export function Section({ children, className = "", id, variant = "dark" }: SectionProps) {
  const bg = variant === "muted" ? "bg-[#F0F8FF]" : "bg-white";

  return (
    <section
      id={id}
      className={`relative -mt-px overflow-hidden border-t border-[#D6E8F8] py-20 md:py-28 ${bg} ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  headline,
  body,
  align = "center",
}: {
  label?: string;
  headline: string;
  body?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <BlurFade inView className={`mb-14 ${alignClass}`}>
      {label && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#CCE3F5] bg-[#EAF5FC] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#006FE8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
          {label}
        </div>
      )}
      <h2 className="text-[length:min(28px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(34px,var(--marketing-heading-size))]">
        {headline}
      </h2>
      {body && <p className="mt-4 text-[16px] leading-[1.65] text-[#4E607A]">{body}</p>}
    </BlurFade>
  );
}
