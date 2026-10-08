import { ClusterArticleTemplate } from '@/components/blog/ClusterArticleTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to find imei number" / "find imei". Search Console
 * shows "find imei" (position 37), "get mobile imei number", "cell imei number" and
 * "check imei no code" reaching it. Removed claims SafeOrStolen's free check covers carrier
 * blacklist status, the Google-account IMEI claim, and the off-site Google URL. Links now point
 * to /imei-checker for the lookup itself.
 */
export default function HowToFindImeiNumber() {
  return (
    <ClusterArticleTemplate
      slug="how-to-find-imei-number"
      metaDescription="How to find the IMEI number on any phone: dial *#06#, where it is in iPhone and Android settings, on the box or SIM tray, on a locked phone, or a stolen one."
      keywords="how to find imei number, find imei, imei number, get mobile imei number, find imei iphone, find imei android, imei without code"
      lastReviewed="October 7, 2026"
      intro={
        <>
          <p>
            To find the IMEI number on any phone, open the Phone app and dial{' '}
            <code>*#06#</code>. The 15-digit IMEI appears on screen without pressing call. You
            can also find it in Settings: on an iPhone, Settings &gt; General &gt; About; on
            Android, Settings &gt; About phone. It's printed on the original box too.
          </p>
          <p>
            Below are the other places to look, how to get it from a seller before you meet, and
            how to find your own IMEI if your phone has been stolen.
          </p>
        </>
      }
      body={
        <>
          <h2>Every place to find the IMEI</h2>
          <table>
            <thead>
              <tr>
                <th>Where</th>
                <th>iPhone</th>
                <th>Android</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dial code</td>
                <td><code>*#06#</code> in the Phone app</td>
                <td><code>*#06#</code> in the Phone app</td>
              </tr>
              <tr>
                <td>Settings</td>
                <td>Settings &gt; General &gt; About, scroll to IMEI</td>
                <td>Settings &gt; About phone (on some brands, under Status)</td>
              </tr>
              <tr>
                <td>On the phone</td>
                <td>Engraved on the SIM tray on many models from the iPhone 6s on; on the back of older models such as the iPhone 6 and first iPhone SE</td>
                <td>Some models have it on a label under a removable battery or on the back</td>
              </tr>
              <tr>
                <td>Box</td>
                <td>Barcode label on the box</td>
                <td>Barcode label on the box</td>
              </tr>
              <tr>
                <td>Your accounts</td>
                <td>Your Apple Account's device list, or Settings &gt; [your name] on another Apple device</td>
                <td>Your carrier account or bill</td>
              </tr>
            </tbody>
          </table>
          <p>
            Phones with two SIMs, or a SIM and an eSIM, have two IMEIs. Note both. Either one
            identifies the phone.
          </p>

          <h2>How to find the IMEI on a locked phone</h2>
          <p>
            On most Android phones you can tap <strong>Emergency call</strong> on the lock screen
            and dial <code>*#06#</code>. On an iPhone that has been erased and is sitting on the
            setup or Activation Lock screen, tap the small <strong>i</strong> button to see the
            IMEI. Otherwise use the box, the SIM tray, or the back of the phone.
          </p>

          <h2>How to find the IMEI without dialing a code</h2>
          <p>
            Go to Settings. On iPhone it's Settings &gt; General &gt; About. On Android it's
            Settings &gt; About phone, and some brands put it one more tap down under Status or
            Status information. You can also read it off the box label, but always check the box
            against the phone, because boxes get swapped.
          </p>

          <h2>Getting the IMEI from a seller</h2>
          <p>Send the seller something like this before you agree to meet:</p>
          <blockquote>
            "Could you dial *#06# on the phone and send me a screenshot of the IMEI?"
          </blockquote>
          <p>
            Someone selling their own phone can do this in a few seconds. The IMEI says nothing
            personal about them. When it arrives, run it on the{' '}
            <a href="/imei-checker">free IMEI check</a> and confirm the model it shows is the
            model in the listing. Then dial <code>*#06#</code> yourself at the meetup and make
            sure the numbers match. A different number means the seller sent you the IMEI of a
            different phone.
          </p>

          <h2>How to find your IMEI if your phone was stolen</h2>
          <ul>
            <li>
              <strong>iPhone:</strong> on another Apple device signed in to your Apple Account, go
              to Settings &gt; [your name], tap the missing iPhone in the device list, and the
              IMEI is shown. Your Apple Account page on the web lists your devices too.
            </li>
            <li>
              <strong>Any phone:</strong> sign in to your carrier account or look at a bill or
              device payment agreement. Carriers list the IMEI for each phone on the plan.
            </li>
            <li>
              <strong>Paperwork:</strong> the original box, the receipt, or your insurance policy.
            </li>
          </ul>
          <p>
            You'll need it for the police report and to have your carrier block the phone. Our
            guide on <a href="/what-to-do-if-your-phone-is-stolen">what to do if your phone is
            stolen</a> covers the rest.
          </p>

          <h2>What the 15 digits mean</h2>
          <p>
            The first 8 digits are the Type Allocation Code, which identifies the make and model.
            The next 6 are the phone's own serial, and the last digit is a check digit. That's why
            an IMEI lookup can tell you the model: if a "latest Pro model" listing comes with an
            IMEI for a phone several years older, you know something is off before you meet.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What is the code to find the IMEI number?',
          answer:
            'Dial *#06# in the Phone app. The IMEI appears on screen right away, without pressing call. It works on iPhone and Android. Phones with two SIMs or an eSIM show two IMEIs, and either one identifies the phone. If the screen shows nothing, check you typed the star and hash keys in the right order.',
        },
        {
          question: 'Where is the IMEI number in settings?',
          answer:
            'On an iPhone, open Settings > General > About and scroll down to IMEI. On Android, open Settings > About phone; some brands put it under Status or Status information. The number is 15 digits long, and phones with two SIMs list IMEI 1 and IMEI 2 one under the other.',
        },
        {
          question: 'Is the IMEI the same as the serial number?',
          answer:
            "No. The serial number is the manufacturer's number for the device. The IMEI is the number cellular networks use, and it's what carriers block and owners report when a phone is stolen. For a stolen-phone check, use the IMEI. Some phones show both numbers in the same About screen.",
        },
        {
          question: 'Is it safe to give someone my IMEI?',
          answer:
            "Yes, for a sale it's normal. The IMEI identifies the phone, not you, and buyers need it to check the phone isn't stolen. Don't share your passcode, Apple Account or Google account details along with it, and don't send photos that show your accounts or messages in the background.",
        },
        {
          question: 'How do I check an IMEI once I have it?',
          answer:
            "Enter it on SafeOrStolen (safeorstolen.com/imei-checker). The free check shows the phone's make and model and searches SafeOrStolen theft reports and public web results, and a paid check covers the carrier lost/stolen blacklist. A free account includes 2 checks with no credit card, and each check is saved to your account with the date.",
        },
      ]}
    />
  );
}
