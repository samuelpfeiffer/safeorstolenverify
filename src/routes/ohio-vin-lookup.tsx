import { createFileRoute } from "@tanstack/react-router";
import OhioVinLookup from "@/pages/OhioVinLookup";

export const Route = createFileRoute("/ohio-vin-lookup")({
  component: OhioVinLookup,
});
