export type Seat = "Agent" | "You" | "Spine";

export type SpineMark = {
  who: Seat;
  label: string;
  detail: string;
};

export function SpineScene({
  name,
  note,
  marks,
  point,
}: {
  name: string;
  note: string;
  marks: SpineMark[];
  point: number;
}) {
  return (
    <figure className="border border-line bg-paper">
      <figcaption className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4">
        <span className="font-semibold tracking-tight">{name}</span>
        <span className="text-right text-xs text-muted">{note}</span>
      </figcaption>
      <ol className="relative px-4 py-3 sm:px-6">
        <span className="absolute bottom-6 left-[5.4rem] top-6 w-px bg-blue sm:left-[6.4rem]" aria-hidden="true" />
        {marks.map((mark, index) => {
          const hot = index === point;
          return (
            <li key={mark.label} className="grid grid-cols-[4.6rem_1.1rem_1fr] items-center gap-3 py-3 sm:grid-cols-[5.6rem_1.1rem_1fr]">
              <span className={"text-right text-[11px] font-semibold uppercase tracking-wide " + (hot ? "text-blue" : "text-muted")}>
                {mark.who}
              </span>
              <span
                className={"relative z-10 size-2.5 justify-self-center rounded-full ring-4 ring-paper " + (hot ? "bg-blue" : "bg-navy")}
                aria-hidden="true"
              />
              <span className={hot ? "bg-ice px-3 py-2" : "px-3 py-2"}>
                <span className="block text-sm font-semibold">{mark.label}</span>
                <span className="block text-xs text-muted">{mark.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

export const scenes = {
  company: {
    name: "Spine InnovTech",
    note: "The company, not one workflow",
    point: 3,
    marks: [
      { who: "Spine" as const, label: "Sources", detail: "The systems the business already runs." },
      { who: "Spine" as const, label: "Shared context", detail: "One situation, still inside permissions." },
      { who: "Agent" as const, label: "AI agent", detail: "The counterpart. Prepares the work." },
      { who: "You" as const, label: "Decision", detail: "Nothing consequential moves past you." },
    ],
  },
  workspace: {
    name: "Renewal review",
    note: "Example · SpineWorkspace",
    point: 3,
    marks: [
      { who: "Agent" as const, label: "Account updates", detail: "Latest activity, brought in." },
      { who: "Agent" as const, label: "Support history", detail: "Open requests, already related." },
      { who: "You" as const, label: "Meeting notes", detail: "What you already decided." },
      { who: "You" as const, label: "Next step", detail: "Confirm the plan, or send it back." },
    ],
  },
  fabric: {
    name: "Spine Fabric",
    note: "Context, not a copy of the source",
    point: 2,
    marks: [
      { who: "Spine" as const, label: "Customer", detail: "Who the work is for." },
      { who: "Spine" as const, label: "Commitment", detail: "What was promised." },
      { who: "Spine" as const, label: "Evidence", detail: "What the proposal rests on." },
      { who: "Spine" as const, label: "Outcome", detail: "What actually happened." },
    ],
  },
  workbench: {
    name: "Spine Workbench",
    note: "A surface, not a build project",
    point: 1,
    marks: [
      { who: "Spine" as const, label: "Context", detail: "Already related in Fabric." },
      { who: "You" as const, label: "Dashboard", detail: "Review what needs a decision." },
      { who: "You" as const, label: "Canvas", detail: "Shape the plan on one surface." },
      { who: "Agent" as const, label: "Same view", detail: "The agent prepares inside it." },
    ],
  },
  twin: {
    name: "AI agents",
    note: "Preparation is not execution",
    point: 1,
    marks: [
      { who: "Agent" as const, label: "Gather", detail: "Find what this task needs." },
      { who: "Agent" as const, label: "Propose", detail: "Draft the next step, with sources." },
      { who: "You" as const, label: "Inspect", detail: "See the evidence, change the draft." },
      { who: "Spine" as const, label: "Stop", detail: "The agent does not grant permission." },
    ],
  },
  runtime: {
    name: "Governed runtime",
    note: "A proposal is not permission",
    point: 1,
    marks: [
      { who: "Agent" as const, label: "Proposal", detail: "Prepared. Still only a proposal." },
      { who: "You" as const, label: "Decision", detail: "Approve, revise, or decline." },
      { who: "Spine" as const, label: "Authority", detail: "Identity, policy, and approval." },
      { who: "Spine" as const, label: "Outcome", detail: "Checked against what was asked." },
    ],
  },
  network: {
    name: "Spine Network",
    note: "Context travels. Credentials do not.",
    point: 1,
    marks: [
      { who: "You" as const, label: "Workspace", detail: "Where you review the work." },
      { who: "Spine" as const, label: "Context", detail: "Moves with the work." },
      { who: "Agent" as const, label: "Another host", detail: "Continues only what it is allowed." },
      { who: "Spine" as const, label: "Credentials", detail: "Stay with the host that holds them." },
    ],
  },
  technology: {
    name: "The spine",
    note: "Five parts, one relationship",
    point: 2,
    marks: [
      { who: "Spine" as const, label: "Fabric", detail: "Relates the situation." },
      { who: "You" as const, label: "Workbench", detail: "Gives you a place to work." },
      { who: "Agent" as const, label: "AI agents", detail: "The counterpart that prepares." },
      { who: "You" as const, label: "Runtime", detail: "Holds the action for your authority." },
      { who: "Spine" as const, label: "Network", detail: "Continues the work across hosts." },
    ],
  },
};
