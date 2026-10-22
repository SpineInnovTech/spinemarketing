"use client";

import { FileText, Flag, Inbox, Landmark, MessageSquare, MousePointer2, SquareCheck, Target } from "lucide-react";
import { AppLogo } from "@/components/marketing/app-logo";
import { heroGlassClass } from "@/components/marketing/page-hero";
import { integrationLogo } from "@/lib/integration-logos";
import mediaStyles from "./responsive-media.module.css";

const CLUSTER = ["Salesforce", "Slack", "HubSpot", "Stripe", "Jira", "Notion"].map((name) => integrationLogo(name));

const CLUSTER_POSITIONS = [
  "left-[6%] top-[10%]",
  "right-[8%] top-[14%]",
  "left-[0%] top-[46%]",
  "right-[0%] top-[48%]",
  "left-[14%] bottom-[8%]",
  "right-[12%] bottom-[10%]",
];

export function DataFabricPanel() {
  return (
    <div className="flex min-w-0 items-center justify-center">
      <img
        src="/heroes/data-fabric-scene.jpg"
        alt="Glass panels for customers, goals, work, decisions, evidence, and outcomes on a light reflective glass floor"
        width={536}
        height={398}
        loading="lazy"
        decoding="async"
        className={mediaStyles.media}
      />
    </div>
  );
}

const WORKFLOW_STAGES = [
  {
    stage: "Assemble",
    detail: "Renewal date, contract terms, account owner, and open ticket state sit with the latest commitment, the usage change, and the escalation notes.",
  },
  {
    stage: "Identify",
    detail: "The renewal risk is named. Each point links back to its source.",
  },
  {
    stage: "Propose",
    detail: "Twin prepares one action: create a renewal follow-up task in the connected CRM, for the account owner.",
  },
  {
    stage: "Review",
    detail: "The account owner inspects the evidence, edits the follow-up, and approves it. Approved is not completed.",
  },
  {
    stage: "Execute",
    detail: "The approved action is sent to the CRM that owns the record. The workspace then shows success, failure, or still pending.",
  },
  {
    stage: "Continue",
    detail: "The decision and the execution result stay with the work, so the team can resume without rebuilding the account.",
  },
] as const;

export function RenewalWorkflowNarrative() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#D9E4EF] bg-white shadow-[0_18px_48px_rgba(3,45,96,0.08)]">
      <div className="border-b border-[#D9E4EF] bg-[#EAF5FC] px-6 py-4">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Illustrative workflow</p>
        <p className="mt-1 text-[length:min(18px,var(--marketing-body-size))] font-semibold text-[#032D60]">Renewal readiness for Northstar Labs</p>
        <p className="mt-1 text-[14px] text-[#526479]">Demonstration, not a customer result</p>
      </div>
      <ol className="divide-y divide-[#D9E4EF]">
        {WORKFLOW_STAGES.map(({ stage, detail }, index) => (
          <li key={stage} className="grid gap-2 px-6 py-4 sm:grid-cols-[minmax(0,9rem)_1fr] sm:gap-6">
            <span className="text-[13px] font-semibold tabular-nums text-[#0176D3]">
              {String(index + 1).padStart(2, "0")} · {stage}
            </span>
            <span className="text-[14px] leading-[1.6] text-[#33465B]">{detail}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RenewalReviewPanel() {
  return (
    <div className="relative min-w-0 max-w-full overflow-hidden rounded-[16px]">
      <img
        src="/heroes/glass-base.jpg"
        alt=""
        width={1280}
        height={960}
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />
      <div className="relative p-4">
        <div className={`mx-auto p-4 ${heroGlassClass}`}>
          <img
            src="/heroes/renewal-review-card.jpg"
            alt="Example workspace: renewal review for Northstar Labs, with Maya and Twin, awaiting your decision"
            width={480}
            height={495}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={`${mediaStyles.media} rounded-[16px]`}
          />
        </div>
      </div>
    </div>
  );
}

export function TwinReviewPanel() {
  return (
    <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5 shadow-[0_1px_2px_rgba(3,45,96,0.04)]">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Spine Twin</p>
      <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">Truth and context</h2>
      <ul className="mt-3 space-y-2 text-[14px] text-[#33465B]">
        <li>Records: the permitted facts about the current goal and work</li>
        <li>Context: relevant signals, evidence and earlier decisions</li>
        <li>Proposal: options and a next step, ready for authorized review</li>
      </ul>
      <div className="mt-4 rounded-xl border border-[#D9E4EF] bg-[#F3F6F9] p-4">
        <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#0176D3]">Proposed next step</p>
        <p className="mt-1 text-[14px] text-[#032D60]">Prepare the next step from the goal, evidence and responsibilities.</p>
        <p className="mt-2 text-[13px] font-semibold text-[#526479]">Awaiting review</p>
      </div>
    </div>
  );
}

export function SharedWorkPanel() {
  return (
    <div className="relative pb-2">
      <div className="relative z-0 ml-6 rounded-2xl border border-[#D9E4EF] bg-white p-5 shadow-[0_8px_24px_rgba(3,45,96,0.06)] sm:ml-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Workbench</p>
        <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">You</h2>
        <p className="mt-2 text-[14px] leading-[1.55] text-[#33465B]">Northstar Labs renewal. The goal is the renewal decision, with the records and the evidence already in the tools this team uses.</p>
      </div>
      <div className="relative z-20 -mt-5 mr-4 rounded-2xl border border-[#D9E4EF] bg-[#EAF5FC] p-5 shadow-[0_18px_40px_rgba(1,118,211,0.16)] sm:mr-8">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Twin</p>
        <p className="mt-2 text-[14px] leading-[1.55] text-[#032D60]">Prepares a proposal from the record and the evidence this person may see. The proposal is not the record.</p>
      </div>
      <div className="relative z-10 -mt-3 ml-8 rounded-2xl border border-[#D9E4EF] bg-[#F3F6F9] p-5 shadow-[0_8px_24px_rgba(3,45,96,0.05)] sm:ml-14">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Shared Work</p>
        <p className="mt-2 text-[15px] font-semibold text-[#032D60]">Awaiting review</p>
      </div>
    </div>
  );
}

export function RecordsPanel() {
  return (
    <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Business Context</p>
      <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">Records, evidence, provenance</h2>
      <dl className="mt-4 space-y-3 text-[14px]">
        <div>
          <dt className="font-semibold text-[#032D60]">Truth</dt>
          <dd className="text-[#33465B]">Account status, as held in the source system.</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#032D60]">Context</dt>
          <dd className="text-[#33465B]">The note assembled for this task. Not a new home for the record.</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#032D60]">Evidence</dt>
          <dd className="text-[#33465B]">Linked, not copied into a new home for the record.</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#032D60]">Provenance</dt>
          <dd className="text-[#33465B]">The source system stays authoritative until a person accepts a change.</dd>
        </div>
      </dl>
    </div>
  );
}

export function RoleViewPanel() {
  const views = [
    ["Sales", "The next customer step"],
    ["Operations", "What is blocked in the handoff"],
    ["Leadership", "The decision still waiting"],
  ];
  return (
    <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">One Work</p>
      <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">Customer onboarding</h2>
      <p className="mt-1 text-[13px] font-semibold text-[#0176D3]">Awaiting review</p>
      <ul className="mt-4 space-y-2">
        {views.map(([role, view]) => (
          <li key={role} className="flex items-baseline justify-between gap-3 rounded-lg border border-[#D9E4EF] bg-[#F3F6F9] px-3 py-2">
            <span className="text-[13px] font-semibold text-[#032D60]">{role}</span>
            <span className="text-right text-[13px] text-[#33465B]">{view}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[13px] leading-[1.5] text-[#33465B]">Same work. The view follows the role.</p>
    </div>
  );
}

export function GovernancePanel() {
  return (
    <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Authority</p>
      <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">Pending review</h2>
      <p className="mt-2 text-[14px] leading-[1.55] text-[#33465B]">A proposal stays a proposal until a person with authority accepts it.</p>
      <ul className="mt-4 space-y-2 text-[14px] text-[#33465B]">
        <li className="rounded-lg bg-[#F3F6F9] px-3 py-2"><span className="font-semibold text-[#032D60]">Personal memory</span> stays with the person</li>
        <li className="rounded-lg bg-[#F3F6F9] px-3 py-2"><span className="font-semibold text-[#032D60]">Session memory</span> stays with that sitting</li>
        <li className="rounded-lg bg-[#EAF5FC] px-3 py-2"><span className="font-semibold text-[#032D60]">Organizational memory</span> is shared context. It is not the record.</li>
      </ul>
    </div>
  );
}

export function ReviewSurface() {
  return (
    <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Review surface</p>
      <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">A person decides</h2>
      <dl className="mt-4 space-y-3 text-[14px]">
        <div>
          <dt className="font-semibold text-[#032D60]">Proposal</dt>
          <dd className="text-[#33465B]">Twin suggests a next step with the evidence it used.</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#032D60]">Boundary</dt>
          <dd className="text-[#33465B]">Availability is not authority. Consequential work waits.</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#032D60]">Status</dt>
          <dd className="font-semibold text-[#0176D3]">Awaiting review</dd>
        </div>
      </dl>
    </div>
  );
}

export function CheckpointPanel() {
  return (
    <div className="rounded-2xl border border-[#D9E4EF] bg-[#F3F6F9] p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Resumed Work</p>
      <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">Same objective, later session</h2>
      <ul className="mt-4 space-y-2 text-[14px] text-[#33465B]">
        <li>Personal memory stays with the person</li>
        <li>Session memory stays with that sitting</li>
        <li>Organizational memory is shared context, not the record</li>
      </ul>
      <p className="mt-4 text-[13px] font-semibold text-[#032D60]">Checkpoint: Awaiting review</p>
    </div>
  );
}

export function AppCluster() {
  return (
    <div>
      <div className="relative mx-auto hidden h-[440px] max-w-[560px] lg:block">
        <div className="absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#D9E4EF] bg-[#032D60] px-4 py-5 text-center text-white shadow-[0_8px_24px_rgba(3,45,96,0.12)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#00A2DF]">Truth and context</p>
          <p className="mt-1 text-[16px] font-semibold">SpineWorkspace</p>
        </div>
        {CLUSTER.map((logo, index) => (
          <div key={logo.id} className={`absolute ${CLUSTER_POSITIONS[index]}`}>
            <AppLogo name={logo.name} src={logo.src} size="md" />
          </div>
        ))}
      </div>
      <ul className="flex flex-wrap items-center gap-3 lg:hidden">
        <li className="inline-flex shrink-0 items-center rounded-xl bg-[#032D60] px-3 py-2 text-[13px] font-semibold whitespace-nowrap text-white">
          SpineWorkspace
        </li>
        {CLUSTER.map((logo) => (
          <li key={logo.id}>
            <AppLogo name={logo.name} src={logo.src} size="sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const STRIP_FACTS: { icon: typeof Flag; label: string; title: string; detail?: string }[] = [
  { icon: Flag, label: "Goal", title: "Prepare the renewal decision" },
  { icon: Landmark, label: "Truth", title: "Renewal date and contract", detail: "Account owner, open ticket state" },
  { icon: Inbox, label: "Context", title: "Latest commitment", detail: "Usage change, escalation notes" },
  { icon: FileText, label: "Evidence", title: "Contract, ticket, email" },
  { icon: MessageSquare, label: "Proposal", title: "Renewal follow-up task" },
  { icon: SquareCheck, label: "Execution", title: "Not started", detail: "Approval is still required" },
];

export function ExampleWorkspaceStrip() {
  return (
      <section aria-label="Example workspace" className="min-w-0">
      <div className="rounded-2xl border border-[#D5E6F2] bg-white px-4 py-4 shadow-[0_24px_50px_rgba(3,45,96,0.14)] sm:px-6 sm:py-5">
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF5FC] text-[#0176D3]" aria-hidden>
              <Target className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-medium text-[#526479]">Example workspace · demonstration</p>
              <p className="text-[length:min(18px,var(--marketing-body-size))] font-semibold tracking-[-0.02em] text-[#032D60] sm:text-[length:min(20px,var(--marketing-body-size))]">Northstar Labs renewal</p>
            </div>
          </div>
          <p className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#33465B]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#8AA0B5]" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-[#526479]" />
            </span>
            Awaiting review · not completed
          </p>
        </div>
        <ul className="mt-4 grid grid-cols-1 gap-4 border-t border-[#E3EEF6] pt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STRIP_FACTS.map(({ icon: Icon, label, title, detail }) => (
            <li key={label} className="flex min-w-0 items-start gap-2.5">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#0176D3]" aria-hidden />
              <div className="min-w-0">
                <p className="text-[12px] text-[#526479]">{label}</p>
                <p className="text-[14px] font-semibold leading-snug text-[#032D60]">{title}</p>
                {detail ? <p className="text-[12px] text-[#526479]">{detail}</p> : null}
              </div>
            </li>
          ))}
          <li className="flex min-w-0 flex-wrap items-center gap-4 sm:col-span-2 lg:col-span-1">
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#032D60]">
              <MousePointer2 className="h-4 w-4 fill-[#032D60] text-[#032D60]" aria-hidden />
              You
            </span>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0176D3]">
              <MousePointer2 className="h-4 w-4 fill-[#0176D3] text-[#0176D3]" aria-hidden />
              Twin
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function ExampleWork({ compact = false, variant = "cards" }: { compact?: boolean; variant?: "cards" | "strip" }) {
  if (variant === "strip") return <ExampleWorkspaceStrip />;
  return (
    <section aria-label="Example workspace" className={compact ? "" : "mt-8 border-t border-[#D9E4EF] pt-6"}>
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Example workspace · demonstration data</p>
      <div className={`mt-3 grid gap-3 ${compact ? "" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        <div className="rounded-xl border border-[#D9E4EF] bg-white p-4">
          <p className="text-[12px] font-semibold text-[#526479]">Work</p>
          <p className="mt-1 text-[15px] font-semibold text-[#032D60]">Customer onboarding</p>
        </div>
        <div className="rounded-xl border border-[#D9E4EF] bg-white p-4">
          <p className="text-[12px] font-semibold text-[#526479]">Goal</p>
          <p className="mt-1 text-[15px] font-semibold text-[#032D60]">Prepare the next step</p>
        </div>
        <div className="rounded-xl border border-[#D9E4EF] bg-white p-4">
          <p className="text-[12px] font-semibold text-[#526479]">Evidence</p>
          <p className="mt-1 text-[15px] text-[#33465B]">Notes from the tools this team already uses</p>
        </div>
        <div className="rounded-xl border border-[#D9E4EF] bg-[#EAF5FC] p-4">
          <p className="text-[12px] font-semibold text-[#526479]">You and Twin</p>
          <p className="mt-1 text-[15px] font-semibold text-[#032D60]">Awaiting review</p>
        </div>
      </div>
    </section>
  );
}
