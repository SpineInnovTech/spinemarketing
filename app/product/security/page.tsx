import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { ProductSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Product Governance Concepts | Spine InnovTech",
  description: "Illustrative governance concepts for SpineWorkspace, including approval boundaries and evidence collection; not a certification of live controls.",
  alternates: { canonical: "/product/security" },
  openGraph: {
    title: "Product Governance Concepts | Spine InnovTech",
    description: "Illustrative governance concepts for SpineWorkspace, including approval boundaries and evidence collection; not a certification of live controls.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
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
