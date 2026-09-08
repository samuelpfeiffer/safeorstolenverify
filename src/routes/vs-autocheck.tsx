import { createFileRoute } from "@tanstack/react-router";
import ComparisonAutocheck from "@/pages/ComparisonAutocheck";

export const Route = createFileRoute("/vs-autocheck")({
  component: ComparisonAutocheck,
});
