import { createFileRoute } from "@tanstack/react-router";
import { NewJerseyLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/new-jersey-license-plate-lookup")({
  component: NewJerseyLicensePlateLookup,
});
