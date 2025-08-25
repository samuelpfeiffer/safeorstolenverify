import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const CookiesPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Cookie Policy - Safe or Stolen"
        description="Learn about how Safe or Stolen uses cookies to improve your experience. Understand our cookie policy and privacy practices."
        keywords="cookie policy, cookies, privacy, data collection, safe or stolen cookies"
      />
      <div className="min-h-screen bg-sos text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Cookie Policy</h1>
            <p className="text-gray-300">Last updated: August 2025</p>
          </div>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  enabling certain functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Safe or Stolen uses cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Authentication:</strong> To keep you logged in during your session</li>
                  <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                  <li><strong>Analytics:</strong> To understand how users interact with our site</li>
                  <li><strong>Security:</strong> To protect against fraud and maintain security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Strictly Necessary Cookies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      These cookies are essential for the website to function and cannot be disabled. 
                      They include authentication tokens and security features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Performance Cookies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      These cookies collect information about how you use our website, such as which 
                      pages you visit most often. This data helps us improve our website performance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      These cookies allow the website to remember choices you make and provide 
                      enhanced, more personal features.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that place cookies on your device:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Stripe:</strong> For secure payment processing</li>
                  <li><strong>Supabase:</strong> For authentication and database services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Use your browser settings to block or delete cookies</li>
                  <li>Set your browser to notify you when cookies are being sent</li>
                  <li>Use private/incognito browsing mode</li>
                  <li>Contact us to opt out of non-essential cookies</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Please note that blocking certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookie Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a set period or until manually deleted</li>
                  <li><strong>Authentication Cookies:</strong> Typically expire after 24 hours or when you log out</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on 
                  this page with an updated "Last Modified" date. We encourage you to review this 
                  policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about our Cookie Policy, please contact us at:
                  <br />
                  Email: privacy@safeorstolen.com
                  <br />
                  Website: safeorstolen.com/contact
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;