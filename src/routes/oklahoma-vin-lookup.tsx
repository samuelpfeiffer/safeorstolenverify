import { createFileRoute } from "@tanstack/react-router";
import OklahomaVinLookup from "@/pages/OklahomaVinLookup";

export const Route = createFileRoute("/oklahoma-vin-lookup")({
  component: OklahomaVinLookup,
});
