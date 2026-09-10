import { createFileRoute } from "@tanstack/react-router";
import NebraskaVinLookup from "@/pages/NebraskaVinLookup";

export const Route = createFileRoute("/nebraska-vin-lookup")({
  component: NebraskaVinLookup,
});
