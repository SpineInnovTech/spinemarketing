import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/blocks";
import { Page } from "@/components/site/shell";
import { EMAIL, intents, type IntentId } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { topic: IntentId } => {
    const topic = typeof search.topic === "string" ? search.topic : "evaluation";
    const known = intents.some((item) => item.id === topic);
    return { topic: known ? (topic as IntentId) : "evaluation" };
  },
  head: () => ({
    meta: [
      { title: "Contact | Spine InnovTech" },
      { name: "description", content: "Bring Spine InnovTech one workflow. Tell us the tools, the preparation and the decisions that must stay with your team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { topic } = Route.useSearch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState<IntentId>(topic);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const draft = useMemo(() => {
    const label = intents.find((item) => item.id === intent)?.label ?? intent;
    return [
      `Intent: ${label}`,
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      "",
      message || "(Describe the workflow, the tools, and the decisions that must stay under your control.)",
    ].join("\n");
  }, [company, email, intent, message, name]);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Spine InnovTech inquiry")}&body=${encodeURIComponent(draft)}`;

  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Page>
      <PageHero
        eyebrow="Contact"
        title="Bring us one workflow you want to improve."
        lede="Tell us what your team is trying to do, which tools are involved, and where preparation or handoffs become difficult."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12">
        <form
          className="space-y-4 lg:col-span-7"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = mailto;
          }}
        >
          <fieldset>
            <legend className="text-sm font-semibold">Inquiry</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {intents.map((item) => (
                <label key={item.id} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm">
                  <input
                    type="radio"
                    name="intent"
                    value={item.id}
                    checked={intent === item.id}
                    onChange={() => setIntent(item.id)}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>
          <Field label="Name" value={name} onChange={setName} autoComplete="name" />
          <Field label="Work email" value={email} onChange={setEmail} type="email" autoComplete="email" />
          <Field label="Company" value={company} onChange={setCompany} autoComplete="organization" />
          <label className="block text-sm font-semibold">
            Your workflow or question
            <textarea
              required
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="What are you trying to achieve, which tools do you use, and which decisions must remain under your control?"
              className="mt-2 w-full rounded-card border border-line bg-paper px-4 py-3 text-base font-normal"
            />
          </label>
          <p className="text-sm text-muted">This opens a draft in your email app. Review it and send it there. Nothing is transmitted by this page itself.</p>
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-paper">
              Email the team
            </button>
            <button type="button" onClick={copyInquiry} className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-semibold">
              {copied ? "Inquiry copied" : "Copy inquiry"}
            </button>
          </div>
        </form>
        <aside className="lg:col-span-5">
          <div className="rounded-card bg-ice p-6">
            <h2 className="text-xl font-semibold tracking-tight">What to include</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              <li>The business request or task.</li>
              <li>The applications and AI environments involved.</li>
              <li>The information someone currently gathers by hand.</li>
              <li>The decisions and approvals the workflow requires.</li>
              <li>What a useful evaluation would need to demonstrate.</li>
            </ul>
            <p className="mt-6 text-sm font-semibold">{EMAIL}</p>
          </div>
        </aside>
      </section>
    </Page>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-11 w-full rounded-full border border-line bg-paper px-4 text-base font-normal"
      />
    </label>
  );
}
