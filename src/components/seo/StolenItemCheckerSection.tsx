import React from 'react';
import { Shield, Search, Database, AlertTriangle } from 'lucide-react';

export const StolenItemCheckerSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            The Most Trusted Stolen Item Checker Online
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our stolen item checker is the go-to tool for millions of buyers worldwide. 
            Instantly verify if any item is stolen before you buy with our comprehensive database searches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Searches</h3>
            <p className="text-muted-foreground">
              Check any IMEI, VIN, or serial number in seconds with our stolen item checker
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Police Databases</h3>
            <p className="text-muted-foreground">
              Connected to official stolen goods databases and law enforcement records
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Free</h3>
            <p className="text-muted-foreground">
              Our basic stolen item checker is completely free to use with no hidden fees
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Alerts</h3>
            <p className="text-muted-foreground">
              Get instant notifications if an item is flagged as stolen or suspicious
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">How Our Stolen Item Checker Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2">Enter Details</h4>
              <p className="text-muted-foreground">
                Input the IMEI, VIN, serial number, or other identifying information into our stolen item checker
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2">Database Search</h4>
              <p className="text-muted-foreground">
                Our system searches multiple stolen goods databases and police records instantly
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2">Get Results</h4>
              <p className="text-muted-foreground">
                Receive instant verification showing if the item is safe to buy or reported stolen
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Stolen Item Checker?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold mb-2">✓ Most Comprehensive Database</h4>
              <p className="text-muted-foreground mb-4">
                Our stolen item checker accesses the largest collection of stolen goods databases worldwide
              </p>
              
              <h4 className="text-lg font-semibold mb-2">✓ Trusted by Millions</h4>
              <p className="text-muted-foreground mb-4">
                Over 2 million users rely on our stolen item checker before making secondhand purchases
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">✓ Lightning Fast Results</h4>
              <p className="text-muted-foreground mb-4">
                Get stolen item verification results in under 3 seconds with our optimized checker
              </p>
              
              <h4 className="text-lg font-semibold mb-2">✓ Mobile Friendly</h4>
              <p className="text-muted-foreground mb-4">
                Use our stolen item checker on any device - phone, tablet, or computer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};