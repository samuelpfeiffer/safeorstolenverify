import { createFileRoute } from "@tanstack/react-router";
import FreeStolenVehicleCheckHubPage from "@/pages/FreeStolenVehicleCheckPage";

export const Route = createFileRoute("/free-stolen-vehicle-check")({
  component: FreeStolenVehicleCheckHubPage,
});
