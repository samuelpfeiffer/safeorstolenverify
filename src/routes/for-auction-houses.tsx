import { createFileRoute } from "@tanstack/react-router";
import ForAuctionHouses from "@/pages/business/ForAuctionHouses";

export const Route = createFileRoute("/for-auction-houses")({
  component: ForAuctionHouses,
});
