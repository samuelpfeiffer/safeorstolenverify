import { createFileRoute } from "@tanstack/react-router";
import SellerBadgePage from "@/pages/SellerBadgePage";

export const Route = createFileRoute("/seller-badge")({
  component: SellerBadgePage,
});
