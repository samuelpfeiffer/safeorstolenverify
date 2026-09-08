import { createFileRoute } from "@tanstack/react-router";
import EbayStolenItemCheck from "@/pages/marketplace/EbayStolenItemCheck";

export const Route = createFileRoute("/ebay-stolen-item-check")({
  component: EbayStolenItemCheck,
});
