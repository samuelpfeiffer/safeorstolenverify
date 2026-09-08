import { createFileRoute } from "@tanstack/react-router";
import EbayBuyerProtection from "@/pages/guides/EbayBuyerProtection";

export const Route = createFileRoute("/guides/ebay-buyer-protection")({
  component: EbayBuyerProtection,
});
