import { createFileRoute, redirect } from "@tanstack/react-router";
import DynamicBlogPost from "@/pages/blog/DynamicBlogPost";
import { blogPostQueryOptions, getCanonicalBlogSlug } from "@/lib/blogPostQuery";

export const Route = createFileRoute("/blog/$slug")({
  // Resolve the post during server rendering so the page's own title,
  // description and canonical are present in the crawler-facing HTML.
  loader: async ({ params, context }) => {
    let post = null;
    try {
      post = await context.queryClient.ensureQueryData(blogPostQueryOptions(params.slug));
    } catch {
      // Fall through: the component renders its own 404 state.
    }

    if (post) {
      let canonicalSlug: string | null = null;
      try {
        canonicalSlug = await getCanonicalBlogSlug(post.title);
      } catch {
        // Keep the article available if canonical lookup is temporarily unavailable.
      }
      if (canonicalSlug && canonicalSlug !== params.slug) {
        throw redirect({ href: `/blog/${canonicalSlug}`, statusCode: 301, replace: true });
      }
    }
    return null;
  },
  component: DynamicBlogPost,
});
