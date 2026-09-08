import { createFileRoute } from "@tanstack/react-router";
import { MichiganLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/michigan-license-plate-lookup")({
  component: MichiganLicensePlateLookup,
});
