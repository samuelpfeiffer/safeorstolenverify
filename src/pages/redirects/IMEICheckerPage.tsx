import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /imei-checker → /verify
 * Includes substantial content for search engines to prevent Soft 404
 */
const IMEICheckerPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <PageSEO
        title="Free IMEI Checker - Verify Phone Status Instantly | SafeOrStolen"
        description="Free IMEI checker to verify if a phone is stolen, blacklisted, or safe to buy. Check iPhone and Android devices against global databases instantly."
        keywords="IMEI checker, free IMEI check, phone stolen check, blacklist check, verify phone IMEI"
        canonical="/imei-checker"
        noIndex={true}
      />
      
      {/* Noscript content for bots */}
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Free IMEI Checker - Verify Phone Status</h1>
          <p>Check if a phone is stolen, blacklisted, or safe to buy using our free IMEI checker. Verify iPhone and Android devices instantly against global databases.</p>
          
          <h2>What is an IMEI Number?</h2>
          <p>IMEI (International Mobile Equipment Identity) is a unique 15-digit code that identifies your mobile device. Every phone has one, and it's used to verify ownership and track stolen devices.</p>
          
          <h2>Why Check IMEI Before Buying?</h2>
          <ul>
            <li>Verify the phone isn't reported stolen</li>
            <li>Check if device is blacklisted by carriers</li>
            <li>Confirm phone can be activated on networks</li>
            <li>Protect yourself from financial loss</li>
            <li>Avoid legal issues with stolen property</li>
          </ul>
          
          <h2>How to Find Your IMEI</h2>
          <p>Dial *#06# on any phone, or check Settings → About Phone → IMEI information.</p>
          
          <p><strong>This page has moved.</strong> Please visit <a href="/verify">/verify</a> for our IMEI verification service.</p>
        </div>
      </noscript>
      
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Free IMEI Checker</h1>
          <p className="text-muted-foreground mb-6">
            Verify if a phone is stolen or blacklisted before you buy. Our free IMEI checker searches global databases instantly.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to verification service... If not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default IMEICheckerPage;
