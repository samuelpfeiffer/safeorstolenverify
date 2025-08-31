import React from 'react';
import { AppDownloadLinks } from '@/components/seo/AppDownloadLinks';
import { BetterSEOHead } from '@/components/enhanced/BetterSEOHead';
import { Helmet } from 'react-helmet-async';

const DownloadPage: React.FC = () => {
  return (
    <>
      <BetterSEOHead
        title="Download SafeOrStolen Mobile App - Free Stolen Goods Verification"
        description="Download the SafeOrStolen mobile app for Android and iOS. Verify items aren't stolen before you buy with real-time database checks. Free download available on Google Play and App Store."
        keywords="SafeOrStolen app download, stolen goods app, mobile verification app, Android app, iOS app, Google Play, App Store"
        image="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
        url="https://safeorstolen.com/download"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Download SafeOrStolen Mobile App",
            "description": "Download our mobile app for real-time stolen goods verification on Android and iOS devices.",
            "url": "https://safeorstolen.com/download",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "SafeOrStolen",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": ["Android", "iOS"],
              "downloadUrl": [
                "https://play.google.com/store/apps/details?id=app.lovable.ded9e6b996c44cc38b1a81d9ed9b1d6b",
                "https://apps.apple.com/us/app/safeorstolen/id6738429581"
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-sos-bg via-sos-bg to-sos-bg/90">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mb-12">
              <img
                src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
                alt="SafeOrStolen App Icon"
                className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-2xl"
                loading="eager"
              />
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Download SafeOrStolen
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get our mobile app for the fastest way to verify items aren't stolen before you buy. 
                Available free on Android and iOS with offline verification capabilities.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="mb-16">
              <AppDownloadLinks />
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-sos/20 backdrop-blur-sm p-6 rounded-lg border border-sos-orange/20">
                <div className="text-sos-orange text-3xl mb-4">⚡</div>
                <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-300 text-sm">
                  Real-time verification in under 3 seconds with offline caching for instant results.
                </p>
              </div>
              
              <div className="bg-sos/20 backdrop-blur-sm p-6 rounded-lg border border-sos-orange/20">
                <div className="text-sos-orange text-3xl mb-4">🔐</div>
                <h3 className="text-white font-semibold mb-2">Secure & Private</h3>
                <p className="text-gray-300 text-sm">
                  Your searches are encrypted and never stored. Complete privacy protection.
                </p>
              </div>
              
              <div className="bg-sos/20 backdrop-blur-sm p-6 rounded-lg border border-sos-orange/20">
                <div className="text-sos-orange text-3xl mb-4">📱</div>
                <h3 className="text-white font-semibold mb-2">Native Experience</h3>
                <p className="text-gray-300 text-sm">
                  Optimized mobile interface with camera scanning and push notifications.
                </p>
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-sos/10 backdrop-blur-sm p-8 rounded-lg border border-sos-orange/10">
              <h2 className="text-2xl font-bold text-white mb-6">System Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-sos-orange font-semibold mb-3">Android</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Android 8.0 or later</li>
                    <li>• 2GB RAM minimum</li>
                    <li>• 100MB available storage</li>
                    <li>• Camera for QR scanning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sos-orange font-semibold mb-3">iOS</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• iOS 12.0 or later</li>
                    <li>• Compatible with iPhone, iPad, iPod touch</li>
                    <li>• 100MB available storage</li>
                    <li>• Camera for QR scanning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPage;