import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /vin-verification → /verify
 * Includes substantial content for search engines to prevent "Page with redirect" issues
 */
const VINVerificationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="VIN Verification Service - Check Vehicle History Free | SafeOrStolen"
        description="Professional VIN verification service to check if vehicles are stolen, salvaged, or have theft records. Free VIN check for cars, trucks, motorcycles before buying."
        keywords="VIN verification, vehicle verification, VIN check service, car theft check, stolen vehicle database"
        noIndex={true}
      />
      
      {/* Noscript content for search engine bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>VIN Verification Service - Professional Vehicle History Check</h1>
          <p>Comprehensive VIN verification service to check if vehicles are reported stolen, salvaged, or have theft records. Verify cars, trucks, motorcycles, and RVs before purchasing.</p>
          
          <h2>Complete VIN Verification</h2>
          <p>Our VIN verification service provides detailed vehicle history including theft status, salvage records, title brands, accident history, and odometer discrepancies.</p>
          
          <h2>What VIN Verification Reveals</h2>
          <ul>
            <li>Theft status from NCIC and police databases</li>
            <li>Salvage and rebuilt title records</li>
            <li>Insurance total loss claims</li>
            <li>Flood damage and branded titles</li>
            <li>Accident history reports</li>
            <li>Odometer rollback detection</li>
            <li>Lien and loan records</li>
            <li>Previous ownership history</li>
          </ul>
          
          <h2>All Vehicle Types</h2>
          <p>Verify any vehicle type: passenger cars, SUVs, trucks, vans, motorcycles, RVs, motorhomes, commercial vehicles, and heavy equipment.</p>
          
          <h2>Why VIN Verification Matters</h2>
          <ul>
            <li>Verify vehicle isn't stolen before purchasing</li>
            <li>Detect hidden salvage or flood damage</li>
            <li>Confirm clean title status</li>
            <li>Protect your investment in used vehicles</li>
            <li>Avoid legal issues from buying stolen cars</li>
            <li>Make informed decisions with complete history</li>
          </ul>
          
          <h2>Professional Alternative to Carfax</h2>
          <p>Our VIN verification service is a free alternative to Carfax and AutoCheck, providing comprehensive theft and salvage checks without subscription fees.</p>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for professional VIN verification.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">VIN Verification Service</h1>
          <p className="text-muted-foreground mb-6">
            Professional vehicle history verification. Check VIN numbers for theft status, salvage records, and complete vehicle history.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VINVerificationPage;
