import React from 'react';
import { ViralShareWidget } from './ViralShareWidget';
import { SocialProofPopup } from './SocialProofPopup';
import { UrgencyBanner } from './UrgencyBanner';

/**
 * TrafficBooster - Clean, honest traffic generation
 * No fake popups or annoying CTAs - just helpful sharing
 */
export const TrafficBooster = () => {
  return (
    <>
      {/* Sticky urgency banner at top - honest messaging */}
      <UrgencyBanner />
      
      {/* Left-side social share widget */}
      <ViralShareWidget />
      
      {/* Social proof popup - shows REAL recent activity only */}
      <SocialProofPopup />
    </>
  );
};
