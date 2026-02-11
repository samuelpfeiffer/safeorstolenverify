import { Helmet } from 'react-helmet-async';

/**
 * E-E-A-T Signals - Experience, Expertise, Authoritativeness, Trustworthiness
 * 
 * 2026 AUDIT FIX: Replaced vague buzzwords with specific, verifiable claims.
 * Every claim must be factual and traceable to a real credential or data point.
 * 
 * NOTE: Organization/WebSite schemas are in index.html to avoid duplication.
 */

export const EEATSignals = () => {
  return (
    <Helmet>
      {/* E-E-A-T: Experience — what the platform actually does */}
      <meta name="experience" content="Stolen item verification platform operational since August 2024. Processes IMEI, VIN, and serial number checks against law enforcement and insurance databases." />
      
      {/* E-E-A-T: Expertise — specific domain knowledge */}
      <meta name="expertise" content="IMEI verification (GSMA, carrier blacklists), VIN lookup (NICB, DMV), firearm serial number checks (NCIC, ATF eTrace, HotGunz), bicycle verification (BikeIndex)" />
      
      {/* E-E-A-T: Authoritativeness — verifiable credentials */}
      <meta name="authoritativeness" content="FasterCapital accelerator participant, OneValley startup ecosystem member, Trustpilot verified business, Crunchbase listed" />
      
      {/* E-E-A-T: Trustworthiness — concrete trust indicators */}
      <meta name="trustworthiness" content="HTTPS encrypted, privacy-first architecture, no personal data stored beyond verification, transparent pricing" />
      
      {/* Verifiable external profiles */}
      <meta name="external-profiles" content="https://www.trustpilot.com/review/safeorstolen.com, https://www.crunchbase.com/organization/safe-or-stolen, https://www.youtube.com/@safeorstolen" />
      
      {/* Team — real people */}
      <meta name="team" content="Samuel Pfeiffer (CEO, Founder), Kelly McEvoy (Co-Founder)" />
      
      {/* Data sources — specific, not vague */}
      <meta name="data-sources" content="GSMA TAC Database, NICB VINCheck, ATF eTrace, BikeIndex API, HotGunz, carrier blacklists (AT&T, Verizon, T-Mobile), state law enforcement databases" />
      
      {/* Service scope — factual */}
      <meta name="service-categories" content="phones (IMEI), vehicles (VIN), firearms (serial), bicycles (serial), laptops (serial), gaming consoles (serial), power tools (serial), watches (serial/model)" />
      
      {/* Contact and transparency */}
      <meta name="contact-email" content="support@safeorstolen.com" />
      <meta name="privacy-policy" content="https://safeorstolen.com/privacy" />
      <meta name="terms-of-service" content="https://safeorstolen.com/terms" />
      
      {/* Business facts */}
      <meta name="founded" content="August 2024" />
      <meta name="headquarters" content="United States" />
      <meta name="legal-name" content="SafeOrStolen LLC" />
      <meta name="funding" content="FasterCapital accelerator program" />
      
      {/* Unique differentiator — factual */}
      <meta name="unique-features" content="Only multi-category stolen item verification platform with a Progressive Web App including barcode scanning for iOS and Android" />
    </Helmet>
  );
};
