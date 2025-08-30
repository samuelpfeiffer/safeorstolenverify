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
  'safeorstolen',
  'safe or stolen', 
  'stolen',
  'safeorstolen.com',
  'stolen goods',
  'verify stolen'
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
  return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
}

// Function to show suggestion popup
function showSuggestion(textElement) {
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

  suggestion.innerHTML = \`
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
      <div style="width: 24px; height: 24px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        🛡️
      </div>
      <strong>SafeOrStolen Suggestion</strong>
    </div>
    <p style="margin: 0 0 12px 0; line-height: 1.4;">
      Detected keywords about stolen goods! Want to share SafeOrStolen.com?
    </p>
    <div style="display: flex; gap: 8px;">
      <button id="copy-response" style="background: #22c55e; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">
        Copy Response
      </button>
      <button id="dismiss-suggestion" style="background: #666; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">
        Dismiss
      </button>
    </div>
  \`;

  document.body.appendChild(suggestion);

  // Add event listeners
  document.getElementById('copy-response').addEventListener('click', () => {
    navigator.clipboard.writeText(responseTemplate);
    suggestion.innerHTML = \`
      <div style="display: flex; align-items: center; gap: 8px; color: #22c55e;">
        <span>✅</span>
        <strong>Copied to clipboard!</strong>
      </div>
    \`;
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
        if (text.length > 10 && containsKeywords(text)) {
          showSuggestion(e.target);
        }
      }, 1000); // Wait 1 second after user stops typing
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