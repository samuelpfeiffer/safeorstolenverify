import { createFileRoute } from "@tanstack/react-router";
import { MassachusettsLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/massachusetts-license-plate-lookup")({
  component: MassachusettsLicensePlateLookup,
});
