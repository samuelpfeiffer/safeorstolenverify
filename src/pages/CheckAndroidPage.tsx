import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "check if android phone is stolen". No Search Console rows
 * yet, so it targets the plain phrase. Moved from a hand-built layout to ItemLandingPageTemplate.
 * Removed false claims: carrier blacklist checks for "AT&T, Verizon, T-Mobile" as a free feature,
 * "15B+ device records", insurance payout checks, and an "FRP lock check" SafeOrStolen can't do.
 * Samsung-specific steps live on /check-samsung-stolen; this page covers Pixel, Motorola,
 * OnePlus and other Android phones, and goes deeper on Factory Reset Protection.
 */
export default function CheckAndroidPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if an Android Phone Is Stolen | SafeOrStolen"
      metaDescription="Check if a used Android phone is stolen: run the IMEI, spot Factory Reset Protection and managed-device screens, and watch the seller remove their account."
      h1="How to Check if an Android Phone Is Stolen"
      itemType="Android Phone"
      dateModified="2026-10-07"
      searchType="imei"
      searchPlaceholder="Enter the Android phone's 15-digit IMEI"
      keywords={[
        'check if android phone is stolen',
        'how to check if an android phone is stolen',
        'android imei check',
        'google pixel stolen check',
        'check pixel imei',
        'android frp lock',
        'factory reset protection used phone',
        'motorola imei check',
        'oneplus imei check',
      ]}
      quickAnswer={{
        question: 'How do I check if an Android phone is stolen?',
        answer:
          "Dial *#06# to get the IMEI and check it on SafeOrStolen (safeorstolen.com/check-android) for theft reports and the phone's model. Then have the seller remove their Google account in Settings and factory reset the phone while you watch, and do the setup yourself. If setup asks for a Google account that was previously synced on the device, or says the device belongs to an organization, don't buy it.",
      }}
      sections={[
        {
          heading: 'Where to find the IMEI on Android phones',
          table: {
            columns: ['Phone', 'Where the IMEI is'],
            rows: [
              ['Any Android phone', 'Dial *#06# in the Phone app. Dual-SIM phones show two'],
              ['Google Pixel', 'Settings > About phone > IMEI'],
              ['Motorola', 'Settings > About phone > IMEI'],
              ['OnePlus', 'Settings > About device, then tap Status or Device details'],
              ['Xiaomi, Redmi, Poco', 'Settings > About phone, then Detailed info and specs or Status'],
              ['Samsung Galaxy', 'Settings > About phone. See our Samsung guide for the Samsung account checks'],
            ],
          },
          paragraphs: [
            "Menu names shift between Android versions. If you can't find it, *#06# always works, and on most phones you can dial it from the Emergency call screen without unlocking.",
          ],
        },
        {
          heading: 'Factory Reset Protection: the check that matters most',
          paragraphs: [
            "Every Android phone signed in to a Google account has Factory Reset Protection (FRP). If the phone is reset from the recovery menu or without the owner removing their account, setup stops and asks for the Google account that was previously synced on the device. Without that account's password, the phone can't be set up.",
            "That is why a thief can wipe a stolen Android phone but can't sell it as a working phone. It is also why you should never accept a phone that's already been reset before you arrive. You want to see it go from the seller's home screen, through a reset, to your own setup.",
          ],
        },
        {
          heading: 'Screens that mean walk away',
          table: {
            columns: ['What you see', 'What it means'],
            rows: [
              ['Asks for a Google account previously synced on this device', 'FRP is on. The previous owner is still attached'],
              ['This device belongs to your organization', 'A company or school manages the phone and can lock it'],
              ['A lock screen with an owner message or contact number', "The owner has marked it lost or locked it through Google's Find Hub (formerly Find My Device)"],
              ['A full-screen payment or lender notice', 'The phone is financed and locked for missed payments'],
              ['Phone locks itself soon after being grabbed or going offline', 'Android theft protection is on and the owner is still signed in'],
            ],
          },
        },
        {
          heading: 'How to watch the seller unlock it',
          list: [
            'The seller unlocks the phone with their PIN, pattern or fingerprint.',
            'Settings > Passwords & accounts (on newer Pixels: Passwords, passkeys & accounts): they remove their Google account.',
            'Settings > System > Reset options > Erase all data (factory reset): they confirm with their PIN.',
            "You connect to Wi-Fi and go through setup. It should reach the home screen without asking for anyone else's account.",
            'Put your SIM in and make a call before you pay.',
          ],
        },
      ]}
      content={{
        intro:
          'Check a used Android phone in two parts: run the IMEI for theft reports, then make sure the Google account lock is off. This page covers Google Pixel, Motorola, OnePlus, Xiaomi and other Android phones. Buying a Galaxy? Use the <a href="/check-samsung-stolen">Samsung check</a>, which covers the Samsung account too.',
        whatIs:
          'An Android stolen-phone check looks for two things: a theft report on the IMEI and an account lock left by the real owner. Either one means the seller may not own the phone. The <a href="/imei-checker">free IMEI check</a> handles the first; your own eyes at the meetup handle the second.',
        howItWorks:
          "Enter the IMEI in the search box. SafeOrStolen shows the phone's make and model and searches its own theft reports and public web results, then returns reported stolen, possible match, or no report found in the records searched. A paid check adds the carrier lost/stolen blacklist. Google account status isn't visible to anyone but the owner, so check FRP on the phone.",
        whyCheck:
          "A stolen Android phone can be locked by its owner, blocked by the carrier, or taken back by police, and you lose what you paid. A phone stuck behind FRP can't be set up at all. A few minutes at the meetup avoids both.",
        benefits: [
          'Free IMEI check that shows the make and model',
          'Searches SafeOrStolen theft reports and public web results',
          'Paid carrier blacklist check available',
          'Works for Pixel, Motorola, OnePlus, Xiaomi, Sony, Nokia and other Android phones',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for a screenshot of *#06# and check the IMEI here before you meet.',
          'At the meetup, dial *#06# yourself and match the number and model.',
          'Watch the seller remove their Google account in Settings.',
          'Watch the factory reset, then do the setup yourself on Wi-Fi.',
          "If setup asks for another account or shows an organization screen, don't buy it. Otherwise test a call and pay.",
        ],
        faqs: [
          {
            question: 'Can you check if an Android phone is stolen with the IMEI?',
            answer:
              "Yes. Dial *#06# for the IMEI and check it on SafeOrStolen (safeorstolen.com/check-android), which shows the model and searches theft reports and public web results. A paid blacklist check covers the carrier lost/stolen blacklist. Also do the Google account check on the phone, because an IMEI lookup can't show FRP.",
          },
          {
            question: 'What is FRP lock on Android?',
            answer:
              "Factory Reset Protection is Google's anti-theft lock. After a reset, a phone that still has a Google account attached asks for that account before setup can finish. Only the account owner can clear it, by removing the account before the reset or signing in afterward.",
          },
          {
            question: 'How do I know if a used Android phone is still linked to a Google account?',
            answer:
              "Ask the seller to open Settings > Passwords & accounts and show the account list before the reset. After they remove the account and reset the phone, do the setup yourself. If setup asks for a Google account previously synced on the device, it's still linked.",
          },
          {
            question: 'Can a stolen Android phone be unlocked?',
            answer:
              "Not legitimately. FRP can only be removed by the Google account owner. 'FRP bypass' tools and services are not something to rely on, and even a bypassed phone can still be reported stolen, blacklisted or reclaimed by police.",
          },
          {
            question: 'What does "This device belongs to your organization" mean?',
            answer:
              "The phone is enrolled in a company or school's device management. The organization can lock or wipe it whenever it likes. Don't buy a phone that shows this screen during setup unless the organization itself is selling it to you and releases it from management first.",
          },
          {
            question: 'Is a carrier-locked Android phone stolen?',
            answer:
              "Not necessarily. Many phones are locked to the carrier that sold them until they're paid off. It means the phone only works on that carrier for now. Ask the seller which carrier it's from and test your own SIM before you pay.",
          },
        ],
      }}
    />
  );
}
