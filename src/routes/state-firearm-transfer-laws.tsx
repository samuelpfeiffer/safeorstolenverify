import { createFileRoute } from "@tanstack/react-router";
import StateFirearmTransferLawsPage from "@/pages/StateFirearmTransferLawsPage";

export const Route = createFileRoute("/state-firearm-transfer-laws")({
  component: StateFirearmTransferLawsPage,
});
