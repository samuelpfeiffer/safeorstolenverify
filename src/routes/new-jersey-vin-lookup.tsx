import { createFileRoute } from "@tanstack/react-router";
import NewJerseyVinLookup from "@/pages/NewJerseyVinLookup";

export const Route = createFileRoute("/new-jersey-vin-lookup")({
  component: NewJerseyVinLookup,
});
