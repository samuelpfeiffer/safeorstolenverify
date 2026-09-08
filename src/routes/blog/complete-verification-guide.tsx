import { createFileRoute } from "@tanstack/react-router";
import CompleteVerificationGuide from "@/pages/blog/CompleteVerificationGuide";

export const Route = createFileRoute("/blog/complete-verification-guide")({
  component: CompleteVerificationGuide,
});
