import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /imei-check → /verify
 * Includes substantial content for search engines to prevent "Page with redirect" issues
 */
const IMEICheckPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Free IMEI Check - Verify Phone Instantly | SafeOrStolen"
        description="Instant free IMEI check service. Verify if your phone is stolen, blacklisted, or clean before buying. Works with iPhone, Samsung, and all Android devices."
        keywords="IMEI check, free IMEI verification, phone blacklist check, stolen phone check, verify IMEI"
        noIndex={true}
      />
      
      {/* Noscript content for search engine bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Free IMEI Check - Instant Phone Verification</h1>
          <p>Check your phone's IMEI number instantly to verify if it's reported stolen, blacklisted by carriers, or safe to purchase. Free IMEI verification for all phone brands.</p>
          
          <h2>Instant IMEI Verification</h2>
          <p>Our free IMEI check service provides instant results by searching global databases including police reports, carrier blacklists, and manufacturer theft records.</p>
          
          <h2>What IMEI Check Reveals</h2>
          <ul>
            <li>Theft status from law enforcement databases</li>
            <li>Carrier blacklist status (AT&T, Verizon, T-Mobile, Sprint)</li>
            <li>Insurance claim records</li>
            <li>Activation lock status</li>
            <li>Original warranty information</li>
            <li>Country of origin and carrier</li>
          </ul>
          
          <h2>All Phone Brands Supported</h2>
          <p>Works with iPhone (all models), Samsung Galaxy, Google Pixel, OnePlus, Xiaomi, Huawei, LG, Motorola, and all other smartphone brands.</p>
          
          <h2>Why Check IMEI?</h2>
          <ul>
            <li>Verify phone isn't stolen before buying</li>
            <li>Confirm device can be activated on your carrier</li>
            <li>Check for insurance claims or fraud</li>
            <li>Protect your investment when buying used phones</li>
            <li>Avoid legal trouble from possessing stolen property</li>
          </ul>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for instant IMEI verification.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Free IMEI Check</h1>
          <p className="text-muted-foreground mb-6">
            Instant phone verification service. Check IMEI numbers against global databases to verify if phones are stolen or blacklisted.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default IMEICheckPage;
