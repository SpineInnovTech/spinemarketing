"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { WorkbenchCapturePreview, type CaptureFrame } from "./workbench-capture-preview";
import { BorderBeam } from "@/components/ui/border-beam";

const stages: readonly {
  title: string;
  action: string;
  detail: string;
  continuity: string;
  evidence: string;
  captureSrc: string;
  captureCaption: string;
  desktopFrame: CaptureFrame;
  mobileFrame: CaptureFrame;
}[] = [
  {
    title: "Enter your workspace",
    action: "Sign in from our website or from the AI tool you already use.",
    detail: "One sign-in works out who you are, which company you belong to and which workspace you can use. Both ways in lead to the same workspace.",
    continuity: "Your identity, workspace and role.",
    evidence: "E2E-01–05, E2E-17",
    captureSrc: "/images/workbench/native-shell/workbench-20261015.webp",
    captureCaption: "Stage 01 · Signing in to the Account Success workspace",
    desktopFrame: [0, 0, 1600, 750],
    mobileFrame: [300, 145, 920, 790],
  },
  {
    title: "Connect your tools",
    action: "Choose which tools SpineWorkspace may read.",
    detail: "SpineWorkspace finds the tools you have connected, such as Google Workspace, and checks what each one allows. You only see what you already have access to.",
    continuity: "The source they are allowed to use, and what it can do.",
    evidence: "E2E-06–07",
    captureSrc: "/images/workbench/native-shell/navigation-platform-20261015.webp",
    captureCaption: "Stage 02 · Connected tools and what this person may use",
    desktopFrame: [0, 410, 1360, 650],
    mobileFrame: [0, 435, 360, 645],
  },
  {
    title: "Turn a request into work",
    action: "Understand the renewal follow-up.",
    detail: "A customer email asks to renew and confirm their service levels. It becomes a task in your inbox, linked to the original email and the goal it supports.",
    continuity: "The source reference, goal and work item.",
    evidence: "E2E-08–10",
    captureSrc: "/images/workbench/editable-dashboard/draft-20261015.webp",
    captureCaption: "Stage 03 · Turning the email into a renewal task",
    desktopFrame: [310, 220, 980, 620],
    mobileFrame: [520, 285, 560, 535],
  },
  {
    title: "Review the proposed action",
    action: "The AI suggests. You decide.",
    detail: "Spine Twin, the AI assistant, drafts a follow-up plan. The person responsible reads it, sees who needs to approve it, and decides before anything happens.",
    continuity: "The plan, decision and approval record.",
    evidence: "E2E-11–12",
    captureSrc: "/images/workbench/native-shell/document-20261015.webp",
    captureCaption: "Stage 04 · The AI’s renewal plan, waiting for a person to approve",
    desktopFrame: [275, 550, 1285, 530],
    mobileFrame: [480, 330, 880, 735],
  },
  {
    title: "Check the outcome",
    action: "Confirm the change really happened.",
    detail: "Once approved, the change is made and a record is kept of who approved what. SpineWorkspace then checks the tool to confirm the change actually went through, rather than just assuming it did.",
    continuity: "What was done, proof it worked, and who approved it.",
    evidence: "E2E-13–14",
    captureSrc: "/images/workbench/editable-dashboard/editing-20261015.webp",
    captureCaption: "Stage 05 · Checking the status, owner and result",
    desktopFrame: [265, 288, 1295, 670],
    mobileFrame: [315, 290, 860, 660],
  },
  {
    title: "Pick up in another AI tool",
    action: "Carry on where you left off.",
    detail: "Open the same task from a different AI tool and carry on. Spine Network, the part that links your AI tools, brings the task and its history across. Each company’s data stays separate, and passwords are never passed between tools.",
    continuity: "The same task, with the background you are allowed to see.",
    evidence: "E2E-15–18",
    captureSrc: "/images/workbench/native-shell/graph-20261015.webp",
    captureCaption: "Stage 06 · The same task and its history, opened in another AI tool",
    desktopFrame: [275, 325, 1285, 715],
    mobileFrame: [485, 420, 875, 610],
  },
] as const;

export function WorkbenchCustomerJourney() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  const stepStage = (delta: number) => {
    setActive((prev) => (prev + delta + stages.length) % stages.length);
  };

  return (
    <div id="workbench-customer-journey" className="mt-8 scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#006FE8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006FE8]" />
            Visual Storyboard · 6-Stage E2E Flow
          </p>
          <h3 className="mt-3 text-xl font-semibold text-[#082B5E] sm:text-2xl">
            From a customer request to continuing work.
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#4E607A]">
            Follow the renewal and SLA follow-up journey implemented in the application: enter, assemble context, prepare a proposal, review authority, check the outcome and resume the work.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-xl border border-[#CBE5FA] bg-white p-1 shadow-2xs">
          <button
            type="button"
            onClick={() => stepStage(-1)}
            aria-label="Previous customer journey stage"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <span className="px-2 font-mono text-xs font-bold text-[#006FE8]">
            Stage 0{active + 1} / 0{stages.length}
          </span>
          <button
            type="button"
            onClick={() => stepStage(1)}
            aria-label="Next customer journey stage"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[290px_minmax(0,1fr)]">
        {/* Left Column: 6-Stage Interactive Storyboard Rail */}
        <ol className="space-y-2.5" aria-label="Customer journey stages">
          {stages.map((item, index) => (
            <li key={item.title}>
              <button
                type="button"
                aria-current={index === active ? "step" : undefined}
                onClick={() => setActive(index)}
                className={`flex min-h-13 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8] ${
                  index === active
                    ? "border-[#006FE8] bg-[#006FE8] text-white shadow-[0_6px_18px_rgba(0,111,232,0.22)]"
                    : "border-[#CBE5FA] bg-white text-[#082B5E] hover:border-[#006FE8] hover:bg-[#EBF7FF]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold ${
                      index === active
                        ? "bg-white/20 text-white"
                        : "bg-[#F0F8FF] text-[#006FE8]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.title}</span>
                </span>
                <span
                  className={`font-mono text-[10px] ${
                    index === active ? "text-[#CBE5FA]" : "text-[#577592]"
                  }`}
                >
                  {item.evidence.split(",")[0]}
                </span>
              </button>
            </li>
          ))}
        </ol>

        {/* Right Column: Synchronized Storyboard Narrative + Visual Capture Frame */}
        <article
          className="relative flex flex-col overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white shadow-[0_14px_40px_rgba(0,111,232,0.08)]"
          aria-live="polite"
          aria-atomic="true"
        >
          <BorderBeam size={240} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />
          {/* Storyboard Stage Narrative Header */}
          <div className="border-b border-[#D6E8F8] bg-[#F0F8FF] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#CBE5FA] bg-white px-3 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-[#006FE8]">
                Stage 0{active + 1} · {stage.title}
              </span>
              <span className="rounded-full border border-[#CBE5FA] bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#082B5E]">
                Verified scope: {stage.evidence}
              </span>
            </div>
            <h4 className="mt-3.5 text-[length:var(--marketing-card-size)] font-semibold leading-snug text-[#082B5E]">
              {stage.action}
            </h4>
            <p className="mt-2 text-sm leading-7 text-[#4E607A]">{stage.detail}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#CBE5FA] bg-white px-4 py-2.5 text-xs">
              <p className="text-[#4E607A]">
                <strong className="font-semibold text-[#006FE8]">What carries forward:</strong>{" "}
                <span className="font-medium text-[#082B5E]">{stage.continuity}</span>
              </p>
              <Link
                href="/host-connected-environment"
                className="inline-flex items-center gap-1.5 font-semibold text-[#006FE8] hover:underline"
              >
                See how the story stays with the work <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Synchronized Authentic Workbench Visual Frame */}
          <div className="bg-white p-3 sm:p-4">
            <div className="overflow-hidden rounded-xl border border-[#D6E8F8] bg-white">
              <WorkbenchCapturePreview
                src={stage.captureSrc}
                alt={`${stage.captureCaption} — QA fixture capture illustrating ${stage.title}.`}
                desktop={stage.desktopFrame}
                mobile={stage.mobileFrame}
                eager
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#D6E8F8] bg-[#F0F8FF] px-5 py-2.5 text-xs text-[#4E607A]">
            <span className="font-medium text-[#082B5E]">{stage.captureCaption}</span>
            <span className="inline-flex items-center gap-1.5 text-[#006FE8] font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              QA fixture capture
            </span>
          </div>
        </article>
      </div>

      <p className="mt-4 text-xs leading-6 text-[#4E607A]">
        Based on the October 15 repository journey report, which records 18 passing steps. The verification script combines deployed-service checks with a constructed email and controlled provider adapter. This walkthrough describes that recorded test scope; it does not establish live customer results or independent provider delivery.
      </p>
    </div>
  );
}
