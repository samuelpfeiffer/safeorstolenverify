import { createFileRoute } from "@tanstack/react-router";
import OfferupVerifyNotStolen from "@/pages/marketplace/OfferupVerifyNotStolen";

export const Route = createFileRoute("/offerup-verify-not-stolen")({
  component: OfferupVerifyNotStolen,
});
