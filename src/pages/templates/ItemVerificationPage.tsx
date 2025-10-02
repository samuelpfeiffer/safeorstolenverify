import { useParams } from 'react-router-dom';
import { OptimizedContent } from '@/components/seo/OptimizedContent';
import { Button } from '@/components/ui/button';
import { Shield, Smartphone, Car, Laptop, Camera, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItemVerificationPage() {
  const { item } = useParams<{ item: string }>();
  
  // Item configuration
  const itemConfig: Record<string, {
    name: string;
    icon: any;
    description: string;
    identifierType: string;
    examples: string[];
    whyCheck: string[];
  }> = {
    'iphone': {
      name: 'iPhone',
      icon: Smartphone,
      description: 'iPhone IMEI Check & Stolen Verification',
      identifierType: 'IMEI Number',
      examples: ['iPhone 15', 'iPhone 14 Pro', 'iPhone 13'],
      whyCheck: [
        'Verify if iPhone is blacklisted or reported stolen',
        'Check carrier lock status',
        'Avoid buying stolen iPhones on Facebook Marketplace or Craigslist',
        'Protect yourself from financial loss and legal issues'
      ]
    },
    'iphone-15': {
      name: 'iPhone 15',
      icon: Smartphone,
      description: 'iPhone 15 IMEI Verification & Stolen Check',
      identifierType: 'IMEI Number',
      examples: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus'],
      whyCheck: [
        'iPhone 15 models are highly targeted by thieves',
        'Verify before buying used iPhone 15 online',
        'Check if iPhone 15 is blacklisted',
        'Ensure iPhone 15 is carrier unlocked'
      ]
    },
    'samsung-phone': {
      name: 'Samsung Phone',
      icon: Smartphone,
      description: 'Samsung Phone IMEI Check & Verification',
      identifierType: 'IMEI Number',
      examples: ['Galaxy S24', 'Galaxy Z Fold', 'Galaxy A Series'],
      whyCheck: [
        'Verify Samsung phone is not stolen',
        'Check IMEI against blacklist databases',
        'Avoid buying stolen Samsung devices',
        'Verify warranty and authenticity'
      ]
    },
    'macbook': {
      name: 'MacBook',
      icon: Laptop,
      description: 'MacBook Serial Number Check & Stolen Verification',
      identifierType: 'Serial Number',
      examples: ['MacBook Pro', 'MacBook Air', 'MacBook M3'],
      whyCheck: [
        'MacBooks are frequently stolen and resold',
        'Verify serial number before purchase',
        'Check if MacBook is activation locked',
        'Avoid buying stolen MacBooks worth thousands'
      ]
    },
    'laptop': {
      name: 'Laptop',
      icon: Laptop,
      description: 'Laptop Serial Number Verification',
      identifierType: 'Serial Number',
      examples: ['Dell XPS', 'HP Pavilion', 'Lenovo ThinkPad', 'ASUS ROG'],
      whyCheck: [
        'Verify laptop is not stolen',
        'Check warranty status',
        'Avoid buying stolen gaming or business laptops',
        'Protect your investment'
      ]
    },
    'tesla': {
      name: 'Tesla',
      icon: Car,
      description: 'Tesla VIN Check & Stolen Vehicle Verification',
      identifierType: 'VIN',
      examples: ['Model S', 'Model 3', 'Model X', 'Model Y'],
      whyCheck: [
        'Tesla theft is rising - verify before buying used',
        'Check VIN against stolen vehicle databases',
        'Verify title status and history',
        'Avoid buying stolen Teslas worth $50K+'
      ]
    },
    'bmw': {
      name: 'BMW',
      icon: Car,
      description: 'BMW VIN Verification & Stolen Check',
      identifierType: 'VIN',
      examples: ['3 Series', '5 Series', 'X5', 'M Series'],
      whyCheck: [
        'Luxury BMWs are prime theft targets',
        'Verify VIN before purchasing',
        'Check for title washing or cloning',
        'Protect yourself from fraud'
      ]
    },
    'playstation': {
      name: 'PlayStation',
      icon: Package,
      description: 'PlayStation Serial Number Check',
      identifierType: 'Serial Number',
      examples: ['PS5', 'PS5 Digital', 'PS5 Slim'],
      whyCheck: [
        'PS5 consoles are heavily targeted by thieves',
        'Verify serial number before buying used',
        'Check if PlayStation is banned',
        'Avoid buying stolen gaming consoles'
      ]
    },
    'camera': {
      name: 'Camera',
      icon: Camera,
      description: 'Camera Serial Number Verification',
      identifierType: 'Serial Number',
      examples: ['Canon EOS', 'Nikon D850', 'Sony Alpha'],
      whyCheck: [
        'Professional cameras cost thousands',
        'Verify serial number before purchase',
        'Check against stolen equipment databases',
        'Protect your photography investment'
      ]
    }
  };

  const currentItem = itemConfig[item || 'iphone'] || itemConfig['iphone'];
  const Icon = currentItem.icon;

  return (
    <>
      <OptimizedContent
        pageType="verification"
        customTitle={`${currentItem.name} ${currentItem.identifierType} Check | Verify if Stolen`}
        customDescription={`${currentItem.description}. Check if your ${currentItem.name} is stolen before buying. 4 FREE searches. Instant results.`}
        keywords={[
          `${currentItem.name} verification`,
          `check ${currentItem.name} stolen`,
          `${currentItem.name} ${currentItem.identifierType} check`,
          `verify ${currentItem.name}`,
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Icon className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentItem.name} Verification & Stolen Check
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Instantly verify if a {currentItem.name} is stolen before you buy. 
              Check {currentItem.identifierType} against police and insurance databases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Shield className="w-5 h-5 mr-2" />
                  Check {currentItem.name} Now
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

        {/* Why Check Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Check Your {currentItem.name} Before Buying?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentItem.whyCheck.map((reason, index) => (
                <div key={index} className="flex gap-4 p-6 border rounded-lg hover:border-primary transition">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Verify Your {currentItem.name}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter {currentItem.identifierType}</h3>
                <p className="text-gray-600">
                  Input your {currentItem.name}'s {currentItem.identifierType}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Check</h3>
                <p className="text-gray-600">
                  We check police, insurance & manufacturer databases
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Results</h3>
                <p className="text-gray-600">
                  Safe or Stolen status in seconds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Models Supported */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {currentItem.name} Models We Verify
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {currentItem.examples.map((model, index) => (
                <div key={index} className="px-6 py-3 bg-gray-100 rounded-full">
                  <span className="font-medium">{model}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Checking {currentItem.name} Devices Now
            </h2>
            <p className="text-xl mb-8 opacity-90">
              4 FREE {currentItem.identifierType} checks per month. No credit card required.
            </p>
            <Link to="/verify">
              <Button size="lg" variant="secondary">
                Verify {currentItem.name} Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
