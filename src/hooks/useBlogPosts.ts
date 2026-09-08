
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image_url: string | null;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  reading_time: number | null;
  view_count: number | null;
  created_at: string;
  updated_at: string;
  categories?: BlogCategory[];
  tags?: BlogTag[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  color: string | null;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export const useBlogPosts = (limit?: number, category?: string) => {
  return useQuery({
    queryKey: ['blog-posts', limit, category],
    queryFn: async () => {
      console.log('Fetching blog posts...');
      
      let query = supabase
        .from('blog_posts')
        .select(`
          *,
          blog_post_categories!inner(
            blog_categories(*)
          ),
          blog_post_tags(
            blog_tags(*)
          )
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (category) {
        query = query.eq('blog_post_categories.blog_categories.slug', category);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      // Transform the data to include categories and tags
      const transformedData: BlogPost[] = data?.map(post => ({
        ...post,
        status: post.status as 'draft' | 'published' | 'archived',
        categories: post.blog_post_categories?.map((pc: any) => pc.blog_categories).filter(Boolean) || [],
        tags: post.blog_post_tags?.map((pt: any) => pt.blog_tags).filter(Boolean) || []
      })) || [];

      console.log('Blog posts fetched successfully:', transformedData);
      return transformedData;
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      console.log('Fetching blog post by slug:', slug);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          blog_post_categories(
            blog_categories(*)
          ),
          blog_post_tags(
            blog_tags(*)
          )
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }

      if (!data) {
        throw new Error('Blog post not found');
      }

      // Transform the data to include categories and tags
      const transformedData: BlogPost = {
        ...data,
        status: data.status as 'draft' | 'published' | 'archived',
        categories: data.blog_post_categories?.map((pc: any) => pc.blog_categories).filter(Boolean) || [],
        tags: data.blog_post_tags?.map((pt: any) => pt.blog_tags).filter(Boolean) || []
      };

      console.log('Blog post fetched successfully:', transformedData);
      return transformedData;
    },
    enabled: !!slug,
  });
};

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ['blog-categories'],
    queryFn: async () => {
      console.log('Fetching blog categories...');
      
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching blog categories:', error);
        throw error;
      }

      console.log('Blog categories fetched successfully:', data);
      return data as BlogCategory[];
    },
  });
};
