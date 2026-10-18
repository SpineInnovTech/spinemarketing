import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleUserRound,
  FileText,
  History,
  Home,
  LayoutDashboard,
  MessagesSquare,
  Network,
  NotebookPen,
  Search,
  ShieldCheck,
  Sparkles,
  Table2,
  UserRound,
  Users,
  Workflow,
} from "lucide-react";

const primary = [
  ["Home", Home],
  ["Recents", History],
  ["Personal", UserRound],
  ["Communications", MessagesSquare],
] as const;

const secondary = [
  ["My Twin", Sparkles],
  ["Platform", Network],
  ["Admin", ShieldCheck],
] as const;

const views = [
  ["workbench", "Workbench", LayoutDashboard],
  ["table", "Table", Table2],
  ["canvas", "Canvas", NotebookPen],
  ["documents", "Documents", FileText],
  ["graph", "Graph", Network],
  ["analytics", "Analytics", BarChart3],
  ["automations", "Automations", Workflow],
  ["twin", "Twin", Bot],
] as const;

type ViewId = (typeof views)[number][0];

const rows = [
  ["Account updates", "Latest activity and key changes", Sparkles],
  ["Support history", "Open and resolved requests", FileText],
  ["Meeting notes", "Recent decisions and action items", CheckCircle2],
] as const;

function ActiveView({ view }: { view: ViewId }) {
  if (view === "canvas") {
    return (
      <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl border border-line bg-paper p-3">
        {[
          ["Goal", "Prepare the next step"],
          ["Context", "Customer review"],
          ["Evidence", "Three linked sources"],
          ["Decision", "Awaiting review"],
        ].map(([k, v]) => (
          <article key={k} className="rounded-lg border border-line bg-ice p-3">
            <p className="text-[10px] uppercase tracking-wide text-muted">{k}</p>
            <p className="mt-1 text-xs font-semibold">{v}</p>
          </article>
        ))}
      </div>
    );
  }
  if (view === "table") {
    return (
      <div className="mt-3 overflow-hidden rounded-xl border border-line bg-paper text-xs">
        <div className="grid grid-cols-3 bg-ice px-3 py-2 text-[10px] uppercase tracking-wide text-muted">
          <span>Context</span><span>Source</span><span>State</span>
        </div>
        {rows.map(([title], index) => (
          <div key={title} className="grid grid-cols-3 border-t border-line px-3 py-2">
            <strong>{title}</strong><span className="text-muted">Source {index + 1}</span><span className="text-muted">Available</span>
          </div>
        ))}
      </div>
    );
  }
  if (view === "graph") {
    return (
      <div className="relative mt-3 grid min-h-48 grid-cols-3 place-items-center rounded-xl border border-line bg-paper p-4 text-[11px]">
        <span className="rounded-full border border-line bg-ice px-2 py-1">Account updates</span>
        <span className="col-start-2 row-start-2 grid size-20 place-items-center rounded-full bg-blue text-center text-xs font-semibold text-paper">Customer review</span>
        <span className="col-start-3 row-start-2 rounded-full border border-line bg-ice px-2 py-1">Support history</span>
        <span className="col-start-2 row-start-3 rounded-full border border-line bg-ice px-2 py-1">Meeting notes</span>
        <span className="col-start-1 row-start-2 rounded-full border border-line bg-ice px-2 py-1">Next step</span>
      </div>
    );
  }
  if (view === "documents") {
    return (
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {rows.map(([title]) => (
          <article key={title} className="rounded-xl border border-line bg-paper p-3 text-xs">
            <FileText className="size-4 text-blue" />
            <strong className="mt-4 block">{title}</strong>
            <span className="text-muted">Linked to current work</span>
          </article>
        ))}
      </div>
    );
  }
  if (view === "automations") {
    return (
      <div className="mt-3 grid grid-cols-5 overflow-hidden rounded-xl border border-line bg-paper text-center text-xs">
        {["Signal", "Prepare", "Review", "Act", "Observe"].map((step, index) => (
          <div key={step} className="border-r border-line px-2 py-4 last:border-r-0">
            <p className="text-[10px] font-semibold text-blue">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-1 font-semibold">{step}</p>
          </div>
        ))}
      </div>
    );
  }
  if (view === "analytics") {
    return (
      <div className="mt-3 grid gap-3 rounded-xl border border-line bg-paper p-3 sm:grid-cols-[1.4fr_0.8fr]">
        <div className="flex h-36 items-end justify-around rounded-lg bg-ice px-3 pb-0">
          {[42, 66, 54, 78, 62].map((height) => (
            <span key={height} className="w-6 rounded-t bg-blue" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="self-center text-xs">
          <BarChart3 className="size-4 text-blue" />
          <strong className="mt-2 block">Context before numbers</strong>
          <span className="text-muted">Metrics keep their source and scope.</span>
        </div>
      </div>
    );
  }
  if (view === "twin") {
    return (
      <div className="mt-3 rounded-xl border border-line bg-paper p-3">
        <div className="flex items-center gap-2 rounded-lg bg-ice p-3 text-xs">
          <Bot className="size-4 text-blue" />
          <p>I brought the linked context together for your review.</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {rows.map(([title]) => (
            <span key={title} className="rounded-full border border-line px-2 py-1 text-[11px] text-muted">{title}</span>
          ))}
        </div>
        <p className="mt-3 flex items-center gap-2 rounded-lg bg-ice px-3 py-2 text-xs font-semibold text-deep">
          <ShieldCheck className="size-3.5" /> A proposed next step still needs review
        </p>
      </div>
    );
  }
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-line bg-paper">
      <div className="flex items-center justify-between border-b border-line px-3 py-2 text-xs">
        <strong>Work in context</strong>
        <span className="text-[10px] uppercase tracking-wide text-muted">Evidence · freshness · owner</span>
      </div>
      {rows.map(([title, detail, Icon]) => (
        <div key={title} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-line px-3 py-3 last:border-b-0">
          <span className="grid size-7 place-items-center rounded-lg bg-ice text-blue"><Icon className="size-3.5" /></span>
          <div>
            <strong className="block text-xs">{title}</strong>
            <span className="text-[11px] text-muted">{detail}</span>
          </div>
          <span className="rounded-full bg-ice px-2 py-1 text-[10px] text-deep">Visible state</span>
        </div>
      ))}
    </div>
  );
}

export function WorkspacePreview() {
  const [active, setActive] = useState<ViewId>("workbench");
  const previewId = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % views.length : event.key === "ArrowLeft" ? (index - 1 + views.length) % views.length : event.key === "Home" ? 0 : event.key === "End" ? views.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    setActive(views[next][0]);
    tabs.current[next]?.focus();
  }

  return (
    <div className="overflow-x-auto pb-2">
      <div className="min-w-[760px] overflow-hidden rounded-[1.4rem] border border-line bg-paper text-left shadow-[0_30px_80px_-36px_rgb(8_43_94/0.45)]">
        <div className="flex items-center gap-3 border-b border-line bg-ice px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-muted">
          <span className="flex gap-1" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-[#7eb6ff]" />
            <span className="size-1.5 rounded-full bg-[#f0b429]" />
            <span className="size-1.5 rounded-full bg-blue" />
          </span>
          <span>Spine Workspace · My Work</span>
          <span className="ml-auto text-deep">Illustrative interface · no live data</span>
        </div>
        <div className="flex gap-1 overflow-x-auto border-b border-line bg-paper px-3 py-2" role="tablist" aria-label="Workbench views">
          {views.map(([id, label, Icon], index) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`${previewId}-${id}`}
              aria-selected={active === id}
              tabIndex={active === id ? 0 : -1}
              ref={(node) => { tabs.current[index] = node; }}
              onClick={() => setActive(id)}
              onKeyDown={(event) => onKey(event, index)}
              className={"inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3 text-xs font-semibold " + (active === id ? "border border-blue bg-ice text-deep ring-2 ring-blue/30" : "text-muted")}
            >
              <Icon className="size-3.5" /> {label}
            </button>
          ))}
        </div>
        <div className="grid min-h-[460px] grid-cols-[168px_minmax(0,1fr)]">
          <aside className="flex flex-col bg-[#071833] p-3 text-[12px] text-[#d6e8ff]" aria-label="Workspace navigation">
            <span className="mb-3 ml-1 grid size-7 place-items-center rounded-lg bg-blue text-paper">
              <span className="size-2.5 rotate-45 rounded-[2px] border border-paper" />
            </span>
            {primary.map(([label, Icon]) => (
              <span key={label} className="flex h-8 items-center gap-2 px-2"><Icon className="size-3.5 opacity-80" /> {label}</span>
            ))}
            <div className="my-1 rounded-xl bg-blue px-2 py-1 text-paper">
              <p className="flex h-8 items-center gap-2 font-semibold"><BriefcaseBusiness className="size-3.5" /> My Work <ChevronDown className="ml-auto size-3.5" /></p>
              <p className="flex h-7 items-center gap-2 pl-5"><Users className="size-3.5" /> My Team</p>
              <p className="flex h-7 items-center gap-2 pl-5"><Building2 className="size-3.5" /> Organization</p>
            </div>
            {secondary.map(([label, Icon]) => (
              <span key={label} className="flex h-8 items-center gap-2 px-2"><Icon className="size-3.5 opacity-80" /> {label}</span>
            ))}
            <span className="mt-auto flex h-9 items-center gap-2 border-t border-white/10 px-2 pt-2"><CircleUserRound className="size-3.5" /> Profile</span>
          </aside>
          <section className="bg-[radial-gradient(circle_at_90%_0%,rgb(0_111_232/0.08),transparent_16rem),#f7fbff] p-4" role="tabpanel" id={`${previewId}-panel`} aria-labelledby={`${previewId}-${active}`}>
            <div className="flex h-9 items-center gap-2 rounded-lg border border-line bg-paper px-3 text-xs text-muted">
              <Search className="size-3.5" /> Find a work view
            </div>
            <header className="flex items-end justify-between gap-3 py-4">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-muted">Account Success · Role-aware view</p>
                <h3 className="mt-1 text-lg font-semibold">Customer review</h3>
              </div>
              <span className="rounded-full bg-ice px-2 py-1 text-[11px] text-deep">Same scoped context</span>
            </header>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Goal", "Prepare next step"],
                ["Evidence", "Linked sources"],
                ["Control", "Awaiting review"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-line bg-paper p-3">
                  <p className="text-[10px] uppercase tracking-wide text-muted">{k}</p>
                  <p className="mt-1 text-sm font-semibold">{v}</p>
                </div>
              ))}
            </div>
            <ActiveView view={active} />
          </section>
        </div>
      </div>
    </div>
  );
}

export function PreviewPrinciples() {
  return (
    <ul className="mt-5 flex flex-wrap items-center justify-center gap-2" aria-label="Product principles">
      {[
        ["Same governed context", Check],
        ["Separate continuity", Check],
        ["Human control", ShieldCheck],
      ].map(([label, Icon]) => (
        <li key={label as string} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium shadow-sm">
          <Icon className="size-3.5 text-blue" /> {label as string}
        </li>
      ))}
    </ul>
  );
}
