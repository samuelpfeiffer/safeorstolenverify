import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verification-hub → /verify
 * Includes substantial content for search engines to prevent "Page with redirect" issues
 */
const VerificationHubPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Verification Hub - All-in-One Item Verification Center | SafeOrStolen"
        description="Central verification hub for checking phones, vehicles, electronics, and all items against stolen databases. One platform for complete theft verification."
        keywords="verification hub, item verification center, multi-item checker, theft verification platform, all-in-one verification"
        noIndex={true}
      />
      
      {/* Noscript content for search engine bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Verification Hub - All-in-One Item Verification Center</h1>
          <p>Your central verification hub for checking any item against stolen databases. One platform to verify phones, vehicles, electronics, bikes, tools, jewelry, and more.</p>
          
          <h2>All-in-One Verification Platform</h2>
          <p>The verification hub provides unified access to multiple verification services. Check any item type using IMEI, VIN, serial numbers, frame numbers, or model numbers all in one place.</p>
          
          <h2>Available Verification Services</h2>
          <ul>
            <li><strong>Phone Verification:</strong> IMEI check for smartphones, tablets, smartwatches</li>
            <li><strong>Vehicle Verification:</strong> VIN check for cars, motorcycles, RVs, boats</li>
            <li><strong>Electronics Verification:</strong> Serial check for laptops, cameras, gaming systems</li>
            <li><strong>Bike Verification:</strong> Frame number check for bicycles, e-bikes, scooters</li>
            <li><strong>Tool Verification:</strong> Serial check for power tools, equipment</li>
            <li><strong>Jewelry Verification:</strong> Model check for luxury watches, designer items</li>
          </ul>
          
          <h2>How Verification Hub Works</h2>
          <ol>
            <li>Select item type or let our system auto-detect</li>
            <li>Enter unique identifier (IMEI, VIN, serial number, etc.)</li>
            <li>Get instant results from 100+ global databases</li>
            <li>Receive detailed verification report with theft status</li>
            <li>Download certificate for legal protection</li>
          </ol>
          
          <h2>Why Use Verification Hub?</h2>
          <ul>
            <li>Single platform for all verification needs</li>
            <li>Check multiple item types without switching services</li>
            <li>Comprehensive database coverage across 150+ countries</li>
            <li>Instant results in 3 seconds or less</li>
            <li>Free basic checks with no credit card required</li>
            <li>Mobile app for on-the-go verification</li>
          </ul>
          
          <h2>Trusted by Thousands</h2>
          <p>Over 50,000 monthly users trust our verification hub for secondhand marketplace purchases on eBay, Craigslist, Facebook Marketplace, OfferUp, and other platforms.</p>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for the verification hub.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verification Hub</h1>
          <p className="text-muted-foreground mb-6">
            All-in-one verification platform. Check phones, vehicles, electronics, bikes, tools, and more from a single hub.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerificationHubPage;
