import { createFileRoute } from "@tanstack/react-router";
import StolenVerificationAppGuide from "@/pages/blog/StolenVerificationAppGuide";

export const Route = createFileRoute("/blog/stolen-verification-app-guide")({
  component: StolenVerificationAppGuide,
});
