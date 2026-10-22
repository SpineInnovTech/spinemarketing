"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  FileText,
  GitBranch,
  LayoutDashboard,
  Layers,
  Lock,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const storyScenes = [
  {
    id: "context",
    step: "01",
    label: "Connect Context",
    badge: "Spine Fabric · Context Layer",
    title: "Unify records around real business entities.",
    detail:
      "Connect CRM accounts, support tickets, contracts and billing records into one permissioned context graph before anyone—or any AI—takes action.",
    ctaLabel: "Explore Customer Journey",
    ctaHref: "/product#workbench-customer-journey",
  },
  {
    id: "views",
    step: "02",
    label: "Work in Views",
    badge: "Workbench · Dashboards + Canvas",
    title: "Operate in editable dashboards and Canvas.",
    detail:
      "Run daily queues, KPIs and local drafts in role-based dashboards, or switch to Canvas for connected documents, live tables and context graphs.",
    ctaLabel: "Explore Dashboard Bento",
    ctaHref: "/product#workbench-dashboards",
  },
  {
    id: "governance",
    step: "03",
    label: "Review & Continue",
    badge: "Spine Twin · Governed Action",
    title: "AI prepares the next step. Humans approve.",
    detail:
      "Ask your AI Twin to summarize risks or draft a follow-up with linked evidence. Consequential writes stay behind your approval gate and carry across hosts.",
    ctaLabel: "Watch 26s Shell Walkthrough",
    ctaHref: "/product#workbench-recording",
  },
] as const;

export function WorkbenchHeroPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = storyScenes[activeIndex] ?? storyScenes[0];

  const stepScene = (delta: number) => {
    setActiveIndex((prev) => (prev + delta + storyScenes.length) % storyScenes.length);
  };

  return (
    <div
      aria-label="SpineWorkspace visual architecture storyboard"
      className="relative overflow-hidden rounded-2xl border border-[#BBDDF8] bg-white shadow-[0_20px_60px_rgba(0,111,232,0.10)]"
    >
      <BorderBeam size={260} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />

      {/* Top Storyboard Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D6E8F8] bg-[#F0F8FF] px-3.5 py-2.5 sm:px-4">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Hero visual storyboard scenes">
          {storyScenes.map(({ id, step, label }, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
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
            Story {current.step}/03
          </span>
          <button
            type="button"
            onClick={() => stepScene(-1)}
            aria-label="Previous storyboard scene"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => stepScene(1)}
            aria-label="Next storyboard scene"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Interactive Architectural Visual Story Canvas (No Screenshots) */}
      <div className="bg-gradient-to-b from-[#F4FAFF] via-[#F0F8FF] to-white p-4 sm:p-6">
        {/* Scene Header Pill */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BBDDF8] bg-white px-3 py-1 text-[11px] font-semibold text-[#006FE8] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#006FE8]" />
            {current.badge}
          </span>
          <span className="font-mono text-[11px] font-medium text-[#4E607A]">
            Interactive System Storyboard
          </span>
        </div>

        {/* SCENE 01: CONNECT CONTEXT (SPINE FABRIC VISUAL DIAGRAM) */}
        {current.id === "context" && (
          <div className="grid gap-3.5 sm:grid-cols-12">
            {/* Left Column: Connected Source Systems */}
            <div className="flex flex-col justify-between gap-2.5 sm:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                1. Permitted Sources
              </p>
              {[
                { icon: Users, name: "CRM & Accounts", meta: "Deals · Contacts · Stages" },
                { icon: Layers, name: "Service & Support", meta: "Tickets · SLA · Escalations" },
                { icon: FileText, name: "Contracts & Docs", meta: "MSA · Clauses · Renewals" },
                { icon: Database, name: "Finance & Billing", meta: "Invoices · ARR · Terms" },
              ].map(({ icon: Icon, name, meta }) => (
                <div
                  key={name}
                  className="flex items-center gap-2.5 rounded-xl border border-[#CBE5FA] bg-white p-2.5 shadow-2xs"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EBF7FF] text-[#006FE8]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[#082B5E]">{name}</p>
                    <p className="truncate text-[10px] text-[#577592]">{meta}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center/Right Column: Unified Entity Context Graph */}
            <div className="flex flex-col justify-between rounded-xl border border-[#96C7F2] bg-white p-4 shadow-xs sm:col-span-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6F2FC] pb-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                      2. Unified Entity Context · Spine Fabric
                    </p>
                    <h3 className="mt-0.5 text-sm font-bold text-[#082B5E]">
                      Anchor Entity: Acme Corporation
                    </h3>
                  </div>
                  <span className="rounded-full border border-[#BBDDF8] bg-[#EBF7FF] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#006FE8]">
                    spine.account:acme
                  </span>
                </div>

                {/* Connected Nodes */}
                <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#D6E8F8] bg-[#F0F8FF] p-3">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-[#006FE8]">
                      <span>COMMERCIAL RECORD</span>
                      <span className="rounded bg-white px-1.5 py-0.5 font-mono">Negotiation</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-[#082B5E]">Acme Renewal Contract</p>
                    <p className="mt-0.5 text-[11px] text-[#4E607A]">
                      Linked to Clause 14.2 &amp; Expansion License
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D6E8F8] bg-[#F0F8FF] p-3">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-[#006FE8]">
                      <span>OPERATIONAL SIGNAL</span>
                      <span className="rounded bg-white px-1.5 py-0.5 font-mono">tkt-501</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-[#082B5E]">SSO Verification Follow-Up</p>
                    <p className="mt-0.5 text-[11px] text-[#4E607A]">
                      Support queue context linked to account owner
                    </p>
                  </div>
                </div>
              </div>

              {/* Authority & Scope Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#CBE5FA] bg-[#EBF7FF]/70 px-3 py-2 text-[11px] font-medium text-[#082B5E]">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#006FE8]" aria-hidden />
                  Source systems remain authoritative
                </span>
                <span className="font-mono text-[10px] font-semibold text-[#006FE8]">
                  Role-scoped access verified
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 02: WORK IN SHARED VIEWS (DASHBOARDS + CANVAS BENTO PREVIEW) */}
        {current.id === "views" && (
          <div className="grid gap-3.5 sm:grid-cols-2">
            {/* Peer 1: Editable Operational Dashboards */}
            <div className="flex flex-col justify-between rounded-xl border border-[#96C7F2] bg-white p-4 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#EBF7FF] px-2.5 py-1 text-[11px] font-bold text-[#006FE8]">
                    <LayoutDashboard className="h-3.5 w-3.5" aria-hidden />
                    Operational Dashboards
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-[#577592]">
                    13 Domains
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#082B5E]">
                  Run daily queues, KPIs &amp; local drafts
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    ["Tracked", "Live Queue"],
                    ["Drafts", "Local Outbox"],
                    ["Filters", "By Status"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-[#D6E8F8] bg-[#F0F8FF] p-2">
                      <p className="text-[10px] text-[#577592]">{k}</p>
                      <p className="mt-0.5 text-xs font-bold text-[#082B5E]">{v}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-[#4E607A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#006FE8]" aria-hidden />
                    Search, filter and inspect records in place
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#006FE8]" aria-hidden />
                    Create and edit scoped local drafts safely
                  </li>
                </ul>
              </div>
              <Link
                href="#workbench-dashboards"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#006FE8] hover:underline"
              >
                Open Dashboard Bento Grid <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>

            {/* Peer 2: Collaborative Canvas */}
            <div className="flex flex-col justify-between rounded-xl border border-[#96C7F2] bg-white p-4 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#EBF7FF] px-2.5 py-1 text-[11px] font-bold text-[#006FE8]">
                    <GitBranch className="h-3.5 w-3.5" aria-hidden />
                    Collaborative Canvas
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-[#577592]">
                    10 UI Blocks
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#082B5E]">
                  Documents, database tables &amp; context graphs
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    ["Document", "Rich Context"],
                    ["Database", "Live Table"],
                    ["Graph", "Entity Links"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-[#D6E8F8] bg-[#F0F8FF] p-2">
                      <p className="text-[10px] text-[#577592]">{k}</p>
                      <p className="mt-0.5 text-xs font-bold text-[#082B5E]">{v}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-[#4E607A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#006FE8]" aria-hidden />
                    Compose with reusable UI Library blocks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#006FE8]" aria-hidden />
                    Same records as your operational dashboard
                  </li>
                </ul>
              </div>
              <Link
                href="#workbench-canvas"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#006FE8] hover:underline"
              >
                Explore Canvas Views <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        )}

        {/* SCENE 03: GOVERNED AI TWIN & HOST CONTINUITY */}
        {current.id === "governance" && (
          <div className="space-y-3.5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  step: "Step 1",
                  icon: Sparkles,
                  title: "Twin Prepares",
                  body: "Summarizes account signals, risks and agreement clauses into a reviewable draft.",
                },
                {
                  step: "Step 2",
                  icon: ShieldCheck,
                  title: "Human Approval Gate",
                  body: "Team reviews linked evidence and explicitly authorizes any external system change.",
                },
                {
                  step: "Step 3",
                  icon: Layers,
                  title: "Host Continuity",
                  body: "Carry context checkpoints across SpineWorkspace, ChatGPT, Claude and Cursor.",
                },
              ].map(({ step, icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-xl border border-[#CBE5FA] bg-white p-3.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-[#EBF7FF] px-2 py-0.5 font-mono text-[10px] font-bold text-[#006FE8]">
                      {step}
                    </span>
                    <Icon className="h-4 w-4 text-[#006FE8]" aria-hidden />
                  </div>
                  <h3 className="mt-2.5 text-xs font-bold text-[#082B5E]">{title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#4E607A]">{body}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#96C7F2] bg-white px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#006FE8] text-white">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#082B5E]">
                    Portable context across AI hosts &amp; SpineWorkspace
                  </p>
                  <p className="text-[11px] text-[#4E607A]">
                    Resume authorized work across ChatGPT, Claude, Cursor and the web shell without moving private credentials.
                  </p>
                </div>
              </div>
              <Link
                href="/host-connected-environment"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#EBF7FF] px-3 py-1.5 text-xs font-semibold text-[#006FE8] hover:bg-[#D6ECFF]"
              >
                Explore Host Continuity <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Storyboard Narrative Bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D6E8F8] bg-white px-4 py-3 text-xs sm:px-5"
        aria-live="polite"
      >
        <p className="min-w-0 flex-1 text-[#355579]">
          <span className="mr-2 inline-block rounded bg-[#EBF7FF] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#006FE8]">
            Scene {current.step}
          </span>
          <strong className="font-semibold text-[#082B5E]">{current.title}</strong>{" "}
          {current.detail}
        </p>
        <Link
          href={current.ctaHref}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#CBE5FA] bg-[#F0F8FF] px-3 py-1.5 font-semibold text-[#006FE8] transition-colors hover:bg-[#EBF7FF]"
        >
          {current.ctaLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
