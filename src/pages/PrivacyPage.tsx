import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const PrivacyPage: React.FC = () => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - SafeOrStolen",
    "description": "Privacy policy for SafeOrStolen verification platform. Learn how we protect your data.",
    "url": "https://safeorstolen.com/privacy",
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
        title="Privacy Policy - SafeOrStolen"
        description="Privacy policy for SafeOrStolen verification platform. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, safeorstolen privacy, user data security"
        canonical="/privacy"
        structuredData={[webPageSchema]}
      />
    <div className="min-h-screen bg-sos text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: February 2026</p>
        </div>

        <Card className="bg-sos-dark border-sos-orange/20">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our verification services, or contact us for support. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Account credentials and preferences</li>
                <li>Verification queries and results</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communications with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and maintain our verification services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and security alerts</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or law enforcement requests</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data centers and infrastructure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                Verification history may be retained for security and fraud prevention purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to collect and use personal information about you. 
                For further information about the types of cookies we use, why, and how you can control cookies, 
                please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service may contain links to third-party websites or services that are not owned or 
                controlled by us. We are not responsible for the privacy practices of these third parties. 
                We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service is not directed to children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If we learn that we have collected personal 
                information from a child under 13, we will delete that information as quickly as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are conducted in accordance with applicable data protection 
                laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPage;