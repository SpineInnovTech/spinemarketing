import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AgentPlate, FabricPlate, GovernPlate, HomePlate, NetworkPlate, WorkbenchPlate, WorkspacePlate } from "@/components/site/plates";

const offers = [
  { href: "/workspace", name: "SpineWorkspace", line: "The place you and the agent work.", plate: <WorkspacePlate /> },
  { href: "/technology/fabric", name: "Fabric", line: "Records become one situation.", plate: <FabricPlate /> },
  { href: "/technology#workbench", name: "Workbench", line: "A surface for this role, already built.", plate: <WorkbenchPlate /> },
  { href: "/technology#twin", name: "AI agents", line: "The counterpart that prepares.", plate: <AgentPlate /> },
  { href: "/technology/governance", name: "Authority", line: "A proposal is not permission.", plate: <GovernPlate /> },
  { href: "/technology/network", name: "Network", line: "Context travels. Credentials stay.", plate: <NetworkPlate /> },
];

export function StoryHome() {
  return (
    <>
      <section className="story-wash border-b border-line">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-deep">Spine InnovTech</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">People and AI agents. One business context.</h1>
            <p className="mt-5 max-w-md text-lg text-muted">AI agents are the counterpart. They prepare. You decide.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/workspace" className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
                Explore SpineWorkspace
              </Link>
              <a href="#offers" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold">
                See what we build
              </a>
            </div>
          </div>
          <HomePlate />
        </div>
      </section>

      <Offers />

      <section className="border-t border-line bg-ice text-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight">Bring one workflow. We’ll put the agent on it.</h2>
          <Link to="/contact" search={{ topic: "evaluation" }} className="inline-flex min-h-11 items-center rounded-full bg-paper px-5 text-sm font-semibold text-navy">
            Discuss a workflow
          </Link>
        </div>
      </section>
    </>
  );
}

function Offers() {
  const [index, setIndex] = useState(0);
  const offer = offers[index] ?? offers[0];
  return (
    <section id="offers" className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Same instrument. A different job.</h2>
        <div className="mt-6 flex flex-col gap-2" role="tablist" aria-label="What Spine InnovTech builds">
          {offers.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={
                "min-h-11 rounded-2xl border px-4 text-left text-sm font-semibold " +
                (i === index ? "border-blue bg-ice" : "border-line bg-paper text-muted")
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm text-muted">{offer.line}</p>
        <div key={offer.name}>{offer.plate}</div>
        <a href={offer.href} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-deep">
          Open {offer.name}
        </a>
      </div>
    </section>
  );
}
