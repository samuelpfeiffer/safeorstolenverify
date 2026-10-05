import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * TheftAZ page — rewritten Sept 28 2026 to match what SafeOrStolen actually does.
 * Facts: every VIN check and Arizona plate check searches TheftAZ (Arizona Attorney
 * General; records from participating Arizona law enforcement agencies, updated twice
 * daily). The public TheftAZ search covers VEHICLES ONLY (by plate or VIN).
 * Do not add firearms, electronics, NCIC, NICB, or "50 state" claims.
 */
const TheftAZPage = () => {
 return (
 <ItemLandingPageTemplate
 title="TheftAZ Search: Arizona Police Stolen-Vehicle Records | SafeOrStolen"
 metaDescription="Search Arizona police stolen-vehicle records (TheftAZ) by VIN or plate, plus a VIN decode, safety recalls, and a guided buyer's check. 2 free checks."
 h1="TheftAZ search: check Arizona police stolen-vehicle records"
 itemType="Arizona Stolen Vehicle"
 searchType="plate"
 searchPlaceholder="Enter the plate number or VIN"
 dateModified="2026-09-28"
 keywords={[
 'theftaz',
 'theftaz.azag.gov',
 'theftaz search',
 'arizona stolen vehicle database',
 'arizona police stolen vehicle records',
 'arizona attorney general stolen vehicle',
 'check if car is stolen arizona',
 ]}
 content={{
 intro: "Every VIN and Arizona plate you check on SafeOrStolen is searched against TheftAZ, the Arizona Attorney General's database of stolen vehicles reported by Arizona law enforcement agencies. In the same search you get the car's year, make, and model from the U.S. government's VIN decoder, its safety recalls, and a step-by-step buyer's check you can save as a record.",

 whatIs: "TheftAZ (theftaz.azag.gov) is run by the Arizona Attorney General's Office. It holds stolen-vehicle records from participating Arizona law enforcement agencies and is updated twice a day. Anyone can search it by license plate or VIN. It covers vehicles only, and only thefts reported to participating Arizona agencies.",

 howItWorks: "Enter a VIN or an Arizona plate. SafeOrStolen checks that a VIN is real using its built-in check digit, searches TheftAZ for a matching stolen-vehicle record, decodes the VIN through NHTSA (the U.S. Department of Transportation), and pulls safety recalls for that model. If TheftAZ lists the vehicle, you see a clear stolen warning. If it doesn't, we tell you exactly that, and the Buyer's Check walks you through the free nationwide NICB check, the door-sticker VIN match, and comparing the title to the seller's ID.",

 whyCheck: "A stolen car can be taken back by police, and the buyer loses what they paid. Arizona buyers also see vehicles driven in from other states. That's why a TheftAZ search is a strong first step but not the only one: it covers Arizona reports, so pair it with the free nationwide NICB check and a title check before you pay.",

 benefits: [
 "Searches Arizona police stolen-vehicle records (TheftAZ) automatically",
 "Search by VIN or Arizona license plate",
 "VIN check-digit test catches mistyped and altered VINs",
 "Year, make, and model from the U.S. government VIN decoder",
 "Safety recalls for the model, with a link to check the exact car",
 "Guided Buyer's Check, including the free nationwide NICB check",
 "Save a Proof of Clean Purchase when every step checks out",
 "2 free checks with a free account",
 ],

 process: [
 "Get the 17-character VIN from the dashboard or the Arizona plate number",
 "Enter it into SafeOrStolen's verification tool",
 "We search TheftAZ and decode the VIN in one step",
 "Follow the Buyer's Check: NICB, door-sticker VIN, and title versus seller ID",
 "Save your Proof of Clean Purchase before you pay",
 ],

 faqs: [
 {
 question: "What is TheftAZ?",
 answer: "TheftAZ (theftaz.azag.gov) is the Arizona Attorney General's stolen-vehicle search. It contains records from participating Arizona law enforcement agencies and is updated twice a day. You can search it by license plate or VIN.",
 },
 {
 question: "Does SafeOrStolen search TheftAZ?",
 answer: "Yes. Every VIN check and every Arizona plate check on SafeOrStolen searches TheftAZ automatically. If the vehicle is listed, you'll see a stolen warning with the source named.",
 },
 {
 question: "Does TheftAZ cover guns, phones, or other property?",
 answer: "No. The public TheftAZ search covers vehicles only, by plate or VIN. For phones, bikes, firearms, and serial-numbered items, SafeOrStolen uses other sources, such as the BikeIndex stolen bike registry for bicycles.",
 },
 {
 question: "If TheftAZ shows no record, is the car safe to buy?",
 answer: "Not by itself. TheftAZ only includes thefts reported to participating Arizona agencies, so a car stolen in another state may not appear. Run the free NICB VINCheck for a nationwide theft and salvage check, match the VIN on the door sticker to the dashboard, and make sure the name on the title matches the seller's ID. SafeOrStolen's Buyer's Check walks you through all of it.",
 },
 {
 question: "Can I still search TheftAZ directly?",
 answer: "Yes. TheftAZ is free at theftaz.azag.gov. SafeOrStolen runs the same search for you and adds the VIN decode, recalls, and a saved record of your checks in one place.",
 },
 {
 question: "What should I do if a car shows up as stolen?",
 answer: "Don't buy it, and don't confront the seller. Contact your local police non-emergency line with the VIN or plate. The Arizona Attorney General's Office and reporting agencies recommend leaving it to law enforcement.",
 },
 ],
 }}
 />
 );
};

export default TheftAZPage;
