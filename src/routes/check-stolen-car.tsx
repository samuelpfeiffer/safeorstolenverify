import { createFileRoute } from "@tanstack/react-router";
import { CheckStolenCar as CheckStolenCarPage } from "@/pages/traffic/StolenCheckPages";

export const Route = createFileRoute("/check-stolen-car")({
  component: CheckStolenCarPage,
});
