import { ArrowUpRight } from "lucide-react";
import { EXPLORE_SPINEWORKSPACE_LABEL, PRODUCT_SITE_URL } from "@/lib/product-site";

/** The corporate site's only product action. Sign-in and sign-up live on the product site. */
export function ExploreSpineWorkspaceCta() {
  return (
    <div data-product-site-cta="true" className="my-6 flex flex-wrap items-center gap-3">
      <a href={PRODUCT_SITE_URL} className="innovtech-button">
        {EXPLORE_SPINEWORKSPACE_LABEL} <ArrowUpRight size={18} aria-hidden />
      </a>
    </div>
  );
}
