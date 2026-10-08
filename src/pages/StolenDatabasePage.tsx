/**
 * Oct 7 2026: rewritten by hand for "stolen items database" / "stolen property database". No useful
 * Search Console data for this URL. Copy now says plainly that this list is SafeOrStolen's own
 * owner theft reports, not a national database. Removed: "largest publicly searchable collection",
 * "verified through our network of law enforcement partnerships", "all submissions are verified",
 * "police report number" requirement, the live item count in the intro, "AI analysis" wording, and
 * the noscript block that repeated those claims. Search, filters and paging logic unchanged.
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

const STOLEN_DB_FAQS: { q: string; a: string }[] = [
 {
 q: 'Is there a database of stolen items I can search?',
 a: "There's no single public national database; the FBI's NCIC is open only to police. The SafeOrStolen stolen items database (safeorstolen.com/stolen-database) lists items owners have reported stolen on SafeOrStolen, searchable free by serial, brand, model or city. A full SafeOrStolen check of one number also searches public web results and, for guns, bikes and Arizona vehicles, police and registry records.",
 },
 {
 q: 'How do I search for a stolen item by serial number?',
 a: "Type the serial number, IMEI or VIN into the search box above and press Search. If an owner reported it on SafeOrStolen, it appears with the details the owner gave, such as where it was stolen. No result here only means it isn't in these owner reports, so run a full check to search the other sources too.",
 },
 {
 q: 'How do I add my stolen item to the database?',
 a: "Sign in to a free account, go to safeorstolen.com/report-stolen, and enter the item type and its serial number, IMEI or VIN (required), plus the brand, model, where it was stolen, a description and your police report number if you have one. The report then shows up in every check of that number. Report the theft to your local police too; SafeOrStolen doesn't send reports to them.",
 },
 {
 q: 'Is the stolen items database free?',
 a: 'Yes, browsing and searching this list is free and needs no account. A full check of a single number, which adds web results and the police and registry records that apply, comes with 2 free checks on a free account. After that it is $3.99 a check or $14.99 a month for unlimited checks.',
 },
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
 "description": "Items reported stolen by their owners on SafeOrStolen, including phones, laptops, vehicles, bikes and guns",
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
 "mainEntity": STOLEN_DB_FAQS.map((f) => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 };

 return (
 <>
 <PageSEO
 title="Stolen Items Database: Search Reported Thefts by Serial"
 description="Search stolen items reported to SafeOrStolen by owners: phones, laptops, cars, bikes, guns and more, by serial, brand or city. Not a national police database."
 keywords="stolen items database, stolen property database, search stolen items by serial number, reported stolen items list, stolen goods database"
 canonical="/stolen-database"
 modifiedTime="2026-10-07"
 structuredData={[itemListSchema, faqSchema]}
 />
 <div className="container mx-auto px-4 py-8 max-w-7xl pt-24">
 <BreadcrumbNavigation 
 items={[{ name: 'Stolen Database', href: '/stolen-database' }]}
 />

 {/* Header */}
 <div className="max-w-3xl mx-auto mb-8">
 <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
 Stolen Items Database
 </h1>
 <p className="text-xs text-muted-foreground mb-4 text-center">Updated October 7, 2026</p>
 <p className="text-base md:text-lg text-muted-foreground">
 This is the list of items owners have reported stolen on SafeOrStolen: phones, laptops, vehicles, bikes, guns,
 watches, cameras and more. Search it by serial number, brand, model or city. It is not a national police database.
 To check one number against these reports and the other sources SafeOrStolen searches, such as police gun theft
 records and a stolen-bicycle registry, run a <Link to="/verify" className="text-primary underline">full check</Link>.
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

 {/* About this list */}
 <section className="mt-16 max-w-3xl mx-auto">
 <h2 className="text-2xl font-bold text-foreground mb-3">What this database is, and isn't</h2>
 <p className="text-muted-foreground mb-4">
 Every item here was reported stolen by its owner on SafeOrStolen, with the serial number, IMEI or VIN where they had
 it. Owners can <Link to="/report-stolen" className="text-primary underline">report a stolen item</Link> and it shows up
 in every check of that number.
 </p>
 <div className="overflow-x-auto mb-6">
 <table className="w-full text-sm border rounded-lg">
 <thead>
 <tr className="border-b bg-muted/50 text-left">
 <th className="p-3">Source</th>
 <th className="p-3">In this list</th>
 <th className="p-3">In a full check</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b"><td className="p-3">SafeOrStolen owner theft reports</td><td className="p-3">Yes</td><td className="p-3">Yes</td></tr>
 <tr className="border-b"><td className="p-3">Public web results mentioning the number</td><td className="p-3">No</td><td className="p-3">Yes</td></tr>
 <tr className="border-b"><td className="p-3">Police gun theft and loss reports (33 states and DC) and live Ohio records</td><td className="p-3">No</td><td className="p-3">Guns</td></tr>
 <tr className="border-b"><td className="p-3">National stolen-bicycle registry</td><td className="p-3">No</td><td className="p-3">Bikes</td></tr>
 <tr className="border-b"><td className="p-3">Arizona law-enforcement stolen-vehicle records</td><td className="p-3">No</td><td className="p-3">Arizona VINs and plates</td></tr>
 <tr className="border-b"><td className="p-3">Carrier lost/stolen phone blacklist</td><td className="p-3">No</td><td className="p-3">Paid phone checks</td></tr>
 <tr><td className="p-3">NCIC, DMV records, pawn or insurer databases</td><td className="p-3">No</td><td className="p-3">No</td></tr>
 </tbody>
 </table>
 </div>

 <h2 className="text-2xl font-bold text-foreground mb-3">Questions about the database</h2>
 <div className="space-y-5 mb-6">
 {STOLEN_DB_FAQS.map((f) => (
 <div key={f.q}>
 <h3 className="font-semibold text-foreground mb-1">{f.q}</h3>
 <p className="text-muted-foreground">{f.a}</p>
 </div>
 ))}
 </div>

 <p className="text-muted-foreground">
 If you recognize an item here, don't approach the seller. Note where you saw it and call your local police
 non-emergency line.
 </p>
 </section>
 </div>
 </>
 );
};

export default StolenDatabasePage;
