import { createFileRoute } from "@tanstack/react-router";
import ComparisonCarfax from "@/pages/ComparisonCarfax";

export const Route = createFileRoute("/vs-carfax")({
  component: ComparisonCarfax,
});
