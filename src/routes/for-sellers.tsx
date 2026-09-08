import { createFileRoute } from "@tanstack/react-router";
import ForSellers from "@/pages/business/ForSellers";

export const Route = createFileRoute("/for-sellers")({
  component: ForSellers,
});
