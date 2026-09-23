import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { 
 Search, 
 Shield, 
 Smartphone, 
 Car, 
 Laptop, 
 AlertTriangle,
 CheckCircle,
 ArrowRight,
 HelpCircle
} from 'lucide-react';

export const UserSearchQueriesSection: React.FC = () => {
 const commonQueries = [
 {
 query: "How to check if something is stolen",
 answer: "Use our stolen item checker to verify serial numbers, IMEI, or VIN against multiple databases instantly",
 icon: Search,
 category: "General",
 searchVolume: "High"
 },
 {
 query: "Is my phone stolen IMEI check",
 answer: "Enter your IMEI number to check against stolen phone databases and carrier and theft databases",
 icon: Smartphone,
 category: "Mobile",
 searchVolume: "Very High"
 },
 {
 query: "Check if car is stolen by VIN",
 answer: "Verify vehicle history and stolen status using VIN lookup across insurance and theft reports",
 icon: Car,
 category: "Automotive",
 searchVolume: "High"
 },
 {
 query: "How do I know if something is stolen before buying",
 answer: "Verify items before purchase using our comprehensive stolen goods verification system",
 icon: Shield,
 category: "Prevention",
 searchVolume: "Medium"
 },
 {
 query: "Laptop serial number stolen check",
 answer: "Check laptop and electronics serial numbers against theft databases and manufacturer reports",
 icon: Laptop,
 category: "Electronics",
 searchVolume: "Medium"
 },
 {
 query: "What happens if I buy stolen goods unknowingly",
 answer: "Learn about legal risks and how to protect yourself with verification before purchase",
 icon: AlertTriangle,
 category: "Legal",
 searchVolume: "Medium"
 }
 ];

 const urgentQueries = [
 {
 query: "I bought something and think it might be stolen",
 description: "Get immediate verification and know your next steps",
 action: "Check Now",
 urgency: "high"
 },
 {
 query: "Seller won't provide serial number",
 description: "Red flag warning - learn why serial numbers matter",
 action: "Learn More",
 urgency: "medium"
 },
 {
 query: "Police contacted me about stolen item",
 description: "Understand your rights and get verification proof",
 action: "Get Help",
 urgency: "high"
 }
 ];

 const locationQueries = [
 "Check stolen items USA",
 "UK stolen goods database",
 "Canada stolen phone checker",
 "Australia IMEI blacklist",
 "European stolen car database",
 "International stolen goods verification"
 ];

 return (
 <section className="py-20 bg-background">
 <div className="container mx-auto px-4">
 {/* Header */}
 <div className="text-center mb-16">
 <Badge variant="outline" className="mb-6">
 Real User Questions
 </Badge>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">
 Questions People Ask About Stolen Items
 </h2>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
 These are the most common questions we help people answer every day. 
 Find solutions to protect yourself from the stolen goods crisis.
 </p>
 </div>

 {/* Common Search Queries */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
 {commonQueries.map((item, index) => (
 <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-sos-orange/20 hover:border-l-sos-orange">
 <CardHeader className="pb-3">
 <div className="flex items-start gap-3">
 <div className="w-10 h-10 bg-sos-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
 <item.icon className="h-5 w-5 text-sos-orange" />
 </div>
 <div className="flex-1">
 <Badge variant="outline" className="text-xs mb-2">
 {item.category}
 </Badge>
 <CardTitle className="text-base leading-tight">
 "{item.query}"
 </CardTitle>
 </div>
 </div>
 </CardHeader>
 <CardContent className="pt-0">
 <p className="text-sm text-muted-foreground mb-3">
 {item.answer}
 </p>
 <div className="flex justify-between items-center">
 <Badge variant="secondary" className="text-xs">
 Search: {item.searchVolume}
 </Badge>
 <Button size="sm" variant="ghost" className="text-sos-orange hover:text-sos-orange/80">
 <ArrowRight className="h-4 w-4" />
 </Button>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>

 {/* Urgent Situations */}
 <div className="mb-16">
 <h3 className="text-2xl font-bold mb-8 text-center">Need Immediate Help?</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {urgentQueries.map((item, index) => (
 <Card 
 key={index} 
 className={`hover:shadow-lg transition-all duration-300 ${
 item.urgency === 'high' 
 ? 'border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20' 
 : 'border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20'
 }`}
 >
 <CardHeader>
 <div className="flex items-center gap-2 mb-2">
 {item.urgency === 'high' ? (
 <AlertTriangle className="h-5 w-5 text-red-500" />
 ) : (
 <HelpCircle className="h-5 w-5 text-orange-500" />
 )}
 <Badge variant={item.urgency === 'high' ? 'destructive' : 'secondary'} className="text-xs">
 {item.urgency === 'high' ? 'Urgent' : 'Important'}
 </Badge>
 </div>
 <CardTitle className="text-lg">"{item.query}"</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground mb-4">
 {item.description}
 </p>
 <Link to="/auth?tab=signup" className="w-full">
 <Button 
 className={`w-full ${
 item.urgency === 'high' 
 ? 'bg-red-600 hover:bg-red-700' 
 : 'bg-sos-orange hover:bg-sos-orange/90'
 }`}
 >
 {item.action}
 </Button>
 </Link>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>

 {/* Location-Based Searches */}
 <div className="bg-gradient-to-br from-sos-orange/5 to-sos-lime/5 rounded-2xl p-8">
 <h3 className="text-2xl font-bold mb-6 text-center">Global Stolen Item Verification</h3>
 <p className="text-center text-muted-foreground mb-8">
 People search for stolen item verification services worldwide. We provide coverage across multiple countries and regions.
 </p>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
 {locationQueries.map((query, index) => (
 <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
 <p className="text-sm font-medium">{query}</p>
 </Card>
 ))}
 </div>
 <div className="text-center">
 <Link to="/auth?tab=signup">
 <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
 Start Global Verification
 <ArrowRight className="ml-2 h-4 w-4" />
 </Button>
 </Link>
 </div>
 </div>

 {/* SEO-focused keywords section */}
 <div className="mt-16 text-center">
 <h3 className="text-xl font-semibold mb-6">Comprehensive Stolen Item Protection</h3>
 <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
 {[
 "stolen item checker", "IMEI stolen check", "VIN stolen verification", 
 "serial number stolen database", "secondhand safety verification",
 "buy used items safely", "avoid stolen goods", "marketplace verification",
 "pre-purchase verification", "stolen goods prevention", "consumer protection",
 "stolen electronics check", "stolen phone verification", "stolen car database",
 "stolen bike registry", "international stolen items", "police stolen database",
 "insurance theft claims", "manufacturer theft reports", "criminal goods detection"
 ].map((keyword, index) => (
 <Badge key={index} variant="outline" className="text-xs">
 {keyword}
 </Badge>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
};