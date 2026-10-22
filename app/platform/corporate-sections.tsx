// Verbatim corporate Technology copy for the three anchor targets the header
// Technology submenu points at. Final Content Master (03. TECHNOLOGY):
//   #business-context    = Section 2 — Business context
//   #governed-execution  = Section 4 — From preparation to a verified outcome
//   #work-continuity     = Section 5 — Continuity across environments
// Added without redesigning the existing architecture sections. scroll-mt-24
// keeps each heading clear of the sticky header (h-16).

const stages = [
  ["Establish context", "Assemble permitted information with source references, relevant history and visible uncertainty."],
  ["Prepare", "Help people and AI investigate the situation and develop a proposed next step with supporting evidence."],
  ["Review and authorize", "Give the responsible person enough context to decide. Check identity, scope, policy and required approvals before execution."],
  ["Execute", "Use the permitted capability and its owning connection. Keep the operation tied to the decision and authority that allowed it."],
  ["Verify and continue", "Observe the result, reconcile it with the source system where possible, and retain completion, failure or unresolved status with the work."],
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
          <p>Our approach relates authorized records, evidence, goals, decisions and outcomes while preserving source identity. Existing CRM, support, finance, contract and document systems remain the systems of record.</p>
          <p>Useful context should help people understand what changed, which sources support a conclusion, where the evidence disagrees and who owns the next decision.</p>
          <p>When sources conflict or information is stale, that uncertainty should remain visible. An AI interpretation must remain distinguishable from a source record or an accepted decision.</p>
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
            Human approval remains subject to organizational and source-system permissions. A requested action, an accepted request and a verified outcome are distinct states.
          </p>
        </div>
      </section>

      <section
        id="work-continuity"
        className="scroll-mt-24 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#245FC8]">
          CONTINUITY ACROSS ENVIRONMENTS
        </p>
        <h2 className="mt-5 max-w-[820px] text-[length:min(clamp(2.2rem,4vw,4rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#032D60]">
          A handoff should preserve meaning and recheck permission.
        </h2>
        <div className="mt-8 max-w-[800px] space-y-5 text-[length:min(18px,var(--marketing-body-size))] leading-[1.9] text-[#445A75]">
          <p>Continuity means carrying forward the work&apos;s identity, evidence, decisions, ownership and remaining questions.</p>
          <p>It matters when an account changes hands, an incident moves to engineering or someone resumes work in a compatible AI environment.</p>
          <p>The receiving environment must independently establish identity, access and authority. A previous approval or visible capability cannot be treated as permission everywhere else.</p>
          <p>Connections depend on supported interfaces and the capabilities each environment explicitly exposes. They do not imply access to every tool, conversation, model or file in a connected host.</p>
        </div>
      </section>
    </div>
  );
}
