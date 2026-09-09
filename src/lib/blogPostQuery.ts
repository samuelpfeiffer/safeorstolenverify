import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  featured_image_url: string | null;
  reading_time: number | null;
  published_at: string | null;
  created_at: string;
  status: string;
}

/**
 * Shared query options so the route loader (server render) and the page
 * component read from the exact same cache entry. Without the loader the
 * post is only fetched in the browser, so crawlers got an empty page with
 * no title, description or canonical.
 */
export const blogPostQueryOptions = (slug: string) => ({
  queryKey: ['blog-post', slug] as const,
  queryFn: async (): Promise<BlogPost | null> => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (error) throw error;
    return (data as BlogPost | null) ?? null;
  },
  staleTime: 5 * 60 * 1000,
});
