import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleDiscoverOptimizerProps {
  title: string;
  description: string;
  image?: string;
  publishDate?: Date;
  modifiedDate?: Date;
  category?: string;
  enableFollow?: boolean;
  feedUrl?: string;
}

/**
 * Google Discover Optimization Component
 * Optimizes content for Google Discover feeds with proper meta tags,
 * RSS feed links, and Discover-specific signals
 */
export const GoogleDiscoverOptimizer: React.FC<GoogleDiscoverOptimizerProps> = ({
  title,
  description,
  image,
  publishDate,
  modifiedDate,
  category = 'Consumer Protection',
  enableFollow = true,
  feedUrl = '/feed.xml'
}) => {
  const baseUrl = 'https://safeorstolen.com';
  const fullImageUrl = image?.startsWith('http') ? image : image ? `${baseUrl}${image}` : `${baseUrl}/images/discover-default.jpg`;
  const fullFeedUrl = feedUrl.startsWith('http') ? feedUrl : `${baseUrl}${feedUrl}`;

  // Format dates for meta tags
  const formatDate = (date: Date) => date.toISOString();
  const publishDateISO = publishDate ? formatDate(publishDate) : formatDate(new Date());
  const modifiedDateISO = modifiedDate ? formatDate(modifiedDate) : publishDateISO;

  return (
    <Helmet>
      {/* Google Discover Optimization */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* RSS Feed for Follow Feature */}
      {enableFollow && (
        <link rel="alternate" type="application/rss+xml" title={`${title} - RSS Feed`} href={fullFeedUrl} />
      )}
      
      {/* Enhanced Image Meta for Discover */}
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - SafeOrStolen`} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Article/Content Meta for Discover */}
      <meta property="article:published_time" content={publishDateISO} />
      <meta property="article:modified_time" content={modifiedDateISO} />
      <meta property="article:section" content={category} />
      <meta property="article:tag" content="consumer protection, stolen goods, verification, safety" />
      <meta property="article:author" content="SafeOrStolen Security Team" />
      
      {/* Discover-Friendly Content Signals */}
      <meta name="news_keywords" content="consumer protection, stolen goods verification, buying safety, fraud prevention" />
      <meta name="content-type" content="article" />
      <meta name="content-category" content={category.toLowerCase().replace(/\s+/g, '-')} />
      <meta name="content-freshness" content="evergreen" />
      <meta name="content-value" content="high" />
      
      {/* Interest-Based Signals for Discover */}
      <meta name="interest-topics" content="consumer-protection,fraud-prevention,online-safety,technology-verification" />
      <meta name="content-appeal" content="informative,helpful,actionable" />
      <meta name="user-intent" content="educational,transactional,safety" />
      
      {/* Enhanced Publisher Information */}
      <meta name="publisher" content="SafeOrStolen" />
      <meta name="source-organization" content="SafeOrStolen" />
      <meta name="expertise-level" content="expert" />
      <meta name="content-authority" content="high" />
      
      {/* Mobile and Performance Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Discover Engagement Signals */}
      <meta name="expected-engagement" content="high" />
      <meta name="content-readability" content="accessible" />
      <meta name="content-length" content="comprehensive" />
      
      {/* Geographic and Language Signals */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="content-language" content="en-US" />
      <meta property="og:locale" content="en_US" />
      
      {/* Structured Data Hints for Discover */}
      <meta name="schema-type" content="Article,HowTo,Service" />
      <meta name="content-format" content="guide,tutorial,service-page" />
      
      {/* Feed Optimization Meta */}
      <meta name="feed-priority" content="high" />
      <meta name="update-frequency" content="weekly" />
      <meta name="content-evergreen" content="true" />
      
      {/* Performance Hints for Discover */}
      <link rel="preload" href={fullImageUrl} as="image" />
      <link rel="prefetch" href={fullFeedUrl} />
      
      {/* Enhanced Social Signals */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="SafeOrStolen" />
      <meta name="twitter:site" content="@safeorstolen" />
      <meta name="twitter:creator" content="@safeorstolen" />
      
      {/* Discover Algorithm Hints */}
      <meta name="discover-eligible" content="true" />
      <meta name="interest-match" content="consumer-safety,technology,verification" />
      <meta name="content-quality" content="high" />
      <meta name="user-value" content="protective,educational,actionable" />
    </Helmet>
  );
};