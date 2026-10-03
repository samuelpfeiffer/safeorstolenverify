import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Stolen gun database page — rewritten Oct 2 2026 to match real capability.
 * Firearm checks search: police theft records from 34 states (theft_records table, from
 * public-records data, mostly 2010–2017 reports), live Ohio law-enforcement stolen-gun records,
 * SafeOrStolen's own reports, and an altered-serial check.
 * Owner rules: never name data suppliers; never send users to other checker sites.
 * Do not claim NCIC, ATF, insurance data, or "all 50 states".
 */
const StolenGunDatabasePage = () => {
 return (
 <ItemLandingPageTemplate
 title="Stolen Gun Database Search: Check a Gun Serial Number | SafeOrStolen"
 metaDescription="Check a gun serial number against police theft records from 34 states and live Ohio stolen-gun records, and spot altered serials. 2 free checks, no account needed."
 h1="Stolen gun database search: check a firearm serial number"
 itemType="Firearm"
 dateModified="2026-10-02"
 keywords={[
 'stolen gun database',
 'check if gun is stolen',
 'gun serial number lookup',
 'is this gun stolen',
 'stolen firearm lookup',
 'check gun serial number stolen',
 'stolen gun check by serial number',
 ]}
 content={{
 intro: "Every firearm check on SafeOrStolen searches police stolen-gun records from 34 states, more than 220,000 theft and loss reports, plus live Ohio law-enforcement stolen-gun records and SafeOrStolen's own theft reports. It also checks the serial number for signs of alteration. Here's what that covers and what no public site can search.",

 whatIs: "Most stolen-gun records sit in the FBI's national system (NCIC), which only police and licensed dealers can search. SafeOrStolen built its own multi-state database from police department records obtained through public records laws, covering 34 states including California, Florida, Texas, Arizona, Washington, North Carolina, Georgia, and Illinois. Most of those reports were filed between 2010 and 2017, so a match tells you which police department took the report, and you confirm with them before buying. Ohio's records are searched live and updated daily.",

 howItWorks: "Enter the serial number from the frame or receiver. SafeOrStolen first checks for signs of an altered or missing serial, such as all zeros or words like 'obliterated.' Then it searches police theft records from 34 states, live Ohio records, and its own reports. A stolen warning only appears on an exact serial match, and it shows the make, model, year, city, and police department so you can tell whether the record is for the same gun.",

 whyCheck: "If a gun you bought turns out to be stolen, police can take it, and you lose what you paid. Federal law makes it a crime to possess a gun you know or have reason to believe is stolen, so checking before you buy and keeping a record of the sale protects you.",

 benefits: [
 "Searches police stolen-gun records from 34 states",
 "Searches live Ohio law-enforcement stolen-gun records",
 "Shows the make, model, and police department behind any match",
 "Flags guns that were stolen and later recovered",
 "Flags altered, obliterated, or missing serial numbers",
 "2 free checks, no account needed",
 ],

 process: [
 "Find the serial number on the frame or receiver",
 "Copy it exactly, including letters and dashes",
 "Enter it into SafeOrStolen's verification tool",
 "Compare any match's make and model to the gun in front of you",
 "For a private sale, transfer through a licensed dealer (FFL) or ask local police to run the serial",
 ],

 faqs: [
 {
 question: "What stolen gun database does SafeOrStolen search?",
 answer: "SafeOrStolen searches police stolen-gun records from 34 states (more than 220,000 theft and loss reports gathered from police departments through public records), live Ohio law-enforcement stolen-gun records updated daily, and its own theft reports. It also checks the serial number itself for signs of alteration.",
 },
 {
 question: "Which states are covered?",
 answer: "The multi-state records include police reports from 34 states, with the most from California, Florida, Texas, Arizona, Washington, North Carolina, Georgia, Illinois, Kansas, Indiana, Missouri, and Nevada. Ohio is searched live. SafeOrStolen keeps adding states and newer records.",
 },
 {
 question: "Can I search the FBI's stolen gun database?",
 answer: "No. The FBI's NCIC is limited to law enforcement and licensed firearm dealers. For a private sale, transfer through a licensed dealer (FFL) or ask your local police department to run the serial.",
 },
 {
 question: "Does a clean result mean the gun isn't stolen?",
 answer: "No. No public search covers every police report in the country. A clean result means no match was found in the records searched. Keep a record of who you bought from and when.",
 },
 {
 question: "What if the gun shows up as stolen?",
 answer: "Don't buy it and don't confront the seller. Check that the make and model in the result match the gun, then contact the police department listed in the result, or your local non-emergency line, with the serial number.",
 },
 {
 question: "What if the serial number looks scratched off or altered?",
 answer: "Don't buy the firearm. An altered or removed serial number is illegal under federal law, and it's a strong sign of theft. Contact local police.",
 },
 ],
 }}
 />
 );
};

export default StolenGunDatabasePage;
