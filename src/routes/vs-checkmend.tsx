import { createFileRoute } from "@tanstack/react-router";
import VsCheckMendPage from "@/pages/ComparisonCheckmend";

export const Route = createFileRoute("/vs-checkmend")({
  component: VsCheckMendPage,
});
