import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "check if item is stolen" / "stolen item checker". This is the
 * general tool page: one box for any IMEI, VIN, plate or serial. It also carries the brand search
 * ("safeorstolen", 107 impressions at position 1.1). How the sources work is explained at
 * /how-it-works, prices at /pricing, and the buyer's step-by-step at /how-to-verify-a-used-item.
 * Removed: "AI-powered", "AI analysis" as a source, "instant 3-second results", the "34 states"
 * gun figure (it is 33 states plus DC), claims to check jewelry, appliances and boats as if they
 * had special sources, and "only buy if the report shows CLEAN" (a no-match is not proof).
 */
const CheckIfStolenPage = () => {
 return (
 <ItemLandingPageTemplate
 title="Check If an Item Is Stolen: Stolen Item Checker | SafeOrStolen"
 metaDescription="Check if an item is stolen by IMEI, VIN, plate or serial number. One stolen item checker for phones, cars, guns, bikes, laptops and tools. 2 free checks."
 h1="Check If an Item Is Stolen"
 itemType="Stolen Item"
 dateModified="2026-10-07"
 searchPlaceholder="Enter an IMEI, VIN, plate or serial number"
 keywords={[
 'check if item is stolen',
 'stolen item checker',
 'check if stolen',
 'how to check if something is stolen',
 'is this item stolen',
 'stolen property check',
 'stolen goods checker',
 'free stolen check',
 'safeorstolen',
 'safe or stolen',
 ]}
 quickAnswer={{
 question: 'How do I check if an item is stolen?',
 answer:
 "Find the item's unique number: the IMEI on a phone (dial *#06#), the VIN on a car's dashboard, or the serial number on a laptop, bike, tool or gun. Type it into SafeOrStolen (safeorstolen.com/check-if-stolen). In a few seconds it searches theft reports and public web results, plus police records for guns and a stolen-bike registry for bikes, and tells you if the item is reported stolen. The first 2 checks are free.",
 }}
 sections={[
 {
 heading: 'Which number to enter for each item',
 paragraphs: [
 'Every check starts with a number that belongs to one specific item. A brand and model name is not enough, because thousands of identical items exist. Get the number off the item itself, not from the listing text.',
 ],
 table: {
 columns: ['Item', 'Number to enter', 'Quickest place to find it'],
 rows: [
 ['Phone or tablet with cellular', 'IMEI (15 digits)', 'Dial *#06#, or Settings > General > About on an iPhone'],
 ['Car, truck or motorcycle', 'VIN (17 characters)', 'Bottom of the windshield on the driver\'s side, or the driver\'s door jamb'],
 ['Any vehicle you can only see in a photo', 'License plate', 'The listing photos'],
 ['Gun', 'Serial number', 'Stamped on the frame or receiver'],
 ['Bike or e-bike', 'Frame serial number', 'Under the bottom bracket, where the pedal cranks meet the frame'],
 ['Laptop, console, camera, tool, watch', 'Serial number', 'Label on the bottom or back, the Settings or About screen, or the nameplate'],
 ],
 },
 },
 {
 heading: 'What the stolen item checker searches',
 paragraphs: [
 'Every check searches SafeOrStolen theft reports, which owners file on the site, and public web results such as listings and posts that mention the number. Some items get more: gun checks add 242,839 police firearm theft and loss reports from 33 states and Washington, DC and live Ohio records; bike checks add a national stolen-bicycle registry; VIN checks decode the vehicle and list open recalls, and Arizona VINs and plates are searched against Arizona law-enforcement records; phone checks show the make and model, with a carrier blacklist search on paid checks.',
 'It does not search NCIC, any DMV, Apple or Google account locks, or pawn and insurance databases. The full breakdown is on how it works.',
 ],
 },
 {
 heading: 'Signs an item is stolen, whatever it is',
 list: [
 'The serial number or IMEI label is scratched off, sanded, painted over or covered with a sticker',
 "The seller won't send a photo of the number before you meet, or sends a photo of a different item",
 'The number on the item doesn\'t match the one in the listing or the photo',
 'A phone, laptop or tablet still signed in to someone else\'s account that the seller can\'t remove',
 'Several new or nearly new items of the same kind, no receipts, cash only, today only',
 'A price far below what the same thing sells for used, with a story to explain it',
 ],
 },
 {
 heading: 'What a no-match result means',
 paragraphs: [
 '"No report found in the records searched" means the number did not match anything in the sources listed. It isn\'t proof the item is clean: many owners never write their serial numbers down, and a theft from yesterday may not be reported yet. Use it alongside the warning signs above, not instead of them.',
 ],
 },
 ]}
 content={{
 intro:
 'Check if an item is stolen before you buy it. Enter the IMEI, VIN, plate or serial number and see in a few seconds whether it has been reported stolen.',
 whatIs:
 'A stolen item check looks up one specific item by its unique number and tells you whether that number appears in theft records. It is the only way to connect an item in front of you to a theft report, because owners report the IMEI, VIN or serial number to the police and to registries, not a description.',
 howItWorks:
 'Type the number into the box. SafeOrStolen works out whether it is an IMEI, VIN, plate or serial, searches every source that applies to that item, and shows "reported stolen", "possible match" or "no report found in the records searched", with each source listed. The check is saved to your account with the date.',
 whyCheck:
 'If you buy something that turns out to be stolen, police can take it back for the owner and you lose what you paid. Stolen phones can be blacklisted so they won\'t work on a network. A check takes a few seconds, costs nothing for your first 2, and gives you a dated record that you looked before you paid.',
 benefits: [
 'One search box for phones, vehicles, plates, guns, bikes and anything with a serial number',
 'Gun checks include police theft and loss reports from 33 states and Washington, DC',
 'Bike checks include a national stolen-bicycle registry',
 'Every source searched is listed on the result',
 'Each check saved to your account with the date',
 '2 free checks with a free account, no credit card',
 ],
 process: [
 'Ask the seller for a photo of the IMEI, VIN or serial number on the item before you agree to meet.',
 'Enter the number in the box above and read the result and the sources searched.',
 'When you meet, find the number on the item and make sure it matches the photo.',
 'For phones, tablets and laptops, have the seller sign out of their account and reset the device in front of you.',
 "If the result says reported stolen, or the number has been tampered with, don't buy it. Keep the listing and tell your local police.",
 ],
 faqs: [
 {
 question: 'Is there a free way to check if something is stolen?',
 answer:
 'Yes. SafeOrStolen (safeorstolen.com/check-if-stolen) gives you 2 free checks with a free account and no credit card. Each one searches SafeOrStolen theft reports and public web results, plus police gun records for firearms and a stolen-bicycle registry for bikes. After that, a single check is $0.99 or unlimited checks are $10 a month.',
 },
 {
 question: 'Can I check if something is stolen by serial number?',
 answer:
 'Yes. Any item with a serial number can be checked: laptops, game consoles, cameras, power tools, bikes, guns and more. The serial is usually on a label on the bottom or back, on a stamped nameplate, or in the Settings or About screen. Enter it exactly as printed, including letters, and check the photo the seller sent against the item when you meet.',
 },
 {
 question: 'Is there a national database of stolen property I can search?',
 answer:
 'No single public one exists. The FBI\'s NCIC holds police stolen-property records, but only law enforcement can search it. Thefts end up spread across local police reports, state systems and private registries. A stolen item checker like SafeOrStolen searches the sources open to it, lists them on the result, and tells you plainly what it did not search.',
 },
 {
 question: 'What should I do if an item comes back reported stolen?',
 answer:
 "Don't buy it and don't confront the seller. Leave politely, keep screenshots of the listing, the seller's profile and your messages, and give them to your local police on their non-emergency line. If you already bought the item, contact the police yourself with your receipt and messages. Showing you acted in good faith matters.",
 },
 {
 question: 'Can the police check if an item is stolen for me?',
 answer:
 'Many police departments will run a serial number or VIN if you call the non-emergency line or stop by the station, and some will meet you for a sale in their lobby or parking lot. Policies vary by department. A quick online check first tells you whether it is worth involving them at all.',
 },
 {
 question: 'Does a clean result mean the item is definitely not stolen?',
 answer:
 'No. It means the number did not match anything in the records searched. Many stolen items were never reported with a serial number, so no database can catch them. Combine the result with the basics: the number on the item matches the listing, the seller can unlock or sign out of it, and the price and story make sense.',
 },
 ],
 }}
 />
 );
};

export default CheckIfStolenPage;
