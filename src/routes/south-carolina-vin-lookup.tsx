import { createFileRoute } from "@tanstack/react-router";
import SouthCarolinaVinLookup from "@/pages/SouthCarolinaVinLookup";

export const Route = createFileRoute("/south-carolina-vin-lookup")({
  component: SouthCarolinaVinLookup,
});
