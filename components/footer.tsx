import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpineLogo } from "@/components/spine-logo";
import { footerColumns, footerLegalLinks, footerUtilityLinks } from "@/lib/navigation";
import { COMPANY_NAME } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t-4 border-[#006FE8] bg-[#082B5E] text-white [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#9BCAFF]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-white/20 py-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:py-20">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BCAFF]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 p-2">
                <SpineLogo
                  className="h-7 w-7 text-[#103366]"
                  variant="on-dark"
                />
              </span>
              <span className="text-[21px] font-semibold tracking-[-.055em] text-white">
                Spine <span className="text-[#9BCAFF]">InnovTech</span>
              </span>
            </Link>
            <h2 className="mt-8 max-w-[420px] text-[length:min(clamp(1.8rem,3vw,2.8rem),var(--marketing-heading-size))] font-semibold leading-[1.2] tracking-[-.05em] text-white">
              We build the foundation for connected business work.
            </h2>
            <p className="mt-5 max-w-[400px] text-[14px] leading-[1.85] text-[#CBD9EB]">
              Spine InnovTech develops technology for shared business
              understanding, human and AI collaboration, explicit authority and
              work continuity.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#9BCAFF] transition hover:text-white"
            >
              Talk to Spine InnovTech <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
          >
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[.18em] text-white">
                  {col.heading}
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] leading-6 text-[#CBD9EB] transition hover:text-white"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[13px] leading-6 text-[#CBD9EB] transition hover:text-white"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="border-b border-white/15 py-6 text-[13px] leading-[1.8] text-[#CBD9EB]">
          Source systems stay authoritative. Authority stays with people.
          Context stays with the work.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 py-7">
          <p className="text-[12px] text-[#CBD9EB]">
            © 2026 {COMPANY_NAME}. All rights reserved.
          </p>
          {(footerLegalLinks.length > 0 || footerUtilityLinks.length > 0) && (
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[...footerLegalLinks, ...footerUtilityLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-[#CBD9EB] transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
