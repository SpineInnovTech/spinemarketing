import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ApprovalGateTwinContent } from "./content"
import { ApprovalStickyScroll, ApprovalGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Governance & Twin in Action | Spine InnovTech",
  description:
    "Review proposed work with its evidence, send actions that matter to the right person to approve, and check the results.",
  alternates: { canonical: "/product/approval-gate-twin" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Governance & Twin in Action | Spine InnovTech",
    description: "Review proposed work with its evidence, send actions that matter to the right person to approve, and check the results.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ApprovalGateTwinPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Product", url: absoluteUrl("/product") },
        { name: "Governance & Twin", url: absoluteUrl("/product/approval-gate-twin") },
      ]} />
      <Header />
      <main id="main">
        <ApprovalGateTwinContent />
        <ApprovalStickyScroll />
        <ApprovalGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
