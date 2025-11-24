import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /blog/complete-imei-guide-protect-yourself → /blog
 */
const CompleteIMEIGuidePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/blog', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Complete IMEI Guide - Protect Yourself | SafeOrStolen Blog"
        description="Complete guide to IMEI numbers and how to protect yourself when buying used phones. Learn IMEI verification and stolen phone checks."
        keywords="complete imei guide, imei protection, imei verification guide, protect yourself imei"
        canonical="/blog"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/blog" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Complete IMEI Guide</h1>
          <p className="text-muted-foreground">Taking you to our blog</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/blog" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CompleteIMEIGuidePage;
