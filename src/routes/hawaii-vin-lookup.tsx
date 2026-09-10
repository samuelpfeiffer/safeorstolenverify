import { createFileRoute } from "@tanstack/react-router";
import HawaiiVinLookup from "@/pages/HawaiiVinLookup";

export const Route = createFileRoute("/hawaii-vin-lookup")({
  component: HawaiiVinLookup,
});
