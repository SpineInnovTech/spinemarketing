import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PrimaryLink, SecondaryLink } from "@/components/site/blocks";
import { NetworkPlate } from "@/components/site/plates";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/technology/network")({
  head: () => ({
    meta: [
      { title: "Host Connected | Spine InnovTech" },
      { name: "description", content: "Keep the AI host and the tools you already use. Host Connected brings authorized apps into one ecosystem and moves the work and the context. It does not replace them." },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Host Connected"
        title="Keep the AI host you use now."
        lede="We do not replace your tools, and we do not replace your AI host. There is no connection silo. You enter the workspace and work from the apps already in use, as one ecosystem. The work moves. The context moves with it."
        scene={<NetworkPlate />}
      />
      <section className="mx-auto max-w-6xl space-y-8 px-5 py-16">
        {[
          ["Your host stays", "Open the workspace from the AI host you already use. Host Connected is not a second place you have to live."],
          ["Your tools stay", "Mail, calendar, CRM, chat, and the other apps that already do the work stay the systems of record. Spine does not take their place."],
          ["No connection silo", "Authorized apps and tools are meant to meet in one ecosystem, not in another inbox you have to translate."],
          ["The work and the context move", "Start in the workspace. Continue in the host. The situation, the decision, and the next step travel. Credentials stay with the host that holds them."],
        ].map(([title, body]) => (
          <article key={title} className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{body}</p>
          </article>
        ))}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">What “connected” means</h2>
          <p className="mt-3 max-w-3xl text-muted">A click opens the workspace. It does not, by itself, authorize every app. A useful connection still needs identity, permission, and a result you can check.</p>
          <ol className="mt-4 grid gap-3 md:grid-cols-5">
            {[
              ["Identity", "Who is acting, and in which workspace."],
              ["Discovery", "Which capabilities are available."],
              ["Authority", "Permission for the intended use."],
              ["Invocation", "The authorized operation itself."],
              ["Verification", "The result reconciled with the evidence required."],
            ].map(([title, body], i) => (
              <li key={title} className="rounded-card bg-ice p-4">
                <p className="text-xs font-semibold text-deep">{i + 1}</p>
                <p className="mt-2 font-semibold">{title}</p>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryLink to="/contact">Discuss host compatibility</PrimaryLink>
          <SecondaryLink to="/docs">Read the documentation map</SecondaryLink>
        </div>
      </section>
    </Page>
  );
}
