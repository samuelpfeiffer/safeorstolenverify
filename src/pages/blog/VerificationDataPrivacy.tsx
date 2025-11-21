import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Lock, Eye, Database, UserCheck, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const VerificationDataPrivacy = () => {
  return (
    <>
      <PageSEO
        title="Verification Data Privacy | How We Protect Your Information"
        description="Learn how SafeOrStolen protects your privacy during item verification. GDPR compliant, encrypted data, no personal information required for verification."
        keywords="verification data privacy, GDPR compliance, data protection, stolen goods privacy, secure verification, anonymous verification"
        canonical="/blog/verification-data-privacy"
        type="article"
      />

      <div className="min-h-screen bg-sos text-white py-24 px-4">
        <article className="container mx-auto max-w-4xl">
          <header className="mb-8">
            <Badge className="mb-4 bg-sos-orange text-white">Privacy & Security</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Verification Data Privacy: Your Questions Answered
            </h1>
            <p className="text-xl text-gray-300">
              How SafeOrStolen protects your privacy and handles verification data responsibly
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>Updated: November 2024</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <noscript>
            <div className="space-y-6">
              <p className="text-lg">
                When verifying if an item is stolen, you rightfully care about your privacy. SafeOrStolen is built 
                with privacy-first principles, ensuring your personal information remains protected while providing 
                comprehensive stolen goods verification.
              </p>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Shield className="h-8 w-8" />
                  Our Privacy Commitment
                </h2>
                <p className="mb-4">
                  SafeOrStolen operates under strict privacy guidelines designed to protect every user:
                </p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>No Personal Information Required for Basic Checks:</strong> You can verify IMEI, VIN, or 
                    serial numbers without creating an account or providing personal details.
                  </li>
                  <li>
                    <strong>GDPR & CCPA Compliant:</strong> We adhere to international data protection regulations, 
                    giving you control over your data.
                  </li>
                  <li>
                    <strong>Encrypted Everything:</strong> All verification requests and results are transmitted using 
                    military-grade encryption (TLS 1.3).
                  </li>
                  <li>
                    <strong>No Selling of Data:</strong> We never sell, rent, or share your personal information with 
                    third parties for marketing purposes.
                  </li>
                  <li>
                    <strong>Right to Deletion:</strong> You can request deletion of your account and all associated 
                    data at any time.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Database className="h-8 w-8" />
                  What Data We Collect
                </h2>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">For Anonymous Verification</h3>
                <p className="mb-4">
                  When you perform a verification without an account, we collect minimal data:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• The serial number, IMEI, or VIN you're checking (required for verification)</li>
                  <li>• Timestamp of the verification request</li>
                  <li>• Device type (mobile or desktop) for service optimization</li>
                  <li>• IP address for security and fraud prevention</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  This data is automatically deleted after 30 days unless flagged for suspicious activity.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">For Registered Users</h3>
                <p className="mb-4">
                  If you create an account for additional features, we collect:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Email address (for account access and notifications)</li>
                  <li>• Password (encrypted using bcrypt, we never see your actual password)</li>
                  <li>• Verification history (to provide you with saved searches)</li>
                  <li>• Subscription information (if using paid features)</li>
                  <li>• Payment details (processed securely through Stripe, we never store card numbers)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Lock className="h-8 w-8" />
                  How We Use Your Data
                </h2>
                <p className="mb-4">
                  Your data serves specific, legitimate purposes:
                </p>
                
                <h3 className="text-2xl font-semibold mb-3 mt-6">1. Verification Services</h3>
                <p className="mb-4">
                  Serial numbers, IMEIs, and VINs are used exclusively to query stolen goods databases and provide 
                  verification results. We don't analyze your patterns or track what you're checking beyond what's 
                  necessary for the service.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">2. Service Improvement</h3>
                <p className="mb-4">
                  Aggregated, anonymized data helps us improve accuracy and speed. For example, we might analyze 
                  that "phones are verified more often than laptops" but never "John Smith checked 5 iPhones."
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">3. Fraud Prevention</h3>
                <p className="mb-4">
                  We monitor for suspicious patterns (like thousands of verifications from one IP) to prevent abuse 
                  and protect our legitimate users from service degradation.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">4. Legal Compliance</h3>
                <p className="mb-4">
                  If law enforcement provides a valid warrant for specific data related to criminal investigations, 
                  we comply with legal requirements while fighting to protect user privacy in general.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <Eye className="h-8 w-8" />
                  Who Can See Your Data
                </h2>
                
                <h3 className="text-2xl font-semibold mb-3">Internal Access</h3>
                <p className="mb-4">
                  Only essential SafeOrStolen personnel have access to user data, and only for specific operational needs:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Customer support (to help resolve your issues)</li>
                  <li>• Security team (to prevent fraud and abuse)</li>
                  <li>• Development team (for debugging, but using anonymized data)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">Third-Party Services</h3>
                <p className="mb-4">
                  We use carefully vetted third-party services, all bound by strict data processing agreements:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Supabase:</strong> Secure database hosting with encryption at rest</li>
                  <li>• <strong>Stripe:</strong> Payment processing (PCI DSS Level 1 certified)</li>
                  <li>• <strong>Cloudflare:</strong> DDoS protection and CDN (data in transit only)</li>
                </ul>
                <p className="mt-4">
                  These services have limited access to only the data necessary for their specific functions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <UserCheck className="h-8 w-8" />
                  Your Rights
                </h2>
                <p className="mb-4">
                  You have comprehensive rights regarding your personal data:
                </p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>Right to Access:</strong> Request a copy of all data we have about you
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Correct any inaccurate information
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Delete your account and all associated data
                  </li>
                  <li>
                    <strong>Right to Restriction:</strong> Limit how we process your data
                  </li>
                  <li>
                    <strong>Right to Portability:</strong> Download your data in machine-readable format
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Opt-out of specific data processing activities
                  </li>
                </ul>
                <p className="mt-4 bg-sos-orange/20 p-4 rounded-lg">
                  <strong>Exercise Your Rights:</strong> Contact us at privacy@safeorstolen.com to make any data rights request. 
                  We respond within 30 days as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange flex items-center gap-2">
                  <FileCheck className="h-8 w-8" />
                  Data Retention Policy
                </h2>
                <p className="mb-4">
                  We retain data only as long as necessary:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Anonymous verifications:</strong> 30 days</li>
                  <li>• <strong>Account data:</strong> Until you delete your account</li>
                  <li>• <strong>Verification history:</strong> 2 years for registered users</li>
                  <li>• <strong>Payment records:</strong> 7 years (legal requirement)</li>
                  <li>• <strong>Fraud-related data:</strong> Up to 5 years for security purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-sos-orange">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can I verify items without creating an account?</h3>
                    <p>
                      Yes! You can perform 2 free anonymous verifications within a 14-day period without any account 
                      or personal information required.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Do you share data with police?</h3>
                    <p>
                      Only with a valid legal warrant for specific criminal investigations. We don't proactively share 
                      user data with law enforcement and will challenge overly broad requests.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Is my verification history private?</h3>
                    <p>
                      Absolutely. Your verification history is encrypted and only accessible to you when logged in. 
                      SafeOrStolen staff cannot see what specific items you've checked without exceptional circumstances 
                      (like investigating fraud).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Do you use cookies or tracking?</h3>
                    <p>
                      We use essential cookies for functionality (like keeping you logged in) and optional analytics 
                      cookies (which you can decline). We never use advertising or cross-site tracking cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">What if there's a data breach?</h3>
                    <p>
                      In the unlikely event of a data breach, we'll notify affected users within 72 hours and report to 
                      relevant authorities as required by law. We maintain cybersecurity insurance and have incident 
                      response procedures ready.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Privacy Promise</h2>
                <p className="mb-4">
                  At SafeOrStolen, privacy isn't an afterthought—it's a core value. We collect only what we need, 
                  protect it rigorously, and give you full control. You deserve to verify items safely without 
                  sacrificing your privacy, and that's exactly what we deliver.
                </p>
                <p className="text-sm text-gray-400">
                  Last Updated: November 2024 | Read our full Privacy Policy at safeorstolen.com/privacy
                </p>
              </section>
            </div>
          </noscript>

          {/* Interactive Content */}
          <div className="space-y-8 mt-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-sos-orange flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Privacy-First Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Experience anonymous verification with SafeOrStolen. No account required, no personal data collected, 
                  just instant results to protect your transactions.
                </p>
                <Link to="/verify">
                  <Button className="bg-sos-orange hover:bg-sos-orange/90 text-white">
                    Try Anonymous Verification
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Articles */}
          <aside className="mt-12 p-6 bg-white/5 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/privacy" className="block hover:text-sos-orange">
                → Full Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:text-sos-orange">
                → Terms of Service
              </Link>
              <Link to="/security" className="block hover:text-sos-orange">
                → Security Measures
              </Link>
            </div>
          </aside>
        </article>
      </div>
    </>
  );
};

export default VerificationDataPrivacy;
