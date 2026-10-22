---
name: gstack
description: "GStack: Professional AI Engineering Operating System & Two-Site Architecture Standard (Think → Plan → Build → Review → Test → Ship → Reflect). Enforces YC-grade CEO/EM architecture locks, 3-tier layout patterns, strict separation between Corporate (Spine Marketing / spineinnovtech.com) and Product (Spine App Marketing / spineworkspace.com), browser-first QA, and zero-defect production gating."
---

# GStack: Professional AI Engineering Operating System

GStack transforms AI assistants into a virtual high-caliber engineering team. It enforces a structured 7-stage software development lifecycle (SDLC) based on YC startup methodology (Think → Plan → Build → Review → Test → Ship → Reflect) combined with rigorous architectural boundaries.

```text
 ┌──────────────────────────────────────────────────────────────────────────────┐
 │                              GSTACK 7-STAGE SDLC                             │
 └──────┬──────────────┬──────────────┬─────────────┬─────────────┬─────────────┘
        │              │              │             │             │
        ▼              ▼              ▼             ▼             ▼
   [ 1. THINK ]  [ 2. PLAN ]    [ 3. BUILD ]  [ 4. REVIEW ] [ 5. TEST ] ──▶ [ 6. SHIP ] ──▶ [ 7. REFLECT ]
    /office-hours /ceo-review    /build        /review       /qa              /ship          /reflect
    /cso          /eng-review                  /sec-audit    /browser-test
```

---

## 1. The Two-Site Architecture Doctrine

In the Spine ecosystem, two distinct web properties exist with strict separation of concerns. Automated agents must NEVER conflate them:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 SPINE INNOVTECH ECOSYSTEM                              │
├──────────────────────────────────────────┬─────────────────────────────────────────────┤
│   SPINE MARKETING (Corporate Site)       │       SPINE APP MARKETING (Product Site)    │
│   spineinnovtech.com                     │       spineworkspace.com                    │
├──────────────────────────────────────────┼─────────────────────────────────────────────┤
│ • Repo: spinemarketing-magic-ui          │ • Repo: spineworkspace-live/apps/marketing  │
│ • Entity: Spine InnovTech Private Limited│ • Brand & Product: Spine Workspace          │
│ • Audience: Investors, Partners, C-Suite │ • Audience: Operators, Teams, Humans & AI   │
│ • Focus: The Company, Thesis, Substrate  │ • Focus: The Workspace, Daily Work, Views   │
│ • Invariants:                            │ • Invariants:                               │
│   - Funnels to Product with CTA:         │   - Only entry to authentication            │
│     "Explore SpineWorkspace"             │     (https://auth.spineworkspace.com)       │
│   - NO direct app auth / login in header │   - Only entry to live application          │
│   - NO pricing cards or tables           │     (https://app.spineworkspace.com)        │
│   - NO raw interactive role workbenches  │   - Interactive role workbenches (Canvas,   │
│     (uses diagrammatic architecture)     │     Table, Graph, Twin) across 15+ domains  │
│   - Founder Story on /company and /about │   - Transparent pricing                     │
│                                          │   - Founder Story on /why and /story        │
└──────────────────────────────────────────┴─────────────────────────────────────────────┘
```

---

## 2. Standardized 3-Tier Layout Pattern

Every page across both sites must conform to one of three standardized layout tiers:

### Tier 1: Flagship Homepage Layout (`/`)
- **Global Header**: Site-specific clean navigation without duplicate entries.
- **Hero Section**:
  - Consistent vertical footprint (`min-h-[560px]` / `clamp`).
  - Eyebrow badge (Magic UI `AnimatedShinyText`).
  - High-impact H1 title + succinct 2-line lead.
  - Primary CTA (Corporate funnels to Product Site; Product funnels to `/product/workbench` + `#how-it-works`).
  - **Centerpiece Visual**: The Orbital Architecture Banner (5-zone closed-loop data flow without redundant internal logo headers).
- **Core Value Section**: High-level overview of shared context (no repetitive domain dumps).
- **Platform Pillars**: 4 foundational cards: Spine Fabric, Spine Twin, Governed Runtime, Connected Capabilities.
- **Strategic Trust Strip**: Human authority, scoped memory, and provenance.
- **Insights / Story Highlights**: Curated articles or proof points.
- **Global Footer**: Categorized corporate or product links with legal notice.

### Tier 2: Root / Category Hub Layout (`/platform`, `/company`, `/insights`, `/solutions`)
- **Uniform Category Hero (`PageHero`)**: Standardized height (`min-h-[460px]`), eyebrow tag, H1 category title + descriptive lead, primary/secondary action pair, category art frame.
- **Category Bento / Overview Grid**: Multi-card grid highlighting the sub-pillars.
- **Detailed Pillar Cards**: 3 to 4 comprehensive breakdowns with clear separation of responsibilities.
- **Cross-Pillar Action Strip**: Contextual link to next category or deep documentation.

### Tier 3: Child / Deep Detail Page Layout (`/solutions/[domain]`, `/product/[pillar]`)
- **Detail Hero**: Concise heading, role/problem statement, key KPI targets.
- **Structured Domain Body**: Operating story, key workflows (Signal → Context → Action), evidence requirements.
- **Domain Projection**: Authentic live workbench view & dashboard tailored specifically to this domain (Product site only) or deep architectural specification (Corporate site only).
- **Governance & Boundary Box**: Human authority gate and permitted data sources.

---

## 3. The 7 Core Lifecycle Stages

### Stage 1: Think (`/office-hours`, `/cso`)
- **Role**: Founder / YC Partner / Chief Strategy Officer.
- **Objective**: Interrogate product assumptions before code is written.
- **Invariants**: What is the core problem? Who is the ICP? What is the minimum viable wedge? Avoid bloated complexity.

### Stage 2: Plan (`/autoplan`, `/plan-ceo-review`, `/plan-eng-review`)
- **Role**: CEO & Principal Engineering Manager.
- **Objective**: Lock system architecture, contracts, schema boundaries, and layout tiers.
- **Invariants**: Validate strategic alignment, UX affordances, TypeScript interfaces, and test matrices. Output an immutable implementation plan.

### Stage 3: Build (`/build`)
- **Role**: Senior Full-Stack Engineer.
- **Objective**: Implement clean, idiomatic, typed code in disciplined steps.
- **Invariants**: `strict: true`, zero `any`, single-responsibility components, zero-trust boundaries (AI proposes, human approves).

### Stage 4: Review (`/review`, `/sec-audit`)
- **Role**: Staff Code Reviewer & Chief Security Officer.
- **Objective**: Multi-dimensional adversarial review, code quality, and security audits.
- **Invariants**: Verify tenant isolation, authentication token propagation, PII sanitization, and architectural boundary preservation.

### Stage 5: Test (`/qa`, `/browser-test`)
- **Role**: QA Lead & Visual Experience Designer.
- **Objective**: Browser-first verification and automated test suite validation.
- **Invariants**: Unit/integration tests pass 100% (`pnpm test`), responsive layouts verified across desktop/tablet/mobile, active accessible names confirmed.

### Stage 6: Ship (`/ship`)
- **Role**: Release Engineering Manager.
- **Objective**: Production build verification, packaging, and zero-defect deployment gate.
- **Invariants**: Run `pnpm test && pnpm typecheck && pnpm build` prior to deploy. Pre-deployment gates must abort deploy on any failure.

### Stage 7: Reflect (`/reflect`)
- **Role**: Engineering Post-Mortem & Memory Architect.
- **Objective**: Synthesize lessons learned and persist learnings to operational memory (`LATEST.md`, `AGENTS.md`).

---

## 4. Immutable Marketing Canon Protection

No automated agent may alter, rephrase, shorten, or remove canonical marketing copy without explicit written user instruction:

1. **Product Site Canonical Headline**: `"Humans govern the business."`
2. **Product Site Canonical Accent**: `"AI helps the work."`
3. **Product Site Canonical Lead**: `"SpineWorkspace is where humans and AI share one governed view of the business. Your existing tools keep the record. Your Twin prepares the next step. You decide. The story continues."`
4. **Product Site Canonical Tagline**: `"Source systems stay authoritative. Authority stays with people. Context stays with the work."`
5. **Corporate Site Canonical Hero**:
   - Headline: `"Humans govern the business. AI helps the work."`
   - Lead: `"Spine InnovTech provides the governed context architecture where humans and AI share one continuous record of the business. Source systems stay authoritative. Authority stays with people. Context stays with the work."`
   - Primary CTA: `"Explore SpineWorkspace Product"` → `https://spineworkspace.com`
6. **Canonical Founder Story ($8M Save at Salesforce/MuleSoft)**: Must remain present and unaltered on both sites (Corporate: `/company` & `/about`; Product: `/why` & `/story`).
