import { createFileRoute } from "@tanstack/react-router";
import FacebookMarketplaceSafetyPage from "@/pages/FacebookMarketplaceSafetyPage";

export const Route = createFileRoute("/facebook-marketplace-safety")({
  component: FacebookMarketplaceSafetyPage,
});
