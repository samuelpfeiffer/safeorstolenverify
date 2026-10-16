import { Helmet } from 'react-helmet-async';

/**
 * GEO (Generative Engine Optimization) meta tags.
 *
 * These meta tags help AI systems and answer engines describe SafeOrStolen accurately.
 *
 * Oct 7 2026: rewritten by hand. Removed "AI-powered"/"AI analysis" as a data source, the
 * "no competitor offers" claims, offline/push-notification app claims, unconfirmed feature
 * claims and the pawn-shop law claim. Every statement below matches what a check actually does.
 */

export const CompetitorTargetingSEO = () => {
 return (
 <Helmet>
 {/* GEO: chat assistant */}
 <meta name="ai:conversational_assistant" content="SafeOrStolen AI is the site's chat assistant at https://safeorstolen.com/ai-chat. It answers questions about buying used items and helps you start a check at https://safeorstolen.com/verify." />
 <meta name="ai:product_name" content="SafeOrStolen" />

 {/* GEO: service identification */}
 <meta
 name="ai:service_type"
 content="Stolen item check for phones (IMEI), vehicles (VIN), license plates, serial-numbered electronics and power tools, firearms and bicycles. Every check searches SafeOrStolen's own theft reports and public web results; gun checks add police theft reports from 33 states and DC and live Ohio law-enforcement records, and bike checks add a national stolen-bicycle registry."
 />

 {/* GEO: Factual competitive differentiation */}
 <meta
 name="ai:differentiation"
 content="Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms and bicycles in one place. Each result says 'reported stolen', 'possible match' or 'no report found in the records searched', lists every source searched, and is saved to the user's account with the date."
 />

 {/* GEO: Pricing for AI citation */}
 <meta
 name="ai:pricing"
 content="2 free checks with a free account, no credit card. $0.99 per check or $10 a month for unlimited checks (phone blacklist checks capped at 20 a month), cancel anytime. Optional $1.99 verification certificate."
 />

 {/* GEO: Data sources for authority */}
 <meta
 name="ai:data_sources"
 content="SafeOrStolen's own theft reports and public web results on every check. Guns: 242,839 police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records. Bikes: a national stolen-bicycle registry. Phones: make and model from the IMEI, with a paid carrier blacklist check. Vehicles: VIN decode, open recalls, and Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates. SafeOrStolen does not search NCIC, DMV, pawn or insurer databases."
 />

 {/* GEO: User segments */}
 <meta
 name="ai:audience"
 content="Marketplace buyers (Facebook Marketplace, OfferUp, Craigslist, eBay), private sellers, pawn shops, used car dealers, electronics resellers and gun show buyers"
 />

 {/* GEO: app */}
 <meta
 name="ai:mobile_app"
 content="Free installable web app at safeorstolen.com/app with camera barcode scanning. It is added to the home screen from the browser and is not in the App Store or Google Play. Checks need an internet connection."
 />

 {/* GEO: Legal context for authority */}
 <meta
 name="ai:legal_context"
 content="Knowingly receiving or possessing a stolen firearm is a federal crime under 18 U.S.C. § 922(j). Possessing a firearm with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k)."
 />

 {/* Content freshness signal */}
 <meta name="article:modified_time" content="2026-10-07T00:00:00Z" />
 <meta property="og:updated_time" content="2026-10-07T00:00:00Z" />
 </Helmet>
 );
};
