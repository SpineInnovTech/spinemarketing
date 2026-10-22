"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { headerNavigation, type NavItem } from "@/lib/navigation";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const navigation = headerNavigation;

const PRODUCT_URL = "https://spineworkspace.com";

function isPathMatch(pathname: string, href: string) {
  const cleanHref = href.split(/[?#]/)[0] || "/";
  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

function DesktopLink({ nav, pathname }: { nav: NavItem; pathname: string }) {
  const isCurrent = isPathMatch(pathname, nav.href);
  const linkClass = `inline-flex h-10 items-center rounded-[10px] px-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none ${
    isCurrent
      ? "bg-[#EBF7FF] font-semibold text-[#006FE8]"
      : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
  }`;

  if (nav.external) {
    return (
      <a href={nav.href} className={linkClass} target="_blank" rel="noopener noreferrer">
        {nav.label}
      </a>
    );
  }
  return (
    <Link href={nav.href} aria-current={isCurrent ? "page" : undefined} className={linkClass}>
      {nav.label}
    </Link>
  );
}

export function Header({
  initiallyHidden = false,
}: {
  initiallyHidden?: boolean;
}) {
  const currentPathname = usePathname() ?? "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(!initiallyHidden);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!initiallyHidden) return;
    const handler = () => setHeroRevealed(true);
    window.addEventListener("heroPhaseChange", handler);
    return () => window.removeEventListener("heroPhaseChange", handler);
  }, [initiallyHidden]);

  // Escape closes the mobile panel and restores focus to the toggle.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const id = requestAnimationFrame(() => {
      const first = mobilePanelRef.current?.querySelector<HTMLElement>("a[href], button");
      first?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [mobileMenuOpen]);

  // Trap Tab focus within the open mobile panel, cycling back to the toggle.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const panel = mobilePanelRef.current;
    if (!panel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = [
        ...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ].filter((el) => !el.closest("[hidden]"));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        menuButtonRef.current?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        menuButtonRef.current?.focus();
      }
    };
    panel.addEventListener("keydown", handler);
    return () => panel.removeEventListener("keydown", handler);
  }, [mobileMenuOpen]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <motion.header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-50"
        initial={initiallyHidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
        animate={heroRevealed ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : { type: "spring", damping: 22, stiffness: 200, mass: 0.8 }
        }
        style={{
          background: "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--header-line)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, background: "var(--gradient-primary)" }}
          suppressHydrationWarning
        />

        <nav
          aria-label="Primary"
          className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <Link
            href="/"
            className="inline-flex h-10 shrink-0 items-center gap-2.5 rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
          >
            <SpineLogo className="h-8 w-8 shrink-0 text-[#082B5E]" variant="on-light" />
            <span className="text-[17px] font-semibold leading-none tracking-[-0.04em] text-[#082B5E]">
              Spine <span className="text-[#006FE8]">InnovTech</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((nav) => (
              <DesktopLink key={nav.label} nav={nav} pathname={currentPathname} />
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Button
              className="h-10 rounded-[10px] bg-[#006FE8] px-4 text-[14px] font-semibold text-white hover:bg-[#0055B8]"
              asChild
            >
              <a href={PRODUCT_URL} className="inline-flex items-center gap-1.5">
                <span>Explore SpineWorkspace</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-[#082B5E] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            initial={reduce ? false : { height: 0 }}
            animate={{ height: "auto" }}
            transition={reduce ? { duration: 0 } : { duration: 0.2, ease: "easeInOut" }}
            className="max-h-[calc(100dvh-64px)] overflow-x-hidden overflow-y-auto border-t border-[#D9E4EF] bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col px-4 py-3">
              {navigation.map((nav) => {
                const isCurrent = isPathMatch(currentPathname, nav.href);
                const itemClass = `block rounded-xl px-2 py-3 text-[15px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] ${
                  isCurrent ? "text-[#006FE8]" : "text-[#082B5E] hover:bg-[#EBF7FF]"
                }`;
                return (
                  <div
                    key={nav.label}
                    className="border-b border-[#E5E5E5] last:border-0"
                  >
                    {nav.external ? (
                      <a
                        href={nav.href}
                        className={itemClass}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobile}
                      >
                        {nav.label}
                      </a>
                    ) : (
                      <Link
                        href={nav.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={itemClass}
                        onClick={closeMobile}
                      >
                        {nav.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 pb-4">
                <a
                  href={PRODUCT_URL}
                  onClick={closeMobile}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-md bg-[#006FE8] text-[14px] font-semibold text-white hover:bg-[#0055B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
                >
                  <span>Explore SpineWorkspace</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
