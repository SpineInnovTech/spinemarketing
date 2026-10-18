import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";
import { EMAIL, LEGAL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | Spine InnovTech" },
      { name: "description", content: "Terms for the Spine InnovTech corporate website. They are not a Spine Workspace subscription agreement." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Website terms"
        title="Terms for this corporate website."
        lede="These terms cover the public site and its published material. They are not a subscription agreement, an order form, or the terms of Spine Workspace."
      />
      <article className="mx-auto max-w-3xl space-y-6 px-5 py-16 leading-relaxed text-muted">
        <p>Operator: {LEGAL}. Questions: {EMAIL}.</p>
        <p>
          Using the site means you will follow applicable law. If you do not agree, do not use it. Opening these pages does not create a product subscription or a right to a service.
        </p>
        <p>
          Material here is for information and evaluation. Diagrams, scenarios and application captures describe capabilities at the stage shown. A capture of a control is not a promise that an action has been completed, or that a planned behavior is generally available.
        </p>
        <p>
          Unless noted, original text, design and marks on this site belong to the operator or its licensors. You may link to public pages. You may not present the material as your own or use the brand to imply a partnership that does not exist. Other companies’ names remain theirs.
        </p>
        <p>
          Do not misuse the site, attempt unauthorized access, or send unlawful material. An inquiry does not create a customer, employment or agency relationship. Do not include confidential material you are not ready to send by email.
        </p>
        <p>
          Links may leave this site, including to the separate Spine Workspace product site. Those destinations have their own terms. Public technical writing is not legal, financial or security-certification advice.
        </p>
        <p>
          The site may change or be unavailable. To the extent the law allows, informational pages are provided without a warranty of uninterrupted access or fitness for a particular purpose. Nothing here removes a right that cannot legally be removed. Governing law and dispute terms are set with counsel for the operating entity and are not invented on this page.
        </p>
      </article>
    </Page>
  );
}
