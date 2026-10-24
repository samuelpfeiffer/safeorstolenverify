import { createFileRoute } from "@tanstack/react-router";
import StolenPropertyStatisticsPage from "@/pages/StolenPropertyStatisticsPage";

export const Route = createFileRoute("/stolen-property-statistics")({
  component: StolenPropertyStatisticsPage,
});
