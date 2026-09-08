import { createFileRoute } from "@tanstack/react-router";
import GeorgiaVinLookup from "@/pages/GeorgiaVinLookup";

export const Route = createFileRoute("/georgia-vin-lookup")({
  component: GeorgiaVinLookup,
});
