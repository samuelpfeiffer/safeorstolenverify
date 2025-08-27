
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SOSHeader } from '@/components/layout/SOSHeader';
import { SOSFooter } from '@/components/layout/SOSFooter';
import { DefaultSEO } from '@/components/seo/DefaultSEO';
import { EnsureIndexable } from '@/components/seo/EnsureIndexable';

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const allowNoIndex = path === '/404' || path === '/subscription';

  return (
    <div className="min-h-screen bg-sos text-white flex flex-col">
      <DefaultSEO />
      <EnsureIndexable allowNoIndex={allowNoIndex} />
      <SOSHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SOSFooter />
    </div>
  );
};
