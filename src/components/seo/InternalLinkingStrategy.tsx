import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Strategic Internal Linking Component for SEO
 * Helps distribute PageRank and improve crawlability
 */
export const InternalLinkingStrategy: React.FC = () => {
  const linkGroups = {
    topPages: [
      { title: 'Free IMEI Checker', path: '/imei-checker', keywords: 'check phone IMEI number' },
      { title: 'VIN Verification', path: '/vin-checker', keywords: 'verify car VIN stolen' },
      { title: 'Serial Number Lookup', path: '/serial-number-checker', keywords: 'check serial number' },
      { title: 'Firearms Serial Check', path: '/firearms-check', keywords: 'gun serial number verification' },
      { title: 'Verify Any Item', path: '/verify', keywords: 'search stolen property' }
    ],
    guides: [
      { title: 'How to Check If Phone Is Stolen', path: '/check-phone', keywords: 'phone verification guide' },
      { title: 'Car Theft Verification Guide', path: '/check-car', keywords: 'vehicle theft check' },
      { title: 'Laptop Stolen Check', path: '/check-laptop', keywords: 'laptop verification' },
      { title: 'How to Check Gun Serial Number', path: '/firearms-check', keywords: 'firearm verification' },
      { title: 'How It Works', path: '/how-it-works', keywords: 'safe buying tips' }
    ],
    comparisons: [
      { title: 'Best CheckMend Alternative', path: '/vs-checkmend', keywords: 'better than CheckMend + mobile app' },
      { title: 'Free Alternative to IMEIinfo', path: '/vs-imeiinfo', keywords: 'IMEIinfo alternative with app' },
      { title: 'Compare All Services', path: '/compare', keywords: 'vs competitors + firearms' }
    ]
  };

  return (
    <section className="py-16 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Complete Stolen Goods Verification Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Top Verification Tools */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Verification Tools</h3>
              <ul className="space-y-3">
                {linkGroups.topPages.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="group flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <div className="font-medium">{link.title}</div>
                        <div className="text-xs text-muted-foreground">{link.keywords}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comprehensive Guides */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">How-To Guides</h3>
              <ul className="space-y-3">
                {linkGroups.guides.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="group flex items-start gap-2 text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <div className="font-medium">{link.title}</div>
                        <div className="text-xs text-muted-foreground">{link.keywords}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitor Comparisons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {linkGroups.comparisons.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="group flex items-start gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <div className="font-medium">{link.title}</div>
                        <div className="text-xs text-muted-foreground">{link.keywords}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Keyword-Rich Footer Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Popular searches:</strong> 
              {' '}<Link to="/imei-checker" className="hover:text-primary">free IMEI checker</Link>
              {' • '}<Link to="/vin-checker" className="hover:text-primary">VIN verification</Link>
              {' • '}<Link to="/check-phone" className="hover:text-primary">check if phone is stolen</Link>
              {' • '}<Link to="/check-car" className="hover:text-primary">verify car not stolen</Link>
              {' • '}<Link to="/firearms-check" className="hover:text-primary">gun serial number check</Link>
              {' • '}<Link to="/serial-number-checker" className="hover:text-primary">serial number lookup</Link>
              {' • '}<Link to="/verify" className="hover:text-primary">verify any item</Link>
              {' • '}<Link to="/app" className="hover:text-primary">mobile app download</Link>
              {' • '}<Link to="/vs-checkmend" className="hover:text-primary">CheckMend alternative</Link>
              {' • '}<Link to="/vs-imeiinfo" className="hover:text-primary">IMEIinfo alternative</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};