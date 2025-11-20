import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Car, Laptop, Bike, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const WhatYouCanVerify = () => {
  const verificationTypes = [
    {
      icon: Smartphone,
      title: 'Phones & Tablets',
      subtitle: 'IMEI/ESN/MEID Verification',
      description: 'Verify any iPhone, Samsung, Google Pixel, or Android device. Check blacklist status, carrier lock, and theft reports across global databases.',
      items: ['iPhones (all models)', 'Samsung Galaxy', 'Google Pixel', 'OnePlus, Xiaomi, Huawei', 'iPads with cellular'],
      link: '/imei-checker'
    },
    {
      icon: Car,
      title: 'Vehicles',
      subtitle: 'VIN Verification',
      description: 'Check cars, trucks, motorcycles, RVs for stolen status, accident history, title issues, and odometer fraud. Free alternative to Carfax.',
      items: ['Cars & Trucks', 'Motorcycles', 'RVs & Trailers', 'ATVs & Boats', 'Classic vehicles'],
      link: '/vin-checker',
      badge: 'Carfax Alternative'
    },
    {
      icon: Laptop,
      title: 'Electronics',
      subtitle: 'Serial Number Verification',
      description: 'Verify laptops, cameras, gaming consoles, smartwatches, drones. Check against police databases and manufacturer records.',
      items: ['Laptops (Dell, HP, MacBook)', 'Cameras (Canon, Nikon, Sony)', 'Gaming consoles', 'Smartwatches', 'Drones & Tech'],
      link: '/serial-number-checker'
    },
    {
      icon: Bike,
      title: 'Bicycles',
      subtitle: 'Frame Number Verification',
      description: 'Check bike frame numbers against BikeIndex, 529 Garage, and police stolen bike registries. Essential for expensive road and mountain bikes.',
      items: ['Road bikes', 'Mountain bikes', 'E-bikes', 'BMX & Fixed gear', 'Vintage bicycles'],
      link: '/serial-number-checker'
    },
    {
      icon: Shield,
      title: 'Firearms',
      subtitle: 'Serial Number Verification',
      description: 'Verify firearms serial numbers - the ONLY service that checks guns. Essential for pawn shops, gun shows, and private sales.',
      items: ['Handguns', 'Rifles', 'Shotguns', 'Antique firearms', 'Accessories'],
      link: '/firearms-check',
      badge: 'Exclusive'
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
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                {type.badge && (
                  <Badge variant="outline" className="border-primary text-primary">
                    {type.badge}
                  </Badge>
                )}
              </div>
              
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
