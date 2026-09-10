import { createFileRoute } from "@tanstack/react-router";
import OregonVinLookup from "@/pages/OregonVinLookup";

export const Route = createFileRoute("/oregon-vin-lookup")({
  component: OregonVinLookup,
});
