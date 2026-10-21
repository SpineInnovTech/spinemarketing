import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpineWorkspaceDetails } from "@/components/marketing/spine-workspace-details";
export const metadata: Metadata = {
  title: "Spine Workspace — One Context, 13 Domains & Ready-to-Work Views",
  description:
    "Explore one governed Spine Fabric projected across 13 domains: ready-built Workbench views, Canvas and cross-host continuity with Spine Network.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      <main id="main" className="pt-16">
        <SpineWorkspaceDetails />
      </main>
      <Footer />
    </div>
  );
}
