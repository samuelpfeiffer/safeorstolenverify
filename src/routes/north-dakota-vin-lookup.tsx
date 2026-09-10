import { createFileRoute } from "@tanstack/react-router";
import NorthDakotaVinLookup from "@/pages/NorthDakotaVinLookup";

export const Route = createFileRoute("/north-dakota-vin-lookup")({
  component: NorthDakotaVinLookup,
});
