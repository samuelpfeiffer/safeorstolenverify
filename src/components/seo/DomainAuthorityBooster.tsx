import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * DomainAuthorityBooster - Factual E-A-T meta signals
 * 
 * 2026 AUDIT FIX: Removed vague claims ("enterprise-grade", "market-leader").
 * All signals are now specific, verifiable, and honest.
 * Schemas are defined in index.html to avoid duplication.
 */
export const DomainAuthorityBooster: React.FC = () => {
 return (
 <Helmet>
 {/* Content depth — factual page-level signals */}
 <meta name="article-section" content="Stolen Item Verification" />
 
 {/* Authority signals — verifiable claims only */}
 <meta name="data-sources" content="SafeOrStolen theft reports and public web results on every check; for guns, police firearm theft and loss reports from 33 states and DC plus live Ohio law-enforcement records; for bikes, a national stolen-bicycle registry; for Arizona VINs and plates, Arizona law-enforcement stolen-vehicle records; for phones, an optional paid carrier blacklist check" />
 <meta name="verification-method" content="Each check searches the listed sources and returns a result in a few seconds: reported stolen, possible match, or no report found in the records searched" />
 
 {/* Content freshness */}
 <meta name="content-update-frequency" content="sources searched at the time of each check; Arizona stolen-vehicle records updated twice a day" />
 <meta name="last-editorial-update" content="2026-10-07" />
 
 {/* Business credentials — verified only */}
 <meta name="business-entity" content="SafeOrStolen" />
 <meta name="business-location" content="Peoria, AZ" />
 <meta name="contact-email" content="safeorstolenmail@gmail.com" />
 
 {/* Service facts */}
 <meta name="service-area" content="United States — all 50 states" />
 <meta name="service-availability" content="24/7 via the website and a free installable web app at safeorstolen.com/app (not an App Store or Google Play app)" />
 <meta name="pricing" content="2 free checks, then $0.99/check or $10/month unlimited — all item types, all features" />
 <meta name="paid-plans" content="2 free verifications, then $0.99/check or $10/mo unlimited — all item types, cancel anytime" />
 
 {/* Coverage */}
 <meta name="item-coverage" content="Phones (IMEI), vehicles (VIN), license plates, firearms, bicycles and serial-numbered items, from one account, with a camera barcode scanner in the web app." />
 </Helmet>
 );
};
