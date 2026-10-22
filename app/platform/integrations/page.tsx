import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationShowcase } from "@/components/integration-showcase"
import { PlatformIntegrationsContent } from "./content"
import { IntegrationsStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Integrations | Spine InnovTech",
  description:
    "The apps, files, and conversations you already use, through one connection.",
  alternates: { canonical: "/platform/integrations" },
  openGraph: {
    title: "Integrations | Spine InnovTech",
    description: "The apps, files, and conversations you already use, through one connection.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function PlatformIntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "Integrations", url: absoluteUrl("/platform/integrations") },
      ]} />
      <Header />
      <main id="main">
        <PlatformIntegrationsContent />
        <IntegrationsStickyScroll />
        <IntegrationShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
