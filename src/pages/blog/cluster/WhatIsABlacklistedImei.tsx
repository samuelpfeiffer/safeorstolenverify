import { ClusterArticleTemplate } from '@/components/blog/ClusterArticleTemplate';

/**
 * Oct 7 2026: rewritten by hand for "blacklisted phone" / "what is a blacklisted IMEI" /
 * "blacklist phone meaning" (Search Console: "blacklisted phone" 4 impressions, position ~48;
 * also "can a blacklisted phone be tracked", "blacklist imei"). Removed the wrong statute citation
 * (18 U.S.C. § 1039 is about phone records, not IMEI changes), the "four major carriers" and
 * "worth well under $100" claims, and links to /check-phone in favour of /imei-checker.
 */
export default function WhatIsABlacklistedImei() {
  return (
    <ClusterArticleTemplate
      slug="what-is-a-blacklisted-imei"
      metaDescription="A blacklisted phone has had its IMEI blocked by carriers after a loss, theft or unpaid bill. What it means, how to check, whether it can be tracked or removed."
      keywords="blacklisted phone, blacklisted imei, what is a blacklisted imei, blacklist phone meaning, can a blacklisted phone be tracked, imei blacklist check"
      lastReviewed="October 7, 2026"
      intro={
        <>
          <p>
            A blacklisted phone is one whose IMEI has been blocked by carriers, usually because
            it was reported lost or stolen or because the bill or device payments went unpaid. A
            blacklisted phone can't make calls, send texts or use mobile data on carriers that
            honor the block. It still turns on and works on Wi-Fi, which is why sellers can
            make it look fine at a meetup.
          </p>
          <p>
            Below: why phones get blacklisted, how to check before you buy, whether a blacklisted
            phone can be tracked, and why "unblacklist" services aren't the answer.
          </p>
        </>
      }
      body={
        <>
          <h2>What "blacklisted" actually means</h2>
          <p>
            Every phone has an IMEI, a 15-digit number the network sees each time the phone
            connects. When an owner reports a phone lost or stolen, their carrier can add that
            IMEI to a block list. Carriers share these lists, so the block usually follows the
            phone to other carriers too, not just the one that sold it. Many carriers outside
            the US check shared lists as well.
          </p>
          <p>
            The block is on the hardware, not the SIM. Putting in a new SIM doesn't help. The
            phone either won't register on the network or shows "No service" or "SIM not
            supported" even with a working SIM.
          </p>

          <h2>Why a phone gets blacklisted</h2>
          <table>
            <thead>
              <tr>
                <th>Reason</th>
                <th>What happened</th>
                <th>Can the block be lifted?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reported stolen</td>
                <td>The owner told their carrier (and usually the police) the phone was stolen</td>
                <td>Only if the owner gets it back and asks the carrier</td>
              </tr>
              <tr>
                <td>Reported lost</td>
                <td>The owner reported it lost, often to claim insurance or get a replacement</td>
                <td>Only by the owner, through their carrier</td>
              </tr>
              <tr>
                <td>Unpaid balance</td>
                <td>The phone was on a payment plan or account that went unpaid</td>
                <td>When the balance is paid, by the carrier</td>
              </tr>
            </tbody>
          </table>
          <p>
            From the buyer's side these all look the same: the phone works on Wi-Fi and never
            gets a signal on your SIM.
          </p>

          <h2>Blacklisted vs stolen vs locked</h2>
          <ul>
            <li>
              <strong>Blacklisted:</strong> carriers block the IMEI. The phone won't get cellular
              service.
            </li>
            <li>
              <strong>Reported stolen:</strong> there's a theft report on the IMEI. A stolen phone
              isn't always blacklisted, because some owners call the police but never the carrier.
            </li>
            <li>
              <strong>Carrier-locked:</strong> the phone only works on the carrier that sold it,
              usually until it's paid off. That's normal and not a blacklist.
            </li>
            <li>
              <strong>Account-locked:</strong> the phone is still tied to the owner's Apple Account
              or Google account. See <a href="/blog/icloud-locked-phone-meaning">what an iCloud-locked
              phone means</a>.
            </li>
          </ul>

          <h2>How to check if an IMEI is blacklisted</h2>
          <p>
            Ask the seller to dial <code>*#06#</code> and send a screenshot. Then run the IMEI
            through a blacklist check before you meet. On SafeOrStolen the blacklist check is a
            paid check, and the <a href="/imei-checker">free IMEI check</a> separately shows the
            model and searches theft reports and public web results. In the US, CTIA's free
            Stolen Phone Checker is another place to look; SafeOrStolen doesn't query it for you.
          </p>
          <p>
            At the meetup, dial <code>*#06#</code> yourself to make sure the IMEI on the phone is
            the one you checked, then put your SIM in and make a call. A phone that was clean
            when you checked it can still be blacklisted later if it's reported afterward, so keep
            a record of your check and the payment.
          </p>

          <h2>Can a blacklisted phone be tracked?</h2>
          <p>
            The blacklist itself doesn't track anything. It only stops the phone using the
            network. But a stolen phone is often still signed in to the owner's account, and
            the owner can see its location in Apple's Find My or Google's Find Hub whenever it
            connects to Wi-Fi. Police can also ask carriers for records about a device as part
            of an investigation.
          </p>

          <h2>Can you unblacklist a phone?</h2>
          <p>
            Only the person or carrier who caused the block can remove it. If the original owner
            pays off the balance, or gets a lost phone back and tells the carrier, the carrier can
            lift it. Nobody else can.
          </p>
          <p>
            Websites that offer to "clean" or unblacklist an IMEI for a fee can't edit carrier
            lists. At best they take your money. At worst they change the phone's IMEI, which is
            illegal in many countries, including the UK, and can get you into far more trouble
            than a dead phone.
          </p>

          <h2>Already bought a blacklisted phone?</h2>
          <p>
            Contact the seller and ask for a refund, and open a dispute if you paid through a
            platform or card. If the phone was reported stolen, stop using it and follow our
            steps for <a href="/blog/bought-stolen-phone-what-to-do">what to do if you bought a
            stolen phone</a>.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What does it mean when a phone is blacklisted?',
          answer:
            "It means carriers have blocked the phone's IMEI, usually after it was reported lost or stolen or after an unpaid balance. A blacklisted phone can't make calls, send texts or use mobile data on carriers that honor the block, but it still works on Wi-Fi.",
        },
        {
          question: 'How do I check if a phone is blacklisted?',
          answer:
            "Get the IMEI by dialing *#06# and run a blacklist check. SafeOrStolen (safeorstolen.com/imei-checker) offers a paid lost/stolen blacklist check, and its free check shows the model and searches theft reports. In the US, CTIA's free Stolen Phone Checker is another option.",
        },
        {
          question: 'Can a blacklisted phone be tracked?',
          answer:
            "Not by the blacklist itself, which only blocks network access. If the owner's Apple Account or Google account is still on the phone, the owner can see its location through Find My or Find Hub whenever it's online, including over Wi-Fi.",
        },
        {
          question: 'Can a blacklisted phone be used with a different SIM?',
          answer:
            "No. The block is on the phone's IMEI, not the SIM, so a new SIM or a different carrier that honors the block won't fix it. The phone can still be used on Wi-Fi for apps, but not for calls, texts or mobile data.",
        },
        {
          question: 'Do IMEI unblacklist services work?',
          answer:
            "No. Only the original owner or carrier can remove a block. Services that promise to clean an IMEI either can't do it or do it by changing the IMEI, which is illegal in many countries. Don't pay for one and don't buy a phone advertised as 'unblacklisted'.",
        },
        {
          question: 'Is a blacklisted phone always stolen?',
          answer:
            "No. Phones are also blacklisted for unpaid balances or after being reported lost. But you can't tell which from the outside, and a blacklisted phone won't work on your SIM either way, so treat any blacklisted phone as a phone not to buy.",
        },
      ]}
    />
  );
}
