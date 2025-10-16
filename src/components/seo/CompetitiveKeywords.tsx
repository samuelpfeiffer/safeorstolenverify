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
          primary: "how to check if something is stolen, is this stolen, check if stolen before buying, free stolen item checker, verify used items, how do I know if stolen",
          longtail: "how do I check if something is stolen before I buy it, is this phone stolen check free, can I verify if item is stolen, how to tell if used item is stolen, check if stolen on Facebook Marketplace, is there a way to check stolen goods, avoid buying stolen merchandise",
          competitor: "CheckMEND free alternative, better than IMEI.info, Swappa IMEI check alternative, free stolen goods database, CheckSerial competitor, stolen property lookup free"
        };
      case 'imei':
        return {
          primary: "is my phone stolen check, free IMEI checker, how to check if iPhone is stolen, IMEI lookup stolen phone database, check phone IMEI before buying",
          longtail: "how do I know if a phone is stolen by IMEI, can I check if my phone is stolen for free, check iPhone IMEI stolen status, verify Android phone not stolen, is this used phone stolen IMEI check, check phone before buying on Craigslist",
          competitor: "Swappa IMEI check free, IMEI.info alternative, CheckMEND phone checker, free IMEI blacklist check, better than Swappa verification"
        };
      case 'vin':
        return {
          primary: "is this car stolen VIN check, free VIN lookup stolen vehicle, how to check if car is stolen before buying, VIN number stolen database check",
          longtail: "how do I check if a used car is stolen by VIN, can I verify vehicle not stolen for free, check VIN before buying on Facebook Marketplace, is this truck stolen VIN lookup, verify motorcycle not stolen, check car VIN on Craigslist",
          competitor: "NICB VIN check free alternative, Carfax stolen vehicle check, AutoCheck VIN lookup competitor, free VIN decoder stolen status, better than NICB stolen car database"
        };
      case 'serial':
        return {
          primary: "check serial number if stolen, how to verify laptop not stolen, serial number stolen database lookup, check electronics before buying",
          longtail: "how do I check if laptop is stolen by serial number, can I verify power tools not stolen, check bike serial number stolen, is this camera stolen serial lookup, verify iPad serial number before buying, check guitar serial number stolen",
          competitor: "CheckSerial alternative, stolen property registry lookup, free serial number database, electronics verification tool, better than police stolen goods database"
        };
      default:
        return {
          primary: "how to avoid buying stolen goods, verify items before buying, marketplace safety checker, is this stolen check, secondhand buying protection",
          longtail: "how do I make sure I'm not buying stolen items, can I check if something from pawn shop is stolen, verify items on Facebook Marketplace before buying, avoid scams on OfferUp, check if eBay item is stolen",
          competitor: "best stolen goods checker, marketplace verification app, Facebook Marketplace safety tool, OfferUp buyer protection, Craigslist item verification free"
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