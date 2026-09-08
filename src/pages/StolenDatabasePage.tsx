/**
 * Stolen Database Page - Searchable database of reported stolen items
 * SEO-optimized with filters, search, and individual item cards
 */

import { useState, useEffect } from 'react';
import { useSearchParams, Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';
import { 
 Search, Filter, Grid, List, AlertTriangle, MapPin, Calendar, 
 Smartphone, Car, Bike, Monitor, Crosshair, Watch, Camera, Package
} from 'lucide-react';
import { format } from 'date-fns';

interface StolenItem {
 id: string;
 item_type: string;
 brand: string | null;
 model: string | null;
 serial_number: string | null;
 imei: string | null;
 vin: string | null;
 description: string | null;
 date_stolen: string | null;
 location: string | null;
 status: string;
 created_at: string;
}

const ITEM_TYPE_ICONS: Record<string, React.ElementType> = {
 smartphone: Smartphone,
 laptop: Monitor,
 vehicle: Car,
 bicycle: Bike,
 firearm: Crosshair,
 watch: Watch,
 camera: Camera,
 tablet: Monitor,
 jewelry: Package,
 other: Package,
};

const ITEM_TYPES = [
 { value: 'all', label: 'All Categories' },
 { value: 'smartphone', label: 'Smartphones' },
 { value: 'laptop', label: 'Laptops' },
 { value: 'vehicle', label: 'Vehicles' },
 { value: 'bicycle', label: 'Bicycles' },
 { value: 'firearm', label: 'Firearms' },
 { value: 'watch', label: 'Watches' },
 { value: 'camera', label: 'Cameras' },
 { value: 'tablet', label: 'Tablets' },
 { value: 'jewelry', label: 'Jewelry' },
 { value: 'other', label: 'Other' },
];

const generateSlug = (item: StolenItem): string => {
 const parts = [
 'stolen',
 item.brand?.toLowerCase() || '',
 item.model?.toLowerCase() || item.item_type,
 item.location?.split(',')[0]?.toLowerCase() || '',
 item.id.slice(0, 8)
 ].filter(Boolean);
 return parts.join('-').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
};

const StolenDatabasePage = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const [items, setItems] = useState<StolenItem[]>([]);
 const [loading, setLoading] = useState(true);
 const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
 const [totalCount, setTotalCount] = useState(0);
 
 // Filter states
 const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
 const [category, setCategory] = useState(searchParams.get('category') || 'all');
 const [location, setLocation] = useState(searchParams.get('location') || '');
 const [page, setPage] = useState(parseInt(searchParams.get('page') || '1'));
 
 const ITEMS_PER_PAGE = 12;

 useEffect(() => {
 fetchItems();
 }, [category, location, page]);

 const fetchItems = async () => {
 setLoading(true);
 try {
 let query = supabase
 .from('stolen_items')
 .select('*', { count: 'exact' })
 .eq('status', 'reported')
 .order('created_at', { ascending: false })
 .range((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE - 1);

 if (category && category !== 'all') {
 query = query.eq('item_type', category);
 }

 if (location) {
 query = query.ilike('location', `%${location}%`);
 }

 if (searchQuery) {
 query = query.or(`brand.ilike.%${searchQuery}%,model.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,serial_number.ilike.%${searchQuery}%`);
 }

 const { data, count, error } = await query;

 if (error) throw error;
 setItems(data || []);
 setTotalCount(count || 0);
 } catch (error) {
 console.error('Error fetching stolen items:', error);
 } finally {
 setLoading(false);
 }
 };

 const handleSearch = (e: React.FormEvent) => {
 e.preventDefault();
 setPage(1);
 const params = new URLSearchParams();
 if (searchQuery) params.set('q', searchQuery);
 if (category !== 'all') params.set('category', category);
 if (location) params.set('location', location);
 setSearchParams(params);
 fetchItems();
 };

 const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

 // Schema.org structured data
 const itemListSchema = {
 "@context": "https://schema.org",
 "@type": "ItemList",
 "name": "Stolen Items Database",
 "description": "Searchable database of reported stolen items including phones, vehicles, bikes, and electronics",
 "numberOfItems": totalCount,
 "itemListElement": items.map((item, index) => ({
 "@type": "ListItem",
 "position": index + 1,
 "item": {
 "@type": "Product",
 "name": `${item.brand || ''} ${item.model || item.item_type}`.trim(),
 "description": item.description,
 "identifier": item.serial_number || item.imei || item.vin,
 }
 }))
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I search the stolen items database?",
 "acceptedAnswer": { "@type": "Answer", "text": "Enter a brand name, model, serial number, IMEI, or VIN in the search box. Filter by category (smartphones, laptops, vehicles, etc.) and location. Results show all matching reported stolen items with details including date stolen and location." }
 },
 {
 "@type": "Question",
 "name": "How do I report a stolen item?",
 "acceptedAnswer": { "@type": "Answer", "text": "Visit safeorstolen.com/report-stolen to submit a stolen item report. You'll need the item type, brand/model, serial number or IMEI, date stolen, location, and police report number. All submissions are verified before inclusion in the database." }
 },
 {
 "@type": "Question",
 "name": "Is the stolen items database free to search?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes, searching the stolen items database is completely free. For full verification against 100+ external databases (carrier and theft databases, vehicle theft and title databases, etc.), use SafeOrStolen's verification tool — 2 free checks, then $0.99/check or $10/month unlimited." }
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="Stolen Items Database - Search Reported Thefts | SafeOrStolen"
 description="Search our database of reported stolen items. Find phones, laptops, vehicles, bikes, firearms, jewelry. Help recover stolen property. Free to search."
 keywords="stolen items database, search stolen goods, reported thefts, stolen bikes, stolen phones, stolen vehicles, stolen property search, recovered stolen items"
 canonical="/stolen-database"
 structuredData={[itemListSchema, faqSchema]}
 />

 {/* Comprehensive noscript for crawlers */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
 <header>
 <nav><a href="/">SafeOrStolen</a> &gt; Stolen Items Database</nav>
 </header>
 <div>
 <h1>Stolen Items Database</h1>
 <p>Search our database of reported stolen items including phones, laptops, vehicles, bicycles, firearms, jewelry, and more. Help protect buyers and recover stolen property.</p>
 
 <h2>Search by Category</h2>
 <ul>
 <li>Smartphones — IMEI-based stolen phone reports</li>
 <li>Laptops — Serial number based theft reports</li>
 <li>Vehicles — VIN-based stolen vehicle reports</li>
 <li>Bicycles — Frame serial number theft reports</li>
 <li>Firearms — Serial number theft reports</li>
 <li>Watches, Cameras, Tablets, Jewelry</li>
 </ul>
 
 <h2>How to Use the Database</h2>
 <ul>
 <li>Search by identifier: Enter a serial number, IMEI, or VIN to find exact matches</li>
 <li>Browse by category: Filter by item type to find specific categories</li>
 <li>Search by location: Narrow results to your city or state</li>
 <li>Report a stolen item: Add your stolen property at <a href="/report-stolen">safeorstolen.com/report-stolen</a></li>
 </ul>
 
 <h2>For Full Verification</h2>
 <p>This database shows community-reported stolen items. For comprehensive verification against 100+ databases including carrier and theft databases, vehicle theft and title databases, and carrier and theft databases, use <a href="/verify">SafeOrStolen's verification tool</a> — 2 free checks, then $0.99/check or $10/month unlimited.</p>
 
 <h2>Related Resources</h2>
 <ul>
 <li><a href="/verify">Verify Any Item</a></li>
 <li><a href="/report-stolen">Report a Stolen Item</a></li>
 <li><a href="/imei-checker">IMEI Checker</a></li>
 <li><a href="/vin-checker">VIN Checker</a></li>
 <li><a href="/pricing">Pricing - $10/mo Unlimited</a></li>
 </ul>
 </div>
 </div>
 </noscript>
 <div className="container mx-auto px-4 py-8 max-w-7xl pt-24">
 <BreadcrumbNavigation 
 items={[{ name: 'Stolen Database', href: '/stolen-database' }]}
 />

 {/* Header */}
 <div className="text-center mb-8">
 <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
 Stolen Items Database
 </h1>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
 Search our database of {totalCount.toLocaleString()} reported stolen items. 
 Help protect buyers and recover stolen property.
 </p>
 </div>

 {/* Search & Filters */}
 <Card className="mb-8">
 <CardContent className="pt-6">
 <form onSubmit={handleSearch} className="space-y-4">
 <div className="flex flex-col md:flex-row gap-4">
 <div className="flex-1 relative">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
 <Input
 type="text"
 placeholder="Search by brand, model, serial number..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="pl-10"
 />
 </div>
 <Select value={category} onValueChange={setCategory}>
 <SelectTrigger className="w-full md:w-[200px]">
 <SelectValue placeholder="Category" />
 </SelectTrigger>
 <SelectContent>
 {ITEM_TYPES.map((type) => (
 <SelectItem key={type.value} value={type.value}>
 {type.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 <Input
 type="text"
 placeholder="City or State"
 value={location}
 onChange={(e) => setLocation(e.target.value)}
 className="w-full md:w-[180px]"
 />
 <Button type="submit">
 <Filter className="w-4 h-4 mr-2" />
 Search
 </Button>
 </div>
 </form>
 </CardContent>
 </Card>

 {/* Results Header */}
 <div className="flex items-center justify-between mb-6">
 <p className="text-muted-foreground">
 {loading ? 'Searching...' : `${totalCount.toLocaleString()} items found`}
 </p>
 <div className="flex gap-2">
 <Button
 variant={viewMode === 'grid' ? 'default' : 'outline'}
 size="icon"
 onClick={() => setViewMode('grid')}
 >
 <Grid className="w-4 h-4" />
 </Button>
 <Button
 variant={viewMode === 'list' ? 'default' : 'outline'}
 size="icon"
 onClick={() => setViewMode('list')}
 >
 <List className="w-4 h-4" />
 </Button>
 </div>
 </div>

 {/* Results Grid/List */}
 {loading ? (
 <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
 {Array.from({ length: 6 }).map((_, i) => (
 <Card key={i}>
 <CardContent className="pt-6">
 <Skeleton className="h-6 w-3/4 mb-2" />
 <Skeleton className="h-4 w-1/2 mb-4" />
 <Skeleton className="h-16 w-full" />
 </CardContent>
 </Card>
 ))}
 </div>
 ) : items.length === 0 ? (
 <Card>
 <CardContent className="py-12 text-center">
 <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
 <h3 className="text-lg font-semibold mb-2">No items found</h3>
 <p className="text-muted-foreground">
 Try adjusting your search criteria or browse all categories.
 </p>
 </CardContent>
 </Card>
 ) : (
 <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
 {items.map((item) => {
 const IconComponent = ITEM_TYPE_ICONS[item.item_type] || Package;
 const slug = generateSlug(item);
 
 return (
 <Link key={item.id} to={`/item/${slug}`} state={{ itemId: item.id } as never}>
 <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
 <CardHeader className="pb-2">
 <div className="flex items-start justify-between">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
 <IconComponent className="w-5 h-5 text-destructive" />
 </div>
 <div>
 <CardTitle className="text-lg">
 {item.brand || ''} {item.model || item.item_type}
 </CardTitle>
 <Badge variant="destructive" className="mt-1">
 Reported Stolen
 </Badge>
 </div>
 </div>
 </div>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
 {item.description || 'No description provided'}
 </p>
 <div className="space-y-2 text-sm">
 {item.location && (
 <div className="flex items-center gap-2 text-muted-foreground">
 <MapPin className="w-4 h-4" />
 {item.location}
 </div>
 )}
 {item.date_stolen && (
 <div className="flex items-center gap-2 text-muted-foreground">
 <Calendar className="w-4 h-4" />
 Stolen: {format(new Date(item.date_stolen), 'MMM d, yyyy')}
 </div>
 )}
 {(item.serial_number || item.imei || item.vin) && (
 <div className="text-xs font-mono bg-muted px-2 py-1 rounded-[0.25rem] truncate">
 {item.serial_number || item.imei || item.vin}
 </div>
 )}
 </div>
 </CardContent>
 </Card>
 </Link>
 );
 })}
 </div>
 )}

 {/* Pagination */}
 {totalPages > 1 && (
 <div className="flex justify-center gap-2 mt-8">
 <Button
 variant="outline"
 disabled={page === 1}
 onClick={() => setPage(p => p - 1)}
 >
 Previous
 </Button>
 <span className="flex items-center px-4 text-muted-foreground">
 Page {page} of {totalPages}
 </span>
 <Button
 variant="outline"
 disabled={page === totalPages}
 onClick={() => setPage(p => p + 1)}
 >
 Next
 </Button>
 </div>
 )}

 {/* SEO Content */}
 <section className="mt-16 prose prose-sm dark:prose-invert max-w-none">
 <h2>About Our Stolen Items Database</h2>
 <p>
 The SafeOrStolen database is the largest publicly searchable collection of reported stolen items. 
 Our database includes phones, laptops, vehicles, bicycles, firearms, jewelry, and more. 
 Every item is verified through our network of law enforcement partnerships and user reports.
 </p>
 
 <h3>How to Use the Database</h3>
 <ul>
 <li><strong>Search by identifier:</strong> Enter a serial number, IMEI, or VIN to find exact matches</li>
 <li><strong>Browse by category:</strong> Filter by item type to find specific categories</li>
 <li><strong>Search by location:</strong> Narrow results to your city or state</li>
 <li><strong>Report a stolen item:</strong> Add your stolen property to help others avoid purchasing it</li>
 </ul>

 <h3>Help Recover Stolen Property</h3>
 <p>
 If you recognize an item in our database or have information about a theft, 
 please contact local law enforcement. Every search helps reduce the market for stolen goods 
 and increases the chances of recovery for theft victims.
 </p>
 </section>
 </div>
 </>
 );
};

export default StolenDatabasePage;
