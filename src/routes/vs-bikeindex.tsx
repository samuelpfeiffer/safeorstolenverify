import { createFileRoute } from "@tanstack/react-router";
import VsBikeIndex from "@/pages/comparisons/VsBikeIndex";

export const Route = createFileRoute("/vs-bikeindex")({
  component: VsBikeIndex,
});
