"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workspaceEntryLinks } from "@/lib/workspace-entry";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { IntegrationMarkGroups } from "@/components/marketing/integration-nav-marks";
import {
  DOCS_URL,
  headerNavigation,
  type NavItem,
  type NavItemChild,
  type NavLink,
} from "@/lib/navigation";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const navigation = headerNavigation;

const ENTER_DELAY = 150;
const LEAVE_DELAY = 280;

function menuIdFor(label: string) {
  return `mega-${label.replace(/\s+/g, "-").toLowerCase()}`;
}

function hasMenu(nav: NavItem) {
  return Boolean(
    nav.items ||
    nav.groups ||
    nav.featured ||
    nav.supporting ||
    nav.menuFooter ||
    nav.connectorMarks?.length ||
    nav.kindMarks?.length,
  );
}

function isWideMenu(nav: NavItem) {
  return Boolean(
    nav.featured ||
    nav.supporting ||
    nav.menuFooter ||
    nav.connectorMarks?.length,
  );
}

const entryClass =
  "group flex h-full items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-150 hover:border-[#CBE5FA] hover:bg-[#EBF7FF]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none";

function isPathMatch(pathname: string, href: string) {
  const cleanHref = href.split(/[?#]/)[0] || "/";
  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

function isNavActive(pathname: string, nav: NavItem) {
  if (isPathMatch(pathname, nav.href)) return true;
  if (nav.featured && isPathMatch(pathname, nav.featured.href)) return true;
  if (nav.items?.some((item) => isPathMatch(pathname, item.href))) return true;
  if (nav.supporting?.items.some((item) => isPathMatch(pathname, item.href))) return true;
  return false;
}

function MenuEntry({
  item,
  featured = false,
  pathname = "",
}: {
  item: NavItemChild;
  featured?: boolean;
  pathname?: string;
}) {
  const Icon = item.icon;
  const active = pathname ? isPathMatch(pathname, item.href) : false;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`${entryClass} ${featured ? "border-[#CBE5FA] bg-gradient-to-br from-[#EBF7FF] via-[#F4FAFF] to-white p-4 shadow-2xs" : ""} ${
        active ? "border-[#CBE5FA] bg-[#F0F8FF]" : ""
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
          featured || active
            ? "bg-[#006FE8] text-white"
            : "bg-[#F0F8FF] text-[#006FE8] group-hover:bg-white group-hover:shadow-2xs"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0">
        <span
          className={`block font-semibold leading-snug text-[#082B5E] ${featured ? "text-[17px]" : "text-[15px]"}`}
        >
          {item.name}
        </span>
        {item.desc && (
          <span className="mt-1 block text-[13px] leading-5 text-[#4E607A]">
            {item.desc}
          </span>
        )}
      </span>
    </Link>
  );
}

function FooterLinks({
  links,
  onNavigate,
}: {
  links: NavLink[];
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 rounded-md text-[13px] font-semibold leading-5 text-[#006FE8] transition-colors duration-150 hover:text-[#0055B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            {link.name}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function WidePanel({
  nav,
  menuId,
  pathname,
  onNavigate,
}: {
  nav: NavItem;
  menuId: string;
  pathname: string;
  onNavigate: () => void;
}) {
  const reduce = useReducedMotion();
  const productEntries = nav.items ?? [];

  return (
    <motion.div
      id={menuId}
      aria-label={`${nav.label}`}
      initial={reduce ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduce ? { duration: 0 } : { duration: 0.16, ease: "easeOut" }
      }
      className="absolute left-1/2 top-full z-50 w-[min(980px,calc(100vw-32px))] -translate-x-1/2 px-0 pt-2"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) onNavigate();
      }}
    >
      <div className="flex max-h-[calc(100dvh-88px)] w-full flex-col overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white/98 shadow-[0_20px_50px_rgba(8,43,94,0.12)] backdrop-blur-md">
        <div className="min-h-0 overflow-x-hidden overflow-y-auto p-5 md:p-6">
          {nav.connectorMarks && nav.connectorMarks.length > 0 ? (
            <IntegrationMarkGroups
              connectors={nav.connectorMarks}
              kinds={nav.kindMarks}
            />
          ) : nav.featured ? (
            <ul className="grid grid-cols-2 gap-3.5">
              <li className="col-span-2">
                <MenuEntry item={nav.featured} featured pathname={pathname} />
              </li>
              {productEntries.map((item) => (
                <li key={item.name}>
                  <MenuEntry item={item} pathname={pathname} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid grid-cols-2 gap-3.5 xl:grid-cols-3">
              {productEntries.map((item) => (
                <li key={item.name}>
                  <MenuEntry item={item} pathname={pathname} />
                </li>
              ))}
            </ul>
          )}
          {nav.supporting && (
            <div className="mt-5 border-t border-[#D9E4EF] pt-4">
              <p
                id={`${menuId}-supporting`}
                className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#4E607A]"
              >
                {nav.supporting.label}
              </p>
              <ul
                aria-labelledby={`${menuId}-supporting`}
                className="mt-2.5 flex flex-wrap gap-1.5"
              >
                {nav.supporting.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      aria-current={isPathMatch(pathname, item.href) ? "page" : undefined}
                      className="inline-flex items-center rounded-lg border border-[#E2EDF8] bg-[#F8FBFF] px-3 py-1.5 text-[13px] font-medium leading-5 text-[#082B5E] transition-colors duration-150 hover:border-[#CBE5FA] hover:bg-[#EBF7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {nav.menuFooter && nav.menuFooter.length > 0 && (
          <div className="mt-0 shrink-0 border-t border-[#D9E4EF] bg-[#F8FBFF] px-5 py-3.5 md:px-6">
            <FooterLinks links={nav.menuFooter} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CompactPanel({
  nav,
  menuId,
  pathname,
  onNavigate,
}: {
  nav: NavItem;
  menuId: string;
  pathname: string;
  onNavigate: () => void;
}) {
  const reduce = useReducedMotion();
  if (!nav.items?.length) return null;
  return (
    <motion.div
      id={menuId}
      aria-label={nav.label}
      initial={reduce ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduce ? { duration: 0 } : { duration: 0.16, ease: "easeOut" }
      }
      className="absolute left-0 top-full z-50 w-[min(380px,calc(100vw-32px))] pt-2"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) onNavigate();
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white/98 p-3.5 shadow-[0_20px_50px_rgba(8,43,94,0.12)] backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between border-b border-[#EBF3FA] px-2.5 pb-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#006FE8]">
            {nav.label}
          </span>
          <Link
            href={nav.href}
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#4E607A] hover:text-[#006FE8]"
          >
            Overview <ArrowRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>
        <ul className="flex flex-col gap-1">
          {nav.items.map((item) => (
            <li key={item.name}>
              <MenuEntry item={item} pathname={pathname} />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function NavTrigger({
  nav,
  pathname,
  activeMenu,
  onEnter,
  onLeave,
  onToggle,
  triggerRef,
}: {
  nav: NavItem;
  pathname: string;
  activeMenu: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
  onToggle: (label: string) => void;
  triggerRef: (node: HTMLButtonElement | null) => void;
}) {
  const isOpen = activeMenu === nav.label;
  const isCurrent = isNavActive(pathname, nav);
  const menuId = menuIdFor(nav.label);
  const wide = isWideMenu(nav);
  const hasDropdown = hasMenu(nav);

  if (!hasDropdown) {
    const linkClass = `inline-flex h-10 items-center rounded-[10px] px-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none ${
      isCurrent
        ? "bg-[#EBF7FF] font-semibold text-[#006FE8]"
        : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
    }`;
    if (nav.external) {
      return (
        <a
          href={nav.href}
          className={linkClass}
          onMouseEnter={onLeave}
          target="_blank"
          rel="noopener noreferrer"
        >
          {nav.label}
        </a>
      );
    }
    return (
      <Link
        href={nav.href}
        aria-current={isCurrent ? "page" : undefined}
        className={linkClass}
        onMouseEnter={onLeave}
      >
        {nav.label}
      </Link>
    );
  }

  return (
    <div
      className={wide ? "static" : "relative"}
      onMouseEnter={() => onEnter(nav.label)}
      onMouseLeave={onLeave}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        id={`${menuId}-trigger`}
        onClick={() => onToggle(nav.label)}
        className={`inline-flex h-10 items-center gap-1 rounded-[10px] px-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2 motion-reduce:transition-none ${
          isOpen || isCurrent
            ? "bg-[#EBF7FF] font-semibold text-[#082B5E]"
            : "text-[#33465B] hover:bg-[#F3F8FD] hover:text-[#082B5E]"
        }`}
      >
        {nav.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-180 text-[#006FE8]" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen && wide && (
        <WidePanel
          nav={nav}
          menuId={menuId}
          pathname={pathname}
          onNavigate={() => onToggle(nav.label)}
        />
      )}
      {isOpen && !wide && (
        <CompactPanel
          nav={nav}
          menuId={menuId}
          pathname={pathname}
          onNavigate={() => onToggle(nav.label)}
        />
      )}
    </div>
  );
}

function MobileItemLink({
  item,
  onNavigate,
}: {
  item: NavItemChild;
  onNavigate: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="flex items-start gap-3 rounded-xl px-2 py-2.5 text-[#082B5E] hover:bg-[#EBF7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
    >
      <Icon
        className="mt-0.5 h-5 w-5 shrink-0 text-[#006FE8]"
        strokeWidth={1.75}
        aria-hidden
      />
      <span className="min-w-0">
        <span className="block text-[15px] font-semibold leading-snug">
          {item.name}
        </span>
        {item.desc && (
          <span className="mt-0.5 block text-[13px] leading-5 text-[#33465B]">
            {item.desc}
          </span>
        )}
      </span>
    </Link>
  );
}

export function Header({
  initiallyHidden = false,
}: {
  initiallyHidden?: boolean;
}) {
  const currentPathname = usePathname() ?? "";
  const authLinks = workspaceEntryLinks(currentPathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(!initiallyHidden);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverCapable = useRef(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const reduce = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      hoverCapable.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!initiallyHidden) return;
    const handler = () => setHeroRevealed(true);
    window.addEventListener("heroPhaseChange", handler);
    return () => window.removeEventListener("heroPhaseChange", handler);
  }, [initiallyHidden]);

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

  const closeDesktopMenu = useCallback((restoreFocus: boolean) => {
    setActiveMenu((current) => {
      if (restoreFocus && current) triggerRefs.current[current]?.focus();
      return null;
    });
  }, []);

  const handleEnter = useCallback(
    (label: string) => {
      if (!hoverCapable.current) return;
      clearTimers();
      if (activeMenu && activeMenu !== label) {
        setActiveMenu(label);
        return;
      }
      enterTimer.current = setTimeout(() => setActiveMenu(label), ENTER_DELAY);
    },
    [activeMenu, clearTimers],
  );

  const handleLeave = useCallback(() => {
    if (!hoverCapable.current) return;
    clearTimers();
    leaveTimer.current = setTimeout(() => setActiveMenu(null), LEAVE_DELAY);
  }, [clearTimers]);

  const handleToggle = useCallback(
    (label: string) => {
      clearTimers();
      setActiveMenu((current) => (current === label ? null : label));
    },
    [clearTimers],
  );

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (activeMenu) {
        const label = activeMenu;
        setActiveMenu(null);
        triggerRefs.current[label]?.focus();
      }
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeMenu, mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const id = requestAnimationFrame(() => {
      const first =
        mobilePanelRef.current?.querySelector<HTMLElement>("a[href], button");
      first?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const panel = mobilePanelRef.current;
    if (!panel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = [
        ...panel.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
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
      {activeMenu && heroRevealed && (
        <div
          className="fixed inset-0 z-40 bg-[#082B5E]/20 backdrop-blur-[2px]"
          onClick={() => closeDesktopMenu(false)}
        />
      )}

      <motion.header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-50"
        onMouseEnter={clearTimers}
        initial={
          initiallyHidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }
        }
        animate={
          heroRevealed ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }
        }
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

        <nav className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex h-10 shrink-0 items-center gap-2.5 rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
          >
            <SpineLogo
              className="h-8 w-8 shrink-0 text-[#082B5E]"
              variant="on-light"
            />
            <span className="text-[17px] font-semibold leading-none tracking-[-0.04em] text-[#082B5E]">
              Spine <span className="text-[#006FE8]">InnovTech</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((nav) => (
              <NavTrigger
                key={nav.label}
                nav={nav}
                pathname={currentPathname}
                activeMenu={activeMenu}
                onEnter={handleEnter}
                onLeave={handleLeave}
                onToggle={handleToggle}
                triggerRef={(node) => {
                  triggerRefs.current[nav.label] = node;
                }}
              />
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <Link
              href="/product"
              className="inline-flex h-10 items-center rounded-[10px] px-3 text-[15px] font-semibold text-[#082B5E] hover:bg-[#F3F6F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
            >
              SpineWorkspace
            </Link>
            <a href={authLinks.login} className="inline-flex h-10 items-center rounded-[10px] px-3 text-[14px] font-semibold text-[#082B5E] hover:bg-[#F3F6F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2">
              Sign in
            </a>
            <Button
              className="h-10 rounded-[10px] bg-[#006FE8] px-4 text-[14px] font-semibold text-white hover:bg-[#0055B8]"
              asChild
            >
              <a href={authLinks.signup}>Sign up</a>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-[#082B5E] xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            initial={reduce ? false : { height: 0 }}
            animate={{ height: "auto" }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.2, ease: "easeInOut" }
            }
            className="max-h-[calc(100dvh-64px)] overflow-x-hidden overflow-y-auto border-t border-[#D9E4EF] bg-white xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col px-4 py-3">
              {navigation.map((nav) => {
                const hasDropdown = hasMenu(nav);
                const isExpanded = mobileExpanded === nav.label;
                const panelId = `mobile-${menuIdFor(nav.label)}`;
                const entries = [
                  ...(nav.featured ? [nav.featured] : []),
                  ...(nav.items ?? []),
                ];
                return (
                  <div
                    key={nav.label}
                    className="border-b border-[#E5E5E5] last:border-0"
                  >
                    <div className="flex items-center justify-between py-3">
                      {nav.external ? (
                        <a
                          href={nav.href}
                          className="text-[15px] font-semibold text-[#082B5E]"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobile}
                        >
                          {nav.label}
                        </a>
                      ) : (
                        <Link
                          href={nav.href}
                          className="rounded-md text-[15px] font-semibold text-[#082B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
                          onClick={closeMobile}
                        >
                          {nav.label}
                        </Link>
                      )}
                      {hasDropdown && (
                        <button
                          type="button"
                          className="rounded-md p-1.5 text-[#082B5E] hover:bg-[#EBF7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : nav.label)
                          }
                          aria-expanded={isExpanded}
                          aria-controls={panelId}
                          aria-label={
                            isExpanded
                              ? `Collapse ${nav.label}`
                              : `Expand ${nav.label}`
                          }
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
                            aria-hidden
                          />
                        </button>
                      )}
                    </div>

                    {hasDropdown && (
                      <div id={panelId} hidden={!isExpanded} className="mb-3">
                        {nav.connectorMarks && nav.connectorMarks.length > 0 ? (
                          <IntegrationMarkGroups
                            connectors={nav.connectorMarks}
                            kinds={nav.kindMarks}
                          />
                        ) : entries.length > 0 ? (
                          <ul className="flex flex-col">
                            {entries.map((item) => (
                              <li key={`${item.name}-${item.href}`}>
                                <MobileItemLink
                                  item={item}
                                  onNavigate={closeMobile}
                                />
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {nav.supporting && (
                          <div className="mt-2 border-t border-[#E5E5E5] pt-2">
                            <p className="px-2 py-1 text-[13px] font-semibold text-[#082B5E]">
                              {nav.supporting.label}
                            </p>
                            <ul>
                              {nav.supporting.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    onClick={closeMobile}
                                    className="block rounded-lg px-2 py-2 text-[14px] font-medium leading-5 text-[#33465B] hover:bg-[#EBF7FF] hover:text-[#082B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {nav.groups?.map((group) => (
                          <div key={group.label} className="mt-2">
                            <p className="px-2 py-1 text-[13px] font-semibold text-[#082B5E]">
                              {group.label}
                            </p>
                            <ul>
                              {group.items.map((item) => (
                                <li key={item.name}>
                                  <MobileItemLink
                                    item={item}
                                    onNavigate={closeMobile}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {nav.menuFooter && nav.menuFooter.length > 0 && (
                          <div className="mt-2 border-t border-[#E5E5E5] px-2 pt-3">
                            <FooterLinks
                              links={nav.menuFooter}
                              onNavigate={closeMobile}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 grid grid-cols-2 gap-2 pb-4">
                <a href={authLinks.signup} onClick={closeMobile} className="col-span-2 flex h-10 items-center justify-center rounded-md bg-[#006FE8] text-[14px] font-semibold text-white hover:bg-[#0055B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8] focus-visible:ring-offset-2">Sign up</a>
                <a href={authLinks.login} onClick={closeMobile} className="flex h-10 items-center justify-center rounded-md border border-[#D9E4EF] text-[14px] font-semibold text-[#082B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]">Sign in</a>
                <Link
                  href="/product"
                  className="flex h-10 items-center justify-center rounded-md border border-[#D9E4EF] text-[14px] font-semibold text-[#082B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
                  onClick={closeMobile}
                >
                  SpineWorkspace
                </Link>
                <Link
                  href={DOCS_URL}
                  className="flex h-10 items-center justify-center rounded-md border border-[#D9E4EF] text-[14px] font-semibold text-[#082B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
                  onClick={closeMobile}
                >
                  Docs
                </Link>
                <Link
                  href="/contact"
                  className="flex h-10 items-center justify-center rounded-md border border-[#D9E4EF] text-[14px] font-semibold text-[#082B5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]"
                  onClick={closeMobile}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
