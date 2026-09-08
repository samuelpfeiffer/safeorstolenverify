import { createFileRoute } from "@tanstack/react-router";
import TexasLicensePlateLookupPage from "@/pages/TexasLicensePlateLookupPage";

export const Route = createFileRoute("/texas-license-plate-lookup")({
  component: TexasLicensePlateLookupPage,
});
