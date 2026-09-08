import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import TriggerIndexNowPage from "@/pages/admin/TriggerIndexNow";

export const Route = createFileRoute("/admin/indexnow")({
  component: () => (<AdminRoute><TriggerIndexNowPage /></AdminRoute>),
});
