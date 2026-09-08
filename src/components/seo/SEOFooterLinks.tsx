import { Link } from '@/lib/router-compat';

/**
 * Professional SEO Footer Link Component
 * Implements strategic footer linking for maximum crawl depth
 */

export const SEOFooterLinks = () => {
  return (
    <div className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Popular Item Checks */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Popular Checks</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/check-phone" className="text-muted-foreground hover:text-primary">Check Phone (IMEI)</Link></li>
              <li><Link to="/check-laptop" className="text-muted-foreground hover:text-primary">Check Laptop</Link></li>
              <li><Link to="/check-car" className="text-muted-foreground hover:text-primary">Check Vehicle (VIN)</Link></li>
              <li><Link to="/check-bike" className="text-muted-foreground hover:text-primary">Check Bike</Link></li>
              <li><Link to="/firearms-check" className="text-muted-foreground hover:text-primary">Check Firearm</Link></li>
              <li><Link to="/check-jewelry" className="text-muted-foreground hover:text-primary">Check Jewelry</Link></li>
            </ul>
          </div>

          {/* State VIN Checkers */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">State VIN Checks</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/california-vin-lookup" className="text-muted-foreground hover:text-primary">California VIN Check</Link></li>
              <li><Link to="/texas-vin-lookup" className="text-muted-foreground hover:text-primary">Texas VIN Check</Link></li>
              <li><Link to="/florida-vin-lookup" className="text-muted-foreground hover:text-primary">Florida VIN Check</Link></li>
              <li><Link to="/new-york-vin-lookup" className="text-muted-foreground hover:text-primary">New York VIN Check</Link></li>
              <li><Link to="/ohio-vin-lookup" className="text-muted-foreground hover:text-primary">Ohio VIN Check</Link></li>
              <li><Link to="/vin-checker" className="text-muted-foreground hover:text-primary">All 50 States →</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog/protect-yourself-buying-used-electronics" className="text-muted-foreground hover:text-primary">Buying Used Electronics</Link></li>
              <li><Link to="/blog/ultimate-marketplace-buyers-guide" className="text-muted-foreground hover:text-primary">Marketplace Safety Guide</Link></li>
              <li><Link to="/blog/complete-imei-guide-protect-yourself" className="text-muted-foreground hover:text-primary">Complete IMEI Guide</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQs & Help</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">For Business</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/for-businesses" className="text-muted-foreground hover:text-primary">Enterprise Solutions</Link></li>
              <li><Link to="/for-pawn-shops" className="text-muted-foreground hover:text-primary">For Pawnshops</Link></li>
              <li><Link to="/for-dealers" className="text-muted-foreground hover:text-primary">For Dealers</Link></li>
              <li><Link to="/vs-checkmend" className="text-muted-foreground hover:text-primary">vs CheckMEND</Link></li>
              <li><Link to="/vs-imeiinfo" className="text-muted-foreground hover:text-primary">vs IMEI.info</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom SEO Text */}
        <div className="mt-8 pt-6 border-t text-xs text-muted-foreground">
          <p className="mb-2">
            <strong>SafeOrStolen</strong> - Carfax for Everything. Universal stolen item verification covering phones (IMEI check), 
            vehicles (VIN check), bikes, laptops, firearms, jewelry, and electronics across all 50 US states. 
            Free mobile app with 3-second barcode scanning.
          </p>
          <p>
            Keywords: stolen item checker, IMEI checker, VIN checker, serial number verification, license plate lookup, 
            firearms verification, secondhand verification, safe or stolen, buy and sell safely
          </p>
        </div>
      </div>
    </div>
  );
};
