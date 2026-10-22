"use client";

import Link from "next/link";
import { SpineLogo } from "@/components/spine-logo";

const NAV = [
  { label: "Overview", href: "/workspace", enabled: true },
  { label: "Onboarding", href: "/onboarding", enabled: true },
  { label: "Context", href: "/workspace#context", enabled: false },
  { label: "Work", href: "/workspace#work", enabled: false },
  { label: "Evidence", href: "/workspace#evidence", enabled: false },
  { label: "Twin", href: "/workspace#twin", enabled: false },
];

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F3F6F9] text-[#181818]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[220px] shrink-0 flex-col border-r border-[#E5E5E5] bg-white md:flex">
          <Link href="/" className="flex items-center gap-2 border-b border-[#E5E5E5] px-4 py-4">
            <SpineLogo className="h-7 w-7 text-[#032D60]" />
            <span className="text-[14px] font-semibold text-[#032D60]">SpineWorkspace</span>
          </Link>
          <nav className="flex flex-1 flex-col gap-0.5 p-2" aria-label="Workspace">
            {NAV.map((item) =>
              item.enabled ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-[14px] font-medium text-[#032D60] hover:bg-[#F3F6F9]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="cursor-not-allowed rounded-md px-3 py-2 text-[14px] text-[#706E6B]"
                  title="Available after workspace provisioning"
                >
                  {item.label}
                  <span className="mt-0.5 block text-[11px]">Unavailable</span>
                </span>
              ),
            )}
          </nav>
          <div className="border-t border-[#E5E5E5] p-3 text-[12px] leading-snug text-[#706E6B]">
            Local setup draft. Not a provisioned workspace.
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] bg-white px-4 py-3 md:px-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">SpineWorkspace</p>
              <h1 className="text-[18px] font-semibold text-[#032D60]">{title}</h1>
              {subtitle && <p className="text-[13px] text-[#444]">{subtitle}</p>}
            </div>
            <Link href="/" className="text-[13px] font-semibold text-[#0176D3] hover:underline">
              Back to site
            </Link>
          </header>
          <div className="flex gap-1 overflow-x-auto border-b border-[#E5E5E5] bg-white px-3 py-2 md:hidden">
            {NAV.filter((item) => item.enabled).map((item) => (
              <Link key={item.label} href={item.href} className="shrink-0 rounded-md px-3 py-1.5 text-[13px] font-medium text-[#032D60]">
                {item.label}
              </Link>
            ))}
          </div>
          <main id="main" className="flex-1 px-4 py-6 md:px-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export function ProductFrame({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#F3F6F9] text-[#181818]">{children}</div>;
}
