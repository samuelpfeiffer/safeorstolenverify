import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';

const IMEICheckerPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Immediate redirect to the correct page with proper canonical
    navigate('/check-phone', { replace: true });
  }, [navigate]);

  // This component should return 301 status and proper canonical
  return (
    <>
      <StatusCodeHandler statusCode={301} canonical="https://safeorstolen.com/imei-check" noIndex={true} />
      <PageSEO
        title="IMEI Checker - Redirecting to Free IMEI Check | SafeOrStolen"
        description="Redirecting to our free IMEI checker. Verify if your phone is stolen with instant database lookup."
        keywords="IMEI checker, free IMEI check, phone stolen check"
        canonical="/imei-check"
        noIndex={true}
      />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Redirecting to IMEI Checker...</h1>
          <p className="text-muted-foreground">You will be redirected to our free IMEI verification service.</p>
        </div>
      </div>
    </>
  );
};

export default IMEICheckerPage;