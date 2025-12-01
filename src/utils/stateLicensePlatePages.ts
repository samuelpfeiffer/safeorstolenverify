// Remaining 29 state license plate pages - export paths for routes and sitemap
export const REMAINING_STATE_PLATES = [
  'Montana', 'Nebraska', 'Nevada', 'NewHampshire', 'NewJersey', 'NewMexico',
  'NewYork', 'NorthCarolina', 'NorthDakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'RhodeIsland', 'SouthCarolina', 'SouthDakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'WestVirginia',
  'Wisconsin', 'Wyoming'
].map(state => ({
  component: `${state}LicensePlateLookupPage`,
  path: `/${state.toLowerCase().replace(/([A-Z])/g, '-$1').slice(1)}-license-plate-lookup`,
  state: state.replace(/([A-Z])/g, ' $1').trim()
}));