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
    "Review proposed work with evidence, route consequential actions to the right authority, and reconcile observed outcomes.",
  alternates: { canonical: "/product/approval-gate-twin" },
  openGraph: {
    title: "Governance & Twin in Action | Spine InnovTech",
    description: "Review proposed work with evidence, route consequential actions to the right authority, and reconcile observed outcomes.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
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
