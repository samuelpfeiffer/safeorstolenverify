import { createFileRoute } from "@tanstack/react-router";
import OurStoryPage from "@/pages/OurStoryPage";

export const Route = createFileRoute("/our-story")({
  component: OurStoryPage,
});
