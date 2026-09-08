import { createFileRoute } from "@tanstack/react-router";
import NorthCarolinaVinLookup from "@/pages/NorthCarolinaVinLookup";

export const Route = createFileRoute("/north-carolina-vin-lookup")({
  component: NorthCarolinaVinLookup,
});
