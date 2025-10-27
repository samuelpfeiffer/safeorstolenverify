import { Helmet } from 'react-helmet-async';

interface CompetitiveMetaTagsProps {
  page: 'home' | 'imei' | 'vin' | 'stolen-checker';
}

export const CompetitiveMetaTags = ({ page }: CompetitiveMetaTagsProps) => {
  const metaConfigs = {
    home: {
      title: "Free Stolen Item Checker - Verify IMEI, VIN & Serial Numbers | SafeOrStolen",
      description: "🔍 Free stolen item verification. Check IMEI, VIN, serial numbers instantly. 50M+ records. Protect yourself from buying stolen goods. 2 FREE searches!",
      keywords: "free stolen item checker, IMEI check free, VIN verification free, stolen goods database, check if phone stolen, verify serial number, stolen laptop checker",
      canonicalUrl: "https://safeorstolen.com",
      ogImage: "https://safeorstolen.com/og-home.png"
    },
    imei: {
      title: "Free IMEI Checker - Verify if Phone is Stolen or Blacklisted | SafeOrStolen",
      description: "✅ Check IMEI number FREE. Verify if iPhone or Android is stolen, blacklisted, or lost. Instant IMEI lookup. 50M+ database records. 2 FREE checks.",
      keywords: "IMEI check, IMEI checker free, check IMEI blacklist, stolen phone checker, IMEI lookup, verify IMEI free, blacklist check",
      canonicalUrl: "https://safeorstolen.com/imei-check",
      ogImage: "https://safeorstolen.com/og-imei.png"
    },
    vin: {
      title: "Free VIN Check - Verify if Car is Stolen or Salvage | SafeOrStolen",
      description: "🚗 Free VIN verification. Check if vehicle is stolen, salvage, or has hidden issues. NICB VINCheck + more databases. Instant results. 2 FREE searches.",
      keywords: "VIN check free, stolen car check, VIN verification, NICB VINCheck, salvage title check, vehicle history free, stolen vehicle database",
      canonicalUrl: "https://safeorstolen.com/vin-verification",
      ogImage: "https://safeorstolen.com/og-vin.png"
    },
    'stolen-checker': {
      title: "Stolen Item Checker - Verify Any Item Before Buying | SafeOrStolen",
      description: "🛡️ Check if items are stolen before buying. Verify phones, laptops, bikes, electronics. Free database search. Protect yourself from scams. Start now!",
      keywords: "stolen item checker, verify before buying, stolen goods lookup, secondhand item check, Facebook marketplace scam prevention, check stolen electronics",
      canonicalUrl: "https://safeorstolen.com/stolen-item-checker",
      ogImage: "https://safeorstolen.com/og-stolen-checker.png"
    }
  };

  const config = metaConfigs[page];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{config.title}</title>
      <meta name="title" content={config.title} />
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={config.canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.canonicalUrl} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.ogImage} />
      <meta property="og:site_name" content="SafeOrStolen" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={config.canonicalUrl} />
      <meta property="twitter:title" content={config.title} />
      <meta property="twitter:description" content={config.description} />
      <meta property="twitter:image" content={config.ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#FF8C00" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
    </Helmet>
  );
};
