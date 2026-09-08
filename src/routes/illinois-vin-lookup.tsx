import { createFileRoute } from "@tanstack/react-router";
import IllinoisVinLookup from "@/pages/IllinoisVinLookup";

export const Route = createFileRoute("/illinois-vin-lookup")({
  component: IllinoisVinLookup,
});
