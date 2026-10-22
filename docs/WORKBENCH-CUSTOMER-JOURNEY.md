# Customer journey source and claim boundary

Reviewed application source: `SpineInnovTech/spineworkspace-live`, commit
`095fd8017c905c25be2832b02be3b35deabc8fe6`, branch
`feat/e2e-customer-journey-closure`.

The October 15 report at
`docs/evidence/2026-10-15/e2e-customer-journey/e2e-journey-evidence-report.json`
records 18/18 passing steps. The marketing walkthrough groups these into six
stages: entry, capability access, request-to-work, proposal/approval,
execution/receipt, and continuation. It is a navigable explanation, not a
simulation of connected execution.

The verification script `scripts/verify-e2e-customer-journey.mjs` was reviewed
alongside the report. It combines deployed authentication, database and MCP
checks with controlled inputs and adapters. In particular:

| Stage | Evidence scope in the reviewed script |
| --- | --- |
| Email and Inbox (08–09) | A message is constructed in memory and mapped with `mapInboxListItem`; this does not establish an actual Gmail read or a rendered browser Inbox. |
| Work persistence (10) | The script writes work and active-context records to the configured test databases. |
| Proposal and approval (11–12) | The script uses a static connection/policy lookup and issues approval programmatically; this does not establish a person completing an approval in the browser. |
| Execution and receipt (13–14) | A registered adapter returns controlled dispatch/readback results. Cryptographic receipt checking does not establish independent Gmail delivery. |
| Continuation and isolation (15–18) | The report records deployed MCP retrieval and isolation checks. Step 16's detail contains six drills despite its title referring to nine; marketing does not claim nine drills. |

The public provenance paragraph states this mixed test scope. Marketing must
not turn the report's PASS labels into verified customer telemetry, provider
delivery, production certification or a fully browser-tested new-user journey.
The script was not rerun: this marketing task does not require database writes,
new approval tokens or sending messages.

The supplied *Spine Workspace UI Blueprint.png* is a visual reference for
document, database, graph and Twin surfaces. Its sample metrics and statuses
are not runtime evidence and were not promoted into customer claims.

The public Canvas selector now uses complete captures of the application's
unmodified `IAAppShell`, `IASidebar`, `DepartmentProvider` and
`UnifiedWorkbench`, including its role, Canvas and Library surfaces. Its
seven sidebar groups and native nested menus come from the application
components and current navigation manifests. Six additional captures show
each expandable sidebar group, including inactive items and administrator
controls for the QA profile. Marketing selection controls sit outside the
captured shell; the earlier four-item marketing sidebar has been removed.

These components are composed in a local QA preview with existing unit-test
records, graph envelope and the application's compiled CSS and font classes.
A preview-only Next navigation adapter supplies the route; the existing
non-production identity handler supplies the Visual QA identity. The current
`/workspace/workbench` page supplies no records to `UnifiedWorkbench`, so the
populated component captures are not proof of that route's connected
hydration. Sync and Host Verified labels originate in the UI and are not
independent evidence of connections or effects. No application source,
authentication or authorization code was changed. No action was approved or
executed, and browser requests other than GET were blocked during capture.

Capture dimensions, source-file digests, report digest and capture digests are
recorded in `WORKBENCH-CANVAS-PROVENANCE.json` for the archived isolated
captures and `WORKBENCH-NATIVE-SHELL-PROVENANCE.json` for the public shell
captures.

Phone captures were also inspected. The native component clips some controls
and text at 390 px. These captures are retained in the archive but excluded
from the public selector. Marketing scales the complete desktop captures on
phones and provides an accessible enlargement dialog with fit and actual-size
scrolling. This does not establish native
application mobile parity; application layout repairs remain separate work.
