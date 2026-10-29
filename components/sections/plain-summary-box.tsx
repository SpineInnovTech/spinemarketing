import type { ReactNode } from "react";

/** S19 — plain-language summary above legal prose. */

export function PlainSummaryBox({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-[68ch] rounded-2xl border border-[#CBE5FA] bg-[#F0F8FF] p-6 text-[15px] leading-relaxed text-[#082B5E]">
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#006FE8]">In short</p>
      <div className="mt-3 space-y-3 text-[#4E607A]">{children}</div>
    </div>
  );
}
