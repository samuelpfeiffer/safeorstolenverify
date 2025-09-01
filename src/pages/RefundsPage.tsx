import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Clock, CreditCard, Mail } from 'lucide-react';

const RefundsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Refund Policy - Safe or Stolen"
        description="Understand Safe or Stolen's refund policy for subscription services. Learn about our refund process and terms."
        keywords="refund policy, subscription refunds, safe or stolen refunds, cancellation policy"
      />
      <div className="min-h-screen bg-sos text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Refund Policy</h1>
            <p className="text-gray-300">Last updated: August 2025</p>
          </div>

          <Card className="bg-sos-dark border-sos-orange/20 mb-8">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment</h2>
                <p className="text-gray-300 leading-relaxed">
                  At Safe or Stolen, we stand behind our service and want you to be satisfied with your experience. 
                  This refund policy outlines the terms and conditions for refunds on our subscription services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Subscription Refunds</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-sos-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">7-Day Money-Back Guarantee</h3>
                      <p className="text-gray-300 leading-relaxed">
                        New subscribers can request a full refund within 7 days of their initial purchase. 
                        This applies to first-time subscriptions only.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="h-6 w-6 text-sos-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Pro-Rated Refunds</h3>
                      <p className="text-gray-300 leading-relaxed">
                        For annual subscriptions, we may provide pro-rated refunds for unused portions 
                        in exceptional circumstances, evaluated on a case-by-case basis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Refund Conditions</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Refunds are subject to the following conditions:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Request must be made within the eligible timeframe</li>
                  <li>Account must not have violated our Terms of Service</li>
                  <li>No excessive or abusive use of the service</li>
                  <li>Original payment method must be available for refund processing</li>
                  <li>Refund requests must include a valid reason</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">What's Not Refundable</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Monthly subscriptions after the 7-day period</li>
                  <li>Usage-based fees for verification services</li>
                  <li>Third-party services or integrations</li>
                  <li>Downgrade differences (partial subscription changes)</li>
                  <li>Accounts suspended for Terms of Service violations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How to Request a Refund</h2>
                <div className="bg-sos-orange/10 border border-sos-orange/20 rounded-lg p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-sos-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Contact Our Support Team</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        To request a refund, please contact our support team with the following information:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
                        <li>Your account email address</li>
                        <li>Order/subscription ID</li>
                        <li>Reason for refund request</li>
                        <li>Date of original purchase</li>
                      </ul>
                      <p className="text-gray-300">
                        Email: <span className="text-sos-orange">support@safeorstolen.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Processing Timeline</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Review Process</h3>
                    <p className="text-gray-300">
                      We review all refund requests within 2-3 business days and will respond 
                      via email with our decision.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Refund Processing</h3>
                    <p className="text-gray-300">
                      Approved refunds are processed within 5-10 business days back to 
                      your original payment method.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cancellation vs. Refund</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Please note the difference between cancellation and refund:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-sos-dark/50 border border-sos-orange/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Cancellation</h3>
                    <p className="text-gray-300">
                      Stops future billing but allows you to use the service until the end 
                      of your current billing period.
                    </p>
                  </div>
                  <div className="bg-sos-dark/50 border border-sos-orange/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Refund</h3>
                    <p className="text-gray-300">
                      Returns money for charges already made and typically results in 
                      immediate service termination.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about our refund policy or to request a refund:
                  <br />
                  Email: support@safeorstolen.com
                  <br />
                  Subject Line: "Refund Request - [Your Account Email]"
                </p>
              </section>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-sos-dark/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Have questions about our refund policy or need assistance with your account?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/subscriptions">
                <Button size="lg" variant="outline">
                  Manage Subscription
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundsPage;