import { createFileRoute } from "@tanstack/react-router";
import MobileDashboardPage from "@/mobile/pages/MobileDashboardPage";

export const Route = createFileRoute("/mobile-dashboard")({
  component: MobileDashboardPage,
});
