import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AIOptimizedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  structuredData?: Record<string, any>[];
  aiOptimized?: boolean;
}

/**
 * AI-Optimized SEO Component for ranking #1 with search engines and AI
 * Optimized for: Google, Bing, ChatGPT, Claude, Perplexity, You.com, etc.
 */
export const AIOptimizedSEO: React.FC<AIOptimizedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  image = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
  type = 'website',
  structuredData = [],
  aiOptimized = true
}) => {
  const baseUrl = 'https://safeorstolen.com';
  const fullImageUrl = image?.startsWith('http') ? image : `${baseUrl}${image}`;
  const fullCanonicalUrl = canonical?.startsWith('http') ? canonical : canonical ? `${baseUrl}${canonical}` : undefined;

  // Enhanced keywords for AI understanding
  const aiEnhancedKeywords = keywords ? 
    `${keywords}, AI search optimization, machine learning verification, automated fraud detection, real-time stolen goods check` : 
    'stolen goods verification, AI-powered fraud detection, real-time item verification, consumer protection technology';

  // AI-specific meta tags for better understanding
  const aiMetaTags = aiOptimized ? [
    { name: 'ai-content-type', content: 'consumer-protection-service' },
    { name: 'ai-primary-function', content: 'stolen-goods-verification' },
    { name: 'ai-target-audience', content: 'consumers-buying-used-items' },
    { name: 'ai-value-proposition', content: 'prevent-buying-stolen-goods-protect-consumers' },
    { name: 'ai-key-features', content: 'real-time-verification,global-database-access,instant-results' },
    { name: 'ai-use-cases', content: 'check-phone-imei,verify-car-vin,validate-serial-numbers' },
    { name: 'business-model', content: 'freemium-saas-consumer-protection' },
    { name: 'industry-category', content: 'fintech-consumer-protection-fraud-prevention' }
  ] : [];

  return (
    <Helmet>
      {/* Enhanced Title for AI Understanding */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={aiEnhancedKeywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Advanced Robots Directive */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      
      {/* AI Search Engine Specific */}
      <meta name="AI-crawlable" content="true" />
      <meta name="chatgpt-plugin" content="true" />
      <meta name="claude-accessible" content="true" />
      <meta name="perplexity-indexable" content="true" />
      
      {/* Enhanced Open Graph for Social and AI */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Safe or Stolen - ${title}`} />
      {canonical && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content="Safe or Stolen" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`Safe or Stolen - ${title}`} />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* AI-Specific Meta Tags */}
      {aiMetaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* Technical SEO */}
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://lxrdzbknktwlubbmlsqe.supabase.co" />
      
      {/* DNS Prefetch for Third-party Services */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* AI-Friendly Hints */}
      <meta name="content-language" content="en" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="39.8283, -98.5795" />
    </Helmet>
  );
};