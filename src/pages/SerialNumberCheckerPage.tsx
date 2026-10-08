import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

// Oct 5 2026: rewritten for the searches this page already ranks for ("free serial number search",
// "serial number lookup", "product serial number check online"). Every claim matches what the
// check actually searches. No outbound links, no supplier names.
const SerialNumberCheckerPage = () => {
 return (
 <ItemLandingPageTemplate
 title="Free Serial Number Search & Lookup — Check If Stolen | SafeOrStolen"
 metaDescription="Search any serial number free. See if a laptop, tool, camera, console, gun or other item is reported stolen before you buy. Results in seconds, 2 free checks, no card."
 h1="Free Serial Number Search & Lookup"
 itemType="Item"
 dateModified="2026-10-05"
 searchPlaceholder="Type or paste any serial number"
 keywords={[
 'free serial number search',
 'serial number lookup',
 'free serial number lookup',
 'serial number search',
 'product serial number check online',
 'check if item is stolen by serial number',
 'stolen serial number lookup',
 'serial number lookup database'
 ]}
 quickAnswer={{
 question: "How do I check if an item is stolen by its serial number?",
 answer: "Enter the serial number at SafeOrStolen (safeorstolen.com/serial-number-checker). SafeOrStolen searches its own theft reports and public web results, and for guns it also searches police firearm theft and loss reports from 34 states. You get a result in a few seconds: reported stolen, possible match, or no report found in the records searched. The first 2 checks are free with no card. Do it before you pay, and save the result as proof you checked."
 }}
 sections={[
 {
 heading: "What a free serial number search can and can't tell you",
 paragraphs: [
 "A serial number search answers one question: has anyone reported this exact item stolen or lost in the records we search? If there is a match, you see what the report says and you should not buy the item. If there is no match, the result says so plainly, and lists every source that was searched.",
 "No match is not a guarantee. Theft reports in the United States are split across thousands of police departments, and many owners never write down their serial numbers, so plenty of stolen items have never been reported anywhere. That is why the check also looks at how the item is being sold, and why the red flags below still matter.",
 "A stolen-item search does not tell you who owns the item, whether the warranty is still active, or the exact model and build date. Those details belong to the manufacturer. What you get from SafeOrStolen is the part a buyer needs before handing over money: is this item flagged as stolen?"
 ]
 },
 {
 heading: "Where to find the serial number",
 paragraphs: [
 "Ask the seller for a clear photo of the serial number before you meet, then check the same number on the item in person. A seller who won't share it is giving you your answer."
 ],
 table: {
 columns: ["Item", "Where the serial number is"],
 rows: [
 ["Windows laptop", "Label on the bottom of the case, or open PowerShell and run: Get-CimInstance Win32_BIOS"],
 ["MacBook", "Apple menu > About This Mac, and printed on the bottom case"],
 ["iPhone or iPad", "Settings > General > About (for a phone, also check the IMEI by dialing *#06#)"],
 ["PlayStation 5", "Sticker on the back of the console, and Settings > System > System Software > Console Information"],
 ["Xbox Series X|S", "Settings > System > Console info, and the sticker on the back"],
 ["Nintendo Switch", "Bottom edge of the console, and System Settings > System > Serial Information"],
 ["Power tools", "Nameplate on the motor housing or the battery foot, next to the model number"],
 ["Cameras and lenses", "Base plate or battery door on the body; lenses carry their own serial on the barrel or mount"],
 ["Guitars", "Back of the headstock, or the neck plate on bolt-on necks"],
 ["Bicycles", "Underneath the bottom bracket, where the pedals meet the frame"],
 ["Guns", "Stamped on the frame or receiver, sometimes also on the slide or barrel"],
 ["TVs", "Label on the back panel, and in the TV's settings under Support or About"]
 ]
 }
 },
 {
 heading: "Red flags that matter as much as the serial number",
 list: [
 "The serial number is scratched, ground off, painted over, or covered by a new sticker",
 "The serial on the item doesn't match the box, the receipt, or the photo the seller sent",
 "The price is far below what the same item sells for used",
 "Several of the same expensive item for sale at once, often new in box, with no receipts",
 "The seller won't share the serial number before meeting, or wants cash only and right now",
 "A laptop or phone that is still signed in to someone else's account or locked by a company"
 ]
 }
 ]}
 content={{
 intro: "Search any serial number for free and see whether the item is reported stolen before you buy it. It works for laptops, power tools, cameras, game consoles, guitars, bikes, guns, TVs and anything else with a serial number. Results in a few seconds, 2 free checks, no credit card.",
 whatIs: "A serial number lookup checks whether a specific item has been reported stolen or lost. Almost every valuable manufactured item carries a unique serial number, and that number is what owners give the police and their insurer when the item is stolen. SafeOrStolen searches its own theft reports and public web results for every serial number. Gun serial numbers are also checked against police firearm theft and loss reports from 34 states and live Ohio law-enforcement records. Bikes are checked against a national stolen-bicycle registry, phones against the lost and stolen phone blacklist, and vehicles against Arizona law-enforcement records and federal VIN data.",
 howItWorks: "Type the serial number into the search box. SafeOrStolen searches every source that applies to that kind of item at the same time and returns one of three results: reported stolen, possible match, or no report found in the records searched. Each result lists the sources it searched, and it is saved to your account with the date and time. After a check you can also get a $1.99 verification certificate, a dated record with its own link, showing you checked before the sale.",
 whyCheck: "In most states, buying stolen property means losing it. Police can return it to the owner without paying you back, and you can be questioned about how you got it. Checking the serial number before you pay, and keeping a record that you checked, protects you as a buyer. It also helps honest sellers show that the item checked clean.",
 benefits: [
 "Works on any serial number: electronics, tools, instruments, cameras, consoles, guns, bikes",
 "Searches SafeOrStolen theft reports and public web results on every check",
 "Gun serials: police theft and loss reports from 34 states plus live Ohio records",
 "Results in a few seconds, with every source listed",
 "2 free checks with a free account, no credit card",
 "Dated record of every check saved to your account",
 "Optional $1.99 verification certificate to share with the buyer or seller",
 "Install the free web app and check from your phone at the meetup"
 ],
 process: [
 "Ask the seller for a photo of the serial number before you agree to meet",
 "Type the full serial number into the search box, including every letter and number",
 "Read the result and the list of sources that were searched",
 "When you meet, make sure the serial number on the item matches the one you checked",
 "If it is reported stolen, don't buy it, and pass the listing to your local police"
 ],
 faqs: [
 {
 question: "Is the serial number search really free?",
 answer: "Yes. SafeOrStolen gives you 2 free checks with a free account and no credit card. After that it is $0.99 for a single check, or $10 a month for unlimited checks (phone blacklist searches are limited to 20 a month)."
 },
 {
 question: "Is there a national database of stolen serial numbers?",
 answer: "Not one the public can search. The FBI's national stolen-property file is only open to law enforcement, and other theft records are split across police departments, insurers and registries. SafeOrStolen brings together the sources the public can use, including its own theft reports and police firearm theft and loss reports from 34 states. A no-match result means nothing was found in those sources, not proof that the item was never stolen."
 },
 {
 question: "Can I look up who owns an item by its serial number?",
 answer: "No. Ownership records are private, and SafeOrStolen never shows who owns an item or who reported it. What the search tells you is whether the item has been reported stolen or lost, which is the part a buyer needs to know."
 },
 {
 question: "What items can I check with a serial number?",
 answer: "On SafeOrStolen you can check anything with a unique serial number: laptops, tablets, cameras and lenses, power tools, game consoles, TVs, guitars and other instruments, watches, bikes and e-bikes, guns, boats (by hull number), and more. Phones are best checked by IMEI, and cars by VIN or license plate."
 },
 {
 question: "How do I check if a power tool is stolen?",
 answer: "Find the serial number on the tool's nameplate, usually on the motor housing near the model number, and enter it in the search box. Tools sold in bulk, with the nameplates scratched off, or far below the usual used price are the classic job-site theft pattern. If the serial has been removed, don't buy it."
 },
 {
 question: "How do I check whether a used laptop is stolen?",
 answer: "Get the serial number from the bottom of the case or from the system information screen, and search it before you pay. Also make sure the laptop starts up to a fresh setup screen with no firmware password, no activation lock and no company management profile. A locked or company-managed laptop may be unusable even if it was never reported stolen."
 },
 {
 question: "What happens if the serial number comes back as stolen?",
 answer: "Don't buy it, and don't confront the seller. Leave, report the listing to the marketplace, and give the listing details to your local police on their non-emergency line. If you already bought it, contact the police yourself and keep your messages and payment record."
 },
 {
 question: "Can serial numbers be removed or changed?",
 answer: "Yes, and that is a warning sign in itself. Look for scratched, ground or polished areas where the serial should be, a replacement sticker, or a serial that doesn't match the box. For guns, possessing one with an obliterated serial number is a federal crime. If the serial looks tampered with, walk away."
 },
 {
 question: "How long does a serial number search take?",
 answer: "Usually a few seconds. SafeOrStolen searches all the sources that apply to that kind of item at the same time, and the result lists each one."
 },
 {
 question: "Do I need the receipt to check a serial number?",
 answer: "No, the serial number is all you need. But if the seller has the original receipt, check that the serial on it matches the item. A seller who can't explain where the item came from is a red flag."
 }
 ]
 }}
 />
 );
};

export default SerialNumberCheckerPage;
