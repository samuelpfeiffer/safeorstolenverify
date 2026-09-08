import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import MarketingDashboard from "@/pages/admin/MarketingDashboard";

export const Route = createFileRoute("/admin/marketing")({
  component: () => (<AdminRoute><MarketingDashboard /></AdminRoute>),
});
