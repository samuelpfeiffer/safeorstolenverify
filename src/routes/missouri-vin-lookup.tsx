import { createFileRoute } from "@tanstack/react-router";
import MissouriVinLookup from "@/pages/MissouriVinLookup";

export const Route = createFileRoute("/missouri-vin-lookup")({
  component: MissouriVinLookup,
});
