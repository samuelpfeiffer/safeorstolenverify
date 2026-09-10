import { createFileRoute } from "@tanstack/react-router";
import MississippiVinLookup from "@/pages/MississippiVinLookup";

export const Route = createFileRoute("/mississippi-vin-lookup")({
  component: MississippiVinLookup,
});
