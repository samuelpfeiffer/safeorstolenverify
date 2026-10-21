import { createFileRoute } from "@tanstack/react-router";
import FirearmsCheckPage from "@/pages/FirearmsCheckPage";

// Oct 21 2026: title, description and canonical come from <PageSEO> in the page.
// A second set here printed two <title> and two description tags.
export const Route = createFileRoute("/firearms-check")({
  component: FirearmsCheckPage,
});
