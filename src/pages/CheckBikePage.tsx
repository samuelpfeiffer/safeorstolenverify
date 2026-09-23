import { Link } from '@/lib/router-compat';
import { PillarPageTemplate } from '@/components/seo/PillarPageTemplate';

/**
 * PILLAR 2 — /check-bike
 * "Check If a Bike Is Stolen"
 */
const CheckBikePage = () => {
 return (
 <PillarPageTemplate
 route="/check-bike"
 pillarName="Check Bike"
 title="Check If a Bike Is Stolen — Free Serial Number Check | SafeOrStolen"
 description="Look up any bicycle serial number against theft registries including our reports, public web results, and BikeIndex before you buy a used bike."
 keywords="check if bike stolen, bike serial number check, stolen bike lookup, BikeIndex search, used bike safe to buy"
 h1="Check If a Bike Is Stolen"
 intro={
 <>
 <p>
 Roughly two million bikes are stolen in North America every year, and most of them are
 resold within days — on Facebook Marketplace, Craigslist, OfferUp, and at flea markets,
 usually at prices that feel just a little too good.
 </p>
 <p>
 The serial number tells the truth. It's stamped into the frame, and it follows the bike
 forever.
 </p>
 </>
 }
 sections={
 <>
 <h2>Where to find a bike's serial number</h2>
 <p>Check these spots, in order — flip the bike upside down first:</p>
 <ul>
 <li>
 <strong>Under the bottom bracket</strong> (where the pedal cranks meet the frame) —
 the most common location
 </li>
 <li>Head tube, rear dropout, or seat tube</li>
 <li>On the original receipt or owner's registration</li>
 </ul>
 <p>
 A seller who won't send you a photo of the bottom bracket before you drive across town
 has told you everything you need to know.
 </p>

 <h2>What we check</h2>
 <p>
 Your search runs against theft registries including <strong>our reports, public web results, and BikeIndex</strong>, the
 largest bicycle registration database in the world, plus our own submitted-theft
 records. If the serial matches a theft report, you'll see when and where it was
 reported.
 </p>

 <h2>The price test</h2>
 <p>
 Before you even check the serial: look up the model's retail price. A $1,400 bike
 listed at $250 with a "moving, must sell today" story is the single most reliable
 stolen-bike pattern there is. Thieves price for speed, not value.
 </p>

 <h2>If your own bike was stolen</h2>
 <p>
 Register the serial with us and with BikeIndex immediately — recovery almost always
 happens because a buyer or a shop ran a check.{' '}
 <Link to="/report-stolen">Report a stolen bike →</Link>
 </p>

 <h2>Frequently asked questions</h2>
 <h3>How can I check if a used bicycle was stolen?</h3>
 <p>Find the serial number stamped into the frame — usually underneath the bottom bracket where the pedal cranks meet — and enter it at SafeOrStolen before you buy. SafeOrStolen searches that serial against its own reports, public web results, AI analysis, and BikeIndex. Ask the seller to photograph the frame serial before you travel; a refusal is the most common warning sign on a stolen bike.</p>
 <h3>Is there a stolen bike database?</h3>
 <p>There is no single national bicycle theft registry that covers every theft — reports are split between individual police departments, insurers, and community registries, and many stolen bikes were never registered by their owner in the first place. SafeOrStolen searches across available theft records from one place using the frame serial. A no-match result means nothing was found in the sources checked, not proof the bike was never stolen.</p>
 <h3>How do I check a bike serial number?</h3>
 <p>Turn the bike upside down, read the serial stamped into the frame, and enter it at SafeOrStolen — the check takes a few seconds and returns a match or no-match result plus a dated verification record. Compare the number you read against any number the seller sent you in advance. If the serial has been filed, ground off, or painted over, do not buy the bike.</p>
 <h3>Where is the serial number on a bicycle?</h3>
 <p>On most bikes the serial is stamped underneath the bottom bracket, the shell the pedal cranks pass through, so you need to flip the bike over to read it. Other common locations are the head tube at the front, the rear dropout near the back wheel axle, and the underside of the seat tube. The same number should appear on the original receipt or registration if the seller still has it.</p>
 </>
 }
 extraSchema={{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How can I check if a used bicycle was stolen?", "acceptedAnswer": {"@type": "Answer", "text": "Find the serial number stamped into the frame \u2014 usually underneath the bottom bracket where the pedal cranks meet \u2014 and enter it at SafeOrStolen before you buy. SafeOrStolen searches that serial against its own reports, public web results, AI analysis, and BikeIndex. Ask the seller to photograph the frame serial before you travel; a refusal is the most common warning sign on a stolen bike."}}, {"@type": "Question", "name": "Is there a single bicycle theft registry?", "acceptedAnswer": {"@type": "Answer", "text": "There is no single national bicycle theft registry that covers every theft \u2014 reports are split between individual police departments, insurers, and community registries, and many stolen bikes were never registered by their owner in the first place. SafeOrStolen searches across available theft records from one place using the frame serial. A no-match result means nothing was found in the sources checked, not proof the bike was never stolen."}}, {"@type": "Question", "name": "How do I check a bike serial number?", "acceptedAnswer": {"@type": "Answer", "text": "Turn the bike upside down, read the serial stamped into the frame, and enter it at SafeOrStolen \u2014 the check takes a few seconds and returns a match or no-match result plus a dated verification record. Compare the number you read against any number the seller sent you in advance. If the serial has been filed, ground off, or painted over, do not buy the bike."}}, {"@type": "Question", "name": "Where is the serial number on a bicycle?", "acceptedAnswer": {"@type": "Answer", "text": "On most bikes the serial is stamped underneath the bottom bracket, the shell the pedal cranks pass through, so you need to flip the bike over to read it. Other common locations are the head tube at the front, the rear dropout near the back wheel axle, and the underside of the seat tube. The same number should appear on the original receipt or registration if the seller still has it."}}]}}
 relatedGuides={[
 {
 title: 'How to find your bike\'s serial number',
 href: '/blog/find-bike-serial-number',
 blurb: 'Photo walkthrough of every location manufacturers stamp the serial.',
 },
 {
 title: 'I think I bought a stolen bike',
 href: '/blog/bought-stolen-bike-what-to-do',
 blurb: 'Good-faith buyer law, contacting the registered owner, and why returning it usually protects you.',
 },
 {
 title: 'Register your bike BEFORE it\'s stolen',
 href: '/blog/register-bike-before-stolen',
 blurb: 'Recovery statistics and a five-minute registration walkthrough.',
 },
 {
 title: 'Marketplace bike scams: 7 patterns',
 href: '/blog/craigslist-facebook-bike-scams',
 blurb: 'Too-cheap pricing, angle-grinder lock photos, "selling for a friend," and other red flags.',
 },
 ]}
 />
 );
};

export default CheckBikePage;
