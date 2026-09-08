import { createFileRoute } from "@tanstack/react-router";
import { DelawareLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/delaware-license-plate-lookup")({
  component: DelawareLicensePlateLookup,
});
