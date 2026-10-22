import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "./content"
import { ContactOnboardingGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Contact | Spine InnovTech",
  description:
    "Book a demo or request a connector. We connect your tools live.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Spine InnovTech",
    description: "Book a demo or request a connector. We connect your tools live.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Contact", url: absoluteUrl("/contact") },
      ]} />
      <Header />
      <main id="main">
        <ContactContent defaultIntent="contact" />
        <ContactOnboardingGather />
      </main>
      <Footer />
    </div>
  )
}
