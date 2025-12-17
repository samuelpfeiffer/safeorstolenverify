import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, CheckCircle, Award, ExternalLink } from 'lucide-react';

export const TrustBuildingFAQ = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transparency You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in complete transparency. Here are the questions we get asked most often.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-sos-lime/20">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-sos-lime mx-auto mb-4" />
                <h3 className="font-semibold mb-2">FasterCapital Backed</h3>
                <p className="text-sm text-muted-foreground">Accelerated by a trusted investment firm</p>
              </CardContent>
            </Card>
            <Card className="text-center border-sos-orange/20">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Real Partnerships</h3>
                <p className="text-sm text-muted-foreground">Working with BikeIndex, CheckMEND, and more</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-500/20">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Complete Transparency</h3>
                <p className="text-sm text-muted-foreground">Open about our methods and limitations</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="scam-relation">
                  <AccordionTrigger className="text-left font-semibold">
                    Is this related to safeorscam.net or other scam sites?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">No. Absolutely not.</strong> We are aware of other sites with poor reputations and questionable practices. 
                      </p>
                      <p>
                        We are building SAFEORSTOLEN.com with complete transparency, real partnerships, and a genuine mission to solve the stolen goods problem.
                      </p>
                      <div className="flex items-center gap-2 p-4 bg-sos-lime/10 rounded-lg border border-sos-lime/20">
                        <Award className="h-5 w-5 text-sos-lime" />
                        <span className="text-sm">
                          We are backed by FasterCapital and committed to being a service you can trust.
                        </span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-verification-works">
                  <AccordionTrigger className="text-left font-semibold">
                    How does your verification actually work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-3">
                      <p>We check your item against multiple databases:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Law enforcement stolen property databases</li>
                        <li>Insurance company blacklists</li>
                        <li>Manufacturer recall databases</li>
                        <li>Partner verification services like CheckMEND for phones</li>
                      </ul>
                      <p>We're completely transparent about our sources and limitations. View our full methodology on our <a href="/about" className="text-sos-orange hover:underline">About page</a>.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accuracy-guarantee">
                  <AccordionTrigger className="text-left font-semibold">
                    Do you guarantee 100% accuracy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-3">
                      <p>
                        <strong className="text-foreground">We believe in honest expectations.</strong> No verification service can guarantee 100% accuracy because stolen item databases are not always complete or up-to-date.
                      </p>
                      <p>
                        What we do guarantee:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>We check all available databases</li>
                        <li>We're transparent about our data sources</li>
                        <li>We provide clear, actionable results</li>
                        <li>We continuously improve our detection methods</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="business-model">
                  <AccordionTrigger className="text-left font-semibold">
                    How do you make money? What's the catch?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-3">
                      <p>
                        <strong className="text-foreground">No catch. Transparent business model:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Basic checks are free (4 searches for registered users)</li>
                        <li>Premium subscriptions for unlimited searches</li>
                        <li>Business API licenses for pawn shops, resellers, etc.</li>
                        <li>No selling of user data. Ever.</li>
                      </ul>
                      <p>Our goal is to make verification accessible while building a sustainable business that actually solves this problem.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact for more questions */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Have more questions? We're here to help.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sos-orange hover:text-sos-orange/80 font-semibold"
            >
              Contact Our Team
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};