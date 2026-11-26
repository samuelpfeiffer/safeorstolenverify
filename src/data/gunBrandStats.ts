// Nov 26 2026 (owner: "we should be out ranking... more to offer means more content").
// Counts come from SafeOrStolen's theft_records table (item_type firearm), queried Nov 26 2026:
// police reports of stolen and lost guns, grouped by make. Junk model values (blank, "UNKNOWN",
// the brand name repeated, a caliber) are left out of the model lists. Do not round up or invent numbers.

export const GUN_BRAND_STATS_AS_OF = '2026-11-26';

export interface GunBrandStats {
  slug: string; // URL is /<slug>-serial-number-lookup
  name: string;
  total: number;
  firstYear: number;
  lastYear: number;
  stateCount: number;
  topModels: [string, number][];
  topStates: [string, number][]; // two-letter state code, reports
}

export const GUN_BRANDS: GunBrandStats[] = [
  { slug: 'smith-wesson', name: 'Smith & Wesson', total: 35852, firstYear: 1974, lastYear: 2026, stateCount: 35,
    topModels: [['SW40VE', 1049], ['SW9VE', 994], ['Bodyguard', 711], ['686', 667], ['SD9VE', 570], ['642', 552]],
    topStates: [['CA', 12349], ['FL', 9713], ['TX', 2980], ['IL', 1376], ['WA', 1376]] },
  { slug: 'glock', name: 'Glock', total: 25801, firstYear: 1976, lastYear: 2026, stateCount: 35,
    topModels: [['Glock 19', 3074], ['Glock 23', 2713], ['Glock 22', 2363], ['Glock 17', 2129], ['Glock 27', 1995], ['Glock 26', 1433]],
    topStates: [['FL', 7964], ['CA', 7690], ['TX', 2226], ['AZ', 1106], ['WA', 988]] },
  { slug: 'ruger', name: 'Ruger', total: 24899, firstYear: 1975, lastYear: 2026, stateCount: 34,
    topModels: [['LCP', 1535], ['P95', 676], ['LC9', 623], ['P89', 596], ['10/22', 558], ['Blackhawk', 468]],
    topStates: [['CA', 8699], ['FL', 6159], ['TX', 2030], ['WA', 1259], ['AZ', 1192]] },
  { slug: 'taurus', name: 'Taurus', total: 15380, firstYear: 1975, lastYear: 2017, stateCount: 33,
    topModels: [['85', 502], ['PT111', 440], ['Judge', 355], ['PT92', 255], ['PT140', 237]],
    topStates: [['FL', 5416], ['CA', 2755], ['TX', 1754], ['NC', 710], ['AZ', 640]] },
  { slug: 'springfield', name: 'Springfield', total: 9667, firstYear: 1977, lastYear: 2017, stateCount: 30,
    topModels: [['XD', 1152], ['XD40', 546], ['XDM', 503], ['XDS', 473], ['XD9', 401], ['1911', 326]],
    topStates: [['CA', 3302], ['FL', 1444], ['TX', 1264], ['WA', 622], ['AZ', 567]] },
  { slug: 'beretta', name: 'Beretta', total: 9154, firstYear: 1978, lastYear: 2017, stateCount: 32,
    topModels: [['92FS', 1190], ['92F', 509], ['PX4 Storm', 314], ['PX4', 285], ['21A', 239], ['Tomcat', 188]],
    topStates: [['CA', 4182], ['FL', 2116], ['TX', 690], ['WA', 353], ['IL', 294]] },
  { slug: 'sig-sauer', name: 'Sig Sauer', total: 8175, firstYear: 1989, lastYear: 2026, stateCount: 34,
    topModels: [['P226', 764], ['P238', 484], ['P229', 475], ['P220', 439], ['SP2022', 333], ['P250', 274]],
    topStates: [['CA', 3124], ['FL', 1931], ['TX', 921], ['WA', 418], ['AZ', 253]] },
  { slug: 'remington', name: 'Remington', total: 8093, firstYear: 1974, lastYear: 2017, stateCount: 33,
    topModels: [['870', 1982], ['700', 560], ['1100', 329], ['870 Express', 328], ['770', 153], ['1187', 148]],
    topStates: [['CA', 3382], ['FL', 1779], ['TX', 847], ['WA', 434], ['AZ', 274]] },
  { slug: 'colt', name: 'Colt', total: 7164, firstYear: 1973, lastYear: 2017, stateCount: 33,
    topModels: [['1911', 424], ['Python', 241], ['AR15', 155], ['Cobra', 128]],
    topStates: [['CA', 3565], ['FL', 1318], ['TX', 460], ['AZ', 324], ['IL', 312]] },
  { slug: 'hi-point', name: 'Hi-Point', total: 5497, firstYear: 1980, lastYear: 2017, stateCount: 30,
    topModels: [['C9', 1224], ['CF380', 436], ['JHP', 198], ['JCP', 157]],
    topStates: [['FL', 1524], ['CA', 1228], ['NC', 387], ['TX', 367], ['IL', 339]] },
];

export const gunBrandBySlug = (slug: string) => GUN_BRANDS.find((b) => b.slug === slug) ?? null;
