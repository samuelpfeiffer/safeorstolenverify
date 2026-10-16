import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

/** Oct 8 2026 audit: copy rewritten by hand. Removed "AI-powered", "3 seconds"/"instant",
 * the invented "$1B+ tool theft" and dollar figures, and false claims that the check searches
 * manufacturer registries, Milwaukee One-Key, insurer or police databases, or that pawn shops use it. */
const PowerToolsCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Check if Power Tools Are Stolen - DeWalt, Milwaukee, Makita | SafeOrStolen"
      metaDescription="Check a used DeWalt, Milwaukee, Makita or Ryobi tool's serial number against SafeOrStolen theft reports and public web results in a few seconds before you buy."
      h1="Check if Power Tools Are Stolen - Free Serial Check"
      keywords={[
        'check if power tools stolen',
        'tool serial number lookup',
        'stolen tools database',
        'dewalt stolen check',
        'milwaukee tool verification',
        'makita stolen tools',
        'power tool serial check',
        'used tools verification',
        'stolen construction tools',
        'tool theft check'
      ]}
      canonical="/check-power-tools-stolen"
      itemType="Power Tools"
      identifierType="Serial Number"
      heroBadge="Power Tool Verification"
      heroSubtitle="Buying a used drill, impact driver or saw off Marketplace? Type the serial number from the tool's label and SafeOrStolen searches its theft reports and public web results for it in a few seconds."
      stats={[
        { value: "2", label: "Free Checks" },
        { value: "$0.99", label: "Per Check After That" },
        { value: "$10/mo", label: "Unlimited Checks" },
        { value: "Dated", label: "Record Saved to Your Account" }
      ]}
      whatIsTitle="What Is Power Tool Serial Number Verification?"
      whatIsContent="Most professional power tools carry a serial number on a label or plate on the body. When a contractor loses tools from a truck or job site, the serial numbers are what they give police and post online. A SafeOrStolen check searches SafeOrStolen's own theft reports, where owners report stolen items, and public web results such as stolen-tool posts and listings that mention that serial. It does not search manufacturer, insurer, pawn or police databases."
      howItWorksSteps={[
        "Find the serial number: it's usually on a sticker or plate on the tool body, near the battery slot, or on the motor housing",
        "Type the serial number into the search box",
        "SafeOrStolen searches its theft reports and public web results for that serial",
        "In a few seconds you see \"reported stolen\", \"possible match\" or \"no report found in the records searched\", with each source listed"
      ]}
      howItWorksDescription="Check each tool in a set separately, since every tool and many batteries have their own serial. Each check is saved to your account with the date."
      whyVerifyTitle="Why Check Power Tools Before Buying?"
      whyVerifyContent="Tools stolen from work trucks and job sites are usually resold fast and for cash, often on Facebook Marketplace, Craigslist and OfferUp. Contractors watch those listings for their own gear. Here's what to keep in mind:"
      whyVerifyBenefits={[
        "Contractors often recognize their own tools online and call police",
        "Police can take stolen tools back for their owner, and you lose what you paid",
        "Knowingly buying stolen property is a crime",
        "Milwaukee ONE-KEY owners can mark tools as lost in the ONE-KEY app",
        "A scraped-off or painted-over serial label is a warning sign on its own",
        "Honest sellers can usually show a receipt, a work history, or a photo of the tool in use"
      ]}
      useCases={[
        {
          title: "Buying Used Professional Tools",
          description: "Before buying a used tool or kit, check each serial so you aren't paying for gear taken from a job site."
        },
        {
          title: "Pawn Shops and Resellers",
          description: "Shops that take in a lot of tools can check serials in bulk at /bulk-check and keep a dated record of each check."
        },
        {
          title: "Online Marketplace Buyers",
          description: "Ask for the serial before you drive out, check it, and match it to the tool when you get there."
        }
      ]}
      faqs={[
        {
          question: "Where do I find the serial number on power tools?",
          answer: "Look for a sticker or metal plate on the main body, often near the battery slot, on the motor housing, or under the handle. Batteries usually have their own label. In a kit, each tool has a separate serial, so write them all down and check each one before you pay."
        },
        {
          question: "Which power tool brands can I check?",
          answer: "Any tool with a serial number: DeWalt, Milwaukee, Makita, Bosch, Ridgid, Ryobi, Craftsman, Hilti, Festool and others. SafeOrStolen (safeorstolen.com/check-power-tools-stolen) searches its theft reports and public web results for the serial you enter, whatever the brand."
        },
        {
          question: "What is Milwaukee ONE-KEY?",
          answer: "ONE-KEY is Milwaukee's app and tracking system for certain tools. Owners register tools in the app and can mark them as lost, and some tools can be locked from the app. SafeOrStolen does not search ONE-KEY; if a tool has a ONE-KEY badge, ask the seller to show it removed from their account."
        },
        {
          question: "What are the warning signs of stolen power tools?",
          answer: "A price far below what the tool sells for used, a seller with a pile of brand-new tools still in packaging, serial labels peeled, scratched or painted over, engraved initials or company names ground off, and a seller who won't give you the serial or wants a fast cash deal in a parking lot."
        },
        {
          question: "What if the tools I'm buying turn out to be stolen?",
          answer: "Don't buy them. Note the seller's profile, the listing and the serial numbers, report the listing to the marketplace, and call the local police non-emergency line. If the check shows a theft report on SafeOrStolen, police can use that to reach the owner."
        },
        {
          question: "Can I check cordless tool batteries?",
          answer: "Yes, if the battery has a serial number on its label. Batteries like DeWalt FLEXVOLT and Milwaukee M18 High Output packs are expensive on their own, so they are worth checking separately from the tool."
        },
        {
          question: "How much does a power tool check cost?",
          answer: "Your first 2 checks are free with a free SafeOrStolen account, no credit card. After that a check is $0.99, or $10 a month for unlimited checks, which helps when you're checking a whole kit. Cancel anytime."
        }
      ]}
      ctaTitle="Check Power Tools Before You Buy"
      ctaDescription="A serial number check takes a few seconds, and your first 2 are free."
      relatedLinks={[
        { title: "General Tool Check", href: "/check-tools" },
        { title: "Craigslist Safety", href: "/craigslist-safety-verification" },
        { title: "Facebook Marketplace", href: "/facebook-marketplace-stolen-check" }
      ]}
    />
  );
};

export default PowerToolsCheck;
