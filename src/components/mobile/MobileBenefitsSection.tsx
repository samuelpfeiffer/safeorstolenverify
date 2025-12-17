import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap, Shield, Globe, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileBenefitsSection: React.FC = () => {
  const mobileBenefits = [
    {
      icon: <Zap className="h-6 w-6 text-sos-orange" />,
      title: "Instant Checks Anywhere",
      description: "Verify items at swap meets, garage sales, or during peer-to-peer transactions. No waiting, no desktop needed."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-sos-lime" />,
      title: "Lightning-Fast Results", 
      description: "Scan or enter serial numbers, VINs, or IMEIs for instant verification results in seconds."
    },
    {
      icon: <Globe className="h-6 w-6 text-sos-orange" />,
      title: "Global Coverage",
      description: "Access worldwide databases from law enforcement and insurers for local and international transactions."
    },
    {
      icon: <Users className="h-6 w-6 text-sos-lime" />,
      title: "Protect Buyers & Sellers",
      description: "Empowers both parties to participate safely in the resale economy, reducing fraud and risk for everyone."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sos-dark/5 to-sos-orange/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-sos-orange/10 p-3 rounded-full">
              <Smartphone className="h-8 w-8 text-sos-orange" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            SafeOrStolen Mobile App
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download our mobile app for iOS and Android to verify items instantly, anywhere. 
            Perfect for on-the-go verification at swap meets, garage sales, and marketplace transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {mobileBenefits.map((benefit, index) => (
            <Card key={index} className="hover:border-sos-orange/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  {benefit.icon}
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile App Features */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Mobile App Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-sos-orange mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Privacy Protected</h4>
              <p className="text-sm text-muted-foreground">Your personal data is secured throughout the verification process</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-sos-lime mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Real-Time Results</h4>
              <p className="text-sm text-muted-foreground">Get instant status results with detailed reports when available</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-sos-orange mx-auto mb-3" />
              <h4 className="font-semibold mb-2">User Reports</h4>
              <p className="text-sm text-muted-foreground">Upload police reports for additional transparency and verification</p>
            </div>
          </div>
        </div>

        {/* App Store Launch Notification */}
        <div className="text-center">
          <p className="text-base font-semibold mb-4">Join the Waitlist for Mobile Apps</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black text-white hover:bg-black/90">
              <Link to="/app" className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get the</div>
                  <div className="text-sm font-semibold">iOS App</div>
                </div>
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-black/90">
              <Link to="/app" className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get the</div>
                  <div className="text-sm font-semibold">Android App</div>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};