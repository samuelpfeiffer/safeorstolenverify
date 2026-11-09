import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import GrowthDashboardPage from "@/pages/admin/GrowthDashboardPage";

export const Route = createFileRoute("/admin/growth")({
  component: () => (
    <AdminRoute>
      <GrowthDashboardPage />
    </AdminRoute>
  ),
});
