import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  Cable,
  CalendarClock,
  ListChecks,
  Puzzle,
  Server,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import {
  INTEGRATION_CATALOG,
  hasKnownIntegrationMark,
  integrationLogo,
  integrationMarkKey,
} from "@/lib/integration-logos";

export const INTEGRATIONS_HREF = "/integrations#full-catalog";

export type ConnectorNavMark = {
  name: string;
  href: string;
  src: string;
};

export type KindNavMark = {
  name: string;
  href: string;
  icon: LucideIcon;
};

/** One mark per real connector in the catalogue. Names stay off the visible tile. */
export function getConnectorNavMarks(): ConnectorNavMark[] {
  const seen = new Set<string>();
  const marks: ConnectorNavMark[] = [];

  for (const group of INTEGRATION_CATALOG) {
    for (const name of group.connectors) {
      if (!hasKnownIntegrationMark(name)) continue;
      const key = integrationMarkKey(name);
      if (seen.has(key)) continue;
      seen.add(key);
      const logo = integrationLogo(name);
      marks.push({ name, href: INTEGRATIONS_HREF, src: logo.src });
    }
  }

  return marks;
}

/** Categories SpineWorkspace connects. Icons only — not product claims or counts. */
export const INTEGRATION_KIND_MARKS: KindNavMark[] = [
  { name: "Connections", icon: Cable },
  { name: "Plugins", icon: Puzzle },
  { name: "Tools", icon: Wrench },
  { name: "Skills", icon: Sparkles },
  { name: "Workflows", icon: Workflow },
  { name: "Automations", icon: Zap },
  { name: "Schedules", icon: CalendarClock },
  { name: "Tasks", icon: ListChecks },
  { name: "Product tools", icon: Boxes },
  { name: "Assistants", icon: Bot },
  { name: "Places you work", icon: Server },
].map((item) => ({ ...item, href: INTEGRATIONS_HREF }));
