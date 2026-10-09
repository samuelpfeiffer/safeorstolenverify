import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

/** Oct 8 2026: audited by hand for "check if gun is stolen". Removed invented stats, "instant", a misstated 922(j) claim and "protect yourself legally". */
const FirearmSerialCheck = () => {
 return (
 <SEOLandingPageTemplate
 title="Check if Firearm is Stolen - Gun Serial Number Lookup | SafeOrStolen"
 metaDescription="Check a gun's serial number for theft reports before buying: police theft and loss reports from 33 states and DC, live Ohio records, and SafeOrStolen reports."
 h1="Check if a Gun Is Stolen - Free Serial Number Lookup"
 keywords={[
 'check if gun is stolen',
 'firearm serial number lookup',
 'stolen gun database',
 'gun serial check',
 'verify firearm not stolen',
 'stolen firearms check',
 'pistol stolen check',
 'rifle serial number lookup',
 'handgun verification',
 'firearm theft check'
 ]}
 canonical="/check-firearm-stolen"
 itemType="Firearm"
 identifierType="Serial Number"
 heroBadge="Firearm Verification"
 heroSubtitle="Before a private gun sale, enter the serial number. In a few seconds SafeOrStolen searches police firearm theft and loss reports, live Ohio law-enforcement records, its own theft reports and public web listings. Your first 2 checks are free."
 whatIsTitle="What does a gun serial number check search?"
 whatIsContent="A SafeOrStolen gun check searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, theft reports owners file on SafeOrStolen, and public web listings that mention the serial. It also flags serials that look altered or obliterated. It does not search NCIC or ATF eTrace, which are open only to law enforcement."
 howItWorksSteps={[
 "Find the serial number: usually stamped on the frame or receiver, often on the right side or under the barrel on pistols",
 "Enter the serial number into SafeOrStolen, along with the make if you know it",
 "SafeOrStolen searches police theft and loss reports, live Ohio records, its own theft reports and public web listings",
 "Read the result: reported stolen, possible match, or no report found in the records searched, with every source listed"
 ]}
 whyVerifyTitle="Why check a gun before buying?"
 whyVerifyContent="Police can seize a stolen gun from whoever has it, and the buyer loses what they paid. Federal law makes it a crime to possess a gun you know or have reasonable cause to believe is stolen, so a deal that looks off is a reason to check and walk away."
 whyVerifyBenefits={[
 "Possessing a gun you know or have reason to believe is stolen is a federal crime under 18 U.S.C. § 922(j)",
 "Possessing a gun with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k)",
 "Recovered guns are returned to their owners, not the buyer",
 "Private sellers rarely give refunds",
 "A dated record that you checked shows you did your homework before the sale"
 ]}
 faqs={[
 {
 question: "Where is the serial number on a gun?",
 answer: "On most guns it's stamped on the frame or receiver. On pistols look on the frame near the trigger guard or under the slide; on rifles and shotguns check the receiver. Some guns also have numbers on the barrel or slide, which may differ from the frame serial. Use the frame or receiver number."
 },
 {
 question: "Is it illegal to buy a stolen gun?",
 answer: "Under federal law, 18 U.S.C. § 922(j), it's a crime to receive or possess a stolen firearm if you know or have reasonable cause to believe it was stolen. Even if you aren't charged, police can seize the gun and return it to the owner. Checking the serial at SafeOrStolen (safeorstolen.com/check-firearm-stolen) before you pay is a simple precaution."
 },
 {
 question: "What happens if the gun I bought turns out to be stolen?",
 answer: "Police can take the gun and return it to its owner, and you lose what you paid unless you can recover it from the seller. Don't try to resell it. Call your local police non-emergency line, explain how you bought it, and give them the seller's details and any messages."
 },
 {
 question: "Should I check a gun at a gun show?",
 answer: "Yes, for private sales. A licensed dealer runs a background check on you, but that doesn't check whether the gun was stolen. At a private table, ask for the serial, check it on your phone before paying, and look closely for scratched, ground or re-stamped numbers."
 }
 ]}
 ctaTitle="Check the Serial Before You Buy"
 ctaDescription="A serial number check takes a few seconds, and your first 2 are free."
 relatedLinks={[
 { title: "Firearms Check Main", href: "/firearms-check" },
 { title: "Serial Number Checker", href: "/serial-number-checker" },
 { title: "Facebook Marketplace", href: "/facebook-marketplace-stolen-check" }
 ]}
 />
 );
};

export default FirearmSerialCheck;
