import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Users,
  Lightbulb
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishDate: string;
  readTime: number;
  category: 'fraud-prevention' | 'buying-guide' | 'industry-news' | 'how-to' | 'case-study';
  tags: string[];
  featured: boolean;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Red Flags When Buying Used Electronics Online',
    excerpt: 'Learn the warning signs that could save you from purchasing stolen or defective electronics.',
    content: 'Full article content...',
    author: {
      name: 'Sarah Mitchell',
      role: 'Fraud Prevention Expert',
      avatar: '/avatars/sarah.jpg'
    },
    publishDate: '2024-02-15',
    readTime: 8,
    category: 'fraud-prevention',
    tags: ['electronics', 'online-shopping', 'fraud-prevention'],
    featured: true,
    image: '/blog/electronics-safety.jpg'
  },
  {
    id: '2',
    title: 'VIN Number Verification: Complete Buyer\'s Guide',
    excerpt: 'Everything you need to know about checking VIN numbers before purchasing a used vehicle.',
    content: 'Full article content...',
    author: {
      name: 'Mike Thompson',
      role: 'Automotive Security Specialist',
      avatar: '/avatars/mike.jpg'
    },
    publishDate: '2024-02-12',
    readTime: 12,
    category: 'buying-guide',
    tags: ['vehicles', 'vin-check', 'car-buying'],
    featured: true,
    image: '/blog/vin-check-guide.jpg'
  },
  {
    id: '3',
    title: 'How Stolen Phone Networks Operate and How to Avoid Them',
    excerpt: 'Inside look at stolen phone trafficking and practical steps to protect yourself.',
    content: 'Full article content...',
    author: {
      name: 'Detective Lisa Park',
      role: 'Law Enforcement Consultant',
      avatar: '/avatars/lisa.jpg'
    },
    publishDate: '2024-02-08',
    readTime: 15,
    category: 'industry-news',
    tags: ['smartphones', 'theft', 'law-enforcement'],
    featured: false,
    image: '/blog/phone-theft-networks.jpg'
  },
  {
    id: '4',
    title: 'Step-by-Step: Using IMEI Checkers Effectively',
    excerpt: 'A practical guide to understanding and using IMEI verification for mobile device purchases.',
    content: 'Full article content...',
    author: {
      name: 'Jennifer Walsh',
      role: 'Tech Safety Advocate',
      avatar: '/avatars/jennifer.jpg'
    },
    publishDate: '2024-02-05',
    readTime: 6,
    category: 'how-to',
    tags: ['imei', 'smartphones', 'verification'],
    featured: false,
    image: '/blog/imei-guide.jpg'
  },
  {
    id: '5',
    title: 'Case Study: $50K Jewelry Heist Recovery Through Serial Tracking',
    excerpt: 'How proper serial number documentation helped recover stolen jewelry worth $50,000.',
    content: 'Full article content...',
    author: {
      name: 'Robert Chen',
      role: 'Insurance Investigator',
      avatar: '/avatars/robert.jpg'
    },
    publishDate: '2024-02-01',
    readTime: 10,
    category: 'case-study',
    tags: ['jewelry', 'serial-numbers', 'recovery'],
    featured: false,
    image: '/blog/jewelry-recovery.jpg'
  },
  {
    id: '6',
    title: 'Pawn Shop Best Practices: Compliance and Protection',
    excerpt: 'Essential guidelines for pawn shops to stay compliant and avoid stolen merchandise.',
    content: 'Full article content...',
    author: {
      name: 'David Kim',
      role: 'Pawn Industry Consultant',
      avatar: '/avatars/david.jpg'
    },
    publishDate: '2024-01-28',
    readTime: 14,
    category: 'buying-guide',
    tags: ['pawn-shops', 'compliance', 'business'],
    featured: false,
    image: '/blog/pawn-shop-guide.jpg'
  }
];

const BlogSection: React.FC = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 4);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fraud-prevention': return <Shield className="h-4 w-4" />;
      case 'buying-guide': return <CheckCircle className="h-4 w-4" />;
      case 'industry-news': return <TrendingUp className="h-4 w-4" />;
      case 'how-to': return <Lightbulb className="h-4 w-4" />;
      case 'case-study': return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fraud-prevention': return 'bg-red-100 text-red-800';
      case 'buying-guide': return 'bg-green-100 text-green-800';
      case 'industry-news': return 'bg-blue-100 text-blue-800';
      case 'how-to': return 'bg-purple-100 text-purple-800';
      case 'case-study': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCategoryName = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">SafeOrStolen Knowledge Center</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, buying guides, and fraud prevention tips to help you make safer purchases in the secondhand market.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Featured Articles
            </h3>
            <Link to="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-primary/20">
                      {getCategoryIcon(post.category)}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`${getCategoryColor(post.category)} flex items-center gap-1`}>
                      {getCategoryIcon(post.category)}
                      {formatCategoryName(post.category)}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Recent Articles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`${getCategoryColor(post.category)} flex items-center gap-1 text-xs`}>
                      {getCategoryIcon(post.category)}
                      {formatCategoryName(post.category)}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}m
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback className="text-xs">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{post.author.name}</span>
                  </div>

                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Stay Protected with Weekly Insights</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest fraud prevention tips, market alerts, and safety guides delivered to your inbox. 
              Join 10,000+ smart buyers who stay informed.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <Button className="flex items-center gap-2">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam. Unsubscribe anytime. Read our <Link to="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </CardContent>
        </Card>

        {/* Categories Overview */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Explore by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['fraud-prevention', 'buying-guide', 'industry-news', 'how-to', 'case-study'].map((category) => (
              <Link key={category} to={`/blog/category/${category}`}>
                <Badge 
                  variant="outline" 
                  className={`${getCategoryColor(category)} flex items-center gap-2 px-4 py-2 hover:shadow-md transition-shadow cursor-pointer`}
                >
                  {getCategoryIcon(category)}
                  {formatCategoryName(category)}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;