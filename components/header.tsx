"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import {
  headerNavigation,
  type HeaderNavItem,
  type HeaderSubLink,
} from "@/lib/navigation";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const navigation = headerNavigation;

const PRODUCT_URL = "https://spineworkspace.com";

// Hover-intent timers: a short delay before opening (so a cursor crossing the
// trigger does not flash the panel) and a longer delay before closing (so the
// cursor can travel from the trigger down into the panel without it snapping
// shut). Matches the old Magic UI Pro mega-menu behaviour.
const ENTER_DELAY = 150;
const LEAVE_DELAY = 280;

function isPathMatch(pathname: string, href: string) {
  const cleanHref = href.split(/[?#]/)[0] || "/";
  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

// A submenu entry is "current" only on a real page match, never on an in-page
// anchor (so #our-story does not light up on every /company visit).
function isSubCurrent(pathname: string, link: HeaderSubLink) {
  return isPathMatch(pathname, link.href) && !link.href.includes("#");
}

const triggerBase =
  "inline-flex h-10 items-center gap-1 rounded-[10px] px-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none";

// One Magic UI mega-menu entry: an icon tile + title + one-line description,
// wrapped in a single <Link>. The TITLE is the first text node inside the
// anchor, so the corporate-coverage gate (which prefix-matches the anchor's
// normalised inner text against the sub-link label) still passes with the
// description appended after it.
function MenuEntry({
  link,
  pathname,
  onNavigate,
}: {
  link: HeaderSubLink;
  pathname: string;
  onNavigate: () => void;
}) {
  const Icon = link.icon;
  const featured = Boolean(link.featured);
  const active = isSubCurrent(pathname, link);
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={`group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-150 hover:border-[#CBE5FA] hover:bg-[#EBF7FF]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none ${
        featured
          ? "border-[#CBE5FA] bg-gradient-to-br from-[#EBF7FF] via-[#F4FAFF] to-white p-4 shadow-2xs"
          : ""
      } ${active ? "border-[#CBE5FA] bg-[#F0F8FF]" : ""}`}
    >
      {Icon && (
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors motion-reduce:transition-none ${
            featured || active
              ? "bg-[#006FE8] text-white"
              : "bg-[#F0F8FF] text-[#006FE8] group-hover:bg-white group-hover:shadow-2xs"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
      )}
      <span className="min-w-0">
        <span
          className={`block font-semibold leading-snug text-[#082B5E] ${
            featured ? "text-[16px]" : "text-[15px]"
          }`}
        >
          {link.label}
        </span>
        {link.desc && (
          <span className="mt-1 block text-[13px] leading-5 text-[#4E607A]">
            {link.desc}
          </span>
        )}
      </span>
    </Link>
  );
}

// Desktop dropdown: a button trigger (aria-expanded, aria-controls, aria-haspopup)
// that opens a Magic UI mega-menu panel. Opens on hover (with an intent delay)
// and on click / Enter / Space; closes on Escape (focus returns to the trigger),
// outside click and route change. The panel is ALWAYS rendered and shown/hidden
// with the `hidden` attribute, so its links are in the static HTML (crawlable,
// gate-verifiable) and toggling causes no layout shift. The featured "overview"
// entry spans both columns; the remaining entries fill a two-column grid.
function DesktopDropdown({
  nav,
  pathname,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  onEnter,
  onLeave,
  triggerRef,
}: {
  nav: HeaderNavItem;
  pathname: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: (restoreFocus: boolean) => void;
  onToggle: () => void;
  onEnter: () => void;
  onLeave: () => void;
  triggerRef: (node: HTMLButtonElement | null) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const reduce = useReducedMotion();
  const isCurrent = isPathMatch(pathname, nav.href);
  const sub = nav.submenu ?? [];
  const featured = sub.find((s) => s.featured);
  const rest = sub.filter((s) => !s.featured);

  // Close on outside click (pointerdown so it fires before focus shifts).
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        onClose(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onClose]);

  const triggerClass = `${triggerBase} ${
    isCurrent || isOpen
      ? "bg-[#EBF7FF] font-semibold text-[#006FE8]"
      : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
  }`;

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        ref={triggerRef}
        type="button"
        className={triggerClass}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="true"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Escape" && isOpen) {
            e.preventDefault();
            onClose(true);
            return;
          }
          if (e.key === "ArrowDown") {
            // ArrowDown always opens (never closes) the menu.
            e.preventDefault();
            onOpen();
            return;
          }
          if (e.key === "Enter" || e.key === " ") {
            // Explicitly toggle on keydown and prevent the browser's native
            // activation (which fires a click on keyup for Space / keydown for
            // Enter) so the menu is not toggled twice. Guarantees Enter AND
            // Space activate the trigger regardless of UA click synthesis.
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {nav.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 motion-reduce:transition-none ${
            isOpen ? "rotate-180 text-[#006FE8]" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        hidden={!isOpen}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onClose(true);
          }
        }}
        className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(560px,calc(100vw-32px))]"
      >
        <motion.div
          key={isOpen ? "open" : "closed"}
          initial={reduce || !isOpen ? false : { opacity: 0, y: 6 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={reduce ? { duration: 0 } : { duration: 0.16, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white/98 p-3.5 shadow-[0_20px_50px_rgba(8,43,94,0.12)] backdrop-blur-md"
        >
          <ul className="grid grid-cols-2 gap-2.5">
            {featured && (
              <li className="col-span-2">
                <MenuEntry
                  link={featured}
                  pathname={pathname}
                  onNavigate={() => onClose(false)}
                />
              </li>
            )}
            {rest.map((link) => (
              <li key={link.href}>
                <MenuEntry
                  link={link}
                  pathname={pathname}
                  onNavigate={() => onClose(false)}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

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

// Mobile group: an expandable accordion in the same Magic UI style, with the
// same entries (icon + title; description optional). The disclosure button is
// ICON-ONLY (its label is an aria-label, not inner text) so the shared-header
// gate's ordered trigger-label list stays exactly the three desktop triggers.
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
  const reduce = useReducedMotion();
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
        aria-label={isOpen ? `Collapse ${nav.label}` : `Expand ${nav.label}`}
        onClick={onToggle}
      >
        <span aria-hidden>{nav.label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 motion-reduce:transition-none ${
            isOpen ? "rotate-180 text-[#006FE8]" : ""
          }`}
          aria-hidden
        />
      </button>
      <motion.ul
        id={panelId}
        hidden={!isOpen}
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden pb-2"
      >
        {sub.map((link) => (
          <li key={link.href}>
            <MenuEntry link={link} pathname={pathname} onNavigate={onNavigate} />
          </li>
        ))}
      </motion.ul>
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
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverCapable = useRef(false);
  const reduce = useReducedMotion();

  // Only use hover-intent on devices that actually hover (desktop pointer);
  // touch devices fall back to click/tap toggling.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      hoverCapable.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const clearTimers = useCallback(() => {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

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

  const closeDropdown = useCallback((restoreFocus: boolean) => {
    clearTimers();
    setOpenDropdown((current) => {
      if (restoreFocus && current) triggerRefs.current[current]?.focus();
      return null;
    });
  }, [clearTimers]);

  const openDropdownFor = useCallback((label: string) => {
    clearTimers();
    setOpenDropdown(label);
  }, [clearTimers]);

  const toggleDropdown = useCallback((label: string) => {
    clearTimers();
    setOpenDropdown((current) => (current === label ? null : label));
  }, [clearTimers]);

  const handleEnter = useCallback((label: string) => {
    if (!hoverCapable.current) return;
    clearTimers();
    enterTimer.current = setTimeout(() => setOpenDropdown(label), ENTER_DELAY);
  }, [clearTimers]);

  const handleLeave = useCallback(() => {
    if (!hoverCapable.current) return;
    clearTimers();
    leaveTimer.current = setTimeout(() => setOpenDropdown(null), LEAVE_DELAY);
  }, [clearTimers]);

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

      {/* Dimming scrim behind an open desktop mega-menu. */}
      {openDropdown && heroRevealed && (
        <div
          className="fixed inset-0 z-40 hidden bg-[#082B5E]/15 backdrop-blur-[1px] lg:block"
          onClick={() => closeDropdown(false)}
          aria-hidden
        />
      )}

      <motion.header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-50"
        onMouseEnter={clearTimers}
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
                  onOpen={() => openDropdownFor(nav.label)}
                  onClose={closeDropdown}
                  onToggle={() => toggleDropdown(nav.label)}
                  onEnter={() => handleEnter(nav.label)}
                  onLeave={handleLeave}
                  triggerRef={(node) => {
                    triggerRefs.current[nav.label] = node;
                  }}
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
