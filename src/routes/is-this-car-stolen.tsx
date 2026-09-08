import { createFileRoute } from "@tanstack/react-router";
import { CheckStolenCar as CheckStolenCarPage } from "@/pages/traffic/StolenCheckPages";

export const Route = createFileRoute("/is-this-car-stolen")({
  component: CheckStolenCarPage,
});
