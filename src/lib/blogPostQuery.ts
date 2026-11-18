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
  updated_at: string;
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

/**
 * Published imports sometimes created numbered copies of the same article.
 * Keep the earliest published slug as the single indexable URL.
 */
export async function getCanonicalBlogSlug(title: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('title', title)
    .eq('status', 'published')
    .order('published_at', { ascending: true, nullsFirst: false })
    .order('created_at', { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data?.slug ?? null;
}

/**
 * Nov 17 2026: the blog index used to fetch posts only in the browser, so
 * crawlers and AI bots saw none of the database posts on /blog (they had no
 * internal links at all). The /blog/ route loader now fills this same cache
 * entry during server rendering.
 */
export const blogIndexQueryOptions = () => ({
  queryKey: ['blog-posts-index'] as const,
  queryFn: async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, meta_keywords, content, reading_time, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(50);

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
    return data || [];
  },
  staleTime: 1000 * 60 * 5,
});
