import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { detectReactContext } from '@/utils/reactDetection';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface SWInfo {
  hasController: boolean;
  registrations: number;
}

const DebugDiagnosticsPage: React.FC = () => {
  const [reactEnv, setReactEnv] = useState<any>(null);
  const [swInfo, setSwInfo] = useState<SWInfo>({ hasController: false, registrations: 0 });
  const [cachesCount, setCachesCount] = useState<number>(0);
  const { isAuthenticated, user, loading } = useUnifiedAuth();

  useEffect(() => {
    setReactEnv(detectReactContext());

    (async () => {
      const hasController = typeof navigator !== 'undefined' && !!navigator.serviceWorker?.controller;
      let registrations = 0;
      try {
        const regs = await navigator.serviceWorker?.getRegistrations();
        registrations = regs?.length || 0;
      } catch {}
      setSwInfo({ hasController, registrations });

      try {
        const names = await caches.keys();
        setCachesCount(names.length);
      } catch {}
    })();
  }, []);

  const handleHardReset = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r => r.unregister()));
      }
      if ('caches' in window) {
        const names = await caches.keys();
        await Promise.all(names.map(n => caches.delete(n)));
      }
    } finally {
      try { localStorage.setItem('sos_env_cleaned_v1', '1'); } catch {}
      window.location.reload();
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Diagnostics - React environment</title>
        <meta name="description" content="Diagnostics: React runtime, service worker, caches, and auth session status." />
        <link rel="canonical" href={`${window.location.origin}/_debug/react`} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Diagnostics (React / SW / Auth)</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>React Environment</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(reactEnv, null, 2)}</pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Worker & Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1">
              <li>Has SW controller: {String(swInfo.hasController)}</li>
              <li>Registrations: {swInfo.registrations}</li>
              <li>Cache entries: {cachesCount}</li>
            </ul>
            <Button onClick={handleHardReset} className="mt-4">Hard Reset (clear SW & caches)</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Auth Session</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1">
              <li>Loading: {String(loading)}</li>
              <li>Authenticated: {String(isAuthenticated)}</li>
              <li>User email: {user?.email || 'none'}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default DebugDiagnosticsPage;
