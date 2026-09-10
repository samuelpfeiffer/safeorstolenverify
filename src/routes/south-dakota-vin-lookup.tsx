import { createFileRoute } from "@tanstack/react-router";
import SouthDakotaVinLookup from "@/pages/SouthDakotaVinLookup";

export const Route = createFileRoute("/south-dakota-vin-lookup")({
  component: SouthDakotaVinLookup,
});
