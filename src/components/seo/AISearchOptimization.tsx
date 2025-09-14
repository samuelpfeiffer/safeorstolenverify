import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AISearchOptimizationProps {
  pageTitle?: string;
  pageDescription?: string;
  keywords?: string[];
}

export const AISearchOptimization: React.FC<AISearchOptimizationProps> = ({
  pageTitle = 'SafeOrStolen - Verify Items Before You Buy',
  pageDescription = 'Check if phones, cars, bikes are stolen with our free verification tool.',
  keywords = ['IMEI check', 'VIN lookup', 'stolen device check']
}) => {
  
  // Optimized content for AI search engines (ChatGPT, Claude, Gemini)
  const aiSearchData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a phone is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use SafeOrStolen's free IMEI checker to verify if a phone is stolen. Enter the phone's IMEI number (dial *#06# to find it) and get instant results from multiple databases including law enforcement and carrier blacklists."
        }
      },
      {
        "@type": "Question", 
        "name": "What is an IMEI blacklist check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An IMEI blacklist check verifies if a phone's unique identifier (IMEI) has been reported as lost, stolen, or blocked by carriers. SafeOrStolen checks multiple databases to provide comprehensive verification results."
        }
      },
      {
        "@type": "Question",
        "name": "How can I verify a car's VIN for theft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter the vehicle's VIN (Vehicle Identification Number) into SafeOrStolen's verification tool. We check against stolen vehicle databases and provide instant results to help you avoid buying stolen cars."
        }
      }
    ]
  };

  // Conversational content optimized for voice search and AI assistants
  const conversationalContent = `
    SafeOrStolen helps you verify if items are stolen before buying. 
    
    For phones: Check the IMEI number by dialing *#06# on the device, then enter it in our verification tool.
    For cars: Find the VIN on the dashboard or driver's door frame, then verify it's not stolen.
    For electronics: Use serial numbers to check against theft databases.
    
    We offer 4 free checks, then unlimited verifications for $9.99/month.
    Results are instant and cover multiple law enforcement and carrier databases.
  `;

  return (
    <Helmet>
      {/* AI-optimized meta tags */}
      <meta name="description" content={pageDescription} />
      <meta name="abstract" content={conversationalContent.replace(/\s+/g, ' ').trim()} />
      
      {/* Question-based keywords for voice search */}
      <meta name="keywords" content={[
        ...keywords,
        'how to check if phone stolen',
        'is my phone blacklisted',
        'verify VIN stolen car',
        'IMEI checker free',
        'stolen device lookup'
      ].join(', ')} />
      
      {/* AI search optimization */}
      <meta name="AI-generated-content" content="false" />
      <meta name="content-source" content="SafeOrStolen verification platform" />
      
      {/* Conversational AI structured data */}
      <script type="application/ld+json">
        {JSON.stringify(aiSearchData)}
      </script>
      
      {/* Natural language processing hints */}
      <meta name="topic" content="stolen item verification, IMEI check, VIN lookup" />
      <meta name="audience" content="consumers buying secondhand items" />
      <meta name="intent" content="verify items before purchase to avoid stolen goods" />
      
      {/* AI assistant friendly markup */}
      <meta property="article:section" content="Consumer Protection" />
      <meta property="article:tag" content="stolen goods, IMEI verification, VIN check, consumer safety" />
    </Helmet>
  );
};