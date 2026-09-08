import { createFileRoute } from "@tanstack/react-router";
import { NewMexicoLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/new-mexico-license-plate-lookup")({
  component: NewMexicoLicensePlateLookup,
});
