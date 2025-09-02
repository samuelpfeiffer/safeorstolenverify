import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Car, Laptop, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BetterSEOHead } from '@/components/enhanced/BetterSEOHead';

const DeviceSafetyGuidePost = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check if Your Device is Safe or Stolen Before Buying",
    "description": "Complete guide to verify IMEI, serial numbers, and VIN before purchasing secondhand devices. Protect yourself from stolen goods with step-by-step verification process.",
    "image": "https://safeorstolen.com/device-safety-guide.jpg",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "author": {
      "@type": "Organization",
      "name": "Safe or Stolen",
      "url": "https://safeorstolen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Safe or Stolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://safeorstolen.com/blog/how-to-check-if-device-is-safe-stolen"
    },
    "wordCount": 2500,
    "articleSection": "Safety Guide",
    "keywords": "check if stolen, IMEI lookup, VIN check, serial number verification, stolen device check, verify before buying, marketplace safety"
  };

  const quickChecklist = [
    "Get the IMEI, VIN, or serial number from seller",
    "Use SafeOrStolen's free verification tool",
    "Check for damage that might indicate theft",
    "Verify seller's identity and location",
    "Trust your instincts - if something feels off, walk away"
  ];

  const deviceTypes = [
    {
      icon: Smartphone,
      title: "Smartphones & Tablets",
      identifier: "IMEI Number",
      howToFind: "Dial *#06# or check Settings > About Phone",
      commonScams: "Blacklisted devices, stolen phones, account locked devices"
    },
    {
      icon: Car,
      title: "Vehicles",
      identifier: "VIN Number",
      howToFind: "Dashboard near windshield, driver's door frame, or registration",
      commonScams: "Stolen cars, flood damage, lemon titles"
    },
    {
      icon: Laptop,
      title: "Electronics",
      identifier: "Serial Number",
      howToFind: "Bottom sticker, battery compartment, or system settings",
      commonScams: "Stolen laptops, warranty void, refurbished as new"
    }
  ];

  return (
    <>
      <BetterSEOHead
        title="How to Check if Your Device is Safe or Stolen Before Buying | Complete Guide"
        description="Complete step-by-step guide to verify IMEI, serial numbers, and VIN before purchasing secondhand devices. Protect yourself from stolen goods with our free verification tools."
        keywords="check if stolen, IMEI lookup, VIN check, serial number verification, stolen device check, verify before buying, marketplace safety, how to check if phone stolen, stolen goods prevention"
        canonical="/blog/how-to-check-if-device-is-safe-stolen"
        structuredData={structuredData}
        type="article"
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sos-dark to-sos-dark/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-sos-orange/20 p-4 rounded-full">
                  <Shield className="h-12 w-12 text-sos-orange" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to Check if Your Device is Safe or Stolen Before Buying
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Don't become a victim of fraud. This complete guide shows you exactly how to verify any device 
                before purchase using IMEI, VIN, and serial number lookups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90" asChild>
                  <Link to="/">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Start Free Verification
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sos-dark" asChild>
                  <Link to="/how-it-works">
                    Learn How It Works
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Safety Checklist */}
        <section className="py-16 bg-sos-lime/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">5-Step Safety Checklist</h2>
                <p className="text-muted-foreground text-lg">
                  Follow these steps every time you buy secondhand to protect yourself
                </p>
              </div>
              
              <Card className="bg-white border-sos-lime/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-sos-dark">
                    <CheckCircle className="mr-3 h-6 w-6 text-sos-lime" />
                    Before You Buy Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quickChecklist.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-sos-lime text-sos-dark rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Device-Specific Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Device-Specific Verification Guide</h2>
                <p className="text-muted-foreground text-lg">
                  Each type of device has unique identifiers. Here's how to find and verify them.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {deviceTypes.map((device, index) => (
                  <Card key={index} className="border-2 hover:border-sos-orange/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="bg-sos-orange/10 p-3 rounded-lg mr-4">
                          <device.icon className="h-8 w-8 text-sos-orange" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{device.title}</CardTitle>
                          <CardDescription>Check {device.identifier}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sos-dark mb-2">How to Find {device.identifier}:</h4>
                        <p className="text-gray-600 text-sm">{device.howToFind}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sos-dark mb-2">Common Scams:</h4>
                        <p className="text-gray-600 text-sm">{device.commonScams}</p>
                      </div>
                      <Button className="w-full bg-sos-orange hover:bg-sos-orange/90" asChild>
                        <Link to={`/check-${device.title.toLowerCase().split(' ')[0] === 'smartphones' ? 'phone' : device.title.toLowerCase().split(' ')[0]}`}>
                          Verify {device.title}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Steps Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Verification Process</h2>
              
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="bg-sos-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Get the Device Identifier</h3>
                    <p className="text-gray-700 mb-4">
                      Before meeting the seller, ask for the IMEI, VIN, or serial number. Legitimate sellers will provide this information readily. 
                      Be suspicious if they refuse or make excuses.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                        <p className="text-sm text-yellow-800">
                          <strong>Red Flag:</strong> Seller won't provide identifier numbers or says they'll give them "when you meet"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sos-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Run the Verification Check</h3>
                    <p className="text-gray-700 mb-4">
                      Use SafeOrStolen's free verification tool to check the device against stolen goods databases. 
                      This takes just seconds and can save you thousands.
                    </p>
                    <Button className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90" asChild>
                      <Link to="/">
                        Check Device Now - It's Free
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sos-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Verify Physical Condition</h3>
                    <p className="text-gray-700 mb-4">
                      Look for signs of forced entry, removed stickers, or damage that might indicate theft. 
                      Check that all serial numbers match and haven't been tampered with.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Serial number stickers should be intact, not peeling or replaced</li>
                      <li>No signs of forced opening or unusual wear patterns</li>
                      <li>All original accessories and packaging if claimed to be "like new"</li>
                      <li>Device should power on and function normally</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sos-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Validate the Seller</h3>
                    <p className="text-gray-700 mb-4">
                      Legitimate sellers should have verifiable identities and reasonable explanations for why they're selling. 
                      Meet in safe, public locations whenever possible.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Good Signs:</h4>
                        <ul className="text-green-700 space-y-1 text-sm">
                          <li>• Has original receipt or proof of purchase</li>
                          <li>• Willing to meet at police station</li>
                          <li>• Consistent story about why selling</li>
                          <li>• Responsive to questions</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Red Flags:</h4>
                        <ul className="text-red-700 space-y-1 text-sm">
                          <li>• Insists on cash only, unusual locations</li>
                          <li>• Price too good to be true</li>
                          <li>• Vague about item's history</li>
                          <li>• Pressures you to buy quickly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-sos-dark to-sos-dark/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Shop Safely?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Use our free verification tool before your next purchase. It takes 30 seconds and could save you thousands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90" asChild>
                  <Link to="/">
                    <Shield className="mr-2 h-5 w-5" />
                    Verify Device Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sos-dark" asChild>
                  <Link to="/blog">
                    Read More Safety Tips
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeviceSafetyGuidePost;