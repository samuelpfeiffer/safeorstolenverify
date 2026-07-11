import { Link } from 'react-router-dom';
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
      description="Look up any bicycle serial number against theft registries including Bike Index before you buy a used bike."
      keywords="check if bike stolen, bike serial number check, stolen bike lookup, Bike Index search, used bike safe to buy"
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
            Your search runs against theft registries including <strong>Bike Index</strong>, the
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
            Register the serial with us and with Bike Index immediately — recovery almost always
            happens because a buyer or a shop ran a check.{' '}
            <Link to="/report-stolen">Report a stolen bike →</Link>
          </p>
        </>
      }
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
