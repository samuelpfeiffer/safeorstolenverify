import { createFileRoute } from "@tanstack/react-router";
import MobileSettingsPage from "@/mobile/pages/MobileSettingsPage";

export const Route = createFileRoute("/mobile-settings")({
  component: MobileSettingsPage,
});
