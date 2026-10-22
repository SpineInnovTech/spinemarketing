import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
export const metadata: Metadata = {
  title: "Spine InnovTech — Governed Business Context for Humans and AI",
  description: "We build the governed foundation for shared business context. Your tools keep the record. Your people keep the authority.",
  alternates: { canonical: "/" },
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
