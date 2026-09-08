import { createFileRoute } from "@tanstack/react-router";
import ForPawnShops from "@/pages/business/ForPawnShops";

export const Route = createFileRoute("/for-pawn-shops")({
  component: ForPawnShops,
});
