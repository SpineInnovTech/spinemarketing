import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
const homeTitle = "Your Business Tools. Your Business Context. Your Decisions. AI Acts With Your Approval.";
const homeDescription =
  "SpineWorkspace brings information from your tools together with the conversations and history behind it. People and AI can see the full picture and work out the next step. Changes to your tools happen only with your approval.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/og-share-2026-10.png",
        width: 1200,
        height: 630,
        alt: homeTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
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
