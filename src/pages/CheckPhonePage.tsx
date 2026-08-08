import { Link } from 'react-router-dom';
import { PillarPageTemplate } from '@/components/seo/PillarPageTemplate';

/**
 * PILLAR 1 — /check-phone
 * "Check If a Phone Is Stolen Before You Buy"
 * Rewritten (2026) as part of the topical-authority build.
 */
const CheckPhonePage = () => {
  return (
    <PillarPageTemplate
      route="/check-phone"
      pillarName="Check Phone"
      title="Check If a Phone Is Stolen — Free IMEI Check | SafeOrStolen"
      description="Enter any IMEI to check if a phone is reported lost or stolen before you buy. Free instant results from 100+ databases."
      keywords="check if phone stolen, free IMEI check, stolen phone check, blacklist IMEI check, buy used phone safely"
      h1="Check If a Phone Is Stolen Before You Buy"
      intro={
        <>
          <p>
            Buying a used phone can save you hundreds of dollars — or cost you everything you paid,
            plus the phone itself. If a device has been reported lost or stolen, the carrier can
            block it from every major network, and law enforcement can seize it from you even
            though you paid in good faith.
          </p>
          <p>
            Thirty seconds with the serial number tells you what the seller might not.
          </p>
        </>
      }
      sections={
        <>
          <h2>How to find the IMEI</h2>
          <ul>
            <li>Dial <strong>*#06#</strong> on the phone — the IMEI appears instantly</li>
            <li>Settings → About Phone (Android) or Settings → General → About (iPhone)</li>
            <li>Printed on the SIM tray, original box, or purchase receipt</li>
          </ul>
          <p>
            Ask the seller for the IMEI before you meet. A legitimate seller sends it in under a
            minute. A seller who refuses, stalls, or sends a photo of a different device just
            answered your real question.
          </p>

          <h2>What we check</h2>
          <p>
            SafeOrStolen queries stolen-device and blacklist records across more than 100 databases,
            including carrier blacklist status, loss and theft reports, and our own user-submitted
            theft registry. A result comes back in seconds:
          </p>
          <ul>
            <li><strong>Clean</strong> — no loss, theft, or blacklist records found for this identifier</li>
            <li><strong>Flagged</strong> — the device has been reported lost, stolen, or blacklisted. Walk away.</li>
          </ul>

          <h2>What a "clean" result means — honestly</h2>
          <p>
            No single database catches everything. A clean result means no report exists in the
            sources we check at this moment — it is strong evidence, not a legal guarantee. That's
            why we also recommend meeting in a police-station safe-exchange zone and getting a
            written receipt with the seller's name and the IMEI on it. Those two habits, plus a
            clean check, remove nearly all of the risk.
          </p>

          <h2>Already bought a phone and worried?</h2>
          <p>
            Don't panic, and don't sell it onward — knowingly transferring stolen property is a
            crime in every state. Run the check now, and if it comes back flagged, read our
            step-by-step guide:{' '}
            <Link to="/blog/bought-stolen-phone-what-to-do">
              What to do if you bought a stolen phone →
            </Link>
          </p>

          <p className="!mt-10 !text-base opacity-90">
            <em>Why this site exists:</em> SafeOrStolen was built after our founder watched a
            friend — a disabled man who unknowingly accepted a stolen tablet as loan collateral —
            get arrested, and ultimately lose his home fighting the fallout. One free check would
            have prevented all of it.{' '}
            <Link to="/our-story">Read Glen's story →</Link>
          </p>
        </>
      }
      relatedGuides={[
        {
          title: 'I bought a stolen phone — what do I do now?',
          href: '/blog/bought-stolen-phone-what-to-do',
          blurb: 'Calm, non-judgmental steps: refunds, police reports, and payment disputes.',
        },
        {
          title: 'What is a blacklisted IMEI (and can it be fixed)?',
          href: '/blog/what-is-a-blacklisted-imei',
          blurb: 'How carrier blacklists work, the carrier and manufacturer blacklists block list, and why "cleaning" services are scams.',
        },
        {
          title: 'iCloud locked phone: what it means when you\'re buying',
          href: '/blog/icloud-locked-phone-meaning',
          blurb: 'Activation Lock isn\'t always stolen — but you should never buy one. Here\'s how to remove it in person.',
        },
        {
          title: 'How to find an IMEI number on any device',
          href: '/blog/how-to-find-imei-number',
          blurb: '*#06#, per-brand settings paths, box and receipt locations, watches and tablets.',
        },
        {
          title: 'The 5-minute used-phone buying checklist',
          href: '/blog/buying-used-phone-checklist',
          blurb: 'IMEI check, activation-lock check, SIM test, safe meet-up, and a downloadable receipt template.',
        },
      ]}
    />
  );
};

export default CheckPhonePage;
