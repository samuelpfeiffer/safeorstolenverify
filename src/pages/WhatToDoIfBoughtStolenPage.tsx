import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "what to do if you bought something stolen". No Search
 * Console data for this page yet. Now self-contained (no longer reads BOUGHT_STOLEN_GUIDE from
 * src/data/definitiveGuides.ts). Legal statements kept general; the legality question itself
 * belongs to /is-it-illegal-to-buy-stolen-property and is linked.
 */
export default function WhatToDoIfBoughtStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="What to Do if You Bought Something Stolen: 7 Steps | SafeOrStolen"
      metaDescription="Bought something that turned out to be stolen? What to do first, why you shouldn't resell or return it to the seller, how to deal with police, and how to try to get your money back."
      h1="What to Do if You Bought Something Stolen"
      itemType="Stolen Purchase"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the serial number, IMEI or VIN to check it"
      keywords={[
        'what to do if you bought something stolen',
        'i bought a stolen item what do i do',
        'accidentally bought stolen property',
        'bought stolen phone what to do',
        'bought stolen bike what to do',
        'bought stolen item on facebook marketplace',
        'can i get my money back if i bought something stolen',
        'unknowingly bought stolen goods',
      ]}
      quickAnswer={{
        question: 'What should I do if I bought something stolen?',
        answer:
          "Stop using it, don't sell it on or give it back to the seller, and call your local police on the non-emergency line to report it. Hand over the listing, messages, receipt and payment record, and tell them where and when you bought it. The item will usually go back to its owner. To try to recover your money, dispute the payment if you paid by card or a protected payment, and pursue the seller. SafeOrStolen (safeorstolen.com/what-to-do-if-you-bought-something-stolen) can show you whether the number is reported stolen.",
      }}
      sections={[
        {
          heading: 'The 7 steps, in order',
          list: [
            'Stop using it. Leave a phone or laptop switched off and unchanged; don\'t reset or repair it.',
            "Don't resell it, give it away, or return it to the seller. Passing it on once you know it's stolen can turn an innocent purchase into a crime.",
            'Save everything: the listing link and screenshots (listings get deleted fast), the chat, the seller\'s profile, the receipt, and the payment record.',
            'Call your local police on the non-emergency line and say you think you bought stolen property and want to turn it in. Ask for a report or incident number.',
            'Report the seller to the marketplace with the listing link and the police report number.',
            'Dispute the payment if you paid by card, PayPal Goods and Services, or through the marketplace\'s checkout. Give them the police report number.',
            'If you still have the seller\'s real name and address, you can take them to small claims court for what you paid.',
          ],
        },
        {
          heading: 'What happens to the item, and to you',
          table: {
            columns: ['Question', 'Usual answer'],
            rows: [
              ['Do I get to keep it?', 'Usually not. Stolen property generally still belongs to the original owner, even after a good-faith sale.'],
              ['Will I be charged?', "Buyers who didn't know and who come forward are rarely charged. Knowingly buying or keeping stolen property is a crime."],
              ['Will police pay me back?', 'No. Police return the item to the owner. Your money claim is against the seller.'],
              ['Does the owner have to pay me?', 'Generally no.'],
              ['What if I paid cash?', 'Cash can\'t be disputed. Your only route is the seller.'],
            ],
          },
        },
        {
          heading: 'What not to do',
          list: [
            "Don't confront the seller or set up a second meeting to \"get your money back\". Let police decide how to approach them.",
            "Don't contact the owner directly to negotiate a reward or a buy-back. Go through the police.",
            "Don't wipe, unlock, repaint or strip the item. It can destroy what police need to identify the owner.",
          ],
        },
      ]}
      content={{
        intro:
          "Finding out that something you paid for was stolen is a bad feeling, but how you handle the next day matters. Coming forward and turning it in is what separates an innocent buyer from a suspect. For the legal side, see <a href=\"/is-it-illegal-to-buy-stolen-property\">is it illegal to buy stolen property</a>.",
        whatIs:
          "You usually find out one of three ways: a serial check comes back reported stolen, a phone shows a lock screen or blacklist message after you buy it, or the owner or the police contact you. In each case, the steps are the same: stop using it, save your records, and turn it over to police.",
        howItWorks:
          'If you are not sure yet, enter the serial number, IMEI or VIN above. SafeOrStolen searches its theft reports and public web results, plus extra sources for guns, bikes, phones and Arizona vehicles, and shows "reported stolen", "possible match" or "no report found in the records searched" with every source listed. A "reported stolen" result is the time to call the police; a "possible match" is worth reading carefully before you do.',
        whyCheck:
          'A dated check result and your saved messages show what you knew and when. That record helps you with police, with your bank or payment app, and with the marketplace when you report the seller.',
        benefits: [
          'Find out if the number is in SafeOrStolen theft reports or public web results',
          'Every source listed with the result',
          'Dated record of the check saved to your account',
          'Extra sources for guns, bikes, phones and Arizona vehicles',
          '2 free checks with no credit card',
        ],
        process: [
          'Stop using the item and keep it as it is.',
          'Save the listing, chat, receipt and payment record.',
          'Call local police on the non-emergency line and turn it in.',
          'Report the seller to the marketplace.',
          'Dispute the payment if you paid by card or a protected payment.',
          'Pursue the seller in small claims court if you know who they are.',
        ],
        faqs: [
          {
            question: 'Can I get in trouble for buying something stolen without knowing?',
            answer:
              "Usually not, if you truly didn't know and you come forward when you find out. Knowingly buying, keeping or selling stolen property is a crime. Police look at what you knew: a price far below value, a scratched-off serial or a seller who couldn't unlock it can make \"I didn't know\" harder to believe. Keeping the item after you find out is the real risk.",
          },
          {
            question: 'Can I get my money back if I bought something stolen?',
            answer:
              "Sometimes. Card payments, PayPal Goods and Services and marketplace checkouts can be disputed; give them the police report number. Cash and friends-and-family payments usually can't. You can also sue the seller in small claims court if you know who they are. Police won't refund you, and the owner doesn't have to.",
          },
          {
            question: 'Do I have to give a stolen item back?',
            answer:
              "In most cases, yes. Stolen property generally still belongs to the person it was stolen from, even after you bought it in good faith. Turn it in to the police rather than arranging a handover yourself, so there is a record that you returned it.",
          },
          {
            question: 'I bought a stolen phone. What do I do?',
            answer:
              "Don't reset it, unlock it or put your SIM in again. If it's blacklisted or locked to another account, that won't be lifted for you. Call local police on the non-emergency line, turn it in, and dispute the payment if you can. SafeOrStolen's IMEI check (safeorstolen.com/imei-checker) can show whether the IMEI is reported stolen.",
          },
          {
            question: 'Should I contact the seller?',
            answer:
              "Not to confront them. Police may want to reach the seller without warning, and a seller who sold stolen goods won't refund you because you ask. If you need to keep the chat going while police decide, stay neutral. Save every message, and report the listing to the marketplace.",
          },
          {
            question: 'How do I avoid this next time?',
            answer:
              'Ask for the serial number, IMEI or VIN before you meet, check it on SafeOrStolen, and match it on the item in person. Watch the seller unlock the item and sign out of their accounts. Pay with a method you can dispute. And keep a record of the check: a dated result helps show you bought in good faith.',
          },
        ],
      }}
    />
  );
}
