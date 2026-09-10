import { createFileRoute } from "@tanstack/react-router";
import DelawareVinLookup from "@/pages/DelawareVinLookup";

export const Route = createFileRoute("/delaware-vin-lookup")({
  component: DelawareVinLookup,
});
