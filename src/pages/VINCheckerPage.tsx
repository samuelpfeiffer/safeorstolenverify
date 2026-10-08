import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { StateLinksGrid } from '@/components/seo/StateLinksGrid';

/**
 * Oct 8 2026: audited by hand for "vin checker". Companion guide: /how-to-check-if-car-stolen.
 * Honesty rule: SafeOrStolen does NOT search NICB, NMVTIS, NCIC, DMV records, or police
 * databases other than Arizona law-enforcement stolen-vehicle records.
 */
const VINCheckerPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="VIN Checker — Check if a Car Is Stolen | SafeOrStolen"
 metaDescription="Free VIN checker: decode the year, make and model, see open recalls, and check SafeOrStolen theft reports and web listings for the VIN in a few seconds."
 h1="VIN Checker: Is This Car Stolen?"
 itemType="Vehicle"
 searchType="vin"
 searchPlaceholder="Enter the 17-character VIN"
 dateModified="2026-10-07"
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
 intro: "Enter a 17-character VIN to check a car, truck, motorcycle or RV. SafeOrStolen decodes the year, make and model, lists open safety recalls, and searches its own theft reports and public web listings for the VIN. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records. Results come back in a few seconds. You get 2 free checks with a free account (no card), then $0.99 a check or $10 a month unlimited. For the full walkthrough, read <a href='/how-to-check-if-car-stolen'>how to check if a car is stolen</a>.",
 whatIs: "A VIN (Vehicle Identification Number) is the 17-character code that identifies a vehicle built since 1981. SafeOrStolen's VIN checker decodes that code so you can confirm the car in front of you is the model the VIN belongs to, lists any open safety recalls, and searches SafeOrStolen's own theft reports (filed by owners on the site) and public web results such as listings and posts that mention the VIN. It does not search NCIC, NMVTIS, DMV records or police databases outside Arizona, so treat it as one step in a used-car check, alongside a history report and a call to your local police non-emergency line.",
 howItWorks: "Type or paste the VIN. SafeOrStolen decodes it, pulls open recalls, searches its own theft reports and the public web for the VIN, and, for Arizona VINs, searches Arizona law-enforcement stolen-vehicle records, which are updated twice a day. The result reads \"reported stolen\", \"possible match\" or \"no report found in the records searched\", with every source listed. The check is saved to your account with the date, and you can add a $1.99 verification certificate, a dated record with its own link showing you checked before the sale.",
 whyCheck: "A stolen vehicle can be taken back by police and returned to its owner even after you pay for it, leaving you without the car or your money. Checking before you pay, and keeping a dated record that you checked, protects you as a buyer and lets an honest seller show the car checked clean. Not every theft is reported and no single check covers every database, so also follow the steps in our <a href='/how-to-check-if-car-stolen'>stolen car guide</a> on a big purchase.",
 benefits: [
 "Results in a few seconds: VIN decode, open recalls, SafeOrStolen theft reports and public web listings",
 "Arizona VINs also searched against Arizona law-enforcement stolen-vehicle records",
 "2 free checks with a free account, no credit card",
 "Check by VIN or license plate",
 "Every source searched is listed with the result",
 "Each check saved to your account with the date; optional $1.99 verification certificate",
 "The same account checks phones (IMEI), electronics and tools (serial), firearms and bicycles",
 "Works in any browser, or as the free installable web app at safeorstolen.com/app"
 ],
 process: [
 "Find the VIN on the dashboard (driver side, through the windshield), the driver door jamb sticker, the title and registration, and make sure they all match",
 "Enter the 17-character VIN into the SafeOrStolen checker",
 "Check that the decoded year, make and model match the car, then read the result and the list of sources searched",
 "Compare the name on the title to the seller's photo ID, and on a big purchase call your local police non-emergency line with the VIN and plate",
 "If anything shows stolen or the VINs don't match, don't pay; leave and report it to police"
 ],
 faqs: [
 {
 question: "How do I check a VIN for theft?",
 answer: "Confirm the VIN matches on the dashboard, the driver door jamb sticker and the title, then enter it at SafeOrStolen (safeorstolen.com/vin-checker). It decodes the vehicle, lists open recalls, and searches SafeOrStolen theft reports and public web listings, plus Arizona law-enforcement records for Arizona VINs. On a big purchase, also call your local police non-emergency line with the VIN."
 },
 {
 question: "What does SafeOrStolen check?",
 answer: "A SafeOrStolen VIN check decodes the year, make and model, lists open safety recalls, and searches SafeOrStolen's own theft reports and public web results for the VIN. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records. It does not search NCIC, NMVTIS, DMV records or other states' police databases."
 },
 {
 question: "Is there a free stolen vehicle check?",
 answer: "Yes. SafeOrStolen includes 2 free checks with a free account and no credit card. After that it's $0.99 for a single check or $10 a month for unlimited checks across every item type, cancel anytime. The NICB, a nonprofit, also runs a free VINCheck lookup you can use on its own site."
 },
 {
 question: "How is SafeOrStolen different from a vehicle history report?",
 answer: "Paid history reports such as Carfax and AutoCheck cover accidents, ownership and service history. SafeOrStolen is a theft check: it searches its own theft reports and public web listings for the VIN, decodes it and lists open recalls, and saves the result to your account with the date. Buyers often use both."
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
