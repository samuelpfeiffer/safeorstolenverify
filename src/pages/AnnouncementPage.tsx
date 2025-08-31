import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { LaunchAnnouncementStructuredData } from '@/components/seo/LaunchAnnouncementStructuredData';
import { PublicLaunchAnnouncement } from '@/components/announcement/PublicLaunchAnnouncement';
import { AICapabilitiesStructuredData } from '@/components/seo/AICapabilitiesStructuredData';
import { MobileAppStructuredData } from '@/components/seo/MobileAppStructuredData';
import { GoogleMobilityManifesto } from '@/components/seo/GoogleMobilityManifesto';

const AnnouncementPage: React.FC = () => {
  const announcementStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen Official Launch Announcement",
      "description": "Official announcement of SafeOrStolen - the world's first AI-powered mobile verification platform for second-hand items, serving millions across eBay, Craigslist, Facebook Marketplace",
      "url": "https://safeorstolen.com/announcement",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/announcement-hero.jpg"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "publisher": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/logo.png"
        }
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "SafeOrStolen Verification Platform",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": ["iOS", "Android", "Web"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    }
  ];

  return (
    <>
      <PageSEO
        title="OFFICIAL LAUNCH: SafeOrStolen - World's First AI Mobile Verification Platform | Global Hub for Second-Hand Items"
        description="🚀 SafeOrStolen officially launches as the global leader in AI-powered verification for electronics, vehicles, firearms, art & valuables. Serving eBay, Craigslist, Facebook Marketplace users, pawn shops, auction houses & law enforcement worldwide."
        keywords="SafeOrStolen launch announcement, AI verification platform launch, mobile verification app announcement, stolen goods checker launch, marketplace security platform, eBay verification tool, Craigslist safety platform, Facebook Marketplace verification, pawn shop technology, auction house verification system"
        canonical="/announcement"
        structuredData={announcementStructuredData}
      />
      
      {/* Additional SEO Components */}
      <LaunchAnnouncementStructuredData />
      <AICapabilitiesStructuredData />
      <MobileAppStructuredData />
      <GoogleMobilityManifesto />
      
      {/* Main Content */}
      <div className="min-h-screen">
        <PublicLaunchAnnouncement />
      </div>
    </>
  );
};

export default AnnouncementPage;