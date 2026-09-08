import { createFileRoute } from "@tanstack/react-router";
import MarketplaceIntegrationPage from "@/pages/MarketplaceIntegrationPage";

export const Route = createFileRoute("/marketplace-integration")({
  component: MarketplaceIntegrationPage,
});
