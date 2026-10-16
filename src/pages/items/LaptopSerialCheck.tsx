/** Oct 7 2026: copy fixed by hand for "check if laptop is stolen". Removed "AI analysis", invented theft stats,
 * "3 seconds", and false claims that we search Apple, manufacturer or iCloud records. */
import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const LaptopSerialCheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Check if Laptop is Stolen - Free Serial Number Verification | SafeOrStolen"
      metaDescription="Check a used laptop's serial number before you buy. SafeOrStolen searches its theft reports and public web results for MacBook, Dell, HP, Lenovo and ASUS."
      h1="Check if Laptop is Stolen - Free Serial Number Verification"
      keywords={[
        'check if laptop is stolen',
        'laptop serial number check',
        'stolen laptop database',
        'macbook stolen check',
        'verify laptop not stolen',
        'used laptop verification',
        'dell serial number lookup',
        'hp laptop stolen check',
        'is my laptop stolen',
        'laptop serial number lookup'
      ]}
      canonical="/check-laptop-stolen"
      itemType="Laptop"
      identifierType="Serial Number"
      heroBadge="Laptop Theft Verification"
      heroSubtitle="Before you pay for a used MacBook, Dell, HP or Lenovo, check its serial number against SafeOrStolen theft reports and public web results. The result comes back in a few seconds."
      stats={[
        { value: "2", label: "Free Checks" },
        { value: "$0.99", label: "Per Check After That" },
        { value: "$10", label: "A Month, Unlimited" },
        { value: "Every", label: "Source Listed" }
      ]}
      whatIsTitle="What is Laptop Serial Number Verification?"
      whatIsContent="Every laptop has a serial number from the manufacturer. When an owner reports a theft on SafeOrStolen, that serial is logged, and stolen laptops often get mentioned in posts and listings online. A SafeOrStolen laptop check searches SafeOrStolen's own theft reports and public web results for the serial. It does not search Apple, Dell, HP or Lenovo records, police databases, or iCloud lock status, so you still need to check the lock in person."
      howItWorksSteps={[
        "Find the serial number: on a Mac, Apple menu > About This Mac; on Windows, Settings > System > About, or the sticker on the bottom",
        "Enter the serial number at safeorstolen.com/verify",
        "We search SafeOrStolen's theft reports and public web results that mention the serial",
        "In a few seconds you see \"reported stolen\", \"possible match\" or \"no report found in the records searched\", with every source listed"
      ]}
      howItWorksDescription="The serial check is one step. At the meetup, also make sure the serial in the system settings matches the sticker, and watch the seller sign out of their Apple ID or Microsoft account and erase the laptop."
      whyVerifyTitle="Why Check Before Buying a Used Laptop?"
      whyVerifyContent="Laptops are easy to steal and easy to resell on marketplaces. A stolen one can be locked by its owner or taken back by police after you've paid. Here's what's at stake:"
      whyVerifyBenefits={[
        "A Mac with Activation Lock on can't be set up without the owner's Apple ID",
        "Police can take a stolen laptop back for its owner, and you lose your money",
        "Receiving stolen property is a crime in every state",
        "Company laptops often have management software that locks or tracks them",
        "Private sellers rarely give refunds once you find out",
        "A dated check in your account shows you looked before you bought"
      ]}
      useCases={[
        {
          title: "MacBook Buyers",
          description: "MacBooks hold their value, which makes them a common target. Check the serial and make sure Activation Lock is off before you pay."
        },
        {
          title: "Gaming Laptop Purchases",
          description: "ASUS ROG, Alienware and Razer machines sell fast used. Check the serial before you meet."
        },
        {
          title: "Business Laptop Resale",
          description: "Ex-company laptops are common on marketplaces. Ask how the seller got it, and make sure it isn't still enrolled in company management."
        }
      ]}
      faqs={[
        {
          question: "Where do I find my laptop's serial number?",
          answer: "On a Mac, open the Apple menu > About This Mac, or look on the bottom case. On Windows, go to Settings > System > About, or look at the sticker on the bottom. Dell, HP and Lenovo also print it on a sticker under the laptop or in the battery bay."
        },
        {
          question: "Can I check a MacBook serial number?",
          answer: "Yes. Enter the MacBook's serial at SafeOrStolen (safeorstolen.com/check-laptop-stolen) and it searches SafeOrStolen theft reports and public web results. It doesn't check Apple's records or Activation Lock, so also have the seller sign out of their Apple ID and erase the Mac in front of you."
        },
        {
          question: "What is MacBook Activation Lock?",
          answer: "Activation Lock is Apple's anti-theft feature linked to the owner's Apple ID. If Find My was on when the Mac was stolen, nobody can erase and set it up without the owner's Apple ID password. Ask the seller to sign out of iCloud and show you the Mac starting setup fresh."
        },
        {
          question: "How do I know if a laptop serial number is legit?",
          answer: "Make sure the serial in the system settings matches the sticker on the case. For Macs, you can also enter it on Apple's Check Coverage page to confirm the model. If the numbers don't match, or the sticker is scratched off, treat that as a warning sign."
        },
        {
          question: "What brands of laptops can I check?",
          answer: "Any brand with a serial number: Apple, Dell, HP, Lenovo, ASUS, Acer, Microsoft Surface, Razer, MSI, Samsung and others. The check searches SafeOrStolen theft reports and public web results for that serial."
        },
        {
          question: "What if the laptop is reported stolen?",
          answer: "Don't buy it, and don't confront the seller. Save the listing and the seller's details, report the listing to the marketplace, and call your local police non-emergency line."
        },
        {
          question: "Can stolen laptops be tracked?",
          answer: "Often. MacBooks with Find My on can be located and locked remotely, and company laptops usually have management software that can lock them. That's one more reason a stolen laptop is a bad buy: it may stop working after you pay."
        },
        {
          question: "Should I verify even from retail stores?",
          answer: "Buying new from an authorized retailer is low risk. For refurbished shops, pawn shops and private sellers, run the serial and check the account lock before paying."
        }
      ]}
      ctaTitle="Check the Laptop Before You Pay"
      ctaDescription="A serial check takes a few seconds. Your first 2 checks are free."
      relatedLinks={[
        { title: "MacBook Verification", href: "/check-electronics" },
        { title: "Gaming Console Check", href: "/check-electronics" },
        { title: "eBay Stolen Item Check", href: "/ebay-stolen-item-check" }
      ]}
    />
  );
};

export default LaptopSerialCheck;
