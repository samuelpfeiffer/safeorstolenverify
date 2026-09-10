import { createFileRoute } from "@tanstack/react-router";
import IndianaVinLookup from "@/pages/IndianaVinLookup";

export const Route = createFileRoute("/indiana-vin-lookup")({
  component: IndianaVinLookup,
});
