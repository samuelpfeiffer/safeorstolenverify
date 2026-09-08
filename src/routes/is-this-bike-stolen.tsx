import { createFileRoute } from "@tanstack/react-router";
import { CheckStolenBike as CheckStolenBikePage } from "@/pages/traffic/StolenCheckPages";

export const Route = createFileRoute("/is-this-bike-stolen")({
  component: CheckStolenBikePage,
});
