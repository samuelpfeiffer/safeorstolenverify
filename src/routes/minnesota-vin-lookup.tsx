import { createFileRoute } from "@tanstack/react-router";
import MinnesotaVinLookup from "@/pages/MinnesotaVinLookup";

export const Route = createFileRoute("/minnesota-vin-lookup")({
  component: MinnesotaVinLookup,
});
