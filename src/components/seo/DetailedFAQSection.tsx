import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
 ChevronDown, 
 ChevronUp, 
 Search, 
 Shield, 
 AlertTriangle,
 CheckCircle,
 Smartphone,
 Car,
 Laptop,
 HelpCircle,
 ArrowRight,
 Globe,
 Clock,
 DollarSign,
 Users
} from 'lucide-react';

export const DetailedFAQSection: React.FC = () => {
 const [openFAQ, setOpenFAQ] = useState<number | null>(0);

 const faqCategories = [
 {
 category: "Getting Started",
 icon: Search,
 questions: [
 {
 question: "How to check if something is stolen before buying?",
 answer: "Enter the item's serial number, IMEI, or VIN into our stolen item checker. We search multiple databases including police records, insurance claims, and manufacturer reports to give you instant results. This takes less than 3 seconds and helps you avoid legal issues and financial loss.",
 searches: ["how to check if something is stolen", "stolen item verification", "pre-purchase verification"],
 popular: true
 },
 {
 question: "What information do I need to check an item?",
 answer: "You need the item's unique identifier: IMEI for phones, VIN for vehicles, serial number for electronics and other items. Most items have these numbers on labels, in settings menus, or on receipts. If a seller can't or won't provide this information, it's a major red flag.",
 searches: ["what do I need to check stolen item", "serial number location", "IMEI where to find"]
 },
 {
 question: "How accurate are your stolen item checks?",
 answer: "Our system cross-references multiple authoritative databases. We check police reports, insurance claims, manufacturer databases, and international networks. However, remember that a 'clean' result doesn't guarantee the item isn't stolen - it means it's not reported in available databases.",
 searches: ["stolen item checker accuracy", "how reliable is verification", "database accuracy"]
 }
 ]
 },
 {
 category: "Legal & Safety",
 icon: Shield,
 questions: [
 {
 question: "What happens if I unknowingly buy stolen goods?",
 answer: "Even unknowingly purchasing stolen goods can result in criminal charges, fines, and loss of the item without compensation. Laws vary by state, but you could face receiving stolen property charges. The item will be confiscated, and you'll lose your money. This is why verification before purchase is crucial.",
 searches: ["unknowingly bought stolen goods", "legal consequences stolen items", "what happens if buy stolen"],
 popular: true
 },
 {
 question: "Can I get my money back if I bought something stolen?",
 answer: "Unfortunately, no. If you purchase stolen goods, you must surrender the item to police without compensation. You cannot sue the seller if you can't find them, and insurance typically won't cover these situations. Prevention through verification is your only protection.",
 searches: ["money back stolen goods", "compensation stolen purchase", "insurance stolen items"]
 },
 {
 question: "Should I contact police if I find out something I bought is stolen?",
 answer: "Yes, you should report it immediately. Voluntary reporting shows good faith and may help with legal consequences. Keep all purchase records, communications with the seller, and our verification report as evidence. Contact local police and ask about their stolen goods recovery process.",
 searches: ["report stolen goods to police", "voluntary surrender stolen items", "what to do found stolen"]
 }
 ]
 },
 {
 category: "Phones & Electronics",
 icon: Smartphone,
 questions: [
 {
 question: "How to check if a phone is stolen by IMEI?",
 answer: "Enter the phone's IMEI number (dial *#06# or check settings) into our checker. We verify against carrier and theft databases, police databases, and insurance claims. A stolen phone may be blocked from networks, worthless for resale, and could get you in legal trouble.",
 searches: ["IMEI stolen check", "check phone stolen IMEI", "stolen phone verification", "iPhone stolen check"],
 popular: true
 },
 {
 question: "What's the difference between blacklisted and stolen phones?",
 answer: "Blacklisted phones are blocked by carriers (often for non-payment), while stolen phones are taken illegally. Stolen phones may not always be blacklisted immediately. Our service checks both scenarios - carrier and theft databases AND police stolen databases for complete protection.",
 searches: ["blacklisted and stolen phone", "carrier blacklist and police database", "phone verification types"]
 },
 {
 question: "Can I check if AirPods or other small electronics are stolen?",
 answer: "Yes, if they have serial numbers. AirPods, headphones, tablets, smartwatches, and other electronics often have serial numbers that can be checked. Look for numbers on the device, packaging, or in connected apps. Even small items can have significant legal consequences if stolen.",
 searches: ["AirPods stolen check", "electronics serial number verification", "small electronics stolen"]
 }
 ]
 },
 {
 category: "Vehicles",
 icon: Car,
 questions: [
 {
 question: "How to check if a car is stolen by VIN number?",
 answer: "Enter the 17-character VIN (Vehicle Identification Number) found on the dashboard, driver's door, or registration. We check against national databases, insurance records, and police reports. Stolen vehicles represent huge financial and legal risks - always verify before purchase.",
 searches: ["VIN stolen check", "check car stolen VIN", "vehicle theft verification", "stolen car database"],
 popular: true
 },
 {
 question: "What about motorcycles, boats, and other vehicles?",
 answer: "We can verify any vehicle with a VIN or hull identification number (HIN for boats). This includes motorcycles, RVs, trailers, boats, and aircraft. All these vehicles are frequently stolen and represent major financial risks if purchased unknowingly.",
 searches: ["motorcycle stolen check", "boat HIN verification", "RV stolen database", "vehicle verification"]
 },
 {
 question: "Should I check rental cars or lease vehicles?",
 answer: "Yes! Rental cars are sometimes sold fraudulently by people who don't own them. Lease vehicles may be sold before lease completion. Always verify any vehicle purchase, regardless of the seller's claims about ownership or rental history.",
 searches: ["rental car fraud", "lease vehicle verification", "car history check"]
 }
 ]
 },
 {
 category: "Marketplaces & Platforms",
 icon: Globe,
 questions: [
 {
 question: "Is Facebook Marketplace safe for buying used items?",
 answer: "Facebook Marketplace can be safe with proper verification. Always check item serial numbers before meeting sellers. Use our verification service, meet in public places, and trust your instincts. Never skip verification because of time pressure or 'great deals' - these are common fraud tactics.",
 searches: ["Facebook Marketplace safety", "Facebook stolen items", "marketplace verification", "safe buying Facebook"],
 popular: true
 },
 {
 question: "How to avoid scams on Craigslist, OfferUp, and similar platforms?",
 answer: "Verify all items before purchase, regardless of platform. Scammers use all platforms. Red flags include: refusing to provide serial numbers, prices too good to be true, pressure to buy quickly, meeting in private locations, and cash-only transactions. Always verify first.",
 searches: ["Craigslist scam prevention", "OfferUp safety", "marketplace scam avoidance", "online buying safety"]
 },
 {
 question: "Do I need to verify items from established retailers?",
 answer: "Generally no for direct retailer purchases, but yes for third-party sellers on platforms like Amazon, eBay, or Walmart Marketplace. Some criminals use these platforms to sell stolen goods alongside legitimate items. When in doubt, verify - it only takes seconds.",
 searches: ["Amazon third party sellers", "eBay stolen items", "retail marketplace safety"]
 }
 ]
 },
 {
 category: "Subscriptions & Plans",
 icon: DollarSign,
 questions: [
 {
 question: "How much does stolen item verification cost?",
 answer: "We offer 2 free searches when you sign up, then affordable per-search pricing or unlimited monthly plans. Consider the cost of verification versus the potential loss from buying stolen goods - our service pays for itself with just one prevented fraud.",
 searches: ["stolen item checker cost", "verification pricing", "free stolen check"],
 popular: true
 },
 {
 question: "Do you offer bulk verification for dealers or businesses?",
 answer: "Yes! We have enterprise solutions for car dealers, electronics retailers, pawn shops, and other businesses that need to verify multiple items. Contact us for volume pricing and API access. Protect your business from unknowingly handling stolen goods.",
 searches: ["bulk verification pricing", "business stolen item checking", "dealer verification service"]
 }
 ]
 }
 ];

 const quickAnswers = [
 {
 question: "Can I check if something is stolen for free?",
 answer: "Yes, 2 free searches with signup",
 icon: DollarSign
 },
 {
 question: "How long does verification take?",
 answer: "Under 3 seconds for instant results",
 icon: Clock
 },
 {
 question: "Do you work internationally?",
 answer: "Yes, databases from 50+ countries",
 icon: Globe
 },
 {
 question: "Is my search information private?",
 answer: "Completely private and encrypted",
 icon: Shield
 }
 ];

 return (
 <section className="py-20 bg-muted/30">
 <div className="container mx-auto px-4">
 {/* Header */}
 <div className="text-center mb-16">
 <Badge variant="outline" className="mb-6">
 Frequently Asked Questions
 </Badge>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">
 Everything You Need to Know About Stolen Item Verification
 </h2>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
 Comprehensive answers to the most common questions about checking if items are stolen, 
 legal implications, and how to protect yourself when buying used goods.
 </p>
 </div>

 {/* Quick Answers */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
 {quickAnswers.map((item, index) => (
 <Card key={index} className="text-center hover:shadow-md transition-shadow">
 <CardContent className="p-6">
 <div className="w-12 h-12 bg-sos-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
 <item.icon className="h-6 w-6 text-sos-orange" />
 </div>
 <h4 className="font-medium mb-2 text-sm leading-tight">{item.question}</h4>
 <p className="text-sm text-sos-orange font-semibold">{item.answer}</p>
 </CardContent>
 </Card>
 ))}
 </div>

 {/* Detailed FAQ */}
 <div className="space-y-8">
 {faqCategories.map((category, categoryIndex) => (
 <div key={categoryIndex}>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 bg-sos-orange/10 rounded-lg flex items-center justify-center">
 <category.icon className="h-5 w-5 text-sos-orange" />
 </div>
 <h3 className="text-2xl font-bold">{category.category}</h3>
 </div>
 
 <div className="space-y-4">
 {category.questions.map((faq, faqIndex) => {
 const globalIndex = categoryIndex * 10 + faqIndex;
 return (
 <Card key={globalIndex} className="hover:shadow-md transition-shadow">
 <CardHeader 
 className="cursor-pointer"
 onClick={() => setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)}
 >
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <CardTitle className="text-lg">{faq.question}</CardTitle>
 {faq.popular && (
 <Badge variant="secondary" className="text-xs">
 Popular
 </Badge>
 )}
 </div>
 {openFAQ === globalIndex ? (
 <ChevronUp className="h-5 w-5 text-muted-foreground" />
 ) : (
 <ChevronDown className="h-5 w-5 text-muted-foreground" />
 )}
 </div>
 </CardHeader>
 
 {openFAQ === globalIndex && (
 <CardContent className="pt-0">
 <p className="text-muted-foreground mb-4 leading-relaxed">
 {faq.answer}
 </p>
 {faq.searches && (
 <div>
 <p className="text-sm font-medium mb-2">Common searches for this topic:</p>
 <div className="flex flex-wrap gap-2">
 {faq.searches.map((search, idx) => (
 <Badge key={idx} variant="outline" className="text-xs">
 {search}
 </Badge>
 ))}
 </div>
 </div>
 )}
 </CardContent>
 )}
 </Card>
 );
 })}
 </div>
 </div>
 ))}
 </div>

 {/* CTA */}
 <div className="mt-16 text-center bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 rounded-2xl p-8">
 <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
 <p className="text-muted-foreground mb-6">
 Get instant answers and protect yourself with our stolen item verification service.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link to="/auth?tab=signup">
 <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
 Start Free Verification
 <ArrowRight className="ml-2 h-4 w-4" />
 </Button>
 </Link>
 <Link to="/faq">
 <Button size="lg" variant="outline">
 Contact Support
 <HelpCircle className="ml-2 h-4 w-4" />
 </Button>
 </Link>
 </div>
 </div>
 </div>
 </section>
 );
};