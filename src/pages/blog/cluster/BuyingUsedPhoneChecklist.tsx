import { ClusterArticleTemplate } from '@/components/blog/ClusterArticleTemplate';

export default function BuyingUsedPhoneChecklist() {
  return (
    <ClusterArticleTemplate
      slug="buying-used-phone-checklist"
      metaDescription="The 12-point checklist to run before you pay for a used phone. IMEI, activation lock, payment method, meetup rules — the whole playbook that kills 90% of scams."
      keywords="buying used phone checklist, used phone safety, how to buy used iPhone, avoid stolen phone scams"
      lastReviewed="February 8, 2026"
      intro={
        <>
          <p>
            Most people who lose money on a used phone lose it in the last five minutes of
            the transaction — the part where they hand over cash instead of running the
            check they meant to run.
          </p>
          <p>
            This is the 12-point checklist that separates the buyers who never post
            "Marketplace scam" from the ones who do. Nothing on it takes more than a
            minute. Together they kill almost every version of the used-phone scam.
          </p>
        </>
      }
      body={
        <>
          <h2>Before you agree to meet</h2>

          <h3>1. Ask for the IMEI</h3>
          <p>
            Message the seller: "Can you dial <code>*#06#</code> and send me a screenshot of
            the IMEI?" Their response tells you everything. Legit sellers send it in a
            minute. Scammers stall or refuse — that's your answer.
          </p>

          <h3>2. Run the IMEI on a stolen check</h3>
          <p>
            Drop it into our free <a href="/check-phone">phone check</a>. Twenty seconds. If
            it comes back reported stolen, blacklisted, or with an outstanding financial
            block, you are done. If it comes back clean, keep going.
          </p>

          <h3>3. Reverse-image search the photos</h3>
          <p>
            Right-click the listing photos and drop them into Google Images. Photos scraped
            from a different listing are the loudest scam signal there is. It takes ten
            seconds and catches maybe 30% of fake listings on the spot.
          </p>

          <h3>4. Ask model-specific questions</h3>
          <p>
            "Which iPhone 15 storage size?" "Is it the Pro or the Pro Max?" "USB-C or
            Lightning?" A real seller with a real phone answers in seconds. A scammer running
            twenty fake listings has to guess.
          </p>

          <h3>5. Ask for the original receipt or box</h3>
          <p>
            Neither is proof of ownership, but sellers who have both are much more often
            legitimate. And the box gives you a second place to cross-check the IMEI.
          </p>

          <h2>At the meetup</h2>

          <h3>6. Meet in a public, well-lit place — ideally a police station lobby</h3>
          <p>
            Most US police stations have designated "safe exchange zones" now, often with
            camera coverage. Sellers with clean phones don't care where you meet. Sellers
            with problem phones develop opinions.
          </p>

          <h3>7. Dial <code>*#06#</code> yourself</h3>
          <p>
            Take the phone in your hand and dial the code yourself. Confirm the IMEI matches
            what the seller messaged you and what's on the box or SIM tray. Any mismatch is
            the whole story.
          </p>

          <h3>8. Watch a fresh factory reset happen in front of you</h3>
          <p>
            On iPhone: <strong>Settings → General → Transfer or Reset iPhone → Erase All
            Content and Settings</strong>. They enter the Apple ID password, the phone
            wipes, the phone reboots to the Hello screen. That is what "iCloud unlocked"
            actually looks like. If they hand you a phone already wiped, don't buy — an
            Activation Lock screen may appear the moment you connect Wi-Fi. See our
            <a href="/blog/icloud-locked-phone-meaning"> iCloud locked explainer</a>.
          </p>
          <p>
            On Android: <strong>Settings → System → Reset → Factory data reset.</strong>
            Confirm the Google account is removed before setup begins.
          </p>

          <h3>9. Put your SIM in and make a real call</h3>
          <p>
            Not a Wi-Fi call. A cellular call. If the phone is blacklisted on the shared US
            carrier list, it may accept the SIM briefly then drop service within hours or
            days. Calling out and receiving a text back while you're still there is the
            fastest sanity check.
          </p>

          <h3>10. Test the basics in five minutes</h3>
          <p>Phone in your hand at the meetup:</p>
          <ul>
            <li>Front and rear cameras take photos and video.</li>
            <li>Touch ID / Face ID prompt appears at setup (means the sensor works and hasn't been swapped).</li>
            <li>All speakers audible, mic picks up your voice on a call.</li>
            <li>Charging port takes a cable snugly (not the seller's — bring your own).</li>
            <li>Battery health above 80% on iPhone: <strong>Settings → Battery → Battery Health</strong>.</li>
            <li>No "unknown parts" warning in the same menu on iPhone.</li>
          </ul>

          <h2>Paying — the step that decides recovery</h2>

          <h3>11. Pay with a method that has buyer protection</h3>
          <p>
            <strong>Credit card</strong> (via a platform that supports it) or
            <strong> PayPal Goods &amp; Services</strong>. Both give you a chargeback path if
            it turns out the phone was stolen. Zelle, Venmo Friends &amp; Family, Cash App,
            and cash have effectively no recovery path — they exist to be irreversible.
          </p>
          <p>
            If the seller insists on cash or Friends &amp; Family, the risk is entirely on
            you. Discount the price you're willing to pay accordingly, or walk.
          </p>

          <h3>12. Save everything until the phone is up and running for a week</h3>
          <p>
            Screenshot the listing before you meet. Save the message thread. Photograph the
            IMEI at the meetup. Keep the payment record. If a blacklist block lands three
            days later — which is the classic timing, since carriers batch those checks — you
            have everything you need for a chargeback or a report.
          </p>

          <h2>If you're the seller instead</h2>
          <p>
            The exact same checklist protects you from being accused later. Get the buyer's
            payment before the erase, do the erase in front of them, hand them a phone that
            passes their check, and keep a copy of the IMEI plus receipt. If you want to make
            a clean sale even faster, run a <a href="/check-phone">stolen-phone check</a> on
            your own phone before you list — clean-report screenshots are the best possible
            listing photo.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What is the single most important step on the checklist?',
          answer:
            'Running the IMEI on a stolen-phone check before the meetup. It catches blacklisted, financially blocked, and reported-stolen phones in one shot, and it filters out most scam sellers before you burn a Saturday driving to meet them.',
        },
        {
          question: 'Is it rude to insist on all 12 steps?',
          answer:
            'No — and any seller who gets offended by them is telling you exactly why they got offended. Legitimate sellers appreciate careful buyers because it protects them from a chargeback complaint later.',
        },
        {
          question: 'Do I need to bring anything to the meetup?',
          answer:
            'A charging cable, a paperclip for the SIM tray if the phone has one, your own SIM to test cellular service, and a payment method with buyer protection. That is the whole kit.',
        },
        {
          question: 'What if I already paid and now I think the phone is stolen?',
          answer:
            'Follow the step-by-step in our guide on what to do if you bought a stolen phone — do not reset the device, document the seller, and open a payment dispute the same day.',
        },
      ]}
    />
  );
}
