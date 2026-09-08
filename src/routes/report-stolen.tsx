import { createFileRoute } from "@tanstack/react-router";
import ReportStolenPage from "@/pages/ReportStolenPage";

export const Route = createFileRoute("/report-stolen")({
  component: ReportStolenPage,
});
