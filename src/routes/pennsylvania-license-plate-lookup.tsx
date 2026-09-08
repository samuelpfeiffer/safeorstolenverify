import { createFileRoute } from "@tanstack/react-router";
import PennsylvaniaLicensePlateLookupPage from "@/pages/PennsylvaniaLicensePlateLookupPage";

export const Route = createFileRoute("/pennsylvania-license-plate-lookup")({
  component: PennsylvaniaLicensePlateLookupPage,
});
