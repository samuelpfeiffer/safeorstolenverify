import { Link } from '@/lib/router-compat';
import { PillarPageTemplate } from '@/components/seo/PillarPageTemplate';

/**
 * PILLAR 4 — /check-vin
 * "Check a VIN for Theft and Title Problems"
 */
const CheckVinPage = () => {
  return (
    <PillarPageTemplate
      route="/vin-checker"
      pillarName="Check VIN"
      title="Stolen Vehicle VIN Check — Verify Before You Buy | SafeOrStolen"
      description="Run a VIN to check theft records, title problems, and history before buying a used car, motorcycle, or trailer."
      keywords="stolen vehicle VIN check, free VIN check, VIN lookup theft, title washing check, used car VIN verify"
      h1="Check a VIN for Theft and Title Problems"
      intro={
        <>
          <p>
            A vehicle's 17-character VIN identifies it — our own stolen reports and public web results
            titles, flood damage, odometer rollbacks. Sellers know most buyers never run it.
          </p>
        </>
      }
      sections={
        <>
          <h2>Where to find the VIN</h2>
          <ul>
            <li>Driver's-side dashboard, visible through the windshield</li>
            <li>Driver's-side door jamb sticker</li>
            <li>
              Title, registration, and insurance documents — make sure all three match the car
            </li>
          </ul>
          <p>
            A VIN plate that looks tampered with, re-riveted, or mismatched between the dash and
            door jamb is a stop-everything red flag: VIN swapping is how professional theft rings
            retitle stolen cars.
          </p>

          <h2>What we check</h2>
          <p>
            Theft records, brand history (salvage, flood, rebuilt, lemon), and title status. For
            deep history including ownership count and accident records, we'll point you to a full
            paid report — but the theft and brand check is where the catastrophic risk lives, and
            that's what we surface first.
          </p>

          <h2>The free-check trap</h2>
          <p>
            Plenty of sites advertise "free VIN checks" that return nothing but the make and model,
            then upsell you. Our free tier answers the question that actually matters — <em>is this
            vehicle reported stolen, and is its title branded</em> — before you spend anything.
          </p>

          <h2>If your vehicle was stolen</h2>
          <p>
            File a police report immediately with the VIN and license plate, then list the vehicle
            with us so any buyer running a check will see the theft report.{' '}
            <Link to="/report-stolen">Report a stolen vehicle →</Link>
          </p>
        </>
      }
      relatedGuides={[
        {
          title: 'What a free VIN check actually shows',
          href: '/blog/free-vin-check-what-it-shows',
          blurb: 'The gap between marketing and the real data — and how to use free tiers wisely.',
        },
        {
          title: 'How to spot a stolen car before you buy',
          href: '/blog/stolen-car-vin-check',
          blurb: 'VIN plate tampering, mismatched docs, no-title excuses, and curbstoning.',
        },
        {
          title: 'Title washing, explained',
          href: '/blog/title-washing-explained',
          blurb: 'How salvage brands disappear when a title crosses state lines.',
        },
      ]}
    />
  );
};

export default CheckVinPage;
