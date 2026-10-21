import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { EXPLORE_SPINEWORKSPACE_LABEL, PRODUCT_SITE_URL } from "@/lib/product-site";

export function FinalCTA() {
  return (
    <section aria-labelledby="corporate-next-step" className="relative overflow-hidden border-t border-[#D6E8F8] bg-[#EBF7FF]">
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[28px] border border-[#CBE5FA] bg-white p-8 shadow-[0_20px_55px_rgba(0,111,232,0.08)] sm:p-12 lg:grid-cols-[1.3fr_.7fr]">
          <BorderBeam size={240} duration={13} colorFrom="#006FE8" colorTo="#38BDF8" />
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[.2em] text-[#006FE8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
              SPINE INNOVTECH / WHAT'S NEXT
            </p>
            <h2 id="corporate-next-step" className="mt-5 max-w-[780px] text-[length:min(clamp(2.4rem,4.2vw,4.2rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#082B5E]">
              Build on shared context, not disconnected tools.
            </h2>
            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.85] text-[#4E607A]">
              Explore how our technology connects business context, human judgment and governed AI capability. Start with the company behind the thinking or meet SpineWorkspace, our flagship product.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-stretch">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,111,232,0.25)] transition-colors hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
              Contact Spine InnovTech <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={PRODUCT_SITE_URL} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#006FE8] bg-white px-6 py-3 text-sm font-semibold text-[#082B5E] transition-colors hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
              {EXPLORE_SPINEWORKSPACE_LABEL} <ArrowUpRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
