"use client";

import { useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { headerNavigation, type HeaderNavItem } from "@/lib/navigation";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const navigation = headerNavigation;

const PRODUCT_URL = "https://spineworkspace.com";

function isPathMatch(pathname: string, href: string) {
  const cleanHref = href.split(/[?#]/)[0] || "/";
  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

const triggerBase =
  "inline-flex h-10 items-center gap-1 rounded-[10px] px-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none";

function DesktopLink({ nav, pathname }: { nav: HeaderNavItem; pathname: string }) {
  const isCurrent = isPathMatch(pathname, nav.href);
  const linkClass = `${triggerBase} ${
    isCurrent
      ? "bg-[#EBF7FF] font-semibold text-[#006FE8]"
      : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
  }`;
  return (
    <Link href={nav.href} aria-current={isCurrent ? "page" : undefined} className={linkClass}>
      {nav.label}
    </Link>
  );
}

// Desktop dropdown: a button trigger (aria-expanded, aria-controls) that opens
// a panel of plain links. Opens on click/Enter/Space; closes on Escape (focus
// returns to the trigger), outside click and route change. A link list, not
// role=menu.
function DesktopDropdown({
  nav,
  pathname,
  isOpen,
  onOpenChange,
}: {
  nav: HeaderNavItem;
  pathname: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const isCurrent = isPathMatch(pathname, nav.href);
  const sub = nav.submenu ?? [];

  // Close on outside click (pointerdown so it fires before focus shifts).
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onOpenChange]);

  const triggerClass = `${triggerBase} ${
    isCurrent || isOpen
      ? "bg-[#EBF7FF] font-semibold text-[#006FE8]"
      : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
  }`;

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        className={triggerClass}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="true"
        onClick={() => onOpenChange(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Escape" && isOpen) {
            e.preventDefault();
            onOpenChange(false);
            triggerRef.current?.focus();
          }
        }}
      >
        {nav.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 motion-reduce:transition-none ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      {/* Panel is always rendered (so its links are in the static HTML and are
          crawlable) and shown/hidden via the `hidden` attribute, which also
          removes it from the a11y tree and tab order when closed. Absolutely
          positioned, so toggling causes no layout shift. */}
      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[248px] rounded-[14px] border border-[#D9E4EF] bg-white p-2 shadow-[0_12px_32px_rgba(8,43,94,0.12)]"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onOpenChange(false);
            triggerRef.current?.focus();
          }
        }}
      >
        <ul className="flex flex-col">
          {sub.map((link) => {
            const linkCurrent = isPathMatch(pathname, link.href) && !link.href.includes("#");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={linkCurrent ? "page" : undefined}
                  onClick={() => onOpenChange(false)}
                  className={`block rounded-[10px] px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] motion-reduce:transition-none ${
                    linkCurrent
                      ? "bg-[#EBF7FF] text-[#006FE8]"
                      : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function MobileGroup({
  nav,
  pathname,
  isOpen,
  onToggle,
  onNavigate,
}: {
  nav: HeaderNavItem;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = useId();
  const sub = nav.submenu ?? [];
  const isCurrent = isPathMatch(pathname, nav.href);
  return (
    <div className="border-b border-[#E5E5E5] last:border-0">
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded-xl px-2 py-3 text-[15px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] ${
          isCurrent ? "text-[#006FE8]" : "text-[#082B5E] hover:bg-[#EBF7FF]"
        }`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{nav.label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 motion-reduce:transition-none ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <ul id={panelId} hidden={!isOpen} className="overflow-hidden pb-2 pl-3">
        {sub.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="block rounded-xl px-2 py-2.5 text-[14px] font-medium text-[#33465B] hover:bg-[#EBF7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
  // Which desktop dropdown is open (by label); only one at a time.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Which mobile group is expanded (by label).
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!initiallyHidden) return;
    const handler = () => setHeroRevealed(true);
    window.addEventListener("heroPhaseChange", handler);
    return () => window.removeEventListener("heroPhaseChange", handler);
  }, [initiallyHidden]);

  // Route change closes every open dropdown and the mobile panel.
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setOpenMobileGroup(null);
  }, [currentPathname]);

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

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setOpenMobileGroup(null);
  };

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
            {navigation.map((nav) =>
              nav.submenu ? (
                <DesktopDropdown
                  key={nav.label}
                  nav={nav}
                  pathname={currentPathname}
                  isOpen={openDropdown === nav.label}
                  onOpenChange={(open) => setOpenDropdown(open ? nav.label : null)}
                />
              ) : (
                <DesktopLink key={nav.label} nav={nav} pathname={currentPathname} />
              ),
            )}
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
                if (nav.submenu) {
                  return (
                    <MobileGroup
                      key={nav.label}
                      nav={nav}
                      pathname={currentPathname}
                      isOpen={openMobileGroup === nav.label}
                      onToggle={() =>
                        setOpenMobileGroup((cur) => (cur === nav.label ? null : nav.label))
                      }
                      onNavigate={closeMobile}
                    />
                  );
                }
                const isCurrent = isPathMatch(currentPathname, nav.href);
                const itemClass = `block rounded-xl px-2 py-3 text-[15px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] ${
                  isCurrent ? "text-[#006FE8]" : "text-[#082B5E] hover:bg-[#EBF7FF]"
                }`;
                return (
                  <div key={nav.label} className="border-b border-[#E5E5E5] last:border-0">
                    <Link
                      href={nav.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={itemClass}
                      onClick={closeMobile}
                    >
                      {nav.label}
                    </Link>
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
