import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

/**
 * Oct 8 2026: audited by hand for "check if iphone is stolen". Removed the invented theft count,
 * the "AI analysis" source, the iCloud-lock claim, "instant/3 sec" wording and vague pricing.
 */
const IPhoneIMEICheck = () => {
 return (
 <SEOLandingPageTemplate
 title="Check if iPhone is Stolen - Free IMEI Check"
 metaDescription="Check if a used iPhone is stolen before you buy: find the IMEI, search theft reports and public web results, check the carrier blacklist, and spot Activation Lock."
 h1="Check if iPhone is Stolen - Free IMEI Check"
 keywords={[
 'check if iphone is stolen',
 'iphone imei check',
 'verify iphone not stolen',
 'stolen iphone checker',
 'iphone stolen database',
 'check iphone before buying',
 'iphone 15 imei check',
 'used iphone verification',
 'is my iphone stolen',
 'apple imei lookup'
 ]}
 canonical="/check-iphone-stolen"
 itemType="iPhone"
 identifierType="IMEI"
 heroBadge="iPhone IMEI Check"
 heroSubtitle="Before you buy a used iPhone, check its IMEI on SafeOrStolen: see the model, search theft reports and public web results, and add a paid carrier blacklist check if you want one."
 stats={[
 { value: "15 digits", label: "IMEI length" },
 { value: "*#06#", label: "Dial to show the IMEI" },
 { value: "Free", label: "First 2 checks" }
 ]}
 whatIsTitle="What is an iPhone IMEI check?"
 whatIsContent="Every iPhone has a 15-digit IMEI that identifies that exact phone. When an iPhone is reported lost or stolen to a carrier, its IMEI goes on the carrier blacklist, and the phone stops working on cellular networks. A SafeOrStolen IMEI check shows the iPhone's model from the IMEI and searches theft reports filed on SafeOrStolen and public web results. The lost and stolen blacklist is a separate paid check. Activation Lock can only be confirmed on the phone itself."
 howItWorksSteps={[
 "Find the IMEI: dial *#06#, or open Settings > General > About and scroll to IMEI",
 "Enter the 15-digit IMEI on SafeOrStolen",
 "SafeOrStolen shows the model and searches its theft reports and public web results; add the paid blacklist check if you want the carrier status",
 "Read the result in a few seconds: reported stolen, possible match, or no report found in the records searched"
 ]}
 howItWorksDescription="Every source searched is listed on the result, and the check is saved to your account with the date. SafeOrStolen does not check Apple account status or unpaid financing, so do those checks with the seller and the carrier."
 whyVerifyTitle="Why check before buying an iPhone?"
 whyVerifyContent="iPhones are easy to resell, so stolen ones turn up on Facebook Marketplace, OfferUp and Craigslist. Here's what can go wrong if you buy one:"
 whyVerifyBenefits={[
 "The owner can mark it lost in Find My, which locks it",
 "A blacklisted iPhone won't connect to carrier networks for calls or data",
 "Police can return it to its owner, and you lose your money",
 "Activation Lock stops you setting it up without the owner's Apple ID",
 "Private sellers rarely give refunds once you've paid"
 ]}
 useCases={[
 {
 title: "Facebook Marketplace buyers",
 description: "Ask for the IMEI before you meet, check it, then dial *#06# at the meetup to confirm it's the same phone."
 },
 {
 title: "eBay and online purchases",
 description: "Ask the seller for the IMEI and a screenshot of Settings > General > About before you bid."
 },
 {
 title: "Pawn shops and resellers",
 description: "Check each phone before you buy it. For many devices at once, see SafeOrStolen bulk checking at /bulk-check."
 }
 ]}
 faqs={[
 {
 question: "Where do I find the IMEI number on an iPhone?",
 answer: "Dial *#06#, or go to Settings > General > About and scroll to IMEI. It's also on the original box and, on some older models, the SIM tray. Make sure the IMEI on the phone matches what the seller sent you and what's on the box."
 },
 {
 question: "Can I check if an iPhone is iCloud locked?",
 answer: "Not from the IMEI alone; Apple doesn't offer a public lookup. Have the seller turn off Find My, sign out of their Apple ID and erase the iPhone in front of you, then start setup. If you see an Activation Lock screen asking for their Apple ID, don't buy it."
 },
 {
 question: "What if the iPhone shows as stolen?",
 answer: "Don't buy it and don't confront the seller. Leave, report the listing to the marketplace, and call your local police non-emergency line with the IMEI and the listing details."
 },
 {
 question: "How accurate is the iPhone stolen check?",
 answer: "SafeOrStolen searches its own theft reports and public web results, and the paid blacklist check searches the lost and stolen carrier blacklist. No source has every theft. A result of no report found means nothing turned up in the records searched, so still test the phone and watch the seller remove their Apple ID."
 },
 {
 question: "Can someone change an iPhone's IMEI?",
 answer: "It's illegal in many countries and very hard on an iPhone. Scammers are more likely to send you the IMEI of a different phone. Dial *#06# on the phone in front of you and make sure it matches the number you checked."
 },
 {
 question: "What does 'blacklisted' mean for an iPhone?",
 answer: "A blacklisted iPhone has been reported lost or stolen, or flagged for unpaid bills, by a carrier. It won't work for calls or cellular data on participating networks, though Wi-Fi may still work."
 },
 {
 question: "Should I check before buying from a store?",
 answer: "Apple and certified refurbished sellers handle this for you. For pawn shops, independent repair shops and private sellers, check the IMEI yourself before you pay."
 },
 {
 question: "Is this service really free?",
 answer: "A free SafeOrStolen account comes with 2 free checks, no credit card. After that it's $0.99 a check or $10 a month for unlimited checks, which includes up to 20 blacklist checks a month."
 }
 ]}
 ctaTitle="Check the iPhone before you pay"
 ctaDescription="Enter the IMEI and see the result in a few seconds. Your first 2 checks are free."
 relatedLinks={[
 { title: "Samsung IMEI Check", href: "/check-samsung-stolen" },
 { title: "All Phone IMEI Checker", href: "/imei-checker" },
 { title: "Facebook Marketplace Safety", href: "/facebook-marketplace-stolen-check" }
 ]}
 />
 );
};

export default IPhoneIMEICheck;
