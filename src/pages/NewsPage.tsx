import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Calendar, ArrowRight, ExternalLink, Rocket, Trophy, Building, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';

const NewsPage = () => {
  const newsItems = [
    {
      date: "October 2025",
      title: "SafeOrStolen Featured on Issuewire",
      description: "Coverage of our FasterCapital partnership reaches new audiences, expanding awareness of the only stolen item checker with a mobile app.",
      icon: Newspaper,
      featured: false,
      link: null
    },
    {
      date: "September 11, 2025",
      title: "SafeOrStolen Partners with FasterCapital",
      description: "SafeOrStolen joins FasterCapital's LaunchUp accelerator program, aiming for 500,000 users in year one. This partnership brings mentorship, funding, and global reach to our mission.",
      icon: Rocket,
      featured: true,
      link: "https://www.prlog.org/13098918-safeorstolen-partners-with-fastercapital-to-secure-secondhand-market-worldwide.html"
    },
    {
      date: "August 2025",
      title: "Mobile App Launch",
      description: "SafeOrStolen launches free mobile app available for direct download - the ONLY stolen item checker with a mobile app. Features include barcode scanning, offline mode, and 3-second verification.",
      icon: Smartphone,
      featured: true,
      link: "/app"
    },
    {
      date: "August 2025",
      title: "FasterCapital Investment",
      description: "SafeOrStolen raises $25,000 in initial funding and is now seeking $500,000 for expansion. The investment will fuel database expansion, marketing, and team growth.",
      icon: Rocket,
      featured: false,
      link: null
    },
    {
      date: "2025",
      title: "Arizona Incorporation",
      description: "SafeOrStolen LLC officially incorporated in Arizona, establishing our legal foundation for growth and partnerships.",
      icon: Building,
      featured: false,
      link: null
    },
    {
      date: "2020",
      title: "Entrepreneurship World Cup Recognition",
      description: "SafeOrStolen selected to participate in the Entrepreneurship World Cup 2020, representing the United States. Recognized by OneValley for innovative solutions in the SaaS/Enterprise Software space.",
      icon: Trophy,
      featured: true,
      link: "/news/onevalley-recognition"
    },
    {
      date: "2017",
      title: "Company Founded",
      description: "SafeOrStolen founded with a mission to protect secondhand buyers and sellers from stolen goods. The vision: create a Carfax for everything.",
      icon: Building,
      featured: false,
      link: null
    }
  ];

  return (
    <>
      <PageSEO
        title="News & Updates | SafeOrStolen"
        description="Latest news, updates, and announcements from SafeOrStolen. FasterCapital partnership, mobile app launch, and company milestones."
        keywords="SafeOrStolen news, company updates, FasterCapital partnership, mobile app launch, startup news"
        canonical="/news"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "SafeOrStolen News & Updates",
          "description": "Latest news and announcements from SafeOrStolen",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": newsItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.title,
              "description": item.description
            }))
          }
        }}
      />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'News', href: '/news' }]} />
        </div>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">
              <Newspaper className="h-4 w-4 mr-2" />
              Company News
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest announcements, partnerships, and milestones from SafeOrStolen
            </p>
          </div>
        </section>

        {/* News Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {newsItems.map((item, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden transition-all hover:shadow-lg ${item.featured ? 'border-l-4 border-l-primary' : ''}`}
                >
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${item.featured ? 'bg-primary/10' : 'bg-muted'}`}>
                        <item.icon className={`h-6 w-6 ${item.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            {item.date}
                          </Badge>
                          {item.featured && (
                            <Badge className="text-xs">Featured</Badge>
                          )}
                        </div>
                        
                        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        
                        {item.link && (
                          item.link.startsWith('/') ? (
                            <Button variant="outline" size="sm" asChild>
                              <Link to={item.link} className="gap-2">
                                Read More
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" asChild>
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                                Read More
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              For press releases, media assets, and interview requests, visit our press kit or contact our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/press-kit">
                  View Press Kit
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:press@safeorstolen.com">
                  Contact Press Team
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsPage;
