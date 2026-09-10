import { createFileRoute } from "@tanstack/react-router";
import UtahVinLookup from "@/pages/UtahVinLookup";

export const Route = createFileRoute("/utah-vin-lookup")({
  component: UtahVinLookup,
});
