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
          primary: "how to check if something is stolen, free stolen item checker, verify used items before buying, check serial number for stolen goods, is this item stolen lookup",
          longtail: "how do I know if something is stolen before I buy it, free app to check if item is stolen, check if used laptop is stolen, verify secondhand items on Facebook Marketplace, is there a way to see if something is stolen",
          competitor: "free alternative to CheckMEND, better than IMEI info, free stolen goods database, check if stolen without paying, SafeOrStolen vs CheckMEND free"
        };
      case 'imei':
        return {
          primary: "free IMEI check, how to check if phone is stolen, IMEI lookup stolen phone, check phone before buying, verify used phone not stolen",
          longtail: "how do I check if a used phone is stolen, free mobile app to check IMEI, check iPhone IMEI for stolen, verify phone on Facebook Marketplace, is this phone stolen IMEI lookup",
          competitor: "free IMEI checker app, CheckMEND alternative for phones, free phone verification tool, better than IMEI.info, SafeOrStolen mobile app free"
        };
      case 'vin':
        return {
          primary: "free VIN number check, how to check if car is stolen, VIN lookup for stolen vehicles, check used car before buying, verify vehicle not stolen",
          longtail: "how do I know if a used car is stolen, free VIN checker for stolen cars, check truck VIN stolen, verify car on Craigslist, is this vehicle stolen VIN search",
          competitor: "free alternative to NICB VIN check, better than Carfax stolen check, free vehicle verification, SafeOrStolen vs NICB free, mobile app VIN checker"
        };
      case 'serial':
        return {
          primary: "free serial number lookup, how to check if laptop is stolen, check electronics serial number, verify tools not stolen, is this item stolen serial check",
          longtail: "how do I check if a laptop is stolen by serial number, free app to check bike serial number, verify used electronics before buying, check power tools serial number stolen, TV serial number lookup",
          competitor: "free serial number checker, better than stolen property lookup, SafeOrStolen app for serial numbers, free electronics verification, check serial numbers on eBay items"
        };
      default:
        return {
          primary: "how to avoid buying stolen goods, free checking service for used items, verify items on Facebook Marketplace, OfferUp verification tool, eBay item checker",
          longtail: "how do I make sure I'm not buying stolen property, free mobile app to check stolen items, verify used items before meeting seller, check if something from pawn shop is stolen",
          competitor: "free stolen goods checker app, best way to verify used items, SafeOrStolen mobile app, free marketplace verification tool, check items on Craigslist"
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