import { createFileRoute } from "@tanstack/react-router";
import { KentuckyLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/kentucky-license-plate-lookup")({
  component: KentuckyLicensePlateLookup,
});
