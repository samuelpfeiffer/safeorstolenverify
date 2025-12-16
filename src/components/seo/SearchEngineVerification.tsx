import { Helmet } from '@/lib/helmet-shim';

/**
 * SearchEngineVerification Component
 * 
 * Centralizes all search engine webmaster verification codes.
 * Update the placeholder values with your actual verification codes:
 * 
 * 1. Bing Webmaster Tools: https://www.bing.com/webmasters
 * 2. Yandex Webmaster: https://webmaster.yandex.com
 * 3. Microsoft Clarity: https://clarity.microsoft.com
 * 4. Google Search Console: https://search.google.com/search-console
 */

// Verification codes - UPDATE THESE WITH YOUR ACTUAL CODES
const VERIFICATION_CODES = {
  // Bing Webmaster Tools verification code
  // Get from: https://www.bing.com/webmasters → Add Site → Verify
  BING_VERIFICATION: '9e97e42ca4313db0',
  
  // Yandex Webmaster verification code  
  // Get from: https://webmaster.yandex.com → Add Site → Verify
  YANDEX_VERIFICATION: 'YOUR_YANDEX_VERIFICATION_CODE',
  
  // Microsoft Clarity Project ID
  // Get from: https://clarity.microsoft.com → Create Project → Get Code
  CLARITY_PROJECT_ID: 'YOUR_CLARITY_PROJECT_ID',
  
  // Google Search Console (already configured in index.html)
  // If you need to add it here instead, uncomment below
  // GOOGLE_VERIFICATION: 'YOUR_GOOGLE_VERIFICATION_CODE',
};

export function SearchEngineVerification() {
  return (
    <Helmet>
      {/* Bing Webmaster Tools Verification */}
      <meta name="msvalidate.01" content={VERIFICATION_CODES.BING_VERIFICATION} />
      
      {/* Yandex Webmaster Verification */}
      <meta name="yandex-verification" content={VERIFICATION_CODES.YANDEX_VERIFICATION} />
      
      {/* IndexNow Key Reference */}
      <link rel="indexnow" href="https://safeorstolen.com/indexnow-key.txt" />
      
      {/* Baidu Webmaster (China - optional) */}
      {/* <meta name="baidu-site-verification" content="YOUR_BAIDU_CODE" /> */}
      
      {/* Pinterest Verification (optional) */}
      {/* <meta name="p:domain_verify" content="YOUR_PINTEREST_CODE" /> */}
      
      {/* Microsoft Clarity Analytics Script */}
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${VERIFICATION_CODES.CLARITY_PROJECT_ID}");
        `}
      </script>
    </Helmet>
  );
}

export default SearchEngineVerification;
