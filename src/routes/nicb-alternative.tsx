import { createFileRoute } from "@tanstack/react-router";
import NICBAlternativePage from "@/pages/comparisons/NICBAlternativePage";

export const Route = createFileRoute("/nicb-alternative")({
  component: NICBAlternativePage,
});
