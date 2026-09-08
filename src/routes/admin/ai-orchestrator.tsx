import { createFileRoute } from "@tanstack/react-router";
import { AdminRoute } from "@/core/routing/AdminRoute";
import AIOrchestrator from "@/pages/admin/AIOrchestrator";

export const Route = createFileRoute("/admin/ai-orchestrator")({
  component: () => (<AdminRoute><AIOrchestrator /></AdminRoute>),
});
