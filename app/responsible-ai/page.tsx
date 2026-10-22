import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { ResponsibleAiContent } from "./content"

export const metadata: Metadata = {
  title: "Responsible AI — Spine InnovTech",
  description:
    "Our approach to AI collaboration centers on evidence, bounded delegation, meaningful human review, correction and clear memory boundaries.",
  alternates: { canonical: "/responsible-ai" },
  openGraph: {
    title: "Responsible AI — Spine InnovTech",
    description:
      "Our approach to AI collaboration centers on evidence, bounded delegation, meaningful human review, correction and clear memory boundaries.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function ResponsibleAiPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Responsible AI", url: absoluteUrl("/responsible-ai") },
        ]}
      />
      <Header />
      <main id="main">
        <ResponsibleAiContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
