"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SpineLogo } from "@/components/spine-logo";
import { useDraft } from "@/components/workspace/draft-store";

export default function LoginPage() {
  const router = useRouter();
  const { draft, hydrated, save } = useDraft();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a work email to start a local setup draft.");
      return;
    }
    save({ ...draft, email: email.trim() });
    router.push("/onboarding");
  }

  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-[#F3F6F9]">
      <div className="mx-auto grid min-h-screen max-w-[1040px] items-center gap-8 px-6 py-12 md:grid-cols-2">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-[#032D60]">
            <SpineLogo className="h-8 w-8" />
            <span className="text-[16px] font-semibold">SpineWorkspace</span>
          </Link>
          <h1 className="mt-8 text-[length:min(32px,var(--marketing-title-size))] font-semibold tracking-[-0.03em] text-[#032D60]">Sign in</h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#444]">
            SpineWorkspace is the business-context workspace where humans and AI work together. Sign-in continues into setup for your operating area.
          </p>
          <p className="mt-4 rounded-md border border-[#E5E5E5] bg-white p-3 text-[13px] leading-[1.55] text-[#444]">
            This corporate site introduces Spine InnovTech. To evaluate or enter the SpineWorkspace product, continue on the product site at{" "}
            <a href="https://spineworkspace.com" className="font-semibold text-[#0176D3] hover:underline">
              spineworkspace.com
            </a>
            .
          </p>
        </div>
        <form onSubmit={onSubmit} className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <label htmlFor="email" className="text-[13px] font-semibold text-[#032D60]">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={hydrated && draft.email ? draft.email : "you@company.com"}
            className="mt-2 h-10 w-full rounded-md border border-[#C9C9C9] px-3 text-[14px] outline-none focus:border-[#0176D3]"
          />
          {error && <p className="mt-2 text-[13px] text-[#BA0517]">{error}</p>}
          <button type="submit" className="mt-4 h-10 w-full rounded-md bg-[#0176D3] text-[14px] font-semibold text-white hover:bg-[#0B5CAB]">
            Continue to setup preview
          </button>
          <a
            href="https://spineworkspace.com/login?next=%2Fworkspace%2Fmy-work"
            className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md border border-[#0176D3] bg-[#F0F8FF] text-[14px] font-semibold text-[#032D60] hover:bg-[#E1F0FF]"
          >
            Continue on SpineWorkspace product site
          </a>
          <p className="mt-4 text-[13px] text-[#444]">
            Need access for a team?{" "}
            <Link href="/request-access" className="font-semibold text-[#0176D3] hover:underline">
              Request access
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
