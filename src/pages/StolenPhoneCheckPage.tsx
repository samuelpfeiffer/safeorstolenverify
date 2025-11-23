import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Smartphone, Search, Shield, AlertTriangle } from 'lucide-react';

const StolenPhoneCheckPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Stolen Phone Check - Free IMEI Lookup for iPhones & Android Devices"
        description="Free stolen phone checker. Verify IMEI numbers for iPhone, Samsung, Android devices. Check if a phone is blacklisted, reported stolen, or safe to buy. Instant IMEI lookup."
        keywords="stolen phone check, IMEI check, phone blacklist check, stolen iPhone check, check if phone is stolen, IMEI lookup, blacklisted phone"
        canonical="/stolen-phone-check"
      />
      
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Stolen Phone Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify any phone&apos;s IMEI number to check if it&apos;s stolen or blacklisted
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border">
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">All Devices</h2>
              <p className="text-muted-foreground">
                Check iPhone, Samsung, Google Pixel, and all Android phones using IMEI numbers
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Blacklist Check</h2>
              <p className="text-muted-foreground">
                Verify if a phone is blacklisted by carriers or reported stolen to authorities
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Instant Results</h2>
              <p className="text-muted-foreground">
                Get verification status in seconds. Know before you buy any used phone
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button asChild size="lg">
              <Link to="/verify">Check IMEI Now</Link>
            </Button>
          </div>

          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2>Why Check if a Phone is Stolen?</h2>
            <p>
              Buying a stolen phone can result in the device being remotely locked or blacklisted, 
              making it completely unusable. You could lose your money with no way to recover it. 
              Always check the IMEI number before purchasing any used smartphone.
            </p>

            <h3>What is an IMEI Number?</h3>
            <p>
              The IMEI (International Mobile Equipment Identity) is a unique 15-digit number that 
              identifies every mobile device. It&apos;s like a fingerprint for your phone. When a phone 
              is reported stolen, its IMEI is added to blacklist databases, preventing it from being 
              activated on cellular networks.
            </p>

            <h3>How to Find Your IMEI Number</h3>
            <p>The IMEI can be found in several ways:</p>
            <ul>
              <li>Dial *#06# on your phone</li>
              <li>Check Settings → About Phone → IMEI</li>
              <li>Look on the original box or receipt</li>
              <li>Check the SIM card tray (some models)</li>
            </ul>

            <h3>What We Check</h3>
            <p>Our stolen phone check verifies:</p>
            <ul>
              <li><strong>Carrier Blacklists:</strong> AT&T, Verizon, T-Mobile, Sprint databases</li>
              <li><strong>Police Reports:</strong> Stolen phone reports from law enforcement</li>
              <li><strong>iCloud Lock Status:</strong> For iPhones, check activation lock status</li>
              <li><strong>Insurance Claims:</strong> Phones reported lost/stolen to insurance companies</li>
            </ul>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 my-8">
              <div className="flex gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-500 mb-2">Warning</h4>
                  <p className="text-sm text-muted-foreground m-0">
                    Never buy a phone without checking its IMEI first. A blacklisted phone cannot 
                    be activated and is essentially worthless. Sellers often sell stolen phones at 
                    discounted prices on Facebook Marketplace, OfferUp, and Craigslist.
                  </p>
                </div>
              </div>
            </div>

            <h3>Common Red Flags</h3>
            <p>Watch for these warning signs when buying used phones:</p>
            <ul>
              <li>Seller refuses to provide IMEI number</li>
              <li>Price significantly below market value</li>
              <li>Phone is sold without original box or receipt</li>
              <li>Seller wants to meet in unusual locations</li>
              <li>iCloud or Google account is still linked</li>
            </ul>

            <h3>Free IMEI Check</h3>
            <p>
              Start with our free IMEI check to verify basic status. For detailed reports including 
              carrier history, warranty status, and comprehensive blacklist checks across all major 
              databases, upgrade to our premium service.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default StolenPhoneCheckPage;
