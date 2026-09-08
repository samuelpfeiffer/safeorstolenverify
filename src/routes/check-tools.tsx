import { createFileRoute } from "@tanstack/react-router";
import CheckToolsPage from "@/pages/CheckToolsPage";

export const Route = createFileRoute("/check-tools")({
  component: CheckToolsPage,
});
