import { useParams, useLocation } from 'react-router-dom';
import { OptimizedContent } from '@/components/seo/OptimizedContent';
import { Button } from '@/components/ui/button';
import { Shield, Search, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

export default function CityVerificationPage() {
  const { city, service, cityState } = useParams<{ city?: string; service?: string; cityState?: string }>();
  const location = useLocation();
  
  // Extract service from URL path if not in params
  const pathParts = location.pathname.split('/').filter(Boolean);
  const serviceFromPath = pathParts[pathParts.length - 1]; // Last part is the service
  
  // Determine city name from params
  let cityName = '';
  if (city) {
    cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  } else if (cityState) {
    // Handle "chicago-il" format - extract just city name
    const cityPart = cityState.split('-')[0];
    cityName = cityPart.charAt(0).toUpperCase() + cityPart.slice(1);
  }
  
  // Determine which service based on params or path
  const currentServiceKey = service || serviceFromPath || 'stolen-item-check';
  
  const serviceInfo = {
    'stolen-item-checker': {
      title: 'Stolen Item Checker',
      description: 'Verify if phones, cars, electronics, and more are stolen before you buy',
      icon: Shield,
    },
    'stolen-item-check': {
      title: 'Stolen Item Check',
      description: 'Verify if phones, cars, electronics, and more are stolen before you buy',
      icon: Shield,
    },
    'imei-check': {
      title: 'IMEI Check',
      description: 'Check if a phone is blacklisted or reported stolen by IMEI number',
      icon: Search,
    },
    'vin-verification': {
      title: 'VIN Verification',
      description: 'Verify vehicle history and check if a car is stolen by VIN',
      icon: CheckCircle,
    },
    'vin-check': {
      title: 'VIN Check',
      description: 'Verify vehicle history and check if a car is stolen by VIN',
      icon: CheckCircle,
    },
  };
  
  const currentService = serviceInfo[currentServiceKey as keyof typeof serviceInfo] || serviceInfo['stolen-item-check'];
  const Icon = currentService.icon;

  return (
    <>
      <PageSEO
        title={`${cityName} ${currentService.title} | SafeOrStolen`}
        description={`${currentService.description} in ${cityName}. Fast, accurate verification with 2 FREE searches. Trusted by thousands in ${cityName}.`}
        keywords={`${cityName} ${currentServiceKey}, ${cityName} stolen verification, verify stolen items ${cityName}, ${currentService.title.toLowerCase()}`}
        canonical={location.pathname}
      />
      
      <OptimizedContent
        pageType="verification"
        customTitle={`${cityName} ${currentService.title} | SafeOrStolen`}
        customDescription={`${currentService.description} in ${cityName}. Fast, accurate verification with 2 FREE searches. Trusted by thousands in ${cityName}.`}
        keywords={[
          `${cityName} ${currentServiceKey}`,
          `${cityName} stolen verification`,
          `verify stolen items ${cityName}`,
          currentService.title.toLowerCase(),
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">{cityName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentService.title} in {cityName}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {currentService.description}. Protect yourself from buying stolen goods in the {cityName} area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Icon className="w-5 h-5 mr-2" />
                  Start Free Verification
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Download Mobile App
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4 FREE</div>
                <div className="text-gray-600">Searches per month</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-gray-600">Items verified</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600">Accuracy rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Local */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works in {cityName}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter Item Details</h3>
                <p className="text-gray-600">Input IMEI, VIN, or serial number</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Verification</h3>
                <p className="text-gray-600">Check against police & insurance databases</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Results</h3>
                <p className="text-gray-600">Safe or Stolen status in seconds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Signals */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Trusted by {cityName} Residents & Businesses
            </h2>
            
            {/* Noscript content for search engines */}
            <noscript>
              <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h3>{cityName} {currentService.title} - Free Verification Service</h3>
                <p>SafeOrStolen provides free stolen item verification services to residents and businesses in {cityName}. Our comprehensive database checks help protect you from purchasing stolen property.</p>
                
                <h4>What We Verify in {cityName}</h4>
                <ul>
                  <li>Mobile phones (IMEI check) - iPhone, Samsung, Android devices</li>
                  <li>Vehicles (VIN verification) - Cars, trucks, motorcycles</li>
                  <li>Electronics - Laptops, tablets, gaming consoles</li>
                  <li>Tools and equipment - Serial number verification</li>
                  <li>Bicycles and e-bikes - Frame number check</li>
                </ul>
                
                <h4>Popular Marketplaces in {cityName}</h4>
                <p>Protect yourself when buying from Facebook Marketplace, Craigslist, OfferUp, LetGo, and local {cityName} sellers. Always verify before you buy.</p>
                
                <p><strong>Get Started:</strong> Visit <a href="/verify">/verify</a> to check any item for free.</p>
              </div>
            </noscript>

            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">For Buyers in {cityName}</h3>
                <p className="text-gray-600">
                  Shopping on Facebook Marketplace, Craigslist, or OfferUp in {cityName}? 
                  Verify before you buy to avoid stolen goods.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">For {cityName} Businesses</h3>
                <p className="text-gray-600">
                  Pawn shops, repair stores, and dealers in {cityName} use SafeOrStolen 
                  to protect their reputation and avoid liability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Verifying Items in {cityName} Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              2 FREE searches. No credit card required. Download our mobile app or verify online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Verify Now (Web)
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white">
                  Download App (iOS/Android)
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
