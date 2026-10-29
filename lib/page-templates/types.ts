/** Template ids from the Magic UI layout plan (T1–T12). */

export type PageTemplateId =
  | "T1-home"
  | "T2-product"
  | "T3-solution"
  | "T4-platform"
  | "T5-pricing"
  | "T6-company"
  | "T7-trust"
  | "T8-resource-index"
  | "T9-article"
  | "T10-form"
  | "T11-legal"
  | "T12-utility";

export type SectionId =
  | "S0-header"
  | "S1-hero"
  | "S2-logo-strip"
  | "S3-problem"
  | "S4-solution"
  | "S5-how-it-works"
  | "S6-founder-note"
  | "S7-feature-tabs"
  | "S8-team-strip"
  | "S9-pricing"
  | "S10-faq"
  | "S11-articles"
  | "S12-cta"
  | "S13-footer"
  | "S14-flow-diagram"
  | "S15-example-story"
  | "S16-comparison"
  | "S17-related-links"
  | "S18-form-card"
  | "S19-plain-summary";

/** Default section order per template (corporate site). */
export const templateSections: Record<PageTemplateId, SectionId[]> = {
  "T1-home": [
    "S1-hero",
    "S2-logo-strip",
    "S3-problem",
    "S4-solution",
    "S5-how-it-works",
    "S6-founder-note",
    "S7-feature-tabs",
    "S8-team-strip",
    "S10-faq",
    "S11-articles",
  ],
  "T2-product": ["S1-hero", "S3-problem", "S4-solution", "S5-how-it-works", "S7-feature-tabs", "S10-faq", "S17-related-links", "S12-cta"],
  "T3-solution": ["S1-hero", "S3-problem", "S4-solution", "S15-example-story", "S7-feature-tabs", "S8-team-strip", "S10-faq", "S12-cta"],
  "T4-platform": ["S1-hero", "S14-flow-diagram", "S4-solution", "S5-how-it-works", "S16-comparison", "S10-faq", "S17-related-links", "S12-cta"],
  "T5-pricing": ["S1-hero", "S9-pricing", "S16-comparison", "S10-faq", "S12-cta"],
  "T6-company": ["S1-hero", "S12-cta"],
  "T7-trust": ["S1-hero", "S14-flow-diagram", "S16-comparison", "S10-faq", "S12-cta"],
  "T8-resource-index": ["S11-articles", "S12-cta"],
  "T9-article": ["S11-articles", "S12-cta"],
  "T10-form": ["S18-form-card"],
  "T11-legal": ["S19-plain-summary"],
  "T12-utility": [],
};
