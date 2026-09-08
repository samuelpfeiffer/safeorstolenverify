import { createFileRoute } from "@tanstack/react-router";
import SharedReportPage from "@/pages/SharedReportPage";

export const Route = createFileRoute("/shared/$shareCode")({
  component: SharedReportPage,
});
