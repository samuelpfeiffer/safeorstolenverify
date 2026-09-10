import { createFileRoute } from "@tanstack/react-router";
import WestVirginiaVinLookup from "@/pages/WestVirginiaVinLookup";

export const Route = createFileRoute("/west-virginia-vin-lookup")({
  component: WestVirginiaVinLookup,
});
