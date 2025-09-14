import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, Shield, ArrowLeft } from 'lucide-react';
import { UnifiedSEO } from '@/components/seo/UnifiedSEO';
import { SEOStructuredData } from '@/components/seo/SEOStructuredData';

const AvoidBuyingStolenPhone = () => {
  return (
    <>
      <UnifiedSEO
        title="How to Avoid Buying a Stolen Phone: Complete IMEI Check Guide 2025"
        description="Learn how to verify if a phone is stolen before buying. Step-by-step IMEI check guide, red flags to watch for, and how to protect yourself from stolen device scams."
        keywords="how to check if phone is stolen, IMEI check stolen phone, avoid buying stolen phone, verify phone before buying, IMEI blacklist check"
        canonical="/blog/avoid-buying-stolen-phone"
      />
      
      <SEOStructuredData type="organization" />

      <article className="min-h-screen bg-background">
        {/* Header */}
        <div className="pt-20 pb-8 bg-gradient-to-b from-sos/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sos-orange hover:text-sos-orange/80 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-sos-orange text-white">Phone Security</Badge>
                <Badge variant="outline">8 min read</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to Avoid Buying a Stolen Phone: Complete IMEI Check Guide
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Protect yourself from stolen device scams with our comprehensive guide to IMEI verification, red flags, and safe buying practices.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published: January 14, 2025</span>
                <span>•</span>
                <span>Updated: January 14, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <Alert className="mb-8">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Quick Summary:</strong> Always check a phone's IMEI number before buying used. Look for red flags like unusually low prices, missing original boxes, and sellers who won't provide the IMEI. Use our free IMEI checker to verify the device isn't stolen or blacklisted.
                </AlertDescription>
              </Alert>

              <p className="lead">
                Buying a used phone can save you hundreds of dollars, but purchasing a stolen device can cost you much more. Stolen phones are often blacklisted, meaning they can't connect to cellular networks, making them essentially useless. Worse, you could face legal issues for unknowingly possessing stolen property.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">What is an IMEI Number?</h2>
              
              <p>
                The International Mobile Equipment Identity (IMEI) is a unique 15-digit identifier for every mobile phone. Think of it as your phone's fingerprint – no two devices share the same IMEI number. This identifier is crucial for tracking stolen devices and preventing their use on cellular networks.
              </p>

              <Card className="my-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    How to Find Your Phone's IMEI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Dial *#06#</strong> - Works on all phones</li>
                    <li><strong>iPhone:</strong> Settings → General → About</li>
                    <li><strong>Android:</strong> Settings → About Phone → Status</li>
                    <li><strong>Physical location:</strong> Under battery or on SIM tray</li>
                    <li><strong>Original box:</strong> Printed on barcode sticker</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold mt-12 mb-6">Red Flags When Buying Used Phones</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <AlertTriangle className="h-5 w-5" />
                      Major Warning Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Price significantly below market value</li>
                      <li>• Seller refuses to provide IMEI number</li>
                      <li>• No original box or accessories</li>
                      <li>• Seller wants cash only, no receipts</li>
                      <li>• Phone has been factory reset recently</li>
                      <li>• Multiple phones being sold by same person</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      Good Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Original packaging and accessories</li>
                      <li>• Purchase receipt available</li>
                      <li>• Seller provides IMEI willingly</li>
                      <li>• Realistic pricing for condition</li>
                      <li>• Phone shows normal wear patterns</li>
                      <li>• Seller can explain reason for selling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Step-by-Step IMEI Verification Process</h2>

              <div className="bg-gradient-to-r from-sos/10 to-sos-dark/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Before You Buy: Essential Checks</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>Get the IMEI number</strong> from the seller before meeting</li>
                  <li><strong>Use our free IMEI checker</strong> to verify the device status</li>
                  <li><strong>Check carrier blacklists</strong> for network restrictions</li>
                  <li><strong>Verify with original carrier</strong> if possible</li>
                  <li><strong>Test the phone</strong> with your SIM card before paying</li>
                  <li><strong>Document the purchase</strong> with photos and receipts</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">What Happens if You Buy a Stolen Phone?</h2>

              <p>
                If you unknowingly purchase a stolen phone, several problems can arise:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
                <li><strong>Network blocking:</strong> Carriers will blacklist the device, making it unusable</li>
                <li><strong>Financial loss:</strong> You lose the money spent with no recourse</li>
                <li><strong>Legal issues:</strong> Potential criminal charges for possessing stolen property</li>
                <li><strong>Data security:</strong> Previous owner may still have access to the device</li>
                <li><strong>Insurance claims:</strong> Your insurance may not cover stolen devices</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Safe Buying Practices</h2>

              <Card className="my-8">
                <CardHeader>
                  <CardTitle>Best Practices for Buying Used Phones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Where to Buy</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reputable retailers (certified pre-owned)</li>
                        <li>• Carrier stores</li>
                        <li>• Established online marketplaces</li>
                        <li>• Friends and family</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What to Avoid</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Street vendors</li>
                        <li>• Unverified online sellers</li>
                        <li>• Deals that seem too good to be true</li>
                        <li>• Sellers who won't meet in person</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold mt-12 mb-6">Verify Before You Buy</h2>

              <p>
                The most important step in avoiding stolen phones is verification. Our free IMEI checker searches multiple databases to ensure the device you're considering isn't reported stolen or blacklisted. Don't take unnecessary risks – verify every device before making a purchase.
              </p>

              <div className="bg-sos/10 p-6 rounded-lg my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Check Any Phone's IMEI Now</h3>
                <p className="mb-6">Get instant verification results from multiple stolen device databases</p>
                <Button asChild size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  <Link to="/check-phone">
                    <Shield className="mr-2 h-5 w-5" />
                    Check IMEI for Free
                  </Link>
                </Button>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>

              <p>
                Buying a used phone doesn't have to be risky. By following these guidelines and always verifying the IMEI number before purchase, you can confidently buy secondhand devices while protecting yourself from stolen goods scams. Remember: if a deal seems too good to be true, it probably is. Always trust your instincts and verify before you buy.
              </p>

            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2">
                      <Link to="/blog/imei-blacklist-explained" className="hover:text-sos-orange">
                        IMEI Blacklist Explained: Everything You Need to Know
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Understand how IMEI blacklists work and why they're crucial for device verification.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2">
                      <Link to="/blog/safe-secondhand-shopping-tips" className="hover:text-sos-orange">
                        Safe Secondhand Shopping Tips: Verify Before You Buy
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive guide to safely buying secondhand electronics and other items.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default AvoidBuyingStolenPhone;