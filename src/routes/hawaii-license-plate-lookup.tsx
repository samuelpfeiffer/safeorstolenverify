import { createFileRoute } from "@tanstack/react-router";
import { HawaiiLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/hawaii-license-plate-lookup")({
  component: HawaiiLicensePlateLookup,
});
