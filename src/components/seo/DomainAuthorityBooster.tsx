import React from 'react';
import { Helmet } from 'react-helmet-async';

interface DomainAuthorityBoosterProps {
  pageType?: 'homepage' | 'service' | 'blog' | 'guide';
}

export const DomainAuthorityBooster: React.FC<DomainAuthorityBoosterProps> = ({ 
  pageType = 'homepage' 
}) => {
  // High-authority external links for domain credibility
  const authorityLinks = [
    'https://www.ncic.fbi.gov',
    'https://www.ic3.gov',
    'https://www.consumer.ftc.gov',
    'https://www.bbb.org',
    'https://schema.org',
    'https://www.w3.org'
  ];

  // Content depth signals for search engines
  const getContentDepthSignals = () => {
    switch (pageType) {
      case 'homepage':
        return {
          articleSection: 'Stolen Item Verification',
          wordCount: '2500+',
          readingTime: 'PT10M',
          expertise: 'Law Enforcement Partnerships'
        };
      case 'service':
        return {
          articleSection: 'Verification Services',
          wordCount: '1800+',
          readingTime: 'PT7M',
          expertise: 'Technical Implementation'
        };
      case 'blog':
        return {
          articleSection: 'Security Education',
          wordCount: '3000+',
          readingTime: 'PT12M',
          expertise: 'Industry Analysis'
        };
      case 'guide':
        return {
          articleSection: 'How-To Guides',
          wordCount: '4000+',
          readingTime: 'PT15M',
          expertise: 'Step-by-Step Instructions'
        };
      default:
        return {
          articleSection: 'General Information',
          wordCount: '1500+',
          readingTime: 'PT6M',
          expertise: 'General Knowledge'
        };
    }
  };

  const contentSignals = getContentDepthSignals();

  // NOTE: Organization/WebSite schemas removed to prevent duplication with MasterSEO
  // E-A-T signals are now provided via meta tags only

  return (
    <Helmet>
      {/* Enhanced E-A-T signals */}
      <meta name="expertise" content={contentSignals.expertise} />
      <meta name="content-depth" content={contentSignals.wordCount} />
      <meta name="reading-time" content={contentSignals.readingTime} />
      <meta name="article-section" content={contentSignals.articleSection} />
      
      {/* Authority and trust signals */}
      <meta name="security-certified" content="Secure encryption, privacy focused" />
      <meta name="data-sources" content="Multiple law enforcement and manufacturer databases" />
      <meta name="verification-accuracy" content="High accuracy verification system" />
      <meta name="industry-partnerships" content="Database providers, Security services" />
      
      {/* Content freshness and update frequency */}
      <meta name="content-update-frequency" content="daily" />
      <meta name="database-refresh-rate" content="real-time" />
      
      {/* Professional credentials and certifications */}
      <meta name="business-verification" content="verified" />
      <meta name="professional-service" content="true" />
      
      {/* Additional trust signals */}
      <meta name="company-size" content="growing" />
      <meta name="service-availability" content="24/7" />
      <meta name="customer-support" content="professional" />
      <meta name="data-protection" content="enterprise-grade" />
      
      {/* Geographic and market authority */}
      <meta name="service-area" content="United States + International" />
      <meta name="market-leader" content="stolen-item-verification" />
      <meta name="industry-expertise" content="fraud-prevention,security-services" />
      
      {/* DNS prefetch for authority domains */}
      {authorityLinks.map((link) => (
        <link key={link} rel="dns-prefetch" href={link} />
      ))}
    </Helmet>
  );
};