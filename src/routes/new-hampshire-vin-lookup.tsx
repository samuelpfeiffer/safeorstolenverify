import { createFileRoute } from "@tanstack/react-router";
import NewHampshireVinLookup from "@/pages/NewHampshireVinLookup";

export const Route = createFileRoute("/new-hampshire-vin-lookup")({
  component: NewHampshireVinLookup,
});
