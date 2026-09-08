import { createFileRoute } from "@tanstack/react-router";
import MobileOnboardingPage from "@/mobile/pages/MobileOnboardingPage";

export const Route = createFileRoute("/mobile-onboarding")({
  component: MobileOnboardingPage,
});
