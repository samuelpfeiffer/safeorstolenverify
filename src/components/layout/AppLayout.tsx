
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SOSHeader } from '@/components/layout/SOSHeader';
import { SOSFooter } from '@/components/layout/SOSFooter';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white flex flex-col">
      <SOSHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SOSFooter />
    </div>
  );
};
