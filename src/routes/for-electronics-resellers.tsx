import { createFileRoute } from "@tanstack/react-router";
import ForElectronicsResellers from "@/pages/business/ForElectronicsResellers";

export const Route = createFileRoute("/for-electronics-resellers")({
  component: ForElectronicsResellers,
});
