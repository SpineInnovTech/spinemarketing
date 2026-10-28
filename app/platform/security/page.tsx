import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { PlatformSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "How platform security is built | Spine InnovTech",
  description: "How SpineWorkspace security is built. Review sign-in, how data is protected, who can get in, and the record of actions for each setup.",
  alternates: { canonical: "/platform/security" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "How platform security is built | Spine InnovTech",
    description: "How SpineWorkspace security is built. Review sign-in, how data is protected, who can get in, and the record of actions for each setup.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
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
