import { createFileRoute } from "@tanstack/react-router";
import { ToVerifyChat } from "@/components/routing/ToVerifyChat";

// Oct 28 2026: the old installed-app search page now opens the AI chat, which runs every check.
export const Route = createFileRoute("/mobile-verify")({
  component: () => <ToVerifyChat />,
});
