import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CAPTURE_NOTE, faqs, renewal, stages } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold tracking-wide text-deep">{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  scene,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
  scene?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line bg-ice">
      <div className={"mx-auto max-w-6xl px-5 py-12 md:py-16 " + (scene ? "grid items-start gap-10 lg:grid-cols-2" : "")}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {scene}
      </div>
    </header>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
      {children}
    </Link>
  );
}

export function SecondaryLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-navy"
    >
      {children}
    </Link>
  );
}

export function Capture({ src, alt, kicker }: { src: string; alt: string; kicker: string }) {
  return (
    <figure>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-deep">{kicker}</p>
      <img src={src} alt={alt} className="w-full rounded-card border border-line bg-paper" />
    </figure>
  );
}

export function CaptureNote() {
  return <p className="text-sm leading-relaxed text-muted">{CAPTURE_NOTE}</p>;
}

export function StageBoard() {
  const [active, setActive] = useState(4);
  const stage = stages[active];
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Working relationship">
        {stages.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={
                selected
                  ? "min-h-11 shrink-0 rounded-full bg-blue px-4 text-left text-sm font-semibold text-paper lg:rounded-card lg:px-4 lg:py-3"
                  : "min-h-11 shrink-0 rounded-full border border-line bg-paper px-4 text-left text-sm font-medium text-navy lg:rounded-card lg:px-4 lg:py-3"
              }
            >
              <span className="mr-2 text-xs text-deep">{String(index + 1).padStart(2, "0")}</span>
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="rounded-card border border-line bg-paper p-6 lg:col-span-8" role="tabpanel">
        <p className="text-sm font-semibold text-deep">What happens</p>
        <p className="mt-2 text-xl font-semibold tracking-tight">{stage.happens}</p>
        <p className="mt-6 text-sm font-semibold text-deep">What you see or control</p>
        <p className="mt-2 text-lg leading-relaxed text-muted">{stage.controls}</p>
      </div>
    </div>
  );
}

export function RelationshipFrame() {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-deep">Application view · the person’s workspace stays in the center</p>
      <img
        src="/media/shell.webp"
        alt="Spine Workspace shell for an Account Success view, with fixture records, a Fabric table and a link into Canvas."
        className="w-full rounded-card border border-line bg-paper"
      />
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <aside className="rounded-card border border-line bg-paper p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-deep">Beside the view · shared context</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Agents gather account records, open issues and commitments from authorized sources. You can inspect what was available. The panels are explanation, not product chrome.
          </p>
        </aside>
        <aside className="rounded-card border border-line bg-ice p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-deep">Beside the view · your decision</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            A proposal can be revised, approved or declined. These words describe the control point. They do not run an action, and the capture is not a completed customer outcome.
          </p>
        </aside>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{CAPTURE_NOTE}</p>
    </div>
  );
}

export function RenewalWalk() {
  return (
    <ol className="grid gap-3 md:grid-cols-5">
      {renewal.map((step, index) => (
        <li
          key={step.title}
          className={
            "emphasis" in step && step.emphasis
              ? "rounded-card border border-blue bg-ice p-4"
              : "rounded-card border border-line bg-paper p-4"
          }
        >
          <p className="text-xs font-semibold text-deep">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 font-semibold tracking-tight">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList() {
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-paper">
      {faqs.map((item) => (
        <details key={item.q} className="group px-5 py-1">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold">
            {item.q}
            <span className="text-deep group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
