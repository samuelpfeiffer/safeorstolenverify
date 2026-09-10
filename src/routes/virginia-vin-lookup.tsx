import { createFileRoute } from "@tanstack/react-router";
import VirginiaVinLookup from "@/pages/VirginiaVinLookup";

export const Route = createFileRoute("/virginia-vin-lookup")({
  component: VirginiaVinLookup,
});
