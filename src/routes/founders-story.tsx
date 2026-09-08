import { createFileRoute } from "@tanstack/react-router";
import OurStoryPage from "@/pages/OurStoryPage";

export const Route = createFileRoute("/founders-story")({
  component: OurStoryPage,
});
