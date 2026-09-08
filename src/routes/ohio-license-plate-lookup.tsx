import { createFileRoute } from "@tanstack/react-router";
import OhioLicensePlateLookupPage from "@/pages/OhioLicensePlateLookupPage";

export const Route = createFileRoute("/ohio-license-plate-lookup")({
  component: OhioLicensePlateLookupPage,
});
