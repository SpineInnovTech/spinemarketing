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
    title: "Spine InnovTech — Connecting Business Context for Humans and AI",
    description:
      "Spine InnovTech connects your tools, people, and AI through shared business context—so teams can move from insight to action, with people in control.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spine InnovTech — Connecting Business Context for Humans and AI",
    description:
      "Spine InnovTech connects your tools, people, and AI through shared business context—so teams can move from insight to action, with people in control.",
    images: ["/og.png"],
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
