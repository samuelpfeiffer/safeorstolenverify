import { createFileRoute } from "@tanstack/react-router";
import IdahoVinLookup from "@/pages/IdahoVinLookup";

export const Route = createFileRoute("/idaho-vin-lookup")({
  component: IdahoVinLookup,
});
