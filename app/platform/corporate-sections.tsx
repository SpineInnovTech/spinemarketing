// Verbatim corporate Technology copy for the three anchor targets the header
// Technology submenu points at. Final Content Master (03. TECHNOLOGY):
//   #business-context    = Section 2 — Business context
//   #governed-execution  = Section 4 — From preparation to a verified outcome
//   #work-continuity     = Section 5 — Continuity across environments
// Added without redesigning the existing architecture sections. scroll-mt-24
// keeps each heading clear of the sticky header (h-16).

const stages = [
  ["Bring the context together", "Pull together the information you are allowed to see, with where it came from, the history that matters and anything still unclear."],
  ["Prepare", "Help people and AI look into the situation and put together a suggested next step, with the evidence behind it."],
  ["Review and approve", "Give the right person enough to decide. Check who they are, what they can do, the rules and any needed sign-off before anything happens."],
  ["Do it", "Use the allowed tool and its connection. Keep the action tied to the decision and the approval that allowed it."],
  ["Check and continue", "Watch the result, match it against the source tool where possible, and keep whether it finished, failed or is still open with the work."],
];

export function PlatformCorporateSections() {
  return (
    <div className="bg-white">
      <section
        id="business-context"
        className="scroll-mt-24 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">
          BUSINESS CONTEXT
        </p>
        <h2 className="mt-5 max-w-[820px] text-[length:min(clamp(2.2rem,4vw,4rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#032D60]">
          Preserve where information came from. Explain why it matters.
        </h2>
        <div className="mt-8 max-w-[800px] space-y-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">
          <p>A record gains meaning through its relationships: the account it belongs to, the commitment it supports, the incident it explains or the goal it affects.</p>
          <p>Our approach connects records, evidence, goals, decisions and outcomes you are allowed to use, while keeping each source clear. Your existing CRM, support, finance, contract and document tools stay the place of record.</p>
          <p>Useful context should help people see what changed, which sources back up a conclusion, where the evidence disagrees and who owns the next decision.</p>
          <p>When sources disagree or information is out of date, that should stay visible. What the AI worked out should always be easy to tell apart from a source record or a decision people made.</p>
        </div>
      </section>

      <section
        id="governed-execution"
        className="scroll-mt-24 bg-[#F3F6F9] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">
            FROM PREPARATION TO A VERIFIED OUTCOME
          </p>
          <h2 className="mt-5 max-w-[720px] text-[length:min(clamp(2.2rem,4vw,4rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#032D60]">
            Keep each responsibility explicit.
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(([stage, body], i) => (
              <li
                key={stage}
                className="rounded-[18px] border border-[#D6E3F2] bg-white p-6"
              >
                <span className="font-mono text-xs text-[#6688BA]">0{i + 1}</span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-.03em] text-[#032D60]">
                  {stage}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-[#586C84]">{body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[800px] text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#445A75]">
            A person's approval still has to fit the company's rules and each tool's own permissions. Asking for an action, approving it, and a checked result are three different things.
          </p>
        </div>
      </section>

      <section
        id="work-continuity"
        className="scroll-mt-24 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">
          WORK THAT CARRIES ON
        </p>
        <h2 className="mt-5 max-w-[820px] text-[length:min(clamp(2.2rem,4vw,4rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#032D60]">
          A handoff should keep the meaning and recheck permission.
        </h2>
        <div className="mt-8 max-w-[800px] space-y-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">
          <p>Carrying on means bringing the work&apos;s evidence, decisions, owner and open questions along with it.</p>
          <p>It matters when an account changes hands, an incident moves to engineering or someone picks up the work again in another AI tool.</p>
          <p>The tool picking up the work must check who the person is, their access and what they can do, on its own. An earlier approval or an available tool does not count as permission everywhere else.</p>
          <p>Connections depend on what each tool chooses to share and support. They do not mean access to every tool, conversation, AI model or file in a connected app.</p>
        </div>
      </section>
    </div>
  );
}
