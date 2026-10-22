import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

import { FirebaseAnalytics } from "@/components/firebase-analytics"
import { absoluteUrl, publicSiteUrl } from "@/lib/site-url"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
// Display face for hero headlines only; body/nav/buttons stay Inter. Self-hosted
// by next/font, so no runtime Google call and the CSP is unaffected.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
  title: {
    default: "Spine InnovTech — Governed Business Context for Humans and AI",
    template: "%s",
  },
  description:
    "We build the governed foundation for shared business context. Your tools keep the record. Your people keep the authority.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Governed foundation for humans and AI to share business context and move work forward.",
    description:
      "We build the governed foundation for shared business context. Your tools keep the record. Your people keep the authority.",
    siteName: "Spine InnovTech",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governed foundation for humans and AI to share business context and move work forward.",
    description:
      "We build the governed foundation for shared business context. Your tools keep the record. Your people keep the authority.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="light" data-appearance="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spine InnovTech",
              legalName: "Spine InnovTech Private Limited",
              description: "Technology for shared business context, human and AI collaboration, governed capabilities and work continuity.",
              url: publicSiteUrl,
              logo: absoluteUrl("/icon.svg"),
              sameAs: [],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "connect@spineworkspace.com",
                  contactType: "sales",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${plusJakarta.variable} overflow-x-clip bg-white text-[#181818] antialiased`} suppressHydrationWarning>
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
