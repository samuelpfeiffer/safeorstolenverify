import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ServiceOfferSchema } from '@/components/seo/ServiceOfferSchema';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, TrendingUp, Database, BarChart3, Globe, Shield, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StolenSearchConsolePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const trendingSearches = [
    { term: 'iPhone 15 Pro IMEI check', count: '2,847', trend: '+12%' },
    { term: 'Tesla Model 3 VIN lookup', count: '1,923', trend: '+8%' },
    { term: 'MacBook Pro serial number', count: '1,654', trend: '+15%' },
    { term: 'Samsung Galaxy S24 stolen', count: '1,432', trend: '+5%' },
    { term: 'Honda Civic VIN check', count: '1,289', trend: '+10%' },
    { term: 'PlayStation 5 serial check', count: '1,156', trend: '+18%' },
    { term: 'AirPods Pro stolen check', count: '987', trend: '+22%' },
    { term: 'Rolex watch serial number', count: '856', trend: '+7%' }
  ];

  const popularCategories = [
    { name: 'Phones & Mobile', searches: '12,456', icon: '📱' },
    { name: 'Vehicles & Cars', searches: '9,823', icon: '🚗' },
    { name: 'Electronics', searches: '7,654', icon: '💻' },
    { name: 'Bicycles', searches: '3,234', icon: '🚲' },
    { name: 'Jewelry & Watches', searches: '2,891', icon: '⌚' },
    { name: 'Tools & Equipment', searches: '2,456', icon: '🔧' }
  ];

  const recentActivity = [
    { item: 'iPhone 14 Pro', imei: '356938******', status: 'Safe', time: '2 min ago', location: 'Los Angeles, CA' },
    { item: 'Tesla Model Y', vin: '5YJ3E1******', status: 'Safe', time: '5 min ago', location: 'Austin, TX' },
    { item: 'MacBook Air', serial: 'C02X******', status: 'Safe', time: '8 min ago', location: 'New York, NY' },
    { item: 'Honda Accord', vin: '1HGCV1******', status: 'Warning', time: '12 min ago', location: 'Miami, FL' },
    { item: 'iPad Pro', serial: 'DMPR******', status: 'Safe', time: '15 min ago', location: 'Seattle, WA' }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/stolen-item-checker?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <PageSEO
        title="Stolen Search Console - Real-Time Theft Database Analytics"
        description="Access the Stolen Search Console for real-time stolen item search trends, database statistics, and verification analytics. Monitor what people are searching for in stolen goods databases worldwide."
        keywords="stolen search console, theft database analytics, stolen item trends, IMEI search statistics, VIN lookup analytics, stolen goods monitoring, real-time verification data"
        canonical="/stolen-search-console"
      />
      <ServiceOfferSchema />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-sos-orange/5">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-sos-dark via-sos-dark/90 to-background text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Badge className="mb-4 bg-sos-lime text-sos-dark">
                <Database className="mr-2 h-4 w-4 inline" />
                Real-Time Analytics Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stolen Search Console
              </h1>
              <p className="text-xl mb-8 leading-relaxed max-w-3xl">
                Monitor real-time stolen item searches, database statistics, and verification trends. See what people are searching for and access comprehensive analytics across our global theft prevention network.
              </p>

              {/* Quick Search */}
              <Card className="bg-background/95 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Input
                      type="text"
                      placeholder="Quick search: IMEI, VIN, Serial Number, or Item Type"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      className="flex-1 h-12 text-base"
                    />
                    <Button 
                      onClick={handleSearch}
                      className="bg-sos-orange hover:bg-sos-orange/90 px-8"
                      size="lg"
                    >
                      <Search className="mr-2 h-5 w-5" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Console */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="trending" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4 h-auto">
                  <TabsTrigger value="trending" className="flex items-center gap-2 py-3">
                    <TrendingUp className="h-4 w-4" />
                    <span className="hidden sm:inline">Trending Searches</span>
                    <span className="sm:hidden">Trending</span>
                  </TabsTrigger>
                  <TabsTrigger value="categories" className="flex items-center gap-2 py-3">
                    <BarChart3 className="h-4 w-4" />
                    <span className="hidden sm:inline">Categories</span>
                    <span className="sm:hidden">Stats</span>
                  </TabsTrigger>
                  <TabsTrigger value="activity" className="flex items-center gap-2 py-3">
                    <Clock className="h-4 w-4" />
                    <span className="hidden sm:inline">Live Activity</span>
                    <span className="sm:hidden">Live</span>
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="flex items-center gap-2 py-3">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">Global Analytics</span>
                    <span className="sm:hidden">Global</span>
                  </TabsTrigger>
                </TabsList>

                {/* Trending Searches Tab */}
                <TabsContent value="trending" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-sos-lime" />
                        Top Trending Searches (Last 24 Hours)
                      </CardTitle>
                      <CardDescription>
                        Most searched stolen item queries across our platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {trendingSearches.map((search, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-sos-lime/20 flex items-center justify-center font-bold text-sos-lime">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium">{search.term}</p>
                                <p className="text-sm text-muted-foreground">{search.count} searches</p>
                              </div>
                            </div>
                            <Badge className={search.trend.startsWith('+') ? 'bg-green-500' : 'bg-red-500'}>
                              {search.trend}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Categories Tab */}
                <TabsContent value="categories" className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularCategories.map((category, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader>
                          <div className="text-4xl mb-2">{category.icon}</div>
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <CardDescription>
                            {category.searches} searches this week
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => navigate('/stolen-item-checker')}
                          >
                            Check Items
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Live Activity Tab */}
                <TabsContent value="activity" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-sos-orange" />
                        Real-Time Verification Activity
                      </CardTitle>
                      <CardDescription>
                        Live feed of recent stolen item checks (anonymized)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                            <div className="flex items-center gap-4">
                              <Shield className={`h-5 w-5 ${activity.status === 'Safe' ? 'text-green-500' : 'text-yellow-500'}`} />
                              <div>
                                <p className="font-medium">{activity.item}</p>
                                <p className="text-sm text-muted-foreground">
                                  {activity.imei || activity.vin || activity.serial} • {activity.location}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={activity.status === 'Safe' ? 'bg-green-500' : 'bg-yellow-500'}>
                                {activity.status}
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Global Analytics Tab */}
                <TabsContent value="analytics" className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl">1.2M+</CardTitle>
                        <CardDescription>Total Verifications</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl">156K</CardTitle>
                        <CardDescription>This Month</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl">98.3%</CardTitle>
                        <CardDescription>Safe Items Verified</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl">1.7%</CardTitle>
                        <CardDescription>Stolen Items Found</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Global Coverage</CardTitle>
                      <CardDescription>Verifications by region (last 30 days)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { region: 'North America', percentage: 45, count: '70,200' },
                          { region: 'Europe', percentage: 28, count: '43,680' },
                          { region: 'Asia Pacific', percentage: 18, count: '28,080' },
                          { region: 'Latin America', percentage: 6, count: '9,360' },
                          { region: 'Other Regions', percentage: 3, count: '4,680' }
                        ].map((region, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">{region.region}</span>
                              <span className="text-muted-foreground">{region.count} searches</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-sos-lime h-2 rounded-full transition-all"
                                style={{ width: `${region.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Call to Action */}
              <Card className="mt-8 bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-2">
                <CardContent className="p-8 text-center">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 text-sos-orange" />
                  <h3 className="text-2xl font-bold mb-4">Need to Verify an Item?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join thousands of users protecting themselves from stolen goods. Get instant verification results for any item.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-sos-orange hover:bg-sos-orange/90"
                    onClick={() => navigate('/stolen-item-checker')}
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Start Verifying Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenSearchConsolePage;
