import { Link } from '@/lib/router-compat';
import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const GunSerialNumberLookupPage = () => {
 return (
 <>
 <ItemLandingPageTemplate
 title="Free Gun Serial Number Lookup - Check Firearms | SafeOrStolen"
 metaDescription="Free gun serial number lookup. Check a gun against police theft reports from 33 states and DC, live Ohio records and SafeOrStolen reports, and flag altered serials."
 h1="Free Gun Serial Number Lookup"
 itemType="Firearm"
 searchType="firearm"
 searchPlaceholder="Enter the gun's serial number"
 keywords={[
 'gun serial number lookup',
 'gun serial lookup',
 'lookup gun serial number',
 'firearm serial lookup',
 'check gun serial number',
 'gun serial check free',
 'find gun serial number',
 'gun registration lookup'
 ]}
 content={{
 intro: "Enter a gun's serial number and SafeOrStolen tells you in a few seconds whether it shows up in 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, SafeOrStolen theft reports or public web results. It also flags serials that look altered or obliterated. Run it before a private sale, a gun show deal or an online purchase.",

 whatIs: "A gun serial number lookup checks whether a firearm's serial appears in theft records. Guns made or imported for sale in the U.S. since the Gun Control Act of 1968 carry a serial number, and that number goes into the police report when a gun is stolen. SafeOrStolen searches police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; years vary by state), live Ohio law-enforcement records, its own theft reports and public web results. It does not search NCIC or ATF eTrace and never shows owner names.",

 howItWorks: "(1) Find the serial on the gun, usually on the frame or receiver, sometimes repeated on the slide or barrel. (2) Type every letter and number exactly as stamped. (3) SafeOrStolen searches the sources above and checks whether the serial looks altered. (4) In a few seconds you see reported stolen, possible match, or no report found in the records searched, with every source listed. Ask the seller for the serial before you meet so you can check it ahead of time.",

 whyCheck: "Under 18 U.S.C. § 922(j) it's a federal crime to receive or possess a stolen gun when you know or have reasonable cause to believe it's stolen, and a stolen gun found in your hands will be taken back. Private sales often don't involve a dealer, so nobody else is checking for you. A serial lookup takes a few seconds, gives you a dated record that you checked, and catches guns that have already been reported.",

 benefits: [
 "2 free checks with a free account, no credit card",
 "242,839 police firearm theft and loss reports from 33 states and Washington, DC",
 "Live Ohio law-enforcement records",
 "Flags serials that look altered or obliterated",
 "Works for handguns, rifles and shotguns from any maker",
 "Results in a few seconds, with every source listed",
 "Free installable web app at safeorstolen.com/app for checks at a gun show",
 "Never shows owner names"
 ],

 process: [
 "Locate the serial number on the firearm",
 "For pistols: check the frame near the trigger guard; some repeat it on the slide or barrel",
 "For AR-15s: check the lower receiver",
 "For other rifles and shotguns: check the receiver",
 "Enter the complete serial number into the lookup",
 "Read the result and the sources searched; if it's reported stolen, walk away and call police"
 ],

 faqs: [
 {
 question: "How do I find a gun's serial number for lookup?",
 answer: "On pistols it's usually on the frame near the trigger guard, and some makers repeat it on the slide or barrel. Revolvers have it on the frame, often visible with the cylinder open. AR-15s have it on the lower receiver. Bolt-action rifles and shotguns have it on the receiver. If a seller won't show you the serial, don't buy the gun."
 },
 {
 question: "Is gun serial number lookup really free?",
 answer: "Your first 2 checks on SafeOrStolen (safeorstolen.com/gun-serial-number-lookup) are free with a free account and no credit card. After that it's $0.99 a check or $10 a month for unlimited checks. Dealers and pawn shops checking many guns can use bulk checking at safeorstolen.com/bulk-check."
 },
 {
 question: "What databases are searched in a gun serial lookup?",
 answer: "A SafeOrStolen gun check searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; years covered vary by state), live Ohio law-enforcement records, SafeOrStolen theft reports and public web results. It also flags serials that look altered or obliterated. It does not search NCIC or ATF eTrace."
 },
 {
 question: "Can I look up a gun serial number before a gun show?",
 answer: "Yes, and that's the best time. Ask the seller for the serial before you meet and run it on SafeOrStolen. At the show, add the free web app at safeorstolen.com/app to your home screen so you can check a serial on the spot in a few seconds."
 },
 {
 question: "What if the gun serial number lookup shows stolen?",
 answer: "Don't buy the gun and don't confront the seller. Leave, then call your local police non-emergency line with the serial, make, model and where you saw it. Police can confirm the report in NCIC, which the public can't search. Your saved SafeOrStolen check shows what you found and when."
 },
 {
 question: "Do gun stores do serial number lookups?",
 answer: "A licensed dealer runs a background check on the buyer through NICS. That check is about the person, not whether the gun is stolen. For a private sale, running the serial yourself is the practical way to see if it's been reported."
 },
 {
 question: "Can I look up who a gun is registered to?",
 answer: "No. There's no national gun registry in the United States, and SafeOrStolen never shows owner names. A serial lookup only tells you whether the gun appears in the theft records searched."
 }
 ]
 }}
 />
 <section className="max-w-4xl mx-auto px-4 pb-16 -mt-4">
 <p className="text-sm text-muted-foreground">
 Private sale? Whether a background check is required depends on your state — see our{' '}
 <Link to="/state-firearm-transfer-laws" className="text-primary underline underline-offset-4">
 state-by-state firearm transfer law guide
 </Link>
 .
 </p>
 </section>
 </>
 );
};

export default GunSerialNumberLookupPage;
