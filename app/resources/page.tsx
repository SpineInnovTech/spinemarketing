import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ResourcesContent } from "./content";
import { ResourcesScroll } from "./sticky-sections";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Resources | Spine InnovTech",
  description:
    "Guides, use cases, and tools to help you get the most from Spine Workspace.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | Spine InnovTech",
    description: "Guides, use cases, and tools to help you get the most from Spine Workspace.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Resources", url: absoluteUrl("/resources") },
      ]} />
      <Header />
      <main id="main">
        <ResourcesContent />
        <ResourcesScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
