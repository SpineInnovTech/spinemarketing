/**
 * The corporate site's single product door.
 *
 * spineinnovtech.com never lands visitors on sign-in, sign-up or the app. Its only
 * product action is "Explore SpineWorkspace", which opens the public product site.
 * The product site owns the handoff to auth.spineworkspace.com and app.spineworkspace.com.
 * Enforced on the exported HTML by scripts/verify-product-funnel.mjs.
 *
 * Dependency-free on purpose: safe to import from client components, data modules and scripts.
 */
export const PRODUCT_SITE_URL = "https://spineworkspace.com";
export const EXPLORE_SPINEWORKSPACE_LABEL = "Explore SpineWorkspace";
