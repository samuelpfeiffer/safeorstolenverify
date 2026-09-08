import { createFileRoute } from "@tanstack/react-router";
import NewYorkVinLookup from "@/pages/NewYorkVinLookup";

export const Route = createFileRoute("/new-york-vin-lookup")({
  component: NewYorkVinLookup,
});
