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

  const organizationTrustSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe or Stolen",
    "url": "https://safeorstolen.com",
    "knowsAbout": [
      "Data Security",
      "Privacy Protection",
      "Compliance Certification",
      "SOC 2 Type II",
      "ISO 27001",
      "GDPR Compliance",
      "PCI DSS Level 1"
    ],
    "slogan": "Trusted, Verified, Secure",
    "award": [
      "SOC 2 Type II Certified",
      "ISO 27001 Certified",
      "PCI DSS Level 1 Compliant"
    ]
  };

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
      <script type="application/ld+json">
        {JSON.stringify(organizationTrustSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(securityActionSchema)}
      </script>
    </Helmet>
  );
};
