import { createFileRoute } from "@tanstack/react-router";
import MarylandVinLookup from "@/pages/MarylandVinLookup";

export const Route = createFileRoute("/maryland-vin-lookup")({
  component: MarylandVinLookup,
});
