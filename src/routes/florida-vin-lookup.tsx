import { createFileRoute } from "@tanstack/react-router";
import FloridaVinLookup from "@/pages/FloridaVinLookup";

export const Route = createFileRoute("/florida-vin-lookup")({
  component: FloridaVinLookup,
});
