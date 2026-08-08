/**
 * Link Building & Authority Signals
 * Implements internal linking strategies and signals external authority
 */

export const LinkBuildingSignals = () => {
 // Internal linking structure for topical authority
 const topicalClusters = [
 {
 pillar: '/imei-checker',
 supporting: [
 '/check-phone',
 '/verify?type=phone',
 '/verify?type=tablet'
 ]
 },
 {
 pillar: '/vin-checker',
 supporting: [
 '/check-car',
 '/verify?type=vehicle',
 '/verify?type=motorcycle'
 ]
 },
 {
 pillar: '/firearms-check',
 supporting: [
 '/verify?type=firearm'
 ]
 }
 ];

  // External authority citations
  const authorityCitations: Array<{ source: string; url: string; topic: string }> = [];


 return (
 <div className="hidden">
 {/* Topical cluster internal links */}
 <nav aria-label="Related verification services">
 {topicalClusters.map((cluster, index) => (
 <div key={index}>
 <a href={cluster.pillar} rel="bookmark">
 {cluster.pillar.split('/')[1]} verification
 </a>
 <ul>
 {cluster.supporting.map((link, idx) => (
 <li key={idx}>
 <a href={link} rel="bookmark">
 {link.split('/').pop()}
 </a>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </nav>

 {/* Authority citations */}
 <div className="citations">
 <h3>Verified by Official Sources</h3>
 {authorityCitations.map((citation, index) => (
 <cite key={index}>
 <a 
 href={citation.url} 
 rel="noopener noreferrer external" 
 target="_blank"
 >
 {citation.source} - {citation.topic}
 </a>
 </cite>
 ))}
 </div>

 {/* Breadcrumb schema for internal linking */}
 <script type="application/ld+json">
 {JSON.stringify({
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 {
 "@type": "ListItem",
 "position": 1,
 "name": "Home",
 "item": "https://safeorstolen.com"
 },
 {
 "@type": "ListItem",
 "position": 2,
 "name": "IMEI Verification",
 "item": "https://safeorstolen.com/imei-checker"
 },
 {
 "@type": "ListItem",
 "position": 3,
 "name": "VIN Verification",
 "item": "https://safeorstolen.com/vin-checker"
 }
 ]
 })}
 </script>
 </div>
 );
};
