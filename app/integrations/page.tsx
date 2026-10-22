import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationsContent } from "./content"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Connected Ecosystems & Integrations | Spine InnovTech",
  description:
    "Connect the systems your business already uses: CRM, support, finance, project tools, email and documents. Source systems stay authoritative.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Connected Ecosystems & Integrations | Spine InnovTech",
    description: "Connect business systems and assemble shared context for people and their Twin. Source systems stay authoritative.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace Integrations" }],
  },
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Integrations", url: absoluteUrl("/integrations") },
      ]} />
      <Header />
      <main id="main">
        <IntegrationsContent />
        <TestimonialsSection
          heading="Illustrative connector scenarios"
          tag="Demonstration, not customer quotes"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
