import { createFileRoute } from "@tanstack/react-router";
import IMEICheckerAppPage from "@/pages/IMEICheckerAppPage";

export const Route = createFileRoute("/imei-checker-app")({
  component: IMEICheckerAppPage,
});
