import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /blog/protect-yourself-buying-used-electronics → /serial-number-checker
 */
const ProtectYourselfBuyingUsedElectronics = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/serial-number-checker', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Protect Yourself Buying Used Electronics | SafeOrStolen"
        description="Learn how to protect yourself when buying used electronics. Check serial numbers and verify electronics aren't stolen before you buy."
        keywords="protect buying used electronics, verify used electronics, check electronics serial number, buy used electronics safely"
        canonical="/serial-number-checker"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/serial-number-checker" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Protect Yourself Buying Used Electronics</h1>
          <p className="text-muted-foreground">Taking you to our serial number checker</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/serial-number-checker" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProtectYourselfBuyingUsedElectronics;
