import { createFileRoute } from "@tanstack/react-router";
import VerifyChatPage from "@/pages/VerifyChatPage";

export const Route = createFileRoute("/ai-chat")({
  component: VerifyChatPage,
});
