import { createFileRoute } from "@tanstack/react-router";
import AffiliateRedirectPage from "@/pages/AffiliateRedirectPage";

export const Route = createFileRoute("/go/$slug")({
  component: AffiliateRedirectPage,
});
