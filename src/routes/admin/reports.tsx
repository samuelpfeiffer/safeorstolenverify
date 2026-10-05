import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import ReportReviewPage from "@/pages/admin/ReportReviewPage";

export const Route = createFileRoute("/admin/reports")({
  component: () => (<AdminRoute><ReportReviewPage /></AdminRoute>),
});
