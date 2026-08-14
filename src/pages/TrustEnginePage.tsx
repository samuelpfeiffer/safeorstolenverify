import { Suspense, lazy } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

const UniversalTrustEngine = lazy(() => import('@/components/trust-engine/UniversalTrustEngine'));

export default function TrustEnginePage() {
  return (
    <>
      <PageSEO
        title="Universal Trust Engine - Verify IMEI, VIN, Serial | SafeOrStolen"
        description="Verify any item instantly. Auto-detect IMEI, VIN, serial numbers, and license plates against 100+ databases. Batch upload for pawn shops and auction houses."
        keywords="trust engine, IMEI check, VIN check, serial number verification, batch verification, pawn shop compliance, auction house verification"
        canonical="https://safeorstolen.com/trust-engine"
      />
      <Suspense fallback={<AppLoadingScreen />}>
        <UniversalTrustEngine />
      </Suspense>
    </>
  );
}
