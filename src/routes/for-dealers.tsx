import { createFileRoute } from "@tanstack/react-router";
import ForDealers from "@/pages/business/ForDealers";

export const Route = createFileRoute("/for-dealers")({
  component: ForDealers,
});
