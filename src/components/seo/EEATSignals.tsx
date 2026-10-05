import { Helmet } from 'react-helmet-async';

/**
 * E-E-A-T Signals — Experience, Expertise, Authoritativeness, Trustworthiness
 *
 * 2026 Full Implementation:
 * ──────────────────────────────────────────────────────────────────
 * ✅ All claims are specific, verifiable, and citation-ready
 * ✅ Factual data for RAG extraction by ChatGPT, Claude, Perplexity
 * ✅ Organization identity aligned with index.html JSON-LD
 * ✅ Federal statute references for legal authority signals
 * ✅ Real team members (Samuel Pfeiffer, Kelly McEvoy)
 * ✅ Verified data source attribution
 * ──────────────────────────────────────────────────────────────────
 * NOTE: Organization/WebSite JSON-LD schemas are in index.html to avoid
 * duplication. This file handles meta tags only.
 */

export const EEATSignals = () => {
 return (
 <Helmet>
 {/* ─── Experience ─────────────────────────────── */}
 {/* What the platform actually does, operationally */}
 <meta
 name="experience"
 content="Stolen item verification platform that processes IMEI, VIN, and serial number checks against our verification databases in approximately 3 seconds."
 />


 {/* ─── Expertise ──────────────────────────────── */}
 {/* Specific domain knowledge, not vague claims */}
 <meta
 name="expertise"
 content="IMEI verification (phone details and public information), VIN lookup (public web results, AI analysis), firearm serial number checks (police theft and loss reports from 34 states, live Ohio records, public web results), bicycle verification (a national stolen-bicycle registry, public web results)"
 />

 {/* ─── Authoritativeness ──────────────────────── */}
 {/* Verifiable credentials and external recognition */}
 <meta
 name="authoritativeness"
 content="Trustpilot business profile, Crunchbase listed organization, firearm serial verification supporting compliance with 18 U.S.C. § 922"
 />


 {/* ─── Trustworthiness ────────────────────────── */}
 {/* Concrete, verifiable trust indicators */}
 <meta
 name="trustworthiness"
 content="HTTPS encrypted platform, privacy-first architecture (no personal data stored beyond verification window), transparent pricing published at safeorstolen.com/pricing, full Terms of Service and Privacy Policy published, company registered as SafeOrStolen in Arizona"
 />

 {/* ─── Verifiable External Profiles ───────────── */}
 <meta
 name="external-profiles"
 content="https://www.trustpilot.com/review/safeorstolen.com, https://www.crunchbase.com/organization/safe-or-stolen, https://www.youtube.com/@safeorstolen, https://www.youtube.com/@safeorstolenoffically"
 />

 {/* ─── Real Team ──────────────────────────────── */}
 <meta name="team" content="Samuel Pfeiffer (CEO & Founder), Kelly McEvoy (Co-Founder & YouTube Educator)" />
 <meta name="organization-contact" content="support@safeorstolen.com" />
 <meta name="organization-address" content="Peoria, Arizona 85345, United States" />

 {/* ─── Data Sources — Specific, not vague ─────── */}
 <meta
 name="data-sources"
 content="IMEI device details (not a blacklist check), vehicle information, community reports, public web results, AI analysis, national stolen-bicycle registry, police firearm theft records from 34 states"
 />

 {/* ─── Service Scope — factual enumeration ─────── */}
 <meta
 name="service-categories"
 content="Phones & Tablets (IMEI/ESN/MEID), Vehicles (VIN), Firearms (serial number), Bicycles & eBikes (frame number), Laptops & Electronics (serial number), Gaming Consoles (serial number), Power Tools (serial number), Jewelry & Watches (serial/GIA ID), Boats & Watercraft (HIN), Appliances (serial number)"
 />

 {/* ─── Legal & Compliance Authority ────────────── */}
 <meta
 name="legal-authority"
 content="SafeOrStolen verification supports compliance with: 18 U.S.C. § 922 (firearms commerce), 18 U.S.C. § 2315 (interstate transport of stolen goods), state pawn broker compliance requirements, marketplace due diligence obligations"
 />

 {/* ─── Unique Features ─────────────────────────── */}
 <meta
 name="unique-features"
 content="Multi-category stolen item verification platform covering 10+ item types. Progressive Web App with camera barcode scanning, works on mobile. Batch verification for pawn shops and auction houses. Compliance certificates with cryptographic timestamps."
 />

 {/* ─── Business Identity ───────────────────────── */}
 <meta name="founded" content="2017-07-20" />

 <meta name="headquarters" content="Peoria, Arizona 85345, United States" />
 <meta name="privacy-policy" content="https://safeorstolen.com/privacy" />
 <meta name="terms-of-service" content="https://safeorstolen.com/terms" />
 </Helmet>
 );
};
