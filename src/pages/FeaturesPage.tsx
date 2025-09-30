import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { FounderStory } from '@/components/story/FounderStory';
import { SuccessStories } from '@/components/story/SuccessStories';
import { MarketplacePartners } from '@/components/marketplace/MarketplacePartners';
import { ItemRegistration } from '@/components/registration/ItemRegistration';

const FeaturesPage = () => {
  return (
    <>
      <PageSEO
        title="Features - SafeOrStolen Verification Platform"
        description="Explore SafeOrStolen's comprehensive features including item registration, marketplace partnerships, and real-time verification services."
        keywords="item verification, marketplace integration, stolen goods checker, item registration"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Comprehensive Protection Features
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From verification to registration, we offer everything you need to buy and sell with confidence.
              </p>
            </div>
          </div>
        </section>

        <ItemRegistration />
        <MarketplacePartners />
        <SuccessStories />
        <FounderStory />
      </div>
    </>
  );
};

export default FeaturesPage;
