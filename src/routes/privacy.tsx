import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";
import { EMAIL, LEGAL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Spine InnovTech" },
      { name: "description", content: "How the Spine InnovTech corporate website handles inquiries. Product workspace data is covered separately." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Privacy notice"
        title="This notice covers the corporate website."
        lede="SpineWorkspace accounts, connected business data and customer workspaces are a separate product experience. They are not described here."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-muted">
        <p className="text-sm">
          Operator: {LEGAL}. Contact: {EMAIL}. This is a corporate-site notice. Processor lists, retention schedules and transfer terms still need counsel review before they are treated as final. Do not send passwords, tokens or regulated records through a general inquiry.
        </p>
        <Section title="What this website handles">
          If you email the team, you choose the name, work email, company and message that go into that draft. This introduction does not run a hidden form backend. Optional measurement is not claimed here.
        </Section>
        <Section title="Why">
          To answer the inquiry you started, to keep the correspondence you asked for, and to protect the site from misuse. Marketing mail is not assumed from a product question.
        </Section>
        <Section title="Providers">
          Email leaves this page through your own mail application, addressed to {EMAIL}. Hosting of the published site may process ordinary technical logs. A public advertising-sale claim is not made.
        </Section>
        <Section title="Your requests">
          Depending on where you are, you may have rights to access, correct or delete personal information, or to object to certain uses. Write to {EMAIL} and include enough detail to find the interaction. We may need to confirm it is you.
        </Section>
        <Section title="Children">
          The corporate site is written for a professional audience. It is not directed at children.
        </Section>
      </article>
    </Page>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-navy">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </section>
  );
}
