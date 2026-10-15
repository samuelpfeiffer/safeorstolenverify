import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import DynamicBlogPost from "@/pages/blog/DynamicBlogPost";
import { blogPostQueryOptions, getCanonicalBlogSlug } from "@/lib/blogPostQuery";
import { resolveRetiredBlogSlug } from "@/utils/legacyRedirectMap";
import { APP_INSTALL_PATH, isPlaceholderLink } from "@/lib/blogContent";

export const Route = createFileRoute("/blog/$slug")({
  // Resolve the post during server rendering so the page's own title,
  // description and canonical are present in the crawler-facing HTML.
  loader: async ({ params, context }) => {
    // Unfilled template links in old posts ("[SAFEORSTOLEN_APP_IOS_LINK]", "[Your iOS App Store
    // Link]") resolved to /blog/[...]; Search Console still lists them. They meant "get the app".
    if (isPlaceholderLink(params.slug)) {
      throw redirect({ href: APP_INSTALL_PATH, statusCode: 301, replace: true });
    }

    let post = null;
    let lookupFailed = false;
    try {
      post = await context.queryClient.ensureQueryData(blogPostQueryOptions(params.slug));
    } catch {
      // Fall through: the component renders its own 404 state.
      lookupFailed = true;
    }

    if (!post && !lookupFailed) {
      const retiredTo = resolveRetiredBlogSlug(params.slug);
      if (retiredTo) throw redirect({ href: retiredTo, statusCode: 301, replace: true });
      // No such post: answer a real 404. Rendering "Article Not Found" with a 200 and a noindex
      // tag is what Search Console reported as "Excluded by 'noindex'" / soft 404.
      throw notFound();
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
