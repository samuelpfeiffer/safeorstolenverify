import { createFileRoute } from "@tanstack/react-router";
import CaliforniaVinLookup from "@/pages/CaliforniaVinLookup";

export const Route = createFileRoute("/california-vin-lookup")({
  component: CaliforniaVinLookup,
});
