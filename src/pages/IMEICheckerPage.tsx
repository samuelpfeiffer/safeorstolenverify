import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

const IMEICheckerPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Immediate redirect to the correct page with proper canonical
    navigate('/check-phone', { replace: true });
  }, [navigate]);

  // This component should never render, but include SEO for the redirect
  return (
    <>
      <PageSEO
        title="IMEI Checker - Check if Phone is Stolen | SafeOrStolen"
        description="Check if a phone is stolen using its IMEI number. Instant verification against stolen device databases. Redirecting to phone checker."
        keywords="IMEI checker, check stolen phone, phone verification, stolen device check"
        canonical="/check-phone"
        noIndex={true}
      />
      <div>Redirecting to phone checker...</div>
    </>
  );
};

export default IMEICheckerPage;