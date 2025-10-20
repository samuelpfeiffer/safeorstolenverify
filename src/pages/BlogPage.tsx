import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const BlogPage = () => {
  const { data: posts, isLoading, error } = useBlogPosts();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Safe or Stolen Blog",
    "description": "Expert guides on verifying IMEI, VIN, and serial numbers to avoid buying stolen goods",
    "url": "https://safeorstolen.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Safe or Stolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "blogPost": posts?.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || post.content.substring(0, 150),
      "datePublished": post.published_at || post.created_at,
      "url": `https://safeorstolen.com/blog/${post.slug}`,
      "author": {
        "@type": "Organization",
        "name": "Safe or Stolen"
      },
      "keywords": post.meta_keywords || ''
    })) || []
  };

  return (
    <>
      <PageSEO
        title="Expert Guides on Avoiding Stolen Goods | Safe or Stolen Blog"
        description="Learn how to verify IMEI, VIN, and serial numbers. Expert guides on marketplace safety, scam prevention, and buying used items securely."
        keywords="IMEI verification guide, VIN check tutorial, avoid stolen goods, marketplace safety tips, serial number verification"
        canonical="/blog"
        structuredData={[structuredData]}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#3D2817] to-[#FF8C00] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Safe or Stolen Blog
            </h1>
            <p className="text-xl text-white/80">
              Expert guides to protect yourself from buying stolen goods and marketplace scams
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-white/80 mb-4">Failed to load blog posts.</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/80">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow bg-card border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      {post.categories && post.categories.length > 0 && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                          {post.categories[0].name}
                        </span>
                      )}
                      {post.reading_time && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.reading_time} min read
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-2xl mb-2 text-foreground">{post.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt || post.content.substring(0, 150) + '...'}
                    </p>
                    <Button asChild variant="outline" className="group border-primary/20">
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Stay Protected</h2>
                <p className="text-muted-foreground mb-6">
                  Subscribe to get the latest guides on verifying items and staying safe in online marketplaces
                </p>
                <Button size="lg" asChild>
                  <Link to="/auth?tab=signup">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
