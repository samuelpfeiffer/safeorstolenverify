import { createFileRoute } from "@tanstack/react-router";
import AffiliateDisclosurePage from "@/pages/AffiliateDisclosurePage";

export const Route = createFileRoute("/affiliate-disclosure")({
  component: AffiliateDisclosurePage,
});
