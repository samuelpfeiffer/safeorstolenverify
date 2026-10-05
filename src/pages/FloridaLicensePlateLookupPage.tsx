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
 title="Florida License Plate Lookup: Owner, Tag Status & Stolen Check (Free) | SafeOrStolen"
 metaDescription="Florida license plate lookup, free: check if a FL plate or car is stolen, what you can legally find about the owner, how to check tag and registration status, and who to call in Jacksonville, Miami, Tampa, Destin and more."
 h1="Florida License Plate Lookup: Owner, Tag Status and Stolen Check"
 itemType="Vehicle"
 searchType="plate"
 searchPlaceholder="Enter the license plate number"
 dateModified="2026-10-05"
 quickAnswer={{
 question: "Can I look up who owns a Florida license plate?",
 answer: "Not as a member of the public. Florida follows the federal Driver's Privacy Protection Act, so the state releases a plate owner's name and address only for permitted purposes such as law enforcement, insurance claims and court cases, and free sites that promise an owner's name can't get it from the state. What you can do is check whether the plate or car is reported stolen on SafeOrStolen (safeorstolen.com/florida-license-plate-lookup), and give the plate to the police for a hit-and-run, an abandoned car or a safety concern. Our license plate owner lookup guide explains every option."
 }}
 keywords={[
 'florida license plate lookup owner',
 'florida license plate lookup owner free',
 'florida license plate lookup',
 'jacksonville florida license plate lookup owner',
 'destin florida license plate lookup owner',
 'license plate search in miami fl',
 'check florida tag status',
 'car registration lookup florida',
 'FL license plate search',
 'check florida license plate stolen',
 'florida stolen vehicle plate lookup',
 'FDLE stolen plate search'
 ]}
 sections={[
 {
 heading: "What you can find from a Florida license plate",
 paragraphs: [
 "Florida plate records are split between what anyone can check and what only police, insurers and courts can see. Here is what a member of the public can get, and where."
 ],
 table: {
 columns: ["What you want to know", "Can the public get it?", "How"],
 rows: [
 ["Who owns the car (name and address)", "No", "Protected by the federal Driver's Privacy Protection Act. Police, insurers handling a claim and parties to a court case can request it from the state with a permitted purpose."],
 ["Whether the plate or car is reported stolen", "Yes, free", "Check the plate on SafeOrStolen, then search the plate and VIN in FDLE's free Public Access System."],
 ["Year, make and model", "Yes, from the VIN", "Ask the seller for the VIN and run a VIN check. Plates can be swapped between cars, so the VIN is the reliable identifier."],
 ["Your own tag or registration status", "Yes, for your own vehicle", "Through the FLHSMV MyDMV Portal or your county tax collector's office, which handles Florida registrations."],
 ["Title history and brands (salvage, flood)", "Yes, by VIN", "Florida title records are searched by VIN, not by plate. Ask for the VIN and check the title before you buy."]
 ]
 }
 },
 {
 heading: "License plate lookup in Florida cities",
 paragraphs: [
 "The rules are the same in every Florida city: no public owner lookup, a free stolen check, and police who can identify the owner when there is a reason to. What changes from city to city is who you call. Use the non-emergency line for a parked or abandoned car, and 911 for anything happening right now."
 ],
 table: {
 columns: ["City", "Who to contact about a plate"],
 rows: [
 ["Jacksonville", "Jacksonville Sheriff's Office"],
 ["Miami", "City of Miami Police Department (Miami-Dade Sheriff's Office outside city limits)"],
 ["Tampa", "Tampa Police Department"],
 ["Orlando", "Orlando Police Department"],
 ["Destin", "Okaloosa County Sheriff's Office, which polices Destin"],
 ["Clearwater", "Clearwater Police Department"],
 ["Crystal Springs", "Pasco Sheriff's Office"],
 ["Anywhere else in Florida", "Your city police department or county sheriff's office"]
 ]
 }
 },
 {
 heading: "Why sites that promise a Florida plate owner's name can't deliver",
 paragraphs: [
 "Sites that advertise a 'Florida license plate lookup owner' service either show general vehicle details or run a people-search on whatever name they can match, which is often wrong or out of date. None of them can legally pull the registered owner from Florida's records for a general member of the public. If you need the owner for a hit-and-run, damage to your car or a safety concern, the police can identify them, and your insurer can work through the claim."
 ]
 }
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
 question: "Is there a free Florida license plate lookup?",
 answer: "Yes, for stolen checks. Check the plate on SafeOrStolen (safeorstolen.com/florida-license-plate-lookup) and in FDLE's free Public Access System, which lists plates and vehicles reported stolen to Florida police. There is no free public lookup of a Florida plate's owner."
 },
 {
 question: "How do I check my Florida tag or registration status?",
 answer: "For your own vehicle, use the FLHSMV MyDMV Portal or visit your county tax collector's office, which handles registrations in Florida. Have your plate number, VIN or driver license number ready."
 },
 {
 question: "Can police look up a Florida license plate owner?",
 answer: "Yes. Police can identify a plate's registered owner as part of their work. Report a hit-and-run, an abandoned car or a safety concern to your local police or sheriff's office with the plate number."
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
