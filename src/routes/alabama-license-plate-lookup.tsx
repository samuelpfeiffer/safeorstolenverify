import { createFileRoute } from "@tanstack/react-router";
import { AlabamaLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/alabama-license-plate-lookup")({
  component: AlabamaLicensePlateLookup,
});
