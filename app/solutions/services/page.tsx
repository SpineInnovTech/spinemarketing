import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Services & Agencies | Spine InnovTech",
  description:
    "Projects, utilisation, invoices, client health — the full engagement picture.",
  alternates: { canonical: "/solutions/services" },
  openGraph: {
    title: "Services & Agencies | Spine InnovTech",
    description: "Projects, utilisation, invoices, client health — the full engagement picture.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Services & Agencies", url: absoluteUrl("/solutions/services") },
      ]} />
      <Header />
      <main id="main">
        <ServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
