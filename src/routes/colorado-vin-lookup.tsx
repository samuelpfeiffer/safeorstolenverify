import { createFileRoute } from "@tanstack/react-router";
import ColoradoVinLookup from "@/pages/ColoradoVinLookup";

export const Route = createFileRoute("/colorado-vin-lookup")({
  component: ColoradoVinLookup,
});
