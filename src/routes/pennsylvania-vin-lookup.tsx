import { createFileRoute } from "@tanstack/react-router";
import PennsylvaniaVinLookup from "@/pages/PennsylvaniaVinLookup";

export const Route = createFileRoute("/pennsylvania-vin-lookup")({
  component: PennsylvaniaVinLookup,
});
