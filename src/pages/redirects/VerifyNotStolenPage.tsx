import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verify-not-stolen → /verify
 * Includes substantial content for search engines to prevent "Page with redirect" issues
 */
const VerifyNotStolenPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Verify Not Stolen - Confirm Items Are Safe to Buy | SafeOrStolen"
        description="Verify items are not stolen before purchasing. Free verification service to confirm phones, vehicles, electronics, and more are legitimate and safe to buy."
        keywords="verify not stolen, confirm not stolen, legitimate item check, safe to buy verification, theft verification"
        noIndex={true}
      />
      
      {/* Noscript content for search engine bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Verify Not Stolen - Confirm Items Are Legitimate</h1>
          <p>Verify that items are not stolen before you buy. Our verification service confirms that phones, vehicles, electronics, and other items are legitimate and safe to purchase.</p>
          
          <h2>Why Verify Items Are Not Stolen?</h2>
          <p>When buying secondhand items, verifying they're not stolen protects you from financial loss, legal trouble, and supports crime prevention. Our service confirms items are legitimate before you complete your purchase.</p>
          
          <h2>How to Verify Items Are Not Stolen</h2>
          <ol>
            <li>Get the item's unique identifier (IMEI, VIN, serial number)</li>
            <li>Enter it into our verification system</li>
            <li>Receive instant results showing theft status</li>
            <li>Get confirmation the item is safe to buy</li>
            <li>Download verification certificate for your records</li>
          </ol>
          
          <h2>What Gets Verified</h2>
          <ul>
            <li>Police theft reports and NCIC database</li>
            <li>Insurance company claims records</li>
            <li>Manufacturer theft reports</li>
            <li>User-submitted stolen item reports</li>
            <li>Carrier blacklist status (for phones)</li>
            <li>Title and lien records (for vehicles)</li>
          </ul>
          
          <h2>Items You Can Verify</h2>
          <ul>
            <li>Smartphones and mobile devices (iPhone, Android, Samsung)</li>
            <li>Vehicles (cars, trucks, motorcycles, RVs)</li>
            <li>Laptops and computers (MacBook, Dell, HP, Lenovo)</li>
            <li>Tablets (iPad, Galaxy Tab, Surface)</li>
            <li>Gaming consoles (PlayStation, Xbox, Nintendo)</li>
            <li>Cameras and photography equipment</li>
            <li>Bicycles and e-bikes</li>
            <li>Power tools and equipment</li>
            <li>Luxury watches and jewelry</li>
          </ul>
          
          <h2>Benefits of Verification</h2>
          <ul>
            <li>Peace of mind knowing items are legitimate</li>
            <li>Protection from purchasing stolen property</li>
            <li>Avoid financial loss and legal consequences</li>
            <li>Support stolen item recovery efforts</li>
            <li>Make confident secondhand marketplace purchases</li>
          </ul>
          
          <h2>When to Verify</h2>
          <p>Always verify items before buying from Craigslist, Facebook Marketplace, OfferUp, eBay, pawn shops, thrift stores, garage sales, or any secondhand source.</p>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> to verify items are not stolen.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verify Not Stolen</h1>
          <p className="text-muted-foreground mb-6">
            Confirm items are legitimate and safe to buy. Free verification service to check items are not reported stolen.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyNotStolenPage;
