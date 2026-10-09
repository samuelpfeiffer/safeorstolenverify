import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 8 2026: audited by hand for "imei check". Real page for /imei-check (separate from /imei-checker).
 * Removed "instantly", "3 seconds", "global databases", the invented theft statistic and the false finance/lease claim.
 */
const IMEICheckPage = () => {
 return (
 <ItemLandingPageTemplate
 title="IMEI Check: See If a Used Phone Is Reported Stolen | SafeOrStolen"
 metaDescription="Run an IMEI check before you buy a used phone. See the make and model, theft reports and public web mentions in a few seconds. 2 free checks, no card needed."
 h1="IMEI check: see if a phone has been reported stolen"
 itemType="Phone"
 searchType="imei"
 searchPlaceholder="Enter the IMEI (dial *#06# to see it)"
 dateModified="2026-10-07"
 keywords={[
 'IMEI check',
 'check IMEI',
 'IMEI lookup',
 'free IMEI check',
 'IMEI stolen check',
 'phone IMEI lookup',
 'IMEI blacklist check'
 ]}
 quickAnswer={{
 question: "How do I run an IMEI check?",
 answer: "Dial *#06# on the phone to show its 15-digit IMEI, then type it into SafeOrStolen (safeorstolen.com/imei-check). In a few seconds you see the make and model, any theft reports filed on SafeOrStolen, and public web results that mention the number. A paid carrier blacklist check is available if you also want lost/stolen blacklist status."
 }}
 content={{
 intro: "An IMEI check tells you what phone a 15-digit IMEI belongs to and whether anyone has reported it stolen. On SafeOrStolen you get the make and model from the IMEI, SafeOrStolen's own theft reports, and public web results that mention the number, in a few seconds. If the model on screen doesn't match the phone in your hand, stop there.",
 whatIs: "The IMEI (International Mobile Equipment Identity) is the number a phone uses to identify itself to cell networks. Owners and carriers use it to report a phone lost or stolen. An IMEI check looks that number up in theft records so you can spot a problem before you pay.",
 howItWorks: "Type the IMEI into the search box. SafeOrStolen reads the make and model from the number, searches theft reports filed by owners on SafeOrStolen, and searches public web results such as listings and stolen-phone posts. You see \"reported stolen\", \"possible match\", or \"no report found in the records searched\", with every source listed. The paid blacklist check adds lost/stolen carrier blacklist status.",
 whyCheck: "A stolen phone can be blacklisted by the owner's carrier, locked to the owner's Apple or Google account, or taken back by police, and the buyer usually loses what they paid. Checking the IMEI and keeping a dated record of it takes a minute at the meetup.",
 benefits: [
 "2 free checks with a free account, no credit card",
 "Make and model read from the IMEI",
 "SafeOrStolen theft reports and public web results",
 "Paid lost/stolen carrier blacklist check available (up to 20 a month for monthly members)",
 "Works for iPhone, Samsung, Google Pixel and other phones",
 "Each check saved to your account with the date",
 "Use it on the web or as the free installable web app at safeorstolen.com/app"
 ],
 process: [
 "Find the IMEI: dial *#06#, or open Settings > General > About (iPhone) or Settings > About phone (Android)",
 "Enter the 15-digit IMEI in the search box",
 "Check that the make and model shown match the phone",
 "Read the result and the list of sources searched",
 "Before you pay, make sure the phone isn't locked to the seller's Apple or Google account"
 ],
 faqs: [
 {
 question: "How do I find a phone's IMEI number?",
 answer: "Dial *#06# on any phone and the IMEI appears on screen. On an iPhone you can also go to Settings > General > About; on Android, Settings > About phone. The IMEI is printed on the original box label too, and many iPhones have it etched on the SIM tray. Compare the numbers: they should match."
 },
 {
 question: "Is this IMEI check free?",
 answer: "Your first 2 checks on SafeOrStolen are free with a free account, and no credit card is needed. After that a single check is $0.99, or $10 a month for unlimited checks. The carrier blacklist check is a paid add-on; monthly members get up to 20 a month."
 },
 {
 question: "What does the IMEI check search?",
 answer: "A SafeOrStolen IMEI check (safeorstolen.com/imei-check) shows the make and model from the IMEI, searches theft reports filed by owners on SafeOrStolen, and searches public web results that mention the number. It does not search police databases such as NCIC or Apple and Google account status. The paid blacklist check adds carrier lost/stolen status."
 },
 {
 question: "What if the IMEI shows reported stolen or blacklisted?",
 answer: "Don't buy the phone. A theft report or blacklist entry means the owner or carrier flagged it. A blacklisted phone may not work on networks that honor the list, and police can take back a stolen one. Walk away without confronting the seller, and tell local police if you think the phone is stolen."
 },
 {
 question: "Can I check the IMEI before meeting a seller?",
 answer: "Yes. Ask the seller to send the IMEI before you meet and run the check at home. At the meetup, dial *#06# on the phone and make sure the number matches what they sent. If a seller refuses to share the IMEI, treat that as a reason to walk away."
 }
 ]
 }}
 />
 );
};

export default IMEICheckPage;
