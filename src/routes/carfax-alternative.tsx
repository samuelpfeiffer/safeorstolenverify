import { createFileRoute } from "@tanstack/react-router";
import CarfaxAlternativePage from "@/pages/CarfaxAlternativePage";

export const Route = createFileRoute("/carfax-alternative")({
  component: CarfaxAlternativePage,
});
