import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SecondaryLink } from "@/components/site/blocks";
import { AgentPlate, FabricPlate, GovernPlate, NetworkPlate, WorkbenchPlate } from "@/components/site/plates";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/technology/")({
  head: () => ({
    meta: [
      { title: "Technology | Spine InnovTech" },
      { name: "description", content: "Fabric, Workbench, AI agents, governed runtime, and Spine Network. Each part has its own job in the same working relationship." },
    ],
  }),
  component: TechnologyPage,
});

const parts = [
  {
    id: "fabric",
    href: "/technology/fabric",
    title: "Fabric",
    line: "Relates records that stay in their own systems.",
    scene: <FabricPlate />,
  },
  {
    id: "workbench",
    href: "/technology#workbench",
    title: "Workbench",
    line: "Nine entries. The work opens inside My Work.",
    scene: <WorkbenchPlate />,
  },
  {
    id: "twin",
    href: "/technology#twin",
    title: "AI agents",
    line: "The counterpart. Preparation is not execution.",
    scene: <AgentPlate />,
  },
  {
    id: "runtime",
    href: "/technology/governance",
    title: "Authority",
    line: "Asked, allowed, and recorded stay distinct.",
    scene: <GovernPlate />,
  },
  {
    id: "network",
    href: "/technology/network",
    title: "Network",
    line: "The situation continues. Credentials do not.",
    scene: <NetworkPlate />,
  },
];

function TechnologyPage() {
  const [id, setId] = useState("fabric");
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (parts.some((part) => part.id === hash)) setId(hash);
  }, []);
  const current = parts.find((part) => part.id === id) ?? parts[0];

  return (
    <Page>
      <header className="story-wash border-b border-line">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-deep">Technology</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Each part has its own job.</h1>
            <div className="mt-6 flex flex-col gap-2" role="tablist" aria-label="Parts of Spine">
              {parts.map((part) => {
                const selected = part.id === current.id;
                return (
                  <button
                    key={part.id}
                    id={part.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setId(part.id)}
                    className={
                      "flex min-h-11 items-center justify-between rounded-2xl border px-4 text-left " +
                      (selected ? "border-blue bg-paper" : "border-transparent hover:border-line")
                    }
                  >
                    <span className="font-semibold">{part.title}</span>
                    <span className="hidden text-sm text-muted sm:inline">{part.line}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={current.href} className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
                Open {current.title}
              </a>
              <SecondaryLink to="/docs">Documentation map</SecondaryLink>
            </div>
          </div>
          <div key={current.id}>{current.scene}</div>
        </div>
      </header>
    </Page>
  );
}
