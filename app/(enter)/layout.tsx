import type { Metadata } from "next";
import { DraftProvider } from "@/components/workspace/draft-store";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default function EnterLayout({ children }: { children: React.ReactNode }) {
  return (
    <DraftProvider>
      <div role="note" className="relative z-[60] border-b border-[#BCD0E8] bg-[#E8F1FF] px-4 py-2 text-center text-xs font-medium leading-5 text-[#133867]">
        Corporate marketing preview only — product access and workspace sign-in live on the Spine Workspace product site.{" "}
        <a href="https://spineworkspace.com/" className="underline underline-offset-2 hover:text-[#0A58A0]">
          Explore Spine Workspace
        </a>
      </div>
      {children}
    </DraftProvider>
  );
}
