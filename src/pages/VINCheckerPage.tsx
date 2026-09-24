import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { StateLinksGrid } from '@/components/seo/StateLinksGrid';

/**
 * VIN checker — "run a check now" intent. Companion guide: /how-to-check-if-car-stolen.
 * Honesty rule: SafeOrStolen does NOT search NICB, NMVTIS, NCIC or police databases.
 */
const VINCheckerPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="VIN Checker — Check if a Car Is Stolen | SafeOrStolen"
 metaDescription="Run a stolen-vehicle VIN or plate check in seconds against SafeOrStolen's stolen-item reports, web results and AI analysis. Free to try."
 h1="VIN Checker: Is This Car Stolen?"
 itemType="Vehicle"
 dateModified="2026-09-23"
 keywords={[
 'VIN checker',
 'check VIN stolen',
 'stolen car check',
 'verify car not stolen',
 'VIN lookup',
 'stolen vehicle check',
 'car dealer VIN verification',
 'reseller vehicle verification'
 ]}
 content={{
 intro: "Enter a 17-character VIN to check a car, truck, motorcycle or RV against SafeOrStolen's own stolen-item reports, public web results and AI analysis — results in about 3 seconds. 2 free checks with a free account (no card), then $0.99 per check or $10/month unlimited. New to this? Read the full guide: <a href='/how-to-check-if-car-stolen'>How to check if a car is stolen</a>, which also covers NICB VINCheck, NMVTIS, history reports and calling police.",
 whatIs: "A VIN (Vehicle Identification Number) is the 17-character code that identifies a vehicle built since 1981. SafeOrStolen's VIN checker looks that code up in SafeOrStolen's own stolen-item report registry, searches public web results for theft reports and suspicious listings, and uses AI analysis to explain the result in plain language. It is one step in a used-car check, alongside official resources you run yourself: NICB VINCheck (free), an NMVTIS title report (low cost), a paid history report such as Carfax or AutoCheck, and your local police non-emergency line. SafeOrStolen does not search NICB, NMVTIS or police databases.",
 howItWorks: "Type or paste the VIN (or a license plate, or a marketplace listing link). SafeOrStolen checks its own stolen-item reports, runs a public web search for the identifier, and applies AI analysis. You get a clear result — Stolen, Not stolen, or Not found in the sources we checked — plus a list of the sources checked. The result is saved to your account, and after a clean check you can keep a Proof of Clean Purchase record, a timestamped record showing you did your due diligence.",
 whyCheck: "A stolen vehicle can be recovered by police and returned to its owner even after you pay for it, leaving you without the car or your money. Checking before you pay — and keeping a record that you checked — protects buyers, and gives honest sellers a way to show a vehicle checked clean. No service can guarantee 100% accuracy and not every theft is reported, so also use the official resources in our <a href='/how-to-check-if-car-stolen'>stolen car guide</a> and check with local law enforcement on high-value purchases.",
 benefits: [
 "Results in about 3 seconds from SafeOrStolen's stolen-item reports, web results and AI analysis",
 "Free to try — no credit card required",
 "Check by VIN, license plate, or marketplace listing link",
 "Plain-language AI explanation of every result",
 "Results saved to your account; Proof of Clean Purchase record after a clean check",
 "Same account also checks phones (IMEI), electronics and power tools (serial), firearms and bicycles",
 "Works on the web or as an installable web app"
 ],
 process: [
 "Find the VIN on the dashboard (driver side, through the windshield), the driver door jamb sticker, the title and registration, and the insurance card — confirm they all match",
 "Enter the 17-character VIN into the SafeOrStolen checker",
 "Review the result and the list of sources checked",
 "Also run NICB VINCheck and an NMVTIS title report, and call your local police non-emergency line with the VIN and plate",
 "If anything shows stolen or the VINs don't match, don't pay — leave and report it to police"
 ],
 faqs: [
 {
 question: "How do I check a VIN for theft?",
 answer: "Confirm the VIN matches on the dashboard, door jamb, title, registration and insurance card, then enter it at SafeOrStolen to check SafeOrStolen's stolen-item reports, public web results and AI analysis. Also run it through NICB VINCheck (free) and an NMVTIS title report, and call your local police non-emergency line. Step-by-step details are in our guide on how to check if a car is stolen."
 },
 {
 question: "What does SafeOrStolen check?",
 answer: "SafeOrStolen checks its own stolen-item report registry, public web search results for the identifier, and AI analysis of what it finds. It does not search NICB, NMVTIS, NCIC or police databases — those are separate official resources you can check yourself."
 },
 {
 question: "Is there a free stolen vehicle check?",
 answer: "NICB VINCheck is free. SafeOrStolen includes 2 free checks with a free account (no card), then $0.99 for a single check or $10 per month for unlimited checks across every item type."
 },
 {
 question: "How is SafeOrStolen different from a vehicle history report?",
 answer: "Paid history reports such as Carfax and AutoCheck cover accidents, ownership and service history. SafeOrStolen is a stolen-item check across its own reports, web results and AI analysis, with results saved to your account. Many buyers use both."
 },
 {
 question: "Can I check a motorcycle or RV?",
 answer: "Yes. Motorcycles and RVs have 17-character VINs and are checked the same way. A boat's hull ID (HIN) can be run through the general serial number check."
 },
 {
 question: "What if the check shows the vehicle is stolen?",
 answer: "Don't pay and don't confront the seller. Save the listing, messages and VIN, leave, and report it to your local police non-emergency line. If you already bought it, contact police right away and keep your payment records."
 },
 {
 question: "What is VIN cloning?",
 answer: "VIN cloning is when a legitimate VIN is copied onto a stolen vehicle. Check the VIN in every location for signs of tampering — scratched or re-riveted plates, a new door sticker, mismatched keys or a damaged ignition — and walk away if anything doesn't match."
 }
 ]
 }}
 />
 <StateLinksGrid kind="vin" />
 </>
 );
};

export default VINCheckerPage;
