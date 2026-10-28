import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { ProductSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Who can act | Spine InnovTech",
  description: "Examples of how SpineWorkspace keeps approval limits and a record of the facts. This is not a certification of live controls.",
  alternates: { canonical: "/product/security" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Who can act | Spine InnovTech",
    description: "Examples of how SpineWorkspace keeps approval limits and a record of the facts. This is not a certification of live controls.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function ProductSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Product", url: absoluteUrl("/product") },
        { name: "Security", url: absoluteUrl("/product/security") },
      ]} />
      <ProductSecurityContent />
    </>
  )
}
