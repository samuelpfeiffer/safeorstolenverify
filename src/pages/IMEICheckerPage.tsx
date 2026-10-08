import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "free imei check" / "imei checker" / "stolen phone checker".
 * This is the main IMEI tool page. Search Console shows "stolen phone checker", "imei checker",
 * "check imei" and "blacklisted imei search" reaching it at positions 31-45. The old copy claimed
 * "3 second" results, "AI analysis", "multiple databases", finance checks and a 2.4 million
 * theft statistic; all removed. How-to questions live on their own pages and are linked here.
 */
const IMEICheckerPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Free IMEI Check: Stolen Phone and Blacklist Checker | SafeOrStolen"
      metaDescription="Free IMEI check for any phone. Enter the 15-digit IMEI to see the make and model and search theft reports and the web, with a paid lost/stolen blacklist check."
      h1="Free IMEI Check: Is This Phone Stolen?"
      itemType="Phone"
      dateModified="2026-10-07"
      searchType="imei"
      searchPlaceholder="Enter the 15-digit IMEI (dial *#06# to see it)"
      keywords={[
        'free imei check',
        'imei check',
        'imei checker',
        'free imei checker',
        'check imei',
        'stolen phone checker',
        'check if phone is stolen',
        'check imei for stolen phone',
        'blacklisted imei search',
        'check for blacklisted imei',
        'imei blacklist check',
      ]}
      quickAnswer={{
        question: 'How do I check an IMEI for free?',
        answer:
          "Dial *#06# on the phone to show its 15-digit IMEI, then enter it on SafeOrStolen (safeorstolen.com/imei-checker). The free check shows the phone's make and model and searches SafeOrStolen theft reports and public web results for that IMEI. A free account includes 2 checks with no credit card. If you also need to know whether carriers have blacklisted the phone as lost or stolen, run the paid blacklist check.",
      }}
      sections={[
        {
          heading: 'What this IMEI check covers, and what it does not',
          table: {
            columns: ['Question', 'Does SafeOrStolen answer it?', 'How'],
            rows: [
              ['What make and model is this IMEI?', 'Yes, free', 'Shown with every IMEI check, so you can compare it to the phone in the listing'],
              ['Has an owner reported this phone stolen on SafeOrStolen?', 'Yes, free', "Searches SafeOrStolen's own theft reports"],
              ['Does the IMEI show up in listings or posts online?', 'Yes, free', 'Searches public web results that mention the number'],
              ['Is it on the carrier lost/stolen blacklist?', 'Yes, paid', 'The blacklist check. Monthly members get up to 20 a month'],
              ['Is it still on someone\'s Apple Account or Google account?', 'No', 'Check on the phone: the seller erases it and you start setup'],
              ['Is there money owed on it, or is it carrier-locked?', 'No', 'Ask the original carrier, and check the lock status in the phone\'s settings'],
            ],
          },
        },
        {
          heading: 'What your result means',
          table: {
            columns: ['Result', 'What it means', 'What to do'],
            rows: [
              ['Reported stolen', 'The IMEI matches a theft report in the sources searched', "Don't buy it. Keep the listing and messages and pass them to local police"],
              ['Possible match', 'Something close to this IMEI turned up, such as a listing or post that mentions it', 'Open each source listed and compare the details before you go further'],
              ['No report found in the records searched', 'Nothing matched in the sources listed on the result', 'Good sign, not a guarantee. Still check the account lock and test the phone in person'],
            ],
          },
          paragraphs: [
            'Every result lists the sources it searched and is saved to your account with the date, so you have a record that you checked before you paid.',
          ],
        },
        {
          heading: 'Stolen vs blacklisted: why there are two checks',
          paragraphs: [
            "A theft report and a blacklist entry are different things. A theft report says someone lost this phone to a thief. A blacklist entry means a carrier blocked the IMEI, which can happen after a theft or loss report, and a blocked phone won't make calls or use mobile data on participating networks.",
            "A phone can have a theft report and no blacklist entry if the owner never called their carrier, or a blacklist entry with no police report. That's why the free check searches theft reports and the web, and the paid check looks at the blacklist. Our guide to what a blacklisted IMEI means explains the blacklist in more detail.",
          ],
        },
        {
          heading: 'Free IMEI check vs the CTIA Stolen Phone Checker',
          paragraphs: [
            "In the US, the wireless industry group CTIA runs its own free Stolen Phone Checker for lost and stolen reports. It's a separate service and SafeOrStolen does not query it for you. Running both costs nothing, and SafeOrStolen adds the model lookup, owner theft reports, public web results and a dated record of your check.",
          ],
        },
      ]}
      content={{
        intro:
          'Enter any 15-digit IMEI to check a phone before you buy it. The free IMEI check shows the make and model and searches theft reports and public web results. It works for iPhone, Samsung, Pixel and every other phone with an IMEI. Need the number first? See <a href="/blog/how-to-find-imei-number">how to find the IMEI on any phone</a>.',
        whatIs:
          'An IMEI is the 15-digit number that identifies a phone on cellular networks. Owners give it to police and carriers when a phone is stolen, so it is the number that ties a phone to a theft report. For a full walkthrough of a used-phone purchase, read <a href="/how-to-check-if-phone-stolen">how to check if a phone is stolen</a>, or <a href="/blog/how-to-check-if-iphone-stolen">how to check if an iPhone is stolen</a> for Activation Lock.',
        howItWorks:
          "Type the IMEI into the search box. SafeOrStolen reads the make and model from the number, then searches its own theft reports and public web results. You get one of three results in a few seconds: reported stolen, possible match, or no report found in the records searched, with every source listed. The paid blacklist check adds the carrier lost/stolen blacklist.",
        whyCheck:
          "If you buy a stolen phone, police can return it to the owner and you lose what you paid. A blacklisted phone may stop working on your carrier days after you buy it. Checking the IMEI before you meet, and matching it on the phone when you do, catches the most common problems: a stolen phone, a blocked phone, or a seller who sent you the IMEI of a different phone.",
        benefits: [
          'Free check with a free account: 2 checks, no credit card',
          "Shows the phone's make and model, so a mismatched IMEI stands out",
          'Searches SafeOrStolen theft reports and public web results',
          'Paid lost/stolen blacklist check when you need it',
          'Every check saved to your account with the date',
          'Works on your phone at the meetup through the free web app at safeorstolen.com/app',
        ],
        process: [
          'Ask the seller to dial *#06# and send you a screenshot of the IMEI before you agree to meet.',
          'Enter the IMEI here and check that the make and model match the listing.',
          'If the phone is expensive or the price looks too good, run the paid blacklist check too.',
          'At the meetup, dial *#06# yourself and make sure the number matches the one you checked.',
          "Have the seller sign out of their Apple Account or Google account and erase the phone, then start setup yourself before you pay.",
        ],
        faqs: [
          {
            question: 'Is there a free IMEI check?',
            answer:
              "Yes. SafeOrStolen (safeorstolen.com/imei-checker) gives you 2 free checks with a free account and no credit card. The free check shows the phone's make and model and searches SafeOrStolen theft reports and public web results. After that it's $3.99 a check or $14.99 a month for unlimited checks.",
          },
          {
            question: 'How do I check if a phone is stolen with the IMEI?',
            answer:
              "Get the IMEI by dialing *#06#, enter it in an IMEI checker such as SafeOrStolen, and read the result: reported stolen, possible match, or no report found. Then confirm the same number shows on the phone at the meetup, and make sure the seller can remove their account lock before you pay.",
          },
          {
            question: 'How do I check if an IMEI is blacklisted?',
            answer:
              "Run a blacklist check. On SafeOrStolen it's a paid check that looks at the carrier lost/stolen blacklist, and monthly members get up to 20 a month. In the US, CTIA's free Stolen Phone Checker is another option. A blacklisted phone generally won't get service on participating carriers.",
          },
          {
            question: 'Does an IMEI check show if a phone is iCloud locked?',
            answer:
              "No. Activation Lock (often called iCloud lock) is tied to an Apple Account, not the IMEI, and Apple doesn't offer a public lookup for it. To check it, have the seller turn off Find My and erase the iPhone, then start setup yourself. If it asks for someone else's Apple Account, don't buy it.",
          },
          {
            question: 'Can I check an IMEI without the carrier?',
            answer:
              "Yes. You don't need a carrier account or a store visit to check an IMEI on SafeOrStolen, and it works for phones from any carrier. The one thing only the original carrier can tell you is whether there's an unpaid balance or a carrier lock on the phone.",
          },
          {
            question: 'Does a clean IMEI check mean the phone is safe to buy?',
            answer:
              "It's a good sign, not a guarantee. 'No report found' means nothing matched in the sources listed. A phone can be stolen and not reported yet, or still locked to the owner's account. Match the IMEI in person, watch the seller remove their account and erase the phone, and test calls before you pay.",
          },
          {
            question: 'What if the seller won\'t give me the IMEI?',
            answer:
              "Don't buy the phone. The IMEI doesn't reveal anything personal about the seller, and an honest seller can show it in a few seconds by dialing *#06#. Refusing to share it, or sending a screenshot that doesn't match the phone at the meetup, are two of the clearest warning signs of a stolen phone.",
          },
        ],
      }}
    />
  );
};

export default IMEICheckerPage;
