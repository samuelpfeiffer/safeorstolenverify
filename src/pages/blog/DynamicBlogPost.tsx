/**
 * Dynamic Blog Post Page
 * Renders blog posts from the database by slug
 */

import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';

interface BlogPost {
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

export default function DynamicBlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <>
        <StatusCodeHandler statusCode={404} noIndex={true} />
        <PageSEO
          title="Blog Post Not Found | SafeOrStolen"
          description="The blog post you're looking for doesn't exist or has been removed. Browse our blog for guides on avoiding stolen goods."
          noIndex={true}
        />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Card className="max-w-md">
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  const publishedDate = post.published_at || post.created_at;
  const sanitizedContent = DOMPurify.sanitize(post.content, {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'pre', 'blockquote', 'img', 'br', 'hr'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel'],
  });

  return (
    <>
      <PageSEO
        title={post.meta_title || `${post.title} | SafeOrStolen Blog`}
        description={post.meta_description || post.excerpt || `Read ${post.title} on SafeOrStolen Blog`}
        keywords={post.meta_keywords || 'stolen items, verification, safety tips'}
        canonical={`https://safeorstolen.com/blog/${post.slug}`}
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.meta_description || post.excerpt,
          image: post.featured_image_url || 'https://safeorstolen.com/sos-logo.png',
          datePublished: publishedDate,
          dateModified: post.created_at,
          author: {
            '@type': 'Organization',
            name: 'SafeOrStolen',
          },
          publisher: {
            '@type': 'Organization',
            name: 'SafeOrStolen',
            logo: {
              '@type': 'ImageObject',
              url: 'https://safeorstolen.com/sos-logo.png',
            },
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/5 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(new Date(publishedDate), 'MMMM d, yyyy')}
              </span>
              {post.reading_time && (
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.reading_time} min read
                </span>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image_url && (
            <div className="mb-12 rounded-xl overflow-hidden border border-border">
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          {/* CTA Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Verify an Item?</h2>
                <p className="text-muted-foreground mb-6">
                  Use SafeOrStolen to check if any secondhand item is safe to buy
                </p>
                <Link to="/verify">
                  <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                    Verify Now
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
