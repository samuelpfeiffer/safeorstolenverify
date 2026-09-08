import { createFileRoute } from "@tanstack/react-router";
import PawnShopStolenItemVerification from "@/pages/blog/PawnShopStolenItemVerification";

export const Route = createFileRoute("/blog/pawn-shop-stolen-item-verification")({
  component: PawnShopStolenItemVerification,
});
