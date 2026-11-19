import { createFileRoute } from "@tanstack/react-router";
import ReportStolenGunPage from "@/pages/ReportStolenGunPage";

export const Route = createFileRoute("/report-stolen-gun")({
  component: ReportStolenGunPage,
});
