import { createFileRoute } from "@tanstack/react-router";
import { TennesseeLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/tennessee-license-plate-lookup")({
  component: TennesseeLicensePlateLookup,
});
