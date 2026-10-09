import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

/** Oct 8 2026: audited by hand for "android phone stolen check". Removed invented stats, AI-analysis source claims and "instant" wording. */
const AndroidPhoneCheck = () => {
 return (
 <SEOLandingPageTemplate
 title="Check if Android Phone is Stolen - Free IMEI Verification | SafeOrStolen"
 metaDescription="Check an Android phone's IMEI before buying. SafeOrStolen shows the make and model and searches theft reports and web listings for that IMEI in a few seconds."
 h1="Check if an Android Phone Is Stolen - Free IMEI Check"
 keywords={[
 'android phone stolen check',
 'check if phone is stolen',
 'android imei check',
 'google pixel stolen',
 'oneplus imei verification',
 'motorola stolen check',
 'used android verification',
 'phone blacklist check',
 'android phone imei lookup',
 'stolen android database'
 ]}
 canonical="/check-android-stolen"
 itemType="Android Phone"
 identifierType="IMEI"
 heroBadge="Android Device Verification"
 heroSubtitle="Pixel, OnePlus, Motorola or any other Android phone: dial *#06#, enter the IMEI, and see the model and any theft reports in a few seconds. Your first 2 checks are free."
 whatIsTitle="What is an Android IMEI check?"
 whatIsContent="Every Android phone has a 15-digit IMEI (dual-SIM phones have two). A SafeOrStolen check shows the make and model that IMEI belongs to, so you can confirm it matches the phone in your hand, and searches SafeOrStolen theft reports and public web listings for it. A carrier blacklist check, which shows whether carriers have blocked the IMEI as lost or stolen, is available as a paid add-on."
 howItWorksSteps={[
 "Find the IMEI: dial *#06# on the phone, or go to Settings > About phone",
 "Enter the 15-digit IMEI into SafeOrStolen",
 "SafeOrStolen shows the make and model and searches its theft reports and public web listings",
 "Read the result: reported stolen, possible match, or no report found in the records searched, with every source listed"
 ]}
 whyVerifyTitle="Why check an Android phone before buying?"
 whyVerifyContent="A stolen Android phone can be blacklisted by carriers or locked to the owner's Google account, and you can lose it to police if it's recovered. Checking the IMEI, then watching the seller remove their Google account and reset the phone, covers the most common problems."
 whyVerifyBenefits={[
 "A blacklisted phone may not connect on carriers that honor the blacklist",
 "Google's Find My Device lets an owner lock and erase a stolen phone",
 "Factory Reset Protection (FRP) asks for the previous Google account after a reset",
 "Police can return a recovered phone to its owner, and you lose what you paid",
 "Knowingly buying stolen property is a crime",
 "Private sellers rarely offer refunds",
 "A phone with an unpaid carrier balance can be blacklisted later"
 ]}
 faqs={[
 {
 question: "How do I find the IMEI on an Android phone?",
 answer: "Dial *#06# from the phone app and the IMEI appears on screen. You can also find it in Settings > About phone (on some phones under Status). It's printed on the original box and sometimes on the SIM tray. Make sure the number on screen matches the box."
 },
 {
 question: "What Android brands can I check?",
 answer: "Any Android phone with an IMEI: Google Pixel, Samsung, OnePlus, Motorola, Xiaomi and others. SafeOrStolen (safeorstolen.com/check-android-stolen) shows the make and model from the IMEI, so you can confirm the number belongs to the phone the seller is showing you."
 },
 {
 question: "What is Android FRP (Factory Reset Protection)?",
 answer: "FRP is Google's anti-theft lock. If a phone is reset without the owner removing their Google account first, it asks for that account's password during setup. Ask the seller to remove their account in Settings > Accounts in front of you, then reset the phone and make sure it reaches the welcome screen."
 },
 {
 question: "Can I check dual-SIM Android phones?",
 answer: "Yes. Dual-SIM phones have two IMEIs, and *#06# shows both. Check each one, since a theft report or blacklist entry may be tied to either."
 }
 ]}
 ctaTitle="Verify Any Android Phone for Free"
 ctaDescription="Check the IMEI before you pay. It takes a few seconds."
 relatedLinks={[
 { title: "iPhone IMEI Check", href: "/check-iphone-stolen" },
 { title: "Samsung Check", href: "/check-samsung-stolen" },
 { title: "IMEI Checker", href: "/imei-checker" }
 ]}
 />
 );
};

export default AndroidPhoneCheck;
