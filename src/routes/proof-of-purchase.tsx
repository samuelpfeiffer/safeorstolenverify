import { createFileRoute } from "@tanstack/react-router";
import ProofOfPurchasePage from "@/pages/ProofOfPurchasePage";

export const Route = createFileRoute("/proof-of-purchase")({
  component: ProofOfPurchasePage,
});
