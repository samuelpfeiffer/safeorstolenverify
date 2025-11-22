import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /vin → /verify
 * Includes substantial content for search engines to prevent Soft 404
 */
const VINPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Free VIN Check - Verify Vehicle History & Theft Status | SafeOrStolen"
        description="Free VIN checker to verify if a car or vehicle is stolen, salvaged, or has theft history. Check VIN numbers against databases before buying used vehicles."
        keywords="VIN check, free VIN lookup, vehicle history, stolen car check, VIN verification, car theft check"
        canonical="/vin"
        noIndex={true}
      />
      
      {/* Noscript content for bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Free VIN Check - Vehicle History & Theft Verification</h1>
          <p>Free VIN checker to verify if a vehicle is reported stolen, salvaged, or has theft history. Check cars, trucks, motorcycles, and RVs before purchasing.</p>
          
          <h2>What is a VIN Number?</h2>
          <p>VIN (Vehicle Identification Number) is a unique 17-character code that identifies every vehicle. It contains information about the manufacturer, model year, and vehicle history.</p>
          
          <h2>Why Check VIN Before Buying?</h2>
          <ul>
            <li>Verify vehicle isn't reported stolen</li>
            <li>Check for salvage or flood damage</li>
            <li>Confirm vehicle title status</li>
            <li>Avoid buying stolen vehicles</li>
            <li>Protect your investment</li>
            <li>Prevent legal complications</li>
          </ul>
          
          <h2>Where to Find VIN</h2>
          <p>The VIN can be found on the dashboard (visible through windshield), driver's side door jamb, vehicle registration, or insurance documents.</p>
          
          <h2>What Our VIN Check Reveals</h2>
          <ul>
            <li>Theft status from police databases</li>
            <li>Insurance loss records</li>
            <li>Salvage and rebuilt titles</li>
            <li>Accident history reports</li>
            <li>Odometer discrepancies</li>
          </ul>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for our VIN verification service.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Free VIN Check</h1>
          <p className="text-muted-foreground mb-6">
            Verify vehicle history and theft status instantly. Check VIN numbers against databases before buying used cars.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VINPage;
