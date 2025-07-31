
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import Footer from '@/components/Footer';
import { PWAInstallBanner } from '@/components/pwa/PWAInstallBanner';
import { OfflineIndicator } from '@/components/pwa/OfflineIndicator';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white">
      <OfflineIndicator />
      <PWAInstallBanner />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
