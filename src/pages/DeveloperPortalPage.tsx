import React from 'react';
import { DeveloperPortal } from '@/components/developer/DeveloperPortal';
import { PageSEO } from '@/components/seo/PageSEO';

const DeveloperPortalPage = () => {
  return (
    <>
      <PageSEO
        title="Developer API Portal | SafeOrStolen API Integration"
        description="Access SafeOrStolen's powerful verification API. Check stolen items programmatically with IMEI, VIN, and serial number lookups. Get API keys, view documentation, and monitor usage."
        keywords="stolen item API, IMEI verification API, VIN check API, serial number lookup API, marketplace verification API, developer portal"
        canonical="/developer-portal"
      />
      
      <DeveloperPortal />
    </>
  );
};

export default DeveloperPortalPage;
