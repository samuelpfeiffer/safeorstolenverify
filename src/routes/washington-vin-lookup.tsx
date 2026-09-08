import { createFileRoute } from "@tanstack/react-router";
import WashingtonVinLookup from "@/pages/WashingtonVinLookup";

export const Route = createFileRoute("/washington-vin-lookup")({
  component: WashingtonVinLookup,
});
