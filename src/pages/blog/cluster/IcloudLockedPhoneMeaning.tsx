import { ClusterArticleTemplate } from '@/components/blog/ClusterArticleTemplate';

/**
 * Oct 7 2026: rewritten by hand for "icloud locked meaning" / "what does icloud locked mean".
 * No Search Console rows for this URL yet. Removed the "$30 to $150" parts-value figure, the
 * "30% of retail" line, the unsourced claim that iPhone thefts "dropped sharply", and the
 * "insider service" speculation. Pre-purchase iPhone steps live on
 * /blog/how-to-check-if-iphone-stolen; this page explains what the lock means.
 */
export default function IcloudLockedPhoneMeaning() {
  return (
    <ClusterArticleTemplate
      slug="icloud-locked-phone-meaning"
      metaDescription="iCloud locked means an iPhone is still tied to someone else's Apple Account by Activation Lock. What the lock screens say, why it happens, and who can remove it."
      keywords="icloud locked meaning, what does icloud locked mean, icloud locked iphone, activation lock, iphone locked to owner, is an icloud locked phone stolen"
      lastReviewed="October 7, 2026"
      intro={
        <>
          <p>
            "iCloud locked" means an iPhone is still protected by Activation Lock and tied to
            someone's Apple Account. After it's erased, it won't finish setup until that
            account's email and password are entered. On current iOS the screen says{' '}
            <strong>iPhone Locked to Owner</strong>. Only the account owner, or Apple with the
            original proof of purchase, can remove it. A factory reset does not.
          </p>
          <p>
            An iCloud-locked phone isn't always stolen, but for a buyer it's never usable. Here's
            what the lock is, why a used iPhone ends up locked, and what to do about it.
          </p>
        </>
      }
      body={
        <>
          <h2>What Activation Lock is</h2>
          <p>
            Activation Lock turns on by itself when the owner turns on Find My. From then on, the
            iPhone is linked to their Apple Account on Apple's side, not just on the phone. Erasing
            the iPhone, restoring it from a computer, or swapping the SIM doesn't break the link.
            When the phone starts up again, it checks with Apple and asks for that account.
          </p>
          <p>
            iPads, Apple Watches and Macs with Apple silicon or a T2 chip have Activation Lock
            too. AirPods don't, but they can still be linked to the owner's Apple Account. Our
            guide to <a href="/how-to-check-if-apple-device-stolen">checking an iPad, Apple Watch
            or AirPods</a> covers those.
          </p>

          <h2>What the screens look like</h2>
          <table>
            <thead>
              <tr>
                <th>Screen</th>
                <th>What it means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iPhone Locked to Owner (asks for Apple Account email and password)</td>
                <td>Activation Lock is on. The previous owner's account is still attached.</td>
              </tr>
              <tr>
                <td>A lock screen with a message and phone number</td>
                <td>Lost Mode. The owner has marked the iPhone lost in Find My.</td>
              </tr>
              <tr>
                <td>Remote Management during setup</td>
                <td>Not iCloud lock: a company or school manages the device. Still not one to buy.</td>
              </tr>
              <tr>
                <td>Asks for a passcode, with "Forgot passcode?" at the bottom</td>
                <td>The phone hasn't been erased. The seller should know the passcode.</td>
              </tr>
            </tbody>
          </table>

          <h2>Why a used iPhone ends up iCloud locked</h2>
          <ol>
            <li>
              <strong>The seller forgot to sign out.</strong> Fixable in a few minutes if the
              seller is the owner: they remove the device from their account in Find My on another
              device or on iCloud on the web.
            </li>
            <li>
              <strong>The owner can't be reached.</strong> An inherited phone, or one from someone
              who forgot their password. Apple can sometimes remove the lock for the owner with the
              original proof of purchase. A later buyer usually can't use that route.
            </li>
            <li>
              <strong>The phone is stolen or lost.</strong> The seller doesn't have the password
              because the account isn't theirs. This is why a cheap "iCloud locked, for parts"
              listing for a recent iPhone is a warning sign, not a bargain.
            </li>
          </ol>

          <h2>iCloud locked vs carrier locked vs blacklisted</h2>
          <ul>
            <li>
              <strong>iCloud locked:</strong> tied to an Apple Account. You can't set up the phone
              at all.
            </li>
            <li>
              <strong>Carrier locked:</strong> the iPhone only works with one carrier's SIM until
              that carrier unlocks it. Settings &gt; General &gt; About &gt; Carrier Lock says "No
              SIM restrictions" when it's unlocked. Common and not a sign of theft on its own.
            </li>
            <li>
              <strong>Blacklisted:</strong> carriers have blocked the IMEI. The phone sets up but
              gets no service. See <a href="/blog/what-is-a-blacklisted-imei">what a blacklisted
              IMEI is</a>.
            </li>
          </ul>
          <p>
            A phone can have one, two or all three. An IMEI check can't see Activation Lock, and
            Apple no longer offers a public page to look it up, so the only way to know is on the
            phone itself.
          </p>

          <h2>Checking for it before you buy</h2>
          <p>
            Have the seller turn off Find My, sign out of their Apple Account, and erase the iPhone
            while you watch, then start setup yourself on Wi-Fi. If it gets past the Apple Account
            step to the Home Screen with your own account, it's not locked. The full meetup routine,
            including the IMEI check and Stolen Device Protection delay, is in{' '}
            <a href="/blog/how-to-check-if-iphone-stolen">how to check if an iPhone is stolen</a>.
          </p>

          <h2>If you already bought an iCloud-locked iPhone</h2>
          <p>
            Ask the seller to remove the device from their Apple Account. If they can, the lock
            goes away the next time the phone connects. If they can't or won't, treat it as a
            possibly stolen phone: don't keep trying to bypass it, save the listing and messages,
            and follow <a href="/blog/bought-stolen-phone-what-to-do">what to do if you bought a
            stolen phone</a>.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What does iCloud locked mean?',
          answer:
            "It means the iPhone has Activation Lock on and is still linked to someone's Apple Account. After an erase it asks for that account's email and password, shown as 'iPhone Locked to Owner', and it can't be set up without them. Only the owner, or Apple with proof of purchase, can remove it.",
        },
        {
          question: 'Is an iCloud-locked iPhone stolen?',
          answer:
            "Not always. Sometimes the seller forgot to sign out or inherited the phone. But a seller who can't remove the lock in front of you doesn't control the phone, and a cheap iCloud-locked listing for a recent model is a common sign of a stolen or lost iPhone. Don't buy one.",
        },
        {
          question: 'Does a factory reset remove iCloud lock?',
          answer:
            "No. Erasing or restoring the iPhone keeps Activation Lock, because the link to the owner's Apple Account is stored with Apple, not just on the phone. When the phone restarts, it asks for that account again. The owner has to remove the device from their account.",
        },
        {
          question: 'Can Apple remove iCloud lock?',
          answer:
            "Apple can remove Activation Lock for the owner if they provide the original proof of purchase that shows the device. If you bought the phone secondhand from a private seller, that route generally isn't available to you, so ask the seller to remove the device from their account instead.",
        },
        {
          question: 'Can I check if an iPhone is iCloud locked by IMEI?',
          answer:
            "Not anymore. Apple removed its public Activation Lock status page, and IMEI checkers, including SafeOrStolen (safeorstolen.com/imei-checker), can't see Apple Account status. Check it on the phone: watch the seller erase it, then start setup yourself. If it asks for someone else's Apple Account, it's locked.",
        },
        {
          question: 'Do iCloud unlock services work?',
          answer:
            "Don't rely on them. Activation Lock is designed so only the account owner or Apple can remove it. Paid unlock services often take the money and deliver nothing, and some try to trick the real owner into handing over their password. A phone that needs one is a phone not to buy.",
        },
      ]}
    />
  );
}
