import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { TrustContent } from "./content"

export const metadata: Metadata = {
  title: "Trust & Governance — Spine InnovTech",
  description:
    "Learn how clear limits on who can see what, who can act, where information came from and proof of results shape Spine InnovTech's engineering approach.",
  alternates: { canonical: "/trust" },
  openGraph: {
    title: "Trust & Governance — Spine InnovTech",
    description:
      "Learn how clear limits on who can see what, who can act, where information came from and proof of results shape Spine InnovTech's engineering approach.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Trust & Governance", url: absoluteUrl("/trust") },
        ]}
      />
      <Header />
      <main id="main">
        <TrustContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
