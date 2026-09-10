import { createFileRoute } from "@tanstack/react-router";
import KansasVinLookup from "@/pages/KansasVinLookup";

export const Route = createFileRoute("/kansas-vin-lookup")({
  component: KansasVinLookup,
});
