import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/twin")({
  beforeLoad: () => {
    throw redirect({ to: "/technology", hash: "twin" });
  },
});
