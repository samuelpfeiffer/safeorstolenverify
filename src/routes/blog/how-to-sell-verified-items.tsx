import { createFileRoute } from "@tanstack/react-router";
import HowToSellVerifiedItems from "@/pages/blog/HowToSellVerifiedItems";

export const Route = createFileRoute("/blog/how-to-sell-verified-items")({
  component: HowToSellVerifiedItems,
});
