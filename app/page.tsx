import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
export const metadata: Metadata = {
  title: "SpineWorkspace — Connected Business Work | Spine InnovTech",
  description: "Spine InnovTech is the parent company of SpineWorkspace. Governing the shared business context where humans and AI work together from one source of truth.",
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
