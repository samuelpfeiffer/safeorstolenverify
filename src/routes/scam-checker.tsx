import { createFileRoute } from "@tanstack/react-router";
import ScamCheckerPage from "@/pages/ScamCheckerPage";

export const Route = createFileRoute("/scam-checker")({
  component: ScamCheckerPage,
});
