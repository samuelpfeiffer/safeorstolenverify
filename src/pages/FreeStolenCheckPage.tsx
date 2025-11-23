import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, DollarSign } from 'lucide-react';

const FreeStolenCheckPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Free Stolen Check - Verify Items Before You Buy (No Credit Card Required)"
        description="Free stolen item checker. No signup or credit card needed. Check IMEI, VIN, serial numbers instantly. Verify phones, cars, electronics before buying second-hand."
        keywords="free stolen check, free IMEI check, free VIN check, stolen item checker free, check stolen goods free"
        canonical="/free-stolen-check"
      />
      
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              100% Free • No Credit Card • No Signup
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Free Stolen Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify any item for free before you buy. Check IMEI, VIN, and serial numbers instantly
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <DollarSign className="h-10 w-10 text-green-500 mb-3" />
              <h3 className="font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">No hidden fees or trial periods</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Zap className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">Get answers in seconds</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <CheckCircle className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">No Signup</h3>
              <p className="text-sm text-muted-foreground">Start checking immediately</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Shield className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-muted-foreground">Your searches are private</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/verify">Start Free Check</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              No credit card required • Takes 30 seconds
            </p>
          </div>

          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2>Free Stolen Item Verification</h2>
            <p>
              SafeOrStolen offers completely free basic checks for all users. No credit card, 
              no signup, no hidden fees. Simply enter an IMEI, VIN, or serial number and get 
              instant verification results.
            </p>

            <h3>What You Can Check for Free</h3>
            <ul>
              <li><strong>Mobile Phones:</strong> Check IMEI numbers for iPhones and Android devices</li>
              <li><strong>Vehicles:</strong> Verify VIN numbers for cars, motorcycles, and trucks</li>
              <li><strong>Electronics:</strong> Check serial numbers for laptops, cameras, and gaming devices</li>
              <li><strong>Tools:</strong> Verify power tools and equipment serial numbers</li>
            </ul>

            <h3>Why Choose Our Free Service?</h3>
            <p>
              Unlike other services that require payment upfront or offer limited &quot;free trials,&quot; 
              we provide genuinely free basic verification. Our mission is to protect buyers from 
              unknowingly purchasing stolen goods.
            </p>

            <h3>Free vs Premium</h3>
            <p>Our free service includes:</p>
            <ul>
              <li>Basic stolen item database check</li>
              <li>Police report verification</li>
              <li>Blacklist status for phones</li>
              <li>Basic VIN verification</li>
            </ul>

            <p>Premium features include:</p>
            <ul>
              <li>Comprehensive multi-database searches</li>
              <li>Detailed vehicle history reports</li>
              <li>Warranty and insurance information</li>
              <li>Certificate of verification (PDF)</li>
              <li>Priority support</li>
            </ul>

            <h3>How to Use Free Stolen Check</h3>
            <ol>
              <li>Click &quot;Start Free Check&quot; above</li>
              <li>Enter your IMEI, VIN, or serial number</li>
              <li>Get instant results - no waiting</li>
              <li>Optionally upgrade for detailed reports</li>
            </ol>

            <h3>Trusted by Thousands</h3>
            <p>
              Over 500,000 free checks performed. Join thousands of smart buyers who verify 
              before they buy. Protect yourself from stolen goods and financial loss with our 
              completely free verification service.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default FreeStolenCheckPage;
