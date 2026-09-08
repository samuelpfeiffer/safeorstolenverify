import { createFileRoute } from "@tanstack/react-router";
import { ColoradoLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/colorado-license-plate-lookup")({
  component: ColoradoLicensePlateLookup,
});
