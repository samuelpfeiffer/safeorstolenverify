import { createFileRoute } from "@tanstack/react-router";
import TennesseeVinLookup from "@/pages/TennesseeVinLookup";

export const Route = createFileRoute("/tennessee-vin-lookup")({
  component: TennesseeVinLookup,
});
