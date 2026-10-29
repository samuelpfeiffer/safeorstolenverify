import { createFileRoute } from "@tanstack/react-router";
import { ToVerifyChat } from "@/components/routing/ToVerifyChat";

// Oct 28 2026: the dashboard lives inside the AI chat (/verify), opened on the right side.
export const Route = createFileRoute("/dashboard")({
  component: () => <ToVerifyChat view="/dashboard" />,
});
