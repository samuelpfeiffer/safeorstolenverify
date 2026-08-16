import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
 Smartphone, 
 Car, 
 Laptop, 
 Wrench, 
 Watch, 
 Bike, 
 Shield, 
 CheckCircle, 
 Database, 
 Zap,
 ArrowRight,
 Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * How It Works Infographic Component
 * Based on infographic_how_it_works.html design
 */
export const HowItWorksInfographic: React.FC<{ className?: string }> = ({ className = '' }) => {
 const stats = [
 { value: '6', label: 'ITEM CATEGORIES' },
 { value: '6', label: 'ITEM CATEGORIES' },
 { value: '30sec', label: 'VERIFICATION TIME' },
 ];

 const steps = [
 {
 number: '1',
 title: 'Enter Identifier',
 description: 'Find the unique identifier on the item you want to verify. It\'s usually on a label, in settings, or on documentation.',
 icon: <Database className="w-8 h-8" />,
 },
 {
 number: '2',
 title: 'AI Searches Databases',
 description: 'Our AI instantly searches stolen property reports from all 50 states and global stolen goods registries.',
 icon: <Zap className="w-8 h-8" />,
 },
 {
 number: '3',
 title: 'Get Instant Results',
 description: 'See if the item is safe to buy, stolen, blacklisted, Results in 30 seconds or less.',
 icon: <CheckCircle className="w-8 h-8" />,
 },
 ];

 const categories = [
 { icon: <Smartphone className="w-6 h-6" />, title: 'Smartphones', desc: 'IMEI verification against blacklists and carrier databases' },
 { icon: <Car className="w-6 h-6" />, title: 'Vehicles', desc: 'VIN lookup for cars, trucks, motorcycles in stolen property reports from all 50 states and vehicle theft and title databases' },
 { icon: <Laptop className="w-6 h-6" />, title: 'Electronics', desc: 'Serial number checks for laptops, cameras, gaming consoles' },
 { icon: <Wrench className="w-6 h-6" />, title: 'Tools & Equipment', desc: 'Verification of power tools and machinery serial numbers' },
 { icon: <Watch className="w-6 h-6" />, title: 'Jewelry & Watches', desc: 'Serial verification against theft databases' },
 { icon: <Bike className="w-6 h-6" />, title: 'Bicycles', desc: 'Serial checks against stolen bicycle registries nationwide' },
 ];

 const benefits = [
 'Backed by our verification databases',
 'Real-time verification across our verification databases',
 'Protect yourself from legal consequences',
 'Avoid financial loss from blacklisted items',
 'Perfect for Facebook Marketplace, Craigslist, eBay',
 '2 free verifications included - no credit card required',
 ];

 return (
 <div className={`bg-gradient-to-b from-background to-muted/30 ${className}`}>
 {/* Hero Section */}
 <div className="container mx-auto px-4 py-16 text-center">
 <div className="flex items-center justify-center gap-2 mb-4">
 <Shield className="w-8 h-8 text-primary" />
 <span className="font-montserrat font-bold text-xl text-primary">SafeOrStolen</span>
 </div>
 <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
 Verify Before <span className="text-primary">You Buy</span>
 </h1>
 
 {/* Stats Row */}
 <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
 {stats.map((stat, i) => (
 <div key={i} className="bg-card rounded-xl p-4 shadow-lg border border-border">
 <div className="font-montserrat font-bold text-2xl md:text-3xl text-primary">{stat.value}</div>
 <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>

 {/* How It Works Steps */}
 <div className="container mx-auto px-4 py-16">
 <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
 <span className="text-primary">HOW</span> IT WORKS
 </h2>
 
 <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
 {steps.map((step, i) => (
 <div key={i} className="relative">
 <div className="bg-card rounded-2xl p-6 shadow-lg border border-border h-full">
 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
 {step.number}
 </div>
 <div className="text-primary mb-3">{step.icon}</div>
 <h3 className="font-bold text-xl mb-2">{step.title}</h3>
 <p className="text-muted-foreground text-sm">{step.description}</p>
 </div>
 {i < steps.length - 1 && (
 <ArrowRight className="hidden md:block absolute top-1/2 -right-6 w-8 h-8 text-primary" />
 )}
 </div>
 ))}
 </div>
 </div>

 {/* What We Verify */}
 <div className="container mx-auto px-4 py-16 bg-muted/50">
 <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
 WHAT WE <span className="text-primary">VERIFY</span>
 </h2>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
 {categories.map((cat, i) => (
 <div key={i} className="bg-card rounded-xl p-5 shadow-md border border-border flex gap-4 items-start hover:shadow-lg transition-shadow">
 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
 {cat.icon}
 </div>
 <div>
 <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
 <p className="text-muted-foreground text-sm">{cat.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Why Choose SafeOrStolen */}
 <div className="container mx-auto px-4 py-16">
 <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
 WHY CHOOSE <span className="text-primary">SAFEORSTOLEN?</span>
 </h2>
 
 <div className="max-w-2xl mx-auto">
 <ul className="space-y-4">
 {benefits.map((benefit, i) => (
 <li key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-sm border border-border">
 <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-foreground">{benefit}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* CTA Section */}
 <div className="container mx-auto px-4 py-16 text-center">
 <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-primary/20">
 <h2 className="font-montserrat font-bold text-3xl mb-4">
 Start Verifying Today
 </h2>
 <p className="text-muted-foreground mb-6">
 Get 2 free verifications - no credit card required
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 <Shield className="w-5 h-5" />
 Verify an Item Now
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app">
 <Smartphone className="w-5 h-5" />
 Download Free App
 </Link>
 </Button>
 </div>
 <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
 <Clock className="w-4 h-4" />
 SafeOrStolen.com • Available Now
 </p>
 </div>
 </div>
 </div>
 );
};

export default HowItWorksInfographic;
