import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import GSCCallbackPage from "@/pages/admin/GSCCallbackPage";

export const Route = createFileRoute("/admin/gsc-callback")({
  component: () => (<AdminRoute><GSCCallbackPage /></AdminRoute>),
});
