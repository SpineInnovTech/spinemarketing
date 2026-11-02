import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
export const metadata: Metadata = {
  title: "Spine InnovTech — Helping People and AI Work Better Together",
  description:
    "We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Helping people and AI work better together.",
    description:
      "We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.",
    images: [
      {
        url: "/og-share-2026-10.png",
        width: 1200,
        height: 630,
        alt: "Spine InnovTech — Helping people and AI work better together.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helping people and AI work better together.",
    description:
      "We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.",
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
