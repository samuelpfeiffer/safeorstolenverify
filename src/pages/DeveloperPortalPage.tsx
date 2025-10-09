import React from 'react';
import { DeveloperPortal } from '@/components/developer/DeveloperPortal';
import { UnifiedSEOOptimizer } from '@/components/seo/UnifiedSEOOptimizer';

const DeveloperPortalPage = () => {
  return (
    <>
      <UnifiedSEOOptimizer
        title="Developer API Portal | SafeOrStolen API Integration"
        description="Access SafeOrStolen's powerful verification API. Check stolen items programmatically with IMEI, VIN, and serial number lookups. Get API keys, view documentation, and monitor usage."
        keywords="stolen item API, IMEI verification API, VIN check API, serial number lookup API, marketplace verification API, developer portal"
        canonical="/developer-portal"
        type="website"
      />
      
      <DeveloperPortal />
    </>
  );
};

export default DeveloperPortalPage;
