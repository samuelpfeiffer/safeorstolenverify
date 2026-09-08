import { createFileRoute } from "@tanstack/react-router";
import FreeCarfaxAlternativePage from "@/pages/comparisons/FreeCarfaxAlternativePage";

export const Route = createFileRoute("/carfax-alternative-free")({
  component: FreeCarfaxAlternativePage,
});
