import { createFileRoute } from "@tanstack/react-router";
import { MissouriLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/missouri-license-plate-lookup")({
  component: MissouriLicensePlateLookup,
});
