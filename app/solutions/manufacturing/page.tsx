import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ManufacturingContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Manufacturing & Trade | Spine InnovTech",
  description:
    "Orders, shipments, payments — live across ERP, CRM, and logistics.",
  alternates: { canonical: "/solutions/manufacturing" },
  openGraph: {
    title: "Manufacturing & Trade | Spine InnovTech",
    description: "Orders, shipments, payments — live across ERP, CRM, and logistics.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Manufacturing", url: absoluteUrl("/solutions/manufacturing") },
      ]} />
      <Header />
      <main id="main">
        <ManufacturingContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
