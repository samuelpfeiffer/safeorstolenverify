import { createFileRoute } from "@tanstack/react-router";
import HotGunzAlternativePage from "@/pages/comparisons/HotGunzAlternativePage";

export const Route = createFileRoute("/hotgunz-alternative")({
  component: HotGunzAlternativePage,
});
