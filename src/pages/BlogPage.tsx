
import { useParams } from 'react-router-dom';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { BlogList } from '@/components/blog/BlogList';

import { UnifiedSEO } from '@/components/seo/UnifiedSEO';
import { createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';

const BlogPage = () => {
  const { category } = useParams();
  const { data: posts, isLoading, error } = useBlogPosts(undefined, category);

  const pageTitle = category 
    ? `${category.replace('-', ' ')} - Blog | Safe Or Stolen`
    : 'Blog | Safe Or Stolen';
  
  const pageDescription = category
    ? `Read our latest articles about ${category.replace('-', ' ')} and product verification.`
    : 'Stay informed with the latest tips, guides, and news about product verification and safety.';

  // Generate ItemList schema for blog posts
  const itemListSchema = posts?.length ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": category ? `${category.replace('-', ' ')} Articles` : 'Stolen Goods Prevention Blog Posts',
    "description": pageDescription,
    "numberOfItems": posts.length,
    "itemListElement": posts.map((post: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://safeorstolen.com/blog/${post.slug}`,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Safe or Stolen"
        }
      }
    }))
  } : undefined;

  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    ...(category ? [{ name: category.replace('-', ' '), url: `/blog/category/${category}` }] : [])
  ]);

  return (
    <>
      <UnifiedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={category ? `/blog/category/${category}` : '/blog'}
        keywords="blog, stolen goods, verification, security, second-hand items, IMEI check, VIN check, serial numbers"
        type="website"
        structuredData={[itemListSchema, faqSchema, breadcrumbSchema]}
      />
      
      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              {category ? `${category.replace('-', ' ')} Articles` : 'Stolen Goods Prevention Blog'}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {category 
                ? `Everything you need to know about ${category.replace('-', ' ')}`
                : 'Learn how to verify items before buying, avoid stolen goods, and shop safely on marketplaces like eBay, Facebook Marketplace, and Craigslist.'
              }
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-sos-dark/80 rounded-lg h-64 animate-pulse border border-sos-orange/20" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-white mb-2">Error loading posts</h3>
                <p className="text-gray-300">Please try again later.</p>
              </div>
            ) : (
              <>
                <div className="max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    Practical guides, buyer checklists, and product verification insights — written to help you avoid fraud and make safer purchases. We cover IMEI, VIN, serial numbers, and marketplace safety using real workflows.
                  </p>
                  <p className="mb-0">
                    New articles drop regularly. Explore our latest posts below.
                  </p>
                </div>
                <BlogList posts={posts || []} featured={!category} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
