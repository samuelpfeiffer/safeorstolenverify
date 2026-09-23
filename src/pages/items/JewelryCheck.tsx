import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const JewelryCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Check if Jewelry is Stolen - Diamond, Gold Verification | SafeOrStolen"
      metaDescription="Verify jewelry and diamonds aren't stolen before buying. Free serial/inscription check for engagement rings, gold, luxury pieces. Search stolen jewelry database."
      h1="Check if Jewelry is Stolen - Free Verification"
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
      heroSubtitle="Diamonds and precious jewelry are valuable theft targets. Before buying pre-owned, verify inscriptions and serial numbers against stolen property databases. Free check."
      stats={[
        { value: "$2B+", label: "Jewelry Theft Annually" },
        { value: "3 sec", label: "Verification Time" },
        { value: "Instant", label: "Results" },
        { value: "Free", label: "First 2 Checks" }
      ]}
      whatIsTitle="What is Jewelry Verification?"
      whatIsContent="Many valuable jewelry pieces have identifying marks: diamond laser inscriptions (GIA, AGS), hallmarks, engraved serial numbers, or unique identifiers. When stolen, these identifying numbers are reported to police, insurance companies, and databases like The Jewelry Security Alliance. Our verification searches these sources to help protect you from purchasing stolen property."
      howItWorksSteps={[
        "Find identifying marks: Check for laser inscriptions on diamonds, hallmarks, or engraved serial numbers",
        "Enter any identifying numbers into our verification tool",
        "Our system checks SafeOrStolen's reports, public web results, and uses AI analysis to identify potentially stolen jewelry.",
        "Get instant results - know if the piece has been reported stolen"
      ]}
      whyVerifyTitle="Why Check Jewelry Before Buying?"
      whyVerifyContent="Jewelry theft costs billions annually. Stolen pieces often end up in pawn shops, estate sales, and online marketplaces. Protect yourself from legal and financial consequences."
      whyVerifyBenefits={[
        "GIA-inscribed diamonds can be traced and identified",
        "Insurance companies aggressively pursue stolen jewelry recovery",
        "Police use inscriptions and photos to match recovered jewelry",
        "Possession of stolen property leads to confiscation and possible charges",
        "No legal claim to stolen jewelry regardless of what you paid",
        "Expensive jewelry is often photographed and documented by owners",
        "Pawn shops check databases before purchasing",
        "High-value pieces should always have provenance documentation"
      ]}
      faqs={[
        {
          question: "How do I find a diamond's inscription?",
          answer: "GIA-certified diamonds have a laser inscription on the girdle (edge). You'll need a jeweler's loupe (10x magnification) or microscope to see it. The GIA report number is inscribed."
        },
        {
          question: "What if jewelry has no serial number?",
          answer: "Many jewelry pieces don't have serial numbers. Look for hallmarks, maker's marks, or unique features. Photos with clear details can also help identify stolen pieces."
        },
        {
          question: "Can I verify engagement rings?",
          answer: "Yes, especially if the diamond has a GIA or AGS certification. The report number is laser-inscribed on the diamond and can be verified."
        },
        {
          question: "What about gold and precious metals?",
          answer: "Gold jewelry often has hallmarks indicating purity (14K, 18K, etc.) and maker's marks. While not unique identifiers, they help with verification. Documented stolen pieces are logged by description."
        }
      ]}
      ctaTitle="Protect Your Investment - Verify Jewelry"
      ctaDescription="A free check takes 3 seconds and could save you from buying stolen valuables."
      relatedLinks={[
        { title: "Watch Verification", href: "/check-watch-stolen" },
        { title: "General Jewelry Check", href: "/check-jewelry" },
        { title: "eBay Safety", href: "/ebay-stolen-item-check" }
      ]}
    />
  );
};

export default JewelryCheck;
