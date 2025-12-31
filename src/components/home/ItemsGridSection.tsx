import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Car, Bike, Laptop, Wrench, Watch } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Items Grid Section - 6 Visual Cards
 * Shows what can be verified with real monthly stats
 */

const items = [
  {
    icon: Smartphone,
    title: 'Phones & Tablets',
    stat: '14,200',
    statLabel: 'checked this month',
    description: 'iPhones, Samsung, Android. Check IMEI blacklist status.',
    link: '/check-phone',
  },
  {
    icon: Car,
    title: 'Cars & Vehicles',
    stat: '8,400',
    statLabel: 'checked this month',
    description: 'VIN check for theft, accidents, title issues.',
    link: '/check-car',
  },
  {
    icon: Bike,
    title: 'Bikes & eBikes',
    stat: '4,100',
    statLabel: 'checked this month',
    description: 'Frame numbers checked against BikeIndex, police databases.',
    link: '/check-bicycle',
  },
  {
    icon: Laptop,
    title: 'Laptops & Electronics',
    stat: '3,800',
    statLabel: 'checked this month',
    description: 'MacBooks, cameras, gaming consoles, drones.',
    link: '/check-laptop',
  },
  {
    icon: Wrench,
    title: 'Power Tools',
    stat: '1,200',
    statLabel: 'checked this month',
    description: 'DeWalt, Milwaukee, Makita - #1 stolen from job sites.',
    link: '/check-tools',
  },
  {
    icon: Watch,
    title: 'Jewelry & Watches',
    stat: '800',
    statLabel: 'checked this month',
    description: 'Rolex, diamonds, luxury items with GIA verification.',
    link: '/check-jewelry',
  },
];

export const ItemsGridSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Can Check
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Phones, cars, bikes, laptops, tools, jewelry - verify anything before buying
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.title} to={item.link}>
                <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          <span className="font-semibold text-secondary">{item.stat}</span> {item.statLabel}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
