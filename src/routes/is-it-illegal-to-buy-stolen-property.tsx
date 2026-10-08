import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "is it illegal to buy stolen property" (also "is it illegal
 * to buy stolen goods unknowingly"). No Search Console data for this page yet. Now self-contained
 * (no longer reads BUYING_STOLEN_LEGAL_GUIDE from src/data/moreGuides.ts). Legal statements are
 * kept general; the only statute named is the federal one for stolen goods moved across state lines.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="Is It Illegal to Buy Stolen Property? What Buyers Should Know | SafeOrStolen"
      metaDescription="Is it illegal to buy stolen property if you didn't know? How the law treats knowing and good-faith buyers, why the item still goes back to the owner, and how to protect yourself."
      h1="Is It Illegal to Buy Stolen Property?"
      itemType="Stolen Property"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the serial number, IMEI or VIN to check it"
      keywords={[
        "is it illegal to buy stolen property",
        "is it illegal to buy stolen goods",
        "is it illegal to buy stolen items unknowingly",
        "possession of stolen property",
        "receiving stolen property",
        "good faith purchaser stolen property",
        "can you go to jail for buying stolen goods",
        "buying stolen goods without knowing",
      ]}
      quickAnswer={{
        question: "Is it illegal to buy stolen property?",
        answer:
          "Yes, if you know or have good reason to believe it's stolen. Every state makes buying, receiving or keeping stolen property a crime under that condition. If you truly didn't know, you usually haven't committed a crime, but you still don't own the item: it generally goes back to the person it was stolen from, and you lose what you paid. Checking the serial number on SafeOrStolen (safeorstolen.com/is-it-illegal-to-buy-stolen-property) before you buy helps on both counts.",
      }}
      sections={[
        {
          heading: "Knowing buyer vs. good-faith buyer",
          table: {
            columns: ["", "Knew or should have known it was stolen", "Truly didn't know (good faith)"],
            rows: [
              ["Is it a crime?", "Yes. Usually called receiving or possessing stolen property", "Generally no, as long as you come forward once you find out"],
              ["Do you keep the item?", "No", "Usually no. It generally goes back to the original owner"],
              ["Do you get your money back?", "No", "Only from the seller, or through a payment dispute"],
              ["What decides the charge level?", "Mostly the item's value, under state law", "Not applicable"],
              ["What changes once you find out?", "", "Keeping, using or selling it after you know can become a crime"],
            ],
          },
        },
        {
          heading: 'What counts as "should have known"',
          paragraphs: [
            "Prosecutors rarely have a confession, so they look at the circumstances of the sale. Courts in many states let a jury infer knowledge from facts like these:",
          ],
          list: [
            "A price far below what the item is worth",
            "A serial number, IMEI or VIN that is missing, scratched off or altered",
            "A seller who couldn't unlock the device or sign out of it",
            "A sale in a parking lot at night, cash only, with no receipt or name",
            "Several of the same new item from one person with no explanation",
            "Buying again from someone you already suspected",
          ],
        },
        {
          heading: "Federal law and guns",
          paragraphs: [
            "Most stolen-property cases are state crimes. Federal law also makes it a crime to receive or possess stolen goods worth $5,000 or more that have crossed state lines, knowing they were stolen (18 U.S.C. § 2315). Separately, it is a federal crime to possess a gun whose serial number has been removed, obliterated or altered (18 U.S.C. § 922(k)), whether or not the gun was stolen.",
          ],
        },
      ]}
      content={{
        intro:
          "The short answer: buying stolen property is a crime when you know, or should have known, it was stolen. Buying it innocently usually isn't, but the law still sides with the owner. If you've just found out, read <a href=\"/what-to-do-if-you-bought-something-stolen\">what to do if you bought something stolen</a>. This page is general information, not legal advice; laws differ by state.",
        whatIs:
          "Possession of stolen property (also called receiving stolen property) is the crime of buying, accepting or keeping property you know or believe was stolen. It is separate from the theft itself, so the buyer can be charged even though someone else did the stealing. The key element in almost every state is knowledge, which can be proven from the circumstances of the sale.",
        howItWorks:
          'Before you buy, enter the serial number, IMEI or VIN above. SafeOrStolen searches its own theft reports and public web results, plus extra sources for guns, bikes, phones and Arizona vehicles, and shows "reported stolen", "possible match" or "no report found in the records searched" with every source listed. The check is saved to your account with the date, which is a record that you looked.',
        whyCheck:
          'A thief generally can\'t pass ownership to anyone, so even a careful, honest buyer can lose the item. Checking first is the only way to avoid that loss, and a dated check is evidence of good faith if questions come up later. The first 2 checks are free.',
        benefits: [
          "Find out if the number is reported in SafeOrStolen theft reports or public web results",
          "Every source listed with the result",
          "Dated record of the check saved to your account",
          "Optional $1.99 verification certificate with its own link",
          "2 free checks with no credit card",
        ],
        process: [
          "Ask the seller for the serial number, IMEI or VIN before you meet.",
          "Check it on SafeOrStolen and keep the result.",
          "Match the number on the item in person.",
          "Watch the seller unlock the item and sign out of their accounts.",
          "Pay with a method you can dispute, and keep the receipt and chat.",
          "If you find out later it was stolen, stop using it and turn it in to police.",
        ],
        faqs: [
          {
            question: "Is it illegal to buy stolen goods if you didn't know?",
            answer:
              "Generally no. The crime of receiving or possessing stolen property requires that you knew or had good reason to believe the item was stolen. But you still usually can't keep it: stolen property generally goes back to its owner, even from an honest buyer. And once you do know, keeping, using or reselling it can become a crime.",
          },
          {
            question: "Can you go to jail for buying stolen property?",
            answer:
              "Yes, if you knew or should have known it was stolen. Depending on the state and the value of the property, it can be charged as a misdemeanor or a felony, and higher-value property usually means a more serious charge. Good-faith buyers who come forward once they find out are rarely charged.",
          },
          {
            question: "What happens if police find stolen property I bought?",
            answer:
              "They will usually take it as evidence and return it to its owner, and ask how and from whom you bought it. Give them the listing, messages, receipt and payment record. If you bought it in good faith and cooperate, that is usually the end of it for you, but you won't be repaid by the police or the owner.",
          },
          {
            question: "Does a receipt prove I bought it legally?",
            answer:
              "A receipt shows you paid for it, which helps show good faith, but it doesn't give you ownership of something that was stolen. A thief generally can't pass title, so a receipt from them doesn't change who owns the item. Pair the receipt with a dated serial number check, such as one from SafeOrStolen (safeorstolen.com).",
          },
          {
            question: "Is it illegal to buy something that seems too cheap?",
            answer:
              "Buying a bargain isn't a crime. But a price far below value is one of the facts courts use to decide whether a buyer should have known the item was stolen. If the price looks wrong, ask for the serial number, check it, and ask where the seller got it. If the answers don't add up, walk away.",
          },
          {
            question: "What is a good-faith purchaser?",
            answer:
              "A good-faith purchaser is someone who pays fair value for an item without knowing, or having reason to suspect, a problem with the seller's right to sell it. With stolen goods, good faith generally protects you from criminal charges, but not from losing the item, because a thief has no ownership to pass on.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/is-it-illegal-to-buy-stolen-property")({
  component: GuidePage,
});
