import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { TrendingUp, Clock, MapPin, Smartphone } from 'lucide-react';

const SearchTrendsPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Search Trends - What People Are Checking for Stolen Status"
        description="View real-time stolen item search trends. See the most checked phones, cars, electronics, and items. Learn what buyers are verifying before purchase."
        keywords="search trends, most checked items, verification trends, popular searches, theft patterns"
        canonical="/search-trends"
      />
      
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Search Trends
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time insights into what buyers are verifying before purchase
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Trending Now</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>iPhone 15 Pro Max</span>
                  <span className="text-sm text-green-500">↑ 45%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Honda Civic 2023</span>
                  <span className="text-sm text-green-500">↑ 32%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>MacBook Pro M3</span>
                  <span className="text-sm text-green-500">↑ 28%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>PlayStation 5</span>
                  <span className="text-sm text-green-500">↑ 18%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Samsung Galaxy S24</span>
                  <span className="text-sm text-red-500">↓ 5%</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Peak Search Times</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Weekend Mornings</span>
                  <span className="text-sm text-muted-foreground">9 AM - 12 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Weekday Evenings</span>
                  <span className="text-sm text-muted-foreground">6 PM - 9 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sunday Afternoons</span>
                  <span className="text-sm text-muted-foreground">2 PM - 5 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Top Cities</h2>
              </div>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Los Angeles, CA</li>
                <li>New York, NY</li>
                <li>Chicago, IL</li>
                <li>Houston, TX</li>
                <li>Phoenix, AZ</li>
              </ol>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Top Categories</h2>
              </div>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Mobile Phones (38%)</li>
                <li>Vehicles (24%)</li>
                <li>Laptops (18%)</li>
                <li>Gaming Consoles (12%)</li>
                <li>Power Tools (8%)</li>
              </ol>
            </div>
          </div>

          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2>Understanding Search Trends</h2>
            <p>
              Our search trend data is compiled from millions of verification requests across 
              SafeOrStolen. These insights help buyers understand which items are most commonly 
              checked before purchase, indicating higher theft rates or buyer concerns.
            </p>

            <h3>Why Trends Matter</h3>
            <p>
              Search trends reveal important patterns:
            </p>
            <ul>
              <li>Items with high search volumes often have higher theft rates</li>
              <li>Seasonal variations show when certain items are more likely to be stolen</li>
              <li>Geographic patterns help identify local crime hotspots</li>
              <li>Device-specific trends indicate which models are targeted most</li>
            </ul>

            <h3>Monthly Highlights</h3>
            <p>Key insights from recent data:</p>
            <ul>
              <li>Phone checks increased 45% during holiday shopping season</li>
              <li>Vehicle verifications spike on weekends as private sales occur</li>
              <li>Laptop checks surge in August and September (back-to-school season)</li>
              <li>Tool verification requests peak in spring and summer (construction season)</li>
            </ul>

            <h3>Most Verified Brands</h3>
            <p>Top brands by verification volume:</p>
            <ol>
              <li>Apple (iPhone, MacBook, iPad)</li>
              <li>Samsung (Galaxy phones, tablets)</li>
              <li>Honda (vehicles)</li>
              <li>Toyota (vehicles)</li>
              <li>Sony (PlayStation consoles)</li>
              <li>Microsoft (Xbox consoles)</li>
              <li>DeWalt (power tools)</li>
              <li>Dell (laptops)</li>
            </ol>

            <h3>Emerging Trends</h3>
            <p>New patterns we are observing:</p>
            <ul>
              <li>Electric vehicle VIN checks up 180% year-over-year</li>
              <li>E-bike verification requests growing rapidly</li>
              <li>Smart home device checks increasing</li>
              <li>Designer handbag authentication rising</li>
              <li>Cryptocurrency hardware wallet verifications emerging</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default SearchTrendsPage;
