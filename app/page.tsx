import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
export const metadata: Metadata = {
  title: "Spine InnovTech — Connecting Business Context for Humans and AI",
  description:
    "Spine InnovTech connects your tools, people, and AI through shared business context—so teams can move from insight to action, with people in control.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Connecting business context for humans and AI, with people in control.",
    description:
      "Spine InnovTech connects your tools, people, and AI through shared business context—so teams can move from insight to action, with people in control.",
    images: [
      {
        url: "/og-share-2026-10.png",
        width: 1200,
        height: 630,
        alt: "Spine InnovTech — Connecting business context for humans and AI, with people in control.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connecting business context for humans and AI, with people in control.",
    description:
      "Spine InnovTech connects your tools, people, and AI through shared business context—so teams can move from insight to action, with people in control.",
    images: ["/og-share-2026-10.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFFFF]">
      <Header />
      <main id="main" className="pt-16">
        <InnovLabsHome />
      </main>
      <Footer />
    </div>
  )
}
