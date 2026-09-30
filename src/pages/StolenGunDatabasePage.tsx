import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Stolen gun database page — rewritten Sept 28 2026 to match real capability.
 * Firearm checks search the Ohio Attorney General's stolen gun database (Ohio law
 * enforcement records via LEADS) automatically, and flag altered/obliterated serials.
 * Florida FDLE's stolen gun search requires a captcha, so we only LINK to it.
 * Do not claim NCIC, ATF, insurance, TheftAZ (vehicles only), or "all 50 states".
 */
const StolenGunDatabasePage = () => {
 return (
 <ItemLandingPageTemplate
 title="Stolen Gun Database Search: Check a Serial Free | SafeOrStolen"
 metaDescription="Check a gun serial against Ohio police stolen-gun records and spot altered serials. Learn which state stolen gun searches are public. 2 free checks."
 h1="Stolen gun database search: check a firearm serial number"
 itemType="Firearm"
 dateModified="2026-09-28"
 keywords={[
 'stolen gun database',
 'check if gun is stolen',
 'gun serial number lookup',
 'ohio stolen gun database',
 'florida stolen gun search',
 'stolen firearm lookup',
 'check gun serial number stolen',
 ]}
 content={{
 intro: "Every firearm check on SafeOrStolen searches the Ohio Attorney General's stolen gun database, which holds guns reported stolen by Ohio law enforcement agencies, and checks the serial for signs of alteration. Here's what that covers, what no public site can search, and how to protect yourself in a private sale.",

 whatIs: "Most stolen-gun records sit in the FBI's national system (NCIC), which only police and licensed dealers can search. A few states publish their own police stolen-gun records for the public. Ohio's Attorney General runs one, updated every 24 hours from the state's law enforcement network (LEADS). Florida's Department of Law Enforcement runs another, which you search yourself at its site.",

 howItWorks: "Enter the serial number from the frame or receiver. SafeOrStolen first checks for signs of an altered or missing serial, such as all zeros or words like 'obliterated.' Then it searches Ohio's stolen gun database. You only see a stolen warning when Ohio lists that exact serial number. A similar but not exact serial is shown as a possible match, never as a theft report.",

 whyCheck: "If a gun you bought turns out to be stolen, police can take it, and you lose what you paid. Federal law makes it a crime to possess a gun you know or have reason to believe is stolen, so checking before you buy and keeping a record of the sale protects you. Because no public search covers every state, the safest private purchase goes through a licensed dealer (FFL), and you can also ask local police to run the serial.",

 benefits: [
 "Searches Ohio police stolen-gun records automatically",
 "Flags altered, obliterated, or missing serial numbers",
 "Stolen warning only on an exact serial match",
 "Clear next steps when a gun isn't in the Ohio records",
 "Link to Florida's free stolen gun search (FDLE)",
 "2 free checks with a free account",
 ],

 process: [
 "Find the serial number on the frame or receiver",
 "Copy it exactly, including letters and dashes",
 "Enter it into SafeOrStolen's verification tool",
 "Review the Ohio records result and the serial check",
 "For a private sale, transfer through a licensed dealer (FFL) or ask local police to run the serial",
 ],

 faqs: [
 {
 question: "What stolen gun database does SafeOrStolen search?",
 answer: "The Ohio Attorney General's stolen gun database, which contains guns reported stolen by Ohio law enforcement agencies through the state's LEADS network and is updated every 24 hours. SafeOrStolen also checks the serial number itself for signs of alteration.",
 },
 {
 question: "Can I search the FBI's stolen gun database?",
 answer: "No. The FBI's NCIC is limited to law enforcement and licensed firearm dealers. Ask your local police department to run the serial, or complete the sale through a licensed dealer (FFL).",
 },
 {
 question: "Does a clean result mean the gun isn't stolen?",
 answer: "No. The Ohio search only covers guns reported to Ohio agencies. A gun stolen in another state won't appear. Treat a clean result as one check, not a guarantee, and keep a record of who you bought from.",
 },
 {
 question: "Which states have a public stolen gun search?",
 answer: "Ohio (ohioattorneygeneral.gov/stolengun) and Florida (FDLE's Public Access System) both publish police stolen-gun records for the public. SafeOrStolen searches Ohio automatically. Florida's search requires you to complete a captcha, so we link you to it.",
 },
 {
 question: "What if the serial number looks scratched off or altered?",
 answer: "Don't buy the firearm. An altered or removed serial number is illegal under federal law, and it's a strong sign of theft. Contact local police.",
 },
 {
 question: "What if the gun shows up as stolen?",
 answer: "Don't buy it and don't confront the seller. Contact the reporting agency listed in the result, or your local police non-emergency line, with the serial number.",
 },
 ],
 }}
 />
 );
};

export default StolenGunDatabasePage;
