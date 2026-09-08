import { createFileRoute } from "@tanstack/react-router";
import CraigslistSafetyVerification from "@/pages/marketplace/CraigslistSafetyVerification";

export const Route = createFileRoute("/craigslist-safety-verification")({
  component: CraigslistSafetyVerification,
});
