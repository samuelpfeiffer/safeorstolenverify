import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Car, Laptop, Bike, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import firearmsVerification from '@/assets/firearms-verification.jpg';
import ebikesEscooters from '@/assets/thumbnails/ebikes-escooters.jpg';
import appliances from '@/assets/thumbnails/appliances.jpg';
import powerTools from '@/assets/thumbnails/power-tools.jpg';
import phonesTablets from '@/assets/thumbnails/phones-tablets.jpg';
import electronicsLaptops from '@/assets/thumbnails/electronics-laptops.jpg';
import bicycles from '@/assets/thumbnails/bicycles.jpg';
import jewelryWatches from '@/assets/thumbnails/jewelry-watches.jpg';
import boatsWatercraft from '@/assets/thumbnails/boats-watercraft.jpg';
import vehiclesCars from '@/assets/thumbnails/vehicles-cars.jpg';

export const WhatYouCanVerify = () => {
  const verificationTypes = [
    {
      icon: Smartphone,
      title: 'Phones & Tablets',
      subtitle: 'IMEI/ESN/MEID Verification',
      description: 'Verify any iPhone, Samsung, Google Pixel, or Android device. Check blacklist status, carrier lock, and theft reports across global databases.',
      items: ['iPhones (all models)', 'Samsung Galaxy', 'Google Pixel', 'OnePlus, Xiaomi, Huawei', 'iPads with cellular'],
      link: '/imei-checker',
      image: phonesTablets
    },
    {
      icon: Car,
      title: 'Vehicles',
      subtitle: 'VIN Verification',
      description: 'Check cars, trucks, motorcycles, RVs for stolen status, accident history, title issues, and odometer fraud. Free alternative to Carfax.',
      items: ['Cars & Trucks', 'Motorcycles', 'RVs & Trailers', 'ATVs & Boats', 'Classic vehicles'],
      link: '/vin-checker',
      badge: 'Carfax Alternative',
      image: vehiclesCars
    },
    {
      icon: Laptop,
      title: 'Electronics',
      subtitle: 'Serial Number Verification',
      description: 'Verify laptops, cameras, gaming consoles, smartwatches, drones. Check against police databases and manufacturer records.',
      items: ['Laptops (Dell, HP, MacBook)', 'Cameras (Canon, Nikon, Sony)', 'Gaming consoles', 'Smartwatches', 'Drones & Tech'],
      link: '/serial-number-checker',
      image: electronicsLaptops
    },
    {
      icon: Bike,
      title: 'Bicycles',
      subtitle: 'Frame Number Verification',
      description: 'Check bike frame numbers against BikeIndex, 529 Garage, and police stolen bike registries. Essential for expensive road and mountain bikes.',
      items: ['Road bikes', 'Mountain bikes', 'E-bikes', 'BMX & Fixed gear', 'Vintage bicycles'],
      link: '/serial-number-checker',
      image: bicycles
    },
    {
      icon: Shield,
      title: 'Firearms',
      subtitle: 'Serial Number Verification',
      description: 'Verify firearms serial numbers - the ONLY service that checks guns. Essential for pawn shops, gun shows, and private sales.',
      items: ['Handguns', 'Rifles', 'Shotguns', 'Antique firearms', 'Accessories'],
      link: '/firearms-check',
      badge: 'Exclusive',
      image: firearmsVerification
    },
    {
      icon: Bike,
      title: 'eBikes & E-Scooters',
      subtitle: 'Frame & Battery Verification',
      description: 'Check electric bikes and e-scooters worth $1,500-$10,000. Verify Rad Power, Trek, Specialized, Aventon eBikes against BikeIndex and police databases.',
      items: ['Rad Power eBikes', 'Trek Verve+', 'Specialized Turbo', 'Aventon Level', 'E-scooters'],
      link: '/check-ebike',
      image: ebikesEscooters
    },
    {
      icon: Laptop,
      title: 'Appliances',
      subtitle: 'Serial Number Verification',
      description: 'Verify washers, dryers, refrigerators, stoves worth $500-$5,000. Check Samsung, LG, Whirlpool, GE appliances against theft databases.',
      items: ['Washers & Dryers', 'Refrigerators', 'Stoves & Ovens', 'Dishwashers', 'Smart appliances'],
      link: '/check-appliances',
      image: appliances
    },
    {
      icon: Laptop,
      title: 'Power Tools',
      subtitle: 'Serial Number Verification',
      description: 'Check power tools worth $100-$5,000. Verify DeWalt, Milwaukee, Makita, Bosch tools - the #1 most stolen item from construction sites.',
      items: ['DeWalt tools', 'Milwaukee M18', 'Makita combo kits', 'Bosch power tools', 'Generators'],
      link: '/check-tools',
      image: powerTools
    },
    {
      icon: Shield,
      title: 'Jewelry & Watches',
      subtitle: 'Serial & GIA Verification',
      description: 'Verify luxury watches and jewelry worth $1,000-$100,000+. Check Rolex, Cartier, GIA diamonds against pawn shop and theft databases.',
      items: ['Rolex watches', 'GIA diamonds', 'Designer jewelry', 'Engagement rings', 'Gold jewelry'],
      link: '/check-jewelry',
      badge: 'High Value',
      image: jewelryWatches
    },
    {
      icon: Car,
      title: 'Boats & Watercraft',
      subtitle: 'HIN Verification',
      description: 'Verify boats, yachts, jet skis, personal watercraft worth $15,000-$500,000+. Check Hull ID numbers against Coast Guard and state DNR databases.',
      items: ['Boats & Yachts', 'Jet Skis', 'Sailboats', 'Fishing boats', 'Personal watercraft'],
      link: '/check-boat',
      badge: 'Marine Theft',
      image: boatsWatercraft
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">Most Comprehensive Verification</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You Can Verify With SafeOrStolen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From phones to firearms, vehicles to bikes - verify any item before buying. We're the only platform that checks everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {verificationTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              {/* Fixed aspect-ratio container for CLS prevention */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img 
                  src={type.image} 
                  alt={`${type.title} verification - stolen item scanner app checking ${type.subtitle} with barcode scanning and instant verification`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-start justify-between">
                  <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                    <type.icon className="h-5 w-5 text-primary" />
                  </div>
                  {type.badge && (
                    <Badge variant="outline" className="border-primary text-primary bg-background/90 backdrop-blur-sm">
                      {type.badge}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">{type.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              
              <div className="space-y-1 mb-4">
                {type.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

                <Button asChild variant="outline" className="w-full" size="sm">
                  <Link to={type.link}>
                    Learn More →
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            One Platform. Everything You Need to Verify.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stop using different services for phones, cars, and electronics. SafeOrStolen checks everything in one place - instantly and for free. No other platform offers this comprehensive coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>50M+ Database Records</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>150+ Countries</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>3-Second Results</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Mobile App Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
