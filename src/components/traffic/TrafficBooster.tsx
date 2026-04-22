import React from 'react';
import { useLocation } from 'react-router-dom';
import { ViralShareWidget } from './ViralShareWidget';
import { SocialProofPopup } from './SocialProofPopup';
import { UrgencyBanner } from './UrgencyBanner';

/**
 * TrafficBooster - Clean, honest traffic generation
 * No fake popups or annoying CTAs - just helpful sharing
 *
 * Hidden on the AI verification chat experience — the chat IS the
 * primary conversion surface there, and the floating left-side share
 * rail collides with the conversation sidebar.
 */
const HIDDEN_PATH_PREFIXES = ['/verify', '/ai-verify', '/ai-chat', '/auth', '/checkout', '/admin'];

export const TrafficBooster = () => {
  const { pathname } = useLocation();
  const hidden = HIDDEN_PATH_PREFIXES.some((p) => pathname.startsWith(p));
  if (hidden) return null;

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
