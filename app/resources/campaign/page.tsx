import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CampaignGalleryContent } from "./content"

export const metadata: Metadata = {
  title: "Campaign Gallery — Architecture & Creatives | Spine InnovTech",
  description:
    "Architecture illustrations and 36 earlier campaign concepts for Account Success, Business Ops, and Personal Ops. Explore the product pages for the current direction.",
  alternates: { canonical: "/resources/campaign" },
  openGraph: {
    title: "Campaign Gallery — Architecture & Creatives | Spine InnovTech",
    description:
      "Architecture illustrations and 36 campaign concepts. Illustrative assets, not evidence of deployed product controls.",
    images: [
      { url: "/images/campaign/Post-Spine.jpg", width: 1080, height: 1080, alt: "SpineWorkspace — The SpineWorkspace Architecture" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Gallery — Architecture & Creatives | Spine InnovTech",
    description: "Architecture illustrations and earlier campaign concepts for SpineWorkspace.",
    images: ["/images/campaign/Post-Spine.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SpineWorkspace Campaign Gallery",
  description:
    "36 campaign designs across LinkedIn and WhatsApp — crafted for Account Success, Business Ops, and Personal Ops professionals.",
  url: absoluteUrl("/resources/campaign"),
  publisher: {
    "@type": "Organization",
    name: "SpineWorkspace",
    url: absoluteUrl("/"),
  },
  mainEntity: {
    "@type": "ImageGallery",
    name: "SpineWorkspace Marketing Campaign Designs",
    numberOfItems: 36,
    about: [
      { "@type": "Thing", name: "Account Success" },
      { "@type": "Thing", name: "Business Operations" },
      { "@type": "Thing", name: "Personal Operations" },
    ],
  },
}

export default function CampaignGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <CampaignGalleryContent />
      </main>
      <Footer />
    </div>
  )
}
