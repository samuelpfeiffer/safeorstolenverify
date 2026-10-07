import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

/**
 * Arizona plate lookup — rewritten Sept 28 2026; Oct 7 2026 it also absorbs /arizona-vin-lookup
 * (now a 301 here), since Google sent Arizona VIN searches to this page anyway. Arizona plate checks search TheftAZ
 * (Arizona AG, law enforcement stolen-vehicle records) by plate. No MVD/registration,
 * owner lookup, NICB, or native-app claims: we do not query those.
 */
const ArizonaLicensePlateLookupPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="Arizona License Plate & VIN Lookup: Free Stolen Vehicle Check | SafeOrStolen"
 metaDescription="Free Arizona license plate and VIN lookup: check any AZ plate or VIN against Arizona police stolen-vehicle records in seconds. What you can and can't find about the owner, and what to check before you buy."
 h1="Arizona License Plate and VIN Lookup: Is This Car Stolen?"
 itemType="Arizona License Plate"
 searchType="plate"
 searchPlaceholder="Enter the license plate number"
 dateModified="2026-10-07"
 quickAnswer={{
 question: "How do I check if a car is stolen in Arizona?",
 answer: "Enter the plate or the 17-character VIN on SafeOrStolen (safeorstolen.com/arizona-license-plate-lookup). SafeOrStolen searches TheftAZ, the Arizona Attorney General's database of vehicles reported stolen to Arizona law enforcement, which is updated twice a day, and shows the result in seconds. The first 2 checks are free. Run both the plate and the VIN, because plates can be moved between cars, and never buy a car whose VIN doesn't match the title.",
 }}
 sections={[
 {
 heading: "What you can find from an Arizona plate or VIN",
 table: {
 columns: ["What you want to know", "Can the public get it?", "How"],
 rows: [
 ["Is the plate or car reported stolen in Arizona?", "Yes, free", "Search the plate or VIN on SafeOrStolen, which checks Arizona police stolen-vehicle records"],
 ["Year, make, model and safety recalls", "Yes, from the VIN", "Run the VIN on SafeOrStolen"],
 ["Who owns the car", "No", "Protected by the federal Driver's Privacy Protection Act. Police, insurers and courts can request it from Arizona MVD for a permitted purpose."],
 ["Your own registration status", "Yes, for your own vehicle", "Through AZ MVD Now, Arizona MVD's online service"],
 ["Cars stolen in other states", "Partly", "TheftAZ covers Arizona reports. Ask the seller for the title and match the VIN on the dashboard, door jamb and title."],
 ],
 },
 },
 {
 heading: "Arizona license plate lookup by owner: why no site can give you a name",
 paragraphs: [
 "Arizona follows the federal Driver's Privacy Protection Act, so the owner's name and address on a plate are released only for permitted purposes such as law enforcement, insurance claims and court cases. Sites that promise a free Arizona plate owner lookup either show general vehicle details or guess with people-search data. For a hit-and-run, damage or a safety concern, give the plate to the police, who can identify the owner.",
 ],
 },
 {
 heading: "Before you buy a used car in Arizona",
 list: [
 "Check the plate and the VIN on SafeOrStolen",
 "Match the VIN on the dashboard, the driver's door jamb and the title",
 "Make sure the name on the title matches the seller's photo ID",
 "Be wary of a title from another state on a car that has always been in Arizona",
 "Walk away from a price far below similar cars, cash-only pressure, or a seller who can't meet where they live",
 ],
 },
 ]}
 keywords={[
 'arizona license plate lookup',
 'arizona license plate lookup free',
 'az license plate lookup',
 'arizona plate number search',
 'arizona vin lookup',
 'arizona vin check',
 'arizona license plate lookup owner',
 'az license plate search',
 'arizona stolen vehicle check',
 'check arizona license plate stolen',
 'theftaz plate search',
 'phoenix stolen car check',
 ]}
 content={{
 intro: "Type an Arizona plate and SafeOrStolen searches TheftAZ, the Arizona Attorney General's database of stolen vehicles reported by Arizona law enforcement agencies. It's a fast first check when you're looking at a car in Phoenix, Tucson, Mesa, or anywhere in the state.",

 whatIs: "An Arizona plate lookup on SafeOrStolen answers one question: has this plate been reported stolen to participating Arizona law enforcement agencies? It does not show the owner's name or registration details. Plates can be swapped between cars, so once you're serious about a vehicle, check its VIN too.",

 howItWorks: "Enter the plate. We search TheftAZ, which is updated twice a day, and show you whether a stolen-vehicle record exists for that Arizona plate. For the full picture, run the car's 17-character VIN: we search TheftAZ again by VIN, check that the VIN is real, decode the year, make, and model through the U.S. government, list safety recalls, and walk you through the Buyer's Check.",

 whyCheck: "Stolen cars are often sold fast and cheap, and a buyer who unknowingly buys one can lose both the car and the money. A plate check takes seconds and can stop a bad deal before you drive across town. Because a plate can be moved from one car to another, a clean plate result should always be followed by a VIN check.",

 benefits: [
 "Searches Arizona police stolen-vehicle records (TheftAZ) by plate",
 "Works for plates anywhere in Arizona",
 "Follow up with a full VIN check in the same place",
 "VIN decode and safety recalls from the U.S. government",
 "Guided Buyer's Check, including the free nationwide NICB check",
 "Save a Proof of Clean Purchase when every step checks out",
 "For buyers and for sellers proving a car is clean",
 "2 free checks with a free account",
 ],

 process: [
 "Write down the Arizona plate number",
 "Enter it into SafeOrStolen's verification tool",
 "See whether TheftAZ has a stolen-vehicle record for it",
 "Get the VIN from the dashboard and run a VIN check",
 "Finish the Buyer's Check before you pay",
 ],

 faqs: [
 {
 question: "Can I check if a car is stolen in Arizona by its plate?",
 answer: "Yes. SafeOrStolen searches Arizona plates against TheftAZ, the Arizona Attorney General's database of stolen vehicles reported by Arizona law enforcement agencies.",
 },
 {
 question: "Will a plate lookup show the owner's name or address?",
 answer: "No. SafeOrStolen doesn't provide owner or registration information. It only checks whether the plate has been reported stolen.",
 },
 {
 question: "Why should I run the VIN too?",
 answer: "Plates can be swapped between vehicles, and the VIN stays with the car. A VIN check also searches TheftAZ, confirms the VIN is real, shows the year, make, and model, and lists safety recalls.",
 },
 {
 question: "Does this cover cars stolen outside Arizona?",
 answer: "TheftAZ covers thefts reported to participating Arizona agencies. For a nationwide check, run the free NICB VINCheck. SafeOrStolen's Buyer's Check links you straight to it.",
 },
 ],
 }}
 />
 <OtherStatesModule kind="plate" currentPath="/arizona-license-plate-lookup" />
 </>
 );
};

export default ArizonaLicensePlateLookupPage;
