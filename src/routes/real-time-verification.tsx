import { createFileRoute } from "@tanstack/react-router";
import RealTimeVerificationPage from "@/pages/RealTimeVerificationPage";

export const Route = createFileRoute("/real-time-verification")({
  component: RealTimeVerificationPage,
});
