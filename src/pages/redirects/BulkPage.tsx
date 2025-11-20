import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /bulk → /verify
 * Includes substantial content for search engines to prevent Soft 404
 */
const BulkPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Bulk Verification Service - Check Multiple Items | SafeOrStolen"
        description="Bulk verification service for businesses, pawn shops, and resellers. Verify multiple IMEI, VIN, and serial numbers efficiently against stolen databases."
        keywords="bulk verification, bulk IMEI check, business verification service, pawn shop verification, reseller tools"
        canonical="/bulk"
      />
      
      {/* Noscript content for bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Bulk Verification Service</h1>
          <p>Professional bulk verification service for businesses that need to check multiple items efficiently. Perfect for pawn shops, resellers, auction houses, and retailers.</p>
          
          <h2>Business Verification Solutions</h2>
          <p>Our bulk verification service allows you to check multiple IMEI numbers, VIN numbers, and serial numbers simultaneously, saving time and reducing risk for your business.</p>
          
          <h2>Who Uses Bulk Verification?</h2>
          <ul>
            <li>Pawn shops verifying incoming inventory</li>
            <li>Used electronics retailers checking stock</li>
            <li>Auction houses validating items</li>
            <li>Wholesalers protecting their purchases</li>
            <li>Retailers preventing stolen goods sales</li>
          </ul>
          
          <h2>Features</h2>
          <ul>
            <li>Check multiple items at once</li>
            <li>Instant results across all databases</li>
            <li>Export verification certificates</li>
            <li>API integration available</li>
            <li>Priority support for businesses</li>
          </ul>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for our verification service.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Bulk Verification Service</h1>
          <p className="text-muted-foreground mb-6">
            Professional bulk verification for businesses. Check multiple items efficiently against stolen databases.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification page... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BulkPage;
