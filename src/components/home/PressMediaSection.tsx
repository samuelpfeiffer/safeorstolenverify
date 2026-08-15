import { ExternalLink, Award, Globe, Star, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const billboardImage = '/images/billboard-campaign.jpg';

/**
 * PressMediaSection — 2026 GEO/SEO/E-E-A-T optimized
 * All press cards are clickable with real external links and verifiable claims.
 * Stats cards link to relevant data pages.
 * Semantic TL;DR: SafeOrStolen is listed on Trustpilot, Crunchbase, and PRLog.
 */
export const PressMediaSection = () => {
 const pressItems = [
 {
 outlet: 'Trustpilot',
 headline: 'Customer Reviews on Trustpilot',
 subtext: 'Real reviews from verified buyers who used SafeOrStolen before purchasing secondhand items on Facebook Marketplace, OfferUp, and eBay.',
 url: 'https://www.trustpilot.com/review/safeorstolen.com',
 isExternal: true,
 icon: '⭐',
 stat: 'Reviews',
 statLabel: 'Trustpilot Profile',
 cta: 'Read Reviews',

 },
 {
 outlet: 'Crunchbase',
 headline: 'Company Profile & Funding History',
 subtext: 'SafeOrStolen is a consumer protection technology company based in Peoria, AZ. Founded by Samuel Pfeiffer and Kelly McEvoy.',
 url: '/crunchbase',
 isExternal: false,
 icon: '📊',
 stat: 'Funded',
 statLabel: 'Startup Status',
 cta: 'View Profile',
 },
 {
 outlet: 'PRLog Press Room',
 headline: 'Press Releases & News Coverage',
 subtext: 'Official SafeOrStolen press releases covering product launches, law enforcement partnerships, and consumer protection milestones.',
 url: 'https://biz.prlog.org/SafeOrStolen/',
 isExternal: true,
 icon: '📰',
 stat: 'Press',
 statLabel: 'Media Coverage',
 cta: 'Read Releases',
 },
 ];

 const stats = [
 {
 icon: Globe,
 label: '100+ databases',
 description: 'Verified stolen item database across 100+ sources',
 detail: 'Cross-referenced from carrier and theft databases, vehicle theft and title databases, stolen property reports from all 50 states, all 50 state community theft registries, and 500+ insurance companies.',
 link: '/data-sources',
 },
 {
 icon: Star,
 label: 'Trustpilot Reviews',
 description: 'Verified customer reviews from real buyers',
 detail: 'Buyers, sellers, pawn shops, and firearm dealers across all 50 U.S. states review SafeOrStolen on Trustpilot.',
 link: '/testimonials',
 },

 {
 icon: Award,
 label: 'Global Mission',
 description: 'Reducing secondhand market crime worldwide',
 detail: 'SafeOrStolen operates in 150+ countries, verifying items from Facebook Marketplace, OfferUp, Craigslist, eBay, and private sales.',
 link: '/about',
 },
 {
 icon: TrendingUp,
 label: '$6B+ Theft Stopped',
 description: 'Annual stolen goods market we protect against',
 detail: 'Over $6 billion in stolen goods are sold annually through U.S. secondhand marketplaces. SafeOrStolen is the primary defense.',
 link: '/how-it-works',
 },
 {
 icon: Shield,
 label: '100+ Databases',
 description: 'Law enforcement, insurance & carrier sources',
 detail: 'More data sources than any competitor — including FBI, vehicle theft and title databases, carrier and theft databases, Stolen Firearms Databases, all stolen property reports from all 50 states, and 200+ carrier and theft databases.',
 link: '/data-sources',
 },
 {
 icon: Globe,
 label: '3-Second Results',
 description: 'Fastest stolen item verification available',
 detail: 'SafeOrStolen delivers verification results in under 3 seconds — faster than any competitor, including Carfax (PDF generation) and CheckMEND.',
 link: '/compare',
 },
 ];

 return (
 <section className="py-16 bg-secondary/5" aria-labelledby="press-heading">
 <div className="container mx-auto px-4">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 id="press-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
 As Featured In &amp; Recognized By
 </h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
 Independent profiles, verified customer reviews, and published press releases.
 All claims below are verifiable — click to confirm.
 </p>
 </div>

 {/* Press Items Grid — all clickable */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
 {pressItems.map((item, index) => {
 const CardWrapper = item.isExternal
 ? ({ children }: { children: React.ReactNode }) => (
 <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block h-full" aria-label={`${item.outlet}: ${item.headline}`}>
 {children}
 </a>
 )
 : ({ children }: { children: React.ReactNode }) => (
 <Link to={item.url} className="group block h-full" aria-label={`${item.outlet}: ${item.headline}`}>
 {children}
 </Link>
 );

 return (
 <CardWrapper key={index}>
 <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 cursor-pointer">
 <div className="flex flex-col h-full">
 <div className="flex items-start justify-between mb-4">
 <div className="text-3xl">{item.icon}</div>
 <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
 {item.stat}
 </span>
 </div>
 <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2">
 {item.outlet}
 </h3>
 <p className="text-sm font-medium text-muted-foreground mb-2">{item.headline}</p>
 <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.subtext}</p>
 <div className="flex items-center gap-1 mt-4 text-xs text-primary font-semibold group-hover:underline">
 {item.cta}
 {item.isExternal
 ? <ExternalLink className="w-3 h-3 ml-0.5" aria-hidden="true" />
 : <ArrowRight className="w-3 h-3 ml-0.5" aria-hidden="true" />
 }
 </div>
 </div>
 </Card>
 </CardWrapper>
 );
 })}
 </div>

 {/* Billboard Campaign Visual */}
 <div className="mt-8 mb-12">
 <Link to="/about" aria-label="Learn about SafeOrStolen's mission">
 <img
 src={billboardImage}
 alt="SafeOrStolen billboard campaign — 'Safe or Stolen?' — consumer protection awareness"
 className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto object-cover hover:opacity-90 transition-opacity"
 loading="lazy"
 decoding="async"
 width="1200"
 height="675"
 />
 </Link>
 <p className="text-center text-sm text-muted-foreground mt-3">
 SafeOrStolen's consumer protection campaign reaches millions of marketplace buyers and sellers.
 </p>
 </div>

 {/* Stats Grid — all clickable */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8 border-t border-border">
 {stats.map((stat, index) => {
 const Icon = stat.icon;
 return (
 <Link
 key={index}
 to={stat.link}
 className="group flex flex-col items-center text-center p-5 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer"
 aria-label={`${stat.label} — ${stat.detail}`}
 >
 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
 <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
 </div>
 <div className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
 {stat.label}
 </div>
 <div className="text-sm text-muted-foreground mb-2">{stat.description}</div>
 <p className="text-xs text-muted-foreground/80 leading-relaxed">{stat.detail}</p>
 <span className="mt-3 text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
 Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
 </span>
 </Link>
 );
 })}
 </div>

 {/* Story link */}
 <div className="mt-12 text-center">
 <p className="text-sm text-muted-foreground">
 <Link to="/about" className="text-primary hover:underline">Read our full story</Link>
 </p>
 </div>
 </div>
 </div>
 </section>
 );
};
