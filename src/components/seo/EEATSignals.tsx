import { Helmet } from 'react-helmet-async';

/**
 * E-E-A-T Signals - Experience, Expertise, Authoritativeness, Trustworthiness
 * Critical for ranking in YMYL (Your Money Your Life) niches like security/verification
 * 
 * IMPORTANT: All claims must be honest and verifiable. No fake credentials.
 * NOTE: Schemas removed - Organization/WebSite are in index.html to avoid duplication
 */

export const EEATSignals = () => {
  // NOTE: ProfilePage and WebPage schemas REMOVED to prevent duplication
  // Global schemas are defined in index.html

  return (
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
    </Helmet>
  );
};
