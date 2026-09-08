import { createFileRoute } from "@tanstack/react-router";
import CheckAppliancesPage from "@/pages/CheckAppliancesPage";

export const Route = createFileRoute("/check-appliances")({
  component: CheckAppliancesPage,
});
