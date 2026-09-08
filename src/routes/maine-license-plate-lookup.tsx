import { createFileRoute } from "@tanstack/react-router";
import { MaineLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/maine-license-plate-lookup")({
  component: MaineLicensePlateLookup,
});
