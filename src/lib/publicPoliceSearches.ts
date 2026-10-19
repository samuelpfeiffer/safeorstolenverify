export const PUBLIC_POLICE_SEARCHES = [
  { name: 'Florida FDLE — stolen gun', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenGun.jsf' },
  { name: 'Florida FDLE — stolen vehicle', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenVehicles.jsf' },
  { name: 'Florida FDLE — stolen article', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenArticle.jsf' },
  { name: 'Ohio Attorney General — stolen gun', url: 'https://www.ohioattorneygeneral.gov/stolengun' },
  { name: 'Utah — serial search', url: 'https://serialandcfp.ps.utah.gov/' },
];

export function isPublicPoliceSearch(url: string): boolean {
  return PUBLIC_POLICE_SEARCHES.some((source) => source.url === url);
}