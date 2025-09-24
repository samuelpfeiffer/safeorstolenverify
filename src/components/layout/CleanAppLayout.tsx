import React from 'react';
import { Outlet } from 'react-router-dom';
import { SimplifiedNavigation } from '@/components/navigation/SimplifiedNavigation';
import { SOSFooter } from '@/components/layout/SOSFooter';

export const CleanAppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SimplifiedNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <SOSFooter />
    </div>
  );
};