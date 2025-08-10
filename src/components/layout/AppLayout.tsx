import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
// import { PWAInstallBanner } from '@/components/pwa/PWAInstallBanner';
// import { OfflineIndicator } from '@/components/pwa/OfflineIndicator';
import { SecurityStatusIndicator } from '@/components/security/SecurityStatusIndicator';

/**
 * Main Application Layout
 * Provides consistent structure across all pages
 */
export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white flex flex-col">
      {/* PWA features temporarily disabled */}
      {/* <PWAInstallBanner /> */}
      
      {/* Status Indicators */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {/* <OfflineIndicator /> */}
        <SecurityStatusIndicator />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};