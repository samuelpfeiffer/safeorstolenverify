import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, DollarSign, Scale, TrendingUp } from 'lucide-react';

export const WhyCheckBeforeBuying = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why You Must Check Items Before Buying Secondhand
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Buying stolen goods isn't just risky - it's illegal and costly. Here's what's at stake when you skip verification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                <Scale className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Legal Consequences</h3>
                <p className="text-muted-foreground mb-3">
                  In most jurisdictions, <strong>knowingly or unknowingly</strong> purchasing stolen property is a criminal offense. Police can confiscate your purchase without compensating you, and you may face criminal charges including receiving stolen property (a misdemeanor or felony depending on value).
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Real case:</strong> A Florida man spent $2,500 on an iPhone from Facebook Marketplace. Two months later, police seized it as stolen property. He lost both the phone and his money, plus faced criminal investigation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                <DollarSign className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Financial Loss</h3>
                <p className="text-muted-foreground mb-3">
                  Americans lose <strong>$15 billion annually</strong> to secondhand marketplace fraud and stolen goods. When you buy a stolen item, you lose 100% of your money - no refunds, no recourse. Sellers of stolen goods disappear immediately after sale, and marketplaces rarely offer buyer protection for in-person transactions.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Average loss:</strong> $850 per victim for electronics, $3,200 for vehicles, according to published crime statistics.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How Criminals Exploit Online Marketplaces</h3>
                <p className="text-muted-foreground mb-3">
                  Thieves target Facebook Marketplace, Craigslist, OfferUp, and eBay because they can quickly offload stolen goods to unsuspecting buyers. <strong>60% of stolen electronics are resold within 24 hours</strong> of theft. Professional theft rings steal hundreds of phones, laptops, and power tools daily, then list them at "too good to be true" prices.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Common tactic:</strong> Thieves use fake profiles, burner phones, and public meetup spots to avoid detection. They're gone before you realize the item is stolen.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real Case Studies</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-sm">
                    <strong>Case 1:</strong> Texas woman bought MacBook Pro for $600 on OfferUp. Original owner tracked it via Find My Mac and called police. Buyer arrested, charged with receiving stolen property, lost $600 + legal fees.
                  </p>
                  <p className="text-sm">
                    <strong>Case 2:</strong> Construction company purchased $12,000 in "used" DeWalt power tools from Craigslist seller. All tools were stolen from job sites. Company lost tools, money, and faced insurance complications.
                  </p>
                  <p className="text-sm">
                    <strong>Case 3:</strong> College student bought iPhone for $400 on Facebook Marketplace. Phone worked fine for 2 weeks, then carrier blacklisted the IMEI as stolen. Phone became unusable brick - total loss.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Verification Takes 3 Seconds. The Alternative Can Ruin Your Life.
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every day, thousands of innocent buyers lose money and face legal trouble because they didn't verify items before purchase. Don't become a statistic. Use SafeOrStolen's free verification before every secondhand purchase.
          </p>
        </div>
      </div>
    </section>
  );
};
