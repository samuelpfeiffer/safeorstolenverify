import React from 'react';
import { ViralShareWidget } from './ViralShareWidget';
import { SocialProofPopup } from './SocialProofPopup';
import { UrgencyBanner } from './UrgencyBanner';
import { FloatingCTA } from './FloatingCTA';

/**
 * TrafficBooster - Aggregates all traffic generation components
 * Includes viral sharing, social proof, urgency messaging, and CTAs
 */
export const TrafficBooster = () => {
  return (
    <>
      {/* Sticky urgency banner at top */}
      <UrgencyBanner />
      
      {/* Left-side social share widget */}
      <ViralShareWidget />
      
      {/* Social proof popups showing recent activity */}
      <SocialProofPopup />
      
      {/* Floating app download CTA */}
      <FloatingCTA />
    </>
  );
};
