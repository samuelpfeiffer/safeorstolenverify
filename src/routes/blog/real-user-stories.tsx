import { createFileRoute } from "@tanstack/react-router";
import RealUserStories from "@/pages/blog/RealUserStories";

export const Route = createFileRoute("/blog/real-user-stories")({
  component: RealUserStories,
});
