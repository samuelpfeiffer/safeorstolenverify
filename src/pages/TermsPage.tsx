import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const TermsPage: React.FC = () => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - SafeOrStolen",
    "description": "Terms of service and user agreement for SafeOrStolen verification platform.",
    "url": "https://safeorstolen.com/terms",
    "lastReviewed": "2026-02-06",
    "about": {
      "@type": "Service",
      "name": "SafeOrStolen Verification Service",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen.com"
      }
    }
  };

  return (
    <>
      <PageSEO
        title="Terms of Service - SafeOrStolen"
        description="Terms of service and user agreement for SafeOrStolen verification platform. Read our service terms and conditions."
        keywords="terms of service, user agreement, safeorstolen terms, legal terms"
        canonical="/terms"
        structuredData={[webPageSchema]}
      />
      <div className="min-h-screen bg-sos text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Terms of Service</h1>
          <p className="text-gray-300">Last updated: February 2026</p>
        </div>

        <Card className="bg-sos-dark border-sos-orange/20">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using SafeOrStolen ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SafeOrStolen provides item verification services to help users determine whether items are legitimate or stolen.
              Our service includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Serial number verification</li>
              <li>Stolen status checking and legitimacy verification</li>
              <li>Database searches for stolen items</li>
              <li>Verification history tracking</li>
            </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To access certain features of the Service, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Verification Accuracy</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive to provide accurate verification results, we cannot guarantee 100% accuracy. 
                Verification results should be used as guidance only and not as the sole basis for purchasing decisions. 
                Users should exercise their own judgment and conduct additional verification if necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                SafeOrStolen shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use the service, even if we have been advised of 
                the possibility of such damages. This includes but is not limited to damages for loss of profits, 
                data, or other intangibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                your information when you use our Service. By using the Service, you agree to the collection 
                and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Subscription Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Premium subscription services are available with the following terms:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Pricing may change with 30 days notice</li>
                <li>You may cancel your subscription at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant 
                changes via email or through the Service. Continued use of the Service after such modifications 
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior 
                notice, for conduct that we believe violates these Terms of Service or is harmful to other users, 
                us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: <a href="mailto:support@safeorstolen.com" className="text-sos-orange hover:underline">support@safeorstolen.com</a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default TermsPage;