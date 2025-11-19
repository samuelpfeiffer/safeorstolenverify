import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedKeywordOptimizerProps {
  pageType: 'homepage' | 'imei' | 'vin' | 'serial' | 'general' | 'marketplace' | 'consumer' | 'brand';
  primaryKeywords?: string[];
  context?: 'transaction' | 'verification' | 'safety' | 'business';
}

export const AdvancedKeywordOptimizer: React.FC<AdvancedKeywordOptimizerProps> = ({ 
  pageType, 
  primaryKeywords = [], 
  context = 'verification' 
}) => {
  const getAdvancedKeywordStrategy = () => {
    const baseKeywords = {
      // Broad Market & Transaction Safety
      transactionSafety: [
        'safe secondhand buying',
        'is it safe to buy used',
        'check if item is stolen',
        'check if stolen before buying',
        'secondhand item verification',
        'lost and stolen check',
        'buy and sell safely',
        'protect buyers and sellers',
        'resale security check',
        'property legitimacy tool'
      ],
      
      // Device, Vehicle, and ID-Specific
      deviceSpecific: [
        'IMEI device check',
        'serial number lookup',
        'VIN lookup',
        'electronics background check',
        'stolen phone check',
        'report lost or stolen',
        'used electronics safe',
        'secondhand car check'
      ],
      
      // Consumer & E-commerce
      ecommerce: [
        'buy used safely online',
        'check property before selling',
        'scam prevention tool',
        'anti-theft register for buyers',
        'property history report',
        'avoid stolen goods'
      ],
      
      // Brand/Trust-Oriented
      brandTrust: [
        'trusted item verification',
        'global stolen property database',
        'secure marketplace tool'
      ]
    };

    switch (pageType) {
      case 'homepage':
        return {
          primary: [...baseKeywords.transactionSafety, ...baseKeywords.brandTrust],
          semantic: 'verification, safety, trust, protection, legitimacy',
          intent: 'transactional, informational, commercial investigation',
          audience: 'secondhand buyers, marketplace users, consumer safety advocates'
        };
        
      case 'imei':
        return {
          primary: [...baseKeywords.deviceSpecific.filter(k => k.includes('phone') || k.includes('IMEI') || k.includes('electronics'))],
          semantic: 'phone verification, device authentication, mobile security',
          intent: 'transactional verification, device purchase protection',
          audience: 'smartphone buyers, mobile device users, electronics consumers'
        };
        
      case 'vin':
        return {
          primary: [...baseKeywords.deviceSpecific.filter(k => k.includes('VIN') || k.includes('car') || k.includes('vehicle'))],
          semantic: 'vehicle verification, automotive security, car purchase protection',
          intent: 'transactional verification, vehicle purchase safety',
          audience: 'car buyers, automotive consumers, vehicle purchasers'
        };
        
      case 'serial':
        return {
          primary: [...baseKeywords.deviceSpecific.filter(k => k.includes('serial') || k.includes('electronics'))],
          semantic: 'serial verification, electronics authentication, item legitimacy',
          intent: 'item verification, electronics purchase protection',
          audience: 'electronics buyers, gadget consumers, tech purchasers'
        };
        
      case 'marketplace':
        return {
          primary: [...baseKeywords.ecommerce],
          semantic: 'marketplace safety, e-commerce security, online buying protection',
          intent: 'platform safety, marketplace trust, transaction security',
          audience: 'online marketplace users, e-commerce buyers, platform sellers'
        };
        
      case 'consumer':
        return {
          primary: [...baseKeywords.transactionSafety, ...baseKeywords.ecommerce.slice(0, 3)],
          semantic: 'consumer protection, buyer safety, purchase confidence',
          intent: 'consumer education, purchase protection, safety assurance',
          audience: 'general consumers, secondhand shoppers, safety-conscious buyers'
        };
        
      case 'brand':
        return {
          primary: [...baseKeywords.brandTrust],
          semantic: 'brand protection, manufacturer verification, service authenticity',
          intent: 'brand security, manufacturer partnership, service legitimacy',
          audience: 'brands, manufacturers, business partners, enterprise clients'
        };
        
      default:
        return {
          primary: [...baseKeywords.transactionSafety.slice(0, 5)],
          semantic: 'verification, safety, protection',
          intent: 'informational, transactional',
          audience: 'general users, safety-conscious consumers'
        };
    }
  };

  const keywordStrategy = getAdvancedKeywordStrategy();
  const allKeywords = [...keywordStrategy.primary, ...primaryKeywords].join(', ');

  return (
    <Helmet>
      {/* Advanced Keyword Optimization */}
      <meta name="keywords" content={allKeywords} />
      <meta name="semantic-keywords" content={keywordStrategy.semantic} />
      <meta name="search-intent" content={keywordStrategy.intent} />
      <meta name="target-audience" content={keywordStrategy.audience} />
      
      {/* Context-Specific Keywords */}
      <meta name="context-keywords" content={context} />
      <meta name="page-context" content={pageType} />
      
      {/* Advanced SEO Signals */}
      <meta name="content-relevance" content={`${pageType} verification services`} />
      <meta name="service-category" content="verification, authentication, security" />
      <meta name="user-intent" content="verification, safety, protection, legitimacy check" />
      
      {/* Competitive Intelligence */}
      <meta name="competitive-advantage" content="comprehensive verification, real-time checking, global database" />
      <meta name="market-position" content="leading verification platform, trusted security service" />
    </Helmet>
  );
};