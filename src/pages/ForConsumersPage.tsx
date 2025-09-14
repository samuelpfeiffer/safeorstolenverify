import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { ConsumerHeader } from '@/components/consumers/ConsumerHeader';
import { ConsumerFeatures } from '@/components/consumers/ConsumerFeatures';
import { ConsumerPricing } from '@/components/consumers/ConsumerPricing';
import { ConsumerCTA } from '@/components/consumers/ConsumerCTA';

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
      <MasterSEO 
        title="Consumer Protection from Stolen Goods - SafeOrStolen Verification Service"
        description="Protect yourself from stolen goods when buying second-hand. Verify IMEI, VIN, serial numbers instantly. Check if something is stolen before you buy with our consumer protection service."
        keywords="consumer protection, stolen goods verification, check if stolen, verify before buying, second-hand safety, how to check if something is stolen, where to check if something is stolen, IMEI checker consumer"
        customCanonical="/for-consumers"
      />
      
      <div className="min-h-screen bg-background">
        <ConsumerHeader />
        <ConsumerFeatures />
        <div id="consumer-pricing">
          <ConsumerPricing onSubscribeClick={handleSubscribeClick} isLoading={false} />
        </div>
        <ConsumerCTA onScrollToSubscriptions={handleScrollToSubscriptions} />
      </div>
    </>
  );
};

export default ForConsumersPage;