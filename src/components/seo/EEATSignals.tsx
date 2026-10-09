import { Helmet } from 'react-helmet-async';

/**
 * E-E-A-T meta tags.
 *
 * Oct 7 2026: fixed by hand. Removed "AI analysis" as a data source, "3 seconds", outbound
 * profile URLs, the old support@ address, the zip code and founding date, the "no personal
 * data stored" claim (checks are saved to the account), and compliance claims.
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
 content="Stolen item check for IMEI, VIN, plate and serial numbers. Each check returns reported stolen, possible match, or no report found in the records searched, with every source listed, in a few seconds."
 />


 {/* ─── Expertise ──────────────────────────────── */}
 {/* Specific domain knowledge, not vague claims */}
 <meta
 name="expertise"
 content="IMEI checks (make and model from the IMEI, SafeOrStolen theft reports, public web results, paid carrier blacklist check), VIN checks (decode, open recalls, theft reports, public web results; Arizona law-enforcement stolen-vehicle records for Arizona VINs), firearm serial checks (police theft and loss reports from 33 states and DC, live Ohio law-enforcement records, altered-serial flag), bicycle checks (a national stolen-bicycle registry)"
 />

 {/* ─── Authoritativeness ──────────────────────── */}
 {/* Verifiable credentials and external recognition */}
 <meta
 name="authoritativeness"
 content="Every result lists the sources searched. Gun checks search 242,839 police firearm theft and loss reports from 33 states and Washington, DC."
 />


 {/* ─── Trustworthiness ────────────────────────── */}
 {/* Concrete, verifiable trust indicators */}
 <meta
 name="trustworthiness"
 content="HTTPS site, plate checks never show owner names, pricing published at safeorstolen.com/pricing (2 free checks, $0.99 a check, $10 a month unlimited, 30-day refund on the monthly plan), Terms of Service and Privacy Policy published, based in Peoria, Arizona"
 />

 {/* ─── Real Team ──────────────────────────────── */}
 <meta name="team" content="Samuel Pfeiffer (CEO & Founder), Kelly McEvoy (Co-Founder & YouTube Educator)" />
 <meta name="organization-contact" content="safeorstolenmail@gmail.com" />
 <meta name="organization-address" content="Peoria, Arizona, United States" />

 {/* ─── Data Sources — Specific, not vague ─────── */}
 <meta
 name="data-sources"
 content="SafeOrStolen theft reports and public web results (every check); police firearm theft and loss reports from 33 states and DC plus live Ohio law-enforcement records (guns); a national stolen-bicycle registry (bikes); IMEI make and model plus a paid carrier blacklist check (phones); VIN decode, open recalls and Arizona law-enforcement stolen-vehicle records (vehicles)"
 />

 {/* ─── Service Scope — factual enumeration ─────── */}
 <meta
 name="service-categories"
 content="Phones & Tablets (IMEI/ESN/MEID), Vehicles (VIN), Firearms (serial number), Bicycles & eBikes (frame number), Laptops & Electronics (serial number), Gaming Consoles (serial number), Power Tools (serial number), Jewelry & Watches (serial/GIA ID), Boats & Watercraft (HIN), Appliances (serial number)"
 />

 {/* ─── Legal & Compliance Authority ────────────── */}
 <meta
 name="legal-authority"
 content="Relevant federal law: 18 U.S.C. § 922(j) (receiving or possessing a stolen firearm) and § 922(k) (firearm with an obliterated serial number). A SafeOrStolen check is a dated record that you looked; it is not legal advice or a legal defense."
 />

 {/* ─── Unique Features ─────────────────────────── */}
 <meta
 name="unique-features"
 content="One place to check phones, vehicles, plates, electronics, power tools, firearms and bicycles. Free installable web app at safeorstolen.com/app with camera barcode scanning (not an App Store or Google Play app). Bulk checking for pawn shops and dealers at /bulk-check. Optional $1.99 verification certificate with its own link."
 />

 {/* ─── Business Identity ───────────────────────── */}
 <meta name="headquarters" content="Peoria, Arizona, United States" />
 <meta name="privacy-policy" content="https://safeorstolen.com/privacy" />
 <meta name="terms-of-service" content="https://safeorstolen.com/terms" />
 </Helmet>
 );
};
