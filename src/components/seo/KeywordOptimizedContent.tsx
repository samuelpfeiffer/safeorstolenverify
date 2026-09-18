import React from 'react';

interface KeywordOptimizedContentProps {
  pageType: 'homepage' | 'phone' | 'car' | 'electronics' | 'general';
  className?: string;
}

export const KeywordOptimizedContent: React.FC<KeywordOptimizedContentProps> = ({ 
  pageType, 
  className = "" 
}) => {
  const getOptimizedContent = () => {
    switch (pageType) {
      case 'homepage':
        return {
          heading: "Free Stolen Item Checker - Verify Used Items Before You Buy",
          subheading: "How to check if something is stolen: Enter IMEI, VIN, or serial number for instant verification. Free mobile app to check items on Facebook Marketplace, OfferUp, eBay, and Craigslist.",
          benefits: [
            "Free checking service for all used items - laptops, phones, cars, bikes, tools, TVs",
            "Mobile app to verify items instantly at yard sales, pawn shops, and online marketplaces",
            "Check serial numbers, IMEI, and VIN numbers with a free account",
            "Avoid buying stolen goods - protect yourself from legal trouble and financial loss"
          ],
          cta: "Check If Item Is Stolen - Free"
        };
        
      case 'phone':
        return {
          heading: "Free IMEI Check - How to Check If a Used Phone Is Stolen",
          subheading: "Verify any phone before buying on Facebook Marketplace, OfferUp, or eBay. Free IMEI lookup for iPhones, Samsung, and all smartphones. Mobile app available.",
          benefits: [
            "Check if iPhone or Android is stolen - just dial *#06# for IMEI",
            "Free mobile app to verify phones instantly before meeting seller", 
            "Works for all carriers - AT&T, Verizon, T-Mobile, unlocked phones",
            "Verify used tablets, smartwatches, and mobile devices too"
          ],
          cta: "Check Phone IMEI Free"
        };
        
      case 'car':
        return {
          heading: "Free VIN Number Check - How to Check If a Used Car Is Stolen",
          subheading: "Verify any vehicle before buying on Craigslist, Facebook, or from private sellers. Free VIN lookup for cars, trucks, motorcycles, RVs, and boats.",
          benefits: [
            "Check if used car, truck, SUV, or motorcycle is stolen - enter VIN number",
            "Free verification before test drive - protect yourself from stolen vehicles",
            "Works for all makes: Ford, Chevy, Toyota, Honda, BMW, and more",
            "Mobile app to check VIN instantly at dealerships or private sales"
          ],
          cta: "Check VIN Number Free"
        };
        
      case 'electronics':
        return {
          heading: "Free Serial Number Lookup - Check Laptops, TVs, Tools, and Electronics",
          subheading: "How to check if used electronics are stolen: Enter serial number for instant verification. Works for laptops, computers, TVs, power tools, bikes, cameras, and more.",
          benefits: [
            "Check if laptop is stolen by serial number - MacBook, Dell, HP, Lenovo",
            "Verify power tools from pawn shops, yard sales, OfferUp",
            "Check TVs, gaming consoles (PlayStation, Xbox), cameras before buying",
            "Free app to verify bikes, musical instruments, appliances, and equipment"
          ],
          cta: "Check Serial Number Free"
        };
        
      default:
        return {
          heading: "Free Mobile App to Verify Used Items - Facebook Marketplace, OfferUp, eBay",
          subheading: "Check if anything is stolen before you buy. Free verification for items on online marketplaces, yard sales, pawn shops, and private sellers.",
          benefits: [
            "Instant verification - scan or enter serial number, IMEI, or VIN",
            "Works at Facebook Marketplace meetups, OfferUp pickups, eBay purchases",
            "Check items at pawn shops, thrift stores, garage sales before buying",
            "Avoid legal trouble - make sure used items are legitimate before purchase"
          ],
          cta: "Download Free App"
        };
    }
  };

  const content = getOptimizedContent();

  return (
    <div className={`keyword-optimized-content ${className}`}>
      {/* Schema-friendly content structure */}
      <div itemScope itemType="https://schema.org/Service">
        <h2 itemProp="name" className="text-2xl md:text-3xl font-bold mb-4">
          {content.heading}
        </h2>
        <p itemProp="description" className="text-lg text-muted-foreground mb-6">
          {content.subheading}
        </p>
        
        <div itemProp="serviceOutput" className="mb-6">
          <ul className="space-y-2">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="text-green-500 mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hidden keyword-rich content for search engines */}
        <div className="sr-only" aria-hidden="true">
          <p>
            How to check if something is stolen: Use our free stolen item checker to verify laptops, 
            phones, cars, bikes, TVs, tools, computers, and electronics before buying. Our mobile app 
            lets you check serial numbers, IMEI, and VIN numbers instantly on Facebook Marketplace, 
            OfferUp, eBay, Craigslist, at yard sales, pawn shops, and thrift stores. Free checking 
            service for used items helps you avoid buying stolen goods. Verify secondhand items 
            before meeting seller. Check if used car is stolen with free VIN lookup. Check if phone 
            is stolen with free IMEI check. Check if laptop is stolen by serial number. Our free 
            mobile app protects you from unknowingly purchasing stolen property and legal consequences.
          </p>
        </div>
      </div>
    </div>
  );
};