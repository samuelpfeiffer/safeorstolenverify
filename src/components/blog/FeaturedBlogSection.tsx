import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { LazyImage } from '@/components/optimized/LazyImage';

const featuredPosts = [
  {
    title: "How to Avoid Buying Stolen Goods: Complete 2024 Guide",
    excerpt: "Learn the warning signs, verification methods, and legal protections that keep you safe when buying used items online or in person.",
    category: "Buyer Safety",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    image: "/images/blog/safer-buyer-flow.jpg",
    slug: "avoid-buying-stolen-goods-guide"
  },
  {
    title: "Serial Numbers 101: What They Are and Why They Matter",
    excerpt: "Everything you need to know about serial numbers, how they work, and why they're crucial for verifying the legitimacy of your purchases.",
    category: "Education", 
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    image: "/images/blog/serial-numbers-101.jpg",
    slug: "serial-numbers-complete-guide"
  },
  {
    title: "Marketplace Red Flags: 10 Warning Signs of Stolen Items",
    excerpt: "Spot suspicious listings before you buy. These red flags can save you from unknowingly purchasing stolen merchandise.",
    category: "Prevention",
    publishedAt: "2024-01-10", 
    readTime: "5 min read",
    image: "/images/blog/marketplace-red-flags.jpg",
    slug: "marketplace-warning-signs-stolen-items"
  }
];

export const FeaturedBlogSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn How to Buy Safely
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides and tips to protect yourself from stolen goods and fraudulent sellers
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {featuredPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  aspectRatio="16/9"
                  containerClassName="w-full"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="secondary" className="bg-sos-orange/10 text-sos-orange">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sos-orange transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <ArrowRight className="h-4 w-4 text-sos-orange group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold rounded-lg transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};