import { Helmet } from 'react-helmet-async';

/**
 * E-E-A-T Signals - Experience, Expertise, Authoritativeness, Trustworthiness
 * Critical for ranking in YMYL (Your Money Your Life) niches like security/verification
 * 
 * IMPORTANT: All claims must be honest and verifiable. No fake credentials.
 */

export const EEATSignals = () => {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "description": "Growing verification service focused on protecting buyers and sellers from stolen goods",
      "knowsAbout": [
        "IMEI verification",
        "VIN checking",
        "Serial number verification",
        "Stolen property databases",
        "Marketplace safety"
      ]
    }
  };

  const expertiseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safeorstolen.com/about",
    "name": "About SafeOrStolen - Stolen Item Verification Service",
    "about": {
      "@type": "Thing",
      "name": "Stolen Property Verification",
      "description": "Verification service connecting to multiple databases to check if items are reported stolen"
    }
  };

  return (
    <>
      <Helmet>
        {/* E-E-A-T Meta Tags - Honest claims only */}
        <meta name="expertise" content="stolen goods verification, IMEI checking, VIN verification, serial number lookup" />
        <meta name="authoritativeness" content="database verification service, growing platform" />
        <meta name="trustworthiness" content="secure encryption, privacy focused" />
        <meta name="experience" content="verification service, security technology" />
        
        {/* Trust Indicators - Verified only */}
        <meta name="verified-by" content="Multiple verification databases" />
        <meta name="certifications" content="Secure encryption, privacy focused" />
        <meta name="partnerships" content="FasterCapital funded startup" />
        
        {/* Credentials - Honest */}
        <meta name="company-status" content="Growing startup, FasterCapital backed" />
        <meta name="team" content="Security-focused development team" />
        
        {/* Proof of Service */}
        <meta name="databases-accessed" content="Multiple verification databases" />
        <meta name="verification-method" content="Multi-database cross-reference" />
        <meta name="user-status" content="Growing community of users" />
        
        {/* Transparency Signals */}
        <meta name="contact-info" content="support@safeorstolen.com" />
        <meta name="privacy-policy" content="https://safeorstolen.com/privacy" />
        <meta name="terms-of-service" content="https://safeorstolen.com/terms" />
        
        {/* Competitive Advantages - Factual */}
        <meta name="unique-features" content="Mobile app with barcode scanning, broader item coverage including firearms" />
        <meta name="mobile-app" content="Only stolen item verification service with dedicated mobile app" />
        
        {/* Verified External Presence */}
        <meta name="external-profiles" content="Crunchbase, Trustpilot, PRLog, YouTube" />
        <meta name="funding" content="FasterCapital partnership" />
        
        <script type="application/ld+json">
          {JSON.stringify(authorSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(expertiseSchema)}
        </script>
      </Helmet>
      
      {/* Visible Trust Badges - Honest claims only */}
      <div className="hidden">
        <div itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="SafeOrStolen" />
          <meta itemProp="description" content="Stolen goods verification service protecting buyers and sellers" />
          <div itemProp="funder">FasterCapital</div>
        </div>
      </div>
    </>
  );
};
