import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SecurityNarrativeIntro } from "./narrative-intro"
import { SecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security | Spine InnovTech",
  description:
    "How SpineWorkspace is designed to keep information safe, and to have a person approve important actions. Deployed controls and certifications need an independent check.",
  alternates: { canonical: "/security" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Security | Spine InnovTech",
    description: "How SpineWorkspace is designed to keep information safe, and to have a person approve important actions. Deployed controls and certifications need an independent check.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Security", url: absoluteUrl("/security") },
      ]} />
      <Header />
      <main id="main">
        <SecurityNarrativeIntro />
        <SecurityContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
