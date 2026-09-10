import { createFileRoute } from "@tanstack/react-router";
import WashingtonDcVinLookup from "@/pages/WashingtonDcVinLookup";

export const Route = createFileRoute("/washington-dc-vin-lookup")({
  component: WashingtonDcVinLookup,
});
