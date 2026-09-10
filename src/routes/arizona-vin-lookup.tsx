import { createFileRoute } from "@tanstack/react-router";
import ArizonaVinLookup from "@/pages/ArizonaVinLookup";

export const Route = createFileRoute("/arizona-vin-lookup")({
  component: ArizonaVinLookup,
});
