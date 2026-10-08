import { ClusterArticleTemplate } from "@/components/blog/ClusterArticleTemplate";

/**
 * Oct 7 2026: rewritten by hand for "buying used phone checklist" / "what to check when buying a
 * used phone". No Search Console rows for this URL yet. Removed "AI analysis", the statement that
 * SafeOrStolen doesn't check carrier blacklists (it now has a paid blacklist check), and the
 * "Proof of Clean Purchase" name in favour of the $1.99 verification certificate.
 */
export default function BuyingUsedPhoneChecklist() {
  return (
    <ClusterArticleTemplate
      slug="buying-used-phone-checklist"
      metaDescription="A used phone checklist for before you pay: get and check the IMEI, match it in person, watch the seller remove their account, test everything, and pay safely."
      keywords="buying used phone checklist, what to check when buying a used phone, used phone checklist, things to check before buying a used iphone, buying a second hand phone"
      lastReviewed="October 7, 2026"
      intro={
        <>
          <p>
            Before you buy a used phone: get the IMEI and check it, match it on the phone in
            person, watch the seller remove their Apple Account or Google account and erase the
            phone, set it up yourself, test calls and the hardware, and pay with something you
            can dispute. The checklist below takes about fifteen minutes at the meetup and covers
            the problems that cost buyers the most: stolen, locked, blocked or broken.
          </p>
        </>
      }
      body={
        <>
          <h2>Before you meet</h2>
          <h3>1. Get the IMEI</h3>
          <p>
            Ask the seller to dial <code>*#06#</code> and send a screenshot. Phones with two SIMs
            or an eSIM show two IMEIs; ask for both. If they won't send it, stop here.
          </p>
          <h3>2. Check it</h3>
          <p>
            Run the IMEI on the <a href="/imei-checker">free IMEI check</a>. It shows the make and
            model, so you can confirm it matches the listing, and searches SafeOrStolen theft
            reports and public web results. For an expensive phone, add the paid lost/stolen
            blacklist check.
          </p>
          <h3>3. Ask the questions that matter</h3>
          <ul>
            <li>Which carrier is it from, and is it paid off and unlocked?</li>
            <li>Has the screen, battery or camera ever been replaced?</li>
            <li>Do you have the box or the receipt?</li>
            <li>Can you sign out of your account and reset it with me there?</li>
          </ul>
          <p>
            The last question is the big one. An honest seller says yes. Someone who says it's
            "already reset" or that they'll "remove the account later" is telling you something.
          </p>
          <h3>4. Ask the seller to turn off Find My at home (iPhone)</h3>
          <p>
            Newer iPhones with Stolen Device Protection can make the owner wait an hour to turn
            off Find My when they're away from home. Asking them to do it before they leave saves
            a stalled meetup.
          </p>

          <h2>At the meetup</h2>
          <h3>5. Meet somewhere public and bring your SIM</h3>
          <p>
            A busy, well-lit place with Wi-Fi or good signal. Bring your SIM card (or your eSIM
            details), a charging cable and earbuds.
          </p>
          <h3>6. Match the IMEI</h3>
          <p>
            Dial <code>*#06#</code> yourself and compare it with what you checked. Compare it with
            the box too if there is one. Any mismatch, walk away.
          </p>
          <h3>7. Watch the account come off and the phone get erased</h3>
          <table>
            <thead>
              <tr>
                <th>Phone</th>
                <th>What the seller does</th>
                <th>What you should see after</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iPhone</td>
                <td>Turns off Find My, signs out of their Apple Account, then Settings &gt; General &gt; Transfer or Reset iPhone &gt; Erase All Content and Settings</td>
                <td>Setup reaches your own Apple Account sign-in, not "iPhone Locked to Owner" or Remote Management</td>
              </tr>
              <tr>
                <td>Samsung Galaxy</td>
                <td>Removes Google and Samsung accounts in Settings &gt; Accounts and backup &gt; Manage accounts, then Factory data reset</td>
                <td>Setup doesn't ask for a previously synced Google account</td>
              </tr>
              <tr>
                <td>Pixel and other Android</td>
                <td>Removes their Google account in Settings, then Settings &gt; System &gt; Reset options &gt; Erase all data</td>
                <td>Setup doesn't ask for a previously synced account or show an organization screen</td>
              </tr>
            </tbody>
          </table>
          <h3>8. Check the carrier lock</h3>
          <p>
            On iPhone, Settings &gt; General &gt; About &gt; Carrier Lock should say "No SIM
            restrictions", or name the carrier you use. On any phone, put your SIM in and make a
            call and send a text.
          </p>
          <h3>9. Test the hardware</h3>
          <ul>
            <li>Screen: open a white image and look for dead spots, lines or burn-in.</li>
            <li>Touch: drag an app icon across every part of the screen.</li>
            <li>Cameras: front and back, photo and video, and the flash.</li>
            <li>Speakers and microphones: record a voice memo and play it back, then make a call.</li>
            <li>Face ID, Touch ID or fingerprint: set one up.</li>
            <li>Charging: plug in your cable and check it starts charging.</li>
            <li>Buttons, the vibration switch or Action button, and Wi-Fi and Bluetooth.</li>
          </ul>
          <h3>10. Check battery and parts</h3>
          <p>
            On iPhone, look at Settings &gt; Battery &gt; Battery Health and Settings &gt; General &gt;
            About &gt; Parts and Service History. On Android, battery and repair details vary by
            brand. Replaced parts aren't proof of theft, but they should match what the seller told
            you.
          </p>

          <h2>Paying and afterward</h2>
          <h3>11. Pay with something you can dispute</h3>
          <p>
            A marketplace's own checkout, PayPal Goods &amp; Services or a credit card give you a way
            to dispute the payment if the phone turns out to be stolen or blocked. Cash, gift cards,
            crypto and "friends and family" payments usually don't.
          </p>
          <h3>12. Keep a record</h3>
          <p>
            Save the listing, messages, the IMEI and the payment confirmation. Your SafeOrStolen
            check is saved to your account with the date. For $1.99 (free for monthly members) you
            can add a verification certificate: a dated record with its own link showing you
            checked before the sale.
          </p>

          <h2>If something goes wrong</h2>
          <p>
            Don't resell the phone or try to bypass a lock. Follow{' '}
            <a href="/blog/bought-stolen-phone-what-to-do">what to do if you bought a stolen phone</a>.
            For iPhone-specific checks, see{' '}
            <a href="/blog/how-to-check-if-iphone-stolen">how to check if an iPhone is stolen</a>.
          </p>
        </>
      }
      faqs={[
        {
          question: "What should I check before buying a used phone?",
          answer:
            "Check the IMEI for theft reports and blacklisting, match it on the phone with *#06#, watch the seller remove their Apple Account or Google account and erase the phone, set it up yourself, test a call with your SIM, and test the screen, cameras, speakers and charging. Pay with a method you can dispute.",
        },
        {
          question: "How do I know a used phone isn't stolen?",
          answer:
            "Check the IMEI on SafeOrStolen (safeorstolen.com/imei-checker) for theft reports, and add the paid blacklist check for an expensive phone. Then make sure the seller can remove their account and erase the phone in front of you. A thief can't do that without the owner's password.",
        },
        {
          question: "Does a clean IMEI mean the phone is safe to buy?",
          answer:
            "No. It means nothing matched in the sources searched. A phone can be stolen and not reported yet, still locked to an owner's account, financed, or carrier-locked. The account and carrier checks at the meetup cover what an IMEI lookup can't see.",
        },
        {
          question: "What should I bring when buying a used phone?",
          answer:
            "Bring your SIM card or eSIM details so you can test a call, a charging cable to test the port, and earbuds if you want to test audio. Have the IMEI the seller sent you on your own phone so you can compare it with *#06# on theirs.",
        },
        {
          question: "What if the seller won't let me check the phone?",
          answer:
            "Don't buy it. A seller who owns the phone has no reason to refuse an IMEI check, a reset in front of you, or a quick test call. Refusing any of them is the most common sign that the phone is stolen, locked or broken.",
        },
      ]}
    />
  );
}
