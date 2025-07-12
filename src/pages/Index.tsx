
import { lazy, Suspense } from 'react';
import { SafeComponent } from '@/components/enhanced/SafeComponent';

// Lazy load heavy components with fallbacks
const Hero = lazy(() => import('@/components/Hero').catch(() => ({ 
  default: () => <div className="min-h-screen bg-sos">Hero component unavailable</div> 
})));
const HowItWorks = lazy(() => import('@/components/HowItWorks').catch(() => ({ 
  default: () => <div className="py-20 bg-sos">How It Works section unavailable</div> 
})));
const Features = lazy(() => import('@/components/Features').catch(() => ({ 
  default: () => <div className="py-20 bg-sos">Features section unavailable</div> 
})));
const CTASection = lazy(() => import('@/components/CTASection').catch(() => ({ 
  default: () => <div className="py-20 bg-sos">CTA section unavailable</div> 
})));
const Footer = lazy(() => import('@/components/Footer').catch(() => ({ 
  default: () => <div className="py-10 bg-sos">Footer unavailable</div> 
})));
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ScrollRestoration } from '@/components/ScrollRestoration';
import VerifiedProduct from '@/components/VerifiedProduct';
import { SubscriptionStatus } from '@/components/subscription/SubscriptionStatus';
import { trackPageView } from '@/utils/analytics';
import { SEOHead } from '@/components/seo/SEOHead';
import { getPageMetadata } from '@/utils/seo/metadata';
import { createOrganizationSchema, createWebsiteSchema, createServiceSchema, createLocalBusinessSchema } from '@/utils/seo/structuredData';

const Index = () => {
  const { hash, search } = useLocation();
  const metadata = getPageMetadata('home');

  // Add scroll to top effect
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Track page view when component mounts
  useEffect(() => {
    trackPageView('Home Page');
  }, []);

  // Show verification results when query parameter is present
  const showVerificationResults = search.includes('serialNumber=');

  // Enhanced structured data with multiple schemas
  const structuredData = [
    createOrganizationSchema(),
    createWebsiteSchema(),
    createServiceSchema(),
    createLocalBusinessSchema()
  ];

  const ComponentFallback = ({ name }: { name: string }) => (
    <div className="py-20 bg-sos flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading {name}...</p>
      </div>
    </div>
  );

  return (
    <SafeComponent fallback={<div className="min-h-screen bg-sos">Page unavailable</div>}>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        ogTitle={metadata.ogTitle}
        ogDescription={metadata.ogDescription}
        ogImage={metadata.ogImage}
        structuredData={structuredData}
        robotsDirectives={metadata.robotsDirectives}
        preloadUrls={['/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png']}
      />
      <div className="bg-sos text-white min-h-screen">
        <ScrollRestoration />
        
        <Suspense fallback={<ComponentFallback name="Hero" />}>
          <Hero />
        </Suspense>
        
        {/* Subscription Status Section */}
        <section className="py-12 bg-sos-dark/80 border-y border-sos-orange/20">
          <div className="container mx-auto container-padding">
            <div className="max-w-md mx-auto">
              <SubscriptionStatus />
            </div>
          </div>
        </section>
        
        {showVerificationResults && <VerifiedProduct />}
        
        <Suspense fallback={<ComponentFallback name="How It Works" />}>
          <HowItWorks />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback name="Features" />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback name="Call to Action" />}>
          <CTASection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback name="Footer" />}>
          <Footer />
        </Suspense>
      </div>
    </SafeComponent>
  );
};

export default Index;
