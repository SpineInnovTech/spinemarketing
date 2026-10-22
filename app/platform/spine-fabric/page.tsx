import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationShowcase } from "@/components/integration-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SpineFabricContent } from "./content"
import { SpineStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine Fabric | Spine InnovTech",
  description:
    "Spine Fabric connects business relationships, evidence, signals, decisions, goals and work into governed context.",
  alternates: { canonical: "/platform/spine-fabric" },
  openGraph: {
    title: "Spine Fabric | Spine InnovTech",
    description: "Explore the contextual foundation behind SpineWorkspace: relationships, provenance, authority and continuity.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function SpineFabricPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "Spine Fabric", url: absoluteUrl("/platform/spine-fabric") },
      ]} />
      <Header />
      <main id="main">
        <SpineFabricContent />
        <SpineStickyScroll />
        <IntegrationShowcase
          tag="Connected capabilities"
          heading={<>Your tools, <span className="text-primary">still in charge.</span></>}
        />
        <TestimonialsSection heading="Connected context across business functions." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
