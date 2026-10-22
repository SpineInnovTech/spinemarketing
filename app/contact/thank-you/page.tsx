import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Inquiry Received — Spine InnovTech",
  description: "Thank you for contacting Spine InnovTech.",
  robots: { index: false, follow: true },
}

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main" className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF7FF] via-[#F4FAFF] to-white">
        <div className="mx-auto w-full max-w-[720px] px-5 py-28 text-center sm:px-8 lg:py-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-[#F0F8FF] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[.2em] text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" aria-hidden />
            Inquiry received
          </p>
          <h1 className="mt-6 text-[length:min(clamp(2.3rem,4.8vw,3.6rem),var(--marketing-title-size))] font-bold leading-[1.1] tracking-[-.04em] text-[#032D60]">
            Thank you for reaching out.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#3A506B]">
            Your inquiry has been received. We will review it and follow up using the email address you provided.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8]">
              Return to Spine InnovTech <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href="https://spineworkspace.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C5D8EC] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:border-[#006FE8] hover:bg-[#F3F8FE]">
              Explore SpineWorkspace <ArrowUpRight className="h-4 w-4 text-[#006FE8]" aria-hidden />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
