import { createFileRoute } from "@tanstack/react-router";
import IowaVinLookup from "@/pages/IowaVinLookup";

export const Route = createFileRoute("/iowa-vin-lookup")({
  component: IowaVinLookup,
});
