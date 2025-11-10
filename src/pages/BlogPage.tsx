import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Loader2, Tag } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const blogHeaderImage = '/generated-assets/blog-cybersecurity.jpg';

const BlogPage = () => {
  const { data: posts, isLoading, error, refetch } = useBlogPosts();

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

      <div className="min-h-screen py-20">
        {/* Hero Section with Featured Image */}
        <div className="relative mb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blogHeaderImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
          </div>
          
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sos-orange/10 border border-sos-orange/20 backdrop-blur-sm mb-4 animate-fadeIn">
                <Tag className="w-4 h-4 text-sos-orange" />
                <span className="text-sm font-semibold text-sos-orange">Expert Security Insights</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-foreground animate-slideUp">
                SafeOrStolen Blog
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.1s' }}>
                Expert guides to protect yourself from buying stolen goods and marketplace scams
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-sos-orange mx-auto" />
                <p className="text-muted-foreground">Loading articles...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <Loader2 className="w-10 h-10 text-destructive" />
                </div>
                <p className="text-foreground font-semibold text-lg">Failed to load blog posts</p>
                <p className="text-muted-foreground">Please try again later</p>
                <Button onClick={() => refetch()} className="sos-gradient">
                  Try Again
                </Button>
              </div>
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-10 h-10 text-secondary" />
                </div>
                <p className="text-foreground font-semibold text-lg">No blog posts yet</p>
                <p className="text-muted-foreground">Check back soon for expert security insights!</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              {posts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group hover:shadow-elegant transition-all hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50 hover:border-sos-orange/30 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-2 text-xs">
                      {post.categories && post.categories.length > 0 && (
                        <span className="px-3 py-1 rounded-full bg-sos-orange/10 text-sos-orange font-semibold border border-sos-orange/20">
                          {post.categories[0].name}
                        </span>
                      )}
                      {post.reading_time && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.reading_time} min
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-sos-orange transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt || post.content.substring(0, 120) + '...'}
                    </p>
                    <Button asChild variant="ghost" className="group/btn w-full justify-between border border-border/50 hover:border-sos-orange/50 hover:bg-sos-orange/5">
                      <Link to={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-20">
            <Card className="max-w-3xl mx-auto border-2 border-sos-orange/20 bg-gradient-to-br from-card to-secondary/5 shadow-elegant">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-black mb-4 text-foreground">Stay Protected</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Get the latest guides on verifying items and staying safe in online marketplaces. 
                  Join thousands of protected buyers and sellers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="sos-gradient hover:opacity-90 text-white font-bold shadow-orange">
                    <Link to="/auth?tab=signup">
                      Get Started Free
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 border-sos-orange/30 hover:bg-sos-orange/5">
                    <Link to="/pricing">
                      View Plans
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
