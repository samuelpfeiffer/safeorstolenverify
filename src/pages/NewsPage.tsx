import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Newspaper, ExternalLink, Building, Smartphone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const newsItems = [
    {
      date: "October 2025",
      title: "SafeOrStolen Featured on Issuewire",
      description: "Coverage of FasterCapital partnership and platform launch",
      icon: Newspaper,
      link: null
    },
    {
      date: "September 2025",
      title: "SafeOrStolen Partners with FasterCapital",
      description: "Joins LaunchUp accelerator program with $25,000 in funding",
      icon: Building,
      link: "https://www.prlog.org/13098918"
    },
    {
      date: "August 2025",
      title: "Mobile App Launched",
      description: "Free mobile app available for iOS and Android with barcode scanning",
      icon: Smartphone,
      link: "/app"
    },
    {
      date: "2025",
      title: "Arizona Incorporation",
      description: "SafeOrStolen LLC officially incorporated in the State of Arizona",
      icon: FileText,
      link: null
    },
    {
      date: "2017",
      title: "Company Founded",
      description: "SafeOrStolen founded with mission to protect secondhand buyers and sellers worldwide",
      icon: Calendar,
      link: "/about"
    }
  ];

  return (
    <>
      <PageSEO
        title="News & Updates | SafeOrStolen"
        description="Latest news and announcements from SafeOrStolen. Company updates, press releases, and milestone achievements."
        keywords="SafeOrStolen news, company updates, press releases, stolen item checker news"
        canonical="/news"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Newspaper className="h-4 w-4 mr-2" />
                Company News
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                News & Updates
              </h1>
              
              <p className="text-xl text-muted-foreground">
                The latest announcements and milestones from SafeOrStolen
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                
                <div className="space-y-8">
                  {newsItems.map((item, index) => (
                    <div key={index} className="relative pl-20">
                      {/* Timeline dot */}
                      <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <Badge variant="outline" className="mb-2">{item.date}</Badge>
                              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                              <p className="text-muted-foreground mb-4">{item.description}</p>
                              
                              {item.link && (
                                <Button variant="outline" size="sm" asChild>
                                  {item.link.startsWith('http') ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Read More
                                    </a>
                                  ) : (
                                    <Link to={item.link}>
                                      Read More
                                    </Link>
                                  )}
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Kit CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Media & Press</h2>
              <p className="text-lg text-muted-foreground mb-8">
                For press inquiries, media assets, and interview requests, visit our press kit.
              </p>
              <Button size="lg" asChild>
                <Link to="/press-kit">View Press Kit</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
