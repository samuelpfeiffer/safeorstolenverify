import { Link } from 'react-router-dom';
import { PillarPageTemplate } from '@/components/seo/PillarPageTemplate';

/**
 * PILLAR 3 — /check-gun
 * "Check a Gun Serial Number Before You Buy"
 */
const CheckGunPage = () => {
  return (
    <PillarPageTemplate
      route="/check-gun"
      pillarName="Check Gun"
      title="Gun Serial Number Check — Is That Firearm Stolen? | SafeOrStolen"
 description="Check a firearm serial number against community stolen-gun records before a private sale. Know before you buy."
      keywords="gun serial number check, stolen firearm lookup, 50-State Firearm Reports, private gun sale safety, firearm serial number search"
      h1="Check a Gun Serial Number Before You Buy"
      intro={
        <>
          <p>
            Buying a stolen firearm — even unknowingly — can mean losing the gun, losing your
            money, and explaining yourself to police. In a private sale, the serial number check
            is the single most important step most buyers skip.
          </p>
        </>
      }
      sections={
        <>
          <h2>What this check is — and what it isn't</h2>
          <p>
            Be clear-eyed about how firearm records work in the United States. The stolen firearm reports from all 50 states
            stolen-gun file is accessible to law enforcement, not the public. What SafeOrStolen
            checks is <strong>community-reported stolen firearm records</strong>, including the
            stolen firearm reports from all 50 states — including reports filed by theft victims themselves.
          </p>
          <p>That means:</p>
          <ul>
            <li>
              A <strong>flagged</strong> result is a serious red flag: someone has publicly
              reported this exact serial number stolen. Do not complete the sale.
            </li>
            <li>
              A <strong>clean</strong> result means no community report exists — it does not access
              law-enforcement databases. For maximum certainty, you can also ask your local police
              department or a licensed dealer (FFL) to run the serial, which many will do for a
              transfer fee.
            </li>
          </ul>
          <p>
            We tell you this plainly because a verification service you can't trust to be honest
            about its limits isn't a verification service.
          </p>

          <h2>Private-sale safety checklist</h2>
          <ul>
            <li>Get the serial number before meeting; run the check</li>
            <li>Ask for a bill of sale with both parties' names, the serial, date, and price</li>
            <li>
              Know your state's private-transfer laws — many states require the sale to go through
              an FFL
            </li>
            <li>If the price is far below market and the seller wants cash today, walk away</li>
          </ul>

          <h2>If your firearm was stolen</h2>
          <p>
            Report it to police immediately (you'll need the serial number), then add it to public
            registries so any buyer who checks will find it.{' '}
            <Link to="/report-stolen">Report a stolen firearm →</Link>
          </p>
        </>
      }
      relatedGuides={[
        {
          title: 'Gun serial number lookups, explained honestly',
          href: '/blog/gun-serial-number-lookup-explained',
          blurb: 'What\'s public vs. law-enforcement only, FFL checks, and why community registries matter.',
        },
        {
          title: 'Private gun sale safety checklist',
          href: '/blog/private-gun-sale-safety-checklist',
          blurb: 'Bill-of-sale template and a pointer to your state\'s transfer-law rules.',
        },
        {
          title: 'What happens if you buy a stolen gun?',
          href: '/blog/what-happens-if-you-buy-a-stolen-gun',
          blurb: 'Seizure, good-faith purchaser doctrine, and why paperwork matters.',
        },
      ]}
    />
  );
};

export default CheckGunPage;
