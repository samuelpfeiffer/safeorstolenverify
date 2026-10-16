import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 8 2026: audited by hand for "theftaz search". TheftAZ is the page's topic (the
 * Arizona Attorney General's public stolen-vehicle search). Do not claim SafeOrStolen
 * uses it; describe SafeOrStolen's source as "Arizona law-enforcement stolen-vehicle
 * records, updated twice a day". No off-site URLs, no NICB/NHTSA as SafeOrStolen sources.
 */
const TheftAZPage = () => {
 return (
 <ItemLandingPageTemplate
 title="TheftAZ Search: Check Arizona Stolen-Vehicle Records | SafeOrStolen"
 metaDescription="What TheftAZ is, how to search it by VIN or plate, and how SafeOrStolen checks Arizona law-enforcement stolen-vehicle records plus a VIN decode and recalls."
 h1="TheftAZ search: how to check Arizona stolen-vehicle records"
 itemType="Arizona Stolen Vehicle"
 searchType="plate"
 searchPlaceholder="Enter the plate number or VIN"
 dateModified="2026-10-07"
 keywords={[
 'theftaz',
 'theftaz search',
 'arizona stolen vehicle database',
 'arizona police stolen vehicle records',
 'arizona attorney general stolen vehicle',
 'check if car is stolen arizona',
 ]}
 content={{
 intro: "TheftAZ is the Arizona Attorney General's free public search for vehicles reported stolen to Arizona law enforcement. You search it by plate or VIN on the Attorney General's website. SafeOrStolen offers a separate check: Arizona VINs and plates are searched against Arizona law-enforcement stolen-vehicle records, updated twice a day, along with SafeOrStolen's own theft reports, public web results, a VIN decode and open safety recalls.",

 whatIs: "TheftAZ is run by the Arizona Attorney General's Office. It lists stolen vehicles reported by participating Arizona law enforcement agencies, and anyone can search it by license plate or VIN. It covers vehicles only, and only thefts reported to those Arizona agencies. A car stolen in another state may not show up.",

 howItWorks: "On SafeOrStolen, type a VIN or an Arizona plate. The check searches Arizona law-enforcement stolen-vehicle records, SafeOrStolen's own theft reports, and public web results that mention the number. For a VIN it also decodes the year, make and model and lists open safety recalls. In a few seconds you see one of three results: \"reported stolen\", \"possible match\", or \"no report found in the records searched\", with every source listed. The check is saved to your account with the date.",

 whyCheck: "Police can take back a stolen car, and the buyer usually loses what they paid. Arizona buyers also see plenty of cars driven in from other states, so an Arizona records search is a strong first step but not the only one. Before you pay, match the VIN on the dashboard to the one on the driver's door sticker and the title, and make sure the name on the title matches the seller's ID.",

 benefits: [
 "Arizona VINs and plates searched against Arizona law-enforcement stolen-vehicle records, updated twice a day",
 "Search by VIN or Arizona license plate",
 "Year, make and model decoded from the VIN",
 "Open safety recalls for the vehicle",
 "SafeOrStolen theft reports and public web results in the same check",
 "Optional $1.99 verification certificate: a dated record showing you checked before the sale",
 "2 free checks with a free account, no credit card",
 ],

 process: [
 "Get the 17-character VIN from the dashboard or the driver's door sticker, or note the Arizona plate",
 "Enter it in the SafeOrStolen search box",
 "Read the result and the list of sources searched",
 "Match the VIN on the dashboard, door sticker and title, and compare the title name to the seller's ID",
 "Save the check, or add a $1.99 certificate, before you pay",
 ],

 faqs: [
 {
 question: "What is TheftAZ?",
 answer: "TheftAZ is the Arizona Attorney General's free stolen-vehicle search. It lists vehicles reported stolen by participating Arizona law enforcement agencies, and you can search it by license plate or VIN on the Attorney General's website. It covers vehicles only, not guns, phones or other property.",
 },
 {
 question: "How does SafeOrStolen check Arizona cars?",
 answer: "SafeOrStolen (safeorstolen.com/theftaz) searches Arizona VINs and plates against Arizona law-enforcement stolen-vehicle records, updated twice a day, plus its own theft reports and public web results. A VIN check also decodes the year, make and model and lists open safety recalls. You get 2 free checks with a free account.",
 },
 {
 question: "Can I check guns, phones or bikes in Arizona the same way?",
 answer: "Arizona's public stolen-vehicle search covers vehicles only. SafeOrStolen checks other items with different sources: gun checks search police firearm theft and loss reports from 33 states and Washington, DC, and live Ohio records; bike checks search a national stolen-bicycle registry; phone checks read the make and model from the IMEI.",
 },
 {
 question: "If no Arizona record shows up, is the car safe to buy?",
 answer: "Not by itself. Arizona records only include thefts reported to participating Arizona agencies, so a car stolen in another state may not appear. Match the VIN on the dashboard, door sticker and title, make sure the title name matches the seller's ID, and look for signs of a swapped VIN such as scratched rivets or a relabeled sticker.",
 },
 {
 question: "Can I still search TheftAZ directly?",
 answer: "Yes. TheftAZ is free on the Arizona Attorney General's website. SafeOrStolen is a separate service that adds a VIN decode, recalls, its own theft reports and public web results, and saves each check to your account with the date.",
 },
 {
 question: "What should I do if a car shows up as stolen?",
 answer: "Don't buy it, and don't confront the seller. Walk away, then call your local police non-emergency line with the VIN or plate and where you saw the car. Let law enforcement handle the recovery.",
 },
 ],
 }}
 />
 );
};

export default TheftAZPage;
