import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { ConsumerHeader } from '@/components/consumers/ConsumerHeader';
import { ConsumerFeatures } from '@/components/consumers/ConsumerFeatures';
import { ConsumerPricing } from '@/components/consumers/ConsumerPricing';
import { ConsumerCTA } from '@/components/consumers/ConsumerCTA';
import { SmartAdPlacement } from '@/components/advertising/ContextualAdPlacement';

const ForConsumersPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubscribeClick = (tier: 'basic' | 'premium') => {
    navigate('/subscriptions');
  };

  const handleScrollToSubscriptions = () => {
    const element = document.getElementById('consumer-pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <SmartAdPlacement placement="inline" />
        <div id="consumer-pricing">
          <ConsumerPricing onSubscribeClick={handleSubscribeClick} isLoading={false} />
        </div>
        <ConsumerCTA onScrollToSubscriptions={handleScrollToSubscriptions} />
      </div>
    </>
  );
};

export default ForConsumersPage;