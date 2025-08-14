import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, Car, Bike, Laptop, Camera, Gamepad2, 
  Navigation, Tablet, Tv, Headphones, Trophy, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ItemCategoriesPage: React.FC = () => {
  const categories = [
    {
      icon: Smartphone,
      title: 'Phones & Mobile Devices',
      description: 'Check smartphones, feature phones, tablets, smartwatches',
      items: ['iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus', 'Nokia', 'Xiaomi'],
      link: '/check-phone'
    },
    {
      icon: Car,
      title: 'Vehicles & Transportation',
      description: 'Verify cars, trucks, motorcycles, trailers, RVs',
      items: ['Cars', 'Trucks', 'SUVs', 'Motorcycles', 'Trailers', 'Buses'],
      link: '/check-car'
    },
    {
      icon: Bike,
      title: 'Bicycles & E-Bikes',
      description: 'Check road bikes, mountain bikes, BMX, e-bikes, scooters',
      items: ['Road Bikes', 'Mountain Bikes', 'BMX', 'E-Bikes', 'Scooters', 'Racing Bikes'],
      link: '/check-bike'
    },
    {
      icon: Laptop,
      title: 'Computers & Laptops',
      description: 'Verify desktop computers, laptops, monitors, peripherals',
      items: ['MacBooks', 'Dell Laptops', 'HP Computers', 'Lenovo ThinkPads', 'Gaming PCs', 'Monitors'],
      link: '/check-electronics'
    },
    {
      icon: Camera,
      title: 'Cameras & Photography',
      description: 'Check cameras, lenses, flashes, photography equipment',
      items: ['DSLR Cameras', 'Mirrorless', 'Canon', 'Nikon', 'Sony', 'Lenses'],
      link: '/check-electronics'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Consoles',
      description: 'Verify PlayStation, Xbox, Nintendo Switch, handheld gaming',
      items: ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'Steam Deck', 'Gaming Handhelds'],
      link: '/check-electronics'
    },
    {
      icon: Navigation,
      title: 'GPS & Navigation',
      description: 'Check GPS devices, navigation systems, tracking devices',
      items: ['Garmin GPS', 'TomTom', 'Vehicle Navigation', 'Handheld GPS', 'Marine GPS'],
      link: '/check-electronics'
    },
    {
      icon: Tablet,
      title: 'Tablets & E-Readers',
      description: 'Verify iPads, Android tablets, e-readers, drawing tablets',
      items: ['iPad', 'Samsung Galaxy Tab', 'Microsoft Surface', 'Kindle', 'Wacom Tablets'],
      link: '/check-electronics'
    },
    {
      icon: Tv,
      title: 'Electronics & Home Theater',
      description: 'Check TVs, audio systems, receivers, home theater equipment',
      items: ['Smart TVs', 'Sound Systems', 'Receivers', 'Projectors', 'Streaming Devices'],
      link: '/check-electronics'
    },
    {
      icon: Headphones,
      title: 'Audio & Music Equipment',
      description: 'Verify headphones, speakers, instruments, audio gear',
      items: ['AirPods', 'Headphones', 'Speakers', 'Musical Instruments', 'DJ Equipment'],
      link: '/check-electronics'
    },
    {
      icon: Trophy,
      title: 'Sports & Recreation',
      description: 'Check sports equipment, outdoor gear, fitness equipment',
      items: ['Surfboards', 'Skis', 'Golf Clubs', 'Gym Equipment', 'Outdoor Gear'],
      link: '/check-electronics'
    },
    {
      icon: Shield,
      title: 'Other Valuables',
      description: 'Verify jewelry, tools, machinery, collectibles, antiques',
      items: ['Power Tools', 'Jewelry', 'Collectibles', 'Machinery', 'Art', 'Antiques'],
      link: '/check-electronics'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Item Categories - Check If Any Item Is Stolen | Safe or Stolen"
        description="Complete list of item categories you can check for stolen status. Verify phones, cars, bikes, electronics, cameras, gaming consoles, and more before buying."
        keywords="stolen item categories, check stolen phones, verify cars, stolen electronics, lost property types, item verification categories"
        canonical="/item-categories"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Check Any Item Type
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive database covers all types of valuable items. Select a category to verify if an item is stolen or lost before you buy.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="text-xs bg-muted px-2 py-1 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <Link to={category.link}>
                        Check This Category
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Check Before You Buy?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Protect Yourself</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid legal troubles and financial losses from unknowingly buying stolen goods
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                    <Trophy className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Help Victims</h3>
                  <p className="text-sm text-muted-foreground">
                    Help reunite stolen items with their rightful owners and support justice
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Peace of Mind</h3>
                  <p className="text-sm text-muted-foreground">
                    Buy with confidence knowing your purchase is legitimate and legal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Don't See Your Item Category?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our database is constantly expanding. If you can't find your specific item type, 
                  try our general electronics check or contact us to request a new category.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild>
                    <Link to="/check-electronics">
                      General Item Check
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Request Category
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCategoriesPage;