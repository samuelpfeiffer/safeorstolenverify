import { createFileRoute } from "@tanstack/react-router";
import MarketplaceURLChecker from "@/pages/MarketplaceURLChecker";

export const Route = createFileRoute("/marketplace-url-checker")({
  component: MarketplaceURLChecker,
});
