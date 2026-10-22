import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { OperationsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Operations & Delivery Leaders | Spine InnovTech",
  description:
    "Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track and clients happy.",
  alternates: { canonical: "/solutions/operations" },
  openGraph: {
    title: "Operations & Delivery Leaders | Spine InnovTech",
    description: "Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track and clients happy.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Operations", url: absoluteUrl("/solutions/operations") },
      ]} />
      <Header />
      <main id="main">
        <OperationsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
