import { createFileRoute } from "@tanstack/react-router";
import DynamicBlogPost from "@/pages/blog/DynamicBlogPost";

export const Route = createFileRoute("/blog/$slug")({
  component: DynamicBlogPost,
});
