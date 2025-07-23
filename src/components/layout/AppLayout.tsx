
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import Footer from '@/components/Footer';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
