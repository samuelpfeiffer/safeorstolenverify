import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredPosts = [
  {
    title: "Revolutionary AI Verification Technology",
    excerpt: "Discover how SafeOrStolen's cutting-edge AI and neural networks deliver industry-leading verification accuracy with enterprise-grade security.",
    category: "Technology",
    publishedAt: "2024-12-31",
    readTime: "7 min read",
    image: "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    slug: "ai-verification-technology"
  },
  {
    title: "SafeOrStolen Mobile App: Advanced Features",
    excerpt: "Experience verification power in your pocket. Camera scanning, instant results, and smart notifications for safer shopping on-the-go.",
    category: "Mobile App",
    publishedAt: "2024-12-30",
    readTime: "6 min read",
    image: "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    slug: "mobile-app-features"
  },
  {
    title: "Enterprise Security & Privacy Protection",
    excerpt: "Learn about our military-grade encryption, zero-knowledge architecture, and comprehensive compliance framework that keeps your data secure.",
    category: "Security",
    publishedAt: "2024-12-29",
    readTime: "8 min read",
    image: "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
    slug: "enterprise-security"
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
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
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