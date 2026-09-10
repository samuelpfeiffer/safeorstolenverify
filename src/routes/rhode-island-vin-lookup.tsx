import { createFileRoute } from "@tanstack/react-router";
import RhodeIslandVinLookup from "@/pages/RhodeIslandVinLookup";

export const Route = createFileRoute("/rhode-island-vin-lookup")({
  component: RhodeIslandVinLookup,
});
