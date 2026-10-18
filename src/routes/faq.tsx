import { createFileRoute } from "@tanstack/react-router";
import { FaqList, PageHero } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Questions | Spine InnovTech" },
      { name: "description", content: "Plain answers on shared context, human control, readiness, captures and how to evaluate Spine Workspace." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Questions"
        title="What people usually need to know first."
        lede="Short answers. Where a claim would need evidence we do not publish, the answer says so."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <FaqList />
      </section>
    </Page>
  );
}
