import { createFileRoute } from "@tanstack/react-router";
import MichiganVinLookup from "@/pages/MichiganVinLookup";

export const Route = createFileRoute("/michigan-vin-lookup")({
  component: MichiganVinLookup,
});
