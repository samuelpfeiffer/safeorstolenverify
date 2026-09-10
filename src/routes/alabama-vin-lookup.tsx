import { createFileRoute } from "@tanstack/react-router";
import AlabamaVinLookup from "@/pages/AlabamaVinLookup";

export const Route = createFileRoute("/alabama-vin-lookup")({
  component: AlabamaVinLookup,
});
