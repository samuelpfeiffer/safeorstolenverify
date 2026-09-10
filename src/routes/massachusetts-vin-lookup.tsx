import { createFileRoute } from "@tanstack/react-router";
import MassachusettsVinLookup from "@/pages/MassachusettsVinLookup";

export const Route = createFileRoute("/massachusetts-vin-lookup")({
  component: MassachusettsVinLookup,
});
