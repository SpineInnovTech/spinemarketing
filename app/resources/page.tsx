import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ResourcesContent } from "./content";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Resources | Spine InnovTech" },
  description:
    "Perspectives, our technology approach and demonstrations from Spine InnovTech. Detailed product guides and getting started live on the product website.",
  alternates: { canonical: "/resources" },
  openGraph: {
    siteName: "Spine InnovTech",
    title: "Resources | Spine InnovTech",
    description:
      "Perspectives, our technology approach and demonstrations from Spine InnovTech. Detailed product guides and getting started live on the product website.",
    images: [{ url: "/og-share-2026-10.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
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
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
