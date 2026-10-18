import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/spine")({
  beforeLoad: () => {
    throw redirect({ to: "/technology/fabric" });
  },
});
