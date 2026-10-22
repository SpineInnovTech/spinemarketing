import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"
import { AboutJourneyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Our Philosophy | Spine InnovTech",
  description:
    "Read the engineering principles behind Spine InnovTech: source authority, shared context, human judgment and observable business outcomes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Philosophy | Spine InnovTech",
    description: "Read the engineering principles behind Spine InnovTech: source authority, shared context, human judgment and observable business outcomes.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "About", url: absoluteUrl("/about") },
      ]} />
      <Header />
      <main id="main">
        <AboutContent />
        <AboutJourneyScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
