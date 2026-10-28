"use client";

const examples = [
  {
    title: "Hand the work to the next person",
    body: "A delivery team can see what the work depends on, and what was already decided, before they pass it on.",
  },
  {
    title: "Check an invoice before you pay it",
    body: "A finance lead can compare an unpaid invoice with the contract and the notes that support it.",
  },
  {
    title: "Decide whether a suggestion is sound",
    body: "Someone on the team can see the facts behind a suggestion, then decide whether to use it.",
  },
  {
    title: "Keep an important change waiting",
    body: "A leader can check that important work still waits for a person before anything in a tool is changed.",
  },
];

export function TestimonialsSection({
  heading = "What the work looks like",
}: {
  heading?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            Example, not a customer review
          </p>
          <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
            {heading}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {examples.map((example) => (
            <article
              key={example.title}
              className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#526479]">
                Example, not a customer review
              </p>
              <h3 className="mt-3 text-[16px] font-semibold leading-snug text-[#032D60]">{example.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#444]">{example.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
