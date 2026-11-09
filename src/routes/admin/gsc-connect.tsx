import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import GSCConnectionPage from "@/pages/admin/GSCConnectionPage";

export const Route = createFileRoute("/admin/gsc-connect")({
  component: () => (
    <AdminRoute>
      <GSCConnectionPage />
    </AdminRoute>
  ),
});
