import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/CheckHeavyEquipmentPage";

export const Route = createFileRoute("/check-heavy-equipment-stolen")({
  component: Page,
});
