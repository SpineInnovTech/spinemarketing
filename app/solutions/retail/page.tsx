import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RetailContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Retail & Ecommerce | Spine InnovTech",
  description:
    "Stock, orders, returns, support — every signal connected so teams act before problems become complaints.",
  alternates: { canonical: "/solutions/retail" },
  openGraph: {
    title: "Retail & Ecommerce | Spine InnovTech",
    description: "Stock, orders, returns, support — every signal connected so teams act before problems become complaints.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Retail", url: absoluteUrl("/solutions/retail") },
      ]} />
      <Header />
      <main id="main">
        <RetailContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
