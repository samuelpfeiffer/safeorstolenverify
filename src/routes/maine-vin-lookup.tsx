import { createFileRoute } from "@tanstack/react-router";
import MaineVinLookup from "@/pages/MaineVinLookup";

export const Route = createFileRoute("/maine-vin-lookup")({
  component: MaineVinLookup,
});
