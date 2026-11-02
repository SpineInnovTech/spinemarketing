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
    default: "Spine InnovTech — Helping People and AI Work Better Together",
    template: "%s",
  },
  description:
    "We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Helping people and AI work better together.",
    description:
      "We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.",
    siteName: "Spine InnovTech",
    type: "website",
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
    images: ["/og-share-2026-10.png"],
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
              description: "We build technology that connects business information, decisions and everyday work—so teams can move forward without starting from scratch.",
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
