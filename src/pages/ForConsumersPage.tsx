import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ConsumerHeader } from '@/components/consumers/ConsumerHeader';
import { ConsumerFeatures } from '@/components/consumers/ConsumerFeatures';
import { ConsumerPricing } from '@/components/consumers/ConsumerPricing';
import { ConsumerCTA } from '@/components/consumers/ConsumerCTA';

const ForConsumersPage: React.FC = () => {
  return (
    <>
      <PageSEO 
        title="Consumer Protection from Stolen Goods - Safe or Stolen"
        description="Protect yourself from stolen goods when buying second-hand. Verify IMEI, VIN, serial numbers instantly. Check if something is stolen before you buy."
        keywords="consumer protection, stolen goods verification, check if stolen, verify before buying, second-hand safety, how to check if something is stolen, where to check if something is stolen"
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