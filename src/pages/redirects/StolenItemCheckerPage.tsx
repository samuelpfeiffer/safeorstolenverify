import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /stolen-item-checker → /verify
 * Includes substantial content for search engines to prevent "Page with redirect" issues
 */
const StolenItemCheckerPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Stolen Item Checker - Verify Anything Before You Buy | SafeOrStolen"
        description="Free stolen item checker to verify phones, cars, bikes, electronics, tools, and jewelry before purchasing. Check against global theft databases instantly."
        keywords="stolen item checker, check if stolen, stolen goods database, verify stolen items, theft database search"
        canonical="/stolen-item-checker"
        noIndex={true}
      />
      
      {/* Noscript content for search engine bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Stolen Item Checker - Free Theft Verification Service</h1>
          <p>Check if any item is reported stolen before you buy. Our comprehensive stolen item checker searches global theft databases to protect you from purchasing stolen property.</p>
          
          <h2>What You Can Check</h2>
          <ul>
            <li><strong>Phones:</strong> iPhone, Samsung, Android devices (IMEI check)</li>
            <li><strong>Vehicles:</strong> Cars, trucks, motorcycles, RVs (VIN check)</li>
            <li><strong>Electronics:</strong> Laptops, tablets, gaming consoles (serial number)</li>
            <li><strong>Bikes:</strong> Bicycles, e-bikes, scooters (frame number)</li>
            <li><strong>Tools:</strong> Power tools, equipment (serial number)</li>
            <li><strong>Jewelry:</strong> Watches, designer items</li>
          </ul>
          
          <h2>How Stolen Item Checker Works</h2>
          <p>Enter the item's unique identifier (IMEI, VIN, serial number, or frame number). Our system instantly searches police databases, insurance claims, manufacturer reports, and user-submitted theft reports globally.</p>
          
          <h2>Why Use Stolen Item Checker?</h2>
          <ul>
            <li>Verify items before purchasing on eBay, Craigslist, Facebook Marketplace</li>
            <li>Protect yourself from financial loss</li>
            <li>Avoid legal consequences of possessing stolen property</li>
            <li>Support crime prevention and recovery efforts</li>
            <li>Make informed buying decisions with confidence</li>
          </ul>
          
          <h2>Instant Results</h2>
          <p>Get verification results in 3 seconds. Our stolen item checker searches 100+ databases across 150+ countries to give you comprehensive protection.</p>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for our stolen item checker service.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Stolen Item Checker</h1>
          <p className="text-muted-foreground mb-6">
            Comprehensive stolen item verification. Check phones, vehicles, electronics, bikes, tools, and more against global theft databases.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default StolenItemCheckerPage;
