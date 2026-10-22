import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpineWorkspaceDetails } from "@/components/marketing/spine-workspace-details";
export const metadata: Metadata = {
  title: "SpineWorkspace — Governed Business-Context Workspace | Spine InnovTech",
  description:
    "Humans govern the business. AI helps the work. SpineWorkspace is where humans and AI share one governed view of the business.",
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
