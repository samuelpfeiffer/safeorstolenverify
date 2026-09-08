import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import StripeAdminPage from "@/pages/admin/StripeAdminPage";

export const Route = createFileRoute("/admin/stripe")({
  component: () => (<AdminRoute><StripeAdminPage /></AdminRoute>),
});
