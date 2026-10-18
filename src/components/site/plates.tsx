import { useState } from "react";

type Seat = "You" | "Agent" | "Spine";

type Beat = { who: Seat; title: string; detail: string };

function Rail({ label }: { label: string }) {
  return (
    <div className="flex w-12 shrink-0 flex-col items-center border-r border-line bg-ice py-4 text-navy">
      <span className="spine-label text-[11px] font-semibold tracking-wide">{label}</span>
      <span className="mt-4 flex flex-1 flex-col items-center justify-center gap-2" aria-hidden="true">
        <i className="size-1.5 rounded-full bg-blue" />
        <i className="h-6 w-px bg-line" />
        <i className="size-1.5 rounded-full bg-blue" />
        <i className="h-6 w-px bg-line" />
        <i className="size-1.5 rounded-full bg-blue" />
      </span>
    </div>
  );
}

function WorkScene({
  rail,
  title,
  goal,
  beats,
  youLine,
  agentLine,
  closeTitle,
  closeDetail,
}: {
  rail: string;
  title: string;
  goal: string;
  beats: Beat[];
  youLine: string;
  agentLine: string;
  closeTitle: string;
  closeDetail: string;
}) {
  const [focus, setFocus] = useState<"You" | "Agent">("Agent");
  return (
    <article className="flex overflow-hidden rounded-card border border-line bg-paper shadow-[0_24px_60px_-28px_rgb(8_43_94/0.45)]">
      <Rail label={rail} />
      <div className="min-w-0 flex-1 p-4 md:p-5">
        <header className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            <p className="text-xs text-muted">Example · not live work</p>
          </div>
          <span className="shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-semibold text-deep">{closeTitle}</span>
        </header>

        <div className="mt-4 rounded-2xl bg-mist px-3 py-3">
          <p className="text-xs text-muted">Work</p>
          <p className="font-semibold">{goal}</p>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label="Who is in focus">
          <SeatButton who="Agent" line={agentLine} active={focus === "Agent"} onClick={() => setFocus("Agent")} />
          <SeatButton who="You" line={youLine} active={focus === "You"} onClick={() => setFocus("You")} />
        </div>

        <ul className="mt-4 space-y-2 border-l-2 border-blue/30 pl-4">
          {beats.map((beat) => {
            const dim = beat.who !== "Spine" && beat.who !== focus;
            return (
              <li key={beat.title} className={"flex items-center justify-between gap-3 rounded-xl px-2 py-2 " + (dim ? "opacity-40" : "bg-ice")}>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{beat.title}</span>
                  <span className="block text-xs text-muted">{beat.detail}</span>
                </span>
                <span className="shrink-0 rounded-full bg-paper px-2 py-1 text-xs font-semibold text-deep">{beat.who === "Agent" ? "Agent" : beat.who}</span>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-sm text-muted">
          <span className="font-semibold text-navy">{closeTitle}. </span>
          {closeDetail}
        </p>
      </div>
    </article>
  );
}

function SeatButton({ who, line, active, onClick }: { who: "You" | "Agent"; line: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "min-h-14 rounded-2xl border px-3 text-left " +
        (active ? "border-blue bg-ice text-navy" : "border-line text-muted")
      }
    >
      <span className="block text-sm font-semibold">{who === "Agent" ? "AI agent" : "You"}</span>
      <span className="block text-xs font-medium">{line}</span>
    </button>
  );
}

export function HomePlate() {
  return (
    <WorkScene
      rail="Spine"
      title="Shared situation"
      goal="People and the agent, on the same work"
      youLine="Decides"
      agentLine="The counterpart"
      closeTitle="Awaiting you"
      closeDetail="The agent prepares. You direct. Spine keeps the situation."
      beats={[
        { who: "Agent", title: "Gathers what this task needs", detail: "Authorized sources only" },
        { who: "Spine", title: "Holds it as one situation", detail: "Not a pile of exports" },
        { who: "You", title: "Chooses the next step", detail: "Nothing proceeds alone" },
      ]}
    />
  );
}

export function WorkspacePlate() {
  return (
    <WorkScene
      rail="Workspace"
      title="Ready view"
      goal="Open the work. Don’t build the screen first."
      youLine="Account lead"
      agentLine="Drafts the view"
      closeTitle="Your decision"
      closeDetail="A ready view is not permission to act."
      beats={[
        { who: "Agent", title: "Fills the working view", detail: "What needs a person" },
        { who: "You", title: "Reviews it in place", detail: "Dashboard or Canvas" },
        { who: "Spine", title: "One fabric underneath", detail: "Same context, either surface" },
      ]}
    />
  );
}

export function FabricPlate() {
  return (
    <WorkScene
      rail="Fabric"
      title="Related records"
      goal="Make separate systems one situation"
      youLine="Inspects the basis"
      agentLine="Reads the relationship"
      closeTitle="Source stays owner"
      closeDetail="Fabric holds the link. It does not take the record."
      beats={[
        { who: "Spine", title: "Customer stays put", detail: "The source keeps it" },
        { who: "Spine", title: "Commitment is linked", detail: "Not copied into a new silo" },
        { who: "Agent", title: "Prepares from the link", detail: "Evidence named" },
        { who: "You", title: "Can see where it came from", detail: "Before you decide" },
      ]}
    />
  );
}

export function WorkbenchPlate() {
  return (
    <WorkScene
      rail="Workbench"
      title="My Work"
      goal="One entry. The mode changes. The work does not."
      youLine="Your scope"
      agentLine="Same work"
      closeTitle="Not a second menu"
      closeDetail="Domains open inside the workbench you are allowed to use."
      beats={[
        { who: "You", title: "Your open work", detail: "Not a blank canvas" },
        { who: "Agent", title: "A draft beside it", detail: "Evidence attached" },
        { who: "Spine", title: "Projected from Fabric", detail: "One context, this role’s cut" },
      ]}
    />
  );
}

export function AgentPlate() {
  return (
    <WorkScene
      rail="Agent"
      title="The counterpart"
      goal="Prepare the next step, then wait"
      youLine="Directs"
      agentLine="Prepares"
      closeTitle="Not permission"
      closeDetail="An AI agent is the counterpart. It does not decide."
      beats={[
        { who: "Agent", title: "Gathers", detail: "From what you are allowed to use" },
        { who: "Agent", title: "Proposes", detail: "Explanation, draft, or next step" },
        { who: "You", title: "Edits, approves, or declines", detail: "The decision stays open" },
      ]}
    />
  );
}

export function GovernPlate() {
  return (
    <WorkScene
      rail="Authority"
      title="Before it proceeds"
      goal="Separate a proposal from permission"
      youLine="Allows or declines"
      agentLine="Can only ask"
      closeTitle="Awaiting authority"
      closeDetail="Asked, allowed, and recorded are different states."
      beats={[
        { who: "Agent", title: "Asked", detail: "A proposed operation" },
        { who: "You", title: "Allowed or declined", detail: "A person with authority" },
        { who: "Spine", title: "Recorded", detail: "What actually happened" },
      ]}
    />
  );
}

export function NetworkPlate() {
  return (
    <WorkScene
      rail="Host"
      title="One ecosystem"
      goal="Keep the AI host you use now"
      youLine="Still decides"
      agentLine="Same tools"
      closeTitle="Nothing replaced"
      closeDetail="The host stays. The tools stay. The work and the context move."
      beats={[
        { who: "You", title: "Stay in your host", detail: "No new silo" },
        { who: "Agent", title: "Uses what you already run", detail: "Apps and tools" },
        { who: "Spine", title: "Moves the context", detail: "Not the credentials" },
        { who: "You", title: "Work as one ecosystem", detail: "Then decide" },
      ]}
    />
  );
}
