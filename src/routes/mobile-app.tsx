import { createFileRoute } from "@tanstack/react-router";
import MobileAppPage from "@/pages/MobileAppPage";

export const Route = createFileRoute("/mobile-app")({
  component: MobileAppPage,
});
