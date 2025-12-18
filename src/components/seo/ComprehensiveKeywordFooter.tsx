import React from 'react';
import { Link } from 'react-router-dom';

export const ComprehensiveKeywordFooter: React.FC = () => {
  return (
    <footer className="bg-muted/30 py-16 mt-20">
      <div className="container mx-auto px-4">
        {/* Keyword-rich content sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Safe Secondhand Buying */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Safe Secondhand Buying</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/verify" className="block hover:text-primary">
                Check If Item Is Stolen
              </Link>
              <Link to="/how-it-works" className="block hover:text-primary">
                Check if Stolen Before Buying
              </Link>
              <Link to="/verify" className="block hover:text-primary">
                Secondhand Item Verification
              </Link>
              <Link to="/how-it-works" className="block hover:text-primary">
                Buy Used Safely Online
              </Link>
              <Link to="/about" className="block hover:text-primary">
                Protect Buyers and Sellers
              </Link>
            </div>
          </div>

          {/* Device & Vehicle Verification */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Device & Vehicle Checks</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/check-phone" className="block hover:text-primary">
                IMEI Device Check
              </Link>
              <Link to="/check-car" className="block hover:text-primary">
                VIN Lookup Service
              </Link>
              <Link to="/check-electronics" className="block hover:text-primary">
                Serial Number Lookup
              </Link>
              <Link to="/serial-number-checker" className="block hover:text-primary">
                Electronics Background Check
              </Link>
              <Link to="/vin-checker" className="block hover:text-primary">
                Secondhand Car Check
              </Link>
            </div>
          </div>

          {/* Trust & Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Trust & Security</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/verify" className="block hover:text-primary">
                Trusted Item Verification
              </Link>
              <Link to="/verify" className="block hover:text-primary">
                Global Stolen Property Database
              </Link>
              <Link to="/facebook-marketplace-stolen-check" className="block hover:text-primary">
                Secure Marketplace Tool
              </Link>
              <Link to="/blog/scammer-tactics-exposed" className="block hover:text-primary">
                Scam Prevention Tool
              </Link>
              <Link to="/verify" className="block hover:text-primary">
                Property History Reports
              </Link>
            </div>
          </div>
        </div>

        {/* Keyword-rich description */}
        <div className="border-t border-border pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-4">
              SafeOrStolen provides comprehensive stolen goods verification services for safe secondhand buying. 
              Our stolen goods checker helps you check if item is stolen before you buy, check if stolen before buying used items, 
              and access our global stolen property database. Whether you need IMEI device check, VIN lookup, or serial number verification, 
              our secure marketplace tool protects buyers and sellers from fraud.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/70">
              <span>Safe Secondhand Buying</span>
              <span>•</span>
              <span>Trusted Item Verification</span>
              <span>•</span>
              <span>Global Stolen Property Database</span>
              <span>•</span>
              <span>Protect Buyers and Sellers</span>
              <span>•</span>
              <span>Secure Marketplace Tool</span>
            </div>
          </div>
        </div>

        {/* Legal and company info */}
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 SafeOrStolen.com - Leading provider of stolen goods verification and safe secondhand buying solutions
          </p>
        </div>
      </div>
    </footer>
  );
};