import { createFileRoute } from "@tanstack/react-router";
import CheckoutRedirectPage from "@/pages/CheckoutRedirectPage";

export const Route = createFileRoute("/checkout-redirect")({
  component: CheckoutRedirectPage,
});
