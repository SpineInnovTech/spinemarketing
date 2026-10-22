import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SpineWorkspace | Spine InnovTech",
  description: "Redirecting to SpineWorkspace product overview.",
  alternates: { canonical: "/product" },
};

/** Retain the old product entry point as an alias for the local details page. */
export default function SpineWorkspaceProductRedirect() {
  redirect("/product");
}
