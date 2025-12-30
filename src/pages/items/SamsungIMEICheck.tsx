import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const SamsungIMEICheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Is This Samsung Phone Stolen? Check Before Buying | SafeOrStolen"
      metaDescription="Buying a used Samsung Galaxy? Check if it's stolen before you pay. Free verification for S24, Z Fold, Z Flip, A series. Works on Facebook Marketplace, OfferUp."
      h1="Is This Samsung Stolen? Check Before You Buy"
      keywords={[
        'is this samsung stolen',
        'how to check if samsung is stolen',
        'samsung galaxy stolen check',
        'check samsung before buying',
        'samsung s24 stolen check',
        'z fold stolen check',
        'used samsung verification',
        'samsung blacklist check free',
        'facebook marketplace samsung stolen',
        'how to tell if samsung is stolen'
      ]}
      canonical="/check-samsung-stolen"
      itemType="Samsung Phone"
      identifierType="IMEI"
      heroBadge="Protect Yourself Before Buying"
      heroSubtitle="Samsung Galaxy phones are the second-most stolen smartphones in America. That 'great deal' on an S24 or Z Fold could cost you everything. Check before you meet the seller."
      stats={[
        { value: "800K+", label: "Samsung Phones Stolen Yearly" },
        { value: "2 sec", label: "To Check" },
        { value: "Free", label: "First 2 Checks" },
        { value: "$900+", label: "Average Loss Avoided" }
      ]}
      whatIsTitle="How Do I Know If a Samsung Is Stolen?"
      whatIsContent="Every Samsung Galaxy has a unique 15-digit serial number (IMEI). When a phone is reported stolen, carriers blacklist it so it can't connect to any network. Our free checker searches these blacklists plus police databases. If the Samsung is stolen, you'll know before you hand over your money."
      howItWorksSteps={[
        "Ask the seller for the IMEI (or dial *#06# on the Samsung)",
        "Enter the 15-digit number above - takes 2 seconds",
        "See if it's SAFE ✅ or BLACKLISTED ❌",
        "If safe, proceed with the meeting. If blacklisted, walk away."
      ]}
      howItWorksDescription="We check carrier blacklists, Samsung's Find My Mobile reports, police databases, and insurance claims. Covers all Galaxy models - S24, S23, S22, Z Fold, Z Flip, A series, and older phones."
      whyVerifyTitle="What Happens If I Buy a Stolen Samsung?"
      whyVerifyContent="Samsung Galaxy phones - especially flagships like the S24 Ultra and Z Fold - are worth $1,000+. Here's what happens if you buy one that's stolen:"
      whyVerifyBenefits={[
        "Phone won't work - blacklisted Samsungs can't connect to AT&T, Verizon, T-Mobile, or any carrier",
        "Samsung lock - Find My Mobile can remotely lock and wipe the device",
        "FRP trap - Factory Reset Protection locks you out if owner didn't sign out",
        "Police seizure - stolen property gets confiscated, you get nothing back",
        "Criminal charges - receiving stolen property is a crime in all states",
        "No warranty - Samsung won't touch stolen devices",
        "Can't resell - no one will buy a blacklisted phone",
        "Total loss - your money is gone, the seller blocked you"
      ]}
      useCases={[
        {
          title: "Galaxy S24 Ultra Deal",
          description: "A $600 S24 Ultra on Facebook? That's half price for a reason. Check before you get scammed."
        },
        {
          title: "Z Fold or Z Flip",
          description: "These $1,500+ phones are prime theft targets. Always verify before buying used."
        },
        {
          title: "Budget Galaxy A Series",
          description: "Even mid-range phones like the A54 get stolen and resold. A quick check protects you."
        }
      ]}
      testimonial={{
        quote: "The Z Fold 5 on OfferUp looked perfect - still in box, great price. Checked here and it was reported stolen in Miami. Seller had driven from Florida to sell it here. Unbelievable.",
        author: "Jennifer T.",
        role: "Atlanta"
      }}
      faqs={[
        {
          question: "How do I find the IMEI on a Samsung?",
          answer: "Dial *#06# from the phone dialer. Or go to Settings > About Phone > Status > IMEI information. It's also on the original box and SIM card tray."
        },
        {
          question: "What Samsung models can I check?",
          answer: "All of them! Galaxy S24, S23, S22, S21, Z Fold, Z Flip, A series (A54, A34, A14), Note series, and older models. Any Samsung with an IMEI."
        },
        {
          question: "What is Samsung FRP lock?",
          answer: "Factory Reset Protection - if the previous owner didn't sign out of their Samsung account before reset, you're locked out forever. Scammers often say 'I forgot my password' - red flag."
        },
        {
          question: "What if the seller won't give me the IMEI?",
          answer: "Walk away immediately. Legitimate sellers provide it without hesitation. No IMEI = stolen phone."
        },
        {
          question: "Can sellers fake an IMEI number?",
          answer: "They can send you a fake number, but can't change the phone's actual IMEI. Always verify by dialing *#06# on the actual phone when you meet them."
        },
        {
          question: "What does 'blacklisted' mean?",
          answer: "The phone was reported to carriers as stolen, lost, or having unpaid bills. It can't connect to any carrier network - it's basically an expensive WiFi tablet."
        },
        {
          question: "Is this really free?",
          answer: "Yes! 2 free checks, no credit card required. Enough to verify before any purchase."
        },
        {
          question: "What if the phone shows as stolen?",
          answer: "Don't buy it. Don't meet. Report the listing to Facebook/OfferUp/Craigslist. Consider notifying police - you might help catch a thief."
        }
      ]}
      ctaTitle="Check Before You Pay"
      ctaDescription="A stolen Samsung is worthless. Enter the IMEI and know in 2 seconds. It's free."
      relatedLinks={[
        { title: "Is This iPhone Stolen?", href: "/check-iphone-stolen" },
        { title: "Is This Android Stolen?", href: "/check-android-stolen" },
        { title: "OfferUp Safety Tips", href: "/offerup-verify-not-stolen" }
      ]}
    />
  );
};

export default SamsungIMEICheck;
