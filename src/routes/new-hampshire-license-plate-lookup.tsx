import { createFileRoute } from "@tanstack/react-router";
import { NewHampshireLicensePlateLookup } from "@/pages/states";

export const Route = createFileRoute("/new-hampshire-license-plate-lookup")({
  component: NewHampshireLicensePlateLookup,
});
