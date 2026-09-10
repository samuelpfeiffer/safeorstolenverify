import { createFileRoute } from "@tanstack/react-router";
import VermontVinLookup from "@/pages/VermontVinLookup";

export const Route = createFileRoute("/vermont-vin-lookup")({
  component: VermontVinLookup,
});
