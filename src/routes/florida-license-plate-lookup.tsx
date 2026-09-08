import { createFileRoute } from "@tanstack/react-router";
import FloridaLicensePlateLookupPage from "@/pages/FloridaLicensePlateLookupPage";

export const Route = createFileRoute("/florida-license-plate-lookup")({
  component: FloridaLicensePlateLookupPage,
});
