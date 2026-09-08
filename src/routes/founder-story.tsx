import { createFileRoute } from "@tanstack/react-router";
import OurStoryPage from "@/pages/OurStoryPage";

export const Route = createFileRoute("/founder-story")({
  component: OurStoryPage,
});
