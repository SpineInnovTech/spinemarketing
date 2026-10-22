import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FinanceLeadersContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Finance Leaders | Spine InnovTech",
  description:
    "Cash, collections, runway — accounting, billing, and CRM unified.",
  alternates: { canonical: "/solutions/finance-leaders" },
  openGraph: {
    title: "Finance Leaders | Spine InnovTech",
    description: "Cash, collections, runway — accounting, billing, and CRM unified.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function FinanceLeadersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Finance Leaders", url: absoluteUrl("/solutions/finance-leaders") },
      ]} />
      <Header />
      <main id="main">
        <FinanceLeadersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
