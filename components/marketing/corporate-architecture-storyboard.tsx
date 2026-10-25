"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Workflow,
  Database,
  ShieldCheck,
  Network,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface ArchitectureScene {
  id: "fabric" | "hermes" | "continuity";
  step: string;
  label: string;
  badge: string;
  layer: string;
  title: string;
  detail: string;
  point: string;
  ctaHref: string;
  ctaLabel: string;
}

const architectureScenes: ArchitectureScene[] = [
  {
    id: "fabric",
    step: "01",
    label: "Context Fabric",
    badge: "Step 1 · Connected context",
    layer: "Connected context",
    title: "Connected context.",
    detail:
      "Bring the records your team is authorized to use — accounts, support, contracts — into one connected view. Each stays owned by its source system.",
    point: "Your existing tools stay the systems of record.",
    ctaHref: "/platform/spine-fabric",
    ctaLabel: "How context is connected",
  },
  {
    id: "hermes",
    step: "02",
    label: "Agentic Governance",
    badge: "Step 2 · Agentic governance",
    layer: "Human approval",
    title: "Agentic governance.",
    detail:
      "AI prepares a proposal. A person reviews it and approves the exact change before anything is written back to a source system.",
    point: "People approve every consequential action.",
    ctaHref: "/platform",
    ctaLabel: "How governance works",
  },
  {
    id: "continuity",
    step: "03",
    label: "Host Continuity",
    badge: "Step 3 · Continuity",
    layer: "Continuity",
    title: "Continuity.",
    detail:
      "Context stays with the work as it moves between AI hosts, so the next step continues from where the last one left off.",
    point: "Context continues with the work.",
    ctaHref: "/spine",
    ctaLabel: "How continuity works",
  },
];

const sceneIcon = {
  fabric: Database,
  hermes: ShieldCheck,
  continuity: Network,
} as const;

export function CorporateArchitectureStoryboard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = architectureScenes[activeIndex] ?? architectureScenes[0];
  const CurrentIcon = sceneIcon[current.id];

  const stepScene = (delta: number) => {
    setActiveIndex(
      (prev) => (prev + delta + architectureScenes.length) % architectureScenes.length,
    );
  };

  return (
    <div
      aria-label="Spine InnovTech architecture storyboard"
      className="relative overflow-hidden rounded-2xl border border-[#BBDDF8] bg-white shadow-[0_20px_60px_rgba(0,111,232,0.10)]"
    >
      <BorderBeam size={260} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />

      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D6E8F8] bg-[#F0F8FF] px-3.5 py-2.5 sm:px-5">
        <div
          className="flex flex-wrap gap-1.5"
          role="tablist"
          aria-label="Architecture storyboard steps"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              stepScene(1);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              stepScene(-1);
            }
          }}
        >
          {architectureScenes.map(({ id, step, label }, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-controls={`panel-${id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8] ${
                  isActive
                    ? "bg-[#006FE8] text-white shadow-xs"
                    : "border border-[#CBE5FA] bg-white text-[#082B5E] hover:bg-[#EBF7FF]"
                }`}
              >
                <span
                  className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#EBF7FF] text-[#006FE8]"
                  }`}
                >
                  {step}
                </span>
                {label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="hidden font-mono text-[11px] font-semibold text-[#006FE8] sm:inline">
            Step {current.step}/03 · {current.layer}
          </span>
          <button
            type="button"
            onClick={() => stepScene(-1)}
            aria-label="Previous step"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => stepScene(1)}
            aria-label="Next step"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Main Canvas — plain, illustrative */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="bg-gradient-to-b from-[#F4FAFF] via-[#F0F8FF] to-white p-5 sm:p-8"
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BBDDF8] bg-white px-3 py-1 text-[11px] font-semibold text-[#006FE8] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#006FE8] animate-pulse" />
            {current.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D6E8F8] bg-white px-3 py-1 font-mono text-[11px] font-semibold text-[#006FE8] shadow-2xs">
            <Workflow className="h-3 w-3 text-[#006FE8]" aria-hidden />
            Interactive Storyboard
          </span>
        </div>

        {/* Three steps at a glance */}
        <ol className="grid gap-3 md:grid-cols-3">
          {architectureScenes.map((scene, idx) => {
            const Icon = sceneIcon[scene.id];
            const isActive = idx === activeIndex;
            return (
              <li key={scene.id}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex h-full w-full flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8] ${
                    isActive
                      ? "border-[#006FE8] bg-white shadow-md"
                      : "border-[#D6E8F8] bg-white/70 hover:border-[#9BCAFF]"
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#006FE8]">Step {scene.step}</span>
                  <span className="text-sm font-semibold text-[#082B5E]">{scene.title.replace(/\.$/, "")}</span>
                  <span className="text-xs leading-6 text-[#4E607A]">{scene.point}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Active step detail */}
        <div className="mt-5 rounded-2xl border border-[#D6E8F8] bg-white p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#CBE5FA] bg-[#F0F8FF] text-[#006FE8]">
              <CurrentIcon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-[18px] font-semibold tracking-[-.02em] text-[#082B5E]">{current.title}</h3>
              <p className="mt-2 max-w-[620px] text-sm leading-7 text-[#4E607A]">{current.detail}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Product Bridge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D6E8F8] bg-white px-4 py-3.5 text-xs sm:px-6">
        <div className="min-w-0 flex-1">
          <p className="text-[#355579] leading-relaxed">
            <strong className="font-semibold text-[#082B5E]">{current.title}</strong>{" "}
            {current.detail}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Link
            href={current.ctaHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#CBE5FA] bg-white px-3 py-1.5 text-xs font-semibold text-[#082B5E] shadow-2xs hover:bg-[#F0F8FF] transition-colors"
          >
            {current.ctaLabel} <ArrowRight className="h-3 w-3" aria-hidden />
          </Link>
          <a
            href="https://spineworkspace.com"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#006FE8] bg-[#006FE8] px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#0055B8] transition-colors"
          >
            Explore SpineWorkspace <ArrowRight className="h-3 w-3" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
