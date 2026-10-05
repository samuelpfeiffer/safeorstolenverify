import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

/**
 * Oct 5 2026: rewritten to match what the check really does. SafeOrStolen does not
 * query FLHSMV and never shows registered-owner details (the federal Driver's
 * Privacy Protection Act limits that to permitted uses). Florida's own public
 * stolen-plate and stolen-vehicle search is FDLE's Public Access System.
 */
const FloridaLicensePlateLookupPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="Florida License Plate Lookup: Check if a FL Plate or Car Is Stolen | SafeOrStolen"
 metaDescription="Check a Florida plate before you buy: search SafeOrStolen's theft reports, then Florida's free FDLE stolen plate and stolen vehicle search. What a plate check can and can't tell you."
 h1="Florida License Plate Lookup"
 itemType="Vehicle"
 keywords={[
 'florida license plate lookup',
 'FL license plate search',
 'check florida license plate stolen',
 'florida stolen vehicle plate lookup',
 'FDLE stolen plate search'
 ]}
 content={{
 intro: "Before you buy a car in Florida, check the plate and the VIN. SafeOrStolen checks a plate against its own theft reports and public web results. Florida also runs a free public search of plates and vehicles reported stolen to Florida police: the FDLE Public Access System. Use both, then check the VIN.",
 whatIs: "A license plate check looks for reports that a plate, or the vehicle it belongs to, has been stolen. In Florida, police report stolen plates and vehicles to the Florida Crime Information Center, and the Florida Department of Law Enforcement (FDLE) lets the public search those reports by plate number or VIN. A plate check cannot tell you who owns the car: registered-owner details are protected by the federal Driver's Privacy Protection Act and are not available to the public.",
 howItWorks: "Enter the plate on SafeOrStolen and we search our own stolen reports and public web results for that plate. Then search the same plate and the car's VIN in FDLE's free Public Access System, which covers reports made to Florida law enforcement. If any search shows the plate or car as stolen, don't buy it and contact police.",
 whyCheck: "Thieves swap plates between similar cars, so a plate that comes back clean only tells you about the plate. Florida-specific risks also include flood-damaged cars after hurricanes and title washing, where a car's damage history disappears when it is retitled in another state. Treat the plate check as step one, then confirm the VIN on the dashboard, door jamb and title all match, and ask the seller for the title in their name.",
 benefits: [
 "Search SafeOrStolen's own stolen reports and public web results by plate",
 "Know where to search Florida's official stolen plate and stolen vehicle records for free",
 "Spot swapped plates by comparing the plate check with the VIN check",
 "2 free checks to start"
 ],
 process: [
 "Write down the plate exactly as shown. Florida only requires a rear plate.",
 "Check the plate on SafeOrStolen.",
 "Search the plate and the VIN in FDLE's Public Access System (Stolen License Plates and Stolen Vehicles).",
 "Make sure the VIN on the dashboard, door jamb and title all match.",
 "Ask to see the title in the seller's name. Florida requires a title transfer within 30 days of a sale.",
 "If anything shows the vehicle as stolen, walk away and call the police. Don't confront the seller."
 ],
 faqs: [
 {
 question: "Can I check if a car is stolen in Florida by license plate?",
 answer: "Yes. Search the plate on SafeOrStolen and in FDLE's free Public Access System, which lists plates and vehicles reported stolen to Florida police. Because plates can be swapped between cars, also check the VIN before you buy."
 },
 {
 question: "Can a license plate lookup tell me who owns the car?",
 answer: "No. Registered-owner details are protected by the federal Driver's Privacy Protection Act, so neither SafeOrStolen nor any legitimate public site shows them. Instead, ask the seller to show the title and a photo ID with the same name."
 },
 {
 question: "What does SafeOrStolen check for a Florida plate?",
 answer: "SafeOrStolen's own theft reports and public web results for that plate. It does not search Florida DMV (FLHSMV) records. For Florida police reports, use FDLE's Public Access System."
 },
 {
 question: "Where are Florida license plates?",
 answer: "On the back of the vehicle. Florida does not require a front plate."
 },
 {
 question: "What are the Florida-specific risks when buying a used car?",
 answer: "Flood damage after hurricanes, title washing (moving a damaged car's title to another state to hide its history), and unlicensed dealers posing as private sellers. Look for water lines, rust and a musty smell, and make sure the title isn't branded salvage or flood."
 },
 {
 question: "What should I do if a plate or car shows as stolen?",
 answer: "Don't buy it and don't confront the seller. Save the listing and the seller's details, leave if you are meeting in person, and give the information to your local police."
 }
 ]
 }}
 />
 <OtherStatesModule kind="plate" currentPath="/florida-license-plate-lookup" />
 </>
 );
};

export default FloridaLicensePlateLookupPage;
