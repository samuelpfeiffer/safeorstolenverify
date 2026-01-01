import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Car, CarFront, Bike, Laptop, Wrench, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

/**
 * Items Grid Section - 7 Visual Cards
 * Shows what can be verified with real monthly stats
 * License Plate added as HIGH DEMAND item
 */

const items = [
  {
    icon: Smartphone,
    title: 'Phones & Tablets',
    stat: '14,200/month',
    description: 'IMEI, blacklist, iCloud lock',
    link: '/check-phone',
  },
  {
    icon: Car,
    title: 'Cars & Vehicles',
    stat: '9,800/month',
    description: 'VIN, theft, salvage title',
    link: '/check-car',
  },
  {
    icon: CarFront,
    title: 'License Plates',
    stat: '33,100/month',
    description: 'Vehicle ownership, theft records, registration',
    link: '/license-plate-lookup',
    featured: true,
  },
  {
    icon: Bike,
    title: 'Bikes & E-Bikes',
    stat: '4,100/month',
    description: 'Serial number, bike registries',
    link: '/check-bicycle',
  },
  {
    icon: Laptop,
    title: 'Laptops & Computers',
    stat: '3,200/month',
    description: 'Serial, corporate theft records',
    link: '/check-laptop',
  },
  {
    icon: Wrench,
    title: 'Power Tools',
    stat: '1,800/month',
    description: 'DeWalt, Milwaukee, Makita',
    link: '/check-tools',
  },
  {
    icon: Camera,
    title: 'Cameras & Equipment',
    stat: '1,400/month',
    description: 'Canon, Nikon, Sony gear',
    link: '/check-camera',
  },
] as const;

export const ItemsGridSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Can Verify
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From phones to cars to power tools - if it has a serial number, we can check it
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {items.map((item) => (
              <Link key={item.title} to={item.link}>
                <Card className={`h-full border-2 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer group relative ${
                  'featured' in item && item.featured 
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-600' 
                    : 'border-border hover:border-primary bg-muted/30'
                }`}>
                  {'featured' in item && item.featured && (
                    <Badge className="absolute -top-3 right-4 bg-emerald-600 text-white text-xs font-bold">
                      HIGH DEMAND
                    </Badge>
                  )}
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center p-4 rounded-full mb-4 transition-colors ${
                      'featured' in item && item.featured
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50'
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <item.icon className={`h-8 w-8 ${'featured' in item && item.featured ? 'text-emerald-600' : 'text-primary'}`} />
                    </div>
                    <h3 className={`font-semibold text-xl mb-2 transition-colors ${
                      'featured' in item && item.featured ? 'group-hover:text-emerald-600' : 'group-hover:text-primary'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                      {item.description}
                    </p>
                    <p className={`text-sm font-bold ${'featured' in item && item.featured ? 'text-emerald-600' : 'text-primary'}`}>
                      {item.stat}
                    </p>
                    <p className={`text-sm mt-4 font-medium ${'featured' in item && item.featured ? 'text-emerald-600' : 'text-primary'}`}>
                      Check {item.title.split(' ')[0]} →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* More Items */}
          <div className="text-center text-muted-foreground">
            <p>
              Also: Jewelry, watches, firearms, game consoles, musical instruments{' '}
              <Link to="/verify" className="text-primary font-semibold hover:underline">
                See all →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
