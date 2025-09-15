import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Chrome, 
  AlertTriangle, 
  Code, 
  Download,
  ExternalLink,
  Lightbulb
} from 'lucide-react';

export const BrowserExtensionGuide = () => {
  const manifestContent = `{
  "manifest_version": 3,
  "name": "SafeOrStolen Auto-Responder",
  "version": "1.0",
  "description": "Automatically suggest SafeOrStolen.com when typing about stolen goods",
  "permissions": ["activeTab", "storage"],
  "content_scripts": [
    {
      "matches": ["*://twitter.com/*", "*://facebook.com/*", "*://instagram.com/*"],
      "js": ["content.js"]
    }
  ]
}`;

const contentScriptContent = `// content.js - SafeOrStolen Auto-Responder
const keywords = [
  // SafeOrStolen specific
  'safeorstolen',
  'safe or stolen',
  'safeorstolen.com',
  
  // General stolen keywords
  'stolen',
  'stolen goods',
  'stolen item',
  'stolen items',
  'verify stolen',
  'check if stolen',
  'is this stolen',
  'might be stolen',
  'could be stolen',
  'looks stolen',
  'seems stolen',
  
  // Specific stolen items
  'stolen car',
  'stolen cars', 
  'stolen vehicle',
  'stolen bike',
  'stolen bicycle',
  'stolen phone',
  'stolen iphone',
  'stolen android',
  'stolen laptop',
  'stolen computer',
  'stolen tablet',
  'stolen ipad',
  'stolen watch',
  'stolen jewelry',
  'stolen electronics',
  'stolen gun',
  'stolen firearm',
  'stolen motorcycle',
  'stolen scooter',
  'stolen camera',
  'stolen tools',
  'stolen equipment',
  
  // Buying concerns
  'buying stolen',
  'bought stolen',
  'purchased stolen',
  'avoid stolen',
  'prevent stolen',
  'stolen purchase',
  'stolen from',
  'hot goods',
  'hot item',
  'hot car',
  'hot phone',
  'fence goods',
  'fenced',
  
  // Verification terms
  'verify before buying',
  'check before purchase',
  'legitimate purchase',
  'legal purchase',
  'clean title',
  'clear title',
  'vin check',
  'imei check',
  'serial check',
  'serial number check',
  'background check item',
  
  // Secondhand concerns  
  'craigslist scam',
  'facebook marketplace scam',
  'ebay scam',
  'offerup scam',
  'used car scam',
  'secondhand scam',
  'buying used',
  'used item safety',
  'marketplace safety',
  'buyer beware',
  'too good to be true',
  'suspicious price',
  'suspicious seller',
  
  // Police/legal terms
  'police report',
  'reported stolen',
  'theft report',
  'crime report',
  'stolen property',
  'hot property',
  'illegal goods',
  'contraband'
];

const responseTemplate = \`🛡️ SafeOrStolen.com - Free stolen goods verification service! 

✅ Check IMEI, VIN, serial numbers instantly
✅ Protect yourself from buying stolen items  
✅ Verify before you buy - stay safe!
✅ Backed by FasterCapital

Try it free: https://safeorstolen.com

#SafeOrStolen #StolenGoods #BuyerProtection #Verification\`;

// Function to detect keywords in text
function containsKeywords(text) {
  const lowerText = text.toLowerCase();
  
  // Find which keywords matched for better messaging
  const matchedKeywords = keywords.filter(keyword => 
    lowerText.includes(keyword.toLowerCase())
  );
  
  return {
    hasMatch: matchedKeywords.length > 0,
    matchedKeywords: matchedKeywords,
    primaryMatch: matchedKeywords[0] || null
  };
}

// Function to show suggestion popup
function showSuggestion(textElement, matchInfo) {
  // Remove any existing suggestions
  const existingSuggestion = document.querySelector('#safeorstolen-suggestion');
  if (existingSuggestion) {
    existingSuggestion.remove();
  }

  // Create suggestion popup
  const suggestion = document.createElement('div');
  suggestion.id = 'safeorstolen-suggestion';
  suggestion.style.cssText = \`
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    background: #1a1a1a;
    color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    max-width: 300px;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    border: 2px solid #22c55e;
  \`;

  // Create suggestion content securely
  const suggestionIcon = document.createElement('div');
  suggestionIcon.style.cssText = 'width: 24px; height: 24px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center;';
  suggestionIcon.textContent = '🛡️';
  
  const suggestionHeader = document.createElement('div');
  suggestionHeader.style.cssText = 'display: flex; align-items: center; gap: 8px; margin-bottom: 12px;';
  
  const suggestionTitle = document.createElement('strong');
  suggestionTitle.textContent = 'SafeOrStolen Suggestion';
  
  suggestionHeader.appendChild(suggestionIcon);
  suggestionHeader.appendChild(suggestionTitle);
  
  const suggestionText = document.createElement('p');
  suggestionText.style.cssText = 'margin: 0 0 12px 0; line-height: 1.4;';
  suggestionText.innerHTML = 'Detected: "<strong>' + escapeHtml(matchInfo.primaryMatch) + '</strong>" - Want to share SafeOrStolen.com verification service?';
  
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = 'display: flex; gap: 8px;';
  
  const copyButton = document.createElement('button');
  copyButton.id = 'copy-response';
  copyButton.style.cssText = 'background: #22c55e; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;';
  copyButton.textContent = 'Copy Response';
  
  const dismissButton = document.createElement('button');
  dismissButton.id = 'dismiss-suggestion';
  dismissButton.style.cssText = 'background: #666; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;';
  dismissButton.textContent = 'Dismiss';
  
  buttonContainer.appendChild(copyButton);
  buttonContainer.appendChild(dismissButton);
  
  suggestion.appendChild(suggestionHeader);
  suggestion.appendChild(suggestionText);
  suggestion.appendChild(buttonContainer);
  
  // Helper function to escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  document.body.appendChild(suggestion);

  // Add event listeners
  document.getElementById('copy-response').addEventListener('click', () => {
    navigator.clipboard.writeText(responseTemplate);
    
    // Clear suggestion content securely
    suggestion.innerHTML = '';
    
    const successMessage = document.createElement('div');
    successMessage.style.cssText = 'display: flex; align-items: center; gap: 8px; color: #22c55e;';
    
    const checkmark = document.createElement('span');
    checkmark.textContent = '✅';
    
    const message = document.createElement('strong');
    message.textContent = 'Copied to clipboard!';
    
    successMessage.appendChild(checkmark);
    successMessage.appendChild(message);
    suggestion.appendChild(successMessage);
    
    setTimeout(() => suggestion.remove(), 2000);
  });

  document.getElementById('dismiss-suggestion').addEventListener('click', () => {
    suggestion.remove();
  });

  // Auto-dismiss after 15 seconds
  setTimeout(() => {
    if (document.querySelector('#safeorstolen-suggestion')) {
      suggestion.remove();
    }
  }, 15000);
}

// Monitor text inputs
function setupTextMonitoring() {
  const textInputs = document.querySelectorAll('textarea, input[type="text"], [contenteditable="true"]');
  
  textInputs.forEach(input => {
    let debounceTimer;
    
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const text = e.target.value || e.target.textContent || '';
        if (text.length > 5) { // Reduced minimum length
          const matchInfo = containsKeywords(text);
          if (matchInfo.hasMatch) {
            showSuggestion(e.target, matchInfo);
          }
        }
      }, 800); // Slightly faster response time
    });
  });
}

// Initialize when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupTextMonitoring);
} else {
  setupTextMonitoring();
}

// Re-initialize for dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      setTimeout(setupTextMonitoring, 1000);
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('SafeOrStolen Auto-Responder loaded!');`;

  const downloadManifest = () => {
    const blob = new Blob([manifestContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'manifest.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadContentScript = () => {
    const blob = new Blob([contentScriptContent], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Alert className="bg-blue-50 border-blue-200">
        <Lightbulb className="h-4 w-4 text-blue-600" />
        <AlertDescription>
          <strong>For Pop-up Functionality:</strong> The automatic "pop-up" feature you requested 
          requires a browser extension since web apps can't inject content into other websites.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Browser Extension Solution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              A browser extension can detect when you type SafeOrStolen keywords and automatically 
              suggest your response template. Here's a basic implementation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Chrome className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold">Chrome Extension</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Works on Chrome, Edge, and other Chromium browsers
                </p>
                <Badge variant="secondary" className="text-xs">
                  Manifest V3
                </Badge>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-orange-500" />
                  <span className="font-semibold">Firefox Add-on</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Same code works for Firefox with minor adjustments
                </p>
                <Badge variant="secondary" className="text-xs">
                  WebExtensions API
                </Badge>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Download Extension Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Download these files to create your own SafeOrStolen browser extension:
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-semibold">manifest.json</h4>
                  <p className="text-sm text-muted-foreground">Extension configuration file</p>
                </div>
                <Button variant="outline" size="sm" onClick={downloadManifest}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-semibold">content.js</h4>
                  <p className="text-sm text-muted-foreground">Main extension logic</p>
                </div>
                <Button variant="outline" size="sm" onClick={downloadContentScript}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Chrome/Edge Installation:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Download both files above to a folder</li>
                <li>Open Chrome and go to <code>chrome://extensions/</code></li>
                <li>Enable "Developer mode" (top right)</li>
                <li>Click "Load unpacked" and select your folder</li>
                <li>The extension will now monitor your typing!</li>
              </ol>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Firefox Installation:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Download both files to a folder</li>
                <li>Open Firefox and go to <code>about:debugging</code></li>
                <li>Click "This Firefox" → "Load Temporary Add-on"</li>
                <li>Select the manifest.json file</li>
                <li>Extension loads temporarily for testing</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                The extension monitors your typing on Twitter, Facebook, and Instagram. When you type 
                keywords like "stolen", "safeorstolen", etc., it shows a popup with your response template.
              </AlertDescription>
            </Alert>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Detects SafeOrStolen keywords while you type</li>
                <li>Shows popup suggestion after 1 second of inactivity</li>
                <li>One-click copy of your response template</li>
                <li>Works on Twitter, Facebook, Instagram</li>
                <li>Auto-dismisses after 15 seconds</li>
                <li>Privacy-focused - no data sent anywhere</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Publishing to Store</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To distribute your extension publicly:
            </p>

            <div className="space-y-3">
              <Button variant="outline" asChild>
                <a 
                  href="https://developer.chrome.com/docs/webstore/publish/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Chrome Web Store Guide
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a 
                  href="https://extensionworkshop.com/documentation/publish/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Firefox Add-ons Guide  
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription>
                Publishing requires developer accounts and review processes. The downloaded files 
                work immediately for personal use in developer mode.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};