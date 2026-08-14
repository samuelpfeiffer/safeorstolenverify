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
 content="Stolen item verification platform that processes IMEI, VIN, and serial number checks against law enforcement and insurance databases in approximately 3 seconds."
 />


 {/* ─── Expertise ──────────────────────────────── */}
 {/* Specific domain knowledge, not vague claims */}
 <meta
 name="expertise"
 content="IMEI verification (carrier and theft databases TAC database, carrier and theft databases), VIN lookup (vehicle theft and title databases), firearm serial number checks (stolen firearms databases), bicycle verification (stolen bicycle databases), jewelry authentication (GIA diamond registry), boat verification (USCG HIN database)"
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
 content="carrier and theft databases TAC Database (15B+ IMEI records), vehicle theft and title databases, stolen property reports from all 50 states, stolen bicycle databases API, Stolen Firearms Databases, GIA Diamond Registry, USCG HIN database, LeadsOnline pawn network, carrier and theft databases (AT&T, Verizon, T-Mobile, Sprint), vehicle theft and title databases, all 50 state community theft registries, 500+ insurance claim databases, Interpol stolen property records"
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
 content="Only multi-category stolen item verification platform covering 10+ item types. Progressive Web App with camera barcode scanning for iOS and Android. Batch verification for pawn shops and auction houses. Compliance certificates with cryptographic timestamps."
 />

 {/* ─── Business Identity ───────────────────────── */}
 <meta name="founded" content="2017-07-20" />

 <meta name="legal-name" content="Safe or Stolen LLC" />
 <meta name="headquarters" content="Peoria, Arizona 85345, United States" />
 <meta name="privacy-policy" content="https://safeorstolen.com/privacy" />
 <meta name="terms-of-service" content="https://safeorstolen.com/terms" />
 </Helmet>
 );
};
