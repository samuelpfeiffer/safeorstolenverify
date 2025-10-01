/**
 * Link Building & Authority Signals
 * Implements internal linking strategies and signals external authority
 */

export const LinkBuildingSignals = () => {
  // Internal linking structure for topical authority
  const topicalClusters = [
    {
      pillar: '/imei-check',
      supporting: [
        '/imei-check/iphone',
        '/imei-check/android',
        '/imei-check/samsung',
        '/imei-check/blacklist',
        '/imei-check/free'
      ]
    },
    {
      pillar: '/vin-verification',
      supporting: [
        '/vin-verification/used-cars',
        '/vin-verification/motorcycles',
        '/vin-verification/stolen-vehicles',
        '/vin-verification/carfax-alternative'
      ]
    },
    {
      pillar: '/firearms-check',
      supporting: [
        '/firearms-check/gun-serial-number',
        '/firearms-check/stolen-firearms',
        '/firearms-check/atf-database',
        '/firearms-check/gun-shows'
      ]
    }
  ];

  // External authority citations
  const authorityCitations = [
    {
      source: 'FBI',
      url: 'https://www.fbi.gov/investigate/violent-crime/cac',
      topic: 'NCIC database access'
    },
    {
      source: 'NICB',
      url: 'https://www.nicb.org',
      topic: 'Stolen vehicle verification'
    },
    {
      source: 'ATF',
      url: 'https://www.atf.gov',
      topic: 'Firearm serial number tracing'
    }
  ];

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
              "item": "https://safeorstolen.com/imei-check"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "VIN Verification",
              "item": "https://safeorstolen.com/vin-verification"
            }
          ]
        })}
      </script>
    </div>
  );
};
