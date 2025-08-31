import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GlobalPressRelease } from '@/components/broadcast/GlobalPressRelease';
import { GlobalSEOOptimization } from '@/components/broadcast/GlobalSEOOptimization';

const PressReleasePage = () => {
  return (
    <>
      <Helmet>
        <title>SafeOrStolen Global Launch - Press Release | AI-Powered Verification Platform</title>
        <meta name="description" content="SafeOrStolen launches worldwide AI-powered verification platform fighting $13B stolen goods crisis. Real-time verification for electronics, vehicles, firearms, art across all marketplaces." />
        <meta name="keywords" content="SafeOrStolen press release, AI verification platform launch, stolen goods prevention, marketplace safety, global verification service" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SafeOrStolen Global Launch - Revolutionary AI Verification Platform" />
        <meta property="og:description" content="World's first mobile-first AI verification platform launches globally to combat $13 billion stolen goods crisis across eBay, Craigslist, Facebook Marketplace." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://safeorstolen.com/press-release" />
        <meta property="og:image" content="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SafeOrStolen: Global AI Verification Platform Launch" />
        <meta name="twitter:description" content="Combat $13B stolen goods crisis with AI-powered verification across all major marketplaces worldwide." />
        <meta name="twitter:image" content="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://safeorstolen.com/press-release" />
      </Helmet>
      
      <GlobalSEOOptimization />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <GlobalPressRelease />
        </div>
      </div>
    </>
  );
};

export default PressReleasePage;