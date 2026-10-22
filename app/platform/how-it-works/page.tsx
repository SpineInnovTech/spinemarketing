import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformHowItWorksContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "How it works | Spine InnovTech",
  description:
    "People and Twin work from authorized business context. Investigate, prepare, review consequential actions, and reconcile observed results in the systems that own the records.",
  alternates: { canonical: "/platform/how-it-works" },
  openGraph: {
    title: "How it works | Spine InnovTech",
    description: "People and Twin work from authorized business context. Investigate, prepare, review consequential actions, and reconcile observed results in the systems that own the records.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformHowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "How it Works", url: absoluteUrl("/platform/how-it-works") },
      ]} />
      <Header />
      <main id="main">
        <PlatformHowItWorksContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
