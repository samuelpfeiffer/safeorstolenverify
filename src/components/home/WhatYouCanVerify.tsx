import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Car, Laptop, Bike, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
 image: phonesTablets,
 cta: 'Check IMEI Free',
 },
 {
 icon: Car,
 title: 'Vehicles',
 subtitle: 'VIN Verification',
 description: 'Check cars, trucks, motorcycles, RVs for stolen status, accident history, title issues, and odometer fraud. Free alternative to Carfax.',
 items: ['Cars & Trucks', 'Motorcycles', 'RVs & Trailers', 'ATVs & Boats', 'Classic vehicles'],
 link: '/vin-checker',
 badge: 'Carfax Alternative',
 image: vehiclesCars,
 cta: 'Check VIN Free',
 },
 {
 icon: Laptop,
 title: 'Electronics, Power Tools & Appliances',
 subtitle: 'Serial Number Verification',
 description: 'Verify laptops, cameras, gaming consoles, power tools, and appliances. Check against police databases and manufacturer records.',
 items: ['Laptops (Dell, HP, MacBook)', 'Cameras (Canon, Nikon, Sony)', 'Gaming consoles', 'Power tools (DeWalt, Milwaukee)', 'Appliances (Samsung, LG, Whirlpool)'],
 link: '/serial-number-checker',
 image: electronicsLaptops,
 cta: 'Check Serial Free',
 },
 {
 icon: Bike,
 title: 'Bicycles',
 subtitle: 'Frame Number Verification',
 description: 'Check bike frame numbers against stolen bicycle databases, and police stolen bike registries. Essential for expensive road and mountain bikes.',
 items: ['Road bikes', 'Mountain bikes', 'E-bikes', 'BMX & Fixed gear', 'Vintage bicycles'],
 link: '/check-bike',
 image: bicycles,
 cta: 'Check Bike Free',
 },
 {
 icon: Shield,
 title: 'Firearms',
 subtitle: 'Serial Number Verification',
 description: 'Verify firearms serial numbers against stolen firearms databases. Essential for pawn shops, gun shows, and private sales.',
 items: ['Handguns', 'Rifles', 'Shotguns', 'Antique firearms', 'Accessories'],
 link: '/firearms-check',
 badge: 'Exclusive',
 image: firearmsVerification,
 cta: 'Check Firearm Free',
 },
 {
 icon: Bike,
 title: 'eBikes & E-Scooters',
 subtitle: 'Frame & Battery Verification',
 description: 'Check electric bikes and e-scooters worth $1,500-$10,000. Verify Rad Power, Trek, Specialized, Aventon eBikes against stolen bicycle databases and police databases.',
 items: ['Rad Power eBikes', 'Trek Verve+', 'Specialized Turbo', 'Aventon Level', 'E-scooters'],
 link: '/check-ebike',
 image: ebikesEscooters,
 cta: 'Check eBike Free',
 },
 {
 icon: Laptop,
 title: 'Appliances',
 subtitle: 'Serial Number Verification',
 description: 'Verify washers, dryers, refrigerators, stoves worth $500-$5,000. Check Samsung, LG, Whirlpool, GE appliances against theft databases.',
 items: ['Washers & Dryers', 'Refrigerators', 'Stoves & Ovens', 'Dishwashers', 'Smart appliances'],
 link: '/check-appliances',
 image: appliances,
 cta: 'Check Appliance Free',
 },
 {
 icon: Laptop,
 title: 'Power Tools',
 subtitle: 'Serial Number Verification',
 description: 'Check power tools worth $100-$5,000. Verify DeWalt, Milwaukee, Makita, Bosch tools — the #1 most stolen item from construction sites.',
 items: ['DeWalt tools', 'Milwaukee M18', 'Makita combo kits', 'Bosch power tools', 'Generators'],
 link: '/check-tools',
 image: powerTools,
 cta: 'Check Tools Free',
 },
 {
 icon: Shield,
 title: 'Jewelry & Watches',
 subtitle: 'Serial & GIA Verification',
 description: 'Verify luxury watches and jewelry worth $1,000-$100,000+. Check Rolex, Cartier, GIA diamonds against pawn shop and theft databases.',
 items: ['Rolex watches', 'GIA diamonds', 'Designer jewelry', 'Engagement rings', 'Gold jewelry'],
 link: '/check-jewelry',
 badge: 'High Value',
 image: jewelryWatches,
 cta: 'Check Jewelry Free',
 },
 {
 icon: Car,
 title: 'Boats & Watercraft',
 subtitle: 'HIN Verification',
 description: 'Verify boats, yachts, jet skis, personal watercraft worth $15,000-$500,000+. Check Hull ID numbers against Coast Guard and state DNR databases.',
 items: ['Boats & Yachts', 'Jet Skis', 'Sailboats', 'Fishing boats', 'Personal watercraft'],
 link: '/check-boat',
 badge: 'Marine Theft',
 image: boatsWatercraft,
 cta: 'Check Boat Free',
 }
 ];

 return (
 <section className="py-16 px-4" aria-labelledby="verify-heading">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-12">
 <Badge className="mb-4">Most Comprehensive Verification</Badge>
 <h2 id="verify-heading" className="text-3xl md:text-4xl font-bold mb-4">
 What You Can Verify With SafeOrStolen
 </h2>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
 From phones to firearms, vehicles to bikes — verify any item before buying or selling. The only platform that checks everything.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
 {verificationTypes.map((type, index) => (
 <Link
 key={index}
 to={type.link}
 className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
 aria-label={`${type.title} verification — ${type.subtitle}`}
 >
 <Card className="overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full cursor-pointer">
 {/* Fixed aspect-ratio container for CLS prevention */}
 <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
 <img 
 src={type.image} 
 alt={`${type.title} verification — check if ${type.title.toLowerCase()} are stolen before buying`}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 loading="lazy"
 width={400}
 height={225}
 decoding="async"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
 <div className="absolute bottom-3 left-3 right-3 flex items-start justify-between">
 <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
 <type.icon className="h-5 w-5 text-primary" />
 </div>
 {type.badge && (
 <Badge variant="outline" className="border-primary text-primary bg-background/90 backdrop-blur-sm">
 {type.badge}
 </Badge>
 )}
 </div>
 {/* Hover overlay */}
 <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 </div>
 
 <div className="p-6 flex flex-col flex-1">
 <div className="flex items-start justify-between mb-2">
 <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{type.title}</h3>
 <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
 </div>
 <p className="text-sm text-primary font-medium mb-3">{type.subtitle}</p>
 <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
 
 <div className="space-y-1 mb-5 flex-1">
 {type.items.map((item, idx) => (
 <div key={idx} className="flex items-center text-sm text-muted-foreground">
 <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
 <span>{item}</span>
 </div>
 ))}
 </div>

 <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-primary/30 bg-primary/5 text-primary text-sm font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
 {type.cta}
 <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
 </div>
 </div>
 </Card>
 </Link>
 ))}
 </div>

 <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
 <h3 className="text-2xl font-bold mb-3">
 One Platform. Everything You Need to Verify.
 </h3>
 <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
 Stop using different services for phones, cars, and electronics. SafeOrStolen checks everything in one place — instantly and for free. No other platform offers this comprehensive coverage.
 </p>
 <div className="flex flex-wrap justify-center gap-4 text-sm">
 <div className="flex items-center">
 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
 <span>100+ Database Records</span>
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
