import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
export const metadata: Metadata = {
  title: "Spine InnovTech — Foundation for Connected Business Work",
  description: "Spine InnovTech builds technology for shared business context, human and AI collaboration, governed capabilities and work continuity.",
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
