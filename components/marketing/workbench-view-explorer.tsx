"use client";

import { useId, useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ResponsiveWorkbenchScreenshot } from "@/components/marketing/responsive-workbench-screenshot";
import { WorkbenchShellRecording } from "./workbench-shell-recording";
import { WorkbenchCanvasShowcase } from "./workbench-canvas-showcase";
import { WorkbenchDashboardShowcase } from "./workbench-dashboard-showcase";
import { WorkbenchCustomerJourney } from "./workbench-customer-journey";
import mediaStyles from "./responsive-media.module.css";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  ShieldCheck,
  Layers3,
  Monitor,
  Smartphone,
  Eye,
  Play,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  X,
} from "lucide-react";
import { SHARED_WORKBENCH_SHELL, WORKBENCH_SOURCE_DOMAINS } from "@/lib/workbench-source-views";
import { getWorkbenchCaptureReview } from "@/lib/workbench-capture-review";
import {
  getDomainScreenshotNarrative,
  type WorkbenchScreenshotItem,
} from "@/lib/workbench-screenshots";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";

const DEFAULT_DOMAIN = "founderops";
type ExplorerTab = "dashboard" | "canvas" | "journey" | "screenshot" | "recording" | "inventory";
const linkedTabs = new Map<string, ExplorerTab>([
  ["#workbench-dashboards", "dashboard"],
  ["#workbench-canvas", "canvas"],
  ["#workbench-customer-journey", "journey"],
  ["#workbench-recording", "recording"],
]);

// Only expose public, customer-facing operational domains with verified visual runtime captures
const PUBLIC_WORKBENCH_DOMAINS = WORKBENCH_SOURCE_DOMAINS.filter(
  (item) =>
    item.audience !== "internal" &&
    item.id !== "brandstore" &&
    item.id !== "ops" &&
    item.id !== "founder" &&
    item.id !== "product"
);

const DOMAIN_TO_SOLUTION_PATH: Record<string, string> = {
  // Canonical workbench domain IDs
  founderops: "/solutions/founderops",
  founder: "/solutions/founderops",
  sales: "/solutions/sales",
  marketing: "/solutions/marketing",
  content: "/solutions/content",
  finance: "/solutions/finance",
  "account-success": "/solutions/account-success",
  "technical-account-success": "/solutions/technical-account-success",
  operations: "/solutions/ops",
  bizops: "/solutions/businessops",
  revops: "/solutions/businessops",
  productengineering: "/solutions/productengineering",
  product: "/solutions/productengineering",
  service: "/solutions/service",
  support: "/solutions/support",
  humanresources: "/solutions/humanresources",
  legal: "/solutions/legal",
  "knowledge-management": "/solutions/knowledge-records",
  personal: "/solutions/personal",
  common: "/solutions/personal",
  "business-intelligence": "/solutions/businessops",
  campaigns: "/solutions/marketing",
  "book-of-records": "/solutions/knowledge-records",

  // Corporate & alias solution keys from taxonomy
  "customer-success": "/solutions/account-success",
  "customer-support": "/solutions/support",
  "product-engineering": "/solutions/productengineering",
  "human-resources": "/solutions/humanresources",
  memoryandknowledge: "/solutions/knowledge-records",
  founders: "/solutions/founderops",
  "finance-leaders": "/solutions/finance",
  individual: "/solutions/personal",
  services: "/solutions/service",
  saas: "/solutions/saas",
  "professional-services": "/solutions/professional-services",
  manufacturing: "/solutions/manufacturing",
  retail: "/solutions/retail",
};

export function WorkbenchViewExplorer({
  initialDomain = DEFAULT_DOMAIN,
  compact = false,
  defaultTab = "dashboard",
}: {
  initialDomain?: string;
  compact?: boolean;
  defaultTab?: ExplorerTab;
}) {
  const id = useId();
  const [selected, setSelected] = useState(
    PUBLIC_WORKBENCH_DOMAINS.some((domain) => domain.id === initialDomain)
      ? initialDomain
      : DEFAULT_DOMAIN
  );
  const [activeTab, setActiveTab] = useState<ExplorerTab>(defaultTab);
  const [selectedViewKey, setSelectedViewKey] = useState<string>("primary");
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const recordingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealLinkedView = () => {
      const tab = linkedTabs.get(window.location.hash);
      if (tab) setActiveTab(tab);
    };
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const tab = linkedTabs.get(href);
      if (!tab) return;
      setActiveTab(tab);
      requestAnimationFrame(() => {
        document.getElementById(href.slice(1))?.scrollIntoView({ block: "start" });
      });
    };
    revealLinkedView();
    window.addEventListener("hashchange", revealLinkedView);
    document.addEventListener("click", handleAnchorClick);
    return () => {
      window.removeEventListener("hashchange", revealLinkedView);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    if (activeTab !== "recording") {
      recordingRef.current?.querySelector("video")?.pause();
    }
    if (linkedTabs.get(window.location.hash) === activeTab) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ block: "start" });
    }
  }, [activeTab]);

  useEffect(() => {
    if (!isExpanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isExpanded]);

  const domain = useMemo(
    () => PUBLIC_WORKBENCH_DOMAINS.find((item) => item.id === selected) ?? PUBLIC_WORKBENCH_DOMAINS[0],
    [selected]
  );

  const narrative = useMemo(
    () => getDomainScreenshotNarrative(selected),
    [selected]
  );

  const screenshotOptions = useMemo(() => {
    if (!narrative) return [];
    const options: { key: string; label: string; item: WorkbenchScreenshotItem }[] = [
      { key: "primary", label: narrative.screenshots.primary.title, item: narrative.screenshots.primary },
    ];
    if (narrative.screenshots.dashboard) {
      options.push({ key: "dashboard", label: narrative.screenshots.dashboard.title, item: narrative.screenshots.dashboard });
    }
    if (narrative.screenshots.secondary) {
      options.push({ key: "secondary", label: narrative.screenshots.secondary.title, item: narrative.screenshots.secondary });
    }
    if (narrative.screenshots.twinAction) {
      options.push({ key: "twinAction", label: narrative.screenshots.twinAction.title, item: narrative.screenshots.twinAction });
    }
    return options.filter(({ item }) => {
      const review = getWorkbenchCaptureReview(item.desktop);
      return review && !review.exclude;
    });
  }, [narrative]);

  const currentScreenshotIndex = useMemo(() => {
    const idx = screenshotOptions.findIndex((opt) => opt.key === selectedViewKey);
    return idx >= 0 ? idx : 0;
  }, [screenshotOptions, selectedViewKey]);

  const currentScreenshot = useMemo(() => {
    if (!narrative) return undefined;
    return screenshotOptions[currentScreenshotIndex]?.item ?? screenshotOptions[0]?.item;
  }, [screenshotOptions, currentScreenshotIndex, narrative]);

  const stepScreenshotOption = (delta: number) => {
    if (screenshotOptions.length <= 1) return;
    const nextIdx = (currentScreenshotIndex + delta + screenshotOptions.length) % screenshotOptions.length;
    setSelectedViewKey(screenshotOptions[nextIdx].key);
    setIsMobileView(false);
  };

  const hasMobile = Boolean(currentScreenshot?.mobile);

  const sortedViews = useMemo(() => {
    const featured = new Set(domain.featured);
    return [
      ...domain.views.filter((view) => featured.has(view.id)),
      ...domain.views.filter((view) => !featured.has(view.id)),
    ];
  }, [domain]);

  const visibleViews = compact && !showAll ? sortedViews.slice(0, 6) : sortedViews;

  return (
    <section
      id="workbench-views"
      aria-labelledby={`${id}-title`}
      className="relative overflow-hidden scroll-mt-24 border-y border-[#D6E8F8] bg-[#F0F8FF] px-5 py-16 text-[#082B5E] sm:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header Block */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BBDDF8] bg-white px-3.5 py-1 text-xs font-semibold text-[#006FE8]">
            <span className="h-2 w-2 rounded-full bg-[#006FE8]" />
            Live Workbench Views
          </div>
          <span className="text-xs font-medium text-[#577592]">
            Editable dashboards and Canvas views
          </span>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2
              id={`${id}-title`}
              className="text-[length:min(clamp(2rem,4vw,3.2rem),var(--marketing-heading-size))] font-semibold leading-[1.13] tracking-[-.04em]"
            >
              See your work. Choose your view.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-[#4E607A]">
              Run daily work in editable dashboards. Build documents, tables and context graphs
              in Canvas with reusable UI Library blocks. Both share the blue Workbench shell.
            </p>
          </div>

          <div hidden={activeTab !== "screenshot" && activeTab !== "inventory"} className="w-full max-w-sm">
            <label htmlFor={`${id}-select`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#082B5E]">
              Select a Workbench domain
            </label>
            <select
              id={`${id}-select`}
              value={selected}
              onChange={(event) => {
                setSelected(event.target.value);
                setSelectedViewKey("primary");
                setIsMobileView(false);
                setShowAll(false);
              }}
              className="min-h-12 w-full rounded-xl border border-[#A7C7E9] bg-white px-4 text-sm font-semibold text-[#082B5E] shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
            >
              {PUBLIC_WORKBENCH_DOMAINS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Domain Selector Chips (Touch & Keyboard accessible) */}
        <div hidden={activeTab !== "screenshot" && activeTab !== "inventory"}>
        <div className="mt-5 flex flex-wrap items-center gap-2" role="navigation" aria-label="Workbench Domain Quick Selection">
          {PUBLIC_WORKBENCH_DOMAINS.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected === item.id}
              onClick={() => {
                setSelected(item.id);
                setSelectedViewKey("primary");
                setIsMobileView(false);
                setShowAll(false);
              }}
              className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selected === item.id
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "border border-[#CBE5FA] bg-white text-[#335377] hover:bg-[#EBF7FF] hover:text-[#082B5E]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        </div>

        {/* Dashboard and Canvas are peer views within the shared Workbench. */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#D6E8F8] pb-4">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Workbench Explorer Views">
            {([
              { key: "dashboard", label: "Dashboard views", target: "workbench-dashboards" },
              { key: "canvas", label: "Canvas views", target: "workbench-canvas" },
              { key: "journey", label: "Customer journey", target: "workbench-customer-journey" },
            ] as const).map(({ key, label, target }) => (
              <button key={key} type="button" aria-pressed={activeTab === key} aria-controls={target} onClick={() => setActiveTab(key)} className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8] ${activeTab === key ? "bg-[#006FE8] text-white shadow-sm" : "border border-[#CBE5FA] bg-white text-[#3C577A] hover:bg-[#EBF7FF] hover:text-[#082B5E]"}`}>
                {label}
              </button>
            ))}
            <button
              type="button"
              aria-pressed={activeTab === "screenshot"}
              onClick={() => setActiveTab("screenshot")}
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "screenshot"
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "border border-[#CBE5FA] bg-white text-[#3C577A] hover:bg-[#EBF7FF] hover:text-[#082B5E]"
              }`}
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Live Workbench Views
            </button>
            <button
              type="button"
              aria-pressed={activeTab === "recording"}
              aria-controls="workbench-recording"
              onClick={() => setActiveTab("recording")}
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "recording"
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "border border-[#CBE5FA] bg-white text-[#3C577A] hover:bg-[#EBF7FF] hover:text-[#082B5E]"
              }`}
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Shell recording
            </button>
            <button
              type="button"
              aria-pressed={activeTab === "inventory"}
              onClick={() => setActiveTab("inventory")}
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "inventory"
                  ? "bg-[#006FE8] text-white shadow-sm"
                  : "border border-[#CBE5FA] bg-white text-[#3C577A] hover:bg-[#EBF7FF] hover:text-[#082B5E]"
              }`}
            >
              <Layers3 className="h-4 w-4" aria-hidden="true" />
              View catalog ({domain.views.length})
            </button>
          </div>

          {activeTab === "screenshot" && narrative && screenshotOptions.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {screenshotOptions.map((opt, idx) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => {
                    setSelectedViewKey(opt.key);
                    setIsMobileView(false);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedViewKey === opt.key
                      ? "border border-[#006FE8] bg-[#EBF7FF] text-[#006FE8]"
                      : "border border-[#CBE5FA] bg-white text-[#4A6382] hover:bg-[#F0F8FF]"
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold">0{idx + 1}</span>
                  {opt.label}
                </button>
              ))}

              {screenshotOptions.length > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => stepScreenshotOption(-1)}
                    aria-label="Previous domain screenshot frame"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepScreenshotOption(1)}
                    aria-label="Next domain screenshot frame"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
                  >
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </div>
              )}

              {hasMobile && (
                <div className="ml-2 flex items-center rounded-lg border border-[#CBE5FA] bg-white p-0.5">
                  <button
                    type="button"
                    aria-label="Desktop Viewport (1440x900)"
                    aria-pressed={!isMobileView}
                    onClick={() => setIsMobileView(false)}
                    className={`min-h-11 min-w-11 rounded-md p-3 text-xs transition-colors ${
                      !isMobileView ? "bg-[#006FE8] text-white" : "text-[#587391] hover:text-[#082B5E]"
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Mobile Viewport (390x844)"
                    aria-pressed={isMobileView}
                    onClick={() => setIsMobileView(true)}
                    className={`min-h-11 min-w-11 rounded-md p-3 text-xs transition-colors ${
                      isMobileView ? "bg-[#006FE8] text-white" : "text-[#587391] hover:text-[#082B5E]"
                    }`}
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div hidden={activeTab !== "dashboard"}><WorkbenchDashboardShowcase /></div>
        <div hidden={activeTab !== "canvas"}><WorkbenchCanvasShowcase /></div>
        <div hidden={activeTab !== "journey"}><WorkbenchCustomerJourney /></div>

        {/* WORKBENCH SCREENSHOTS AND DOMAIN VALUE */}
        {activeTab === "screenshot" && (
          <div className="mt-8 space-y-10">
            {!narrative || !currentScreenshot ? (
              <div className="rounded-2xl border border-[#CBE5FA] bg-white p-8 text-center shadow-sm">
                <AlertCircle className="mx-auto h-8 w-8 text-[#577292]" />
                <h3 className="mt-3 text-lg font-semibold text-[#082B5E]">
                  Workbench Capture Not Available
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-[#4E607A]">
                  The view <code>{domain.title}</code> is an internal screen. It does not have an approved public screenshot yet.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab("inventory")}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#006FE8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0055B8]"
                >
                  View Declared Component Catalog <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                {/* Section Header: Domain Tagline & Deep Dive CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-[#006FE8]">
                      How {domain.title} work is organized
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-[#082B5E]">
                      {narrative.tagline}
                    </h3>
                  </div>
                  {!compact && (
                    <Link
                      href={DOMAIN_TO_SOLUTION_PATH[domain.id] ?? "/solutions"}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[#CBE5FA] bg-white px-4 py-2 text-xs font-semibold text-[#006FE8] shadow-xs transition-colors hover:bg-[#EBF7FF]"
                    >
                      Explore {domain.title} Solution <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>

                {/* BENTO GRID: Workbench Showcase & 4-Part Architecture */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                  {/* BENTO CELL 1: Hero Authentic Workbench Screenshot (Spans 2 cols on lg) */}
                  <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white shadow-[0_18px_55px_rgba(0,111,232,.08)] lg:col-span-2">
                    <BorderBeam size={280} duration={14} colorFrom="#006FE8" colorTo="#208050" />
                    {/* Workbench Capture Window Header */}
                    <div className="flex flex-wrap items-center justify-between border-b border-[#D6E8F8] bg-[#F0F8FF] px-4 py-2.5 text-xs sm:px-5 sm:py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                        <span className="ml-3 break-all font-mono text-[11px] font-semibold text-[#5A7391]">
                          {currentScreenshot.route}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="rounded-full border border-[#BBDDF8] bg-white px-2.5 py-0.5 font-semibold text-[#006FE8]">Live Workbench Views</span>
                        <span className="hidden font-mono text-[11px] text-[#7189A6] sm:inline">
                          {isMobileView ? "390 × 844 px (Mobile)" : "1440 × 900 px (Desktop)"}
                        </span>
                        <button
                          type="button"
                          aria-label="Expand Workbench screenshot"
                          onClick={() => setIsExpanded(true)}
                          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-lg border border-[#CBE5FA] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#3A5678] shadow-2xs transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8] focus-visible:outline-2 focus-visible:outline-[#006FE8]"
                          title="Expand screenshot in full size view"
                        >
                          <Maximize2 className="h-3.5 w-3.5 text-[#006FE8]" />
                          <span className="hidden sm:inline">Expand</span>
                        </button>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative flex flex-1 items-center justify-center bg-white p-2 sm:p-4">
                      <ResponsiveWorkbenchScreenshot
                        src={isMobileView && currentScreenshot.mobile ? currentScreenshot.mobile : currentScreenshot.desktop}
                        alt={getWorkbenchCaptureReview(isMobileView && currentScreenshot.mobile ? currentScreenshot.mobile : currentScreenshot.desktop)?.description ?? currentScreenshot.alt}
                        isMobile={isMobileView && Boolean(currentScreenshot.mobile)}
                        priority
                        onClick={() => setIsExpanded(true)}
                      />
                    </div>

                    {/* Image Footer with Real Route Provenance */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D6E8F8] bg-[#F0F8FF] px-4 py-2.5 text-xs text-[#577292] sm:px-5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#006FE8]" />
                        <span>
                          <strong>Workbench view:</strong> {currentScreenshot.title} in{" "}
                          <code>{domain.title}</code> view.
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="hidden text-[11px] text-[#839BB7] sm:inline">
                          Click image to expand
                        </span>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 text-[#208050]" />
                          <span>Captured UI</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BENTO RIGHT STACK: 01 & 02 alongside Hero Screenshot */}
                  <div className="flex flex-col gap-5">
                    {/* BENTO CELL 2: What users see */}
                    <MagicCard className="flex flex-1 flex-col justify-between rounded-2xl border border-[#CBE5FA] bg-white p-5 shadow-sm transition-all hover:border-[#006FE8] hover:shadow-md" gradientColor="rgba(0, 111, 232, 0.08)">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF7FF] text-xs font-bold text-[#006FE8]">
                            01
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                            Visual view
                          </span>
                        </div>
                        <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                          What users see
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                          {getWorkbenchCaptureReview(currentScreenshot.desktop)?.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 border-t border-[#E6F2FC] pt-3 text-[11px] font-semibold text-[#006FE8]">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Shared Workbench navigation</span>
                      </div>
                    </MagicCard>

                    {/* BENTO CELL 3: What they can do */}
                    <MagicCard className="flex flex-1 flex-col justify-between rounded-2xl border border-[#CBE5FA] bg-white p-5 shadow-sm transition-all hover:border-[#006FE8] hover:shadow-md" gradientColor="rgba(0, 111, 232, 0.08)">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF7FF] text-xs font-bold text-[#006FE8]">
                            02
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                            Operator Action
                          </span>
                        </div>
                        <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                          Workflow purpose
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                          {narrative.valueNarrative.whatTheyCanDo}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1.5 border-t border-[#E6F2FC] pt-3 text-[11px] font-semibold text-[#006FE8]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Actions follow workspace policy</span>
                      </div>
                    </MagicCard>
                  </div>

                  {/* BENTO ROW 2: Three equal cards across the 3 columns */}
                  {/* BENTO CELL 4: Manual work reduced */}
                  <MagicCard className="flex flex-col justify-between rounded-2xl border border-[#CBE5FA] bg-white p-5 shadow-sm transition-all hover:border-[#006FE8] hover:shadow-md" gradientColor="rgba(0, 111, 232, 0.08)">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF7FF] text-xs font-bold text-[#006FE8]">
                          03
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                          Efficiency
                        </span>
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                        Work it can simplify
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                        {narrative.valueNarrative.whatManualWorkItReduces}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 border-t border-[#E6F2FC] pt-3 text-[11px] font-semibold text-[#5A7391]">
                      <LayoutDashboard className="h-3.5 w-3.5 text-[#006FE8]" />
                      <span>Connected context across work</span>
                    </div>
                  </MagicCard>

                  {/* BENTO CELL 5: Why it matters */}
                  <MagicCard className="flex flex-col justify-between rounded-2xl border border-[#CBE5FA] bg-white p-5 shadow-sm transition-all hover:border-[#006FE8] hover:shadow-md" gradientColor="rgba(32, 128, 80, 0.08)">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF7FF] text-xs font-bold text-[#208050]">
                          04
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#208050]">
                          Governance
                        </span>
                      </div>
                      <h4 className="mt-3.5 text-base font-bold text-[#082B5E]">
                        Why it matters
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[#4E607A]">
                        {narrative.valueNarrative.whyItMatters}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 border-t border-[#E6F2FC] pt-3 text-[11px] font-semibold text-[#208050]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Auditable Decision Continuity</span>
                    </div>
                  </MagicCard>

                  {/* BENTO CELL 6: Domain Solution Gateway — Pure Ice Blue & White */}
                  <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#96C7F2] bg-gradient-to-br from-[#EBF7FF] via-[#F0F8FF] to-white p-5 text-[#082B5E] shadow-[0_12px_34px_rgba(0,111,232,0.08)]">
                    <BorderBeam size={180} duration={11} colorFrom="#006FE8" colorTo="#38BDF8" />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-[#BBDDF8] bg-white px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[#006FE8] uppercase">
                          Domain Catalog
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#006FE8]">
                          {domain.views.length} Views
                        </span>
                      </div>
                      <h4 className="mt-3 text-lg font-bold text-[#082B5E]">
                        {compact ? `${domain.title} View Catalog` : `${domain.title} Solution`}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[#355579]">
                        See the views, the tool connections, and the approved workflows for {domain.title}.
                      </p>
                    </div>
                    {compact ? (
                      <button
                        type="button"
                        onClick={() => setActiveTab("inventory")}
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#0055B8]"
                      >
                        Browse {domain.views.length} Declared Views <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <Link
                        href={DOMAIN_TO_SOLUTION_PATH[domain.id] ?? "/solutions"}
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#0055B8]"
                      >
                        Open {domain.title} Deep-Dive <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Full-Size Interactive Lightbox Modal */}
                {isExpanded && (
                  <dialog
                    ref={dialogRef}
                    onClose={() => setIsExpanded(false)}
                    onKeyDown={(event) => {
                      if (event.key !== "Tab") return;
                      const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]');
                      const first = controls[0];
                      const last = controls[controls.length - 1];
                      if (!first || !last) return;
                      if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                      } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                      }
                    }}
                    aria-label="Full size authentic Workbench screenshot"
                    className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-screen max-w-none items-center justify-center bg-[#082B5E]/85 p-3 backdrop-blur-sm sm:p-6 lg:p-10"
                    onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
                  >
                    <div
                      className="relative flex h-full min-h-0 w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[#D6E8F8] bg-[#F0F8FF] px-5 py-3 text-xs">
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                          <span className="ml-3 break-all font-mono text-xs font-semibold text-[#5A7391]">
                            {currentScreenshot.route}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-[#BBDDF8] bg-white px-2.5 py-0.5 font-semibold text-[#006FE8]">
                            Live Workbench Views
                          </span>
                          <span className="hidden font-mono text-xs text-[#7189A6] sm:inline">
                            {isMobileView ? "390 × 844 px" : "1440 × 900 px"} · Fit to screen
                          </span>
                          <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            className="min-h-11 min-w-11 rounded-lg p-3 text-[#5A7391] transition-colors hover:bg-[#EBF7FF] hover:text-[#082B5E] focus-visible:outline-2 focus-visible:outline-[#006FE8]"
                            aria-label="Close full size view"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className={`${mediaStyles.fitRegion} min-h-0 flex-1 overflow-auto bg-[#F0F8FF] p-2 sm:p-4`}>
                        <img
                          src={isMobileView && currentScreenshot.mobile ? currentScreenshot.mobile : currentScreenshot.desktop}
                          alt={getWorkbenchCaptureReview(isMobileView && currentScreenshot.mobile ? currentScreenshot.mobile : currentScreenshot.desktop)?.description ?? currentScreenshot.alt}
                          className={mediaStyles.fitImage}
                        />
                      </div>
                    </div>
                  </dialog>
                )}
              </>
            )}
          </div>
        )}

        <div ref={recordingRef} hidden={activeTab !== "recording"} className="mt-8 scroll-mt-24">
          <WorkbenchShellRecording />
        </div>

        {/* DECLARED VIEW INVENTORY */}
        {activeTab === "inventory" && (
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#CBE1F5] bg-white shadow-[0_18px_65px_rgba(25,80,140,.07)] lg:grid-cols-[275px_minmax(0,1fr)]">
            <aside
              aria-label="Common Workbench navigation structure"
              className="border-b border-[#D6E8F8] bg-[#F8FBFF] p-5 lg:border-b-0 lg:border-r"
            >
              <div className="flex items-center gap-2 border-b border-[#D6E8F8] pb-4 text-sm font-semibold">
                <LayoutDashboard className="h-5 w-5 text-[#006FE8]" aria-hidden="true" />
                SpineWorkspace
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#577592]">
                Shared navigation
              </p>
              <nav className="mt-3 space-y-3" aria-label="Workbench navigation groups">
                {SHARED_WORKBENCH_SHELL.map((group) => (
                  <div key={group.title}>
                    <p
                      className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                        group.title === "Work"
                          ? "bg-[#E1F0FF] text-[#0055B8]"
                          : "text-[#123A68]"
                      }`}
                    >
                      {group.title}
                    </p>
                    {group.items.length > 0 && (
                      <p className="px-3 py-1 text-xs leading-5 text-[#5B728E]">
                        {group.title === "Work"
                          ? domain.title + " views"
                          : group.items.join(" · ")}
                      </p>
                    )}
                  </div>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 p-5 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[.15em] text-[#2461AE]">
                    Work / {domain.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#082B5E]">
                    {domain.title} Workbench
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E607A]">{domain.benefit}</p>
                </div>
                <span className="rounded-full border border-[#CCE3F5] bg-[#F0F8FF] px-3 py-1.5 text-xs font-semibold text-[#285687]">
                  {domain.views.length} defined views
                </span>
              </div>

              <div
                className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
                aria-label={`${domain.title} view definitions`}
              >
                {visibleViews.map((view) => (
                  <div
                    key={view.id}
                    className="rounded-xl border border-[#D7E7F6] bg-[#FBFDFF] p-4 transition-colors hover:border-[#B5D5F5]"
                  >
                    <div className="flex items-start gap-3">
                      <Layers3
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#006FE8]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#10355E]">{view.label}</p>
                        <p className="mt-1 text-xs capitalize text-[#6A7E96]">
                          {view.kind === "runtime"
                            ? "L1 runtime binding"
                            : `${view.kind} view`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {compact && sortedViews.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  className="mt-5 rounded-lg px-1 py-2 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
                >
                  {showAll
                    ? "Show fewer views"
                    : `Show all ${sortedViews.length} defined views`}
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-4 border-t border-[#D6E8F8] pt-5 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-xs leading-6 text-[#596F89]">
            <ShieldCheck className="mr-1 inline h-4 w-4 align-[-3px] text-[#006FE8]" aria-hidden="true" />
            Actual application captures with QA fixture data. Figures and host badges are not
            verified live customer telemetry, connection proof or evidence of completed actions.
          </p>
          <Link
            href="/product/the-adaptive-workspace"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0055B8] hover:underline"
          >
            See how the workspace fits the job <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
