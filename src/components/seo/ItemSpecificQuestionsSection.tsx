import React from 'react';
import { Car, Smartphone, Laptop, Zap, Shield, Target } from 'lucide-react';

export const ItemSpecificQuestionsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            How Do I Check If My Item Is Stolen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            People ask us daily: "How do I check if a car is stolen?" "How to verify if a phone is stolen?" 
            Here's how to check any item using our stolen item verification system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Car className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">How Do I Check If A Car Is Stolen?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                To check if a car is stolen, you need the Vehicle Identification Number (VIN). 
                Here's exactly how to check if a vehicle is stolen:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Find the VIN:</strong> Located on dashboard, driver's door, or title</li>
                <li>• <strong>Enter VIN:</strong> Use our stolen car checker tool above</li>
                <li>• <strong>Get Results:</strong> Instant verification against stolen vehicle databases</li>
                <li>• <strong>Check Multiple Sources:</strong> We search police and insurance databases</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                "How to check if a car is stolen by VIN" is one of our most searched queries - and for good reason!
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold">How Do I Check If A Phone Is Stolen?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Wondering "how do I check if a phone is stolen?" Use the phone's IMEI number:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Find IMEI:</strong> Dial *#06# or check Settings → About Phone</li>
                <li>• <strong>IMEI Stolen Check:</strong> Enter the 15-digit IMEI above</li>
                <li>• <strong>Carrier Blacklist:</strong> We check all major carrier stolen phone databases</li>
                <li>• <strong>Global Check:</strong> International stolen phone verification included</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Millions search "how to check if iPhone is stolen" or "how to check if Android is stolen" monthly.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Laptop className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">How Do I Check If Electronics Are Stolen?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                For laptops, tablets, and electronics, here's how to check if stolen:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Serial Number:</strong> Found on device label or system settings</li>
                <li>• <strong>Model Number:</strong> Additional identifier for verification</li>
                <li>• <strong>MAC Address:</strong> For network-connected devices</li>
                <li>• <strong>Brand-Specific:</strong> Apple, Dell, HP, Lenovo databases checked</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                "How do I check if a laptop is stolen?" - We verify against manufacturer and police databases.
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-destructive" />
                <h3 className="text-2xl font-bold">How Do I Check If A Gun Is Stolen?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                For firearm verification, you'll need the serial number:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Serial Number:</strong> Located on frame, barrel, or receiver</li>
 <li>• <strong>The stolen firearm reports from all 50 states Database:</strong> We check stolen firearm reports from all 50 states</li>
                <li>• <strong>NCIC Database:</strong> National Crime Information Center verification</li>
                <li>• <strong>State Records:</strong> Local law enforcement stolen firearm databases</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Always verify firearms through official channels - we provide preliminary screening only.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Most Asked Questions About Checking Stolen Items</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Vehicle Questions:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• "How do I check if a car is stolen by license plate?"</li>
                <li>• "How to verify if a motorcycle is stolen?"</li>
                <li>• "How do I check if a truck is stolen?"</li>
                <li>• "How to check stolen car by VIN for free?"</li>
                <li>• "How do I check if an RV is stolen?"</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-secondary">Electronics Questions:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• "How do I check if my iPhone is stolen?"</li>
                <li>• "How to check if Samsung phone is stolen?"</li>
                <li>• "How do I check if a tablet is stolen?"</li>
                <li>• "How to verify if laptop is stolen?"</li>
                <li>• "How do I check if AirPods are stolen?"</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">Other Items:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• "How do I check if a bike is stolen?"</li>
                <li>• "How to check if jewelry is stolen?"</li>
                <li>• "How do I check if tools are stolen?"</li>
                <li>• "How to verify if a watch is stolen?"</li>
                <li>• "How do I check if equipment is stolen?"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Why Do People Ask "How Do I Check If Something Is Stolen?"</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Protect Themselves</h4>
              <p className="text-sm text-muted-foreground">
                Buyers want to avoid unknowingly purchasing stolen goods and facing legal consequences.
              </p>
            </div>
            
            <div>
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Get Quick Answers</h4>
              <p className="text-sm text-muted-foreground">
                People need instant verification before completing secondhand purchases online or in-person.
              </p>
            </div>
            
            <div>
              <Target className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Make Smart Decisions</h4>
              <p className="text-sm text-muted-foreground">
                Verification helps buyers negotiate prices and avoid deals that seem too good to be true.
              </p>
            </div>
          </div>
          
          <p className="text-center mt-8 text-muted-foreground">
            <strong>Bottom Line:</strong> Whether you're asking "how do I check if a car is stolen?" or 
            "how do I check if a phone is stolen?" - our free tool gives you instant answers for any item type.
          </p>
        </div>
      </div>
    </section>
  );
};