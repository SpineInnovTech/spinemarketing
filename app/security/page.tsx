import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SecurityNarrativeIntro } from "./narrative-intro"
import { SecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security & Governance | Spine InnovTech",
  description:
    "Security and governance design principles for Spine Workspace; deployed controls and certifications require independent verification.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security & Governance | Spine InnovTech",
    description: "Security and governance design principles for Spine Workspace; deployed controls and certifications require independent verification.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
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
