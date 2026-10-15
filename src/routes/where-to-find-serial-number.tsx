import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/ComprehensiveGuidePage";

// Oct 15 2026: /comprehensive-guide and this URL served two pages with the same title and topic.
// The fuller, hand-rewritten guide now lives here; /comprehensive-guide 301s to this URL.
export const Route = createFileRoute("/where-to-find-serial-number")({
  component: Page,
});
