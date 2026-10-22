import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TheAdaptiveWorkspaceContent } from "./content"
import { WorkspaceGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { WorkbenchViewExplorer } from "@/components/marketing/workbench-view-explorer"

export const metadata: Metadata = {
  title: "The Adaptive Workspace | Spine InnovTech",
  description:
    "Role-based views built on Customer view. Nine workspace views, one record.",
  alternates: { canonical: "/product/the-adaptive-workspace" },
  openGraph: {
    title: "The Adaptive Workspace | Spine InnovTech",
    description: "Role-based views built on Customer view. Nine workspace views, one record.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function TheAdaptiveWorkspacePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Product", url: absoluteUrl("/product") },
        { name: "The Adaptive Workspace", url: absoluteUrl("/product/the-adaptive-workspace") },
      ]} />
      <Header />
      <main id="main">
        <TheAdaptiveWorkspaceContent />
        <WorkbenchViewExplorer initialDomain="account-success" />
        <WorkspaceGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
