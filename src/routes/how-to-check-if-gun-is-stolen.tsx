import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/HowToCheckIfGunStolenPage";

// Oct 21 2026: SEO tags come from the page template (one title, one description).
export const Route = createFileRoute("/how-to-check-if-gun-is-stolen")({
  component: Page,
});
