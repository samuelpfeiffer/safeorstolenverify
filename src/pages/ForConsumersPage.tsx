import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ConsumerHeader } from '@/components/consumers/ConsumerHeader';
import { ConsumerFeatures } from '@/components/consumers/ConsumerFeatures';
import { ConsumerPricing } from '@/components/consumers/ConsumerPricing';
import { ConsumerCTA } from '@/components/consumers/ConsumerCTA';

const ForConsumersPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="For Consumers - Safe or Stolen"
        description="Protect yourself from stolen goods. Verify second-hand purchases instantly with our consumer verification platform."
        keywords="consumer protection, stolen goods, verify purchases, second-hand verification, How to check if something is stolen, How do I check if something is stolen?, Where to check if something is stolen?, Can I check if something is stolen before I buy it?, I want to check if something is stolen, How do I check if something used is stolen?"
      />
      
      <div className="min-h-screen bg-background">
        <ConsumerHeader />
        <ConsumerFeatures />
        <ConsumerPricing onSubscribeClick={() => {}} isLoading={false} />
        <ConsumerCTA onScrollToPricing={() => {}} />
      </div>
    </>
  );
};

export default ForConsumersPage;