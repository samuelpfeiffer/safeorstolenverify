import { createFileRoute } from "@tanstack/react-router";
import StockXVerification from "@/pages/marketplace/StockXVerification";

export const Route = createFileRoute("/stockx-verification")({
  component: StockXVerification,
});
