import { createFileRoute } from "@tanstack/react-router";
import GunTheftStatisticsPage from "@/pages/GunTheftStatisticsPage";

export const Route = createFileRoute("/stolen-gun-statistics")({
  component: GunTheftStatisticsPage,
});
