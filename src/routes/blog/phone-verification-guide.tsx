import { createFileRoute } from "@tanstack/react-router";
import PhoneVerificationGuide from "@/pages/blog/PhoneVerificationGuide";

export const Route = createFileRoute("/blog/phone-verification-guide")({
  component: PhoneVerificationGuide,
});
