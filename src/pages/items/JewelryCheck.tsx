/** Oct 7 2026: copy fixed by hand for "check if jewelry is stolen". Removed "AI analysis", an invented
 * theft-cost stat, "3 seconds", and claims that we search insurer, police or jewelry-industry databases. */
import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const JewelryCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Check if Jewelry is Stolen - Diamond, Gold Verification | SafeOrStolen"
      metaDescription="Check pre-owned jewelry before you buy: search a diamond inscription or engraved number against SafeOrStolen theft reports and public web results. 2 free checks."
      h1="Check if Jewelry is Stolen"
      keywords={[
        'check if jewelry is stolen',
        'stolen jewelry database',
        'diamond stolen check',
        'gold jewelry verification',
        'engagement ring stolen',
        'stolen diamond database',
        'jewelry serial check',
        'pawn shop jewelry check',
        'luxury jewelry verification',
        'stolen gold check'
      ]}
      canonical="/check-jewelry-stolen"
      itemType="Jewelry"
      identifierType="Serial Number"
      heroBadge="Jewelry Verification"
      heroSubtitle="If a diamond has a laser inscription or a piece has an engraved number, you can search it against SafeOrStolen theft reports and public web results before you buy. Your first 2 checks are free."
      stats={[
        { value: "2", label: "Free Checks" },
        { value: "$0.99", label: "Per Check After That" },
        { value: "$10", label: "A Month, Unlimited" },
        { value: "Every", label: "Source Listed" }
      ]}
      whatIsTitle="What is Jewelry Verification?"
      whatIsContent="Some jewelry carries a unique number: a laser inscription on a diamond's girdle (often a GIA or AGS report number), or a serial engraved by the maker. A SafeOrStolen check searches SafeOrStolen's own theft reports and public web results for that number. It doesn't search police, insurer or pawn databases, and plain gold pieces without a unique number can't be matched by number at all."
      howItWorksSteps={[
        "Find a unique number: a laser inscription on the diamond's girdle (use a 10x loupe) or an engraved serial",
        "Enter the number at safeorstolen.com/verify",
        "We search SafeOrStolen's theft reports and public web results that mention it",
        "In a few seconds you see the result, with every source listed"
      ]}
      whyVerifyTitle="Why Check Jewelry Before Buying?"
      whyVerifyContent="Stolen jewelry turns up at pawn shops, estate sales and on marketplaces, and if it's stolen you have no claim to it no matter what you paid. A few checks before buying:"
      whyVerifyBenefits={[
        "An inscribed diamond can be matched to its grading report",
        "Ask for the grading report and make sure its number matches the inscription",
        "Police can take stolen jewelry back for its owner",
        "Receiving stolen property is a crime in every state",
        "A seller with no receipt, report or story for a high-value piece is a warning sign",
        "A dated check in your account shows you looked before you bought"
      ]}
      faqs={[
        {
          question: "How do I find a diamond's inscription?",
          answer: "Many graded diamonds have the lab's report number laser-inscribed on the girdle, the thin outer edge. You need a 10x jeweler's loupe or a microscope to read it. Compare it with the number on the paper grading report the seller gives you."
        },
        {
          question: "What if jewelry has no serial number?",
          answer: "Most jewelry has none. Look for hallmarks and maker's marks, take clear photos, and ask for receipts or an appraisal. Without a unique number, a stolen piece can only be matched by description, so the seller's paperwork matters more."
        },
        {
          question: "Can I verify engagement rings?",
          answer: "Yes, if the diamond has a laser inscription. Enter that number at SafeOrStolen (safeorstolen.com/check-jewelry-stolen) to search SafeOrStolen theft reports and public web results, and make sure it matches the grading report the seller hands you."
        },
        {
          question: "What about gold and precious metals?",
          answer: "Gold usually carries a purity hallmark (14K, 18K) and sometimes a maker's mark. Those aren't unique to one piece, so they can't be searched as a serial. Ask for a receipt or appraisal, and be wary of a large lot of gold sold cheap with no history."
        }
      ]}
      ctaTitle="Check the Inscription Before You Buy"
      ctaDescription="A check takes a few seconds. Your first 2 are free."
      relatedLinks={[
        { title: "Watch Verification", href: "/check-watch-stolen" },
        { title: "General Jewelry Check", href: "/check-jewelry" },
        { title: "eBay Safety", href: "/ebay-stolen-item-check" }
      ]}
    />
  );
};

export default JewelryCheck;
