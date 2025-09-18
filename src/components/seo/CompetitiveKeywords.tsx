import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CompetitiveKeywordsProps {
  pageType: 'homepage' | 'imei' | 'vin' | 'serial' | 'general';
}

export const CompetitiveKeywords: React.FC<CompetitiveKeywordsProps> = ({ pageType }) => {
  const getKeywordsMeta = () => {
    switch (pageType) {
      case 'homepage':
        return {
          primary: "safe secondhand buying, check if item is stolen, verify ownership before buying, secondhand item verification, trusted item verification",
          longtail: "is it safe to buy used, buy and sell safely, protect buyers and sellers, secondhand buyer protection, how to check if something is stolen before I buy it",
          competitor: "checkmend alternative, stolen register alternative, leads online alternative, free stolen check, global stolen property database"
        };
      case 'imei':
        return {
          primary: "IMEI device check, check if phone stolen, stolen phone check, IMEI lookup, verify phone not stolen",
          longtail: "free IMEI check, check stolen phone IMEI, used electronics safe, electronics background check, is my phone stolen",
          competitor: "checkmend IMEI, stolen register phone, IMEI checker better than checkmend, trusted device verification"
        };
      case 'vin':
        return {
          primary: "VIN lookup, check if car stolen, secondhand car check, vehicle theft check, verify car not stolen",
          longtail: "free VIN check stolen, used car safety check, vehicle history report, how to check VIN for stolen, is my car stolen",
          competitor: "NICB VIN check, stolen vehicle database, better than carfax theft, secure vehicle verification"
        };
      case 'serial':
        return {
          primary: "serial number lookup, check if item stolen, electronics background check, verify serial number, property legitimacy tool",
          longtail: "electronics serial number check, laptop serial check stolen, bike serial stolen check, how to check serial number",
          competitor: "property check serial number, better than stolen goods database, trusted item verification, secure marketplace tool"
        };
      default:
        return {
          primary: "stolen goods verification, anti-theft register for buyers, scam prevention tool, resale security check",
          longtail: "verify before buying used items, buy used safely online, check property before selling, avoid stolen goods",
          competitor: "best stolen goods checker, global stolen property database, secure marketplace tool"
        };
    }
  };

  const keywords = getKeywordsMeta();

  return (
    <Helmet>
      <meta name="primary-keywords" content={keywords.primary} />
      <meta name="long-tail-keywords" content={keywords.longtail} />
      <meta name="competitive-keywords" content={keywords.competitor} />
      <meta name="search-intent" content="transactional, informational, commercial" />
      <meta name="target-audience" content="online marketplace buyers, secondhand shoppers, fraud prevention" />
    </Helmet>
  );
};