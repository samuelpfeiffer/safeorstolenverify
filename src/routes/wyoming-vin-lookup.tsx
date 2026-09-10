import { createFileRoute } from "@tanstack/react-router";
import WyomingVinLookup from "@/pages/WyomingVinLookup";

export const Route = createFileRoute("/wyoming-vin-lookup")({
  component: WyomingVinLookup,
});
