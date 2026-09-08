import { createFileRoute } from "@tanstack/react-router";
import MarketplaceAdvisorPage from "@/pages/MarketplaceAdvisorPage";

export const Route = createFileRoute("/marketplace-advisor")({
  component: MarketplaceAdvisorPage,
});
