export type PressRelease = {
  title: string;
  outlet: 'PRLog' | 'IssueWire';
  date: string;
  url: string;
};

export const PRESS_RELEASES: PressRelease[] = [
  {
    title: 'SafeOrStolen Partners with FasterCapital to Tackle Fraud and Build Trust in the Secondhand Market',
    outlet: 'PRLog',
    date: 'August 11, 2025',
    url: 'https://biz.prlog.org/SafeOrStolen/',
  },
  {
    title: 'SafeOrStolen Partners with FasterCapital to Secure Secondhand Market Worldwide',
    outlet: 'PRLog',
    date: 'September 11, 2025',
    url: 'https://www.prlog.org/13098918-safeorstolen-partners-with-fastercapital-to-secure-secondhand-market-worldwide.html',
  },
  {
    title: 'SafeOrStolen Partners with FasterCapital to Launch Web App Platform for Trusted Secondhand Verification',
    outlet: 'IssueWire',
    date: 'October 11, 2025',
    url: 'https://www.issuewire.com/safeorstolen-partners-with-fastercapital-to-launch-web-app-platform-for-trusted-secondhand-verification-1845387637096904',
  },
  {
    title: 'SafeOrStolen Launches Free Mobile App for Instant Stolen Item Verification',
    outlet: 'PRLog',
    date: 'January 2, 2026',
    url: 'https://www.prlog.org/13119488-safeorstolen-launches-free-mobile-app-for-instant-stolen-item-verification.html',
  },
];