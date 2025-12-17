import React from 'react';
import { Loader2 } from 'lucide-react';
import { Logo } from '@/components/common/Logo';

/**
 * Enterprise Application Loading Screen
 * Displays during app initialization and route transitions
 */
export const AppLoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* SEO-Friendly Content (Hidden from view but visible to crawlers) */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>Safe or Stolen - Verify Serial Numbers, IMEI, and VIN Numbers</h1>
        <h2>Instant Verification of Used Items</h2>
        <p>Check if phones, electronics, and vehicles are stolen before you buy. Protect yourself from fraud with our real-time verification service.</p>
        <h3>How It Works</h3>
        <ul>
          <li>Enter serial number, IMEI, or VIN</li>
          <li>Get instant verification results</li>
          <li>Buy and sell with confidence</li>
        </ul>
        <h3>What We Check</h3>
        <ul>
          <li>Smartphones and mobile devices</li>
          <li>Electronics and computers</li>
          <li>Vehicles and motorcycles</li>
          <li>Tools and equipment</li>
        </ul>
        <nav>
          <a href="/">Home</a>
          <a href="/verify">Verify Items</a>
          <a href="/pricing">Pricing</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/app">Mobile App</a>
        </nav>
      </div>
      
      {/* Visible Loading Screen */}
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="relative">
          <Logo size="xl" linkTo={null} />
          <div className="absolute -inset-4 bg-sos-orange/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        {/* Loading Spinner */}
        <div className="flex items-center justify-center space-x-3">
          <Loader2 className="h-8 w-8 text-sos-orange animate-spin" />
          <span className="text-xl font-medium text-white">Loading Safe or Stolen...</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-sos-orange to-sos-lime h-full animate-[shimmer_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Initializing real-time verification engine...
        </p>
      </div>
    </div>
  );
};