import { Helmet } from 'react-helmet-async';

export const TrustStructuredData = () => {
  const trustSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Trust & Security Verification",
    "description": "Enterprise-grade security certifications and compliance standards",
    "about": {
      "@type": "Thing",
      "name": "Data Security and Privacy",
      "description": "Comprehensive security measures and certifications"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".trust-content"]
    }
  };

  // NOTE: Organization schema is defined in index.html - this adds trust-specific attributes only
  // Using @id reference to main organization instead of duplicate schema

  const securityActionSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Verify Our Security",
    "description": "Steps to verify SafeOrStolen.com security certifications",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check SSL Certificate",
        "text": "Look for the padlock icon in your browser's address bar to verify our 256-bit SSL/TLS encryption"
      },
      {
        "@type": "HowToStep",
        "name": "Review Certifications",
        "text": "Visit our Trust Verification page to see all security certifications including SOC 2, ISO 27001, and PCI DSS"
      },
      {
        "@type": "HowToStep",
        "name": "Verify Compliance",
        "text": "Review our compliance with GDPR, CCPA, and other international data protection regulations"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(trustSchema)}
      </script>
      {/* Organization schema removed - defined in index.html */}
      <script type="application/ld+json">
        {JSON.stringify(securityActionSchema)}
      </script>
    </Helmet>
  );
};
