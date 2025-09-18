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
          heading: "Safe Secondhand Buying - Trusted Item Verification Platform",
          subheading: "Check if item is stolen before you buy. Verify ownership using our global stolen property database.",
          benefits: [
            "Safe secondhand buying with instant verification",
            "Buy and sell safely with our scam prevention tool",
            "Protect buyers and sellers from stolen goods fraud",
            "Trusted item verification across 50+ countries"
          ],
          cta: "Start Safe Secondhand Buying"
        };
        
      case 'phone':
        return {
          heading: "IMEI Device Check - Electronics Background Check",
          subheading: "Verify if smartphone is stolen before buying used electronics. Free stolen phone check service.",
          benefits: [
            "IMEI device check against stolen phone databases",
            "Electronics background check for used smartphones", 
            "Report lost or stolen phones instantly",
            "Used electronics safe verification service"
          ],
          cta: "Check Phone IMEI Now"
        };
        
      case 'car':
        return {
          heading: "VIN Lookup - Secondhand Car Check Service",
          subheading: "Verify ownership before buying used vehicles. Free vehicle theft protection database check.",
          benefits: [
            "VIN lookup against stolen vehicle databases",
            "Secondhand car check for all vehicle types",
            "Vehicle theft protection verification",
            "Used car verification for safe purchases"
          ],
          cta: "Verify Car VIN Now"
        };
        
      case 'electronics':
        return {
          heading: "Serial Number Lookup - Electronics Verification",
          subheading: "Check if electronics are stolen using serial number verification. Safe secondhand electronics purchases.",
          benefits: [
            "Serial number lookup for all electronics",
            "Electronics background check service",
            "Used electronics safe verification",
            "Laptop, tablet, gaming console security checks"
          ],
          cta: "Check Electronics Serial"
        };
        
      default:
        return {
          heading: "Property Legitimacy Tool - Anti-Theft Register",
          subheading: "Secure marketplace tool for verifying secondhand items. Buy used safely online.",
          benefits: [
            "Property history reports for any item",
            "Anti-theft register for buyers protection",
            "Secure marketplace verification tool",
            "Resale security check service"
          ],
          cta: "Verify Item Now"
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
            Our platform helps consumers buy used safely online by providing comprehensive 
            verification services. Whether you need to check property before selling, 
            verify ownership before buying, or access our anti-theft register for buyers, 
            we provide trusted item verification through our global stolen property database. 
            Our secure marketplace tool offers property legitimacy verification, helping 
            protect buyers and sellers in all secondhand transactions.
          </p>
        </div>
      </div>
    </div>
  );
};