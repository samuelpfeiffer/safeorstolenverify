import { createFileRoute } from "@tanstack/react-router";
import IMEICheckerPage from "@/pages/IMEICheckerPage";

export const Route = createFileRoute("/imei-checker")({
  component: IMEICheckerPage,
});
