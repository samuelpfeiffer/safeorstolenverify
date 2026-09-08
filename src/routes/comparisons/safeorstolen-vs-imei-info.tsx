import { createFileRoute } from "@tanstack/react-router";
import SafeOrStolenVsIMEIInfo from "@/pages/comparisons/SafeOrStolenVsIMEIInfo";

export const Route = createFileRoute("/comparisons/safeorstolen-vs-imei-info")({
  component: SafeOrStolenVsIMEIInfo,
});
