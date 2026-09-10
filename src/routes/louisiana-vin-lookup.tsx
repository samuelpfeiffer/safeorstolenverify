import { createFileRoute } from "@tanstack/react-router";
import LouisianaVinLookup from "@/pages/LouisianaVinLookup";

export const Route = createFileRoute("/louisiana-vin-lookup")({
  component: LouisianaVinLookup,
});
