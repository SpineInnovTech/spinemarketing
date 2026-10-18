import { Briefcase, Building2, Clock, Home, MessageSquare, Shield, Sparkles, User, UserRound, Users, Waypoints } from "lucide-react";

const shell = [
  ["Home", Home],
  ["Recents", Clock],
  ["Personal", User],
  ["Communications", MessageSquare],
] as const;

export const workbenchModes = [
  ["Workbench", "Priorities, signals, and the next action."],
  ["Table", "The records. A layout is not the source."],
  ["Canvas", "A plan you arrange. It does not rewrite the record."],
  ["Documents", "Briefs and plans, cited and versioned."],
  ["Graph", "Relationships that exist, not ones a model inferred."],
  ["Analytics", "Measures with a source."],
  ["Automations", "A proposal is not an approved run."],
  ["Twin", "The counterpart. Same work. No inherited permission."],
] as const;

export function WorkbenchShell({ className = "" }: { className?: string }) {
  return (
    <aside className={"rounded-card bg-[#071833] p-4 text-[#d6e8ff] " + className}>
      <p className="flex items-center gap-2 px-2 pb-3 text-sm font-semibold text-paper">
        <Waypoints className="size-4" /> Spine Workspace
      </p>
      <ul className="space-y-1">
        {shell.map(([label, Icon]) => (
          <li key={label} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm">
            <Icon className="size-4 opacity-80" /> {label}
          </li>
        ))}
        <li className="rounded-xl bg-blue px-3 py-2 text-paper">
          <p className="flex items-center gap-3 py-1 text-sm font-semibold">
            <Briefcase className="size-4" /> My Work
          </p>
          <p className="flex items-center gap-3 py-1.5 pl-1 text-sm"><Users className="size-4" /> My Team</p>
          <p className="flex items-center gap-3 py-1.5 pl-1 text-sm"><Building2 className="size-4" /> Organization</p>
        </li>
        {([
          ["My Twin", Sparkles],
          ["Platform", Waypoints],
          ["Admin", Shield],
        ] as const).map(([label, Icon]) => (
          <li key={label} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm">
            <Icon className="size-4 opacity-80" /> {label}
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-center gap-3 border-t border-white/10 px-3 pt-4 text-sm">
        <UserRound className="size-4" /> Profile
      </p>
    </aside>
  );
}
