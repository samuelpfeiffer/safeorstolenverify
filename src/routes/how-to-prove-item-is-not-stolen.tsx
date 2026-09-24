import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/HowToProveItemNotStolenPage";
export const Route = createFileRoute("/how-to-prove-item-is-not-stolen")({
  component: Page,
});
