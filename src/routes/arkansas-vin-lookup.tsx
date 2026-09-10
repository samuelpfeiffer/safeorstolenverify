import { createFileRoute } from "@tanstack/react-router";
import ArkansasVinLookup from "@/pages/ArkansasVinLookup";

export const Route = createFileRoute("/arkansas-vin-lookup")({
  component: ArkansasVinLookup,
});
