import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { PlatformSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Platform Security Architecture | Spine InnovTech",
  description: "Security architecture principles for SpineWorkspace. Review actual identity, encryption, access-control and audit evidence for each deployment.",
  alternates: { canonical: "/platform/security" },
  openGraph: {
    title: "Platform Security Architecture | Spine InnovTech",
    description: "Security architecture principles for SpineWorkspace. Review actual identity, encryption, access-control and audit evidence for each deployment.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
}

export default function PlatformSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "Security", url: absoluteUrl("/platform/security") },
      ]} />
      <PlatformSecurityContent />
    </>
  )
}
