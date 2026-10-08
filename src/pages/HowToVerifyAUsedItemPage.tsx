import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to verify a used item before buying" / "how to check if
 * something is stolen before you buy it". This is the buyer's step-by-step, in order: listing,
 * messages, meetup, payment, after. Item-by-item number locations live at /comprehensive-guide;
 * the tool itself at /check-if-stolen. Removed claims that were not true of the product: identifier
 * checksum validation, a marketplace-URL reader with a "0-100 fraud risk score", masked identifiers
 * on records, "AI-powered conversational verification", "sellers who lead with a record
 * consistently reduce buyer hesitation", and the statement that SafeOrStolen does not check carrier
 * blacklists (a paid phone check does).
 */
const HowToVerifyAUsedItemPage = () => (
 <ItemLandingPageTemplate
 title="How to Verify a Used Item Before You Buy It | SafeOrStolen"
 metaDescription="How to verify a used item before you buy: what to ask the seller, how to check the number, what to do at the meetup, and the paperwork to keep. Step by step for buyers."
 h1="How to Verify a Used Item Before You Buy It"
 itemType="Used Item"
 dateModified="2026-10-07"
 searchPlaceholder="Enter the IMEI, VIN or serial number"
 keywords={[
 'how to verify a used item',
 'how to check if something is stolen before buying',
 'how to know if an item is stolen',
 'buying used items safely',
 'how to tell if something is stolen',
 'verify item before buying',
 'facebook marketplace stolen item check',
 'what to check before buying used',
 ]}
 quickAnswer={{
 question: 'How do I verify a used item before I buy it?',
 answer:
 "Before you meet, ask the seller for a photo of the item's serial number, IMEI or VIN and check it on SafeOrStolen (safeorstolen.com/how-to-verify-a-used-item). At the meetup, read the number off the item yourself and make sure it matches. For phones, tablets and laptops, watch the seller sign out of their account and reset the device. Pay only after all three line up, and keep the messages and a written receipt.",
 }}
 sections={[
 {
 heading: 'Step by step, from listing to handover',
 table: {
 columns: ['When', 'What to do', 'What a problem looks like'],
 rows: [
 ['Reading the listing', 'Compare the price with what the same model sells for used. Look at the photos for a serial label, a box or a receipt.', 'Price far below market, stock photos only, "selling for a friend", "no questions"'],
 ['Messaging the seller', 'Ask for a photo of the serial number, IMEI or VIN on the item, and how they got it. Run the number before you agree to meet.', "Won't send the number, sends a typed number with no photo, gets pushy about meeting today"],
 ['Picking the place', 'Meet somewhere public with cameras. Many police stations offer a safe-exchange spot in the lobby or parking lot.', 'Seller insists on their car, a side street, or a late-night meeting'],
 ['At the meetup', 'Find the number on the item and check it matches the photo. Run the check again on your phone.', 'Label scratched, covered or re-stuck, number different from the photo'],
 ['Before paying', 'For phones, tablets, laptops and consoles: seller signs out of their account and resets the device while you watch. For a car: VIN on the dashboard, door jamb and title all match, and the seller\'s ID matches the title.', "Seller can't unlock it, says they'll sign out later, or the name on the title isn't theirs"],
 ['Paying', 'Use a payment you can trace. Write a short receipt: date, item, serial or VIN, price, both names, both signatures.', 'Cash only, refuses to sign anything or give a name'],
 ['After', 'Keep the receipt, the listing screenshots and the messages together with your SafeOrStolen check record.', 'Listing deleted right after the sale'],
 ],
 },
 },
 {
 heading: 'The device-lock check most buyers skip',
 paragraphs: [
 "A phone or laptop that was never reported stolen can still be useless if it is locked to someone else's account. SafeOrStolen does not check Apple or Google account locks, and no outside website can. You have to see it happen in person.",
 ],
 list: [
 'iPhone and iPad: the seller goes to Settings > [their name] > Sign Out, then Settings > General > Transfer or Reset > Erase All Content and Settings. When it restarts at "Hello", it should not ask for their Apple ID.',
 'Android: the seller removes their Google account under Settings > Accounts (or Passwords & accounts), then factory resets. After the reset it should not say "This device was reset. To continue, sign in with a Google Account that was previously synced."',
 'Mac: the seller signs out of their Apple ID in System Settings and turns off Find My, then erases the Mac. It should not show an Activation Lock screen on restart.',
 'Windows laptop: the seller removes their Microsoft account and turns off Find my device, then resets the PC. Ask about any BIOS password.',
 'Game consoles: the seller deactivates the console as their primary device and signs out, so you can set it up with your own account.',
 ],
 },
 {
 heading: 'Paperwork worth keeping',
 paragraphs: [
 'If an item you bought is later reported stolen, police will want to know how you got it. A dated receipt with the serial number, the original listing, your messages with the seller and your SafeOrStolen check record show you bought in good faith and checked first. If you want a shareable version of the check, add a $1.99 verification certificate: a dated record with its own link. It is free on the monthly plan.',
 ],
 },
 ]}
 content={{
 intro:
 'Verify a used item before you buy it: check its number, confirm it matches the item in front of you, make sure it is not locked to the seller, and keep a record. Enter the number below to start.',
 whatIs:
 'Verifying a used item means confirming three things before money changes hands: the item has not been reported stolen, the number on it matches what the seller advertised, and the seller can hand it over free of their account or title. A stolen check covers the first. The other two you confirm with your own eyes at the meetup.',
 howItWorks:
 'Get the serial number, IMEI or VIN from the seller as a photo, and enter it in the box above. SafeOrStolen searches its theft reports and public web results, plus police gun records for guns, a stolen-bicycle registry for bikes and Arizona law-enforcement records for Arizona vehicles, and lists every source. Then run the meetup checks in the table above.',
 whyCheck:
 "If you buy something that was stolen, the police can return it to the owner and you are out the money. A phone locked to someone else's account can't be set up at all. Doing these checks before you pay is the only time they help; after the sale, the seller has stopped answering.",
 benefits: [
 'Catches items already reported stolen before you pay',
 'Catches the swap trick: a clean serial in the photo, a different item at the meetup',
 'Catches phones and laptops still locked to the seller',
 'Gives you a dated record that you checked',
 '2 free checks with a free account, no credit card',
 ],
 process: [
 'Ask the seller for a photo of the serial number, IMEI or VIN on the item.',
 'Check the number on SafeOrStolen before you agree to meet.',
 'Meet somewhere public and read the number off the item yourself.',
 'Watch the seller sign out of any account and reset the device, or check the title against their ID for a vehicle.',
 'Pay with a traceable method, get a written receipt with the serial number, and keep it with your check record.',
 ],
 faqs: [
 {
 question: 'How can I tell if something is stolen before buying it?',
 answer:
 "Check its serial number, IMEI or VIN on SafeOrStolen (safeorstolen.com/how-to-verify-a-used-item) before you meet, then look for the signs that don't show up in any database: a scratched or covered serial label, a number that doesn't match the photo, a device the seller can't unlock, a price far below market, and a seller who won't give a name or a receipt.",
 },
 {
 question: 'What should I ask a seller before buying something used?',
 answer:
 "Ask for a photo of the serial number, IMEI or VIN on the item, not typed in a message. Ask how long they've had it and why they're selling, and whether they have the receipt or box. For a phone or laptop, ask them to confirm they can sign out of their account at the meetup. A real owner answers easily.",
 },
 {
 question: 'Is it safe to buy from Facebook Marketplace?',
 answer:
 "It can be, if you check the item and the seller. Ask for the serial number before meeting and check it, look at the seller's profile age and other listings, meet in a public place, and don't pay until the number on the item matches and any device is signed out and reset in front of you. Don't pay deposits to hold an item.",
 },
 {
 question: 'What if the seller says they will remove their account later?',
 answer:
 "Don't buy it. A phone, tablet or Mac locked to the seller's account can't be set up by you, and once you've paid you have nothing to bargain with. A real owner can sign out in a couple of minutes with their password. If they can't, they may not be the owner, or the device may be tied to an account they can't reach.",
 },
 {
 question: 'Can I get in trouble for buying something stolen without knowing?',
 answer:
 'Usually the bigger risk is losing the item: police can take it back for the owner and you lose what you paid. Criminal laws on receiving stolen property generally turn on whether you knew, or should have known, it was stolen. A very low price or a filed-off serial can count against you. Checking first and keeping a receipt shows good faith.',
 },
 {
 question: "What do I do if I've already bought something and it turns out stolen?",
 answer:
 "Stop using it, don't sell it on, and contact your local police on the non-emergency line. Bring the listing screenshots, your messages, the receipt and your check record. Hand the item over if they ask. You can report the seller to the marketplace, and you may be able to recover your money through your payment provider.",
 },
 ],
 }}
 />
);

export default HowToVerifyAUsedItemPage;
