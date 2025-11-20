import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /stolen-property-lookup → /verify
 * Includes substantial content for search engines to prevent Soft 404
 */
const StolenPropertyLookupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Stolen Property Lookup - Free Database Search | SafeOrStolen"
        description="Free stolen property lookup service. Search global databases for stolen phones, cars, bikes, electronics, and tools before buying secondhand items."
        keywords="stolen property lookup, stolen goods database, check stolen items, property theft search, stolen database"
        canonical="/stolen-property-lookup"
      />
      
      {/* Noscript content for bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Stolen Property Lookup - Free Database Search</h1>
          <p>Search our comprehensive stolen property database to verify if items are reported stolen. Protect yourself when buying secondhand phones, vehicles, electronics, bikes, tools, and more.</p>
          
          <h2>What We Check</h2>
          <p>Our stolen property lookup service searches multiple databases including police reports, insurance claims, manufacturer theft reports, and user-submitted stolen item reports.</p>
          
          <h2>Items You Can Verify</h2>
          <ul>
            <li>Mobile phones (IMEI check)</li>
            <li>Vehicles (VIN lookup)</li>
            <li>Laptops and computers (serial number)</li>
            <li>Bicycles (frame number/serial)</li>
            <li>Tools and equipment (serial number)</li>
            <li>Electronics and gadgets</li>
          </ul>
          
          <h2>Why Check Before Buying?</h2>
          <ul>
            <li>Avoid purchasing stolen property</li>
            <li>Protect yourself from financial loss</li>
            <li>Prevent legal consequences</li>
            <li>Support crime prevention efforts</li>
            <li>Make informed buying decisions</li>
          </ul>
          
          <h2>How It Works</h2>
          <p>Simply enter the IMEI, VIN, or serial number of the item you want to verify. Our system instantly searches global stolen property databases and provides results in seconds.</p>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for our property lookup service.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Stolen Property Lookup</h1>
          <p className="text-muted-foreground mb-6">
            Free stolen property database search. Verify phones, vehicles, electronics, bikes, and tools before purchasing.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default StolenPropertyLookupPage;
