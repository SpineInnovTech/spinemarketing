import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PublicSolution } from "@/lib/solution-taxonomy";
import { productSiteUrl } from "@/lib/workspace-entry";

export function WorkspaceProjectionCta({
  solution,
  className = "",
}: {
  solution: PublicSolution;
  className?: string;
}) {
  const productSiteHref = productSiteUrl(`/solutions/${solution.slug}`);

  return (
    <section className={`border-t border-[#D8E4F1] bg-[#EAF2FD] px-5 py-16 sm:px-8 ${className}`}>
      <div className="mx-auto grid max-w-[1120px] items-center gap-9 lg:grid-cols-[1.3fr_.7fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#2462B2]">SpineWorkspace for your team</p>
          <h2 className="mt-5 max-w-[700px] text-[length:min(clamp(2rem,3.6vw,3.5rem),var(--marketing-heading-size))] font-semibold leading-[1.14] tracking-[-.05em] text-[#112F57]">
            See {solution.name.toLowerCase()} work in the same shared workspace.
          </h2>
          <p className="mt-6 max-w-[730px] text-[16px] leading-[1.85] text-[#566E89]">
            {solution.buyerSummary} This page describes a common way of working. It is not a promise that a particular tool connection or separate site is already switched on for you. We confirm product access and supported tools with you.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={productSiteHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#143968] px-6 text-sm font-semibold text-white transition hover:bg-[#2862A8]">
            See this on the product site <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <Link href="/product" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#BBCDE7] bg-white px-6 text-sm font-semibold text-[#143968] transition hover:border-[#2862A8]">
            Product overview <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/contact?intent=demo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#BBCDE7] bg-white px-6 text-sm font-semibold text-[#143968] transition hover:border-[#2862A8]">
            Talk to us about this <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
