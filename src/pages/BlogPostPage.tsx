
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { useBlogPost } from '@/hooks/useBlogPosts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { getBlogPostMetadata } from '@/utils/seo/metadata';
import { createArticleSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';
import DOMPurify from 'dompurify';
import { StrategicAdPlacement } from '@/components/advertising/StrategicAdPlacement';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8 animate-pulse" />
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8 animate-pulse" />
            <div className="h-64 bg-gray-200 rounded mb-8 animate-pulse" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <>
        <PageSEO
          title="Blog Post Not Found - Safe or Stolen"
          description="The blog post you're looking for doesn't exist or may have been moved."
          canonical={`/blog/${slug}`}
          noIndex={true}
        />
        <div className="bg-white min-h-screen">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/blog">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const metadata = getBlogPostMetadata(post);
  const breadcrumbItems = [
    { name: 'Home', url: 'https://safeorstolen.com/' },
    { name: 'Blog', url: 'https://safeorstolen.com/blog' },
    { name: post.title, url: `https://safeorstolen.com/blog/${post.slug}` }
  ];

  const structuredData = [
    createArticleSchema(post),
    createBreadcrumbSchema(breadcrumbItems)
  ];

  return (
    <>
      <PageSEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        image={metadata.ogImage}
        type="article"
        structuredData={structuredData}
      />
      
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb for SEO */}
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
                <li>/</li>
                <li className="text-gray-900">{post.title}</li>
              </ol>
            </nav>

            {/* Back button */}
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4">
                {post.categories.map((category) => (
                  <Badge 
                    key={category.id}
                    style={{ backgroundColor: category.color || '#3B82F6' }}
                    className="text-white mr-2"
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title with proper heading structure */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Meta information */}
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.published_at || post.created_at}>
                    {post.published_at ? formatDate(post.published_at) : formatDate(post.created_at)}
                  </time>
                </div>
                {post.reading_time && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.reading_time} min read</span>
                  </div>
                )}
                {post.view_count && (
                  <span>{post.view_count} views</span>
                )}
              </div>
            </header>

            {/* Featured image with proper alt text */}
            {post.featured_image_url && (
              <figure className="mb-8">
                <img
                  src={post.featured_image_url}
                  alt={`Featured image for ${post.title}`}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                  loading="eager"
                />
              </figure>
            )}

            {/* Article content with proper semantic structure and XSS protection */}
            <article 
              className="prose prose-lg max-w-none mb-8 prose-headings:text-gray-900 prose-links:text-blue-600 prose-links:no-underline hover:prose-links:underline"
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(post.content, {
                  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote'],
                  ALLOWED_ATTR: ['href', 'target', 'rel'],
                  ALLOW_DATA_ATTR: false
                })
              }}
            />

            {/* Contextual Ad */}
            <StrategicAdPlacement placement="inline" />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <footer className="border-t pt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag.id} variant="secondary">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </footer>
            )}

            {/* Related content suggestion */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Want to verify an item?</h2>
              <p className="text-gray-600 mb-4">Use our global verification service to check if your item is stolen or legitimate.</p>
              <Link to="/" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Start Verification
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
