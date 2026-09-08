import { createFileRoute } from "@tanstack/react-router";
import FacebookMarketplaceStolenCheck from "@/pages/marketplace/FacebookMarketplaceStolenCheck";

export const Route = createFileRoute("/facebook-marketplace-stolen-check")({
  component: FacebookMarketplaceStolenCheck,
});
