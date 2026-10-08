import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
 Smartphone, Download, Shield, Wifi,
 QrCode, Check, Clock, Database, Users, ArrowRight, FileText
} from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';

const MobileAppPage = () => {
 const navigate = useNavigate();

 const faqs = [
 { question: "Is there a SafeOrStolen app in the App Store or Google Play?", answer: "No. SafeOrStolen is a free installable web app at safeorstolen.com/app, not an App Store or Google Play app. You add it to your home screen from your phone's browser, and it opens full screen like any other app. Installing it is free; you get 2 free checks with a free account, then $0.99 a check or $10 a month for unlimited checks." },
 { question: "Does SafeOrStolen work on iPhone and Android?", answer: "Yes. The SafeOrStolen web app runs in Safari on iPhone and iPad and in Chrome on Android, and it also works in any desktop browser. Install it from safeorstolen.com/app. There's nothing to download from an app store." },
 { question: "Can I use SafeOrStolen without internet?", answer: "No. Every check searches SafeOrStolen's theft reports and other records online, so you need a data connection to run one. If signal is weak at the meetup spot, run the check before you leave, using the serial, IMEI or VIN the seller sends you." },
 { question: "How do I install SafeOrStolen on my phone?", answer: "On iPhone, open safeorstolen.com/app in Safari, tap the Share button, then tap Add to Home Screen. On Android, open the same address in Chrome, tap the three-dot menu, then tap Install app or Add to Home screen. The SafeOrStolen icon then sits on your home screen." },
 { question: "What can I check with the SafeOrStolen web app?", answer: "Phones by IMEI, vehicles by VIN, license plates, guns, bikes and anything else with a serial number, such as laptops, tools and cameras. Each result says reported stolen, possible match, or no report found in the records searched, and lists every source." },
 { question: "Does the web app search police databases?", answer: "It searches SafeOrStolen's own theft reports and public web results on every check, plus police firearm theft and loss reports for guns, a national stolen-bicycle registry for bikes, and Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates. It does not search NCIC, DMV records or carrier records other than the paid blacklist check." },
 ];

 const howToSteps = [
 { name: "Open your browser", text: "Go to safeorstolen.com/app in Safari on iPhone or Chrome on Android." },
 { name: "Add it to your home screen", text: "iPhone: tap the Share icon, then Add to Home Screen. Android: tap the three-dot menu, then Install app or Add to Home screen." },
 { name: "Run a check", text: "Open SafeOrStolen from your home screen, sign in, and scan or type a serial number, IMEI, VIN or plate. Results come back in a few seconds." },
 ];

 const breadcrumbs = [
 { name: "Home", url: "/" },
 { name: "Mobile App", url: "/mobile-app" },
 ];


 const features = [
 { icon: QrCode, title: "Camera scanner", desc: "Point your camera at a barcode on the box or sticker instead of typing a long number" },
 { icon: Wifi, title: "Needs a data connection", desc: "Checks run online against current records, so make sure you have signal at the meetup" },
 { icon: Clock, title: "Results in a few seconds", desc: "Reported stolen, possible match, or no report found, with every source listed" },
 { icon: Shield, title: "All item types", desc: "Phones, vehicles, plates, guns, bikes and anything with a serial number" },
 { icon: Database, title: "What it searches", desc: "SafeOrStolen theft reports and public web results on every check, plus extra records for guns, bikes and Arizona vehicles" },
 { icon: FileText, title: "Saved history", desc: "Each check is saved to your account with the date, so you can show it later" },
 ];

 const useCases = [
 { title: "Marketplace meetups", desc: "Check the item before you hand over cash at a Facebook Marketplace, Craigslist or OfferUp meetup" },
 { title: "Private car sales", desc: "Read the VIN through the windshield or on the door jamb and check it before you talk price" },
 { title: "Pawn shop visits", desc: "Ask to see the serial number and check it before you pay" },
 { title: "Gun shows", desc: "Check a gun serial against police firearm theft and loss reports before a private sale" },
 { title: "Estate sales", desc: "Check electronics and tools before you bid" },
 { title: "Online purchases", desc: "Ask the seller for the serial number or IMEI and check it before you pay" },
 ];

 return (
 <>
 <Helmet>
 <title>SafeOrStolen Mobile App | Free Web App for Your Phone</title>
 <meta name="description" content="SafeOrStolen is a free installable web app, not an App Store app. Add it to your home screen from safeorstolen.com/app and check items at the meetup." />
 <meta name="keywords" content="SafeOrStolen app, stolen item checker app, IMEI checker app, VIN lookup app, stolen phone app, download SafeOrStolen" />
 <link rel="canonical" href="https://safeorstolen.com/mobile-app" />
 <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

 <meta property="og:title" content="SafeOrStolen on Your Phone - Free Web App" />
 <meta property="og:description" content="Add SafeOrStolen to your home screen from safeorstolen.com/app. Free to install, 2 free checks." />
 <meta property="og:url" content="https://safeorstolen.com/mobile-app" />
 <meta property="og:type" content="website" />

 <meta name="ai:purpose" content="Free installable web app for checking whether an item is reported stolen before buying it" />
 <meta name="ai:service_type" content="Installable web app (not in the App Store or Google Play) with a camera barcode scanner" />
 <meta name="ai:pricing" content="Free to install, 2 free checks, $0.99/check or $10/month unlimited" />

 </Helmet>

 <FAQSchema faqs={faqs} />
 <HowToSchema
 name="How to install the SafeOrStolen web app"
 description="Add the SafeOrStolen web app to your phone's home screen from your browser"
 totalTime="PT1M"
 steps={howToSteps}
 />
 <BreadcrumbSchema items={breadcrumbs} />

 <noscript>
 <article>
 <h1>SafeOrStolen on Your Phone - Free Web App</h1>
 <p>SafeOrStolen is a free installable web app at safeorstolen.com/app. It is not in the App Store or Google Play. Add it to your home screen from Safari or Chrome, then check phones, vehicles, plates, guns, bikes and serial numbers in a few seconds. It needs a data connection to run a check.</p>
 <h2>Features</h2>
 <ul>
 <li>Camera barcode scanner for serial numbers, IMEIs and VINs</li>
 <li>Results in a few seconds, with every source listed</li>
 <li>Each check saved to your account with the date</li>
 <li>All item types: phones, vehicles, plates, guns, bikes, electronics</li>
 </ul>
 <h2>How to install</h2>
 <ol>
 <li>iPhone: Safari, Share, Add to Home Screen</li>
 <li>Android: Chrome, menu, Install app</li>
 </ol>
 <p>Pricing: free to install, 2 free checks, then $0.99 a check or $10 a month unlimited.</p>
 </article>
 </noscript>

 <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
 {/* Hero Section */}
 <section className="container mx-auto px-4 py-16 lg:py-24">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
 <Smartphone className="h-4 w-4" />
 <span>Stolen item checks on your phone</span>
 </div>

 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
 SafeOrStolen on Your Phone
 </h1>

 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
 SafeOrStolen is a free web app you add to your home screen from safeorstolen.com/app. It isn't in the App Store or Google Play. Scan or type a serial, IMEI, VIN or plate at the meetup and get a result in a few seconds.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/app')}>
 <Download className="h-5 w-5" />
 Open the Free Web App
 </Button>
 <Button size="lg" variant="outline" className="px-8 gap-2" onClick={() => navigate('/install-app')}>
 Installation Guide
 <ArrowRight className="h-4 w-4" />
 </Button>
 </div>

 <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Runs in Safari and Chrome</span>
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> No app store needed</span>
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 2 free checks included</span>
 </div>
 </div>
 </section>

 {/* Features Grid */}
 <section className="container mx-auto px-4 py-16">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {features.map((feature, idx) => (
 <Card key={idx} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
 <CardContent className="p-6">
 <feature.icon className="h-10 w-10 text-primary mb-4" />
 <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
 <p className="text-muted-foreground">{feature.desc}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Use Cases */}
 <section className="container mx-auto px-4 py-16 bg-muted/30">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-4">Where People Use It</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 The web app is built for checking an item while you're standing next to it, before money changes hands.
 </p>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {useCases.map((useCase, idx) => (
 <div key={idx} className="p-6 bg-background rounded-lg border border-border">
 <h3 className="font-semibold mb-2">{useCase.title}</h3>
 <p className="text-sm text-muted-foreground">{useCase.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Key facts */}
 <section className="container mx-auto px-4 py-16">
 <div className="max-w-4xl mx-auto">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
 <div>
 <Download className="h-8 w-8 mx-auto text-primary mb-2" />
 <div className="text-3xl font-bold">Free</div>
 <div className="text-sm text-muted-foreground">To install</div>
 </div>
 <div>
 <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
 <div className="text-3xl font-bold">$0.99</div>
 <div className="text-sm text-muted-foreground">Per check</div>
 </div>
 <div>
 <Users className="h-8 w-8 mx-auto text-primary mb-2" />
 <div className="text-3xl font-bold">$10</div>
 <div className="text-sm text-muted-foreground">A month, unlimited</div>
 </div>
 <div>
 <Check className="h-8 w-8 mx-auto text-primary mb-2" />
 <div className="text-3xl font-bold">2</div>
 <div className="text-sm text-muted-foreground">Free checks</div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="container mx-auto px-4 py-16 bg-muted/30">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
 <div className="space-y-6">
 {faqs.map((faq, idx) => (
 <div key={idx} className="bg-background p-6 rounded-lg border border-border">
 <h3 className="font-semibold mb-2">{faq.question}</h3>
 <p className="text-muted-foreground">{faq.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Final CTA */}
 <section className="container mx-auto px-4 py-16">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Add SafeOrStolen to Your Home Screen</h2>
 <p className="text-muted-foreground mb-8">
 Open safeorstolen.com/app, add it to your home screen, and create a free account. No app store, no credit card.
 </p>
 <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/app')}>
 <Download className="h-5 w-5" />
 Open the Free Web App
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default MobileAppPage;
