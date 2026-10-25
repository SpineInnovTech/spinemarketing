import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const PRODUCT_PRICING_URL = "https://spineworkspace.com/pricing";

const pricingDescription =
  "SpineWorkspace pricing and evaluation live on the product website. This corporate page redirects to spineworkspace.com/pricing.";

export const metadata: Metadata = {
  title: { absolute: "Pricing — SpineWorkspace | Spine InnovTech" },
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  robots: { index: false, follow: true },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Pricing — SpineWorkspace",
    description: pricingDescription,
  },
  // Static fallback redirect for user agents that reach the exported page
  // directly. The Cloudflare Worker issues a 308 to the product pricing page
  // before this HTML is served; this meta refresh is a resilience backstop.
  other: {
    "http-equiv-refresh": `0; url=${PRODUCT_PRICING_URL}`,
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <meta httpEquiv="refresh" content={`0; url=${PRODUCT_PRICING_URL}`} />
      <Header />
      <main id="main">
        <section className="bg-gradient-to-b from-[#EBF7FF] via-[#F0F8FF] to-white px-5 pb-20 pt-32 text-[#052858] sm:px-8">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#006FE8]">
              SPINEWORKSPACE · PRODUCT WEBSITE
            </p>
            <h1 className="mt-5 text-[length:min(clamp(2rem,4.5vw,3.5rem),var(--marketing-title-size))] font-bold leading-[1.1] tracking-[-.045em] text-[#032D60]">
              Pricing lives on the product website.
            </h1>
            <p className="mt-5 text-[length:var(--marketing-body-size)] leading-7 text-[#4E607A]">
              SpineWorkspace plans, evaluation and getting started are handled on
              the product website. You are being redirected to
              spineworkspace.com/pricing. If the page does not open, use the link
              below.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={PRODUCT_PRICING_URL}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-7 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,111,232,0.28)] transition-all hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
              >
                Go to SpineWorkspace pricing <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/spineworkspace"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#CBE5FA] bg-white px-6 text-sm font-semibold text-[#082B5E] shadow-2xs transition-all hover:bg-[#F0F8FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
              >
                About SpineWorkspace <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
