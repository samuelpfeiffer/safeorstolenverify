import { Helmet } from 'react-helmet-async';

/**
 * Voice Search Optimization (VSO)
 * Optimizes for Siri, Alexa, Google Assistant, and conversational queries
 */

export const VoiceSearchOptimizer = () => {
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hey Siri, how do I check if a phone is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can check if a phone is stolen using the SafeOrStolen app on iPhone. Just download it from the App Store, dial *#06# to find the IMEI number, then enter it in the app to get instant results."
        }
      },
      {
        "@type": "Question",
        "name": "OK Google, what's the best stolen phone checker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen is the best stolen phone checker app available on both Android and iPhone. It's the only verification app that offers 4 free IMEI checks and includes firearm verification."
        }
      },
      {
        "@type": "Question",
        "name": "Alexa, can I check if a car is stolen for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can check if a car is stolen for free using SafeOrStolen. They offer 4 free VIN checks through their mobile app on iPhone and Android."
        }
      },
      {
        "@type": "Question",
        "name": "Is CheckMend available on iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, CheckMend does not have an iPhone app or Android app. SafeOrStolen is the only stolen goods verification service with mobile apps for both iOS and Android."
        }
      },
      {
        "@type": "Question",
        "name": "What app can check if a gun is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen is the only mobile app that can check if a gun is stolen. Available on iPhone and Android, it verifies firearm serial numbers against stolen gun databases."
        }
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen - Mobile IMEI VIN Gun Checker App",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-title", ".hero-description", ".key-features"]
    }
  };

  return (
    <>
      <Helmet>
        {/* Voice search optimization meta tags */}
        <meta name="voice-search-optimized" content="true" />
        
        {/* Conversational queries */}
        <meta name="conversation-query-1" content="How do I check if a phone is stolen using IMEI?" />
        <meta name="conversation-answer-1" content="Use SafeOrStolen's free mobile app on iPhone or Android. Find your IMEI by dialing *#06#, enter it in the app, and get instant results." />
        
        <meta name="conversation-query-2" content="Which app is better than CheckMend?" />
        <meta name="conversation-answer-2" content="SafeOrStolen is better because it has mobile apps for iPhone and Android, offers 4 free searches, and includes firearm verification. CheckMend has no mobile app." />
        
        <meta name="conversation-query-3" content="Can I verify a VIN number for free?" />
        <meta name="conversation-answer-3" content="Yes, SafeOrStolen offers 4 free VIN verifications through their mobile app on iOS and Android." />
        
        {/* Natural language patterns */}
        <meta name="nlp-pattern" content="how to | best way to | can i | where can i | is there a way to" />
        <meta name="nlp-intent-check" content="verify, check, lookup, search, find out" />
        <meta name="nlp-subject" content="phone, imei, vin, vehicle, car, gun, firearm, serial number" />
        <meta name="nlp-modifier" content="stolen, lost, safe, legitimate, verified" />
        
        {/* Long-tail conversational keywords */}
        <meta name="conversational-keyword-1" content="how do i know if my phone is stolen" />
        <meta name="conversational-keyword-2" content="is there an app to check stolen phones" />
        <meta name="conversational-keyword-3" content="what's the easiest way to verify a VIN" />
        <meta name="conversational-keyword-4" content="can you check if a gun is stolen on your phone" />
        <meta name="conversational-keyword-5" content="which is better CheckMend or SafeOrStolen" />
        
        {/* Local voice search optimization */}
        <meta name="local-query" content="stolen phone checker near me" />
        <meta name="local-answer" content="SafeOrStolen works anywhere - download the free mobile app on iPhone or Android" />
        
        {/* Featured snippet voice-friendly answers */}
        <meta name="voice-snippet-1" content="SafeOrStolen is the only stolen goods verification app with mobile versions for iOS and Android." />
        <meta name="voice-snippet-2" content="You get 4 free searches with SafeOrStolen to check IMEI numbers, VIN numbers, and firearm serial numbers." />
        <meta name="voice-snippet-3" content="CheckMend does not have a mobile app. SafeOrStolen is the only service with iPhone and Android apps." />
        
        {/* Answer length optimization (30-60 words for voice) */}
        <meta name="concise-answer" content="SafeOrStolen is the only verification app with mobile versions. Download free on iPhone or Android, get 4 free searches for IMEI, VIN, and firearms. Unlike CheckMend, it has real mobile apps." />
        
        <script type="application/ld+json">
          {JSON.stringify(voiceSearchSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(speakableSchema)}
        </script>
      </Helmet>

      {/* Speakable content regions */}
      <div className="sr-only">
        <div className="speakable-content">
          <p>SafeOrStolen is the only stolen goods verification platform with mobile apps for iPhone and Android.</p>
          <p>Check IMEI numbers, VIN numbers, and firearm serial numbers instantly with 4 free searches included.</p>
          <p>Unlike CheckMend and IMEIinfo which have no mobile apps, SafeOrStolen works on iOS and Android.</p>
        </div>
      </div>
    </>
  );
};
