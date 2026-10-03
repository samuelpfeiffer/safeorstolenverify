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
 <meta name="data-sources" content="SafeOrStolen reports, public web results, AI analysis, BikeIndex, HotGunz, IMEI device information" />
 <meta name="verification-method" content="Parallel multi-database query returning results in approximately 3 seconds" />
 
 {/* Content freshness */}
 <meta name="content-update-frequency" content="databases queried in real-time; editorial content updated monthly" />
 <meta name="last-editorial-update" content="2026-02-06" />
 
 {/* Business credentials — verified only */}
 <meta name="business-entity" content="SafeOrStolen" />
 <meta name="review-platform" content="Trustpilot verified" />
 
 {/* Service facts */}
 <meta name="service-area" content="United States — all 50 states" />
 <meta name="service-availability" content="24/7 via web and Progressive Web App" />
 <meta name="pricing" content="2 free checks, then $3.99/check or $14.99/month unlimited — all item types, all features" />
 <meta name="paid-plans" content="2 free verifications, then $3.99/check or $14.99/mo unlimited — all item types, cancel anytime" />
 
 {/* Competitive positioning — factual comparisons */}
 <meta name="competitive-advantage" content="Only multi-category verification service with mobile app and barcode scanning. Covers phones, vehicles, firearms, electronics, bicycles — competitors specialize in single categories." />
 </Helmet>
 );
};
