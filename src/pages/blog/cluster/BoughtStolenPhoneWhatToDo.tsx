import { ClusterArticleTemplate } from '@/components/blog/ClusterArticleTemplate';

/**
 * Oct 7 2026: rewritten by hand for "bought a stolen phone what to do" / "i bought a stolen phone".
 * No Search Console rows for this URL yet. Removed the "$600" loss figure, the "twenty seconds"
 * claim, the claim that Apple uses the carrier blacklist, and links to /check-phone (now
 * /imei-checker). Legal points are kept general.
 */
export default function BoughtStolenPhoneWhatToDo() {
  return (
    <ClusterArticleTemplate
      slug="bought-stolen-phone-what-to-do"
      metaDescription="Bought a phone that turned out to be stolen? What to do, in order: stop using it, keep the evidence, report it to police, and try to get your money back."
      keywords="bought a stolen phone, i bought a stolen phone what do i do, what to do if you bought a stolen phone, accidentally bought stolen phone, bought stolen iphone"
      lastReviewed="October 7, 2026"
      intro={
        <>
          <p>
            If you bought a phone that turns out to be stolen, stop using it, don't reset it,
            save the listing, messages and payment record, and report it to your local police.
            Then ask your payment provider or the marketplace for your money back. Buying a
            stolen phone without knowing is generally not a crime, but you usually can't keep
            the phone, and acting quickly is what shows you bought it in good faith.
          </p>
          <p>Here's each step, in the order that protects you.</p>
        </>
      }
      body={
        <>
          <h2>How you usually find out</h2>
          <ul>
            <li>The phone shows "No service" or "SIM not supported" with a working SIM a few days after you bought it. That's often a blacklist.</li>
            <li>After a reset, it asks for someone else's Apple Account ("iPhone Locked to Owner") or a Google account previously synced on the device.</li>
            <li>The lock screen suddenly shows a message and phone number from the owner. They've marked it lost.</li>
            <li>An IMEI check comes back "reported stolen".</li>
            <li>Police or the owner contact you.</li>
          </ul>

          <h2>Step 1: Stop using it and don't reset it</h2>
          <p>
            Take your SIM out, sign out of your own accounts, and put the phone somewhere safe.
            Don't erase it, don't try to bypass a lock, and don't sell it on. The lock screen, the
            owner's message and the IMEI are your evidence. Trying to resell a phone once you
            know it's stolen can turn an innocent mistake into a crime.
          </p>

          <h2>Step 2: Confirm what's wrong</h2>
          <p>
            Not every dead phone is stolen. Dial <code>*#06#</code> for the IMEI and run it on the{' '}
            <a href="/imei-checker">IMEI check</a>. The free check searches SafeOrStolen theft
            reports and public web results; the paid check looks at the carrier lost/stolen
            blacklist. A phone can also be blocked because the previous owner stopped paying for
            it, or simply locked to another carrier. Those are still the seller's problem, but
            the steps below differ a little.
          </p>

          <h2>Step 3: Save everything</h2>
          <ul>
            <li>Screenshots of the listing and the seller's profile</li>
            <li>Every message with the seller, including their phone number or username</li>
            <li>The payment record: card statement, payment app receipt, or bank transfer</li>
            <li>A photo of the phone showing the IMEI and any lock or owner message</li>
            <li>Where and when you met, and anything the seller said about the phone</li>
          </ul>
          <p>
            If you ran a SafeOrStolen check before buying, it's saved to your account with the
            date. That record helps show you checked before you paid.
          </p>

          <h2>Step 4: Report it to the police</h2>
          <p>
            Call your local police non-emergency line or use their online report if they have
            one. Tell them you bought a phone you now believe is stolen, and give them the IMEI,
            the seller's details and your evidence. Ask for a report number. Reporting it
            yourself is the clearest way to show you were the buyer, not part of the theft.
          </p>
          <p>
            Expect the phone to go back to its owner. The law generally doesn't let a thief pass
            ownership to anyone, so even a buyer who paid in good faith usually has to give it up.
          </p>

          <h2>Step 5: Try to get your money back</h2>
          <table>
            <thead>
              <tr>
                <th>How you paid</th>
                <th>What to do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Credit card</td>
                <td>Call the card issuer and dispute the charge. Give them the police report number.</td>
              </tr>
              <tr>
                <td>PayPal Goods &amp; Services, or a marketplace's own checkout</td>
                <td>Open a dispute or claim through that service as soon as you can. Their time limits are strict.</td>
              </tr>
              <tr>
                <td>Cash, Zelle, Venmo friends payments, Cash App</td>
                <td>These usually can't be reversed. Your options are asking the seller, the police report, and small claims court if you can identify them.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Also report the seller's account to the marketplace (Facebook Marketplace, OfferUp,
            eBay, Craigslist) with the report number, so they can't keep selling.
          </p>

          <h2>Should you contact the seller?</h2>
          <p>
            A calm message asking for a refund is fine. Don't threaten them or meet them again.
            Many sellers of stolen phones delete their account once they're questioned, so save
            your screenshots before you send anything.
          </p>

          <h2>Next time</h2>
          <p>
            Get the IMEI before you meet, check it, and watch the seller erase the phone and remove
            their account before you pay. Our{' '}
            <a href="/blog/buying-used-phone-checklist">used phone checklist</a> covers the whole
            meetup, and <a href="/blog/how-to-check-if-iphone-stolen">how to check if an iPhone is
            stolen</a> covers Activation Lock.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What happens if you accidentally buy a stolen phone?',
          answer:
            "You generally aren't charged with a crime if you didn't know it was stolen, but you usually lose the phone, because police return stolen property to its owner. Stop using it, keep your evidence, report it to police, and ask your payment provider about a dispute.",
        },
        {
          question: 'Can I get in trouble for buying a stolen phone?',
          answer:
            'Receiving stolen property laws generally require that you knew, or in some states should have known, the phone was stolen. A very low price or a seller who hid the IMEI can count against you. Reporting it to police yourself and keeping your pre-purchase checks helps show good faith. Laws vary by state.',
        },
        {
          question: 'Can I keep a stolen phone if I paid for it?',
          answer:
            "Usually not. A thief generally can't pass ownership to anyone, so the original owner still owns the phone even if you paid a fair price in good faith. Police can return it to them. Your claim for the money is against the seller, not the owner.",
        },
        {
          question: 'Can a stolen phone be unlocked or unblacklisted?',
          answer:
            "No. Activation Lock, Google's Factory Reset Protection and a carrier blacklist can only be removed by the owner or the carrier. Paid unlock or IMEI 'cleaning' services don't fix it, and changing an IMEI is illegal in many countries. Don't spend more money on the phone.",
        },
        {
          question: 'How do I get my money back after buying a stolen phone?',
          answer:
            "Dispute the payment if you used a credit card, PayPal Goods & Services or a marketplace checkout, and give them your police report number. Cash and most payment-app transfers can't be reversed, so your options are the seller, the police case, or small claims court.",
        },
        {
          question: 'How do I check if a phone is reported stolen?',
          answer:
            "Dial *#06# for the IMEI and enter it on SafeOrStolen (safeorstolen.com/imei-checker). It searches SafeOrStolen theft reports and public web results and shows the phone's model, and a paid check covers the carrier lost/stolen blacklist. A free account includes 2 checks.",
        },
      ]}
    />
  );
}
