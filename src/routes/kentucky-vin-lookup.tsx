import { createFileRoute } from "@tanstack/react-router";
import KentuckyVinLookup from "@/pages/KentuckyVinLookup";

export const Route = createFileRoute("/kentucky-vin-lookup")({
  component: KentuckyVinLookup,
});
