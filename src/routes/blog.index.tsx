import { createFileRoute } from "@tanstack/react-router";
import BlogIndexPage from "@/pages/BlogIndexPage";
import { blogIndexQueryOptions } from "@/lib/blogPostQuery";

export const Route = createFileRoute("/blog/")({
  // Load posts during server rendering so every article link is in the
  // crawler-facing HTML. A database hiccup must never break the page.
  loader: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(blogIndexQueryOptions());
    } catch {
      // The component retries in the browser.
    }
    return null;
  },
  component: BlogIndexPage,
});
