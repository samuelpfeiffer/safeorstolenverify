import React, { useEffect } from 'react';

export const GlobalPressRelease = () => {
  useEffect(() => {
    // Global press release structured data
    const pressReleaseSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "SafeOrStolen Revolutionizes Global Marketplace Safety with World's First AI-Powered Mobile Verification Platform",
      "subHeadline": "Combat the $13 Billion Stolen Goods Crisis: Instant Verification for Electronics, Vehicles, Firearms, Art & Valuables Across eBay, Craigslist, Facebook Marketplace",
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Safe or Stolen Corp.",
        "url": "https://safeorstolen.com",
        "logo": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Safe or Stolen Corp.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
          "width": 800,
          "height": 600
        }
      },
      "image": [
        "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://safeorstolen.com/press-release"
      },
      "articleBody": "SafeOrStolen Corp. today announced the global launch of the world's first AI-powered, mobile-first verification platform designed to combat the $13 billion stolen goods crisis. The revolutionary platform provides real-time verification for electronics, vehicles, firearms, art, jewelry, tools, machinery, and valuable items across all major marketplaces including eBay, Craigslist, and Facebook Marketplace. Serving consumers, auction houses, pawn shops, resellers, law enforcement agencies, and businesses worldwide, SafeOrStolen represents a paradigm shift in marketplace safety and consumer protection.",
      "wordCount": 2500,
      "keywords": "SafeOrStolen, stolen goods verification, AI verification platform, marketplace safety, mobile verification app, global launch, consumer protection, real-time verification",
      "about": [
        {
          "@type": "Organization",
          "name": "Safe or Stolen Corp.",
          "description": "Global leader in AI-powered verification technology for second-hand marketplaces"
        }
      ],
      "mentions": [
        {
          "@type": "WebSite",
          "name": "eBay",
          "url": "https://www.ebay.com"
        },
        {
          "@type": "WebSite", 
          "name": "Craigslist",
          "url": "https://craigslist.org"
        },
        {
          "@type": "WebSite",
          "name": "Facebook Marketplace", 
          "url": "https://www.facebook.com/marketplace"
        }
      ],
      "isPartOf": {
        "@type": "WebSite",
        "name": "SafeOrStolen Global Hub",
        "url": "https://safeorstolen.com"
      }
    };

    // Inject press release schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'press-release-schema';
    script.textContent = JSON.stringify(pressReleaseSchema);
    document.head.appendChild(script);

    // Add press release specific meta tags
    const pressMetaTags = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'SafeOrStolen Launches Global AI-Powered Verification Platform' },
      { property: 'og:description', content: 'Revolutionary mobile-first platform fights $13B stolen goods crisis with real-time verification across all major marketplaces.' },
      { property: 'og:image', content: 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png' },
      { property: 'article:published_time', content: new Date().toISOString() },
      { property: 'article:section', content: 'Technology' },
      { property: 'article:tag', content: 'AI verification, marketplace safety, stolen goods prevention' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SafeOrStolen: Global AI Verification Platform Launch' },
      { name: 'twitter:description', content: 'Combat $13B stolen goods crisis. Real-time verification for electronics, vehicles, art & more across eBay, Craigslist, Facebook Marketplace.' }
    ];

    pressMetaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    return () => {
      const schema = document.getElementById('press-release-schema');
      if (schema) schema.remove();
      
      const metas = document.querySelectorAll('meta[property^="og:"], meta[property^="article:"], meta[name^="twitter:"]');
      metas.forEach(meta => meta.remove());
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          GLOBAL PRESS RELEASE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          SafeOrStolen Revolutionizes Global Marketplace Safety
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          World's First AI-Powered Mobile Verification Platform Launches to Combat $13 Billion Stolen Goods Crisis
        </p>
        <div className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} • Global Distribution
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="text-lg leading-relaxed">
          <strong>SafeOrStolen Corp.</strong> today announced the global launch of the world's first AI-powered, 
          mobile-first verification platform designed to combat the $13 billion stolen goods crisis. The revolutionary 
          platform provides real-time verification for electronics, vehicles, firearms, art, jewelry, tools, machinery, 
          and valuable items across all major marketplaces including eBay, Craigslist, and Facebook Marketplace.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Market Impact & Global Reach</h2>
          <p>
            Serving consumers, auction houses, pawn shops, resellers, law enforcement agencies, and businesses worldwide, 
            SafeOrStolen represents a paradigm shift in marketplace safety and consumer protection. The platform leverages 
            advanced artificial intelligence and real-time database integration to provide instant verification results, 
            protecting millions of users from unknowingly purchasing stolen goods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Revolutionary Technology Features</h2>
          <ul className="space-y-2">
            <li>🔍 <strong>AI-Powered Verification:</strong> Advanced algorithms cross-reference multiple databases for accurate results</li>
            <li>📱 <strong>Mobile-First Design:</strong> Native mobile app with instant scanning capabilities</li>
            <li>⚡ <strong>Real-Time Processing:</strong> Instant verification results in under 3 seconds</li>
            <li>🌐 <strong>Global Database Access:</strong> Connected to law enforcement and insurance databases worldwide</li>
            <li>🔌 <strong>API Integration:</strong> Seamless integration with existing marketplace platforms</li>
            <li>🛡️ <strong>Enterprise Solutions:</strong> Custom verification systems for businesses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Verified Item Categories</h3>
              <ul className="text-sm space-y-1">
                <li>• Electronics & Technology</li>
                <li>• Vehicles & Automotive</li>
                <li>• Firearms & Security Equipment</li>
                <li>• Art & Collectibles</li>
                <li>• Jewelry & Luxury Items</li>
                <li>• Tools & Machinery</li>
                <li>• Musical Instruments</li>
                <li>• Sporting Goods</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Target Industries</h3>
              <ul className="text-sm space-y-1">
                <li>• Auction Houses</li>
                <li>• Pawn Shops</li>
                <li>• Resale Stores</li>
                <li>• Law Enforcement</li>
                <li>• Insurance Companies</li>
                <li>• Online Marketplaces</li>
                <li>• Consumer Protection Agencies</li>
                <li>• Corporate Security</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Global Distribution Strategy</h2>
          <p>
            SafeOrStolen's global launch includes strategic partnerships with major marketplace platforms, 
            law enforcement agencies, and industry leaders across 16 countries. The platform supports 
            multiple languages and regional compliance requirements, ensuring seamless integration 
            across diverse global markets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">About Safe or Stolen Corp.</h2>
          <p>
            Founded in 2024, Safe or Stolen Corp. is a pioneering technology company dedicated to combating 
            the global stolen goods crisis through innovative AI-powered verification solutions. The company's 
            mission is to create the world's most comprehensive and accessible verification platform, 
            protecting consumers and businesses from fraud while supporting law enforcement efforts worldwide.
          </p>
        </section>

        <section className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
          <div className="space-y-2">
            <p><strong>Company:</strong> Safe or Stolen Corp.</p>
            <p><strong>Website:</strong> <a href="https://safeorstolen.com" className="text-primary hover:underline">https://safeorstolen.com</a></p>
            <p><strong>Email:</strong> press@safeorstolen.com</p>
            <p><strong>Phone:</strong> +1-800-SOS-CHECK</p>
            <p><strong>Social:</strong> @SafeOrStolen (Twitter, LinkedIn, Facebook)</p>
          </div>
        </section>
      </div>
    </div>
  );
};