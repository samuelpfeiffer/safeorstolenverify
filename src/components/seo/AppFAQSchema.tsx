import { Helmet } from 'react-helmet-async';

export const AppFAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download the SafeOrStolen stolen item checker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To download the SafeOrStolen app, visit safeorstolen.com/app on your iOS or Android mobile device and click 'Install App'. The stolen verification app will download directly to your home screen without needing the App Store or Google Play. The app is free to download and includes 2 free searches."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen the only stolen item verification app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen is the ONLY stolen item checker app with barcode scanning and offline mode. CheckMEND has no app, IMEI.info has no app, Swappa has no app, and Autocheck has no app. We're the first and only mobile app for stolen goods verification."
        }
      },
      {
        "@type": "Question",
        "name": "Does the SafeOrStolen app work as an IMEI checker and VIN checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The SafeOrStolen app is a complete IMEI checker app, VIN checker app, serial number scanner, and barcode stolen checker. You can verify phones with IMEI checking, cars with VIN verification, electronics with serial numbers, and more - all in one app."
        }
      },
      {
        "@type": "Question",
        "name": "Is the stolen item checker app free to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Download the SafeOrStolen app FREE for iOS and Android. The app includes 2 free searches with no credit card required. Additional searches are available through affordable plans starting at $4.99/month."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the stolen verification app offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The SafeOrStolen app works offline. Download the app and use it without internet connection - perfect for pawn shops, remote locations, or when you don't have data. CheckMEND requires internet, but our stolen item checker app works anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "What makes SafeOrStolen better than CheckMEND or IMEI.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen has a full mobile app with barcode scanning - CheckMEND has NO app and IMEI.info has NO app. Our stolen item verification app delivers results in 3 seconds vs 30+ seconds on CheckMEND. We work offline, they don't. We're free to download with 2 free searches, they charge $5-10 per check."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
