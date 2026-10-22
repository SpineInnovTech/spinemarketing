"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Filter,
  LayoutDashboard,
  Maximize2,
  PlusCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import mediaStyles from "./responsive-media.module.css";
import { WorkbenchCapturePreview, type CaptureFrame } from "./workbench-capture-preview";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";

const dashboardViews = [
  {
    id: "overview",
    step: "01",
    label: "Operational dashboard",
    route: "/workspace/work/service/dashboard",
    focusBadge: "Full Dashboard & Queue",
    title: "Daily work, in one dashboard.",
    detail:
      "Review Customer Service & Support records, KPIs and items needing attention. Search, filter and inspect without leaving the Workbench.",
    whatChanges: "Shows 2 tracked Spine context items (tkt-501, tkt-502), readiness state (92%), and direct Review Plan / View Evidence controls.",
    governanceNote: "Source records remain authoritative; dashboard actions respect workspace policy.",
  },
  {
    id: "editing",
    step: "02",
    label: "Edit a local draft",
    route: "/workspace/work/service/dashboard?edit=DRAFT-7725",
    focusBadge: "Focused Zoom · Inline Draft Editor",
    title: "Edit the draft. Keep the context.",
    detail:
      "Update a local draft’s title and notes beside its owner, date and status. Connected source records stay under the authorized workflow.",
    whatChanges: "Opens inline editor for DRAFT-7725 (SSO follow-up — Acme Corporation) while keeping the live queue visible below.",
    governanceNote: "Edits remain in the scoped local outbox until reviewed.",
  },
  {
    id: "draft",
    step: "03",
    label: "Create a draft",
    route: "/workspace/work/service/dashboard?modal=new-draft",
    focusBadge: "Focused Zoom · Draft Creation Modal",
    title: "Capture the next item.",
    detail:
      "Create a local draft with a title, owner and date. Update working status; approvals and execution follow the governed action path.",
    whatChanges: "Captures Title, Owner (Support Lead), Target Date, and Category before saving to the local outbox.",
    governanceNote: "Creating a local draft never mutates external systems without authorization.",
  },
  {
    id: "filter",
    step: "04",
    label: "Search and filter",
    route: "/workspace/work/service/dashboard?q=SSO",
    focusBadge: "Focused Zoom · Live Table Filter",
    title: "Find the work that needs attention.",
    detail:
      "Search records and filter by status while the dashboard stays in place.",
    whatChanges: "Filters the queue by query 'SSO' and status pills (All, Review, In Progress, Approved) to isolate tkt-501 immediately.",
    governanceNote: "Instant client-side filtering over permitted workspace context.",
  },
  {
    id: "workbench",
    step: "05",
    label: "Workbench shell",
    route: "/workspace/work/account-success",
    focusBadge: "Role Shell · Account Success",
    title: "The role-based operating shell.",
    detail:
      "The Account Success shell keeps records, Inspect and Ask Twin together. Metrics without a source binding remain unbound.",
    whatChanges: "Displays Spine Fabric Live View records (Acme Renewal Contract, Expansion License) with inline Ask Twin and Inspect triggers.",
    governanceNote: "Metrics without a live source binding explicitly display as unbound rather than inventing numbers.",
  },
] as const;

const bentoPillars = [
  {
    targetId: "overview" as const,
    code: "01",
    icon: LayoutDashboard,
    title: "Live Queue & KPIs",
    summary: "Track operational items, readiness state and review plans in one unified table.",
  },
  {
    targetId: "editing" as const,
    code: "02",
    icon: Edit3,
    title: "Inline Draft Editing",
    summary: "Revise local draft notes, owners and due dates right beside connected records.",
  },
  {
    targetId: "filter" as const,
    code: "04",
    icon: Filter,
    title: "Instant Search & Filter",
    summary: "Filter by keyword or approval status (Review, In Progress, Approved) in place.",
  },
  {
    targetId: "workbench" as const,
    code: "05",
    icon: Sparkles,
    title: "Role Shell & Ask Twin",
    summary: "Launch Inspect or Ask Twin directly from any entity row in the role shell.",
  },
] as const;

const choiceStyle =
  "min-h-10 rounded-lg px-3 py-1.5 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]";

// Distinct desktop crop coordinates so each frame highlights the specific UI region without slicing any cards or buttons
const previewFrames: Record<
  (typeof dashboardViews)[number]["id"],
  { desktop: CaptureFrame; mobile: CaptureFrame }
> = {
  overview: { desktop: [0, 0, 1600, 840], mobile: [300, 185, 720, 610] },
  editing: { desktop: [265, 288, 1295, 670], mobile: [315, 290, 860, 660] },
  draft: { desktop: [310, 220, 980, 620], mobile: [520, 285, 560, 535] },
  filter: { desktop: [265, 285, 1295, 480], mobile: [280, 505, 1040, 250] },
  workbench: { desktop: [0, 0, 1600, 750], mobile: [300, 145, 920, 790] },
};

export function WorkbenchDashboardShowcase() {
  const [active, setActive] = useState<(typeof dashboardViews)[number]["id"]>("overview");
  const [expanded, setExpanded] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const activeIndex = Math.max(0, dashboardViews.findIndex((item) => item.id === active));
  const view = dashboardViews[activeIndex] ?? dashboardViews[0];
  const isNativeShell = view.id === "workbench";
  const imagePath = isNativeShell
    ? "/images/workbench/native-shell/workbench-20261015.webp"
    : `/images/workbench/editable-dashboard/${view.id}-20261015.webp`;
  const imageAlt = isNativeShell
    ? "Captured native SpineWorkspace Account Success Workbench shell with unbound KPI values, two QA records, Inspect and Ask Twin controls, and the complete blue sidebar."
    : `Captured SpineWorkspace Customer Service & Support dashboard: ${view.label}, with the real operational dashboard controls and native blue sidebar.`;

  const stepDashboardView = (delta: number) => {
    const nextIndex = (activeIndex + delta + dashboardViews.length) % dashboardViews.length;
    setActive(dashboardViews[nextIndex].id);
  };

  useEffect(() => {
    for (const item of dashboardViews) {
      const img = new window.Image();
      img.src =
        item.id === "workbench"
          ? "/images/workbench/native-shell/workbench-20261015.webp"
          : `/images/workbench/editable-dashboard/${item.id}-20261015.webp`;
    }
  }, []);

  useEffect(() => {
    if (!expanded) return;
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
  }, [expanded]);

  const openCapture = () => {
    setActualSize(false);
    setExpanded(true);
  };

  return (
    <div className="mt-8 scroll-mt-24" id="workbench-dashboards">
      {/* Top Storyboard Bar */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#CBE5FA] bg-white p-3.5 shadow-2xs sm:px-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Dashboard view selection">
          {dashboardViews.map(({ id, step, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={active === id}
              onClick={() => setActive(id)}
              className={`${choiceStyle} inline-flex items-center gap-2 transition-all ${
                active === id
                  ? "bg-[#006FE8] text-white shadow-xs"
                  : "border border-[#CBE5FA] bg-[#F0F8FF] text-[#082B5E] hover:bg-[#EBF7FF]"
              }`}
            >
              <span
                className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${
                  active === id ? "bg-white/20 text-white" : "bg-white text-[#006FE8]"
                }`}
              >
                {step}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="mr-1 rounded-full border border-[#BBDDF8] bg-[#F0F8FF] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#006FE8]">
            Frame {view.step} / 05
          </span>
          <button
            type="button"
            onClick={() => stepDashboardView(-1)}
            aria-label="Previous dashboard frame"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => stepDashboardView(1)}
            aria-label="Next dashboard frame"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* BENTO GRID LAYOUT FOR DASHBOARD SHOWCASE */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* BENTO CELL 1: Focused Interactive Capture Window (8 cols, spans 2 rows on lg) */}
        <figure className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white shadow-[0_16px_48px_rgba(0,111,232,0.07)] lg:col-span-8 lg:row-span-2">
          <BorderBeam size={260} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />

          {/* Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D6E8F8] bg-[#F0F8FF] px-4 py-2.5 text-xs sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-[11px] font-semibold text-[#355579]">
                {view.route}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-[#BBDDF8] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#006FE8]">
                {view.focusBadge}
              </span>
              <button
                type="button"
                onClick={openCapture}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-[#CBE5FA] bg-white px-2.5 py-1 text-xs font-semibold text-[#006FE8] transition-colors hover:bg-[#EBF7FF]"
              >
                <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                Enlarge dashboard
              </button>
            </div>
          </div>

          {/* Focused Capture Viewport */}
          <button
            type="button"
            onClick={openCapture}
            aria-label={`Enlarge ${view.label} dashboard capture`}
            className="flex flex-1 cursor-zoom-in items-center justify-center bg-[#F0F8FF] p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8] sm:p-3"
          >
            <div className="w-full overflow-hidden rounded-xl border border-[#D6E8F8] bg-white shadow-2xs">
              <WorkbenchCapturePreview
                src={imagePath}
                alt={imageAlt}
                desktop={previewFrames[view.id].desktop}
                mobile={previewFrames[view.id].mobile}
                eager
              />
            </div>
          </button>

          {/* Window Footer */}
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#D6E8F8] bg-white px-4 py-2.5 text-xs text-[#4E607A] sm:px-5">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#006FE8]" aria-hidden />
              <strong className="font-semibold text-[#082B5E]">{view.label}:</strong> Focused preview cropped to the active control area.
            </span>
            <span className="font-mono text-[11px] text-[#006FE8]">
              Click image for full 1600px shell
            </span>
          </figcaption>
        </figure>

        {/* BENTO CELL 2: Active Storyboard Narrative & What Changes (4 cols) */}
        <MagicCard
          className="flex flex-col justify-between rounded-2xl border border-[#CBE5FA] bg-white shadow-xs lg:col-span-4"
          innerClassName="flex h-full flex-col justify-between p-4 sm:p-5"
          gradientColor="rgba(0, 111, 232, 0.08)"
        >
          <div aria-live="polite" aria-atomic="true">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-lg bg-[#EBF7FF] px-2.5 py-1 font-mono text-xs font-bold text-[#006FE8]">
                Storyboard {view.step} / 05
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
                {view.label}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold leading-snug text-[#082B5E] sm:text-xl">
              {view.title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-[#4E607A] sm:text-sm sm:leading-6">{view.detail}</p>

            <div className="mt-3.5 rounded-xl border border-[#D6E8F8] bg-[#F0F8FF] p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                What you see in this frame
              </p>
              <p className="mt-1 text-xs leading-5 text-[#082B5E]">{view.whatChanges}</p>
            </div>
          </div>

          <div className="mt-3.5 flex items-start gap-2 border-t border-[#E6F2FC] pt-3 text-xs text-[#355579]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#208050]" aria-hidden />
            <span>{view.governanceNote}</span>
          </div>
        </MagicCard>

        {/* BENTO CELL 3: Interactive 5-Step Storyboard Quick Switcher (4 cols) */}
        <MagicCard
          className="flex flex-col justify-between rounded-2xl border border-[#CBE5FA] bg-white shadow-xs lg:col-span-4"
          innerClassName="flex h-full flex-col justify-between p-4 sm:p-5"
          gradientColor="rgba(0, 111, 232, 0.08)"
        >
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-[#006FE8]">
                Interactive Storyboard Steps
              </p>
              <PlusCircle className="h-4 w-4 text-[#006FE8]" aria-hidden />
            </div>
            <p className="mt-1 text-xs text-[#4E607A]">
              Step through each operational action inside the dashboard:
            </p>
            <div className="mt-2.5 space-y-1.5">
              {dashboardViews.map((item) => {
                const isCurrent = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-left text-xs font-semibold transition-all ${
                      isCurrent
                        ? "bg-[#006FE8] text-white shadow-2xs"
                        : "border border-[#E6F2FC] bg-[#F0F8FF]/70 text-[#082B5E] hover:border-[#CBE5FA] hover:bg-[#EBF7FF]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${
                          isCurrent ? "bg-white/20 text-white" : "bg-white text-[#006FE8]"
                        }`}
                      >
                        {item.step}
                      </span>
                      {item.label}
                    </span>
                    <span
                      className={`text-[10px] ${
                        isCurrent ? "text-white/90" : "text-[#577592]"
                      }`}
                    >
                      {isCurrent ? "Viewing" : "Inspect →"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </MagicCard>

        {/* BENTO ROW 3: 4 Interactive Capability Bento Cards across 12 cols */}
        {bentoPillars.map(({ targetId, code, icon: Icon, title, summary }) => {
          const isSelected = active === targetId;
          return (
            <MagicCard
              key={title}
              as="div"
              className={`rounded-2xl border transition-all lg:col-span-3 ${
                isSelected
                  ? "border-[#006FE8] bg-[#F0F8FF] shadow-sm"
                  : "border-[#CBE5FA] bg-white hover:border-[#006FE8]"
              }`}
              innerClassName="flex h-full flex-col justify-between p-4 sm:p-5"
              gradientColor="rgba(0, 111, 232, 0.08)"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF7FF] text-[#006FE8]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-mono text-xs font-bold text-[#006FE8]">
                    Frame {code}
                  </span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-[#082B5E]">{title}</h4>
                <p className="mt-1.5 text-xs leading-5 text-[#4E607A]">{summary}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(targetId)}
                className="mt-3 inline-flex items-center gap-1 text-left text-xs font-semibold text-[#006FE8] hover:underline"
              >
                {isSelected ? "Active in viewport" : "Focus this view →"}
              </button>
            </MagicCard>
          );
        })}
      </div>

      <details className="mt-4 text-xs leading-6 text-[#596F89]">
        <summary className="w-fit cursor-pointer rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">
          About this capture
        </summary>
        <p className="mt-2 max-w-3xl">
          {isNativeShell
            ? "Native application components composed locally with two existing QA fixture records; the routed Workbench page does not yet supply them. Sync and host badges do not verify connections or completed actions."
            : "Captured from the running application dashboard with existing QA fixtures and a reviewed local draft/status repair that is pending application integration. Edits remain in the scoped local outbox. Connected-source changes require the authorized workflow. This capture does not demonstrate a freeform dashboard layout editor."}
        </p>
      </details>

      {expanded && (
        <dialog
          ref={dialogRef}
          onClose={() => setExpanded(false)}
          aria-labelledby={titleId}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialogRef.current?.close();
          }}
          className="fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none bg-[#082B5E]/85 p-2 backdrop-blur-sm sm:p-5"
        >
          <div className="mx-auto flex h-full max-w-[1700px] flex-col overflow-hidden rounded-xl bg-white">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#D9E8F4] px-3 py-2 sm:px-5">
              <h3 id={titleId} className="text-sm font-semibold text-[#082B5E]">
                Live Workbench Views · {view.label}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-pressed={actualSize}
                  onClick={() => setActualSize((size) => !size)}
                  className={`${choiceStyle} border border-[#CCE3F5] text-[#005CBF]`}
                >
                  {actualSize ? "Fit to screen" : "Actual size"}
                </button>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  aria-label="Close enlarged dashboard view"
                  className={`${choiceStyle} inline-flex min-w-11 items-center justify-center text-[#315775] hover:bg-[#EBF5FF]`}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
            <div
              tabIndex={0}
              role="region"
              aria-label="Scrollable dashboard capture"
              className={`${
                actualSize ? "" : mediaStyles.fitRegion
              } min-h-0 flex-1 overflow-auto bg-[#F0F8FF] p-2 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}
            >
              <img
                src={imagePath}
                alt={imageAlt}
                width={1600}
                height={1100}
                className={
                  actualSize ? "h-auto w-[1600px] max-w-none" : mediaStyles.fitImage
                }
              />
            </div>
            <p className="shrink-0 border-t border-[#D9E8F4] px-3 py-2 text-xs leading-5 text-[#596F89]">
              {isNativeShell
                ? "Native shell composition with QA fixture records."
                : "QA fixture capture."}{" "}
              Choose Actual size and scroll to inspect the dashboard controls.
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
}
