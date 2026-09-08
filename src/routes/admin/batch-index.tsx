import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import BatchIndexPage from "@/pages/admin/BatchIndexPage";

export const Route = createFileRoute("/admin/batch-index")({
  component: () => (<AdminRoute><BatchIndexPage /></AdminRoute>),
});
