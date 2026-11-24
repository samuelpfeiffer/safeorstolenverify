import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';
import { GUN_STATES, GUN_NATIONAL, GUN_STATS_AS_OF } from '@/data/gunTheftStats';

const fmt = (n: number) => n.toLocaleString('en-US');
const stateRows = [...GUN_STATES]
 .sort((a, b) => b.total - a.total)
 .map((s) => [s.name, fmt(s.total), s.years || 'Not listed']);

/**
 * Stolen gun database page — rewritten Oct 2 2026 to match real capability.
 * Firearm checks search: police theft records from 34 states (theft_records table, from
 * public-records data, mostly 2010–2017 reports), live Ohio law-enforcement stolen-gun records,
 * SafeOrStolen's own reports, and an altered-serial check.
 * Owner rules: never name data suppliers; never send users to other checker sites.
 */
const StolenGunDatabasePage = () => {
 return (
 <ItemLandingPageTemplate
 title="Stolen Gun Database Search: Check a Gun Serial Number | SafeOrStolen"
 metaDescription="Check a gun serial number against police theft records from 33 states and DC and live Ohio stolen-gun records, and spot altered serials. 1 free check, no account needed."
 h1="Stolen gun database search: check a firearm serial number"
 itemType="Firearm"
 searchType="firearm"
 searchPlaceholder="Enter the gun's serial number"
 dateModified="2026-11-24"
 quickAnswer={{
 question: "Is there a stolen gun database the public can search?",
 answer: `Yes. SafeOrStolen lets private citizens search a gun's serial number against ${fmt(GUN_NATIONAL.total)} police theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement stolen-gun records and SafeOrStolen's own theft reports. Enter the serial from the frame or receiver; the first check is free. NCIC, the FBI's national file, can only be searched by police and licensed dealers.`,
 }}
 sections={[
 {
 heading: "Stolen gun database coverage by state",
 paragraphs: [
 `Police theft and loss reports in SafeOrStolen's stolen gun database, by state (counted ${GUN_STATS_AS_OF}). Most reports were filed between 2010 and 2017. Ohio is also searched live. States not listed have no police reports in these records yet; a check still searches SafeOrStolen's own theft reports.`,
 ],
 table: { columns: ['State', 'Police reports', 'Report years'], rows: stateRows },
 },
 {
 heading: "Where to find a gun's serial number",
 list: [
 "On a handgun: usually on the frame, often on the side or under the barrel near the trigger guard",
 "On a rifle or shotgun: usually on the receiver",
 "Copy it exactly, including letters, dashes and leading zeros",
 "If the serial looks scratched, ground off or altered, don't buy the gun and contact local police",
 ],
 },
 ]}
 keywords={[
 'stolen gun database',
 'national stolen gun database',
 'stolen gun search',
 'stolen gun database search',
 'check if gun is stolen',
 'gun serial number lookup',
 'is this gun stolen',
 'stolen firearm lookup',
 'check gun serial number stolen',
 'stolen gun check by serial number',
 ]}
 content={{
 intro: "Every firearm check on SafeOrStolen searches police stolen-gun records from 33 states and Washington, DC, more than 220,000 theft and loss reports, plus live Ohio law-enforcement stolen-gun records and SafeOrStolen's own theft reports. It also checks the serial number for signs of alteration. Here's what that covers and what no public site can search.",

 whatIs: "SafeOrStolen searches police department theft and loss reports from 33 states and DC, including California, Florida, Texas, Arizona, Washington, North Carolina, Georgia, and Illinois. Most reports were filed between 2010 and 2017. A match names the police department. Ohio records are searched live. For a serial lookup by itself, use the <a href=\"/firearms-check\">free gun serial number lookup</a>.",

 howItWorks: "Enter the serial number from the frame or receiver. SafeOrStolen first checks for signs of an altered or missing serial, such as all zeros or words like 'obliterated.' Then it searches police theft records from 33 states and DC, live Ohio records, and its own reports. A stolen warning only appears on an exact serial match, and it shows the make, model, year, city, and police department so you can tell whether the record is for the same gun.",

 whyCheck: "If a gun you bought turns out to be stolen, police can take it, and you lose what you paid. Federal law makes it a crime to possess a gun you know or have reason to believe is stolen, so checking before you buy and keeping a record of the sale protects you.",

 benefits: [
 "Searches police stolen-gun records from 33 states and DC",
 "Searches live Ohio law-enforcement stolen-gun records",
 "Shows the make, model, and police department behind any match",
 "Flags guns that were stolen and later recovered",
 "Flags altered, obliterated, or missing serial numbers",
 "1 free check, no account needed",
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
 answer: "SafeOrStolen searches police stolen-gun records from 33 states and Washington, DC (more than 220,000 theft and loss reports from police departments), live Ohio law-enforcement stolen-gun records updated daily, and its own theft reports. It also checks the serial number itself for signs of alteration.",
 },
 {
 question: "Which states are covered?",
 answer: "The multi-state records include police reports from 33 states and Washington, DC, with the most from California, Florida, Texas, Arizona, Washington, North Carolina, Georgia, Illinois, Kansas, Indiana, Missouri, and Nevada. Ohio is searched live. SafeOrStolen keeps adding states and newer records.",
 },
 {
 question: "How does a SafeOrStolen gun check relate to NCIC?",
  answer: "A check searches those police reports from 33 states and DC plus live Ohio records. Police and licensed dealers can also run a serial through NCIC.",
  },
  {
  question: "Does a clean result mean the gun isn't stolen?",
 answer: "A clean result means no theft report was found in the records searched, which is a good sign. Not every theft gets reported, so also keep a record of who you bought from and when.",
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
