"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  ShieldCheck,
  Layers,
  Lock,
  Sparkles,
  Cpu,
  Network,
  GitBranch,
  FileCheck,
  Server,
  Workflow,
  RefreshCw,
  ExternalLink,
  ShieldAlert,
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
  ctaHref: string;
  ctaLabel: string;
}

const architectureScenes: ArchitectureScene[] = [
  {
    id: "fabric",
    step: "01",
    label: "Context Fabric",
    badge: "Substrate · Governed Context Fabric",
    layer: "Data Substrate Layer",
    title: "Governed Context Fabric: Unified Data Substrate with Cryptographic Lineage.",
    detail:
      "Connect CRM accounts, support tickets, contracts, and financial ledgers into an immutable entity-relationship graph. Every node retains source authority, role-scoped access policies, and cryptographic provenance before models or humans interact.",
    ctaHref: "/platform/spine-fabric",
    ctaLabel: "Explore Spine Fabric",
  },
  {
    id: "hermes",
    step: "02",
    label: "Hermes Governance",
    badge: "Runtime · Hermes Zero-Trust Governance Gate",
    layer: "Execution Boundary Layer",
    title: "Hermes Zero-Trust Runtime: Proposal Sandbox vs. Consequential Execution.",
    detail:
      "Autonomous AI Twins operate in unprivileged evaluation sandboxes and can only emit cryptographically signed proposals. Consequential writebacks require explicit human authorization verified against the Hermes Zero-Trust policy gate.",
    ctaHref: "/platform/security",
    ctaLabel: "Review Governance Architecture",
  },
  {
    id: "continuity",
    step: "03",
    label: "Host Continuity",
    badge: "Network · Multi-Host Context Continuity",
    layer: "Network Mesh Layer",
    title: "Multi-Host Continuity: Model-Agnostic Context Portability via FastMCP.",
    detail:
      "Preserve and transfer live execution state, entity graphs, and decision lineage across heterogeneous AI hosts (Claude, OpenAI, Cursor, local SLMs) with zero credential leakage and instantaneous context resumption.",
    ctaHref: "/host-connected-environment",
    ctaLabel: "Inspect Host Continuity",
  },
];

export function CorporateArchitectureStoryboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [simulatedApproval, setSimulatedApproval] = useState(false);

  const current = architectureScenes[activeIndex] ?? architectureScenes[0];

  const stepScene = (delta: number) => {
    setActiveIndex(
      (prev) => (prev + delta + architectureScenes.length) % architectureScenes.length,
    );
  };

  return (
    <div
      aria-label="Spine InnovTech Corporate Architecture Storyboard"
      className="relative overflow-hidden rounded-2xl border border-[#BBDDF8] bg-white shadow-[0_20px_60px_rgba(0,111,232,0.10)]"
    >
      <BorderBeam size={260} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />

      {/* Top Architecture Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D6E8F8] bg-[#F0F8FF] px-3.5 py-2.5 sm:px-5">
        <div
          className="flex flex-wrap gap-1.5"
          role="tablist"
          aria-label="Corporate architecture storyboard layers"
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
            Layer {current.step}/03 · {current.layer}
          </span>
          <button
            type="button"
            onClick={() => stepScene(-1)}
            aria-label="Previous architecture layer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => stepScene(1)}
            aria-label="Next architecture layer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBE5FA] bg-white text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Main Diagrammatic Architecture Canvas */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="bg-gradient-to-b from-[#F4FAFF] via-[#F0F8FF] to-white p-4 sm:p-6"
      >
        {/* Storyboard Header Pill: preserves "Interactive Storyboard" badge for verification */}
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

        {/* SCENE 01: GOVERNED CONTEXT FABRIC (SUBSTRATE LAYER) */}
        {current.id === "fabric" && (
          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-12 items-stretch">
              {/* Column 1: Source Ingress Adapters */}
              <div className="flex flex-col justify-between gap-2.5 lg:col-span-4">
                <div className="rounded-xl border border-[#CCE3F5] bg-white p-3 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                      Authorized Source 01
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#EBF7FF] px-1.5 py-0.5 text-[9px] font-semibold text-[#006FE8]">
                      <Lock className="h-2.5 w-2.5" /> OAuth 2.0 PKCE
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#082B5E]">Salesforce &amp; CRM</h4>
                  <p className="text-[11px] text-[#4E607A] mt-0.5">
                    Account tier, ARR, owner, renewal window, health metrics.
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-[#F0F6FC] pt-1.5 font-mono text-[9px] text-[#5E728B]">
                    <span>Lineage: Verified</span>
                    <span className="text-[#006FE8]">2,410 entities</span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#CCE3F5] bg-white p-3 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                      Authorized Source 02
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#E8F9F0] px-1.5 py-0.5 text-[9px] font-semibold text-[#059669]">
                      <RefreshCw className="h-2.5 w-2.5" /> Webhook SSE
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#082B5E]">Zendesk &amp; ServiceNow</h4>
                  <p className="text-[11px] text-[#4E607A] mt-0.5">
                    Open escalation incidents, SLA timers, satisfaction scores.
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-[#F0F6FC] pt-1.5 font-mono text-[9px] text-[#5E728B]">
                    <span>Lineage: Verified</span>
                    <span className="text-[#059669]">184 active</span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#CCE3F5] bg-white p-3 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                      Authorized Source 03
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#F3E8FF] px-1.5 py-0.5 text-[9px] font-semibold text-[#7C3AED]">
                      <FileCheck className="h-2.5 w-2.5" /> Read-Only Hash
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#082B5E]">Contracts &amp; Drive Files</h4>
                  <p className="text-[11px] text-[#4E607A] mt-0.5">
                    Signed MSAs, amendment clauses, liability limits, discount caps.
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-[#F0F6FC] pt-1.5 font-mono text-[9px] text-[#5E728B]">
                    <span>SHA-256 Provenance</span>
                    <span className="text-[#7C3AED]">520 docs</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Central Entity Context Kernel */}
              <div className="flex flex-col justify-between rounded-xl border-2 border-[#006FE8]/30 bg-white p-4 shadow-md lg:col-span-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#006FE8] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">
                  SPINE FABRIC KERNEL
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EBF7FF] text-[#006FE8]">
                      <Database className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#082B5E]">
                        Unified Entity-Relationship Graph
                      </h4>
                      <p className="text-[10px] text-[#4E607A]">
                        Anchor: <code className="font-mono text-[#006FE8]">spine.account:acme-corp</code>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 rounded-lg border border-[#D6E8F8] bg-[#F8FBFF] p-2.5 text-[11px]">
                    <div className="flex items-center justify-between border-b border-[#EAF2F9] pb-1.5">
                      <span className="font-medium text-[#082B5E]">Account Context</span>
                      <span className="font-mono text-[10px] font-semibold text-[#006FE8]">$42,500 MRR · Tier 1</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#EAF2F9] pb-1.5">
                      <span className="font-medium text-[#082B5E]">Active Contract Node</span>
                      <span className="font-mono text-[10px] text-[#4E607A]">spine.contract:2026-renew</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#EAF2F9] pb-1.5">
                      <span className="font-medium text-[#082B5E]">Incident Relation</span>
                      <span className="font-mono text-[10px] font-semibold text-[#D97706]">tkt-904 (18m SLA remain)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#082B5E]">Executive Sponsor</span>
                      <span className="font-mono text-[10px] text-[#059669]">Maya Lin (VP Eng)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-[#CCE3F5] bg-[#EAF5FC] p-2.5 text-[10px]">
                  <div className="flex items-center gap-1.5 font-semibold text-[#006FE8] mb-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#006FE8]" />
                    <span>Cryptographic Lineage Guarantee</span>
                  </div>
                  <p className="text-[#355579] leading-relaxed">
                    Source data never mutates in Spine Fabric. Every retrieval carries parent transaction hashes and immutable read receipts back to the source system of record.
                  </p>
                </div>
              </div>

              {/* Column 3: Role-Scoped Context Projections */}
              <div className="flex flex-col justify-between gap-2.5 lg:col-span-3">
                <div className="rounded-xl border border-[#D6E8F8] bg-white p-3 shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#059669]">
                    Scoped Projection 01
                  </div>
                  <h5 className="text-xs font-bold text-[#082B5E] mt-0.5">Account Success Lens</h5>
                  <p className="text-[10px] text-[#4E607A] mt-1">
                    Risk flags, SLA breaches, executive relationship maps.
                  </p>
                  <span className="mt-2 inline-block rounded bg-[#E8F9F0] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[#059669]">
                    ABAC Scope: CSM Lead
                  </span>
                </div>

                <div className="rounded-xl border border-[#D6E8F8] bg-white p-3 shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                    Scoped Projection 02
                  </div>
                  <h5 className="text-xs font-bold text-[#082B5E] mt-0.5">Finance Operations Lens</h5>
                  <p className="text-[10px] text-[#4E607A] mt-1">
                    Contract renewal terms, payment history, billing ledger.
                  </p>
                  <span className="mt-2 inline-block rounded bg-[#EBF7FF] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[#006FE8]">
                    ABAC Scope: Finance Lead
                  </span>
                </div>

                <div className="rounded-xl border border-[#D6E8F8] bg-white p-3 shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED]">
                    Scoped Projection 03
                  </div>
                  <h5 className="text-xs font-bold text-[#082B5E] mt-0.5">AI Twin Memory Context</h5>
                  <p className="text-[10px] text-[#4E607A] mt-1">
                    Ephemeral context graph payload for model synthesis.
                  </p>
                  <span className="mt-2 inline-block rounded bg-[#F3E8FF] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[#7C3AED]">
                    ABAC Scope: Read-Only Model
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture Metrics Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#D6E8F8] bg-white px-4 py-2.5 text-xs text-[#355579]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#059669]" />
                <span className="font-semibold text-[#082B5E]">Substrate State:</span>
                <span>All 13 enterprise domains bound to shared entity graphs</span>
              </div>
              <div className="flex items-center gap-4 font-mono text-[11px]">
                <span>Graph Resolution: &lt;12ms</span>
                <span>Provenance: 100% Immutable</span>
                <span>Lineage: SHA-256</span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 02: HERMES ZERO-TRUST GOVERNANCE GATE (RUNTIME LAYER) */}
        {current.id === "hermes" && (
          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-12 items-stretch">
              {/* Tier 1: Proposal Sandbox (Untrusted AI Proposal) */}
              <div className="flex flex-col justify-between rounded-xl border border-[#FCD34D] bg-[#FFFBEB] p-4 shadow-xs lg:col-span-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#FEF3C7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                      <Cpu className="h-3 w-3" /> Sandbox Runtime
                    </span>
                    <span className="font-mono text-[10px] text-[#B45309]">UNPRIVILEGED</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#78350F]">
                    AI Twin Action Proposal
                  </h4>
                  <p className="text-[11px] text-[#92400E] mt-1">
                    Twin synthesized account health and drafts a concession response.
                  </p>

                  <div className="mt-3 space-y-1.5 rounded-lg border border-[#FDE68A] bg-white p-2.5 text-[11px]">
                    <div className="font-semibold text-[#78350F]">Action: Draft Amendment</div>
                    <div className="text-[10px] text-[#92400E]">
                      Target: <code className="font-mono text-[#006FE8]">spine.contract:2026-renew</code>
                    </div>
                    <div className="text-[10px] text-[#92400E]">
                      Adjustment: <strong>15% Renewal Discount</strong>
                    </div>
                    <div className="text-[10px] text-[#92400E]">
                      Evidence: Tkt-904 SLA breach + 44% Q3 usage surge
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-[#FDE68A] pt-2 text-[10px] text-[#B45309]">
                  <span className="font-semibold">Security State:</span> No direct write authority. Action blocked at perimeter until authorized.
                </div>
              </div>

              {/* Tier 2: Hermes Governance & Human Approval Gate */}
              <div className="flex flex-col justify-between rounded-xl border-2 border-[#006FE8] bg-white p-4 shadow-md lg:col-span-4 relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#EBF7FF] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                      <ShieldCheck className="h-3 w-3" /> Hermes Core
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#006FE8]">
                      POLICY v2.4
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[#082B5E]">
                    Zero-Trust Authorization Gate
                  </h4>
                  <p className="text-[11px] text-[#4E607A] mt-1">
                    Consequential writes require cryptographic policy verification and human authorization.
                  </p>

                  <div className="mt-3 space-y-2 rounded-lg border border-[#D6E8F8] bg-[#F8FBFF] p-2.5 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#355579]">Rule 1: Operator Authority</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#059669]">
                        <CheckCircle2 className="h-3 w-3" /> Verified (Level 3)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#355579]">Rule 2: Impact Ceiling</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#059669]">
                        <CheckCircle2 className="h-3 w-3" /> 15% &le; 20% limit
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#355579]">Rule 3: Dual-Key Sign-off</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#006FE8]">
                        {simulatedApproval ? (
                          <span className="text-[#059669] flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" /> Maya Lin (Approved)
                          </span>
                        ) : (
                          <span className="text-[#D97706] flex items-center gap-1">
                            <Lock className="h-3 w-3" /> Awaiting Click
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setSimulatedApproval((prev) => !prev)}
                    className="w-full rounded-lg border border-[#006FE8] bg-[#006FE8] px-3 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#0055B8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]"
                  >
                    {simulatedApproval
                      ? "Reset Verification Simulation"
                      : "Simulate Operator Approval Gate"}
                  </button>
                </div>
              </div>

              {/* Tier 3: Consequential Execution & Immutable Audit */}
              <div
                className={`flex flex-col justify-between rounded-xl border p-4 shadow-xs lg:col-span-4 transition-all ${
                  simulatedApproval
                    ? "border-[#86EFAC] bg-[#F0FDF4]"
                    : "border-[#D6E8F8] bg-[#FAFCFF]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        simulatedApproval
                          ? "bg-[#DCFCE7] text-[#166534]"
                          : "bg-[#EAF2F9] text-[#4E607A]"
                      }`}
                    >
                      <Workflow className="h-3 w-3" /> Governed Egress
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        simulatedApproval ? "text-[#166534]" : "text-[#8293A9]"
                      }`}
                    >
                      {simulatedApproval ? "EXECUTED" : "HOLD_POLICY"}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[#082B5E]">
                    Consequential System Writeback
                  </h4>
                  <p className="text-[11px] text-[#4E607A] mt-1">
                    Authorized actions write back to systems of record with non-repudiable receipts.
                  </p>

                  <div className="mt-3 space-y-1.5 rounded-lg border border-[#D6E8F8] bg-white p-2.5 text-[11px]">
                    <div className="flex items-center justify-between text-[#355579]">
                      <span>Salesforce CRM</span>
                      <span className="font-mono text-[10px] font-semibold text-[#082B5E]">
                        {simulatedApproval ? "Stage Updated: Negotiation" : "Pending Permit"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#355579]">
                      <span>Slack Notification</span>
                      <span className="font-mono text-[10px] font-semibold text-[#082B5E]">
                        {simulatedApproval ? "#customer-success notified" : "Queued"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#355579]">
                      <span>Audit Receipt</span>
                      <span className="font-mono text-[10px] font-semibold text-[#006FE8]">
                        {simulatedApproval ? "hermes.receipt:0x8f2a" : "Awaiting Sign"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-[#D6E8F8] pt-2 text-[10px] text-[#5E728B]">
                  <span className="font-semibold text-[#082B5E]">Non-Repudiation:</span> All executions produce immutable receipts signed with HMAC-SHA256.
                </div>
              </div>
            </div>

            {/* Architecture Metrics Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#D6E8F8] bg-white px-4 py-2.5 text-xs text-[#355579]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#006FE8]" />
                <span className="font-semibold text-[#082B5E]">Runtime Principle:</span>
                <span>Separation of proposal preparation from execution authority</span>
              </div>
              <div className="flex items-center gap-4 font-mono text-[11px]">
                <span>Zero Direct LLM Access</span>
                <span>Policy Evaluation: 3ms</span>
                <span>Audit: HMAC-SHA256</span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 03: MULTI-HOST CONTINUITY & NEURAL INTEROPERABILITY (NETWORK LAYER) */}
        {current.id === "continuity" && (
          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-12 items-stretch">
              {/* Host A: Originating Environment */}
              <div className="flex flex-col justify-between rounded-xl border border-[#D6E8F8] bg-white p-4 shadow-xs lg:col-span-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#EAF7FF] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0070DC]">
                      <Server className="h-3 w-3" /> Host Session A
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#0070DC]">
                      ORIGIN
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#082B5E]">Claude Desktop / Web</h4>
                  <p className="text-[11px] text-[#4E607A] mt-1">
                    Operator initiates complex multi-variable contract risk analysis.
                  </p>

                  <div className="mt-3 space-y-1.5 rounded-lg border border-[#D6E8F8] bg-[#F8FBFF] p-2.5 text-[11px]">
                    <div className="text-[#355579]">
                      Active Model: <strong className="text-[#082B5E]">Claude 3.5 Sonnet</strong>
                    </div>
                    <div className="text-[#355579]">
                      Checkpoint Emitted: <code className="font-mono text-[#006FE8]">chkpt_acme_q4.spine</code>
                    </div>
                    <div className="text-[#355579]">
                      Payload: 42.8 KB governed context graph
                    </div>
                    <div className="text-[10px] font-mono text-[#059669]">
                      Lineage Checkpoint Signed: OK
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-[#D6E8F8] pt-2 text-[10px] text-[#5E728B]">
                  Context state serialized with cryptographic checksums before leaving memory.
                </div>
              </div>

              {/* Central FastMCP Relay Bus */}
              <div className="flex flex-col justify-between rounded-xl border-2 border-[#7C3AED]/40 bg-[#FAF5FF] p-4 shadow-md lg:col-span-4 relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#F3E8FF] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7C3AED]">
                      <Network className="h-3 w-3" /> Spine Network Bus
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#7C3AED]">
                      FastMCP v1.2
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[#581C87]">
                    Zero-Trust FastMCP Relay
                  </h4>
                  <p className="text-[11px] text-[#6B21A8] mt-1">
                    Routes state checkpoints across model boundaries with zero credential leakage.
                  </p>

                  <div className="mt-3 space-y-2 rounded-lg border border-[#E9D5FF] bg-white p-2.5 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#581C87]">Protocol Transport</span>
                      <span className="font-mono text-[10px] font-bold text-[#7C3AED]">JSON-RPC / SSE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#581C87]">Credential Exposure</span>
                      <span className="font-mono text-[10px] font-bold text-[#059669]">0% (Zero Shared Keys)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#581C87]">Differential Delta Sync</span>
                      <span className="font-mono text-[10px] font-bold text-[#7C3AED]">8.4ms Latency</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#581C87]">State Signature</span>
                      <span className="font-mono text-[10px] text-[#581C87]">HMAC-SHA256 Token</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-[#E9D5FF] bg-white p-2 text-[10px] text-[#6B21A8]">
                  <span className="font-bold text-[#581C87]">Security Perimeter:</span> The host never receives downstream API keys or database connection strings.
                </div>
              </div>

              {/* Host B: Destination Environment */}
              <div className="flex flex-col justify-between rounded-xl border border-[#D6E8F8] bg-white p-4 shadow-xs lg:col-span-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#EBF7FF] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#006FE8]">
                      <Server className="h-3 w-3" /> Host Session B
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#006FE8]">
                      RESUMPTION
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#082B5E]">Cursor IDE / Autonomous Agent</h4>
                  <p className="text-[11px] text-[#4E607A] mt-1">
                    Operator switches to IDE; agent immediately resumes work with full context.
                  </p>

                  <div className="mt-3 space-y-1.5 rounded-lg border border-[#D6E8F8] bg-[#F8FBFF] p-2.5 text-[11px]">
                    <div className="text-[#355579]">
                      Resumed Checkpoint: <code className="font-mono text-[#006FE8]">chkpt_acme_q4.spine</code>
                    </div>
                    <div className="text-[#355579]">
                      Context Hydration: <strong className="text-[#059669]">Instantaneous (100% matched)</strong>
                    </div>
                    <div className="text-[#355579]">
                      Lineage Preserved: Entity graph + previous decisions
                    </div>
                    <div className="text-[10px] font-mono text-[#059669]">
                      Zero Context Degradation
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-[#D6E8F8] pt-2 text-[10px] text-[#5E728B]">
                  No re-prompting required. Cross-model continuity without vendor lock-in.
                </div>
              </div>
            </div>

            {/* Architecture Metrics Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#D6E8F8] bg-white px-4 py-2.5 text-xs text-[#355579]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                <span className="font-semibold text-[#082B5E]">Network Mesh State:</span>
                <span>Active FastMCP relays connecting heterogeneous runtime environments</span>
              </div>
              <div className="flex items-center gap-4 font-mono text-[11px]">
                <span>Host Resumption: 14ms</span>
                <span>Credential Leaks: 0</span>
                <span>Protocol: FastMCP v1.2</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Architectural Narrative Bar & Product Bridge */}
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
            Explore Spine Workspace Product <ArrowRight className="h-3 w-3" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
