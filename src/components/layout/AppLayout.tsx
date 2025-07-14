import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};