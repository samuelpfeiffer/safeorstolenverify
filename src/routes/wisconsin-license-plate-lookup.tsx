import { createFileRoute } from "@tanstack/react-router";
import { WisconsinLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/wisconsin-license-plate-lookup")({
  component: WisconsinLicensePlateLookup,
});
