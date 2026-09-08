import { createFileRoute } from "@tanstack/react-router";
import ArizonaLicensePlateLookupPage from "@/pages/ArizonaLicensePlateLookupPage";

export const Route = createFileRoute("/arizona-license-plate-lookup")({
  component: ArizonaLicensePlateLookupPage,
});
