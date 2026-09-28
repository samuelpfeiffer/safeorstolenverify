import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

/**
 * Arizona plate lookup — rewritten Sept 28 2026. Arizona plate checks search TheftAZ
 * (Arizona AG, law enforcement stolen-vehicle records) by plate. No MVD/registration,
 * owner lookup, NICB, or native-app claims: we do not query those.
 */
const ArizonaLicensePlateLookupPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="Arizona License Plate Lookup: Is This Car Stolen? | SafeOrStolen"
 metaDescription="Check any Arizona plate against Arizona police stolen-vehicle records (TheftAZ). Then run the VIN for a decode, recalls, and a guided buyer's check. 2 free checks."
 h1="Arizona license plate lookup: check a plate against police stolen-vehicle records"
 itemType="Arizona License Plate"
 dateModified="2026-09-28"
 keywords={[
 'arizona license plate lookup',
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
