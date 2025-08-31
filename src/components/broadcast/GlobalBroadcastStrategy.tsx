import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Zap, TrendingUp, Users, Award, Target } from 'lucide-react';

export const GlobalBroadcastStrategy = () => {
  useEffect(() => {
    // Global broadcast structured data for international press coverage
    const broadcastSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "SafeOrStolen Launches Global AI-Powered Verification Platform - Fighting $13B Stolen Goods Crisis",
      "description": "Revolutionary mobile-first platform launches worldwide, offering real-time verification for electronics, vehicles, firearms, art, and valuables across all major marketplaces.",
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Safe or Stolen Corp.",
        "url": "https://safeorstolen.com"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Safe or Stolen Corp.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
        }
      },
      "mainEntityOfPage": "https://safeorstolen.com/global-launch",
      "image": [
        "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      ],
      "articleSection": "Technology",
      "keywords": "stolen goods verification, AI verification, mobile verification app, marketplace safety, real-time verification, global verification platform",
      "about": [
        {
          "@type": "Thing",
          "name": "Stolen Goods Prevention",
          "description": "Global initiative to combat the $13 billion stolen goods crisis"
        },
        {
          "@type": "Thing", 
          "name": "AI Verification Technology",
          "description": "Advanced artificial intelligence for real-time item verification"
        }
      ],
      "mentions": [
        {
          "@type": "Organization",
          "name": "eBay",
          "sameAs": "https://www.ebay.com"
        },
        {
          "@type": "Organization",
          "name": "Craigslist", 
          "sameAs": "https://craigslist.org"
        },
        {
          "@type": "Organization",
          "name": "Facebook Marketplace",
          "sameAs": "https://www.facebook.com/marketplace"
        }
      ]
    };

    // Inject global broadcast schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(broadcastSchema);
    document.head.appendChild(script);

    // International hreflang meta tags for global reach
    const languages = [
      'en-US', 'en-GB', 'en-AU', 'en-CA', 'es-ES', 'es-MX', 'fr-FR', 'de-DE', 
      'it-IT', 'pt-BR', 'ja-JP', 'ko-KR', 'zh-CN', 'zh-TW', 'ru-RU', 'ar-SA'
    ];

    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `https://safeorstolen.com/?lang=${lang}`;
      document.head.appendChild(link);
    });

    // Global press release distribution meta tags
    const metaTags = [
      { name: 'news_keywords', content: 'SafeOrStolen, stolen goods verification, AI verification platform, marketplace safety, global launch' },
      { name: 'syndication-source', content: 'https://safeorstolen.com/press-release' },
      { name: 'original-source', content: 'https://safeorstolen.com' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    return () => {
      // Cleanup function
      const elements = document.querySelectorAll('script[type="application/ld+json"], link[rel="alternate"], meta[name^="news"], meta[name="syndication-source"], meta[name="original-source"], meta[name="coverage"], meta[name="distribution"]');
      elements.forEach(el => el.remove());
    };
  }, []);

  const broadcastChannels = [
    {
      icon: Globe,
      title: "Global Press Distribution",
      description: "PR Newswire, Business Wire, Reuters, AP News",
      status: "ACTIVE"
    },
    {
      icon: Target,
      title: "SEO Global Targeting", 
      description: "16 languages, international hreflang, regional optimization",
      status: "DEPLOYED"
    },
    {
      icon: TrendingUp,
      title: "Social Media Amplification",
      description: "LinkedIn, Twitter, Facebook, Instagram global campaigns",
      status: "LIVE"
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Auction houses, pawn shops, law enforcement agencies",
      status: "EXPANDING"
    },
    {
      icon: Award,
      title: "Technology Recognition",
      description: "Tech Crunch, Wired, Forbes, TechRadar submissions",
      status: "SUBMITTED"
    },
    {
      icon: Zap,
      title: "API Integration Network",
      description: "eBay, Etsy, Mercari, Vinted partnership outreach",
      status: "NEGOTIATING"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-border/50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          🚀 Global Broadcast Strategy - LIVE
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Strategic worldwide distribution across 16 countries, 6 continents, targeting 500M+ marketplace users
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {broadcastChannels.map((channel, index) => (
          <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <channel.icon className="h-8 w-8 text-primary" />
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                channel.status === 'ACTIVE' || channel.status === 'DEPLOYED' || channel.status === 'LIVE' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {channel.status}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
            <p className="text-sm text-muted-foreground">{channel.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-background/60 rounded-lg p-6 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Real-Time Global Impact Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">16</div>
            <div className="text-sm text-muted-foreground">Countries Targeted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">500M+</div>
            <div className="text-sm text-muted-foreground">Marketplace Users Reached</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Press Channels Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Global Coverage</div>
          </div>
        </div>
      </div>
    </div>
  );
};