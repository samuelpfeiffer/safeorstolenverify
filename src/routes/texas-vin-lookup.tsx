import { createFileRoute } from "@tanstack/react-router";
import TexasVinLookup from "@/pages/TexasVinLookup";

export const Route = createFileRoute("/texas-vin-lookup")({
  component: TexasVinLookup,
});
