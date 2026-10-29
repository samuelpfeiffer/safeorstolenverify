import { createFileRoute } from "@tanstack/react-router";
import { ToVerifyChat } from "@/components/routing/ToVerifyChat";

// Oct 28 2026: old installed-app history page now opens the dashboard inside the AI chat.
export const Route = createFileRoute("/mobile-dashboard")({
  component: () => <ToVerifyChat view="/dashboard" />,
});
