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
          primary: "check if stolen, verify before you buy, stolen goods verification",
          longtail: "how to check if something is stolen, where to check if something is stolen, can I check if something is stolen before I buy it, how do I check if something used is stolen",
          competitor: "checkmend alternative, stolen register alternative, leads online alternative, free stolen check"
        };
      case 'imei':
        return {
          primary: "IMEI check, check if phone stolen, IMEI lookup",
          longtail: "free IMEI check, check stolen phone IMEI, verify phone not stolen, IMEI checker free",
          competitor: "checkmend IMEI, stolen register phone, IMEI checker better than checkmend"
        };
      case 'vin':
        return {
          primary: "VIN check, check if car stolen, VIN lookup",
          longtail: "free VIN check stolen, verify car not stolen, vehicle theft check VIN",
          competitor: "NICB VIN check, stolen vehicle database, better than carfax theft"
        };
      case 'serial':
        return {
          primary: "serial number check, check if item stolen, verify serial number",
          longtail: "electronics serial number check, laptop serial check stolen, bike serial stolen check",
          competitor: "property check serial number, better than stolen goods database"
        };
      default:
        return {
          primary: "stolen goods verification, check if stolen",
          longtail: "verify before buying used items",
          competitor: "best stolen goods checker"
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