import { createFileRoute } from "@tanstack/react-router";
import OrlandoLicensePlateLookupPage from "@/pages/florida/OrlandoLicensePlateLookupPage";

export const Route = createFileRoute("/florida/orlando-license-plate-lookup")({
  component: OrlandoLicensePlateLookupPage,
});
