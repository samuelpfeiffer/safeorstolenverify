import { createFileRoute } from "@tanstack/react-router";
import ConnecticutVinLookup from "@/pages/ConnecticutVinLookup";

export const Route = createFileRoute("/connecticut-vin-lookup")({
  component: ConnecticutVinLookup,
});
