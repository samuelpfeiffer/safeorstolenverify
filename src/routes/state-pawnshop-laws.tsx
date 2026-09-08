import { createFileRoute } from "@tanstack/react-router";
import StatePawnshopLawsPage from "@/pages/StatePawnshopLawsPage";

export const Route = createFileRoute("/state-pawnshop-laws")({
  component: StatePawnshopLawsPage,
});
