import { createFileRoute } from "@tanstack/react-router";
import NevadaVinLookup from "@/pages/NevadaVinLookup";

export const Route = createFileRoute("/nevada-vin-lookup")({
  component: NevadaVinLookup,
});
