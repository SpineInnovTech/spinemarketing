import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { InfrastructureContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Infrastructure | Spine InnovTech",
  description: "Multi-region infrastructure, encryption, and operational resilience powering the SpineWorkspace.",
  alternates: { canonical: "/platform/infrastructure" },
  openGraph: {
    title: "Infrastructure | Spine InnovTech",
    description: "Multi-region infrastructure, encryption, and operational resilience powering the SpineWorkspace.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function InfrastructurePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "Infrastructure", url: absoluteUrl("/platform/infrastructure") },
      ]} />
      <InfrastructureContent />
    </>
  )
}
