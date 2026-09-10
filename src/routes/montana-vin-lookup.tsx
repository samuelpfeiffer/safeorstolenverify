import { createFileRoute } from "@tanstack/react-router";
import MontanaVinLookup from "@/pages/MontanaVinLookup";

export const Route = createFileRoute("/montana-vin-lookup")({
  component: MontanaVinLookup,
});
