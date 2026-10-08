import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if a phone is stolen". No Search Console rows
 * for this URL yet. It used to render PHONE_GUIDE from the shared definitiveGuides data; it is now
 * self-contained. Removed the outbound Apple link and the old claim that the free check only
 * "confirms the IMEI is correctly formed". This is the buyer's how-to for any phone; the tool page
 * is /imei-checker, iPhone detail is /blog/how-to-check-if-iphone-stolen, Android and Samsung have
 * their own pages.
 */
export default function HowToCheckIfPhoneStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if a Phone Is Stolen Before You Buy It | SafeOrStolen"
      metaDescription="How to check if a phone is stolen: the three checks for any used iPhone or Android (IMEI, blacklist, account lock) and the warning signs."
      h1="How to Check if a Phone Is Stolen"
      itemType="Phone"
      dateModified="2026-10-07"
      searchType="imei"
      searchPlaceholder="Enter the phone's 15-digit IMEI"
      keywords={[
        'how to check if a phone is stolen',
        'how to check if phone is stolen',
        'how to tell if a phone is stolen',
        'how do i know if a phone is stolen',
        'check to see if phone is stolen',
        'is this phone stolen',
        'signs a phone is stolen',
      ]}
      quickAnswer={{
        question: 'How can I tell if a phone is stolen?',
        answer:
          "Run three checks before you pay. First, check the IMEI (dial *#06#) on SafeOrStolen (safeorstolen.com/how-to-check-if-phone-stolen) for theft reports, and run a blacklist check if the phone is worth a lot. Second, match that IMEI on the phone at the meetup. Third, watch the seller sign out of their Apple Account or Google account and erase the phone, then start setup yourself. A phone that asks for someone else's account is not theirs to sell.",
      }}
      sections={[
        {
          heading: 'The three checks, and what each one catches',
          table: {
            columns: ['Check', 'What it catches', 'When to do it'],
            rows: [
              ['IMEI theft check', 'A phone reported stolen, or an IMEI that belongs to a different model', 'Before you agree to meet'],
              ['Blacklist check', 'A phone carriers have blocked as lost or stolen', 'Before you meet, for any phone worth more than a few dollars'],
              ['Account lock check', "A phone still tied to the owner's Apple Account or Google account", 'At the meetup, before money changes hands'],
            ],
          },
          paragraphs: [
            "No single check is enough. A thief can sell a phone that hasn't been reported yet, and an honest seller's phone can still be carrier-locked or financed. The account lock check is the one a thief can't fake, because it needs the owner's password.",
          ],
        },
        {
          heading: 'Warning signs a phone is stolen',
          list: [
            "The seller won't send the IMEI before you meet, or the IMEI on the phone doesn't match what they sent.",
            "The phone has already been 'reset for you', and the seller doesn't want you to start setup.",
            "The lock screen shows someone else's message or phone number. That means the owner has marked it lost.",
            "The seller doesn't know the passcode, or says they'll remove the account later.",
            'Setup asks for a previous Apple Account or Google account, or shows a Remote Management or organization screen.',
            'A recent model priced far below other listings, sold in a hurry for cash.',
          ],
        },
        {
          heading: 'The meetup, step by step',
          list: [
            'Meet in a busy, well-lit public place. Bring your SIM card and a charger.',
            'Dial *#06# on the phone and compare it with the IMEI you already checked.',
            "On an iPhone: the seller turns off Find My, signs out of their Apple Account, and erases it in Settings > General > Transfer or Reset iPhone.",
            'On Android: the seller removes their Google account (and Samsung account on a Galaxy) and does a factory reset.',
            "You start setup on Wi-Fi. It should reach the home screen without asking for anyone else's account.",
            'Put your SIM in and make a call. Then pay, ideally with a method that has buyer protection.',
          ],
        },
      ]}
      content={{
        intro:
          'To check if a phone is stolen, check its IMEI for theft reports, check the blacklist, and make sure the seller can remove their account lock in front of you. Here is how to do each one. For phone-specific steps see <a href="/blog/how-to-check-if-iphone-stolen">iPhone</a>, <a href="/check-samsung-stolen">Samsung</a> or <a href="/check-android">other Android phones</a>.',
        whatIs:
          'When a phone is stolen, the owner usually reports the IMEI to police and their carrier, marks it lost, and leaves their account on it so no one else can use it. Checking a phone means looking for each of those traces. The IMEI part is quick on the <a href="/imei-checker">free IMEI check</a>, and our <a href="/blog/buying-used-phone-checklist">used phone checklist</a> covers condition and payment too.',
        howItWorks:
          "Enter the IMEI in the search box. SafeOrStolen shows the phone's make and model and searches its own theft reports and public web results, then gives one of three results: reported stolen, possible match, or no report found in the records searched, with the sources listed. The paid blacklist check adds the carrier lost/stolen blacklist. Account locks are checked on the phone itself.",
        whyCheck:
          "If a phone turns out to be stolen, police can return it to the owner and you lose the money. Even if nobody comes for it, an account-locked or blacklisted phone may never work for you. Checking first, and having a dated record that you did, also shows you bought in good faith.",
        benefits: [
          'Works for any phone with an IMEI: iPhone, Samsung, Pixel and the rest',
          "Shows the phone's make and model so a swapped IMEI stands out",
          'Searches SafeOrStolen theft reports and public web results',
          'Paid carrier blacklist check available',
          'Every check saved to your account with the date',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for a screenshot of *#06# before you agree to meet.',
          'Check the IMEI here, and run the blacklist check for anything expensive.',
          'At the meetup, dial *#06# yourself and match the number and model.',
          'Watch the seller remove their account and erase the phone.',
          "Do the setup yourself. If it asks for someone else's account, walk away.",
          'Test a call with your SIM, then pay.',
        ],
        faqs: [
          {
            question: 'Can you tell if a phone is stolen by the IMEI?',
            answer:
              "Partly. An IMEI check shows whether the phone has been reported stolen in the sources searched, and a blacklist check shows whether carriers have blocked it. SafeOrStolen (safeorstolen.com/how-to-check-if-phone-stolen) does both. A thief can sell a phone before it's reported, so also check the account lock in person.",
          },
          {
            question: 'How do I check if a phone is stolen without the IMEI?',
            answer:
              "You can't run a lookup without it, but the IMEI is easy to get: dial *#06# on any phone, or look in Settings > General > About on an iPhone or Settings > About phone on Android. If a seller won't share it, that alone is a reason to walk away.",
          },
          {
            question: 'Is a locked phone a stolen phone?',
            answer:
              "Not always. A carrier-locked phone may just be paid off over time. But a phone that asks for someone else's Apple Account or Google account after a reset is still tied to its owner, and you can't use it. Treat that as a stolen phone unless the owner removes it in front of you.",
          },
          {
            question: 'What does a clean IMEI result mean?',
            answer:
              "It means nothing matched in the sources listed on the result. It's a good sign, not proof. Phones are sometimes sold before the owner reports them. That's why you also match the IMEI at the meetup and watch the seller remove their account and erase the phone.",
          },
          {
            question: 'Can police check if a phone is stolen?',
            answer:
              "Many police departments will check an IMEI or serial for you, especially if you suspect a phone you've been offered is stolen. Call the non-emergency line. If a phone comes back stolen, give them the listing and messages rather than confronting the seller.",
          },
          {
            question: 'What should I do if the phone I bought is stolen?',
            answer:
              "Stop using it, don't reset it, keep the listing, messages and payment record, and contact local police and your payment provider. Buying it without knowing is generally not a crime, but you usually can't keep it. Our guide on what to do if you bought a stolen phone walks through each step.",
          },
        ],
      }}
    />
  );
}
