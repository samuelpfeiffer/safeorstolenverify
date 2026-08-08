import { ClusterArticleTemplate } from '@/components/blog/ClusterArticleTemplate';

export default function HowToFindImeiNumber() {
  return (
    <ClusterArticleTemplate
      slug="how-to-find-imei-number"
      metaDescription="Every way to find the IMEI on an iPhone, Android, or a used phone you don't own yet — dial code, settings menu, box, SIM tray, and carrier records."
      keywords="how to find IMEI, find IMEI iPhone, find IMEI Android, IMEI dial code, IMEI on phone box"
      lastReviewed="February 8, 2026"
      intro={
        <>
          <p>
            The IMEI is the 15-digit number that uniquely identifies a phone on the cellular
            network. If you're buying a used phone, it is the single piece of information
            you need before you agree to anything — no IMEI, no check, no deal.
          </p>
          <p>
            Here's how to pull the IMEI in every situation: on a phone in your hand, from a
            seller who hasn't handed it over yet, off the box, off the SIM tray, and from
            your carrier's records if the phone is stolen.
          </p>
        </>
      }
      body={
        <>
          <h2>The one dial code that works on every phone</h2>
          <p>
            Open the phone app and dial <code>*#06#</code> — including the star and the
            hash. Don't press the green call button; the IMEI pops up automatically. Works on
            iPhone, Android, feature phones, and even most tablets with cellular. This is
            the fastest way and it works before the phone is set up (you can do it from the
            emergency dialer on the lock screen).
          </p>
          <p>
            On dual-SIM phones you'll see two IMEIs. Either one is a valid identifier; when
            in doubt, screenshot both and check both on our <a href="/check-phone">phone check</a>.
          </p>

          <h2>Where to find the IMEI on an iPhone</h2>
          <ul>
            <li><strong>Dial <code>*#06#</code></strong> — quickest.</li>
            <li><strong>Settings → General → About</strong> — scroll down. You'll see IMEI, MEID, and serial number.</li>
            <li><strong>SIM tray:</strong> on iPhone 6s through iPhone 13, the IMEI is engraved on the SIM tray itself. Pop it out with a paperclip and hold it under a light.</li>
            <li><strong>Back of the phone:</strong> the original iPhone SE (1st gen) has it laser-etched on the back. Later models don't.</li>
            <li><strong>iCloud.com → Devices:</strong> if you can sign into the Apple ID that owns the phone, every device tied to it lists its IMEI.</li>
            <li><strong>Original box:</strong> printed on the barcode sticker.</li>
          </ul>

          <h2>Where to find the IMEI on an Android</h2>
          <ul>
            <li><strong>Dial <code>*#06#</code></strong> — same as iPhone.</li>
            <li><strong>Settings → About phone → IMEI</strong> (exact path varies by manufacturer — Samsung, Google, Xiaomi, and OnePlus all put it under About).</li>
            <li><strong>Battery compartment</strong> on removable-battery phones. Increasingly rare.</li>
            <li><strong>Original box</strong> and the sticker on the charger case, if present.</li>
            <li><strong>Google account → Your devices</strong> lists the IMEI for devices signed in with your Google account.</li>
          </ul>

          <h2>How to get the IMEI from a seller before you meet</h2>
          <p>
            This is the whole point of the exercise for used-phone buyers. Ask the seller
            directly:
          </p>
          <blockquote>
            "Can you send me a photo of the IMEI? Dial <code>*#06#</code> on the phone and
            screenshot it, or send me a photo of the SIM tray or the back of the box."
          </blockquote>
          <p>
            A legitimate seller sends it in under a minute. A seller who dodges the request,
            claims their phone can't dial codes, or sends you an IMEI that doesn't match a
            plausible model is telling you what you need to know. Once you have the number,
            run it on our free <a href="/check-phone">phone check</a> before you agree to
            meet.
          </p>

          <h2>Confirm the IMEI at the meetup</h2>
          <p>
            The number the seller sent you and the number on the physical phone should match.
            Two-minute check at the meetup:
          </p>
          <ol>
            <li>Dial <code>*#06#</code> on the phone yourself.</li>
            <li>Compare the 15-digit number to the one the seller messaged you.</li>
            <li>If it's an iPhone with a SIM tray, pop the tray and compare that IMEI too.</li>
            <li>Any mismatch = walk. Non-matching IMEIs mean the phone has been re-shelled from a different device or the seller sent you the IMEI of a different (clean) phone.</li>
          </ol>

          <h2>How to find your own IMEI if the phone is already gone</h2>
          <p>
            If your phone was stolen and you didn't write the IMEI down, you can still find
            it — you'll want it for the police report and the carrier block:
          </p>
          <ul>
            <li><strong>iPhone owner:</strong> sign into iCloud.com → Find Devices, or Settings → [your name] → scroll to the missing device on any other Apple device signed into your Apple ID.</li>
            <li><strong>Android owner:</strong> Google Play → Settings → My devices lists the IMEI. So does google.com/android/find.</li>
            <li><strong>Both:</strong> your carrier account (My Verizon, My AT&amp;T, T-Mobile app) lists the IMEI of every line on the plan.</li>
            <li><strong>Original box or receipt.</strong> The label with the barcode also has the IMEI printed on it.</li>
          </ul>

          <h2>What the IMEI actually tells you</h2>
          <p>
            The 15 digits are structured: the first 8 identify the make and model (the Type
            Allocation Code), the next 6 are the unique serial, and the last is a checksum.
            That's why an IMEI check can verify the model matches the phone the seller
            claims — a "brand new iPhone 15 Pro" whose IMEI resolves to an iPhone 11 is a
            different kind of red flag entirely.
          </p>
          <p>
            When you're ready, drop the number into our <a href="/check-phone">stolen-phone check</a>.
            It runs the IMEI against carrier blacklist status and community-reported theft
            records at the same time.
          </p>
        </>
      }
      faqs={[
        {
          question: 'Is IMEI the same as serial number?',
          answer:
            'No. The serial number is the manufacturer\'s internal identifier for the physical device. The IMEI is the network identifier used by carriers and the carrier and manufacturer blacklists. A stolen-phone check should use the IMEI, since that is what the blacklist databases key on.',
        },
        {
          question: 'Is it safe to share my IMEI with a buyer?',
          answer:
            'Yes. The IMEI is not personally identifying — it identifies the device, not you. Sharing it with a buyer to prove a phone is clean is the norm. What you should not share alongside it is your Apple ID, Google account, or carrier account credentials.',
        },
        {
          question: 'Why does my phone show two IMEI numbers?',
          answer:
            'Dual-SIM phones and phones with an eSIM show two IMEIs — one per SIM slot. Either can be checked; a clean phone will come back clean on both.',
        },
        {
          question: 'The seller sent me an IMEI that does not match the phone at the meetup — what happened?',
          answer:
            'Usually one of two things: they sent you the IMEI of a different, clean phone to pass your pre-purchase check, or the phone you\'re holding has had its logic board or housing swapped from another device. Either way, walk away — the mismatch is the answer.',
        },
      ]}
    />
  );
}
