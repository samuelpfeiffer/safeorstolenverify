import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "check if samsung phone is stolen" / "samsung imei check".
 * No Search Console rows yet, so it targets the plain phrases a Galaxy buyer types. Moved from
 * SEOLandingPageTemplate to ItemLandingPageTemplate. Removed invented stats ("800K+ Samsung phones
 * stolen yearly", "second most stolen", "3 sec"), the claim that results show "BLACKLISTED" from the
 * free check, "AI analysis", and the Swappa claim. Covers the Samsung-only checks: Google FRP plus
 * the Samsung account, Samsung Find, and payment locks on financed Galaxy phones.
 */
const SamsungIMEICheck = () => {
  return (
    <ItemLandingPageTemplate
      title="Check if a Samsung Phone Is Stolen: Galaxy IMEI Check | SafeOrStolen"
      metaDescription="Check if a used Samsung Galaxy is stolen: find the IMEI, run a free IMEI check, and make the seller remove their Google and Samsung accounts before you pay."
      h1="How to Check if a Samsung Phone Is Stolen"
      itemType="Samsung Phone"
      dateModified="2026-10-07"
      searchType="imei"
      searchPlaceholder="Enter the Galaxy's 15-digit IMEI"
      keywords={[
        'check if samsung phone is stolen',
        'samsung imei check',
        'samsung galaxy imei check',
        'is my samsung stolen',
        'check samsung imei stolen',
        'samsung frp lock check',
        'used samsung galaxy stolen check',
        'samsung blacklist check',
      ]}
      quickAnswer={{
        question: 'How do I check if a Samsung phone is stolen?',
        answer:
          "Dial *#06# or open Settings > About phone to get the IMEI, and check it on SafeOrStolen (safeorstolen.com/check-samsung-stolen) for theft reports and the Galaxy model. Then have the seller remove their Google account and Samsung account and factory reset the phone in front of you. If setup asks for an account that was 'previously synced on this device', the phone is still locked to someone else, so don't buy it.",
      }}
      sections={[
        {
          heading: 'Where to find the IMEI on a Samsung Galaxy',
          table: {
            columns: ['Where', 'How', 'Notes'],
            rows: [
              ['Dial code', 'Open the Phone app and dial *#06#', 'Works on every Galaxy phone. Dual-SIM models show two IMEIs'],
              ['Settings', 'Settings > About phone', 'IMEI is listed near the top. Tap Status information on some models for more detail'],
              ['Original box', 'Barcode label on the side or back of the box', 'Must match the phone exactly'],
              ['Locked phone', 'Tap Emergency call on the lock screen and dial *#06#', 'Shows the IMEI without unlocking the phone on most models'],
            ],
          },
        },
        {
          heading: 'The locks that make a stolen Galaxy useless to you',
          table: {
            columns: ['Lock', 'What you see', 'Who can remove it'],
            rows: [
              ['Google Factory Reset Protection (FRP)', "After a reset, setup says the device was reset and asks for a Google Account previously synced on this device", 'Only the owner of that Google account'],
              ['Samsung account lock', 'Setup asks for the previous Samsung account password', 'Only the owner of that Samsung account'],
              ['Samsung Find lock', 'A lock screen with an owner message or contact number', 'The owner, through Samsung Find'],
              ['Payment lock on a financed phone', 'A full-screen notice that the device is locked by a carrier or lender for missed payments', 'The carrier or lender, once the balance is settled'],
            ],
          },
          paragraphs: [
            "A factory reset does not remove any of these. A seller who says 'just reset it and it'll be fine' is wrong at best.",
          ],
        },
        {
          heading: 'How to watch a seller unlock a Galaxy properly',
          list: [
            'Settings > Accounts and backup > Manage accounts: the seller removes their Google account and Samsung account. Both should disappear from the list.',
            'Settings > General management > Reset > Factory data reset: the seller confirms with their PIN or password.',
            'When the phone restarts, you go through setup yourself on Wi-Fi.',
            "If setup reaches the home screen without asking for anyone else's account, the account locks are off.",
            'Put your SIM in and make a call before you pay.',
          ],
        },
        {
          heading: 'Signs a used Samsung is stolen',
          list: [
            "The phone is already reset when you arrive, and the seller doesn't want you to start setup.",
            'The IMEI from *#06# is different from the box or the screenshot the seller sent.',
            "The lock screen shows someone else's message or phone number.",
            "The seller can't get into Settings because they don't know the PIN.",
            'A recent flagship or foldable priced well below what others are asking, with a push for cash right now.',
          ],
        },
      ]}
      content={{
        intro:
          'Check a used Samsung Galaxy before you pay: run the IMEI, then make sure the seller removes their Google and Samsung accounts while you watch. This works for the S, A, Z Fold and Z Flip series and older Galaxy phones. For a Pixel, Motorola or OnePlus, see <a href="/check-android">how to check an Android phone</a>.',
        whatIs:
          'A stolen Galaxy is usually caught one of two ways: its IMEI shows up in a theft report, or it is still tied to the owner\'s Google or Samsung account. The IMEI check covers the first, and watching the seller remove their accounts covers the second. The <a href="/imei-checker">free IMEI check</a> page explains what each result means.',
        howItWorks:
          "Enter the Galaxy's IMEI in the search box. SafeOrStolen shows the make and model so you can confirm it's the Galaxy in the listing, and searches its own theft reports and public web results. A paid blacklist check looks at the carrier lost/stolen blacklist. SafeOrStolen can't see Google or Samsung account locks, so do that check on the phone.",
        whyCheck:
          "If you buy a stolen Galaxy, the owner can lock it through Samsung Find, the carrier can block the IMEI, and police can return it to the owner without refunding you. A phone stuck at the Google account screen after a reset can't be set up by you at all.",
        benefits: [
          'Free IMEI check that shows the Galaxy model',
          'Searches SafeOrStolen theft reports and public web results',
          'Paid carrier blacklist check available',
          'Step-by-step account removal check for Samsung phones',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for a screenshot of *#06# and check the IMEI here before you meet.',
          'At the meetup, dial *#06# yourself and match the number and model.',
          'Watch the seller remove their Google and Samsung accounts in Settings > Accounts and backup > Manage accounts.',
          'Watch the factory reset, then do the setup yourself on Wi-Fi.',
          'Test your SIM with a call, then pay.',
        ],
        faqs: [
          {
            question: 'How do I check a Samsung IMEI for free?',
            answer:
              "Dial *#06# to show the IMEI, then enter it on SafeOrStolen (safeorstolen.com/check-samsung-stolen). The free check shows the Galaxy model and searches SafeOrStolen theft reports and public web results. A free account includes 2 checks with no credit card. The carrier blacklist check is a paid check.",
          },
          {
            question: 'What is FRP lock on a Samsung?',
            answer:
              "Factory Reset Protection is Google's anti-theft lock. If a Galaxy is reset without the Google account being removed first, setup asks for the Google account that was previously synced on the phone. Only that account's owner can get past it. Don't buy a Galaxy that stops at that screen.",
          },
          {
            question: 'Can a stolen Samsung be unlocked?',
            answer:
              "Not legitimately. Google FRP and the Samsung account lock can only be removed by the account owner, and a payment lock only by the carrier or lender. Paid 'FRP bypass' services are not something to rely on, and the phone may still be reported stolen or blacklisted.",
          },
          {
            question: 'Does a factory reset remove a Samsung account lock?',
            answer:
              "No. A reset done without removing the accounts first leaves the Google FRP lock, and on some Galaxy models the Samsung account lock, in place. The seller has to remove the accounts in Settings > Accounts and backup > Manage accounts before resetting.",
          },
          {
            question: 'How can I tell if a used Samsung is financed?',
            answer:
              "Ask the seller which carrier the phone came from and whether it's paid off, and ask that carrier about the IMEI if you're unsure. A Galaxy that shows a full-screen payment notice, or gets locked days after you buy it, may still have a balance owed by the previous owner.",
          },
          {
            question: 'What if the IMEI check says the Samsung is reported stolen?',
            answer:
              "Don't buy it and don't confront the seller. Leave, save the listing and messages, and pass the details to your local police. If you've already paid, stop using it, don't reset it, and read our guide on what to do if you bought a stolen phone.",
          },
        ],
      }}
    />
  );
};

export default SamsungIMEICheck;
