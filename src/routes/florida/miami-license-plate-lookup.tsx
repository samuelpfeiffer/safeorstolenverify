import { createFileRoute } from "@tanstack/react-router";
import MiamiLicensePlateLookupPage from "@/pages/florida/MiamiLicensePlateLookupPage";

export const Route = createFileRoute("/florida/miami-license-plate-lookup")({
  component: MiamiLicensePlateLookupPage,
});
