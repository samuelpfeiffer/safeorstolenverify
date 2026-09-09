import { createFileRoute } from "@tanstack/react-router";
import DynamicBlogPost from "@/pages/blog/DynamicBlogPost";
import { blogPostQueryOptions } from "@/lib/blogPostQuery";

export const Route = createFileRoute("/blog/$slug")({
  // Resolve the post during server rendering so the page's own title,
  // description and canonical are present in the crawler-facing HTML.
  loader: async ({ params, context }) => {
    try {
      await context.queryClient.ensureQueryData(blogPostQueryOptions(params.slug));
    } catch {
      // Fall through: the component renders its own 404 state.
    }
    return null;
  },
  component: DynamicBlogPost,
});
