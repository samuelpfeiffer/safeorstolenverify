import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const LaptopSerialCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Is This Laptop Stolen? Check MacBook, Dell, HP Before Buying | SafeOrStolen"
      metaDescription="Buying a used laptop? Check if it's stolen before you pay. Free verification for MacBook, Dell, HP, Lenovo. Works on Facebook Marketplace, Craigslist, eBay."
      h1="Is This Laptop Stolen? Check Before You Buy"
      keywords={[
        'is this laptop stolen',
        'how to check if laptop is stolen',
        'check laptop before buying',
        'is my macbook stolen',
        'how to tell if macbook is stolen',
        'macbook stolen check',
        'used laptop verification',
        'dell laptop stolen check',
        'facebook marketplace laptop stolen',
        'check serial number laptop'
      ]}
      canonical="/check-laptop-stolen"
      itemType="Laptop"
      identifierType="Serial Number"
      heroBadge="Protect Yourself Before Buying"
      heroSubtitle="A laptop is stolen every minute in the US. That $800 MacBook on Facebook Marketplace could be stolen property. Check the serial number before you meet the seller - it takes 2 seconds."
      stats={[
        { value: "97", label: "Laptops Stolen Per Minute" },
        { value: "2 sec", label: "To Check" },
        { value: "Free", label: "First 2 Checks" },
        { value: "$1,200+", label: "Average Loss Avoided" }
      ]}
      whatIsTitle="How Do I Know If a Laptop Is Stolen?"
      whatIsContent="Every laptop has a unique serial number from the manufacturer. When laptops are stolen, they're reported to police, insurance companies, and manufacturer databases. MacBooks can be remotely locked via Find My Mac. Our free checker searches these databases so you know if a laptop is stolen before you hand over your money."
      howItWorksSteps={[
        "Ask the seller for the serial number (found on the bottom of the laptop or in System Settings)",
        "Enter the number above - takes 2 seconds",
        "See if it's SAFE ✅ or STOLEN ❌",
        "If safe, meet the seller. If stolen, walk away and report them."
      ]}
      howItWorksDescription="We check manufacturer databases (Apple, Dell, HP, Lenovo), police stolen property records, insurance claims, and corporate theft reports. For MacBooks, we also check iCloud lock status."
      whyVerifyTitle="What Happens If I Buy a Stolen Laptop?"
      whyVerifyContent="Laptops are high-value targets - MacBooks alone can cost $2,000-$4,000. Here's what you're risking:"
      whyVerifyBenefits={[
        "MacBook Activation Lock - Apple can remotely lock it, making it completely useless",
        "Police seizure - stolen property gets confiscated, no refund for you",
        "Corporate tracking - business laptops often have hidden tracking software",
        "Criminal charges - receiving stolen property is a crime in all states",
        "No warranty - manufacturers won't service stolen devices",
        "Can't resell - a locked MacBook is worthless on the used market",
        "Seller vanishes - private sellers block you and disappear after the sale",
        "Total loss - you paid $1,500 for a laptop you can't use"
      ]}
      useCases={[
        {
          title: "MacBook on Facebook Marketplace",
          description: "MacBooks hold their value, making them prime theft targets. Always verify the serial number before meeting."
        },
        {
          title: "Gaming Laptop Deal",
          description: "That $800 Alienware or Razer laptop is worth checking. High-end gaming laptops are frequently stolen."
        },
        {
          title: "Business Laptop from Craigslist",
          description: "Corporate laptops often have tracking software. Verify it wasn't stolen from a business."
        }
      ]}
      testimonial={{
        quote: "Found a MacBook Pro M3 for $1,200 on Marketplace - seemed like a great deal. Checked here and it was reported stolen 2 weeks ago from a business in my city. The seller had a completely convincing story.",
        author: "Sarah M.",
        role: "Seattle"
      }}
      faqs={[
        {
          question: "Where do I find a laptop's serial number?",
          answer: "MacBooks: Apple menu > About This Mac > Serial Number. Windows: Settings > System > About. Or check the sticker on the bottom of any laptop."
        },
        {
          question: "Can I check a MacBook serial number?",
          answer: "Yes! MacBooks are the most commonly verified laptops on our platform. We check Apple's databases, police records, and iCloud lock status."
        },
        {
          question: "What is MacBook Activation Lock?",
          answer: "If Find My Mac was enabled, the original owner can remotely lock the laptop. Even a factory reset won't help - you need their Apple ID password to use it. Always ask sellers to sign out of iCloud in front of you."
        },
        {
          question: "What if the seller won't give me the serial number?",
          answer: "Walk away. Legitimate sellers have nothing to hide. Refusal to provide a serial number = stolen laptop."
        },
        {
          question: "What laptop brands can I check?",
          answer: "All major brands: Apple MacBook, Dell, HP, Lenovo, ASUS, Acer, Microsoft Surface, Razer, MSI, Samsung, and more."
        },
        {
          question: "What if the laptop shows as stolen?",
          answer: "Don't buy it. Don't meet the seller. Report the listing to the marketplace. Consider notifying police - the original owner may be actively looking for it."
        },
        {
          question: "Can stolen laptops be tracked?",
          answer: "Yes! MacBooks with Find My Mac, Windows laptops with Find My Device, and corporate laptops with MDM software can all be tracked. Another reason to never buy stolen."
        },
        {
          question: "Is this really free?",
          answer: "Yes! 2 free checks, no credit card. Enough to verify before your next purchase."
        }
      ]}
      ctaTitle="Check Before You Pay"
      ctaDescription="A locked laptop is worthless. Enter the serial number and know if it's stolen in 2 seconds. It's free."
      relatedLinks={[
        { title: "Is This MacBook Stolen?", href: "/check-electronics" },
        { title: "Facebook Marketplace Safety", href: "/facebook-marketplace-stolen-check" },
        { title: "eBay Safety Tips", href: "/ebay-stolen-item-check" }
      ]}
    />
  );
};

export default LaptopSerialCheck;
